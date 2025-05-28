"use client";

import { AssetsTable } from "./AssetsTable";
import { useFetchAllAssets } from "@/hooks/useFetchAllAssets";
import { FetchedAssetsResponse } from "@/types/fetchedAssetsResponse";
import { Statistics } from "./Statistics";

export default function Market(): React.JSX.Element {
    const { assets, error, isLoading }: FetchedAssetsResponse =
        useFetchAllAssets();

    return (
        <>
            <section
                className="container fullWidth"
                id="marketStatistics"
                aria-labelledby="marketStatisticsHeading"
            >
                <div className="container fullWidth bordeBottom">
                    <h1 className="heading" id="marketStatisticsHeading">
                        Market Statistics
                    </h1>
                </div>
                <Statistics
                    assets={assets}
                    isLoading={isLoading}
                    error={error}
                />
            </section>
            <AssetsTable assets={assets} isLoading={isLoading} error={error} />
        </>
    );
}
