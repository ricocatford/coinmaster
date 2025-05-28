import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { GlobalStore } from "@/stores/GlobalStore";
import { AssetId } from "@/types/assetId";
import { useGlobal } from "@/hooks/global-store/useGlobal";
import styles from "@/assets/styles/components/buttons/AddToTrackerButton.module.css";

type AddToTrackerButtonProps = {
    id: AssetId;
};

export const AddToTrackerButton = ({
    id,
}: AddToTrackerButtonProps): React.JSX.Element => {
    const { store }: { store: GlobalStore } = useGlobal();

    const isAssetTracked = store?.tracker.includes(id);

    return (
        <div className={styles.button} onClick={() => store.handleAsset(id)}>
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
