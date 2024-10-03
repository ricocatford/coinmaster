"use client";

import styles from "@/assets/styles/components/Navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import navLinks from "@/assets/data/navlinks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

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
                                height={56}
                                width={56}
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
                    <div className={styles.menuIconBackground}>
                        <button
                            className={styles.menuIconContainer}
                            onClick={() => setToggle(!toggle)}
                        >
                            {!toggle ? (
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className={styles.menuIcon}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className={styles.menuIcon}
                                />
                            )}
                        </button>
                    </div>
                    <div
                        className={
                            !toggle
                                ? styles.linksContainer
                                : styles.linksContainerActive
                        }
                    >
                        <ul className={styles.linksList}>
                            {navLinks.map((navLink) => (
                                <Link href={navLink.url}>
                                    <li
                                        key={navLink.id}
                                        className={styles.link}
                                    >
                                        {navLink.text}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                        <Link
                            href="#"
                            className={`btn btn--primary ${styles.ctaLink}`}
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};
