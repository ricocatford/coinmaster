"use client";

import { Main } from "@/components/pages/about/Main";
import { Navbar } from "@/components/pages/about/Navbar";
import links from "@/assets/data/aboutLinks.json";
import { useState } from "react";
import { Features } from "@/components/pages/about/Features";
import { Technologies } from "@/components/pages/about/Technologies";

export default function AboutPage(): React.JSX.Element {
    const sections: string[] = links.map((link) => link.label);
    const [section, setSection] = useState(sections[0]);

    return (
        <>
            <Main />
            <Navbar links={links} onChange={(label) => setSection(label)} />
            <Features isActive={section === "Features"} />
            <Technologies isActive={section === "Technologies"} />
        </>
    );
}
