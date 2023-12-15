import { fetchWrapper } from "@/services/fetchWrapper";

import Farm from "@/types/Farm";

interface PatchFarmData {
  farmId: string;
  data: Farm;
}

const patchFarm = async ({ farmId, data }: Partial<PatchFarmData>) => {
  const res = await fetchWrapper( `/farms/${farmId}`, {
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

export default patchFarm;
