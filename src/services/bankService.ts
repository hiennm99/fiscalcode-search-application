// ============================================
// services/bankService.ts (Fixed)
// ============================================
import { DATABASE_TABLES } from "@constants";
import { typesenseClient } from "@lib";
import type { Bank, SearchParams } from '@types';
import type { SearchResponseHit } from "typesense/lib/Typesense/Documents";

const COLLECTION_NAME = DATABASE_TABLES.BANK;

class BankService {
    async getByFiscalCode(fiscalCode: string): Promise<Bank[]> {
        try {
            const searchParams: SearchParams = {
                q: '*',
                query_by: 'bank_cab,bank_abi',
                filter_by: `fiscal_code:=${fiscalCode}`,
                per_page: 250,
                page: 1
            };

            const searchResult = await typesenseClient
                .collections<Bank>(COLLECTION_NAME)
                .documents()
                .search(searchParams, {});

            return searchResult.hits?.map((hit: SearchResponseHit<Bank>) => hit.document) || [];
        } catch (error) {
            console.error('Typesense getByFiscalCode error:', error);
            return [];
        }
    }

    async getByEntityId(entityId: string): Promise<Bank[]> {
        try {
            const searchParams: SearchParams = {
                q: '*',
                query_by: 'bank_cab,bank_abi,bank_name',
                filter_by: `entity_id:=${entityId}`,
                per_page: 250,
                page: 1
            };

            const searchResult = await typesenseClient
                .collections<Bank>(COLLECTION_NAME)
                .documents()
                .search(searchParams, {});

            return searchResult.hits?.map((hit: SearchResponseHit<Bank>) => hit.document) || [];
        } catch (error) {
            console.error('Typesense getByEntityId error:', error);
            return [];
        }
    }
}

export const bankService = new BankService();