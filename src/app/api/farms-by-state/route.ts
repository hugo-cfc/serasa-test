export async function GET() {
  let farmsByState: Record<string, number> = {};
  const res = await fetch("http://localhost:4000/farms", {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  for (const farm of data) {
    const state = farm.state;

    if (farmsByState[state]) {
      farmsByState[state]++;
    } else {
      farmsByState[state] = 1;
    }
  }

  return Response.json({ farmsByState });
}
