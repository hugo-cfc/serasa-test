"use client";

import Button from "@/Components/Button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const NewProducer = () => {
  const router = useRouter();

  return (
    <Button
      variant="filledSecondary"
      onClick={() => router.push("/produtores/cadastro?isCreate=")}
    >
      <PlusIcon />

      <span className="hidden tablet:block">Novo Produtor</span>
    </Button>
  );
};

export default NewProducer;
