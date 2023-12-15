import { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  const res = await fetch("http://localhost:4000/producers?_embed=farms", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return Response.json({ data });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  await fetch("http://localhost:4000/producers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuidv4(),
      name: body.data.name,
      cpfcnpj: body.data.cpfcnpj,
    }),
  }).then(async data => {
    const updateData = await data.json();

    await fetch("http://localhost:4000/farms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        producerId: updateData.id,
        farmName: body.data.farmName,
        city: body.data.city,
        state: body.data.state,
        area: body.data.area,
        arableArea: body.data.arableArea,
        vegetationArea: body.data.vegetationArea,
        plantedCrops: body.data.plantedCrops,
      }),
    });

    return data;
  });

  return Response.json({
    id: uuidv4(),
    name: body.name,
    cpfcnpj: body.cpfcnpj,
  });
}
