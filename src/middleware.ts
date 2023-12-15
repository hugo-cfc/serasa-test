import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("serasa-test.token")?.value;

  const loginPagesRegexp = /^(\/login)?$/;
  const allAppPages = /\/(produtores)(\/.*)?/;

  if (token) {
    if (request.nextUrl.pathname.match(loginPagesRegexp)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (request.nextUrl.pathname.match(allAppPages)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/produtores/:path*", "/login/:path*", "/"],
};
