"use client";

import useSWR from "swr";
import { formatAllAssets } from "@/lib/formatAllAssets";
import Asset from "@/types/asset";

export const useFetchAllAssets = () => {
    const url: string = "https://api.coincap.io/v2/assets";
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 5000,
        revalidateOnFocus: false,
    });

    const isLoading = !data && isValidating;

    if (data) {
        const assets: Asset[] = formatAllAssets(data.data);
        return { assets, error, isLoading };
    }

    return { assets: [], error, isLoading };
};
