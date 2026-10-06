import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTER_UI_DATABASE_ID as string);
const db = client.db("bangla-news-24");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
     socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOLE_CLIENT_SECRITE_ID as string, 
        }, 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GIHATUB_CLIENT_SERITE as string, 
        },
    },
    database: mongodbAdapter(db, {
        client,
    }),
});