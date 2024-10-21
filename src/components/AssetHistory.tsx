"use client";

import { AssetId } from "@/types/assetId";
import { useFetchAssetsHistoryById } from "@/hooks/useFetchAssetsHistoryById";
import { WaveChart } from "./WaveChart";

export const AssetHistory = (): React.JSX.Element => {
    const assetIds: AssetId[] = ["binance-coin", "bitcoin-cash", "solana"];
    const { assetsHistory, error, isLoading } =
        useFetchAssetsHistoryById(assetIds);

    console.log(assetsHistory);

    if (error) return <p>Failed to fetch assets price history.</p>;
    if (isLoading) return <p>Loading assets price history...</p>;

    return <WaveChart chartData={assetsHistory} />;
};
