export const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.toLocaleString("en-US", { day: "numeric" });
    const month = date.toLocaleString("en-US", { month: "short" });
    const time = date.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "2-digit"
    });
    return `${time} ${day} ${month}`;
};