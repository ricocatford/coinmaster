"use client";

import { ChartButton } from "@/components/buttons/ChartButton";
import { HistoryLineChart } from "@/components/charts/HistoryLineChart";
import { ContentPlaceholder } from "@/components/content-placeholder/ContentPlaceholder";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { useFetchAssetHistoryById } from "@/hooks/useFetchAssetHistoryById";
import { AssetId } from "@/types/assetId";
import { ReactNode, useState } from "react";
import styles from "@/assets/styles/components/pages/asset/AssetPriceHistory.module.css";

export const AssetPriceHistory = ({ assetId }: { assetId: AssetId }) => {
    const [range, setRange] = useState<"1d" | "7d" | "1m">("1d");
    const labels: string[] = ["1d", "7d", "1m"];

    const { history, isLoading, error } = useFetchAssetHistoryById(
        assetId,
        range
    );

    let content: ReactNode;

    if (error) {
        content = (
            <p className="paragraph">
                Failed to fetch asset price history. Please try again in a few
                seconds.
            </p>
        );
    } else if (isLoading) {
        content = (
            <div className={styles.logoContainer}>
                <LoadingSpinner />
            </div>
        );
    } else if (!history || Object.keys(history).length === 0) {
        content = (
            <p className="paragraph">No asset price history available.</p>
        );
    } else {
        content = history && <HistoryLineChart data={history} />;
    }

    return (
        <section
            className="container fullWidth"
            id="assetPriceHistory"
            role="region"
            aria-labelledby="assetPriceHistoryHeading"
        >
            <ContentPlaceholder>
                <h1 className="heading" id="assetPriceHistoryHeading">
                    Price history
                </h1>
                <ChartButton
                    labels={labels}
                    onChange={(label) => setRange(label as "1d" | "7d" | "1m")}
                />
                {content}
            </ContentPlaceholder>
        </section>
    );
};
