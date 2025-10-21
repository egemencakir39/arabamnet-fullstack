import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export function middleware(req) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("token")?.value;


  const publicPaths = ["/login", "/register", "/api/auth/login", "/api/auth/register", "/favicon.ico", "/_next"];
  if (publicPaths.some((p) => path.startsWith(p))) return NextResponse.next();

  
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const userId = payload.id;
    const isAdmin = payload.isAdmin;


    if (path.startsWith("/admin") && !isAdmin) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    
    if (path.startsWith("/profile")) {
      const pathId = path.split("/")[2]; 
      if (pathId && pathId !== userId) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Token doğrulama hatası:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/admin/:path*", "/profile", "/admin"],
};