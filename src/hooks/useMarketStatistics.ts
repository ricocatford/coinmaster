import { calculateTotalMarketCap } from "@/lib/calculateTotalMarketCap";
import { getMostTradedAsset } from "@/lib/getMostTradedAsset";
import { getTopGainerAsset } from "@/lib/getTopGainerAsset";
import { getTopLoserAsset } from "@/lib/getTopLoserAsset";
import Asset from "@/types/asset";
import MarketStat from "@/types/marketStat";
import MarketStatistics from "@/types/marketStatistics";

export const useMarketStatistics = (assets: Asset[]): MarketStatistics | undefined => {
    if (!assets || assets.length === 0) return undefined;

    const totalMarketCap = calculateTotalMarketCap(assets);
    const mostTradedAsset = getMostTradedAsset(assets);
    const topGainerAsset = getTopGainerAsset(assets);
    const topLoserAsset = getTopLoserAsset(assets);

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
        value: topGainerAsset.value,
        asset: topGainerAsset.asset,
        assetId: topGainerAsset.assetId,
        icon: "arrowTrendUp"
    }

    const topLoser: MarketStat = {
        id: "topLoser",
        label: "Top Loser",
        info: "24h",
        value: topLoserAsset.value,
        asset: topLoserAsset.asset,
        assetId: topLoserAsset.assetId,
        icon: "arrowTrendDown"
    }

    return { data: [marketCap, mostTraded, topGainer, topLoser] };
};