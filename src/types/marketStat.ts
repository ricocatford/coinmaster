export default interface MarketStat {
    id: string;
    label: string;
    info: string;
    value: string | null;
    asset?: string;
    icon: string;
}