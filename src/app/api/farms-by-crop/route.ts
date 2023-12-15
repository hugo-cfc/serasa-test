import Farm from "@/types/Farm";

export async function GET() {
  let farmsByCrop: Record<string, number> = {};
  const res = await fetch("http://localhost:4000/farms", {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  data.forEach((farm: Farm) => {
    farm.plantedCrops.forEach((crop) => {
      if (farmsByCrop[crop]) {
        farmsByCrop[crop]++;
      } else {
        farmsByCrop[crop] = 1;
      }
    });
  });

  return Response.json({ farmsByCrop });
}
