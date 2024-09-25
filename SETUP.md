```sh
bun --version
# Install bun from https://bun.sh/docs/installation
# or Update bun to the latest version
curl -fsSL https://bun.sh/install | bash
bun upgrade
```

```sh
# Create a repository on GitHub.
git clone project-url
cd project
```

```sh
# Initialize a new project from https://nextjs.org/docs/getting-started/installation
bunx create-next-app@latest . # Choose default options
bun run dev
```

```sh
# Setup Shadcn from https://ui.shadcn.com/docs/installation/next
bunx --bun shadcn@latest init
bunx shadcn@latest add button

# Setup Dark Mode from https://ui.shadcn.com/docs/dark-mode/next
bun add next-themes
bunx shadcn@latest add dropdown-menu
# Add the Toogle Button in toggle-theme.tsx
```

```sh
# Setup Authjs from https://authjs.dev/getting-started/installation?framework=Next.js
bun add next-auth@beta
bunx auth secret

# Setup OAuth from https://authjs.dev/getting-started/authentication/oauth

# Github OAuth
# 1. Create seperate OAuth App on GitHub from https://github.com/settings/developers for development and production
# 2. Dev -> Homepage URL: http://localhost:3000 and Authorization callback URL: http://localhost:3000/api/auth/callback/github
# 3. Prod -> Homepage URL: https://project-name.vercel.app and Authorization callback URL: https://project-name.vercel.app/api/auth/callback/github
# 4. Add the Client ID and Client Secret in .env.local

# Google OAuth (Refer to https://youtu.be/tgO_ADSvY1I?si=T9iOfUStFfjrJ0o2)
# 1. Create a project on Google Cloud Platform from https://console.cloud.google.com/projectcreate
# 2. Setup OAuth Consent Screen from https://console.cloud.google.com/apis/credentials/consent
# 3. Use http://localhost:3000 as Application Homepage (Change to production URL later)
# 4. Select default scopes like See your primary Google Account email address and two others.
# 5. Go to Credentials from https://console.cloud.google.com/apis/credentials -> Create Credentials -> OAuth Client ID
# 6. Select Web Application -> Name -> Authorized JavaScript origins: http://localhost:3000 and Authorized redirect URIs: http://localhost:3000/api/auth/callback/google
# 7. For production, Authorized JavaScript origins: https://project-name.vercel.app and Authorized redirect URIs: https://project-name.vercel.app/api/auth/callback/google
# 8. Add the Client ID and Client Secret in .env.local

# In middleware.ts, add config from https://clerk.com/docs/references/nextjs/clerk-middleware
```

```sh
# Create sign-in.tsx, sign-out.tsx, and user-profile.tsx
# Showcase simple auth workflow in page.tsx
```

```sh
# Prisma ORM Setup with PostgreSQL from https://authjs.dev/getting-started/adapters/prisma
bun add prisma -d
bun add @prisma/client @auth/prisma-adapter
bunx prisma generate
# 0. Get a PostgreSQL database URL from https://console.aiven.io/
bunx prisma init
# 1. Set the DATABASE_URL in the .env file ( and move other env variables from .env.local to .env )
# 2. Create lib/prisma.ts and add the Prisma Client instance. Then, add the prisma adaptor to ./auth.ts
# 3. Create a prisma schema in ./prisma/schema.prisma consistring of User and Account models ( Ignore the other models as we are using jwt for auth)
# 3.5 In ./auth.ts `session: { strategy: "jwt",}` in NextAuth options
# 4. Run bunx prisma migrate dev --name init to create the database tables ( This will automarically generate the prisma client as well)
bunx prisma migrate dev --name init
# 5. Run prisma generate to generate the Prisma Client manually if needed
bunx prisma generate
# 6. If there are any changes to the schema, run bunx prisma migrate dev --name <name> to create a new migration
bunx prisma studio
# 7. Run bunx prisma studio to view the database in the browser
# 8. In order to reset the database, delete the migrations folder and run the following command
bunx prisma migrate reset
```

```sh
# For Production
# 1. For production Image Optimization with Next.js, run
bun add sharp
# 2. Set AUTH_TRUST_HOST=true in .env
# 3. Run the following commands
bun run build
NODE_ENV=production bun run start
```
