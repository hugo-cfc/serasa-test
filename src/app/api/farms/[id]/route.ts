import { NextRequest } from "next/server";

export async function GET(req: NextRequest,
  { params }: { params: { id: string } }) {
  const farmId = params.id;

  const res = await fetch(`http://localhost:4000/farms/${farmId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return Response.json({ data });
}

export async function PATCH(req: NextRequest,
  { params }: { params: { id: string } }) {
  const farmId = params.id;
  const body = await req.json();
  const updateRes = await fetch(`http://localhost:4000/farms/${farmId}`, {
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
