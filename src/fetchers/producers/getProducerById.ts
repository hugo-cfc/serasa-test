import Producer from "@/types/Producer";

import { fetchWrapper } from "@/services/fetchWrapper";

const getProducerById = async (id: string) => {
  const { data } = await fetchWrapper<{ data:Producer }>(
    `/producers/${id}`
  );

  return data;
};

export default getProducerById;
