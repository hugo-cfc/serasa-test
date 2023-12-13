"use client";

import Link from "next/link";

import AuthFormContainer from "@/Components/AuthFormContainer";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

import useFormHook from "./useFormHook";

const Form = () => {
  const { formUtils } = useFormHook();
  const { handleSubmit, handleForm, register, errors } = formUtils;

  return (
    <AuthFormContainer className="">
      <h1 className="font-bold text-center">Cadastro</h1>
      <form className="grid grid-cols-12 gap-x-2 gap-y-2" onSubmit={handleSubmit(handleForm)}>
        <h2 className="col-start-1 col-end-13">Dados Pessoais</h2>

        <Input
          containerStyle="col-start-1 col-end-8"
          {...register("email")}
          label="Nome"
          type="text"
          helperText={errors.email?.message}
        />

        <Input
          containerStyle="col-start-8 col-end-13"
          {...register("email")}
          label="E-mail"
          placeholder="mail@example.com"
          type="text"
          helperText={errors.email?.message}
        />

        <Input
          containerStyle="col-start-1 col-end-5"
          {...register("email")}
          label="CPF"
          placeholder="mail@example.com"
          type="text"
          helperText={errors.email?.message}
        />

        <h2 className="col-start-1 col-end-13 mt-4 mb-2">Dados da fazenda</h2>

        <Input
          containerStyle="col-start-1 col-end-7"
          {...register("email")}
          label="Nome da Fazenda"
          type="text"
          helperText={errors.email?.message}
        />
        <Input
          containerStyle="col-start-7 col-end-11"
          {...register("email")}
          label="Cidade"
          type="text"
          helperText={errors.email?.message}
        />

        <Input
          containerStyle="col-start-11 col-end-13"
          {...register("email")}
          label="Estado"
          type="text"
          helperText={errors.email?.message}
        />

        <Input
          containerStyle="col-start-1 col-end-4"
          {...register("email")}
          label="Área total em hectares"
          type="text"
          helperText={errors.email?.message}
        />

        <Input
          containerStyle="col-start-4 col-end-7"
          {...register("email")}
          label="Área agricultável em hectares"
          type="text"
          helperText={errors.email?.message}
        />

        <Input
          containerStyle="col-start-7 col-end-10"
          {...register("email")}
          label="Área de vegetação em hectares"
          type="text"
          helperText={errors.email?.message}
        />

        <Input
          containerStyle="col-start-10 col-end-13"
          {...register("email")}
          label="Culturas plantadas"
          type="text"
          helperText={errors.email?.message}
        />

        <h2 className="col-start-1 col-end-13 mt-4 mb-2">Autenticação</h2>

        <Input
          containerStyle="col-start-1 col-end-5"
          {...register("password")}
          label="Senha"
          placeholder="******"
          type="password"
          helperText={errors.password?.message}
        />

        <Input
          containerStyle="col-start-5 col-end-9"
          {...register("password")}
          label="Confirmar senha"
          placeholder="******"
          type="password"
          helperText={errors.password?.message}
        />

        <div className="col-start-1 col-end-13 flex justify-start gap-x-2 mt-4">
          <Button type="submit">Confirmar</Button>

          <Button variant="filledWarning" type="button">
            Cancelar
          </Button>
        </div>
      </form>
    </AuthFormContainer>
  );
};

export default Form;
