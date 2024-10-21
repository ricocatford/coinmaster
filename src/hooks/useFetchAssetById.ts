"use client";

import useSWR from "swr";
import { formatAsset } from "@/lib/formatAsset";
import Asset from "@/types/asset";
import { AssetId } from "@/types/assetId";

export const useFetchAssetById = (assetId: AssetId) => {
    const url: string = `https://api.coincap.io/v2/assets/${assetId}/`;
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 5000,
        revalidateOnFocus: false,
    });

    const isLoading = !data && isValidating;

    if (data) {
        const asset: Asset = formatAsset(data.data);
        return { asset, error, isLoading };
    }

    return { error, isLoading };
}