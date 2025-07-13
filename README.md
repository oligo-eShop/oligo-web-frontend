# Oligo eShop Frontend

A modern eCommerce frontend built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Landing Page**: Clean, responsive design with hero section, features, and call-to-action
- **Mobile-First Design**: Fully responsive layout that works on all device sizes
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Next.js 14**: Latest Next.js with App Router for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Header.tsx      # Site header with navigation
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── CallToAction.tsx# CTA section
│   └── Footer.tsx      # Site footer
└── types/             # TypeScript type definitions (for future use)
```

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Development

The project follows modern React and Next.js best practices:

- Functional components with hooks
- TypeScript for type safety
- Responsive design with Tailwind CSS
- SEO-optimized with Next.js metadata API
- Clean component architecture

## Next Steps

To extend this landing page into a full eCommerce application, consider adding:

- Product catalog pages
- Shopping cart functionality  
- User authentication
- Payment integration
- Order management
- Admin dashboard
- Search and filtering
- Product reviews

## Contributing

1. Follow the existing code style and conventions
2. Use TypeScript strictly (avoid `any` types)
3. Ensure responsive design on all screen sizes
4. Write descriptive commit messages
5. Test thoroughly before submitting changes
