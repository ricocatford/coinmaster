import styles from "@/assets/styles/components/Navbar.module.css";
import navLinks from "@/assets/data/navlinks.json";
import { Logo } from "./Logo";
import { NavbarClient } from "./NavbarClient";

export const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.navContainer}>
                    <Logo />
                    <NavbarClient links={navLinks} />
                </div>
            </nav>
        </header>
    );
};
