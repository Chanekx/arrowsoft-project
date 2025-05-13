import yup from "@/lib/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const schema = yup.object().shape({
  username: yup.string().required("Required"),
  password: yup.string().required(),
  password2: yup.string().oneOf([yup.ref('password')], "Password must match").required(),
});

type FormValues = yup.InferType<typeof schema>;

export const useHooks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleCreateAccount = async (data: FormValues) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.post("http://localhost:3001/accounts/register", {
        username: data.username,
        password: data.password
      });
      
      if (response.status === 201) {
        // Show success message or redirect
        window.location.href = '/';
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createAccount: handleSubmit(handleCreateAccount),
    control,
    isLoading,
    error
  };
};
