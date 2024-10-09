"use client";

import { useEffect, useState } from "react";
import { NavToggleButton } from "./NavToggleButton";
import { NavLink } from "./NavLink";

export type NavigationLink = {
    id: number;
    text: string;
    url: string;
};

export const NavbarClient = ({
    links,
}: {
    links: NavigationLink[];
}): React.ReactNode => {
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
            <NavToggleButton
                isToggled={isToggled}
                setIsToggled={setIsToggled}
            />
            <NavLink
                isToggled={isToggled}
                setIsToggled={setIsToggled}
                links={links}
            />
        </>
    );
};
