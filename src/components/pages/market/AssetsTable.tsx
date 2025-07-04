import { Table } from "@/components/table/Table";
import { ContentTopPlaceholder } from "@/components/content-placeholder/ContentTopPlaceholder";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ContentBottomPlaceholder } from "@/components/content-placeholder/ContentBottomPlaceholder";
import { ContentMiddlePlaceholder } from "@/components/content-placeholder/ContentMiddlePlaceholder";
import { FetchedAssetsResponse } from "@/types/fetchedAssetsResponse";
import { ReactNode, useState } from "react";
import { Limit, useFetchAllAssets } from "@/hooks/useFetchAllAssets";
import styles from "@/assets/styles/components/pages/market/AssetsTable.module.css";

export const AssetsTable = (): React.JSX.Element => {
    const [limit, setLimit] = useState<Limit>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { assets, error, isLoading }: FetchedAssetsResponse =
        useFetchAllAssets(limit, currentPage);

    let content: ReactNode;

    if (error) {
        content = (
            <ContentMiddlePlaceholder>
                <p className="paragraph">
                    Failed to fetch assets. Please try again in a few seconds.
                </p>
            </ContentMiddlePlaceholder>
        );
    } else if (isLoading) {
        content = (
            <ContentMiddlePlaceholder>
                <LoadingSpinner />
            </ContentMiddlePlaceholder>
        );
    } else if (!assets || assets.length === 0) {
        content = (
            <ContentMiddlePlaceholder>
                <p className="paragraph">No assets available.</p>
            </ContentMiddlePlaceholder>
        );
    } else {
        content = assets && <Table assets={assets} variant="market" />;
    }

    return (
        <section
            className={styles.container}
            id="latestMarketPrices"
            role="region"
            aria-labelledby="latestMarketPricesHeading"
        >
            <ContentTopPlaceholder>
                <div></div>
                <h2 className={styles.heading} id="latestMarketPricesHeading">
                    Latest Market Prices
                </h2>
                <span className={styles.topInfo}>(Showing top 100 assets)</span>
            </ContentTopPlaceholder>
            {content}
            <ContentBottomPlaceholder>
                <span className={styles.bottomInfo}>End of List</span>
            </ContentBottomPlaceholder>
        </section>
    );
};
