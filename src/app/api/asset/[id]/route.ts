import { NextResponse } from 'next/server';
import "dotenv/config"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const API_KEY = process.env.API_KEY;

    try {
        const res = await fetch(`https://rest.coincap.io/v3/assets/${id}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                Accept: 'application/json',
            },
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch asset' }, { status: 500 });
    }
}
