import { AssetId } from "./assetId";

export default interface MarketStat {
    id: string;
    label: string;
    info: string;
    value: string | null;
    asset?: string;
    assetId?: AssetId;
    icon: string;
}