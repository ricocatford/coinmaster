import { calculateTotalMarketCap } from "@/lib/calculateTotalMarketCap";
import { getMostTradedAsset } from "@/lib/getMostTradedAsset";
import { getTopGainerAsset } from "@/lib/getTopGainerAsset";
import { getTopLoserAsset } from "@/lib/getTopLoserAsset";
import Asset from "@/types/asset";
import MarketStatistic from "@/types/marketStatistic";

export const useMarketStatistics = (assets?: Asset[]): MarketStatistic[] => {
    if (!assets) return [];

    const totalMarketCap = calculateTotalMarketCap(assets);
    const mostTradedAsset = getMostTradedAsset(assets);
    const topGainerAsset = getTopGainerAsset(assets);
    const topLoserAsset = getTopLoserAsset(assets);

    const marketCap: MarketStatistic = {
        id: "marketCap",
        label: "Market Cap",
        info: "Total",
        value: totalMarketCap,
        icon: "globe"
    }

    const mostTraded: MarketStatistic = {
        id: "mostTraded",
        label: "Most Traded",
        info: "(24h)",
        value: mostTradedAsset.value,
        asset: mostTradedAsset.asset,
        assetId: mostTradedAsset.assetId,
        icon: "moneyBillTrendUp"
    }

    const topGainer: MarketStatistic = {
        id: "topGainer",
        label: "Top Gainer",
        info: "(24h)",
        value: topGainerAsset.value,
        asset: topGainerAsset.asset,
        assetId: topGainerAsset.assetId,
        icon: "arrowTrendUp"
    }

    const topLoser: MarketStatistic = {
        id: "topLoser",
        label: "Top Loser",
        info: "(24h)",
        value: topLoserAsset.value,
        asset: topLoserAsset.asset,
        assetId: topLoserAsset.assetId,
        icon: "arrowTrendDown"
    }

    return [marketCap, mostTraded, topGainer, topLoser];
};