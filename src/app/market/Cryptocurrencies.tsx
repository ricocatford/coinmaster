"use client";

import styles from "@/assets/styles/components/Table.module.css";
import { Table } from "@/components/table/Table";
import { useFetchAllAssets } from "@/hooks/useFetchAllAssets";
import { ContentTopPlaceholder } from "@/components/content-placeholder/ContentTopPlaceholder";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ContentBottomPlaceholder } from "@/components/content-placeholder/ContentBottomPlaceholder";
import { ContentMiddlePlaceholder } from "@/components/content-placeholder/ContentMiddlePlaceholder";

export const Cryptocurrencies = (): React.JSX.Element => {
    const { assets, error, isLoading } = useFetchAllAssets();

    if (error) return <p>Failed to fetch assets.</p>;
    return (
        <div>
            <ContentTopPlaceholder>
                <span className={styles.tableTopHeading}>
                    Latest market prices
                </span>
                <span className={styles.tableTopInfo}>
                    (Showing top 100 assets)
                </span>
            </ContentTopPlaceholder>
            {isLoading && (
                <ContentMiddlePlaceholder>
                    <LoadingSpinner />
                </ContentMiddlePlaceholder>
            )}
            {assets && <Table assets={assets} />}
            <ContentBottomPlaceholder>
                <span className={styles.tableTopHeading}>
                    Latest market prices
                </span>
                <span className={styles.tableTopInfo}>
                    (Showing top 100 assets)
                </span>
            </ContentBottomPlaceholder>
        </div>
    );
};
