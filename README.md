# e-kreacje Portfolio

A production-ready, single-page portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** EB Garamond (Google Fonts) & Inter (Google Fonts)

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open in browser:**
    Navigate to `http://localhost:3000`.

## Customization

### 1. Logo
To update the text logo:
- Open `components/Navbar.tsx`
- Locate the `<Link href="#main">` element
- Change text inside from "E-KREACJE" to your brand name.

To use an image logo:
- Place your logo in `public/logo.svg`
- Update `components/Navbar.tsx` to use `<Image src="/logo.svg" ... />` instead of text.

### 2. Colors & Typography
- **Colors:** Edit `tailwind.config.ts`. The accent color is currently `#B5838D`.
- **Fonts:** Fonts are loaded in `app/layout.tsx` via `next/font/google`.

### 3. Categories & Content
Content is modularized in `components/sections/`.
- **Services:** `components/sections/Services.tsx`
- **Target Group:** `components/sections/TargetGroup.tsx`
- **Portfolio:** `components/sections/Portfolio.tsx` (Update `PROJECTS` array)
- **Contact:** `components/sections/Contact.tsx`

To change the order, rearrange components in `app/page.tsx` and update the `NAV_ITEMS` array in `components/Navbar.tsx`.

## Features

- **Responsive Design:** Mobile-first approach.
- **Accessible:** Semantic HTML, focus states, ARIA labels.
- **Smooth Scrolling:** Native browser behavior + Framer Motion.
- **Active Section Highlighting:** IntersectionObserver implementation.
- **Animations:** Subtle entrance animations and micro-interactions.
