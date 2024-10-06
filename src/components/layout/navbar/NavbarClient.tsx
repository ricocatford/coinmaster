"use client";

import { useEffect, useState } from "react";
import { MenuToggleButton } from "./MenuToggleButton";
import { NavLink } from "./NavLink";

export type NavLinkType = {
    id: number;
    text: string;
    url: string;
};

export const NavbarClient = ({ links }: { links: NavLinkType[] }) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    useEffect(() => {
        const handleScrollNavVisibility = () => {
            if (window.scrollY > 80) {
                setIsToggled(false);
            }
        };

        window.addEventListener("scroll", handleScrollNavVisibility);

        return () => {
            window.removeEventListener("scroll", handleScrollNavVisibility);
        };
    }, []);

    return (
        <>
            <MenuToggleButton isToggled={isToggled} setIsToggled={setIsToggled} />
            <NavLink isToggled={isToggled} setIsToggled={setIsToggled} links={links} />
        </>
    );
};
