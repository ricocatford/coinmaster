"use client";

import useSWR from "swr";
import { AssetId } from "@/types/assetId";
import "dotenv/config";
import { useEffect, useState } from "react";
import { formatAssetHistory } from "@/lib/formatAssetHistory";

export const useFetchAssetHistoryById = (assetId: AssetId) => {
    const [timestamps, setTimestamps] = useState<{
        startTimestamp: number;
        endTimestamp: number;
    } | null>(null);

    useEffect(() => {
        const endTimestamp = Date.now();
        const startTimestamp = endTimestamp - 24 * 60 * 60 * 1000;
        setTimestamps({ startTimestamp, endTimestamp });
    }, []);

    const headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        Accept: "application/json",
    };

    const url = timestamps
        ? `https://rest.coincap.io/v3/assets/${assetId}/history?interval=h2&start=${timestamps.startTimestamp}&end=${timestamps.endTimestamp}`
        : null;

    const fetcher = (url: string) => fetch(url, { headers }).then((res) => res.json());

    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 3600000,
        revalidateOnFocus: false,
    });

    const isLoading = !data && isValidating;

    console.log(data?.data);

    if (data) {
        const history = formatAssetHistory(data.data);
        return { history, error, isLoading };
    }

    return {
        history: undefined,
        error,
        isLoading
    };
};
