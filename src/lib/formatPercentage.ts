export const formatPercentage = (value: string) =>
    new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        notation: "compact",
        compactDisplay: "short",
    }).format(parseFloat(value));