"use client";

import Link from "next/link";

import Button from "@/Components/Button";
import Input from "@/Components/Input";
import useLogin from "./useLogin";

const Login = () => {
  const { formUtils } = useLogin();
  const { handleSubmit, handleForm, register, errors } = formUtils;

  return (
    <form className="flex flex-col items-center gap-y-4" onSubmit={handleSubmit(handleForm)}>
      <h1 className="font-bold">Login</h1>

      <div className="flex flex-col gap-y-2">
        <Input
          {...register("email")}
          label="E-mail"
          placeholder="mail@example.com"
          type="text"
          helperText={errors.email?.message}
        />

        <Input
          {...register("password")}
          label="Senha"
          placeholder="******"
          type="password"
          helperText={errors.password?.message}
        />
      </div>

      <Button className="w-full" type="submit">
        Entrar
      </Button>
    </form>
  );
};

export default Login;
