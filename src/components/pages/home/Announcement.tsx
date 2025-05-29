import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styles from "@/assets/styles/components/pages/home/Hero.module.css";

export const Announcement = (): React.JSX.Element => {
    return (
        <Link href="#" className={styles.announcement}>
            <div className={styles.announcementContent}>
                <FontAwesomeIcon icon={faBolt} />
                Introducing our{" "}
                <span className={styles.highlight}>Tracker</span> feature!
                <span className={styles.gradientLineOne}> </span>
                <span className={styles.gradientLineTwo}> </span>
            </div>
        </Link>
    );
};
