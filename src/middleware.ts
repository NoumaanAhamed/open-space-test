import { auth } from "@/auth"

// This is the middleware that will run for all requests 
// export { auth as middleware } from "@/auth" 

// Add custom logic to the middleware 
export default auth((req) => {
    const IS_LOGGED_IN = !!req.auth
    const PATH_NAME = req.nextUrl.pathname
    console.log('Path:', PATH_NAME)
    console.log('User is logged in:', IS_LOGGED_IN)
})

// Config for the middleware to run on specific routes 
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}