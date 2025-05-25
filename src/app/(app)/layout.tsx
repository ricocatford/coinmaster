import { ResponsiveNavbar } from "@/components/layout/responsive-navbar/ResponsiveNavbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="appContainer">
            <ResponsiveNavbar />
            <main className="mainContent">{children}</main>
        </div>
    );
}
