import { AssetId } from "@/types/assetId";

export default interface Asset {
    id: AssetId;
    name: string;
    symbol: string;
    price: string;
    priceFormatted: string;
    priceShort: string;
    supply: string;
    supplyFormatted: string;
    supplyShort: string;
    maxSupply: string;
    maxSupplyFormatted: string;
    maxSupplyShort: string;
    marketCap: string;
    marketCapFormatted: string;
    marketCapShort: string;
    volume24Hr: string;
    volume24HrFormatted: string;
    volume24HrShort: string;
    vwap24Hr: string;
    vwap24HrFormatted: string;
    vwap24HrShort: string;
    changePercent24Hr: string;
    changePercent24HrFormatted: string;
}