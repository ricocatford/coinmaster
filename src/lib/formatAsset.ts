import Asset from "@/types/asset";
import { FetchedAsset } from "@/types/fetchedAsset";
import { formatCurrencyShort } from "./formatCurrencyShort";
import { formatNumberShort } from "./formatNumberShort";
import { formatPercentage } from "./formatPercentage";

export const formatAsset = (asset: FetchedAsset): Asset => {
    return {
        id: asset.id,
        name: asset.name,
        symbol: asset.symbol,
        price: formatCurrencyShort(asset.priceUsd),
        supply: formatNumberShort(asset.supply),
        marketCap: formatCurrencyShort(asset.marketCapUsd),
        volume24Hr: formatCurrencyShort(asset.volumeUsd24Hr),
        changePercent24Hr: formatPercentage(asset.changePercent24Hr),
    };
};