import { DetailCard } from "@/components/cards/DetailCard";
import { useAssetDetails } from "@/hooks/useAssetDetails";
import { AssetDetail } from "@/types/assetDetail";
import { FetchedAssetResponse } from "@/types/fetchedAssetResponse";
import styles from "@/assets/styles/components/AssetDetails.module.css";

export const AssetDetails = ({
    asset,
    isLoading,
    error,
}: FetchedAssetResponse): React.JSX.Element => {
    const details: AssetDetail[] = useAssetDetails(asset);

    if (error) {
        return (
            <div className={styles.container}>
                <p className="paragraph">
                    Failed to fetch asset. Please try again in a few seconds.
                </p>
            </div>
        );
    }

    if (!asset || !details || details.length === 0) {
        return (
            <div className={styles.container}>
                <p className="paragraph">No asset details available.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
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
