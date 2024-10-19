export const formatNumber = (value: string) =>
    new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 1,
        notation: "compact",
        compactDisplay: "short",
    }).format(parseFloat(value));