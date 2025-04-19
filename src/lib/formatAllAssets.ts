import Asset from "@/types/asset";
import { FetchedAsset } from "@/types/fetchedAsset";
import { formatCurrency } from "./formatCurrency";
import { formatNumber } from "./formatNumber";
import { formatNumberShort } from "./formatNumberShort";
import { formatPercentage } from "./formatPercentage";

export const formatAllAssets = (assets: FetchedAsset[]): Asset[] => (
    Array.isArray(assets) ? assets.map((asset: FetchedAsset) => ({
        id: asset.id,
        name: asset.name,
        symbol: asset.symbol,
        price: formatCurrency(asset.priceUsd),
        supply: formatNumberShort(asset.supply),
        marketCap: asset.marketCapUsd,
        displayMarketCap: formatCurrency(asset.marketCapUsd),
        volume24Hr: asset.volumeUsd24Hr,
        displayVolume24Hr: formatCurrency(asset.volumeUsd24Hr),
        changePercent24Hr: formatPercentage(asset.changePercent24Hr),
    })) : []
)