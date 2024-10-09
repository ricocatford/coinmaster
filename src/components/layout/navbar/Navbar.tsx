import styles from "@/assets/styles/components/Navbar.module.css";
import navLinks from "@/assets/data/navLinks.json";
import { NavLogo } from "./NavLogo";
import { NavbarClient } from "./NavbarClient";

export const Navbar = (): React.ReactNode => {
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.navContainer}>
                    <NavLogo />
                    <NavbarClient links={navLinks} />
                </div>
            </nav>
        </header>
    );
};
