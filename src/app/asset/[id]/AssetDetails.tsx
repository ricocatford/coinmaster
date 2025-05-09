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
    if (!asset) {
        return (
            <p className="paragraph">
                Failed to load asset. Please try again in a few seconds.
            </p>
        );
    }
    const details: AssetDetail[] = useAssetDetails(asset);

    return (
        <div className={styles.details}>
            {error && (
                <p className="paragraph">
                    Failed to fetch asset. Please try again in a few seconds.
                </p>
            )}
            {isLoading && <LoadingSpinner />}
            {details &&
                details.map((detail) => (
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
