# Curated Gifts KE - Landing Page

A beautiful, responsive landing page built with Next.js, TailwindCSS, and Framer Motion for Curated Gifts KE.

## Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, gallery-inspired aesthetic
- **Smooth Animations**: Framer Motion powered animations
- **Email Collection**: Supabase-powered waitlist form
- **Performance**: Built with Next.js App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Deployment**: Vercel (recommended)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Note:** Replace `https://yourproject.supabase.co` with your actual Supabase project URL and `your-anon-key` with your actual Supabase anonymous key from your Supabase dashboard.

### 3. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor and run the following query to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Copy your project URL and anon key from the Supabase dashboard
4. Add them to your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Design System

### Colors
- **Background**: `rgb(255, 255, 255)` (White)
- **Text Primary**: `rgb(17, 17, 17)` (Near-Black)
- **Accent Gold**: `rgb(180, 142, 85)` (Muted Gold)
- **Border Gray**: `rgb(229, 229, 229)` (Light Gray)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing
- Consistent spacing scale using multiples of 4px
- Max-width container: `max-w-7xl`
- Generous white space for breathable design

## Components

- **Navigation**: Logo and Join Waitlist button
- **Hero**: Main headline with call-to-action buttons
- **Featured Collections**: Asymmetrical grid showcasing products
- **Meet the Makers**: Brand story section
- **Waitlist Form**: Email collection with validation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

The site will be live at your Vercel URL.

## Customization

To customize the landing page:

1. **Products**: Edit the `products` array in `FeaturedCollections.tsx`
2. **Content**: Update text content in each component
3. **Images**: Replace placeholder images with your product photos
4. **Colors**: Modify the color palette in `tailwind.config.ts`

## Support

For questions or support, please contact the development team.
