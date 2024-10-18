"use client";

import useSWR from "swr";
import { AssetId } from "@/types/assetId";
import { useState, useEffect } from "react";
import { formatAssetHistory } from "@/lib/formatAssetHistory";

export const useFetchAssetHistoryById = (assetId: AssetId) => {
    const [timestamps, setTimestamps] = useState<{ startTimestamp: number, endTimestamp: number } | null>(null);
    const [fnExecuted, setFnExecuted] = useState<boolean>(false);

    const getTimestamps = () => {
        if (!fnExecuted) {
            const endTimestamp: number = Date.now();
            const startTimestamp: number = endTimestamp - (8.64 * (10 ** 7));
            setFnExecuted(true);
            setTimestamps({ startTimestamp, endTimestamp });
        }
    };

    useEffect(() => {
        getTimestamps();
    }, []);


    const url = timestamps
        ? `https://api.coincap.io/v2/assets/${assetId}/history?interval=h2&start=${timestamps.startTimestamp}&end=${timestamps.endTimestamp}`
        : null;
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading }: { data: any, error: any, isLoading: boolean } = useSWR(
        url,
        fetcher,
    );

    if (data) {
        const assetHistory = formatAssetHistory(assetId, data.data);
        // console.log(assetHistory);
        return { assetHistory, error, isLoading };
    }

    return { error, isLoading };
};
