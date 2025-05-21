import { useState } from "react";
import styles from "@/assets/styles/components/Buttons.module.css";

type ChartButtonProps = {
    labels: string[];
    onChange?: (label: string) => void;
};

export const ChartButton = ({ labels, onChange }: ChartButtonProps) => {
    const [isActive, setIsActive] = useState(labels[0]);

    const handleClick = (label: string) => {
        setIsActive(label);
        onChange?.(label);
    };

    return (
        <div className={styles.chartBtnContainer}>
            {labels.map((label) => (
                <button
                    key={label}
                    className={
                        isActive === label
                            ? styles.chartBtnActive
                            : styles.chartBtn
                    }
                    onClick={() => handleClick(label)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};
