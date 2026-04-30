import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ১. ক্লায়েন্ট ইনিশিয়ালাইজ করুন
const client = new MongoClient(process.env.MONGO_URI);

// ২. কানেকশন হ্যান্ডেল করার জন্য একটি ফাংশন বা সরাসরি কানেক্টেড ক্লায়েন্ট ব্যবহার করুন
// Next.js-এ এই পদ্ধতিটি কানেকশন এরর কমায়
const db = client.db("dragon-news");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client: client, // সরাসরি কানেক্টেড ক্লায়েন্ট দিন
        // databaseName: "dragon-news" // প্রয়োজনে ডাটাবেস নাম এখানেও দিতে পারেন
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        },
    },
});