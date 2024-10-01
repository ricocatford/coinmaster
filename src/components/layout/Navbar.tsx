"use client";

import Image from "next/image";
import LogoImg from "@/assets/images/logo.png";
import navLinks from "@/assets/data/navlinks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Image src={LogoImg} height={70} width={70} alt="Logo" />
                <h1 className="font-josefin text-2xl tracking-[-3px]">
                    COIN<span className="text-orange">MASTER</span>
                </h1>
            </div>
            <button className="md:hidden" onClick={() => setToggle(!toggle)}>
                {toggle ? (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="fa-fw text-2xl"
                    />
                ) : (
                    <FontAwesomeIcon icon={faBars} className="fa-fw text-2xl" />
                )}
            </button>

            <div
                className={`hidden md:flex ${
                    toggle &&
                    "sm:flex absolute w-full h-[calc(100vh-86px)] left-0 top-[86px] bg-background"
                }`}
            >
                <ul
                    className={`gap-16 hidden md:flex ${
                        toggle && "sm:flex flex-col p-4 gap-8"
                    }`}
                >
                    {navLinks.map((navLink) => (
                        <li
                            key={navLink.id}
                            className="transition hover:text-turquoise sm:text-xl"
                        >
                            <Link href={navLink.url}>{navLink.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
