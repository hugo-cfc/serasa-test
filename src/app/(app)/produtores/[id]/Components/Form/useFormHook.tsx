import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";

import isValidCpf from "@/utils/isValidCpf";
import isCnpjValid from "@/utils/isValidCnpj";

const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const schema = z.object({
    name: z.string().min(6, { message: "Digite o nome completo" }),
    cpf: z.string().refine(
      (value) => {
        if (value.length === 0) return false;

        if (value.length > 11) return isCnpjValid(value.replace(/\D/g, ""));

        return isValidCpf(value.replace(/\D/g, ""));
      },
      { message: "CPF ou CNPJ inválido" }
    ),
    farmName: z.string().min(6, { message: "Digite o nome completo" }),
    city: z.string().min(6, { message: "Digite a cidade" }),
    state: z.string().min(2, { message: "Informe o estado" }),
    area: z.string().min(2, { message: "Informe a área" }),
    arableArea: z.number().min(1, { message: "Informe a área agricultável" }),
    vegetationArea: z
      .number()
      .min(1, { message: "Informe a área de vegetação em hectares" }),
    plantedCrops: z
      .string()
      .min(1, { message: "Informe as culturas plantadas" }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>({ mode: "all", resolver: zodResolver(schema) });

  type FormProps = z.infer<typeof schema>;

  const handleForm = async (data: FormProps) => {
    router.push("/");
  };

  const formUtils = {
    schema,
    handleForm,
    register,
    handleSubmit,
    control,
    errors,
  };

  return { formUtils, router };
};

export default useLogin;
