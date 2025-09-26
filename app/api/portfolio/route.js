import clientPromise from "@/lib/mongo"; // Adjust path as needed
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const client = await clientPromise;
        const DATABASE_NAME = process.env.DATABASE_NAME || "portfolio";
        
        const db = client.db(DATABASE_NAME);
        console.log(db)
        const repositories = await db.collection("repositories").find({}).toArray();
        
        return NextResponse.json(repositories);
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 });
    }
    // No need to close connection with singleton pattern
}