import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(
    `http://localhost:4000/admins?email=${body.data.email}&password=${body.data.password}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (data.lenght === 0) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }

  return Response.json({
    token: btoa(
      JSON.stringify({
        id: data[0].id,
        name: data[0].name,
        email: data[0].email,
      })
    ),
  });
}
