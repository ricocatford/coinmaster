import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import FetchedAssetResponse from "@/types/fetchedAssetResponse";

export const AssetDetails = ({
    asset,
    isLoading,
    error,
}: FetchedAssetResponse): React.JSX.Element => {
    console.log(asset);
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
                            {asset.priceFormatted} ({asset.priceShort}){" "}
                            {asset.changePercent24HrFormatted}%
                        </div>
                        <hr />
                        <div>
                            {asset.marketCapFormatted} ({asset.marketCapShort})
                        </div>
                    </div>
                    <div>
                        <div>
                            Supply: {asset.supplyFormatted} ({asset.supplyShort}
                            )
                        </div>
                        <hr />
                        <div>
                            Max Supply: {asset.maxSupplyFormatted} (
                            {asset.maxSupplyShort})
                        </div>
                    </div>
                    <div>
                        <div>
                            {asset.volume24HrFormatted} ({asset.volume24HrShort}
                            )
                        </div>
                        <hr />
                        <div>
                            {asset.vwap24HrFormatted} ({asset.vwap24HrFormatted}
                            )
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
