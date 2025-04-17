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
                <Image
                    src="/assets/images/logo.png"
                    height={32}
                    width={32}
                    alt="Logo"
                />
                <span className={styles.logoTitle}>
                    Coin
                    <span className={styles.logoTitleOrange}>Master</span>
                </span>
            </Link>
        </div>
    );
};
