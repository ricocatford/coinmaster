"use client";

import { AssetId } from "@/types/assetId";
import { useFetchAssetsHistoryById } from "@/hooks/useFetchAssetsHistoryById";
import { WaveChart } from "./WaveChart";
import styles from "@/assets/styles/components/Market.module.css";

export const AssetHistory = (): React.JSX.Element => {
    const assetIds: AssetId[] = ["binance-coin", "bitcoin-cash", "solana"];
    const { assetsHistory, error, isLoading } =
        useFetchAssetsHistoryById(assetIds);

    if (error) return <p>Failed to fetch assets price history.</p>;
    if (isLoading) return <p>Loading assets price history...</p>;

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Price history (USD)</h2>
            <p className={styles.paragraph}>
                Showing price history for the last 6 months.
            </p>
            <WaveChart chartData={assetsHistory} />
        </div>
    );
};
