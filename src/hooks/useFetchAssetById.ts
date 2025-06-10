import useSWR from "swr";
import { formatAsset } from "@/lib/formatAsset";
import { Asset } from "@/types/asset";
import { AssetId } from "@/types/assetId";
import { FetchedAssetResponse } from "@/types/fetchedAssetResponse";
import { fetcher } from "@/lib/fetcher";

export const useFetchAssetById = (assetId: AssetId | null | undefined): FetchedAssetResponse => {
    const url = assetId ? `/api/asset/${assetId}` : null;

    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 3600000,
        revalidateOnFocus: false,
    });

    const isLoading = !!url && !data && isValidating;

    if (!url) {
        return { asset: undefined, error, isLoading: false };
    }

    if (data) {
        if (data.data) {
            const asset: Asset = formatAsset(data.data);
            return { asset, error, isLoading };
        } else {
            return { asset: undefined, error, isLoading };
        }
    }

    return { asset: undefined, error, isLoading };
};