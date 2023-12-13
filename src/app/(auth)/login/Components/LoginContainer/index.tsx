import Image from "next/image";

import Login from "../Login";

import SerasaLogo from "@/assets/logos/SerasaLogo.png";

import AuthFormContainer from "@/Components/AuthFormContainer";

const LoginContainer = () => {
  return (
    <AuthFormContainer className="flex justify-between items-center">
      <Image src={SerasaLogo} alt="Serasa" className="w-56" priority />

      <div className="h-28 w-0.5 bg-primary" />

      <Login />
    </AuthFormContainer>
  );
};

export default LoginContainer;
