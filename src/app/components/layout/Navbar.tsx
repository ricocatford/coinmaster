"use client";

import styles from "@/assets/styles/components/Navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import navLinks from "@/assets/data/navlinks.json";

export const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.navContainer}>
                    <div className={styles.logoContainer}>
                        <Link
                            href="/"
                            className={styles.logo}
                            aria-label="Logo, go to Home page"
                        >
                            <Image
                                src={logo}
                                height={70}
                                width={70}
                                alt="Logo"
                            />
                            <span className={styles.logoTitle}>
                                Coin
                                <span className={styles.logoTitleOrange}>
                                    Master
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className={styles.linksContainer}>
                        <ul className={styles.linksList}>
                            {navLinks.map((navLink) => (
                                <Link href={navLink.url}>
                                    <li
                                        key={navLink.id}
                                        className={styles.links}
                                    >
                                        {navLink.text}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.controlsContainer}>
                        <button>Hello</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
