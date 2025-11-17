# 🔍 Fiscal Code Search Application

A modern, high-performance web application for searching and managing fiscal code entities with real-time search capabilities powered by Typesense.

---

## 🧭 Overview

The Fiscal Code Search Application is a React-based single-page application (SPA) that provides a powerful interface for searching, viewing, and managing entity information. It features instant search results, detailed entity profiles with multiple data categories (addresses, contacts, banks, jobs, assets, guarantors, etc.), and a clean, responsive UI built with TailwindCSS.

### ✨ Key Features

- **⚡ Real-time Search** – Instant search results powered by Typesense
- **📊 Entity Management** – Comprehensive entity detail views with multiple data categories
- **🎨 Modern UI** – Beautiful, responsive interface with TailwindCSS v4
- **🔄 State Management** – Efficient state handling with Zustand + Immer
- **📱 Responsive Design** – Mobile-first approach with adaptive layouts
- **🚀 Fast Performance** – Optimized with Vite and React 19
- **🔔 Toast Notifications** – User feedback with Sonner
- **📅 Date Handling** – Advanced date pickers and formatting with date-fns

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI framework |
| **TypeScript** | 5.8.3 | Type safety |
| **Vite** | 7.1.0 | Build tool & dev server |
| **TailwindCSS** | 4.1.11 | Styling framework |
| **React Router** | 7.9.4 | Client-side routing |
| **Zustand** | 4.5.5 | State management |
| **Immer** | 10.2.0 | Immutable state updates |
| **Typesense** | 2.1.0 | Search engine client |
| **Axios** | 1.12.2 | HTTP client |
| **Sonner** | 2.0.7 | Toast notifications |
| **Lucide React** | 0.539.0 | Icon library |
| **date-fns** | 4.1.0 | Date utilities |
| **React Datepicker** | 8.7.0 | Date picker component |
| **Lodash** | 4.17.21 | Utility functions |
| **Vercel Analytics** | 1.5.0 | Analytics integration |

---

## 🧱 Project Structure

```
fiscalcode-search-application/
├── src/
│   ├── features/              # Feature-based modules
│   │   ├── entity-search/     # Search functionality
│   │   └── entity-detail/     # Entity detail views
│   │       ├── EntityDetail.tsx
│   │       ├── EntityInfo.tsx
│   │       ├── AddressList.tsx
│   │       ├── ContactList.tsx
│   │       ├── BankList.tsx
│   │       ├── JobList.tsx
│   │       ├── AssetList.tsx
│   │       ├── GuarantorList.tsx
│   │       ├── JointList.tsx
│   │       ├── PossibleGuarantorList.tsx
│   │       ├── OthersList.tsx
│   │       └── EredeList.tsx
│   ├── services/              # API service layer
│   │   ├── entityService.ts
│   │   ├── addressService.ts
│   │   ├── assetService.ts
│   │   ├── bankService.ts
│   │   ├── contactService.ts
│   │   └── jobService.ts
│   ├── stores/                # Zustand state stores
│   │   └── useEntityStore.ts
│   ├── components/            # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   ├── types/                 # TypeScript type definitions
│   ├── constants/             # App constants
│   ├── lib/                   # Third-party library configs
│   ├── App.tsx                # Main app component
│   └── main.tsx               # App entry point
├── search-engine/             # Typesense Docker setup
│   └── docker-compose.yaml
├── public/                    # Static assets
├── index.html                 # HTML entry point
├── vite.config.ts             # Vite configuration
├── tsconfig.app.json          # TypeScript config
├── eslint.config.js           # ESLint configuration
├── Dockerfile                 # Docker build config
├── vercel.json                # Vercel deployment config
└── package.json               # Dependencies & scripts
```

---

## ⚙️ Installation & Setup

### Prerequisites

- **Node.js** >= 10
- **pnpm** >= 3 (recommended) or npm
- **Docker** (for running Typesense locally)

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd fiscalcode-search-application
```

### 2️⃣ Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Typesense Configuration
VITE_TYPESENSE_HOST=localhost
VITE_TYPESENSE_PORT=8108
VITE_TYPESENSE_PROTOCOL=http
VITE_TYPESENSE_API_KEY=xyz
VITE_TYPESENSE_TIMEOUT=10
```

**Note:** For production, update these values to point to your production Typesense instance.

### 4️⃣ Start Typesense Search Engine

Navigate to the `search-engine` directory and start Typesense with Docker:

```bash
cd search-engine
docker-compose up -d
```

This will start:
- **Typesense** on `http://localhost:8108`
- **Typesense Dashboard** on `http://localhost:8107`
- **Ngrok Tunnel** for external access (optional)

### 5️⃣ Run Development Server

```bash
pnpm dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🧩 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production (TypeScript check + Vite build) |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint to check code quality |

---

## 🧱 Code Conventions

### ESLint Configuration

The project uses a strict ESLint setup with:

- **TypeScript ESLint** – Type-aware linting
- **React Hooks Rules** – Enforces hooks best practices
- **Simple Import Sort** – Auto-sorts imports alphabetically
- **Import Plugin** – Prevents duplicate imports
- **Unused Variables** – Removes unused imports and variables

### Auto-formatting Rules

- Import statements are automatically sorted
- Unused imports are flagged as errors
- First import must be at the top
- Newline required after imports

### Git Hooks (Husky + Commitlint)

- **Husky** – Git hooks for pre-commit checks
- **Commitlint** – Enforces conventional commit messages
- **Lint-staged** – Runs linting on staged files

**Commit Message Format:**
```
type(scope): subject

Examples:
feat(search): add advanced filtering
fix(entity): resolve detail page crash
docs(readme): update installation steps
```

---

## 🪶 TailwindCSS Setup

This project uses **TailwindCSS v4** with the Vite plugin for optimal performance.

### Configuration

TailwindCSS is configured via the `@tailwindcss/vite` plugin in `vite.config.ts`:

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()]
})
```

### Usage

Apply utility classes directly in your components:

```tsx
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
</div>
```

---

## 🗂️ Path Aliases

The project uses TypeScript path aliases for cleaner imports:

| Alias | Path |
|-------|------|
| `@lib` | `src/lib` |
| `@features` | `src/features` |
| `@components` | `src/components` |
| `@hooks` | `src/hooks` |
| `@utils` | `src/utils` |
| `@services` | `src/services` |
| `@stores` | `src/stores` |
| `@constants` | `src/constants` |
| `@types` | `src/types` |
| `@assets` | `src/assets` |

### Example Usage

```typescript
// Instead of: import { useEntityStore } from '../../../stores/useEntityStore'
import { useEntityStore } from '@stores/useEntityStore'

// Instead of: import { EntityCard } from '../../components/EntityCard'
import { EntityCard } from '@components/EntityCard'
```

---

## 🧠 Development Tips

### State Management with Zustand + Immer

The app uses Zustand for global state with Immer for immutable updates:

```typescript
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface EntityState {
  entities: Entity[]
  addEntity: (entity: Entity) => void
}

export const useEntityStore = create<EntityState>()(
  immer((set) => ({
    entities: [],
    addEntity: (entity) =>
      set((state) => {
        state.entities.push(entity) // Immer handles immutability
      }),
  }))
)
```

### Toast Notifications with Sonner

Display user feedback with Sonner:

```typescript
import { toast } from 'sonner'

// Success
toast.success('Entity saved successfully!')

// Error
toast.error('Failed to load data')

// Info
toast.info('Processing your request...')

// Promise-based
toast.promise(
  fetchData(),
  {
    loading: 'Loading...',
    success: 'Data loaded!',
    error: 'Failed to load'
  }
)
```

### Typesense Search Integration

The app connects to Typesense for real-time search:

```typescript
import Typesense from 'typesense'

const client = new Typesense.Client({
  nodes: [{
    host: import.meta.env.VITE_TYPESENSE_HOST,
    port: import.meta.env.VITE_TYPESENSE_PORT,
    protocol: import.meta.env.VITE_TYPESENSE_PROTOCOL,
  }],
  apiKey: import.meta.env.VITE_TYPESENSE_API_KEY,
  connectionTimeoutSeconds: import.meta.env.VITE_TYPESENSE_TIMEOUT,
})
```

---

## 📈 Deployment

### Vercel (Recommended)

The project is optimized for Vercel deployment with SPA routing configured in `vercel.json`.

**Deploy Steps:**

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Set environment variables in Vercel dashboard:
   - `VITE_TYPESENSE_HOST`
   - `VITE_TYPESENSE_PORT`
   - `VITE_TYPESENSE_PROTOCOL`
   - `VITE_TYPESENSE_API_KEY`
   - `VITE_TYPESENSE_TIMEOUT`

### Docker Deployment

Build and run with Docker:

```bash
# Build image
docker build -t fiscalcode-search-app .

# Run container
docker run -p 80:80 fiscalcode-search-app
```

The Dockerfile uses a multi-stage build with Nginx for serving the static files.

### Other Platforms

The app can also be deployed to:
- **Netlify** – Drag & drop `dist` folder
- **GitHub Pages** – Use `gh-pages` package
- **AWS S3 + CloudFront** – Static hosting
- **Firebase Hosting** – `firebase deploy`

---

## 🔧 Typesense Search Engine

### Local Setup

The `search-engine/docker-compose.yaml` file provides a complete Typesense stack:

- **Typesense Server** – Core search engine (port 8108)
- **Typesense Dashboard** – Web UI for managing collections (port 8107)
- **Ngrok Tunnel** – Expose Typesense publicly for development

### Accessing Services

- **Typesense API:** `http://localhost:8108`
- **Dashboard:** `http://localhost:8107`
- **Ngrok Inspector:** `http://localhost:4042`

### API Key

Default API key: `xyz` (change in production!)

---

## 🧪 Testing

While no testing framework is currently configured, you can add:

**Vitest (recommended for Vite projects):**
```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom
```

**React Testing Library:**
```bash
pnpm add -D @testing-library/react @testing-library/user-event
```

---

## 🧾 License

This project is proprietary software. All rights reserved.

---

## 👥 Contributors

Developed and maintained by the Data Platform team.

---

## 📞 Support

For issues or questions, please contact the development team or create an issue in the project repository.

---

**Built with ❤️ using React, TypeScript, and TailwindCSS**

** Icons generated by https://pwa-icon-generator.vercel.app