"use client";
import yup from "@/lib/yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { use, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

export const useHooks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);


  const router = useRouter();
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async (data: FormValues) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username: data.username,
        password: data.password
      });

      if (response.status === 200) {
       router.push('/pages/homepage')
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    handleLogin,
    handleClickShowPassword,
    showPassword,
    isLoading,
    error,
    login: handleSubmit(handleLogin),
  };
};
