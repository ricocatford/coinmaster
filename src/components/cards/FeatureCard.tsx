import styles from "@/assets/styles/components/Features.module.css";
import Image from "next/image";

type FeatureCardProps = {
    id: number;
    image: string;
    heading: string;
    paragraph: string;
};

export const FeatureCard = ({
    id,
    image,
    heading,
    paragraph,
}: FeatureCardProps): React.JSX.Element => {
    return (
        <article className={styles.card}>
            <div
                className={`${styles.cardContainer} 
                    ${id % 2 !== 0 ? styles.cardContainerReverse : ""}
                `}
            >
                <div className={styles.imageContainer}>
                    <Image
                        src={`/assets/images/features/${image}`}
                        alt={heading}
                        width={539}
                        height={539}
                        className={styles.cardImage}
                        priority
                    />
                </div>
                <div className={styles.descriptionContainer}>
                    <h3 className={styles.cardHeading}>{heading}</h3>
                    <p className={styles.cardParagraph}>{paragraph}</p>
                </div>
            </div>
        </article>
    );
};
