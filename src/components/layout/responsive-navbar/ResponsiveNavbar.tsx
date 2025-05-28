import { NavLogo } from "../navbar/NavLogo";
import sideNavLinks from "@/assets/data/sideNavLinks.json";
import { ResponsiveNavbarClient } from "./ResponsiveNavbarClient";
import styles from "@/assets/styles/components/ResponsiveNavbar.module.css";

export const ResponsiveNavbar = (): React.JSX.Element => {
    return (
        <div className={styles.navShell}>
            <nav aria-label="Main navigation" className={styles.navContainer}>
                <ResponsiveNavbarClient links={sideNavLinks} />
            </nav>
        </div>
    );
};
