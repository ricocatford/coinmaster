"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export const ShowNavbarOnHome = () => {
    const pathname = usePathname();

    if (pathname !== "/") return null;

    return <Navbar />
}