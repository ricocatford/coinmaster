"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export const ShowNavbar = () => {
    const pathname = usePathname();

    const pathsWithNavbar = ["/", "/about"];

    if (!pathsWithNavbar.includes(pathname)) return null;

    return <Navbar />;
};
