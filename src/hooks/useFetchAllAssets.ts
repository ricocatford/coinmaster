"use client";

import useSWR from "swr";
import { formatAssets } from "@/lib/formatAssets";
import Asset from "@/types/asset";

export const useFetchAllAssets = () => {
    const url: string = "https://api.coincap.io/v2/assets";
    const refreshIntervalTime: number = 5000;
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        url,
        fetcher,
        {
            refreshInterval: refreshIntervalTime,
        }
    );

    if (data) {
        const assets: Asset[] = formatAssets(data.data);
        return { assets, error, isLoading };
    }

    return { error, isLoading };
}