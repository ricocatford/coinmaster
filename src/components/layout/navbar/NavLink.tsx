"use client";

import styles from "@/assets/styles/components/Navbar.module.css";
import { NavLinkType } from "@/components/layout/navbar/NavbarClient";
import Link from "next/link";

export const NavLink = ({
    isToggled,
    setIsToggled,
    links,
}: {
    isToggled: boolean;
    setIsToggled: (toggle: boolean) => void;
    links: NavLinkType[];
}) => {
    return (
        <div
            className={
                !isToggled ? styles.linksContainer : styles.linksContainerActive
            }
        >
            <ul className={styles.linksList}>
                {links.map((link) => (
                    <Link href={link.url} onClick={() => setIsToggled(false)}>
                        <li key={link.id} className={styles.link}>
                            {link.text}
                        </li>
                    </Link>
                ))}
            </ul>
            <Link
                href="#market"
                className={`btn btn--primary ${styles.ctaLink}`}
                onClick={() => setIsToggled(false)}
            >
                Get started
            </Link>
        </div>
    );
};
