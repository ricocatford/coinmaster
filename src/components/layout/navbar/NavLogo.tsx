import styles from "@/assets/styles/components/Navbar.module.css";
import Link from "next/link";

export const NavLogo = (): React.JSX.Element => {
    return (
        <div className={styles.logoContainer}>
            <Link
                href="/"
                className={styles.logoTitle}
                aria-label="Logo, go to Home page"
            >
                CoinMaster
            </Link>
        </div>
    );
};
