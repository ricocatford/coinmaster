import styles from "@/assets/styles/components/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export const NavLogo = (): React.JSX.Element => {
    return (
        <div className={styles.logoContainer}>
            <Link
                href="/"
                className={styles.logo}
                aria-label="Logo, go to Home page"
            >
                <span className={styles.logoTitle}>CoinMaster</span>
            </Link>
        </div>
    );
};
