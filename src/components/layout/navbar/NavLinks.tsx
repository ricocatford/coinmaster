import styles from "@/assets/styles/components/Navbar.module.css";
import { NavigationLink } from "@/types/navigationLink";
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
                    <li className={styles.link}>
                        <Link
                            href={link.href}
                            key={link.id}
                            onClick={() => setIsToggled(false)}
                        >
                            {link.label}
                        </Link>
                    </li>
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
