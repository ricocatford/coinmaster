export const formatPercentage = (value: string) => {
    const num: number = parseFloat(value);
    const formatted = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        notation: "compact",
        compactDisplay: "short",
    }).format(num);

    return num > 0 ? `+${formatted}` : formatted;
};
