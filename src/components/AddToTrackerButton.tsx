"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
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
        <span onClick={() => store.handleAsset(id)}>
            {!isAssetTracked ? (
                <FontAwesomeIcon icon={faStar} className={styles.trackerIcon} />
            ) : (
                <FontAwesomeIcon
                    icon={faStarFilled}
                    className={styles.trackerIcon}
                />
            )}
        </span>
    );
};
