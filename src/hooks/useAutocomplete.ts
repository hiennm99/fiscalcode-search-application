// ============================================
// hooks/useAutocomplete.ts
// ============================================
import { entityService } from "@services";
import type { AutocompleteItem } from "@types";
import debounce from 'lodash/debounce';
import { useEffect, useRef, useState } from 'react';

export const useAutocomplete = (query: string, minLength: number = 2) => {
    const [results, setResults] = useState<AutocompleteItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    
    // Store minLength in ref to avoid recreating debounced function
    const minLengthRef = useRef(minLength);
    minLengthRef.current = minLength;

    // Create stable debounced version with useRef
    const debouncedAutocompleteRef = useRef(
        debounce(async (searchQuery: string) => {
            if (searchQuery.length < minLengthRef.current) {
                setResults([]);
                setShowDropdown(false);
                return;
            }

            setIsLoading(true);
            try {
                const data = await entityService.autocomplete(searchQuery);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setResults(data);
                setShowDropdown(data.length > 0);
            } catch (error) {
                console.error('Autocomplete error:', error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        }, 300, {
            leading: false,
            trailing: true,
        })
    );

    useEffect(() => {
        if (query) {
            debouncedAutocompleteRef.current(query);
        } else {
            setResults([]);
            setShowDropdown(false);
        }

        // Cleanup debounce on unmount
        return () => {
            debouncedAutocompleteRef.current.cancel();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return {
        results,
        isLoading,
        showDropdown,
        setShowDropdown,
    };
};
