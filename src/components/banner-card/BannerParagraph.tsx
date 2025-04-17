import styles from "@/assets/styles/components/Market.module.css";
import { ReactNode } from "react";

interface BannerParagraphProps {
    children: ReactNode;
}

export const BannerParagraph = ({
    children,
}: BannerParagraphProps): React.JSX.Element => {
    return <p className={styles.cardParagraph}>{children}</p>;
};
