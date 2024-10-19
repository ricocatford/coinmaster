export const formatCurrency = (value: string) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 1,
        notation: "compact",
        compactDisplay: "short",
    }).format(parseFloat(value));