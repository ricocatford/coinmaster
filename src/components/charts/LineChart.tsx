import {
    LineChart,
    Line,
    Tooltip,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

type DataPoint = {
    priceValue: number;
    price: string;
    priceShort: string;
    date: string;
};

type Props = {
    data: DataPoint[];
};

export default function LineChartX({ data }: Props) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <XAxis
                    dataKey="date"
                    stroke="#8884d8"
                    tick={{ fill: "#8884d8", fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    domain={["dataMin", "dataMax"]}
                    stroke="#82ca9d"
                    tick={{ fill: "#82ca9d", fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                />
                <Line
                    type="monotone"
                    dataKey="priceValue"
                    stroke="#fff"
                    strokeWidth={2}
                    dot={{ r: 2 }}
                    activeDot={{ r: 3 }}
                />
                <Tooltip
                    cursor={false}
                    contentStyle={{
                        fontSize: 10,
                        backgroundColor: "#404040",
                        border: "#cccccc",
                        borderRadius: "0.75rem",
                    }}
                    labelFormatter={() => ""}
                    formatter={(price: number) => [`${price}`, "Price"]}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
