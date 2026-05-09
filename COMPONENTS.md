# Components Overview

## Navigation Component
**File**: `components/Navigation.tsx`

Features:
- Fixed header with glass effect
- Animated logo with text gradient
- Desktop navigation menu
- Mobile hamburger menu with animations
- CTA button
- Smooth transitions on hover

Usage:
```tsx
<Navigation />
```

## Footer Component
**File**: `components/Footer.tsx`

Features:
- Multi-column layout
- Company info section
- Services links
- Company links
- Social links
- Copyright notice
- Staggered animations

Usage:
```tsx
<Footer />
```

---

## Hero Section
**File**: `components/sections/Hero.tsx`

Features:
- Animated background blobs
- Gradient text
- Floating visual element
- CTA buttons
- Statistics display
- Scroll indicator
- Responsive grid layout

Key Elements:
- Main heading with gradient
- Description text
- Call-to-action buttons
- Stats cards (500+ Clients, 1000+ Projects, 50+ Awards)

Animations:
- Background blob animations
- Floating elements
- Rotating gradient
- Scroll indicator bounce

## Features Section
**File**: `components/sections/Features.tsx`

Features:
- 6 feature cards
- Icon animations
- Hover elevation
- Scroll-triggered animations
- Glass morphism cards

Card Items:
1. ⚡ Lightning Fast
2. 🔒 Secure & Reliable
3. 📈 Scalable Solutions
4. 🎨 Beautiful Design
5. 🤝 24/7 Support
6. 🚀 Easy Integration

Animations:
- Intersection Observer triggers
- Icon rotation on hover
- Card elevation on hover
- Staggered entrance

## Services Section
**File**: `components/sections/Services.tsx`

Features:
- 4 service cards
- Number badges
- Gradient overlays
- Interactive elements
- Scroll-triggered animations

Services:
1. Web Development
2. Mobile Applications
3. Cloud Solutions
4. AI & Machine Learning

Special Effects:
- Gradient overlay on hover
- Number animation on hover
- Learn More link animation
- Color-coded services

## Testimonials Section
**File**: `components/sections/Testimonials.tsx`

Features:
- 3 testimonial cards
- Star ratings
- Client avatars
- Animated background
- Interactive elements

Testimonials Include:
- Client name
- Role/Title
- Quote
- Avatar emoji
- 5-star rating

Animations:
- Staggered entrance
- Hover elevation
- Star animation
- Avatar hover effect

## CTA (Call-to-Action) Section
**File**: `components/sections/CTA.tsx`

Features:
- Animated background elements
- Main heading
- Description
- Dual CTA buttons
- Trust badges
- Interactive hover effects

CTA Elements:
- Primary button (Get Started Today)
- Secondary button (Schedule a Demo)
- Trust badges with icons

---

# Animation Classes

Available in `app/globals.css`:

## CSS Animations
- `animate-fade-in-up` - Fade and slide up
- `animate-fade-in-down` - Fade and slide down
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right
- `animate-scale-in` - Scale in effect
- `animate-pulse-glow` - Pulsing glow
- `animate-float` - Floating motion
- `animate-gradient-shift` - Gradient animation

## Utility Classes
- `text-gradient` - Gradient text effect
- `glass` - Light glass morphism
- `glass-dark` - Dark glass morphism
- `transition-smooth` - Smooth transitions
- `btn-primary` - Primary button style
- `btn-secondary` - Secondary button style
- `card` - Card component style
- `heading-lg` - Large heading
- `heading-md` - Medium heading
- `heading-sm` - Small heading

---

# Framer Motion Hooks Used

## useInView (react-intersection-observer)
Used for scroll-triggered animations:
```tsx
const { ref, inView } = useInView({ 
  triggerOnce: true,  // Fire once
  threshold: 0.1      // Fire at 10% visibility
});
```

## useState
Used for toggle states (e.g., mobile menu):
```tsx
const [isOpen, setIsOpen] = useState(false);
```

---

# Component Variants Patterns

### Container Variants
Used for staggered animations:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Item Variants
Individual component animations:
```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};
```

---

# Color System

## Primary Colors
- Purple: `#667eea`
- Pink: `#764ba2`

## Background Colors
- Slate 950: `#030712` (Main background)
- Slate 900: `#0f172a` (Secondary)

## Text Colors
- Primary: `#ffffff` (White)
- Secondary: `#d1d5db` (Light gray)
- Muted: `#9ca3af` (Gray)

## Accent Colors
- Blue: `#3b82f6`
- Green: `#10b981`
- Orange: `#f97316`
- Red: `#ef4444`

---

# Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

# How to Extend

## Add a New Section
1. Create `components/sections/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to page layout
4. Use existing animation patterns

## Add New Colors
Edit `app/globals.css` and add CSS variables.

## Add New Animation
Add keyframes to `app/globals.css` and class utilities.

---

Created with ❤️ for GX Global
