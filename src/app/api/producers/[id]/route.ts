import { NextRequest } from "next/server";

export async function GET(req: NextRequest,
  { params }: { params: { id: string } }) {
  const producerId = params.id;

  const res = await fetch(`http://localhost:4000/producers/${producerId}?_embed=farms`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return Response.json({ data });
}

export async function PATCH(req: NextRequest,
  { params }: { params: { id: string } }) {
  const producerId = params.id;
  const body = await req.json();
  const updateRes = await fetch(`http://localhost:4000/producers/${producerId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.name,
      cpfcnpj: body.cpfcnpj,
      farms: [
        {
          farmName: body.data.farmName,
          city: body.data.city,
          state: body.data.state,
          area: body.data.area,
          arableArea: body.data.arableArea,
          vegetationArea: body.data.vegetationArea,
          // plantedCrops: body.data.plantedCrops,
        }
      ]
    }),
  });

  await fetch(`http://localhost:4000/farms/${body.data.farmId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      farmName: body.data.farmName,
      city: body.data.city,
      state: body.data.state,
      area: body.data.area,
      arableArea: body.data.arableArea,
      vegetationArea: body.data.vegetationArea,
      // plantedCrops: body.data.plantedCrops,
    }),
  });

  const updateData = await updateRes.json();

  return Response.json({ updateData });
}
