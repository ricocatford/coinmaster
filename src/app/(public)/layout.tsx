import { Footer } from "@/components/layout/footer/Footer";
import { ShowNavbarOnHome } from "@/components/layout/navbar/ShowNavbarOnHome";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ShowNavbarOnHome />
            <main>{children}</main>
            <Footer />
        </>
    );
}
