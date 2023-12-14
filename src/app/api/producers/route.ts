export async function GET() {
  const res = await fetch("http://localhost:4000/producers?_embed=farms", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return Response.json({ data });
}
