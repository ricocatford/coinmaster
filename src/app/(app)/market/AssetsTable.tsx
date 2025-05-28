import styles from "@/assets/styles/components/AssetsTable.module.css";
import { Table } from "@/components/table/Table";
import { ContentTopPlaceholder } from "@/components/content-placeholder/ContentTopPlaceholder";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ContentBottomPlaceholder } from "@/components/content-placeholder/ContentBottomPlaceholder";
import { ContentMiddlePlaceholder } from "@/components/content-placeholder/ContentMiddlePlaceholder";
import { FetchedAssetsResponse } from "@/types/fetchedAssetsResponse";

export const AssetsTable = ({
    assets,
    isLoading,
    error,
}: FetchedAssetsResponse): React.JSX.Element => {
    return (
        <section
            className={styles.container}
            id="latestMarketPrices"
            role="region"
            aria-labelledby="latestMarketPricesHeading"
        >
            <ContentTopPlaceholder>
                <h2 className={styles.heading} id="latestMarketPricesHeading">
                    Latest market prices
                </h2>
                <span className={styles.topInfo}>(Showing top 100 assets)</span>
            </ContentTopPlaceholder>
            {error && (
                <p className="paragraph">
                    Failed to fetch assets. Please try again in a few seconds.
                </p>
            )}
            {isLoading && (
                <ContentMiddlePlaceholder>
                    <LoadingSpinner />
                </ContentMiddlePlaceholder>
            )}
            {assets && <Table assets={assets} />}
            <ContentBottomPlaceholder>
                <span className={styles.bottomInfo}>End of List</span>
            </ContentBottomPlaceholder>
        </section>
    );
};
