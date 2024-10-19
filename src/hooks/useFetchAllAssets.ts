"use client";

import useSWR from "swr";
import { formatAllAssets } from "@/lib/formatAllAssets";
import Asset from "@/types/asset";

export const useFetchAllAssets = () => {
    const url: string = "https://api.coincap.io/v2/assets";
    const refreshIntervalTime: number = 5000;
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading }: { data: any, error: any, isLoading: boolean } = useSWR(
        url,
        fetcher,
        {
            refreshInterval: refreshIntervalTime,
        }
    );

    if (data) {
        const assets: Asset[] = formatAllAssets(data.data);
        return { assets, error, isLoading };
    }

    return { error, isLoading };
}