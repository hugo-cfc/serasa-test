import { fetchWrapper } from "@/services/fetchWrapper";

import Producer from "@/types/Producer";

interface PatchProducerData {
  data: Partial<Producer>;
}

const postProducer = async ({ data }: PatchProducerData) => {
  const res = await fetchWrapper<{data: Producer}>( "/producers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  });

  return res;
};

export default postProducer;
