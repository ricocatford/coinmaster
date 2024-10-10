"use client";

import useSWR from "swr";
import { formatAsset } from "@/lib/formatAsset";
import Asset from "@/types/asset";
import { AssetId } from "@/types/assetId";

export const useFetchAssetById = (assetId: AssetId) => {
    console.log(assetId)
    const url: string = `https://api.coincap.io/v2/assets/${assetId}/`;
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
        const asset: Asset = formatAsset(data.data);

        return { asset, error, isLoading };
    }

    return { error, isLoading };
}