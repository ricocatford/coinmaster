"use client";

import { ReturnButton } from "@/components/buttons/ReturnButton";
import { useFetchAssetById } from "@/hooks/useFetchAssetById";
import { ContentPlaceholder } from "@/components/content-placeholder/ContentPlaceholder";
import styles from "@/assets/styles/components/Asset.module.css";
import { AssetDetails } from "./AssetDetails";
import FetchedAssetResponse from "@/types/fetchedAssetResponse";

export default function Asset({ params }: { params: { id: string } }) {
    const { asset, error, isLoading }: FetchedAssetResponse = useFetchAssetById(params.id);

    return (
        <section className="container full-height">
            <div className={`container border-bottom ${styles.titleContainer}`}>
                <ReturnButton />
                <h1 className="heading">
                    {asset?.name} ({asset?.symbol})
                </h1>
            </div>
            <div>
                <ContentPlaceholder>
                    <AssetDetails
                        asset={asset}
                        isLoading={isLoading}
                        error={error}
                    />
                    
                </ContentPlaceholder>
            </div>
        </section>
    );
}
