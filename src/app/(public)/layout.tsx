import { Footer } from "@/components/layout/footer/Footer";
import { ShowNavbarOnHome } from "@/components/layout/navbar/ShowNavbarOnHome";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}): React.JSX.Element {
    return (
        <>
            <ShowNavbarOnHome />
            <main>{children}</main>
            <Footer />
        </>
    );
}
