# Changelog

## Codebase Maintenance & Optimization

### 1. Dependency Audit
- **Removed Over 20 Unused Dependencies**: Audited `package.json` with `npx depcheck` and detached dead weight that was never actively imported. This drastically reduced the `node_modules` and package lockfile sizes. Removed packages include:
  - Animation & 3D: `@react-spring/web`, `gsap`, `spline`, `@splinetool/react-spline`, `@splinetool/runtime`, `@lottiefiles/dotlottie-react`, `typewriter-effect`
  - UI/Styles: `@shadcn/ui`, `shadcn-ui`, `@mui/styled-engine-sc`, `styled-components`, `@headlessui/react`, `headlessui`
  - Utilities: `add`, `baseline-browser-mapping`, `caniuse-lite`, `dialog`, `firebase`, `react-intersection-observer`, `tailwind-merge`

### 2. Dead Code Removal
- **Deleted Orphaned Files**: Removed large unused playground HTML files `temp.html` and `temp2.html` from the root directory.
- **Unused Component Cleanup**: Cleaned `src/components/SocialLinks.jsx` and other files by removing the references and instances of `PresenceWidget`, which was no longer utilized.
- **Removed Unused Imports & Variables**: Addressed ESLint dead-code warnings across the codebase:
  - Removed unused `UserCheck` import and cleaned up `import React` statements in `src/Pages/About.jsx`.
  - Removed unused `Link` from `react-router-dom` and fixed entities (`'` replaced with `&apos;`) in `src/Pages/Contact.jsx`.
  - Removed dangling `className, ...props` destructurings in React functional components mapping icons (`src/components/SocialLinks.jsx`).
  - Adjusted `App.jsx` React imports mapping to modern Vite standards.

### 3. Refactoring for Readability
- **Extracted Inline `<style jsx>`**: `src/Pages/About.jsx` contained isolated `<style jsx>` tags which isn't fully native to Vite/React without extra plugins. 
  - Extracted the custom `@keyframes` (like `spin-slower`, `float`, `bounce-slow`, etc.).
  - Migrated them formally into `src/index.css` global stylesheet to establish standard separation of concerns.

### 4. Build & Performance Optimization
- **Production Build Validation**: Ran `npm run build` utilizing Vite 5.4 to produce optimal ES modules for modern browsers.
- **Reduced Bundle & Tree footprint**: Trimming down unused massive libraries (like spline/framer/gsap/mui) directly impacts repository size, `npm install` build speeds, and potential client-side bundle leaks.

### 5. Deep UI Refactoring & Size Reduction (Latest)
- **Eliminated Material-UI (MUI)**: Completely rewrote `Portofolio.jsx` and `Certificate.jsx` to remove all dependencies on `@mui/material`, `@mui/icons-material`, `@emotion/react`, and `@emotion/styled`. Reduced the overall app bundle size significantly by implementing custom, lightweight equivalent components directly with Tailwind CSS.
- **Removed Swipeable Views**: Replaced the heavy `react-swipeable-views` component with standard responsive layout logic using React state and CSS flex/grid.
- **Replaced Axios with Native Fetch**: Refactored `Contact.jsx` API calls to use the native browser `fetch` API, allowing the removal of the `axios` dependency without losing any functionality.
- **Dependency Cleanup**: Uninstalled all 6 removed heavy packages (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`, `react-swipeable-views`, `axios`), drastically speeding up CI/CD pipeline installation times and lightening the node_modules folder.
