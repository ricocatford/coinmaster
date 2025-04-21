import styles from "@/assets/styles/components/Footer.module.css";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = (): React.JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.linksContainer}>
                    <ul className={styles.linksList}>
                        <li className={styles.link}>FAQ</li>
                        <li className={styles.link}>Terms of Service</li>
                        <li className={styles.link}>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.creditsContainer}>
                    <span className={styles.credits}>
                        <FontAwesomeIcon icon={faBolt} /> Powered by{" "}
                        <Link
                            href="https://pro.coincap.io/api-docs"
                            target="_blank"
                            className={styles.creditsLink}
                        >
                            <span>Coincap OpenAPI.</span>
                        </Link>
                    </span>
                    <p className={styles.credits}>
                        Open source project by Ricardo Albarenque.{" "}
                        <Link
                            href="https://github.com/ricocatford/coinmaster"
                            target="_blank"
                            className={styles.creditsLink}
                        >
                            <span>Check it out </span>
                        </Link>
                        on <FontAwesomeIcon icon={faGithub} /> GitHub.
                    </p>
                </div>
            </div>
        </footer>
    );
};
