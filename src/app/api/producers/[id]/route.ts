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
