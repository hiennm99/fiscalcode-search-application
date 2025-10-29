// ============================================
// services/AssetApi.service.ts (Fixed)
// ============================================
import { DATABASE_TABLES } from "@constants";
import { typesenseClient } from "@lib";
import type { Asset, SearchParams } from '@types';
import type { SearchResponseHit } from "typesense/lib/Typesense/Documents";

const COLLECTION_NAME = DATABASE_TABLES.ASSET;

class AssetService {
    async getByFiscalCode(fiscalCode: string): Promise<Asset[]> {
        try {
            const searchParams: SearchParams = {
                q: '*',
                query_by: 'street,city',
                filter_by: `fiscal_code:=${fiscalCode}`,
                per_page: 250,
                page: 1
            };

            const searchResult = await typesenseClient
                .collections<Asset>(COLLECTION_NAME)
                .documents()
                .search(searchParams, {});

            return searchResult.hits?.map((hit: SearchResponseHit<Asset>) => hit.document) || [];
        } catch (error) {
            console.error('Typesense getByFiscalCode error:', error);
            return [];
        }
    }

    async getByEntityId(entityId: string): Promise<Asset[]> {
        try {
            const searchParams: SearchParams = {
                q: '*',
                query_by: 'street,city,province',
                filter_by: `entity_id:=${entityId}`,
                per_page: 250,
                page: 1
            };

            const searchResult = await typesenseClient
                .collections<Asset>(COLLECTION_NAME)
                .documents()
                .search(searchParams, {});

            return searchResult.hits?.map((hit: SearchResponseHit<Asset>) => hit.document) || [];
        } catch (error) {
            console.error('Typesense getByEntityId error:', error);
            return [];
        }
    }
}

export const assetService = new AssetService();