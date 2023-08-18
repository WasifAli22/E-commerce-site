import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes.
// Make sure to customize the publicRoutes array to include the routes you want to make public.
// For more information, refer to https://clerk.com/docs/nextjs/middleware

export default authMiddleware({
    // This function is executed after the user is authenticated.
    afterAuth(auth, req, evt) {
        // Redirect users who aren't authenticated to the sign-in page,
        // except for public routes.
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        // Lock the "success" page if the user is not authenticated.
        // Redirect to sign-in, except for the "cancel" page.
        if (!auth.userId && req.nextUrl.pathname === "/success") {
            return redirectToSignIn({ returnBackUrl: "/cart" });
        }
    },
    // Define the public routes that don't require authentication.
    publicRoutes: ["/", "/products", "/male", "/female", "/kids", "/:locale/sign-in"],
});

// This configuration defines the routes to which the middleware applies.
export const config = {
    // Use regular expressions to match routes that should be protected.
    // This pattern excludes routes with periods (likely files) and those starting with "_next".
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
