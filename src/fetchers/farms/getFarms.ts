import Farm from "@/types/Farm";

import { fetchWrapper } from "@/services/fetchWrapper";

const getFarms = async () => {
  const { data } = await fetchWrapper<{ data:Farm[] }>(
    "/farms", {cache: "reload"}
  );

  return data;
};

export default getFarms;
