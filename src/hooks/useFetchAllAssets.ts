"use client";

import useSWR from "swr";
import { formatAllAssets } from "@/lib/formatAllAssets";
import Asset from "@/types/asset";
import "dotenv/config"
import FetchedAssetsResponse from "@/types/fetchedAssetsResponse";

export const useFetchAllAssets = (): FetchedAssetsResponse => {
    const url: string = `https://rest.coincap.io/v3/assets?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 3600000,
        revalidateOnFocus: false,
    });

    const isLoading = !data && isValidating;

    if (data) {
        const assets: Asset[] = formatAllAssets(data.data);
        return { assets, error, isLoading };
    }

    return { assets: [], error, isLoading };
};
