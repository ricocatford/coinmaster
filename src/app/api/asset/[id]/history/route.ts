import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const { searchParams } = new URL(request.url);
    const interval = searchParams.get("interval");
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    const API_KEY = process.env.API_KEY;

    try {
        const res = await fetch(
            `https://rest.coincap.io/v3/assets/${id}/history?interval=${interval}&start=${start}&end=${end}`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    Accept: 'application/json',
                },
            }
        );

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
    }
}
