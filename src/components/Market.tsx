import { Cryptocurrencies } from "./Cryptocurrencies";

export const Market = (): React.JSX.Element => {
    return (
        <div className="container" id="market">
            <Cryptocurrencies />
        </div>
    );
};
