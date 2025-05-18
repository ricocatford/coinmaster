import useSWR from "swr";
import { AssetId } from "@/types/assetId";
import { useEffect, useState } from "react";
import { fetcher } from "@/lib/fetcher";
import { formatAssetHistory } from "@/lib/formatAssetHistory";

export const useFetchAssetHistoryById = (assetId: AssetId) => {
    const [timestamps, setTimestamps] = useState<{ startTimestamp: number; endTimestamp: number } | null>(null);

    useEffect(() => {
        const end = Date.now();
        const start = end - 24 * 60 * 60 * 1000;
        setTimestamps({ startTimestamp: start, endTimestamp: end });
    }, []);

    const url = timestamps
        ? `/api/asset/${assetId}/history?start=${timestamps.startTimestamp}&end=${timestamps.endTimestamp}`
        : null;

    const { data, error, isValidating } = useSWR(url, fetcher, {
        refreshInterval: 3600000,
        revalidateOnFocus: false,
    });

    const isLoading = !data && isValidating;

    if (data) {
        const history = formatAssetHistory(data.data);
        return { history, error, isLoading };
    }

    return { history: undefined, error, isLoading };
};
