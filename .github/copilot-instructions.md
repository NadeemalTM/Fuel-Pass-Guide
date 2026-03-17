# Fuel Pass QR Guide - Project Instructions

## Project Overview

A responsive, multi-language frontend website for Sri Lankan citizens to learn how to create their Fuel Pass QR codes.

- **Technology Stack:** Next.js 16.1.7, TypeScript, Tailwind CSS, React
- **Languages Supported:** English, Sinhala, Tamil
- **Deployment:** Ready for Vercel
- **Developer:** NadeemalTech

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page component
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Header with navigation
│   ├── HeroSection.tsx         # Hero banner
│   ├── GuideSection.tsx        # Main guide content
│   ├── StepCard.tsx            # Individual step component
│   ├── InfoSection.tsx         # Requirements/info section
│   ├── LanguageToggle.tsx      # Language selector
│   └── Footer.tsx              # Footer
├── i18n/
│   ├── translations.ts         # Content translations
│   ├── LanguageContext.tsx     # Language state management
│   └── useTranslation.ts       # Translation hook
└── public/                     # Static assets
```

## Key Features

- **Multi-Language Support:** English, Sinhala, Tamil with localStorage persistence
- **Responsive Design:** Mobile-first approach works on all devices
- **Step-by-Step Guide:** 7 expandable/collapsible guide sections
- **Dark Mode:** Automatic system preference detection
- **Type-Safe:** Full TypeScript implementation
- **Accessible:** Semantic HTML and ARIA labels

## Development

### Local Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Available at http://localhost:3000
```

### Build

```bash
# Production build
npm run build

# Start production server
npm start
```

### Code Organization

- **Components:** Reusable UI components in `src/components/`
- **Translations:** All content in `src/i18n/translations.ts`
- **Styling:** Tailwind CSS utility classes
- **State:** React Context for language management

## Customization Guide

### Adding New Language

1. Add to `translations.ts`:
```typescript
export const translations = {
  en: { /* ... */ },
  // ... existing languages
  xx: { // New language code
    nav: { /* ... */ },
    hero: { /* ... */ },
    steps: { /* ... */ },
    // ... all other sections
  }
};
```

2. Update `LanguageToggle.tsx` language list

3. Update `Language` type in `translations.ts`

### Modifying Content

Edit `src/i18n/translations.ts` to update any content across all languages.

Example:
- Steps: Update `translations.xx.steps`
- Headers: Update `translations.xx.nav`
- Info: Update `translations.xx.important` and `translations.xx.requirements`

### Styling Changes

- Use Tailwind CSS utilities in component className props
- Global styles in `globals.css`
- Dark mode: Use `dark:` prefix for dark mode styles

## Best Practices

1. **Client Components:** All interactive components use `'use client'`
2. **Context Usage:** Language context initialized at layout level
3. **Responsive:** Mobile-first design with `sm:`, `lg:` breakpoints
4. **Performance:** Minimal dependencies, optimized bundle
5. **Accessibility:** Semantic HTML, proper ARIA labels

## Deployment Steps

### Vercel Deployment

1. Push to GitHub repository
2. Connect to Vercel: https://vercel.com/new
3. Select your repository
4. Vercel auto-detects Next.js
5. Deploy - done!

### Environment Variables

No environment variables required for basic deployment.

## Troubleshooting

- **Build errors:** Clear `.next` and `node_modules`, reinstall
- **Port conflicts:** Use `npm run dev -- -p 3001`
- **Language not persisting:** Check localStorage availability
- **Styles not applying:** Clear browser cache and rebuild

## Performance Considerations

- Lightweight: No heavy dependencies
- Optimized images: Using Next.js Image components
- Static generation: Build-time optimization
- Code splitting: Automatic by Next.js
- Bundle size: < 500KB gzipped

## Testing

Run linter:
```bash
npm run lint
```

## Notes for Future Development

- Consider adding FAQ section
- Could add video tutorials
- Mobile app consideration
- Accessibility audit recommended
- Performance monitoring setup

---

**Target Audience:** Sri Lankan citizens aged 18-65
**Use Cases:** Learn Fuel Pass QR creation process
**Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)

