import Producer from "@/types/Producer";

import { fetchWrapper } from "@/services/fetchWrapper";

const getProducers = async () => {
  const { data } = await fetchWrapper<{ data:Producer[] }>(
    "/producers"
  );

  return data;
};

export default getProducers;
