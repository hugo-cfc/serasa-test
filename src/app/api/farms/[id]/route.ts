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
