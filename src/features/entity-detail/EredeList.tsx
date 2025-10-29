// ============================================
// components/entity-detail/JOINTList.tsx
// ============================================
import { BORROWER_TYPES } from "@constants";
import { entityService } from "@services";
import { useEntityStore } from "@stores";
import type { Entity } from "@types";
import { Loader2,Shield } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CURRENT_ROLE = BORROWER_TYPES['EREDE']; // This is a number (e.g., 5)

export const EredeList: React.FC = () => {
    const [JOINTs, setJOINTs] = useState<Entity[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // ✅ FIX: Select individual values, not creating new object
    const currentRole = useEntityStore((state) => state.currentRole);
    const currentSourceSystem = useEntityStore((state) => state.currentSourceSystem);
    const currentUniqueLoanId = useEntityStore((state) => state.currentUniqueLoanId);

    useEffect(() => {
        const fetchData = async () => {
            // ✅ Only fetch when we have loan info AND entity is NOT a JOINT
            if (!currentSourceSystem || !currentUniqueLoanId || currentRole === CURRENT_ROLE) {
                setJOINTs([]);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            try {
                const data = await entityService.searchByLoan({
                    sourceSystem: currentSourceSystem,
                    uniqueId: currentUniqueLoanId,
                    borrowerTypeId: CURRENT_ROLE,
                    page: 1,
                    perPage: 20
                });

                setJOINTs(data.results);
            } catch (error) {
                console.error('Error fetching JOINTs:', error);
                setJOINTs([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentSourceSystem, currentUniqueLoanId, currentRole]);

    // ✅ If current entity is a JOINT, don't show this section
    if (currentRole === CURRENT_ROLE) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4"/>
                <p className="text-gray-500">Current role is JOINT</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin"/>
            </div>
        );
    }

    if (JOINTs.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4"/>
                <p className="text-gray-500">No JOINTs found for this entity</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {JOINTs.map((entity) => (
                <Link
                    key={entity.entity_id} // ✅ Use entity_id as key instead of index
                    to={`/entity/${entity.entity_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-lg hover:border-blue-500 border border-transparent transition-all duration-200 cursor-pointer"
                >
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-indigo-100 rounded-lg">
                            <Shield className="w-6 h-6 text-indigo-600"/>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {entity.name || 'JOINT'}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div>
                                    <span className="text-gray-500">Fiscal Code:</span>
                                    <span className="ml-2 text-gray-900">{entity.fiscal_code || 'N/A'}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Source:</span>
                                    <span className="ml-2 text-gray-900">{entity.source_system}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};