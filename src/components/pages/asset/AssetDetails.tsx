import { DetailCard } from "@/components/cards/DetailCard";
import { useAssetDetails } from "@/hooks/useAssetDetails";
import { AssetDetail } from "@/types/assetDetail";
import { FetchedAssetResponse } from "@/types/fetchedAssetResponse";
import { ReturnButton } from "@/components/buttons/ReturnButton";
import { ContentPlaceholder } from "@/components/content-placeholder/ContentPlaceholder";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ReactNode } from "react";
import styles from "@/assets/styles/components/pages/asset/AssetDetails.module.css";

export const AssetDetails = ({
    asset,
    isLoading,
    error,
}: FetchedAssetResponse): React.JSX.Element => {
    const details: AssetDetail[] = useAssetDetails(asset);

    let content: ReactNode;

    if (error) {
        content = (
            <p className="paragraph">
                Failed to fetch asset. Please try again in a few seconds.
            </p>
        );
    } else if (isLoading) {
        content = (
            <div className={styles.logoContainer}>
                <LoadingSpinner />
            </div>
        );
    } else if (!asset || !details || details.length === 0) {
        content = <p className="paragraph">No asset details available.</p>;
    } else {
        content = details.map((detail) => (
            <DetailCard
                key={detail.id}
                id={detail.id}
                label={detail.label}
                info={detail.info}
                value={detail.value}
                valueShort={detail.valueShort}
                icon={detail.icon}
            />
        ));
    }

    return (
        <section
            className="container fullWidth"
            id="assetDetails"
            role="region"
            aria-labelledby="assetDetailsHeading"
        >
            <div
                className={`container fullWidth borderBottom ${styles.titleContainer}`}
            >
                <ReturnButton />
                <h1 className="heading" id="assetDetailsHeading">
                    {asset?.name}{" "}
                    <span className={styles.symbol}>{asset?.symbol}</span>
                </h1>
            </div>
            <div>
                <ContentPlaceholder>
                    <div className={styles.container}>{content}</div>
                </ContentPlaceholder>
            </div>
        </section>
    );
};
