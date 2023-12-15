import { fetchWrapper } from "@/services/fetchWrapper";

interface GetFarmsByStateProps {
  farmsByState: Record<string, number>;
}

const getFarmsByState = async () => {
  const { farmsByState } = await fetchWrapper<GetFarmsByStateProps>(
    "/farms-by-state",
    {
      cache: "no-cache",
    }
  );

  return farmsByState;
};

export default getFarmsByState;
