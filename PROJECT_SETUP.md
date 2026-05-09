# GX Global - Modern Next.js Frontend

A beautiful, animated, and modern Next.js application showcasing cutting-edge web technologies with smooth animations and a professional design system.

## 🚀 Features

- **Modern Next.js 15** with App Router
- **TypeScript** for type-safe development
- **Tailwind CSS** for styling with custom animations
- **Framer Motion** for smooth, professional animations
- **Responsive Design** - works seamlessly on all devices
- **Accessibility** - built with a11y best practices
- **Dark Mode** - modern dark theme throughout
- **Interactive Components** - engaging user interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP, AOS
- **State Management**: React Hooks
- **Package Manager**: npm

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
gx-global-front/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and animations
├── components/
│   ├── Navigation.tsx        # Top navigation bar
│   ├── Footer.tsx            # Footer component
│   └── sections/
│       ├── Hero.tsx          # Hero section with animations
│       ├── Features.tsx       # Features showcase
│       ├── Services.tsx       # Services section
│       ├── Testimonials.tsx   # Client testimonials
│       └── CTA.tsx           # Call-to-action section
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Animations

The project features multiple animation types:

### CSS Animations
- `fadeInUp` - Fade and slide up animation
- `fadeInDown` - Fade and slide down animation
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `scaleIn` - Scale in animation
- `pulse-glow` - Pulsing glow effect
- `float` - Floating animation
- `gradient-shift` - Gradient position shift

### Framer Motion Animations
- `whileHover` - Interactive hover effects
- `whileTap` - Click feedback animations
- `animate` - Continuous animations
- `variants` - Coordinated staggered animations
- `inView` - Scroll-triggered animations

### Glass Morphism
- Modern glass effect with backdrop blur
- Semi-transparent cards with borders
- Hover states with glow effects

## 🎯 Key Components

### Hero Section
- Animated background blobs
- Floating visual elements
- Smooth text animations
- CTA buttons with hover effects
- Statistics display

### Features Section
- Interactive feature cards
- Icon animations
- Hover elevation effects
- Scroll-triggered animations

### Services Section
- Numbered service cards
- Gradient backgrounds per service
- Smooth transitions
- Interactive elements

### Testimonials Section
- Animated star ratings
- Client avatars
- Staggered animations
- Interactive elements

### CTA Section
- Call-to-action with animations
- Trust badges
- Background animations
- Multi-button layout

## 🎨 Color Scheme

- **Primary**: Purple (`#667eea`)
- **Secondary**: Pink (`#764ba2`)
- **Background**: Slate 950 (`#030712`)
- **Card**: Slate 900 with glass effect
- **Text**: White with gray variations

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

## 🚀 Performance

- Optimized images
- Code splitting with Next.js
- Fast page loads with incremental static regeneration
- Smooth animations with GPU acceleration

## 📝 Customization

### Update Company Info
Edit `components/Navigation.tsx` and `components/Footer.tsx` to update company name and links.

### Add New Sections
Create new components in `components/sections/` and import them in `app/page.tsx`.

### Customize Colors
Update the gradient and color values in `app/globals.css` and Tailwind configuration.

### Modify Animations
Edit animation definitions in `app/globals.css` and component motion configurations.

## 🔧 Configuration

### Tailwind CSS
Customize in `tailwind.config.ts` - add colors, fonts, and other theme values.

### Font Configuration
Fonts are loaded from Google Fonts in `app/layout.tsx`:
- Inter (body text)
- Poppins (headings)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Push to GitHub first, then:
vercel
```

### Deploy to Other Platforms
- Build: `npm run build`
- Start: `npm start`

## 📄 License

Built with ❤️ for GX Global

---

**Happy Coding! 🎉**
