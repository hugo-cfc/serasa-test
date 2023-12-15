import { fetchWrapper } from "@/services/fetchWrapper";

import Producer from "@/types/Producer";

interface PatchProducerData {
  producerId: string;
  data: Partial<Producer>;
}

const patchProducer = async ({ producerId, data }: PatchProducerData) => {
  const res = await fetchWrapper<{data: Producer}>( `/producers/${producerId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  });

  return res;
};

export default patchProducer;
