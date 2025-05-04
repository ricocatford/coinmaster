"use client";

import useSWR from "swr";
import { formatAsset } from "@/lib/formatAsset";
import Asset from "@/types/asset";
import { AssetId } from "@/types/assetId";
import "dotenv/config";
import FetchedAssetResponse from "@/types/fetchedAssetResponse";

export const useFetchAssetById = (assetId: AssetId): FetchedAssetResponse => {
    const url: string = `https://rest.coincap.io/v3/assets/${assetId}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`

    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 3600000,
        revalidateOnFocus: false,
    });

    const isLoading = !data && isValidating;

    if (data) {
        const asset: Asset = formatAsset(data.data);
        return { asset, error, isLoading };
    }

    return { asset: undefined, error, isLoading };
}