import { Table } from "@/components/table/Table";
import { ContentTopPlaceholder } from "@/components/content-placeholder/ContentTopPlaceholder";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ContentBottomPlaceholder } from "@/components/content-placeholder/ContentBottomPlaceholder";
import { ContentMiddlePlaceholder } from "@/components/content-placeholder/ContentMiddlePlaceholder";
import { FetchedAssetsResponse } from "@/types/fetchedAssetsResponse";
import { ReactNode } from "react";
import { useFetchAllAssets } from "@/hooks/useFetchAllAssets";
import { TablePagination } from "@/components/table/TablePagination";
import { useGlobal } from "@/hooks/global-store/useGlobal";
import { GlobalStore, Limit } from "@/stores/GlobalStore";
import styles from "@/assets/styles/components/pages/market/AssetsTable.module.css";

export const AssetsTable = (): React.JSX.Element => {
    const { store }: { store: GlobalStore } = useGlobal();
    const limit: Limit = store?.pagination.limit;

    const { assets, error, isLoading }: FetchedAssetsResponse =
        useFetchAllAssets();

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
                <div className={styles.topContainer}>
                    <div className={styles.headingContainer}>
                        <h2
                            className={styles.heading}
                            id="latestMarketPricesHeading"
                        >
                            Latest Market Prices
                        </h2>
                    </div>
                    <TablePagination />
                </div>
            </ContentTopPlaceholder>
            {content}
            <ContentBottomPlaceholder>
                <span className={styles.bottomInfo}>End of List</span>
            </ContentBottomPlaceholder>
        </section>
    );
};
