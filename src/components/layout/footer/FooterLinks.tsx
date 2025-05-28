import Link from "next/link";
import { NavigationLink } from "@/types/navigationLink";
import styles from "@/assets/styles/components/footer/Footer.module.css";

export const FooterLinks = ({
    links,
}: {
    links: NavigationLink[];
}): React.JSX.Element => {
    return (
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                {links.map((link) => (
                    <Link href={link.href} key={link.id}>
                        <li className={styles.link}>{link.label}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
