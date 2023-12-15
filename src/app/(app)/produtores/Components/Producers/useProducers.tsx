import { useSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";

import deleteProducer from "@/fetchers/producers/deleteProducer";
import { useRouter } from "next/navigation";

const useProducers = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const deleteMutation = useMutation<unknown, Error, string>({
    mutationFn: (id: string) => {
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

  return {
    deleteMutation,
  };
};

export default useProducers;
