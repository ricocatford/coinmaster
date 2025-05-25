import useSWR from "swr";
import { formatAsset } from "@/lib/formatAsset";
import { Asset } from "@/types/asset";
import { AssetId } from "@/types/assetId";
import { FetchedAssetResponse } from "@/types/fetchedAssetResponse";
import { fetcher } from "@/lib/fetcher";

export const useFetchAssetById = (assetId: AssetId): FetchedAssetResponse => {
    const url = `/api/asset/${assetId}`;

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
};
