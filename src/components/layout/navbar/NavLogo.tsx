import Link from "next/link";
import styles from "@/assets/styles/components/navbar/Navbar.module.css";

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
