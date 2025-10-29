// ============================================
// services/jobService.ts
// ============================================
import { DATABASE_TABLES } from "@constants";
import { typesenseClient } from "@lib";
import type { Job, SearchParams } from '@types';
import type { SearchResponseHit } from "typesense/lib/Typesense/Documents";

const COLLECTION_NAME = DATABASE_TABLES.JOB;

class JobService {
    async getByFiscalCode(fiscalCode: string): Promise<Job[]> {
        try {
            const searchParams: SearchParams = {
                q: '*',
                query_by: 'employer_name',
                filter_by: `fiscal_code:=${fiscalCode}`,
                per_page: 250,
                page: 1
            };

            const searchResult = await typesenseClient
                .collections<Job>(COLLECTION_NAME)
                .documents()
                .search(searchParams, {});

            return searchResult.hits?.map((hit: SearchResponseHit<Job>) => hit.document) || [];
        } catch (error) {
            console.error('Typesense getByFiscalCode error:', error);
            return [];
        }
    }

    async getByEntityId(entityId: string): Promise<Job[]> {
        try {
            const searchParams: SearchParams = {
                q: '*',
                query_by: 'employer_name',
                filter_by: `entity_id:=${entityId}`,
                per_page: 250,
                page: 1
            };

            const searchResult = await typesenseClient
                .collections<Job>(COLLECTION_NAME)
                .documents()
                .search(searchParams, {});

            return searchResult.hits?.map((hit: SearchResponseHit<Job>) => hit.document) || [];
        } catch (error) {
            console.error('Typesense getByEntityId error:', error);
            return [];
        }
    }
}

export const jobService = new JobService();