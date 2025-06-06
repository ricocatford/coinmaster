import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "@/assets/styles/components/footer/Footer.module.css";

export const Footer = (): React.JSX.Element => {
    return (
        <footer className={styles.container}>
            <div className="container">
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
                            Check it out on <FontAwesomeIcon icon={faGithub} />{" "}
                            GitHub.
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};
