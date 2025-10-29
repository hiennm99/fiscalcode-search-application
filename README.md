# Fiscal Code Search Application

A comprehensive search and management application for fiscal code entities, built with modern web technologies.

## Features

- 🔍 Search entities by various criteria including fiscal code
- 📄 Detailed entity information display
- 📱 Responsive design for all device sizes
- ⚡ Fast and efficient data fetching and rendering
- 🔄 Real-time data updates

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **UI Components**: Custom components with Lucide Icons
- **Form Handling**: React Hook Form
- **Date Handling**: date-fns
- **API Integration**: TypeSense for search functionality

## Project Structure

```
src/
├── features/            # Feature-based modules
│   └── entity-search/  # Search functionality components
├── services/           # API services and data fetching
├── stores/             # State management with Zustand
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── hooks/              # Custom React hooks

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v7 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd fiscalcode-search-application
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_API_BASE_URL=your_api_base_url
   VITE_TYPESENSE_API_KEY=your_typesense_api_key
   VITE_TYPESENSE_HOST=your_typesense_host
   VITE_TYPESENSE_PORT=your_typesense_port
   VITE_TYPESENSE_PROTOCOL=your_typesense_protocol
   ```

### Development

Start the development server:
```bash
pnpm dev
```

### Building for Production

```bash
# Build the application
pnpm build

# Preview the production build
pnpm preview
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Features in Detail

### Entity Search
- Fuzzy search by fiscal code, name, or other identifiers
- Advanced filtering and sorting options
- Paginated results

### Entity Management
- View detailed entity information
- Manage addresses, contacts, and bank details
- Track assets and relationships
- Handle guarantors and joint accounts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
