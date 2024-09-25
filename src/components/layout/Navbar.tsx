import Image from "next/image";
import LogoImg from "@/assets/images/logo.png";
import styles from "@/assets/styles/components/layout/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className="container mx-auto mb-8 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Image src={LogoImg} height={70} width={70} alt="Logo" />
                <h1 className={`${styles.logoHeading} font-josefin text-2xl`}>
                    COIN<span className="text-orange">MASTER</span>
                </h1>
            </div>
            <ul className="flex gap-16 text-lg">
                <li>Cryptocurrencies</li>
                <li>Tracker</li>
                <li>About</li>
            </ul>
        </nav>
    );
}
