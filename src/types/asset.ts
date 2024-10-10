import { AssetId } from "@/types/assetId";

export default interface Asset {
    id: AssetId;
    rank: string;
    name: string;
    symbol: string;
    price: string;
    supply: string;
    marketCap: string;
    volume24Hr: string;
    changePercent24Hr: string;
}