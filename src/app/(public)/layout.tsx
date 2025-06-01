import { Footer } from "@/components/layout/footer/Footer";
import { ShowNavbar } from "@/components/layout/navbar/ShowNavbar";
import { LightRay } from "@/components/light-ray/LightRay";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}): React.JSX.Element {
    return (
        <>
            <ShowNavbar />
            <LightRay />
            <main>{children}</main>
            <Footer />
        </>
    );
}
