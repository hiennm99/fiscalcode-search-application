// ============================================
// services/contactService.ts (Fixed)
// ============================================
import { DATABASE_TABLES } from "@constants";
import { typesenseClient } from "@lib";
import type { Contact, SearchParams } from '@types';
import type { SearchResponseHit } from "typesense/lib/Typesense/Documents";

const COLLECTION_NAME = DATABASE_TABLES.CONTACT;

class ContactService {
    async getByFiscalCode(fiscalCode: string): Promise<Contact[]> { // Fixed return type
        try {
            const searchParams: SearchParams = {
                q: '*',
                query_by: 'email,phone_number',
                filter_by: `fiscal_code:=${fiscalCode}`,
                per_page: 250,
                page: 1
            };

            const searchResult = await typesenseClient
                .collections<Contact>(COLLECTION_NAME)
                .documents()
                .search(searchParams, {});

            return searchResult.hits?.map((hit: SearchResponseHit<Contact>) => hit.document) || [];
        } catch (error) {
            console.error('Typesense getByFiscalCode error:', error);
            return [];
        }
    }

    async getByEntityId(entityId: string): Promise<Contact[]> {
        try {
            const searchParams: SearchParams = {
                q: '*',
                query_by: 'email,phone_number',
                filter_by: `entity_id:=${entityId}`,
                per_page: 250,
                page: 1
            };

            const searchResult = await typesenseClient
                .collections<Contact>(COLLECTION_NAME)
                .documents()
                .search(searchParams, {});

            return searchResult.hits?.map((hit: SearchResponseHit<Contact>) => hit.document) || [];
        } catch (error) {
            console.error('Typesense getByEntityId error:', error);
            return [];
        }
    }
}

export const contactService = new ContactService();