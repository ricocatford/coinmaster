import { Cryptocurrencies } from "./Cryptocurrencies";

export const Market = (): React.ReactNode => {
    return (
        <div className="container" id="market">
            <Cryptocurrencies />
        </div>
    );
};
