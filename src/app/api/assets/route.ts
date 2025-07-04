import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const API_KEY = process.env.API_KEY;

    const { searchParams } = new URL(request.url);

    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");

    let coincapUrl = "https://rest.coincap.io/v3/assets";

    const coincapQueryParams = new URLSearchParams();

    if (limit) {
        const parsedLimit = parseInt(limit, 10);
        if (!isNaN(parsedLimit) && parsedLimit > 0) {
            coincapQueryParams.append("limit", parsedLimit.toString());
        } else {
            console.warn(`Invalid limit parameter received: ${limit}`);
        }
    }
    if (offset) {
        const parsedOffset = parseInt(offset, 10);
        if (!isNaN(parsedOffset) && parsedOffset >= 0) {
            coincapQueryParams.append("offset", parsedOffset.toString());
        } else {
            console.warn(`Invalid offset parameter received: ${offset}`);
        }
    }

    const queryString = coincapQueryParams.toString();
    if (queryString) {
        coincapUrl = `${coincapUrl}?${queryString}`;
    }

    try {
        const res = await fetch(coincapUrl, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                Accept: "application/json",
            },
            cache: 'no-store'
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(
                `Error from Coincap API (${res.status}): ${errorText}`
            );
            return NextResponse.json(
                {
                    error: `Failed to fetch from external API. Status: ${res.status}`,
                    details: errorText,
                },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error: unknown) {
        console.error("Internal server error when fetching from Coincap:", error);
        if (error instanceof Error) {
            if (error.name === 'FetchError' || error.name === 'TypeError') {
                console.error("Likely a network error or invalid URL:", error.message);
            } else {
                console.error("Caught a standard Error:", error.message);
            }
        } else {
            console.error("Caught an unexpected non-Error value:", error);
        }
    }
}