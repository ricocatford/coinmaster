import styles from "@/assets/styles/components/Table.module.css";
import { Table } from "@/components/table/Table";
import { ContentTopPlaceholder } from "@/components/content-placeholder/ContentTopPlaceholder";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ContentBottomPlaceholder } from "@/components/content-placeholder/ContentBottomPlaceholder";
import { ContentMiddlePlaceholder } from "@/components/content-placeholder/ContentMiddlePlaceholder";
import FetchedAssetsResponse from "@/types/fetchedAssetsResponse";

export const Assets = ({
    assets,
    isLoading,
    error,
}: FetchedAssetsResponse): React.JSX.Element => {
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
