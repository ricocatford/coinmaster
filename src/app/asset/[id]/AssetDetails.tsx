import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import FetchedAssetResponse from "@/types/fetchedAssetResponse";

export const AssetDetails = ({
    asset,
    isLoading,
    error,
}: FetchedAssetResponse): React.JSX.Element => {
    return (
        <div>
            {error && (
                <p className="paragraph">
                    Failed to fetch asset. Please try again in a few seconds.
                </p>
            )}
            {isLoading && <LoadingSpinner />}
            {asset && (
                <>
                    <div>
                        <div>
                            {asset.price} {asset.changePercent24Hr}
                        </div>
                        <hr />
                        <div>{asset.displayMarketCap}</div>
                    </div>
                    <div>
                        <div>{asset.displayVolume24Hr}</div>
                        <hr />
                        <div>VWAP24hr</div>
                    </div>
                </>
            )}
        </div>
    );
};
