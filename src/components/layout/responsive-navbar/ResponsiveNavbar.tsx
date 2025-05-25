import { NavLogo } from "../navbar/NavLogo";
import styles from "@/assets/styles/components/ResponsiveNavbar.module.css";

export const ResponsiveNavbar = (): React.JSX.Element => {
    return (
        <nav aria-label="Main navigation" className={styles.navContainer}>
            <header>
                <NavLogo />
            </header>
            <div>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </div>
        </nav>
    );
};
