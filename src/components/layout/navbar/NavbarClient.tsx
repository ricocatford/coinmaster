"use client";

import { useEffect, useState } from "react";
import { NavToggleButton } from "./NavToggleButton";
import { NavLinks } from "./NavLinks";
import { NavigationLink } from "@/types/navigationLink";

export const NavbarClient = ({
    links,
}: {
    links: NavigationLink[];
}): React.JSX.Element => {
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
            <NavLinks
                isToggled={isToggled}
                setIsToggled={setIsToggled}
                links={links}
            />
        </>
    );
};
