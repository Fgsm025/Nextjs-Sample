# TypeScript + Tailwind CSS 4 Style Guide

## Overview
This style guide provides all the requirements and best practices for completing your CodeSubmit challenge using Tailwind CSS v4 and TypeScript. It ensures consistent, responsive, and accessible UI implementation.

## 🛠️ Tailwind CSS 4 Only
- **All styling must use Tailwind CSS v4 utility classes**
- **Do not use any other CSS frameworks or custom CSS**
- **Take advantage of Tailwind v4's new features**, including CSS-first configuration and automatic content detection

## 📱 Responsive Layout
Your implementation must be fully responsive and adapt to the following breakpoints:

- **Mobile**: 375px (`default` - no prefix needed)
- **Tablet**: 768px (`md:` prefix)
- **Desktop**: 1440px (`xl:` prefix)

### Example:
```typescript
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6"
```

## 🎨 Color Palette
Use only the following colors, defined with **Tailwind v4's CSS-first configuration**:

### CSS Configuration (styles/tailwind.css):
```css
@import "tailwindcss";

@theme {
  --color-dark-elements: hsl(209, 23%, 22%);
  --color-dark-background: hsl(207, 26%, 17%);
  --color-light-text: hsl(200, 15%, 8%);
  --color-light-input: hsl(0, 0%, 52%);
  --color-light-background: hsl(0, 0%, 98%);
  --color-light-elements: hsl(0, 0%, 100%);
}
```

### Usage in Components:
```typescript
// Light mode background, dark mode background
className="bg-light-background dark:bg-dark-background"

// Light mode text, dark mode text  
className="text-light-text dark:text-white"

// Light mode elements, dark mode elements
className="bg-light-elements dark:bg-dark-elements"
```

### Color Reference:
**Dark Mode:**
- Elements: `bg-dark-elements`
- Background: `bg-dark-background`
- Text: `text-white`

**Light Mode:**
- Text: `text-light-text`
- Input: `text-light-input`
- Background: `bg-light-background`
- Elements: `bg-light-elements`

## 📝 Typography
- **Font**: Inter (use via Next.js font integration)
- **Body Copy**: `text-base` (16px)
- **Font Weights**: `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700)
- **Font Family**: Use Tailwind's default `sans-serif` or configure `font-inter`

### Font Configuration (Optional):
```css
/* Add to styles/tailwind.css if you want custom font-inter class */
@theme {
  --font-family-inter: Inter, sans-serif;
}
```

### Example Usage:
```typescript
className="font-sans text-base font-normal"
// or if configured:
className="font-inter text-base font-normal"
```

### Next.js Font Setup:
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap' 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
```
## 🎯 Icons & Assets
- **Use React Icons or direct SVGs** as components
- **Apply Tailwind sizing** (`w-4 h-4`, `w-5 h-5`) and color classes for theming
- **Ensure icons are accessible** (aria-label as needed)

### Example:
```typescript
import { FiSearch } from 'react-icons/fi'

<FiSearch className="w-5 h-5 text-light-input dark:text-white" />
```

### Images:
Use Next.js `Image` component for country flags and images, with proper alt text and responsive classes.

```typescript
import Image from 'next/image'

<Image
  src={country.flags.svg}
  alt={`Flag of ${country.name.common}`}
  width={64}
  height={48}
  className="object-cover rounded"
/>
```

## 🚀 Performance & Best Practices
- **Use Next.js server components** for static content and initial data loading
- **Use client components** only for interactivity (search, filters, theme toggle)
- **Implement loading states** with Tailwind skeleton classes
- **Optimize images** with Next.js `Image` component
- **Use TypeScript interfaces** for all API responses and component props
- **Group related utility classes** logically (layout, spacing, colors, typography)
- **Use responsive and dark mode classes** consistently
- **Extract complex class combinations** into reusable components as needed
- **Leverage Tailwind v4 features**: CSS-first config, container queries, 3D transforms, and expanded gradients

## Summary Checklist
- ✅ All styles use Tailwind CSS v4 utility classes
- ✅ Responsive at 375px, 768px (`md:`), 1440px (`xl:`)
- ✅ Color palette matches provided HSL values via CSS variables
- ✅ Typography uses Inter, correct sizes/weights
- ✅ Icons and images follow guidelines
- ✅ Code is accessible, maintainable, and performant

**Use this guide as your reference throughout your implementation.**
