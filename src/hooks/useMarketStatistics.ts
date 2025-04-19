import { calculateTotalMarketCap } from "@/lib/calculateTotalMarketCap";
import Asset from "@/types/asset";
import MarketStat from "@/types/marketStat";
import MarketStatistics from "@/types/marketStatistics";

export const useMarketStatistics = (assets: Asset[]): MarketStatistics | undefined => {
    if (!assets || assets.length === 0) return undefined;

    const totalMarketCap: MarketStat = {
        id: "totalMarketCap",
        label: "Total Market Cap",
        value: calculateTotalMarketCap(assets),
        icon: "faGlobe"
    }

    return { statistics: [totalMarketCap] };
};