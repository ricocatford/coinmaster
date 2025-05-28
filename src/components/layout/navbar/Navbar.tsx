import navLinks from "@/assets/data/navLinks.json";
import { NavLogo } from "./NavLogo";
import { NavbarClient } from "./NavbarClient";
import styles from "@/assets/styles/components/navbar/Navbar.module.css";

export const Navbar = (): React.JSX.Element => {
    return (
        <header className={styles.header}>
            <nav aria-label="Main navigation">
                <div className={styles.container}>
                    <NavLogo />
                    <NavbarClient links={navLinks} />
                </div>
            </nav>
        </header>
    );
};
