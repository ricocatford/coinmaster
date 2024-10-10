"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GlobalStore } from "@/stores/GlobalStore";
import { AssetId } from "@/types/assetId";
import { useGlobal } from "@/hooks/global-store/useGlobal";

export const AddToTrackerButton = ({
    id,
}: {
    id: AssetId;
}): React.JSX.Element => {
    const { store }: { store: GlobalStore } = useGlobal();

    return (
        <span>
            <FontAwesomeIcon
                icon={faStar}
                onClick={() => store.trackAsset(id)}
            />
        </span>
    );
};
