"use client";

import styles from "@/assets/styles/components/Navbar.module.css";
import { NavigationLink } from "@/components/layout/navbar/NavbarClient";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = ({
    isToggled,
    setIsToggled,
    links,
}: {
    isToggled: boolean;
    setIsToggled: (toggle: boolean) => void;
    links: NavigationLink[];
}): React.JSX.Element => {
    const pathname = usePathname();

    return (
        <div
            className={
                !isToggled ? styles.linksContainer : styles.linksContainerActive
            }
        >
            <ul className={styles.linksList}>
                {links.map((link) => (
                    <Link
                        href={link.url}
                        key={link.id}
                        onClick={() => setIsToggled(false)}
                    >
                        <li className={styles.link}>{link.text}</li>
                    </Link>
                ))}
            </ul>
            {pathname === "/" && (
                <Link
                    href="/market"
                    className={`btn btn--primary ${styles.ctaLink}`}
                    onClick={() => setIsToggled(false)}
                >
                    Get started
                </Link>
            )}
        </div>
    );
};
