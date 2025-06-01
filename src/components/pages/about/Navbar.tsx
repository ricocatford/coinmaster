"use client";

import styles from "@/assets/styles/components/pages/about/Navbar.module.css";
import { useState } from "react";

type NavbarProps = {
    links: NavLinks[];
    onChange?: (label: string) => void;
};

type NavLinks = {
    id: number;
    label: string;
};

export const Navbar = ({ links, onChange }: NavbarProps): React.JSX.Element => {
    const [isActive, setIsActive] = useState<string>(links[0].label);

    const handleClick = (label: string) => {
        setIsActive(label);
        onChange?.(label);
    };

    return (
        <nav aria-label="About navigation">
            <div className={styles.container}>
                <ul className={styles.list}>
                    {links.map((link) => (
                        <li
                            key={link.id}
                            className={`${styles.link} ${
                                isActive === link.label ? styles.active : ""
                            }`}
                            onClick={() => handleClick(link.label)}
                        >
                            {link.label}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
