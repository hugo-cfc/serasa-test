"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ImageError from "@/assets/images/error.svg";

import ErrorHeader from "@/Components/ErrorHeader";
import Button from "@/Components/Button";

export default function Error() {
  const { push } = useRouter();

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <ErrorHeader />

      <section className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-y-2">
          <Image className="desktop:w-80" src={ImageError} alt="erro" />

          <p className="text-sm text-gray-400">
            Infelizmente não foi possível carregar essa página
          </p>

          <h2 className="text-2xl font-bold">Ops, algo deu errado.</h2>

          <Button className="w-full" onClick={() => push("/")}>
            Tente novamente
          </Button>
        </div>
      </section>
    </div>
  );
}
