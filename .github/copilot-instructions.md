# Oligo eShop Frontend - AI Coding Instructions

## Project Overview
This is a Next.js 14+ TypeScript frontend for the Oligo eShop platform, using React 18, Tailwind CSS, and modern eCommerce patterns.

## Development Environment
- **Container-based**: Uses DevContainer with Debian bookworm, Node.js LTS via nvm
- **Port**: Development server runs on port 3000 (auto-forwarded)
- **Setup**: `npm install` runs automatically on container creation

## Key Commands
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check
npm run type-check   # TypeScript validation
```

## Architecture Patterns

### Project Structure (Expected)
When implementing features, follow this typical Next.js eCommerce structure:
- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/lib/` - Utilities, API clients, configurations
- `src/types/` - TypeScript type definitions
- `src/hooks/` - Custom React hooks
- `src/stores/` - State management (Zustand/Redux)

### eCommerce Specific Patterns
- **Product Management**: Implement product cards, lists, detail views with proper SEO
- **Cart Functionality**: Use client-side state with persistence
- **User Authentication**: Integrate with backend auth system
- **Order Management**: Handle checkout flows and order tracking
- **Search & Filtering**: Implement product search with faceted navigation

## Technical Standards

### Component Organization
- Use functional components with TypeScript
- Implement proper prop types and interfaces
- Follow compound component patterns for complex UI elements
- Use `use client` directive only when necessary for client-side features

### Styling Approach
- **Primary**: Tailwind CSS for component styling
- Use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, etc.)
- Create custom components in `src/components/ui/` for design system consistency
- Implement dark mode support with Tailwind's dark mode utilities

### State Management
- Local state: React useState/useReducer
- Global state: Consider Zustand or Redux Toolkit for cart, user, and app state
- Server state: Use TanStack Query (React Query) for API data fetching
- Form state: React Hook Form for complex forms

### API Integration
- Use Next.js API routes (`src/app/api/`) for backend proxying if needed
- Implement proper error handling and loading states
- Use environment variables for API endpoints (`.env.local`)
- Follow RESTful patterns for eCommerce endpoints (products, cart, orders, users)

## Development Workflow

### File Creation Priority
When implementing new features:
1. Define TypeScript types first (`src/types/`)
2. Create reusable components (`src/components/`)
3. Implement pages using App Router (`src/app/`)
4. Add API integrations (`src/lib/api/`)
5. Write tests alongside implementation

### Performance Considerations
- Use Next.js Image component for product images
- Implement proper lazy loading for product grids
- Use dynamic imports for heavy components
- Optimize bundle size with proper code splitting
- Implement ISR (Incremental Static Regeneration) for product pages

### SEO & Metadata
- Use Next.js metadata API for product and category pages
- Implement structured data for products (JSON-LD)
- Ensure proper Open Graph tags for social sharing
- Generate dynamic sitemaps for products and categories

## Quality Standards
- Maintain consistent code formatting (Prettier configured)
- Follow ESLint rules (Next.js config extends)
- Implement proper error boundaries for production resilience
- Use TypeScript strictly - avoid `any` types
- Write descriptive commit messages following conventional commits

## Integration Points
- Backend API endpoints (define base URL in environment)
- Payment processing integration (Stripe/PayPal patterns)
- Analytics tracking (Google Analytics/custom events)
- Search functionality (Algolia/Elasticsearch integration)
- CDN for static assets and images

When implementing new features, always consider mobile-first responsive design, accessibility standards (WCAG), and eCommerce UX best practices.
