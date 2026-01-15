# PREMIUM Commercial - Real Estate Financing Website

A modern, responsive website for PREMIUM Commercial real estate financing services built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional interface with smooth transitions
- **Contact Form**: Functional form for lead generation
- **Service Showcase**: Comprehensive display of financing services
- **Process Timeline**: 3-step simplified application process
- **Client Portfolio**: Display of served client types

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd premium-commercial
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import the GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

## File Structure

```
premium-commercial/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with form
│   ├── Services.tsx      # Services grid
│   ├── Process.tsx       # 3-step process
│   ├── Clients.tsx       # Client portfolio
│   └── Footer.tsx        # Footer
├── public/               # Static assets
└── package.json          # Dependencies
```

## License

All rights reserved.
