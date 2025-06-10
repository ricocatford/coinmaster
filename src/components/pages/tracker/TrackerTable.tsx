import { Table } from "@/components/table/Table";
import { AssetId } from "@/types/assetId";
import { ReactNode } from "react";
import { ContentTopPlaceholder } from "@/components/content-placeholder/ContentTopPlaceholder";
import { ContentBottomPlaceholder } from "@/components/content-placeholder/ContentBottomPlaceholder";
import { ContentMiddlePlaceholder } from "@/components/content-placeholder/ContentMiddlePlaceholder";
import Link from "next/link";
import styles from "@/assets/styles/components/pages/tracker/TrackerTable.module.css";
import buttonStyles from "@/assets/styles/components/buttons/GenericButton.module.css";

type TrackerTableProps = {
    tracker: AssetId[];
};

export const TrackerTable = ({
    tracker,
}: TrackerTableProps): React.JSX.Element => {
    let content: ReactNode;

    if (tracker.length === 0) {
        content = (
            <ContentMiddlePlaceholder>
                <p className="paragraph">
                    Currently you have not assets tracked.
                </p>
                <div className={styles.buttonContainer}>
                    <Link
                        href="/market"
                        className={`${buttonStyles.button} ${buttonStyles.secondary}`}
                    >
                        Start now
                    </Link>
                </div>
            </ContentMiddlePlaceholder>
        );
    } else {
        content = tracker && tracker.length !== 0 && (
            <Table assets={tracker} variant="tracker" />
        );
    }

    return (
        <section
            className={styles.container}
            id="yourTrackedAssets"
            role="region"
            aria-labelledby="yourTrackedAssetsHeading"
        >
            <ContentTopPlaceholder>
                <h2 className={styles.heading} id="yourTrackedAssetsHeading">
                    Your Tracked Assets
                </h2>
            </ContentTopPlaceholder>
            {content}
            <ContentBottomPlaceholder>
                <span className={styles.bottomInfo}>End of List</span>
            </ContentBottomPlaceholder>
        </section>
    );
};
