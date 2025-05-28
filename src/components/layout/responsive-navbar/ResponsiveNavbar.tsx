import { NavLogo } from "../navbar/NavLogo";
import sideNavLinks from "@/assets/data/sideNavLinks.json";
import { ResponsiveNavbarClient } from "./ResponsiveNavbarClient";
import styles from "@/assets/styles/components/responsive-navbar/ResponsiveNavbar.module.css";

export const ResponsiveNavbar = (): React.JSX.Element => {
    return (
        <div className={styles.shell}>
            <nav aria-label="Main navigation" className={styles.container}>
                <ResponsiveNavbarClient links={sideNavLinks} />
            </nav>
        </div>
    );
};
