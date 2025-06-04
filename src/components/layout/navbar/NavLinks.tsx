import { NavigationLink } from "@/types/navigationLink";
import Link from "next/link";
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
    return (
        <div
            className={
                !isToggled ? styles.listContainer : styles.listContainerActive
            }
        >
            <ul className={styles.list}>
                {links.map((link) => (
                    <li className={styles.label} key={link.id}>
                        <Link
                            className={styles.link}
                            href={link.href}
                            onClick={() => setIsToggled(false)}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link
                href="/market"
                className={`${buttonStyles.button} ${buttonStyles.primary} ${styles.ctaLink}`}
                onClick={() => setIsToggled(false)}
            >
                Get started
            </Link>
        </div>
    );
};
