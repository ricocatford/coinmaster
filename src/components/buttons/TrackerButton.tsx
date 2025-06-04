import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { GlobalStore } from "@/stores/GlobalStore";
import { AssetId } from "@/types/assetId";
import { useGlobal } from "@/hooks/global-store/useGlobal";
import styles from "@/assets/styles/components/buttons/TrackerButton.module.css";

export const TrackerButton = ({
    assetId,
}: {
    assetId: AssetId;
}): React.JSX.Element => {
    const { store }: { store: GlobalStore } = useGlobal();

    const isAssetTracked = store?.tracker.includes(assetId);

    return (
        <div
            className={styles.button}
            onClick={() => store.handleAsset(assetId)}
        >
            <span>
                {!isAssetTracked ? (
                    <FontAwesomeIcon icon={faEye} className={styles.icon} />
                ) : (
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        className={styles.icon}
                    />
                )}
            </span>
        </div>
    );
};
