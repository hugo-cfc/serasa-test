import { useCallback, useEffect, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "react-query";

import formatCpf from "@/utils/formatCpf";
import isValidCpf from "@/utils/isValidCpf";
import isCnpjValid from "@/utils/isValidCnpj";

import getProducerById from "@/fetchers/producers/getProducerById";
import patchProducer from "@/fetchers/producers/patchProducer";
import Producer from "@/types/Producer";

const useFormHook = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id }: { id: string } = useParams();
  const pathname = usePathname();

  const [crops, setCrops] = useState<string[]>([]);

  const { data } = useQuery("producer", () => getProducerById(id));
  const farmId = data?.farms[0].id;
  const mutation = useMutation<
    unknown,
    Error,
    { id: string; data: Partial<Producer> }
  >({
    mutationFn: ({ id, data }) => {
      return patchProducer({ producerId: id, data }).then(
        (response) => response.data
      );
    },
    onSuccess: () => {
      enqueueSnackbar({
        variant: "success",
        message: "Produtor alterado com sucesso!",
      });

      router.push("/produtores");
    },

    onError: () => {
      enqueueSnackbar({
        variant: "error",
        message: "Erro ao alterar produtor!",
      });
    },
  });

  const isCreate = searchParams.has("create");
  const isEdit = searchParams.has("edit");

  const schema = z.object({
    name: z.string().min(6, { message: "Digite o nome completo" }),
    cpfcnpj: z.string().refine(
      (value) => {
        if (value.length === 0) return false;

        if (value.length > 14) return isCnpjValid(value.replace(/\D/g, ""));

        return isValidCpf(value.replace(/\D/g, ""));
      },
      { message: "CPF ou CNPJ inválido" }
    ),
    farmName: z.string().min(6, { message: "Digite o nome completo" }),
    city: z.string().min(6, { message: "Digite a cidade" }),
    state: z.string().min(2, { message: "Informe o estado" }),
    area: z.number().min(2, { message: "Informe a área" }),
    arableArea: z.number().min(1, { message: "Informe a área agricultável" }),
    vegetationArea: z
      .number()
      .min(1, { message: "Informe a área de vegetação em hectares" }),
    plantedCrops: z.array(z.string()).nonempty({ message: "Escolha pelo menos uma opção"})
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  type FormProps = z.infer<typeof schema>;

  useEffect(() => {
    if (isCreate) return;

    reset({
      name: data?.name,
      cpfcnpj: formatCpf(String(data?.cpfcnpj)),
      farmName: data?.farms[0].farmName,
      city: data?.farms[0].city,
      state: data?.farms[0].state,
      area: data?.farms[0].area,
      arableArea: data?.farms[0].arableArea,
      vegetationArea: data?.farms[0].vegetationArea,
      plantedCrops: data?.farms[0].plantedCrops
    });

    setCrops(data?.farms[0].plantedCrops || []);
  }, [data, isCreate]);

  const handleEdit = useCallback(() => {
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("edit", "");

    router.push(`${pathname}?${queryParams}`);
  }, [searchParams, pathname]);

  const handleDelete = useCallback(() => {}, []);

  const handleAddCrop = (crop: string) => {
    if (crops?.includes(crop)) {
      const newCropsArray = crops.filter(existingCrop => existingCrop !== crop);

      setCrops(() => {
        setValue("plantedCrops", newCropsArray as [string, ...string[]]);
        return newCropsArray;
      });
    } else {
      setCrops((prevState) => {
        const newCropsArray = [crop, ...prevState];
        setValue("plantedCrops", newCropsArray as [string, ...string[]]);
        return newCropsArray;
      });
    }
  };

  const handleForm = async (data: FormProps) => {
    const finalData = { ...data, farmId };

    mutation.mutate({ id, data: finalData });
  };

  const cropsOptions = ["Soja", "Milho", "Algodão", "Café", "Cana de Açucar"];

  const formUtils = {
    schema,
    handleForm,
    register,
    handleSubmit,
    control,
    errors,
    cropsOptions,
    handleAddCrop,
    crops
  };

  return { formUtils, router, isEdit, handleEdit, handleDelete, data };
};

export default useFormHook;
