export const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" });
    return `${month}`;
};