"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";
import { formatAssetHistory } from "@/lib/formatAssetHistory";
import { AssetId } from "@/types/assetId";
import "dotenv/config";

export const useFetchAssetsHistoryById = (assetIds: AssetId[]) => {
    const [timestamps, setTimestamps] = useState<{
        startTimestamp: number;
        endTimestamp: number;
    } | null>(null);
    const [fnExecuted, setFnExecuted] = useState<boolean>(false);

    const getTimestamps = () => {
        if (!fnExecuted) {
            const endTimestamp: number = Date.now();
            const startTimestamp: number =
                endTimestamp - 8.64 * (10 ** 7 * 180);
            setFnExecuted(true);
            setTimestamps({ startTimestamp, endTimestamp });
        }
    };

    useEffect(() => {
        getTimestamps();
    }, []);

    const fetchAssetsHistory = async () => {
        if (!timestamps) return null;

        const { startTimestamp, endTimestamp } = timestamps;

        const headers = {
            Authorization:
                `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            Accept: "application/json",
        };

        const promises = assetIds.map((assetId) =>
            fetch(
                `https://rest.coincap.io/v3/assets/${assetId}/history?interval=d1&start=${startTimestamp}&end=${endTimestamp}`,
                { headers }
            ).then((res) => res.json())
        );

        const results = await Promise.all(promises);

        return results.map((result, index) => {
            const assetData = result.data.filter(
                (_: any, index: number) => index % 30 === 0
            );
            return formatAssetHistory(assetIds[index], assetData);
        });
    };

    const { data, error } = useSWR(
        timestamps ? ["multiple-assets", timestamps, assetIds] : null,
        fetchAssetsHistory,
        {
            revalidateOnFocus: false,
        }
    );

    const isLoading = !data;

    if (data) {
        const assetsHistory: any[] = [];
        const firstAssetData = data[0];

        firstAssetData.forEach((entry: any, i: number) => {
            const date = entry.date;
            const chartEntry: { date: string;[key: string]: number | string } =
            {
                date,
            };

            assetIds.forEach((assetId, index) => {
                chartEntry[assetId] = data[index][i]?.price ?? 0;
            });

            assetsHistory.push(chartEntry);
        });

        return { assetsHistory, isLoading: false, error: null };
    }

    return { assetsHistory: null, isLoading, error };
};
