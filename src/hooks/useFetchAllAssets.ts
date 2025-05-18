import useSWR from "swr";
import { formatAllAssets } from "@/lib/formatAllAssets";
import Asset from "@/types/asset";
import FetchedAssetsResponse from "@/types/fetchedAssetsResponse";
import { fetcher } from "@/lib/fetcher";

export const useFetchAllAssets = (): FetchedAssetsResponse => {
    const url = `/api/assets`;

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
