import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styles from "@/assets/styles/components/pages/home/Announcement.module.css";
import { ReactNode } from "react";

type AnnouncementProps = {
    href: string;
    children: ReactNode;
};

export const Announcement = ({
    href,
    children,
}: AnnouncementProps): React.JSX.Element => {
    return (
        <Link href={href} className={styles.announcement}>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faBolt} />
                {children}
                <span className={styles.gradientLineOne}></span>
                <span className={styles.gradientLineTwo}></span>
            </div>
        </Link>
    );
};
