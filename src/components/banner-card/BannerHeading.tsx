import styles from "@/assets/styles/components/Market.module.css";
import { ReactNode } from "react";

interface BannerHeadingProps {
    children: ReactNode;
}

export const BannerHeading = ({
    children,
}: BannerHeadingProps): React.JSX.Element => {
    return <h2 className={styles.cardHeading}>{children}</h2>;
};
