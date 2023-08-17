import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
   
    afterAuth(auth, req, evt) {
        // handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
          return redirectToSignIn({ returnBackUrl: req.url });
        }
        // lock "success" and "cancel" page if user not athenticated
        // || req.nextUrl.pathname === "/canceled"
        if (!auth.userId && (req.nextUrl.pathname === "/success" )) {
            return redirectToSignIn({ returnBackUrl: "/cart" });
        }
      },
      publicRoutes: ["/", "/products" , "/male" , "/female" , "/kids" ,"/:locale/sign-in"],
  });

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  };
