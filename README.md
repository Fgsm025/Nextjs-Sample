#TypeScript + Next.js Challenge

## 🎯 Objective

Your challenge is to integrate with the [REST Countries API](https://restcountries.com/#api-endpoints-v3) to pull country data and display it in accordance with the provided designs. This project uses **Next.js 15.5** with **React 19**, **TypeScript 5**, and **Tailwind CSS 4**.

## ⚠️ CRITICAL REQUIREMENTS

**🚨 This challenge MUST be completed using TypeScript. JavaScript submissions will be rejected.**

### Required Technologies:

- ✅ **TypeScript** - All files must use `.ts` or `.tsx` extensions
- ✅ **Next.js 15.5** - Use App Router architecture with Turbopack
- ✅ **Tailwind CSS 4** - For all styling (no other CSS frameworks)
- ✅ **React 19.1** - Latest React features and patterns
- ✅ **TypeScript 5** - Latest TypeScript with strict type checking

### Prohibited:

- ❌ Plain JavaScript files (`.js`, `.jsx`)
- ❌ CSS-in-JS libraries (styled-components, emotion, etc.)
- ❌ Other CSS frameworks (Bootstrap, Chakra UI, etc.)

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org/) project with TypeScript. To get started:

```bash
# Install dependencies (Yarn is recommended)
yarn install
# or
npm install

# Run the development server with Turbopack (faster builds)
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Important:** The project is already set up with TypeScript. Ensure all your components use proper type definitions and follow the App Router structure in the `app/` directory.

## 📋 Technical Requirements

### TypeScript Implementation

- **All components must be properly typed** with interfaces/types
- **API responses must be typed** - create interfaces for Country data
- **Props must be typed** - no `any` types allowed
- **State management must be typed** - useState, useEffect, etc.
- **Event handlers must be typed** - onClick, onChange, etc.

### Next.js Best Practices

- **Use App Router** (not Pages Router)
- **Implement proper data fetching patterns:**
  - Server Components for initial data loading where appropriate
  - Client Components only when necessary (user interactions, state)
  - Consider using `fetch` with caching strategies
- **Optimize performance:**
  - Use Next.js Image component for country flags
  - Implement proper loading states
  - Consider pagination or virtualization for large country lists

### Tailwind CSS Requirements

- **Use Tailwind utility classes exclusively** for styling
- **Implement responsive design** using Tailwind's responsive prefixes
- **Use Tailwind 4's dark mode utilities** for theme switching
- **Follow the color palette** defined in `style-guide.md`
- **No custom CSS files** - all styling via Tailwind utility classes
- **Leverage Tailwind 4's new features** like improved CSS-in-JS support


**Design Resources:**

- 📱 **Mobile & Desktop views** in light and dark modes
- 🎨 **Style guide** in `style-guide.md` with colors, typography, and spacing
- 💡 **Figma comments** on the Detail page for additional guidance

### Required Functionality:

- ✅ View all countries from the API on the homepage
- ✅ Search for a country using an input field
- ✅ Filter countries by region
- ✅ Click on a country to see more detailed information on a separate page
- ✅ Navigate to the border countries on the detail page
- ✅ Toggle the color scheme between light and dark mode

**🎯 Goal:** Pixel-perfect reproduction with clean, maintainable TypeScript code.

