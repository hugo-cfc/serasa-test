import Producer from "@/types/Producer";

import { fetchWrapper } from "@/services/fetchWrapper";

const deleteProducer = async (id: string) => {
  const { data } = await fetchWrapper<{ data:Producer }>(
    `/producers/${id}`, {
      method: "DELETE",
    }
  );

  return data;
};

export default deleteProducer;
