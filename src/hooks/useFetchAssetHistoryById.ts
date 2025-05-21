import useSWR from "swr";
import { AssetId } from "@/types/assetId";
import { useEffect, useState } from "react";
import { fetcher } from "@/lib/fetcher";
import { formatAssetHistory } from "@/lib/formatAssetHistory";

type TimeRange = "1d" | "7d" | "1m";

const getMillisecondsFromRange = (range: TimeRange): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    switch (range) {
        case "7d":
            return oneDay * 7;
        case "1m":
            return oneDay * 30;
        case "1d":
        default:
            return oneDay;
    }
};

const getIntervalFromRange = (range: TimeRange): string => {
    switch (range) {
        case "7d":
            return "h6";
        case "1m":
            return "d1";
        case "1d":
        default:
            return "h2";
    }
};

export const useFetchAssetHistoryById = (
    assetId: AssetId,
    range: TimeRange = "1d"
) => {
    const [timestamps, setTimestamps] = useState<{
        startTimestamp: number;
        endTimestamp: number;
    } | null>(null);

    useEffect(() => {
        const end = Date.now();
        const start = end - getMillisecondsFromRange(range);
        setTimestamps({ startTimestamp: start, endTimestamp: end });
    }, [range]);

    const interval = getIntervalFromRange(range);

    const url = timestamps
        ? `/api/asset/${assetId}/history?interval=${interval}&start=${timestamps.startTimestamp}&end=${timestamps.endTimestamp}`
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
