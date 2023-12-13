import Image from "next/image";

import Login from "../Login";

import SerasaLogo from "@/assets/logos/SerasaLogo.png";

import AuthFormContainer from "@/Components/AuthFormContainer";

const LoginContainer = () => {
  return (
    <AuthFormContainer className="flex flex-col tablet:flex-row tablet:justify-between items-center">
      <Image
        src={SerasaLogo}
        alt="Serasa"
        className="w-24 mb-4 tablet:mb-0 tablet:w-56"
        priority
      />

      <div className="h-28 w-0.5 bg-primary hidden tablet:block" />

      <Login />
    </AuthFormContainer>
  );
};

export default LoginContainer;
