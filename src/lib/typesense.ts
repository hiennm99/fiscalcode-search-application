import { SearchClient as TypesenseSearchClient } from "typesense";

interface TypesenseConfig {
  host: string;
  port: number;
  protocol: 'http' | 'https';
  apiKey: string;
  timeout: number;
}

const getConfig = (): TypesenseConfig => ({
  host: import.meta.env.TYPESENSE_HOST || 'localhost',
  port: parseInt(import.meta.env.TYPESENSE_PORT || '8108'),
  protocol: (import.meta.env.TYPESENSE_PROTOCOL || 'http') as 'http' | 'https',
  apiKey: import.meta.env.TYPESENSE_API_KEY || '',
  timeout: parseInt(import.meta.env.TYPESENSE_TIMEOUT || '2')
});

export const typesenseClient = new TypesenseSearchClient({
  nodes: [{
    host: getConfig().host,
    port: getConfig().port,
    protocol: getConfig().protocol
  }],
  apiKey: getConfig().apiKey,
  connectionTimeoutSeconds: getConfig().timeout,
  additionalHeaders: {
    'ngrok-skip-browser-warning': 'true'
  }
});