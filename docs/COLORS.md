# Color Palette Documentation

## Current Color System

This document outlines the color palette used throughout the application for both light and dark themes.

## Semantic Color Names

We use semantic color names (`light` and `dark`) that map to actual color palettes. This allows us to change the underlying color palette without updating component code.

- **`light-*`** - Colors for light mode (currently maps to haiti)
- **`dark-*`** - Colors for dark mode (currently maps to everglade)

## Theme Colors

### Light Mode - Light Palette

The primary accent color for light mode uses the **light** semantic name, currently mapped to haiti (a deep purple).

**Usage:**

- Primary text: `text-light-900` (darkest color for text)
- Hover states: `text-light-700`, `text-light-600`
- Backgrounds: `bg-light-200/50`, `bg-light-700/10`
- Borders: `border-light-900/20`
- Sparkles accent: `hsl(260, 70%, 60%)`

**Tailwind Classes Used:**

- `light-900` - Primary text color
- `light-700` - Hover states, backgrounds
- `light-600` - Hover states
- `light-500` - Background blur effects
- `light-300` - Dark mode hover states
- `light-200` - Light backgrounds

### Dark Mode - Dark Palette

The primary accent color for dark mode uses the **dark** semantic name, currently mapped to everglade (a rich green).

**Usage:**

- Primary text: `text-dark-200` (light color for text)
- Hover states: `text-dark-400`, `text-dark-700`
- Backgrounds: `bg-dark-900/50`, `bg-dark-500/10`
- Borders: `border-dark-200/20`
- Sparkles accent: `hsl(150, 40%, 40%)`

**Tailwind Classes Used:**

- `dark-900` - Dark backgrounds
- `dark-500` - Background blur effects
- `dark-400` - Hover states
- `dark-200` - Primary text color

## Component Usage

### Badge Component

- **Light mode**: `text-light-900 bg-light-200/50 border-light-900/20`
- **Dark mode**: `text-dark-200 bg-dark-900/50 border-dark-200/20`

### Links & Hover States

- **Light mode**: `hover:text-light-700`
- **Dark mode**: `hover:text-dark-400`

### Background Accents

- **Light mode**: `bg-light-700/10`
- **Dark mode**: `bg-dark-500/10`

## Neutral Colors

### Grays

- Text: `text-gray-800` (light mode), `text-gray-200` (dark mode)
- Backgrounds: `bg-gray-200`, `bg-gray-800`
- Borders: `border-gray-800` (light mode), `border-gray-300` (dark mode)

## Changing Color Palettes

To change the color palette in the future, simply update the `light` and `dark` color definitions in `tailwind.config.ts`. All components will automatically use the new colors without requiring code changes.

## Implementation Notes

- Colors are applied using Tailwind CSS utility classes
- Theme switching is handled via the `dark` class on the document root
- All color transitions use `transition-colors duration-150 ease-in-out`
- Some components use HSL values directly (e.g., Sparkles component)
