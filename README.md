# Webstacks TypeScript + Next.js Challenge

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

## 🎨 Design Brief

Your primary task is to accurately recreate the design provided in this [Figma file](https://www.figma.com/file/8tAtNdSY22RH7OAT6JdMN1/Development-Challenge?type=design&node-id=0-1&mode=design&t=kyY1SNTi0mmS9Yts-0). We expect the final product to be **pixel perfect** in relation to the original design.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [The Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about TypeScript, take a look at the following resources:

- [TypeScript Documentation](https://www.typescriptlang.org/) - learn about TypeScript syntax.
- [Next.js with TypeScript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [React 19 Features](https://react.dev/blog/2024/12/05/react-19)

## 🔍 Evaluation Criteria

### Code Quality (40%)

- **TypeScript Implementation** - Proper typing throughout, no `any` types
- **Next.js Best Practices** - App Router, proper data fetching, performance optimization
- **Tailwind CSS 4 Usage** - Clean utility classes, responsive design, dark mode with new v4 features
- **Component Architecture** - Reusable, well-structured components
- **Code Organization** - Clear file structure and naming conventions

### Design Accuracy (30%)

- **Pixel-Perfect Implementation** - Exact match to Figma designs
- **Responsive Design** - Seamless mobile, tablet, and desktop experience
- **Dark/Light Mode** - Proper theme switching implementation
- **Typography & Spacing** - Adherence to style guide specifications

### Functionality (20%)

- **Feature Completeness** - All required features implemented
- **User Experience** - Intuitive interactions and smooth performance
- **Error Handling** - Graceful handling of API errors and edge cases
- **Loading States** - Proper loading indicators and skeleton screens

### Professional Standards (10%)

- **Git History** - Clear, logical commit messages showing progress
- **Code Documentation** - Self-documenting code with TypeScript types
- **Testing** - Unit tests for components (required for L3+ candidates)
- **Performance** - Optimized images, efficient rendering, fast load times

### Automatic Disqualification:

- ❌ Using JavaScript instead of TypeScript
- ❌ Using CSS frameworks other than Tailwind
- ❌ Significant deviations from the design
- ❌ Non-functional core features

## Deliverables

Make sure to include all source code in the repository.

## CodeSubmit

Please organize, design, test, and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you can submit the assignment on the assignment page.

You also have the option to deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Wishing you all the best and happy coding,

The Webstacks Team
