"use client";
import yup from "@/lib/yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

export const useHooks = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (data: FormValues) => {
    console.log('hello' ,data)
  };

  return {
    control,
    handleSubmit,
    handleLogin,
    handleClickShowPassword,
    login: handleSubmit(handleLogin),
  };
};
