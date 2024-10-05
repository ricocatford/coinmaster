import { Market } from "@/components/Market";
import { Hero } from "@/components/Hero";
import { GlobalStoreProvider } from "@/providers/GlobalStoreProvider";

export default function Home() {
    return (
        <GlobalStoreProvider>
            <Hero />
            <Market />
        </GlobalStoreProvider>
    );
}
