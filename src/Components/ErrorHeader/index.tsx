import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import Image from "next/image";

import SerasaLogo from "@/assets/logos/SerasaLogoWhite.png";

import Button from "../Button";

const ErrorHeader = () => {
  const { push } = useRouter();
  const { "serasa-test.token": token } = parseCookies();

  return (
    <nav className="bg-primary px-4 py-3 flex items-center justify-between relative notebook:py-2.5">
      <div
        className={`w-full max-w-7xl m-auto flex items-center ${
          !token ? "justify-between" : "justify-center tablet:justify-between"
        }`}
      >
        <Image
          src={SerasaLogo}
          alt="Serasa"
          className="w-16 tablet:w-24 ml-3"
          priority
        />

        {!token && (
          <Button variant="filledSecondary" onClick={() => push("/")}>
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

export default ErrorHeader;
