import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import { polar, checkout, portal, usage, webhooks } from "@polar-sh/better-auth";
import { polarClient } from "./polar";

export const auth = betterAuth({
 database: prismaAdapter(prisma, {
    provider: "postgresql",
 }),
 emailAndPassword: {
   enabled: true,
   autoSignIn: true,
 },
 socialProviders: {
  github: {
    clientId: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  },
  google: { 
    clientId: process.env.GOOGLE_CLIENT_ID as string, 
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
  }, 
  linkedin: { 
    clientId: process.env.LINKEDIN_CLIENT_ID as string, 
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string, 
  }, 
 },
 plugins: [
  polar({
    client: polarClient,
    createCustomerOnSignUp: true,
    use: [
      checkout({
        products: [
         {
          productId: "11d350ac-2ebf-4faa-864c-70c4baf32e89",
          slug: "pro" // Custom slug for easy reference in Checkout URL, e.g. /checkout/Orchestrion-Pro
         }
        ],
        successUrl: process.env.POLAR_SUCCESS_URL,
        authenticatedUsersOnly: true
       }),
       portal()
      ],
    })
  ]
});