import { useState } from "react";
import styles from "@/assets/styles/components/buttons/ChartButton.module.css";

type ChartButtonProps = {
    labels: string[];
    onChange?: (label: string) => void;
};

export const ChartButton = ({ labels, onChange }: ChartButtonProps) => {
    const [isActive, setIsActive] = useState<string>(labels[0]);

    const handleClick = (label: string) => {
        setIsActive(label);
        onChange?.(label);
    };

    return (
        <div className={styles.container}>
            {labels.map((label) => (
                <button
                    key={label}
                    className={`${styles.button}
                        ${isActive === label ? styles.active : ""}
                    `}
                    onClick={() => handleClick(label)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};
