"use client";

import styles from "@/assets/styles/components/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const MenuToggleButton = ({
    isToggled,
    setIsToggled,
}: {
    isToggled: boolean;
    setIsToggled: (toggle: boolean) => void;
}) => {
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
