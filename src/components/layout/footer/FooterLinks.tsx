import styles from "@/assets/styles/components/Footer.module.css";
import { NavigationLink } from "../navbar/NavbarClient";
import Link from "next/link";

export const FooterLinks = ({
    links,
}: {
    links: NavigationLink[];
}): React.JSX.Element => {
    return (
        <div className={styles.linksContainer}>
            <ul className={styles.linksList}>
                {links.map((link) => (
                    <Link href={link.url} key={link.id}>
                        <li className={styles.link}>{link.text}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
