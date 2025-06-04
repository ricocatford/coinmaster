import { useGlobal } from "@/hooks/global-store/useGlobal";
import { GlobalStore } from "@/stores/GlobalStore";
import { AssetId } from "@/types/assetId";
import styles from "@/assets/styles/components/pages/asset/AssetActions.module.css";
import buttonStyles from "@/assets/styles/components/buttons/GenericButton.module.css";

type AssetActionsProps = {
    assetId: AssetId;
    variant: "top" | "bottom";
};

export const AssetActions = ({
    assetId,
    variant,
}: AssetActionsProps): React.JSX.Element => {
    const { store }: { store: GlobalStore } = useGlobal();

    const isAssetTracked = store?.tracker.includes(assetId);

    return (
        <div
            className={`${styles.container} ${
                variant === "top" ? styles.top : styles.bottom
            }`}
        >
            <button
                type="button"
                onClick={() => store.handleAsset(assetId)}
                className={`${buttonStyles.button} ${buttonStyles.secondary}`}
            >
                {!isAssetTracked ? "Track" : "Untrack"}
            </button>
        </div>
    );
};
