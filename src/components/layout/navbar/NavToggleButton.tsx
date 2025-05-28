"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "@/assets/styles/components/navbar/Navbar.module.css";

export const NavToggleButton = ({
    isToggled,
    setIsToggled,
}: {
    isToggled: boolean;
    setIsToggled: (toggle: boolean) => void;
}): React.JSX.Element => {
    return (
        <div className={styles.menuIconBackground}>
            <button
                className={styles.menuIconContainer}
                onClick={() => setIsToggled(!isToggled)}
            >
                {!isToggled ? (
                    <FontAwesomeIcon
                        icon={faBars}
                        className={styles.menuIcon}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className={styles.menuIcon}
                    />
                )}
            </button>
        </div>
    );
};
