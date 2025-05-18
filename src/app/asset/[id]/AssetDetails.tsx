import { DetailCard } from "@/components/cards/DetailCard";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { useAssetDetails } from "@/hooks/useAssetDetails";
import AssetDetail from "@/types/assetDetail";
import FetchedAssetResponse from "@/types/fetchedAssetResponse";
import styles from "@/assets/styles/components/Asset.module.css";

export const AssetDetails = ({
    asset,
    isLoading,
    error,
}: FetchedAssetResponse): React.JSX.Element => {
    const details: AssetDetail[] = useAssetDetails(asset);

    if (isLoading) {
        return (
            <div className={styles.details}>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.details}>
                <p className="paragraph">
                    Failed to fetch asset. Please try again in a few seconds.
                </p>
            </div>
        );
    }

    if (!asset || !details || details.length === 0) {
        return (
            <div className={styles.details}>
                <p className="paragraph">No asset details available.</p>
            </div>
        );
    }

    return (
        <div className={styles.details}>
            {details.map((detail) => (
                <DetailCard
                    key={detail.id}
                    id={detail.id}
                    label={detail.label}
                    info={detail.info}
                    value={detail.value}
                    valueShort={detail.valueShort}
                    icon={detail.icon}
                />
            ))}
        </div>
    );
};
