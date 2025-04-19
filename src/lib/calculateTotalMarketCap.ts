import Asset from "@/types/asset";
import { formatCurrency } from "./formatCurrency";

export const calculateTotalMarketCap = (assets: Asset[]): string | null => {
    const totalMarketCap: number = assets?.reduce((acc, asset) => {
        if (asset.marketCap) {
            return acc + parseFloat(asset.marketCap);
        }
        return acc;
    }, 0);

    const marketCap: string = formatCurrency(totalMarketCap.toString())

    return marketCap || null;
}