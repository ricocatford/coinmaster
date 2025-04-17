import styles from "@/assets/styles/components/Market.module.css";
import { ReactNode } from "react";

interface BannerCardProps {
    children: ReactNode;
}

export const BannerCard = ({
    children,
}: BannerCardProps): React.JSX.Element => {
    return <div className={styles.card}>{children}</div>;
};
