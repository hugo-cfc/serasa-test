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
import { useQuery, useMutation, useQueryClient } from "react-query";

import formatCpf from "@/utils/formatCpf";
import isValidCpf from "@/utils/isValidCpf";
import isCnpjValid from "@/utils/isValidCnpj";

import getProducerById from "@/fetchers/producers/getProducerById";
import patchProducer from "@/fetchers/producers/patchProducer";
import Producer from "@/types/Producer";
import postProducer from "@/fetchers/producers/postProducer";
import deleteProducer from "@/fetchers/producers/deleteProducer";

const useFormHook = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id }: { id: string } = useParams();
  const pathname = usePathname();

  const [crops, setCrops] = useState<string[]>([]);
  const [farmId, setFarmId] = useState<number>();

  const { data } = useQuery("producer", () => {
    if (isCreate) return;

    return getProducerById(id).then((producer) => {
      setFarmId(producer.farms[0].id);
      return producer;
    });
  });

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

  const creationMutation = useMutation<
    unknown,
    Error,
    { data: Omit<Producer, "id" | "farms"> }
  >({
    mutationFn: ({ data }) => {
      return postProducer({ data }).then((response) => response.data);
    },
    onSuccess: () => {
      enqueueSnackbar({
        variant: "success",
        message: "Produtor criado com sucesso!",
      });

      router.push("/produtores");
    },

    onError: () => {
      enqueueSnackbar({
        variant: "error",
        message: "Erro ao criar produtor!",
      });
    },
  });

  const deleteMutation = useMutation<unknown, Error>({
    mutationFn: () => {
      return deleteProducer(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["producers"] });

      enqueueSnackbar({
        variant: "success",
        message: "Produtor excluído com sucesso!",
      });

      router.push("/produtores");
    },

    onError: () => {
      enqueueSnackbar({
        variant: "error",
        message: "Erro ao excluir produtor!",
      });
    },
  });

  const isCreate = searchParams.has("isCreate");
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
    area: z
      .string()
      .min(1, { message: "Informe a área" })
      .refine(
        (value) => {
          const { arableArea, vegetationArea } = getValues();
          const totalArea = Number(arableArea) + Number(vegetationArea);
          if (totalArea > Number(value)) {
            return false;
          }
          return true;
        },
        {
          message:
            "Soma de área agrícultável e vegetação maior que sua área total",
        }
      ),
    arableArea: z.string().min(1, { message: "Informe a área agricultável" }),
    vegetationArea: z
      .string()
      .min(1, { message: "Informe a área de vegetação em hectares" }),
    plantedCrops: z
      .array(z.string())
      .nonempty({ message: "Escolha pelo menos uma opção" }),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  type FormProps = z.infer<typeof schema>;

  useEffect(() => {
    if (isCreate) return reset();

    reset({
      name: data?.name,
      cpfcnpj: formatCpf(String(data?.cpfcnpj)),
      farmName: data?.farms[0].farmName,
      city: data?.farms[0].city,
      state: data?.farms[0].state,
      area: String(data?.farms[0].area),
      arableArea: String(data?.farms[0].arableArea),
      vegetationArea: String(data?.farms[0].vegetationArea),
      plantedCrops: data?.farms[0].plantedCrops,
    });

    setCrops(data?.farms[0].plantedCrops || []);
  }, [data, isCreate, pathname]);

  const handleEdit = useCallback(() => {
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("edit", "");

    router.push(`${pathname}?${queryParams}`);
  }, [searchParams, pathname]);

  const handleAddCrop = (crop: string) => {
    if (crops?.includes(crop)) {
      const newCropsArray = crops.filter(
        (existingCrop) => existingCrop !== crop
      );

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
    if (isCreate) {
      return creationMutation.mutate({ data });
    }

    if (isEdit) {
      const finalData = { ...data, farmId };

      return mutation.mutate({ id, data: finalData });
    }
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
    crops,
  };

  return {
    formUtils,
    router,
    isEdit,
    isCreate,
    handleEdit,
    data,
    deleteMutation,
  };
};

export default useFormHook;
