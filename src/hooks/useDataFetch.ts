"use client";

import useSWR from "swr";
import { formatAssets } from "@/lib/formatAssets";
import Assets from "@/types/assets";

export const useDataFetch = () => {
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
        const assets: Assets[] = formatAssets(data.data);
        console.log("assetsArray", assets)
        return { assets, error, isLoading };
    }

    return { error, isLoading };
}