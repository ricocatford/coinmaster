import { Market } from "@/components/Market";
import { Hero } from "@/components/Hero";
import { GlobalStoreProvider } from "@/providers/GlobalStoreProvider";
import { Features } from "@/components/Features";

export default function Home() {
    return (
        <GlobalStoreProvider>
            <Hero />
            <Features />
            {/* <Market /> */}
        </GlobalStoreProvider>
    );
}
