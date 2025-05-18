import { FetchedAssetHistory } from "@/types/fetchedAssetHistory"
import { formatDateTime } from "./formatDateTime"
import { formatCurrency } from "./formatCurrency";
import { formatCurrencyShort } from "./formatCurrencyShort";

export const formatAssetHistory = (assetHistory: FetchedAssetHistory[]) => {
    const history = assetHistory.map((entry: FetchedAssetHistory) => ({
        priceValue: Math.round(parseFloat(entry.priceUsd) * 100) / 100,
        price: formatCurrency(entry.priceUsd),
        priceShort: formatCurrencyShort(entry.priceUsd),
        date: formatDateTime(entry.date)
    }));

    return history;
};