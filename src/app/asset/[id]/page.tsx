"use client";

import { useState } from "react";
import { ReturnButton } from "@/components/buttons/ReturnButton";
import { useFetchAssetById } from "@/hooks/useFetchAssetById";
import { ContentPlaceholder } from "@/components/content-placeholder/ContentPlaceholder";
import styles from "@/assets/styles/components/Asset.module.css";
import { AssetDetails } from "./AssetDetails";
import FetchedAssetResponse from "@/types/fetchedAssetResponse";
import { HistoryLineChart } from "@/components/charts/HistoryLineChart";
import { useFetchAssetHistoryById } from "@/hooks/useFetchAssetHistoryById";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ChartButton } from "@/components/buttons/ChartButton";

export default function Asset({ params }: { params: { id: string } }) {
    const [range, setRange] = useState<"1d" | "7d" | "1m">("1d");
    const labels: string[] = ["1d", "7d", "1m"];

    const { asset, error, isLoading }: FetchedAssetResponse = useFetchAssetById(
        params.id
    );

    const { history, isLoading: isHistoryLoading } = useFetchAssetHistoryById(
        params.id,
        range
    );

    return (
        <section className="container full-height">
            <div className={`container border-bottom ${styles.titleContainer}`}>
                <ReturnButton />
                <h1 className="heading">
                    {asset?.name} ({asset?.symbol})
                </h1>
            </div>

            <div>
                <ContentPlaceholder>
                    {isLoading && <LoadingSpinner />}
                    <AssetDetails
                        asset={asset}
                        isLoading={isLoading}
                        error={error}
                    />
                </ContentPlaceholder>
            </div>

            <div>
                <ContentPlaceholder>
                    <h2 className="heading">Price history</h2>
                    <ChartButton
                        labels={labels}
                        onChange={(label) =>
                            setRange(label as "1d" | "7d" | "1m")
                        }
                    />
                    {isHistoryLoading ? (
                        <LoadingSpinner />
                    ) : (
                        history && <HistoryLineChart data={history} />
                    )}
                </ContentPlaceholder>
            </div>
        </section>
    );
}
