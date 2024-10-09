"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const AddToTrackerButton = ({ id }: { id: string }): React.ReactNode => {
    return (
        <span>
            <FontAwesomeIcon
                icon={faStar}
                onClick={() => console.log("Clicked:", id)}
            />
        </span>
    );
};
