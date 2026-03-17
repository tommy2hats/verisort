# Verisort AI

Verisort AI Agent is an intelligent document search and retrieval system that helps teams find answers buried in documents in seconds. No more wasting hours digging through files.

## Key Features

- **⚡ Answers in Seconds** - Get instant responses from complex documents
- **📍 Fully Traceable** - Every answer includes citations showing exactly where information came from
- **🔒 Secure & Private** - Your data stays private and protected
- **🎯 Accurate** - AI agent learns from your documents and provides precise answers
- **📚 Built for Scale** - Handle thousands of documents effortlessly

## How It Works

1. **Upload** - Upload the documents your team already works with
2. **Ask** - Ask questions in plain English the way you normally would
3. **Get Answers** - Verisort finds the answer instantly with source citations

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## Project Structure

- `src/app/` - Next.js app directory with main landing page
- `src/components/block/` - Page section components (features, CTA form, FAQ, etc.)
- `src/components/ui/` - Reusable UI components (input, button, form fields, etc.)
- `src/lib/` - Utilities and constants

## Technologies

- [Next.js](https://nextjs.org) - React framework for production
- [TypeScript](https://www.typescriptlang.org) - Type-safe development
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [React Hook Form](https://react-hook-form.com) - Form management
- [Zod](https://zod.dev) - Schema validation

## Development

The app uses:
- **Font optimization** with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **Biome** for code formatting and linting
- **shadcn/ui** style components for consistent UI

Edit any page by modifying files in `src/` - hot reload is enabled for instant feedback.

## Deployment

Deploy on [Vercel](https://vercel.com) - the platform built for Next.js:

```bash
npm run build
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.
