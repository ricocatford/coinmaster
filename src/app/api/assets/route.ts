import { NextResponse } from "next/server";
import "dotenv/config";

export async function GET() {
    const API_KEY = process.env.API_KEY;

    try {
        const res = await fetch("https://rest.coincap.io/v3/assets", {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                Accept: "application/json",
            },
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ error: "Failed to fetch assets" }, { status: 500 });
    }
}
