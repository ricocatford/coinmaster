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
        </>
    );
}
