# 🚀 GX Global - Quick Start Guide

## Getting Started

You now have a modern, fully animated Next.js application ready to customize!

### 1. Start Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Key Files to Customize

- **Company Info**: Edit [components/Navigation.tsx](components/Navigation.tsx) and [components/Footer.tsx](components/Footer.tsx)
- **Hero Content**: Edit [components/sections/Hero.tsx](components/sections/Hero.tsx)
- **Features**: Edit [components/sections/Features.tsx](components/sections/Features.tsx)
- **Services**: Edit [components/sections/Services.tsx](components/sections/Services.tsx)
- **Testimonials**: Edit [components/sections/Testimonials.tsx](components/sections/Testimonials.tsx)
- **Colors & Animations**: Edit [app/globals.css](app/globals.css)

### 3. Project Structure

```
gx-global-front/
├── app/
│   ├── layout.tsx           # Global layout & fonts
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer
│   └── sections/            # Page sections
│       ├── Hero.tsx         # Hero section
│       ├── Features.tsx      # Features
│       ├── Services.tsx      # Services
│       ├── Testimonials.tsx  # Testimonials
│       └── CTA.tsx          # Call-to-action
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static files
```

### 4. Common Customizations

#### Change Brand Name
Open `components/Navigation.tsx` (line 31):
```tsx
<motion.div className="text-2xl font-bold text-gradient">
  GX Global  {/* ← Change this */}
</motion.div>
```

#### Change Hero Title
Open `components/sections/Hero.tsx` (line 66):
```tsx
<motion.h1>
  Transform Your{' '}
  <span className="text-gradient">Business Today</span>  {/* ← Edit this */}
</motion.h1>
```

#### Change Colors
Edit `app/globals.css` - Look for:
- `.text-gradient` - Primary gradient color
- `.bg-gradient-primary` - Background gradient
- Change hex values like `#667eea` (purple) and `#764ba2` (pink)

#### Add Your Own Features
Edit `components/sections/Features.tsx` - Update the `features` array.

### 5. Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for linting issues
npm run lint
```

### 6. Animations Used

- **Framer Motion** - Smooth component animations
- **CSS Keyframes** - Custom CSS animations
- **Intersection Observer** - Scroll-triggered animations
- **Tailwind CSS** - Utility-first styling

### 7. Important Features

✨ **What's Included:**
- Mobile-responsive design
- Dark theme optimized
- Smooth scroll behavior
- Glass morphism effects
- Animated components
- TypeScript support
- SEO-friendly structure

### 8. Deployment

#### Deploy to Vercel (Recommended)
```bash
git push  # Push to GitHub first
vercel
```

#### Deploy Elsewhere
```bash
npm run build
# Run `npm start` or deploy the `.next` folder
```

### 9. Browser Support

Works in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 10. Performance Tips

- Images are optimized automatically
- Code splitting happens automatically
- Static generation improves load times
- Animations use GPU acceleration

---

## 📚 Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs/

## 🎨 Color Palette

```
Primary Purple:    #667eea
Secondary Pink:    #764ba2
Dark Background:   #030712 (Slate 950)
Card Background:   rgba(15, 23, 42, 0.7)
Text Primary:      #ffffff
Text Secondary:    #d1d5db
```

---

Happy coding! 🎉

**Made with ❤️ for GX Global**
