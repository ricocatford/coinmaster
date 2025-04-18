import { ReactNode } from "react";
import styles from "@/assets/styles/components/Card.module.css";

interface CardProps {
    children: ReactNode;
}

export const Card = ({ children }: CardProps): React.JSX.Element => {
    return <div className={styles.card}>{children}</div>;
};
