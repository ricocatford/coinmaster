import { Asset } from "@/types/asset";
import { FetchedAsset } from "@/types/fetchedAsset";
import { formatCurrencyShort } from "./formatCurrencyShort";
import { formatNumberShort } from "./formatNumberShort";
import { formatNumber } from "./formatNumber";
import { formatPercentage } from "./formatPercentage";
import { formatCurrency } from "./formatCurrency";

export const formatAsset = (asset: FetchedAsset): Asset => {
    const formatted: Asset = {
        id: asset.id,
        name: asset.name,
        symbol: asset.symbol,
        price: asset.priceUsd,
        priceFormatted: formatCurrency(asset.priceUsd),
        priceShort: formatCurrencyShort(asset.priceUsd),
        supply: asset.supply,
        supplyFormatted: formatNumber(asset.supply),
        supplyShort: formatNumberShort(asset.supply),
        maxSupply: asset.maxSupply,
        maxSupplyFormatted: formatNumber(asset.maxSupply),
        maxSupplyShort: formatNumberShort(asset.maxSupply),
        marketCap: asset.marketCapUsd,
        marketCapFormatted: formatCurrency(asset.marketCapUsd),
        marketCapShort: formatCurrencyShort(asset.marketCapUsd),
        volume24Hr: asset.volumeUsd24Hr,
        volume24HrFormatted: formatCurrency(asset.volumeUsd24Hr),
        volume24HrShort: formatCurrencyShort(asset.volumeUsd24Hr),
        vwap24Hr: asset.vwap24Hr,
        vwap24HrFormatted: formatCurrency(asset.vwap24Hr),
        vwap24HrShort: formatCurrencyShort(asset.vwap24Hr),
        changePercent24Hr: asset.changePercent24Hr,
        changePercent24HrFormatted: formatPercentage(asset.changePercent24Hr),
    };

    for (const [key, value] of Object.entries(formatted)) {
        if (value === null) {
            if (key in formatted) formatted[key as keyof Asset] = "N/A";
            const formattedKey = `${key}Formatted`;
            const shortKey = `${key}Short`;
            if (formattedKey in formatted) formatted[formattedKey as keyof Asset] = "N/A";
            if (shortKey in formatted) formatted[shortKey as keyof Asset] = "N/A";
        }
    }

    return formatted;
};