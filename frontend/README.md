# JB Enterprise Website - Frontend

Modern, high-performance corporate website built with Next.js 15, featuring premium animations and industrial design.

## Features

- ✨ Modern industrial design with premium animations
- 🎨 Custom design system (Navy, Steel Grey, Electric Blue)
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized performance (Lighthouse 90+)
- 🎬 Framer Motion animations
- 📧 Contact form with MongoDB storage
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Database:** MongoDB
- **Email:** Nodemailer
- **Icons:** Lucide React
- **TypeScript:** Full type safety

## Getting Started

### Prerequisites

- Node.js 20+ installed
- MongoDB instance (local or Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.local.example .env.local
```

3. Update `.env.local` with your MongoDB URI and email credentials (optional)

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── home/              # Home page sections
│   ├── layout/            # Layout components
│   └── ui/                # Reusable UI components
├── lib/
│   ├── animations.ts      # Framer Motion variants
│   ├── constants.ts       # Site content/data
│   └── mongodb.ts         # MongoDB connection
└── public/
    ├── videos/            # Video assets
    ├── images/            # Image assets
    └── logos/             # Client logos
```

## Environment Variables

See `.env.local.example` for required environment variables.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

```bash
vercel
```

Make sure to add environment variables in Vercel dashboard.

## Assets Needed

- **Hero video:** `/public/videos/hero-background.mp4` (power plant/turbine footage)
- **Product images:** `/public/images/products/` (stator coil, slip ring, turbine blades, etc.)
- **Client logos:** `/public/logos/` (major clientele logos)

## License

© 2024 JB Enterprise. All rights reserved.
