# MindOS Development Rules

This document outlines the development standards and best practices for the MindOS project.

always use bun no npm

## UI Component Standards

### Animated Icons

**Always use animate-ui for animated icons** to provide a consistent, polished user experience across the application.

- **Reference**: https://animate-ui.com/docs/icons
- **Installation Guide**: https://animate-ui.com/docs/installation
- **Icon List**: https://animate-ui.com/docs/icons

### Installation Process

#### 1. Install Icon Wrapper (One-time setup)

The icon wrapper component is required for all animated icons:

```bash
bunx --bun shadcn@latest add @animate-ui/icons-icon
```

This creates:
- `src/hooks/use-is-in-view.tsx` - Hook for view-based animations
- `src/components/animate-ui/primitives/animate/slot.tsx` - Animation slot component
- `src/components/animate-ui/icons/icon.tsx` - Core icon wrapper and AnimateIcon component

#### 2. Install Specific Animated Icons

Install individual animated icons as needed:

```bash
bunx --bun shadcn@latest add @animate-ui/icons-[icon-name]
```

**Examples:**
```bash
bunx --bun shadcn@latest add @animate-ui/icons-arrow-right
bunx --bun shadcn@latest add @animate-ui/icons-lock
bunx --bun shadcn@latest add @animate-ui/icons-check
```

**Note**: Not all Lucide icons are available as pre-built animate-ui components. Check the [animate-ui icons page](https://animate-ui.com/docs/icons) for available icons.

#### 3. For Icons Not Available in animate-ui

Use the `AnimateIcon` wrapper with `lucide-react` icons:

```tsx
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { Brain, Zap, Github } from "lucide-react"

// Wrap lucide-react icons with AnimateIcon for animations
<AnimateIcon animateOnHover>
  <Brain size={32} />
</AnimateIcon>
```

### Icon Usage Guidelines

#### When to Use Animated vs Static Icons

- **Use animated icons**: For interactive elements, CTAs, feature highlights, and any UI element where you want to draw attention
- **Use static icons**: For dense UI areas, navigation menus (unless hover is desired), or when performance is critical

#### Animation Triggers

Choose the appropriate trigger based on user interaction:

| Trigger | Use Case | Example |
|---------|----------|---------|
| `animateOnHover` | Interactive elements, buttons, links | CTA buttons, feature cards |
| `animateOnView` | Elements that should animate when scrolled into view | Feature sections, testimonials |
| `animateOnTap` | Mobile-friendly interactions | Mobile buttons, touch targets |
| `animate` | Programmatic control | Loading states, notifications |

#### Example Usage

**Pre-built Animated Icon:**
```tsx
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right"

<ArrowRight 
  animateOnHover 
  size={20} 
  className="inline-block ml-1" 
/>
```

**AnimateIcon Wrapper with Lucide Icon:**
```tsx
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { Brain } from "lucide-react"

<AnimateIcon animateOnHover>
  <Brain size={32} color="#3b82f6" />
</AnimateIcon>
```

**With Loop Animation:**
```tsx
<ArrowRight 
  animateOnHover 
  loop 
  loopDelay={1000}
  size={24} 
/>
```

### Component Directory Structure

Animate-ui components are organized as follows:

```
src/
├── components/
│   └── animate-ui/
│       ├── icons/
│       │   ├── icon.tsx           # Core wrapper & AnimateIcon
│       │   ├── arrow-right.tsx    # Pre-built animated icons
│       │   ├── lock.tsx
│       │   └── ...
│       └── primitives/
│           └── animate/
│               └── slot.tsx
└── hooks/
    └── use-is-in-view.tsx
```

### Import Patterns

**Pre-built Animated Icons:**
```tsx
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right"
import { Lock } from "@/components/animate-ui/icons/lock"
```

**AnimateIcon Wrapper:**
```tsx
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
```

**Lucide Icons (for use with AnimateIcon):**
```tsx
import { Brain, Zap, Github } from "lucide-react"
```

## Animation Standards

### Timing

- **Default duration**: 0.3s for most interactions
- **Hover effects**: 0.3s ease-in-out
- **View animations**: 0.6-0.8s for entrance effects
- **Loop delays**: Minimum 1000ms between loops to avoid overwhelming users

### Accessibility

**Always respect reduced motion preferences**. The animate-ui components automatically handle this, but be mindful when adding custom animations.

```tsx
// animate-ui handles this automatically
<ArrowRight animateOnHover size={20} />
```

For custom animations, use:
```tsx
@media (prefers-reduced-motion: reduce) {
  /* Disable or simplify animations */
}
```

### Performance Considerations

- **Limit simultaneous animations**: Avoid animating too many elements at once
- **Use `animateOnView` wisely**: Set `animateOnViewOnce={true}` for better performance
- **Optimize for mobile**: Test animations on mobile devices to ensure smooth performance

```tsx
<AnimateIcon 
  animateOnView 
  animateOnViewOnce={true}  // Only animate once when scrolled into view
  animateOnViewMargin="0px"
>
  <Icon />
</AnimateIcon>
```

## Best Practices

1. **Consistency**: Use the same animation style for similar UI elements
2. **Subtlety**: Animations should enhance, not distract from content
3. **Purpose**: Every animation should have a clear purpose (feedback, attention, delight)
4. **Testing**: Always test animations across different devices and browsers
5. **Documentation**: Document custom animation variants in component files

## Additional Resources

- [Animate UI Documentation](https://animate-ui.com/docs)
- [Animate UI GitHub](https://github.com/imskyleen/animate-ui)
- [Lucide Icons](https://lucide.dev)
- [Framer Motion](https://www.framer.com/motion/)

## Server Components & Modular Architecture

### Server Component First Principle

**CRITICAL RULE: Never mark `page.tsx` or `layout.tsx` files as client components.**

All `page.tsx` and `layout.tsx` files MUST be Server Components by default. This ensures:
- Better performance (less JavaScript shipped to client)
- Improved SEO (server-side rendering)
- Reduced bundle size
- Better data fetching patterns

### Modular Component Architecture

**Always create modular, manageable components instead of writing all code in page files.**

#### Component Organization

```
src/
├── app/
│   ├── page.tsx              # Server Component (NO "use client")
│   └── layout.tsx            # Server Component (NO "use client")
└── components/
    ├── landing/              # Feature-specific components
    │   ├── hero-section.tsx
    │   ├── features-section.tsx
    │   ├── cta-section.tsx
    │   └── footer.tsx
    └── ui/                   # Reusable UI components
        └── ...
```

#### When to Use "use client"

Only mark components as client components when they:
1. Use React hooks (`useState`, `useEffect`, etc.)
2. Use browser APIs (`window`, `document`, etc.)
3. Handle user interactions (click handlers, form submissions)
4. Use client-side libraries (animation libraries, etc.)

#### Component Separation Pattern

**Bad ❌:**
```tsx
// app/page.tsx
"use client"  // DON'T DO THIS!

export default function Page() {
  const [state, setState] = useState()
  // All page logic here...
}
```

**Good ✅:**
```tsx
// app/page.tsx (Server Component)
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  )
}

// components/landing/hero-section.tsx (Client Component)
"use client"

export function HeroSection() {
  const [state, setState] = useState()
  // Client-side logic here
}
```

#### Benefits of Modular Components

1. **Maintainability**: Easier to find and update specific sections
2. **Reusability**: Components can be reused across pages
3. **Testing**: Individual components are easier to test
4. **Performance**: Only client components that need interactivity are marked as such
5. **Code Organization**: Clear separation of concerns
6. **Collaboration**: Multiple developers can work on different components

#### Component Naming Conventions

- **Sections**: Use descriptive names ending in "Section" (e.g., `HeroSection`, `FeaturesSection`)
- **Cards**: Use "Card" suffix for card-like components (e.g., `FeatureCard`, `PricingCard`)
- **Client Components**: Clearly indicate interactivity in the name if needed (e.g., `InteractiveChart`)

#### File Structure Best Practices

```
components/
├── landing/                  # Landing page specific
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── feature-card.tsx
│   ├── cta-section.tsx
│   ├── navbar.tsx
│   └── footer.tsx
├── dashboard/                # Dashboard specific
│   └── ...
└── ui/                       # Shared UI components
    └── ...
```

### Migration Checklist

When refactoring existing pages:

- [ ] Remove `"use client"` from `page.tsx` or `layout.tsx`
- [ ] Extract sections into separate component files
- [ ] Only add `"use client"` to components that need it
- [ ] Move client-side logic (hooks, event handlers) to client components
- [ ] Keep server-side logic (data fetching, metadata) in page files
- [ ] Test that all functionality still works
- [ ] Verify bundle size reduction

### Example: Landing Page Structure

```tsx
// app/page.tsx (Server Component)
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  )
}
```

This approach ensures optimal performance while maintaining clean, maintainable code.

---

Never make any page.tsx or layout.tsx a client compo use all metadata exports 