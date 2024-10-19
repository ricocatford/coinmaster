import Asset from "@/types/asset";
import { fetchedAsset } from "@/types/fetchedAsset";
import { formatCurrency } from "./formatCurrency";
import { formatNumber } from "./formatNumber";
import { formatPercentage } from "./formatPercentage";

export const formatAsset = (asset: fetchedAsset): Asset => {
    return {
        id: asset.id,
        rank: asset.rank,
        name: asset.name,
        symbol: asset.symbol,
        price: formatCurrency(asset.priceUsd),
        supply: formatNumber(asset.supply),
        marketCap: formatCurrency(asset.marketCapUsd),
        volume24Hr: formatCurrency(asset.volumeUsd24Hr),
        changePercent24Hr: formatPercentage(asset.changePercent24Hr),
    };
};