"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GlobalStore } from "@/stores/GlobalStore";
import { useGlobal } from "@/hooks/global-store/useGlobal";

export const AddToTrackerButton = ({
    id,
}: {
    id: string;
}): React.JSX.Element => {
    const { store }: { store: GlobalStore } = useGlobal();

    return (
        <span>
            <FontAwesomeIcon
                icon={faStar}
                onClick={() => console.log("Clicked:", id)}
            />
        </span>
    );
};
