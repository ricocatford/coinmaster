import { ResponsiveNavbar } from "@/components/layout/responsive-navbar/ResponsiveNavbar";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}): React.JSX.Element {
    return (
        <div className="appContainer">
            <ResponsiveNavbar />
            <main className="mainContent">{children}</main>
        </div>
    );
}
