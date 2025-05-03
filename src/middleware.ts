import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/list-destination/all", request.url));
}

export const config = {
  matcher: ["/list-destination"],
};
