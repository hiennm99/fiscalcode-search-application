# 🧭 FiscalCode Search Application

> A modern search application built with React, Vite, TypeScript, and TailwindCSS.  
> Integrated with Zustand, Axios, Typesense, React Router, Lucide Icons, and other powerful utilities.

---

![Vite](https://img.shields.io/badge/Vite-7.1-blueviolet?logo=vite)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38b2ac?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🚀 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **[Vite](https://vitejs.dev/)** | Ultra-fast build tool for React |
| **[React 19](https://react.dev/)** | Core UI library |
| **[TypeScript](https://www.typescriptlang.org/)** | Static typing for safer, cleaner code |
| **[TailwindCSS](https://tailwindcss.com/)** | Utility-first CSS framework |
| **[Zustand](https://github.com/pmndrs/zustand)** | Simple and lightweight state management |
| **[Axios](https://axios-http.com/)** | HTTP client for API requests |
| **[Typesense](https://typesense.org/)** | Real-time search engine |
| **[React Router DOM](https://reactrouter.com/)** | SPA routing management |
| **[Lucide React](https://lucide.dev/)** | Modern and lightweight icon pack |
| **[Sonner](https://sonner.emilkowal.ski/)** | Elegant toast notifications |
| **[Date-fns](https://date-fns.org/)** | Utility library for date manipulation |
| **[React DatePicker](https://reactdatepicker.com/)** | Flexible date picker component |
| **[Immer](https://immerjs.github.io/immer/)** | Immutable state updates made easy |
| **[Lodash](https://lodash.com/)** | Utility library for array/object manipulation |
| **[@vercel/analytics](https://vercel.com/docs/analytics)** | Web analytics and performance tracking |
| **[vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)** | Auto-resolve aliases from `tsconfig` |

---

## 🧰 Project Structure

```bash
src/
├── assets/          # Images, fonts, svgs, etc.
├── components/      # Shared UI components
├── constants/       # Application constants
├── features/        # Feature-based modules (entity-search, entity-detail)
├── hooks/           # Custom React hooks
├── lib/             # Config helpers (axios, typesense, etc.)
├── services/        # API services or repositories
├── stores/          # Zustand stores
├── types/           # TypeScript type definitions
├── utils/           # Utility helper functions
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/fiscalcode-search-application.git
cd fiscalcode-search-application
```

### 2️⃣ Install dependencies
```bash
npm install
# or
pnpm install
```

### 3️⃣ Run the development server
```bash
npm run dev
# or
pnpm dev
```
Visit: 👉 **http://localhost:5173**

---

## 🧩 Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the built app |
| `npm run lint` | Run lint checks |

---

## 🧱 Code Convention

### ✨ Commit Convention
This project uses **Husky + Commitlint + Lint-Staged**  
Following the **Conventional Commit** standard.

Valid examples:
```bash
feat(ui): add search result card component
fix(api): handle typesense timeout issue
chore: update eslint config
```

### 📝 Linting
- ESLint: configured with `eslint:recommended`, React, and TypeScript plugins.  
- Import sorting: handled by `eslint-plugin-simple-import-sort`.  
- Code formatting: Prettier-friendly (optional).

---

## 🪶 TailwindCSS
Configuration file: `tailwind.config.js`  
You can extend colors, themes, and add plugins.

```bash
npx tailwindcss init -p
```

---

## 🗂️ Path Aliases
Aliases are defined in `tsconfig.app.json` and automatically resolved via `vite-tsconfig-paths`.

Example:
```ts
import { SearchBar } from '@components/SearchBar';
import useSearchStore from '@stores/searchStore';
import { formatDate } from '@utils/dateUtils';
import { API_CONFIG } from '@constants/config';
```

---

## 🧠 Tips
- Use `sonner` for toast notifications:
  ```ts
  import { toast } from 'sonner';
  toast.success("Data loaded successfully!");
  ```

- Combine Zustand with Immer:
  ```ts
  import { create } from 'zustand';
  import { produce } from 'immer';

  const useStore = create((set) => ({
    count: 0,
    increment: () => set(produce((state) => { state.count++ })),
  }));
  ```

---

## 📈 Deployment
You can deploy on:
- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- or your own server using `vite preview` / `nginx`

---

## 🔎 Live Demo (Vercel)
🔗 [https://fiscalcode-search.vercel.app](https://fiscalcode-search.vercel.app)

---

## 🧾 License
MIT © 2025 – Built with ❤️ by your team
