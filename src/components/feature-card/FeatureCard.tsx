import styles from "@/assets/styles/components/Features.module.css";
import Image from "next/image";

interface FeatureCardProps {
    id: number;
    image: string;
    heading: string;
    paragraph: string;
}

export const FeatureCard = ({
    image,
    heading,
    paragraph,
}: FeatureCardProps): React.JSX.Element => {
    console.log(heading);
    return (
        <div className={styles.card}>
            <Image
                src={`/assets/images/features/${image}`}
                alt={heading}
                width={800}
                height={800}
                className={styles.cardImage}
            />
            <h3 className={styles.cardHeading}>{heading}</h3>
            <p>{paragraph}</p>
        </div>
    );
};
