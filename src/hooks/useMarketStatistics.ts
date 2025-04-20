import { calculateTotalMarketCap } from "@/lib/calculateTotalMarketCap";
import { getMostTradedAsset } from "@/lib/getMostTradedAsset";
import Asset from "@/types/asset";
import MarketStat from "@/types/marketStat";
import MarketStatistics from "@/types/marketStatistics";

export const useMarketStatistics = (assets: Asset[]): MarketStatistics | undefined => {
    if (!assets || assets.length === 0) return undefined;

    const totalMarketCap = calculateTotalMarketCap(assets);
    const mostTradedAsset = getMostTradedAsset(assets);

    const marketCap: MarketStat = {
        id: "marketCap",
        label: "Market Cap",
        info: "Total",
        value: totalMarketCap,
        icon: "globe"
    }

    const mostTraded: MarketStat = {
        id: "mostTraded",
        label: "Most Traded",
        info: "24h",
        value: mostTradedAsset.value,
        asset: mostTradedAsset.asset,
        assetId: mostTradedAsset.assetId,
        icon: "moneyBillTrendUp"
    }

    const topGainer: MarketStat = {
        id: "topGainer",
        label: "Top Gainer",
        info: "24h",
        value: "+6.7%",
        asset: "Ethereum",
        icon: "arrowTrendUp"
    }

    const topLoser: MarketStat = {
        id: "topLoser",
        label: "Top Loser",
        info: "24h",
        value: "-1.4%",
        asset: "Dogecoin",
        icon: "arrowTrendDown"
    }

    return { data: [marketCap, mostTraded, topGainer, topLoser] };
};