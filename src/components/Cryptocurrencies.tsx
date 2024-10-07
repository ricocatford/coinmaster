"use client";

import formatAssets from "@/lib/formatAssets";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Cryptocurrencies = () => {
    const { data, error, isLoading } = useSWR(
        "https://api.coincap.io/v2/assets",
        fetcher
    );

    if (error) return <p>Failed to fetch assets.</p>;

    if (isLoading) return <p>Loading assets...</p>;

    const assets = formatAssets(data.data);

    return (
        <section>
            <h2>Cryptocurrencies</h2>
            <table>
                <thead>
                    <tr>
                        <th># Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Supply</th>
                        <th>Market Cap</th>
                        <th>Volume (24hr)</th>
                        <th>Change % (24hr)</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset: any) => (
                        <tr key={asset.id}>
                            <td>{asset.rank}</td>
                            <td>
                                {asset.name} ({asset.symbol})
                            </td>
                            <td>{asset.price}</td>
                            <td>{asset.supply}</td>
                            <td>{asset.marketCap}</td>
                            <td>{asset.volume24Hr}</td>
                            <td>{asset.changePercent24Hr}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
