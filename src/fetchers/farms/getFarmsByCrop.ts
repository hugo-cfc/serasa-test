import { fetchWrapper } from "@/services/fetchWrapper";

interface GetFarmsByCropProps {
  farmsByCrop: Record<string, number>;
}

const getFarmsByCrop = async () => {
  const { farmsByCrop } = await fetchWrapper<GetFarmsByCropProps>(
    "/farms-by-crop",
    {
      cache: "no-cache",
    }
  );

  return farmsByCrop;
};

export default getFarmsByCrop;
