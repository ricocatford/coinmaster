import { NavigationLink } from "@/types/navigationLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/assets/styles/components/navbar/Navbar.module.css";
import buttonStyles from "@/assets/styles/components/buttons/GenericButton.module.css";

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
                !isToggled ? styles.listContainer : styles.listContainerActive
            }
        >
            <ul className={styles.list}>
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
                    className={`${buttonStyles.button} ${buttonStyles.buttonPrimary} ${styles.ctaLink}`}
                    onClick={() => setIsToggled(false)}
                >
                    Get started
                </Link>
            )}
        </div>
    );
};
