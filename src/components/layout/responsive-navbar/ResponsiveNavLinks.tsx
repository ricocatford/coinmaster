import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavigationLink } from "@/types/navigationLink";
import {
    IconDefinition,
    faChartLine,
    faHouse,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/assets/styles/components/ResponsiveNavbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap: Record<string, IconDefinition> = {
    house: faHouse,
    chartLine: faChartLine,
    eye: faEye,
};

export const ResponsiveNavLinks = ({ links }: { links: NavigationLink[] }) => {
    const pathname = usePathname();

    return (
        <ul className={styles.linksList}>
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <li key={link.id}>
                        <Link
                            href={link.href}
                            className={`${styles.link} ${
                                isActive ? styles.active : ""
                            }`}
                        >
                            <span className={styles.icon}>
                                {link.icon && (
                                    <FontAwesomeIcon
                                        icon={iconMap[link.icon]}
                                    />
                                )}
                            </span>
                            <span className={styles.label}>{link.label}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
