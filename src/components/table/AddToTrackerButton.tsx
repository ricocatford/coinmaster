"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { GlobalStore } from "@/stores/GlobalStore";
import { AssetId } from "@/types/assetId";
import { useGlobal } from "@/hooks/global-store/useGlobal";
import styles from "@/assets/styles/components/Table.module.css";

export const AddToTrackerButton = ({
    id,
}: {
    id: AssetId;
}): React.JSX.Element => {
    const { store }: { store: GlobalStore } = useGlobal();

    const isAssetTracked = store?.tracker.includes(id);

    return (
        <div
            className={styles.trackerBtn}
            onClick={() => store.handleAsset(id)}
        >
            <span>
                {!isAssetTracked ? (
                    <FontAwesomeIcon
                        icon={faEye}
                        className={styles.trackerIcon}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        className={styles.trackerIcon}
                    />
                )}
            </span>
        </div>
    );
};
