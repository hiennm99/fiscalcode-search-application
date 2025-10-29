// ============================================
// components/entity-detail/AssetList.tsx
// ============================================
import { assetService } from "@services";
import { useEntityStore } from "@stores";
import type { Asset } from "@types";
import { reformatAsset } from "@utils";
import { Building2, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const AssetList: React.FC = () => {
    const [assets, setAssets] = useState<Asset[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const currentEntityId = useEntityStore((state) => state.currentEntityId);

    useEffect(() => {
        const fetchAssets = async () => {
            if (!currentEntityId) {
                setAssets([]);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            try {
                const data = await assetService.getByEntityId(currentEntityId);
                const formattedData = data.map((entry: Asset) => reformatAsset(entry));
                setAssets(formattedData);
            } catch (error) {
                console.error('Error fetching assets:', error);
                setAssets([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAssets();
    }, [currentEntityId]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
            </div>
        );
    }

    if (assets.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No assets found for this entity</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {assets.map((entry, index) => (
                <AssetCard key={index} entry={entry} index={index} />
            ))}
        </div>
    );
};

const AssetCard: React.FC<{ entry: Asset; index: number }> = ({ entry, index }) => (
    <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex items-start gap-3 p-6 pb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1 pt-1">
                <h3 className="text-base font-semibold text-gray-900">
                    Asset {index + 1}
                </h3>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:divide-x divide-gray-200 px-6 pb-6">
            {/*Origin Address Details*/}
            <div className="lg:px-6">
                <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Address Category:</span>
                        <span className="text-gray-900 italic">{entry.address_category || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Origin Street:</span>
                        <span className="text-gray-900 italic">{entry.origin_street || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Origin City:</span>
                        <span className="text-gray-900 italic">{entry.origin_city || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Origin Province:</span>
                        <span className="text-gray-900 italic">{entry.origin_province || 'N/A'}</span>
                    </div>
                </div>
            </div>

            {/*Validated Address Details*/}
            <div className="lg:pr-6">
                <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Street:</span>
                        <span className="text-gray-900 italic">{entry.street || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Postcode:</span>
                        <span className="text-gray-900 italic">{entry.postcode || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">City:</span>
                        <span className="text-gray-900 italic">{entry.city || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Province:</span>
                        <span className="text-gray-900 italic">{entry.province || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Country:</span>
                        <span className="text-gray-900 italic">{entry.country || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Similarity:</span>
                        <span
                            className={`italic ${
                                entry.similar_score !== undefined && entry.similar_score >= 80
                                    ? 'text-green-600'
                                    : entry.similar_score !== undefined && entry.similar_score >= 50
                                        ? 'text-yellow-500'
                                        : 'text-red-500'
                            }`}
                        >
                          {entry.similar_score !== undefined ? `${entry.similar_score} %` : 'N/A'}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Notes:</span>
                        <span className="text-gray-900 italic">{entry.address_notes || 'N/A'}</span>
                    </div>
                </div>
            </div>

            {/*Extended Details*/}
            <div className="lg:pr-6">
                <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Sub:</span>
                        <span className="text-gray-900 italic">{entry.asset_sub || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Particle Sub:</span>
                        <span className="text-gray-900 italic">{entry.asset_particle_sub || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Zone:</span>
                        <span className="text-gray-900 italic">{entry.asset_zone || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Class:</span>
                        <span className="text-gray-900 italic">{entry.asset_class || 'N/A'}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Sheet:</span>
                        <span className="text-gray-900 italic">{entry.asset_sheet || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Category:</span>
                        <span className="text-gray-900 italic">{entry.asset_category || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Dimension:</span>
                        <span className="text-gray-900 italic">{entry.asset_dimension || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Asset Type:</span>
                        <span className="text-gray-900 italic">{entry.asset_type || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Cadastral Tax Base:</span>
                        <span className="text-gray-900 italic">{entry.cadastral_tax_base || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Ownership:</span>
                        <span className="text-gray-900 italic">{entry.asset_ownership || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Compr Avg:</span>
                        <span className="text-gray-900 italic">{entry.asset_compr_avg || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Estimated Asset Value:</span>
                        <span className="text-gray-900 italic">
                          € {entry.est_asset_value !== undefined
                            ? new Intl.NumberFormat('de-DE').format(Number(entry.est_asset_value))
                            : 'N/A'}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Estimated Ownership Value:</span>
                        <span className="text-gray-900 italic">
                          € {entry.est_ownership_value !== undefined
                            ? new Intl.NumberFormat('de-DE').format(Number(entry.est_ownership_value))
                            : 'N/A'}
                        </span>                    </div>
                </div>
            </div>

            {/*Metadata*/}
            <div className="lg:pl-6">
                <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Source:</span>
                        <span className="text-gray-900 italic">{entry.source_system || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Created Date:</span>
                        <span className="text-gray-900 italic">{entry.created_date || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Modified Date:</span>
                        <span className="text-gray-900 italic">{entry.modified_date || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-600">Extracted Date:</span>
                        <span className="text-gray-900 italic">{entry.extracted_date || 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);