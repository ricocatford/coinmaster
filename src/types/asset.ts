import { AssetId } from "@/types/assetId";

export default interface Asset {
    id: AssetId;
    name: string;
    symbol: string;
    price: string;
    supply: string;
    marketCap: string;
    displayMarketCap: string;
    volume24Hr: string;
    displayVolume24Hr: string;
    changePercent24Hr: string;
}