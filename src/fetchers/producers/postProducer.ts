import { fetchWrapper } from "@/services/fetchWrapper";

import Producer from "@/types/Producer";

interface PostProducerData {
  data: Partial<Producer>;
}

const postProducer = async ({ data }: PostProducerData) => {
  const res = await fetchWrapper<{ data: Producer }>("/producers", {
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
