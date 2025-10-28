// ============================================
// hooks/useEntitySearch.ts
// ============================================
import { useCallback, useEffect, useState } from 'react';

import { entityApiService } from '../services/entityApi.service';
import type { SearchFilters, SearchResult } from '../types/typesense.types';

export const useEntitySearch = () => {
    const [query, setQuery] = useState<string>('');
    const [filters, setFilters] = useState<SearchFilters>({});
    const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Perform search
    const performSearch = useCallback(
        async (searchQuery: string, searchFilters: SearchFilters, page: number) => {
            setIsLoading(true);
            setError(null);

            try {
                const result = await entityApiService.search({
                    query: searchQuery || undefined,
                    filters: searchFilters,
                    page,
                    perPage: 20,
                });

                setSearchResults(result);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Search failed';
                setError(errorMessage);
                setSearchResults(null);
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    // Trigger search when query, filters, or page changes
    useEffect(() => {
        // Only search if there's a query or filters applied
        if (!query && Object.keys(filters).length === 0) {
            return;
        }

        const timeoutId = setTimeout(() => {
            performSearch(query, filters, currentPage);
        }, 300);

        return () => clearTimeout(timeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, filters, currentPage]);

    // Handle filter changes
    const handleFilterChange = useCallback((key: keyof SearchFilters, value: any) => {
        setFilters((prev) => {
            const newFilters = { ...prev };
            
            // Remove the key if value is empty or undefined
            if (value === '' || value === undefined) {
                delete newFilters[key];
            } else {
                newFilters[key] = value;
            }
            
            return newFilters;
        });
        setCurrentPage(1); // Reset to first page when filters change
    }, []);

    // Clear all filters
    const clearFilters = useCallback(() => {
        setFilters({});
        setCurrentPage(1);
    }, []);

    return {
        query,
        setQuery,
        searchResults,
        filters,
        handleFilterChange,
        clearFilters,
        isLoading,
        error,
        currentPage,
        setCurrentPage,
    };
};