import useSWR from "swr";
import { formatAllAssets } from "@/lib/formatAllAssets";
import { Asset } from "@/types/asset";
import { FetchedAssetsResponse } from "@/types/fetchedAssetsResponse";
import { fetcher } from "@/lib/fetcher";
import { useMemo } from "react";

export type Limit = 10 | 25 | 50 | 100;

const calculateOffset = ({ limit, currentPage }: { limit: Limit, currentPage: number }) => (currentPage - 1) * limit;

export const useFetchAllAssets = (
    limit: Limit,
    currentPage?: number
): FetchedAssetsResponse => {
    const url = useMemo(() => {
        const baseUrl = "/api/assets";
        const params = new URLSearchParams();

        params.append("limit", limit.toString());

        if (currentPage !== undefined && currentPage !== null) {
            const calculatedOffset = calculateOffset({ limit, currentPage });
            params.append("offset", calculatedOffset.toString());
        }

        const queryString = params.toString();

        return `${baseUrl}?${queryString}`;

    }, [limit, currentPage]);

    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 3600000,
        revalidateOnFocus: false,
    });

    const isLoading = !data && isValidating;

    if (data) {
        if (data.data) {
            const assets: Asset[] = formatAllAssets(data.data);
            return { assets, error, isLoading };
        } else {
            return { assets: [], error, isLoading };
        }
    }

    return { assets: [], error, isLoading };
};