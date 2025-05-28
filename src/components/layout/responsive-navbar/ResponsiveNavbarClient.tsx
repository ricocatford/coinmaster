"use client";

import { NavigationLink } from "@/types/navigationLink";
import { ResponsiveNavLinks } from "./ResponsiveNavLinks";
import styles from "@/assets/styles/components/ResponsiveNavbar.module.css";

export const ResponsiveNavbarClient = ({
    links,
}: {
    links: NavigationLink[];
}) => {
    return (
        <div className={styles.listContainer}>
            <ResponsiveNavLinks links={links} />
        </div>
    );
};
