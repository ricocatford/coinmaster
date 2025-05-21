export const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const point = payload[0].payload;
        return (
            <div
                style={{
                    backgroundColor: "#404040",
                    padding: "0.5rem",
                    borderRadius: "0.75rem",
                    fontSize: "10px",
                }}
            >
                <p>{point.date}</p>
                <p>Price: {point.price}</p>
            </div>
        );
    }

    return null;
};
