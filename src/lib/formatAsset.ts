import Asset from "@/types/asset";
import { FetchedAsset } from "@/types/fetchedAsset";
import { formatCurrency } from "./formatCurrency";
import { formatNumberShort } from "./formatNumberShort";
import { formatPercentage } from "./formatPercentage";

export const formatAsset = (asset: FetchedAsset): Asset => {
    return {
        id: asset.id,
        name: asset.name,
        symbol: asset.symbol,
        price: formatCurrency(asset.priceUsd),
        supply: formatNumberShort(asset.supply),
        marketCap: formatCurrency(asset.marketCapUsd),
        volume24Hr: formatCurrency(asset.volumeUsd24Hr),
        changePercent24Hr: formatPercentage(asset.changePercent24Hr),
    };
};