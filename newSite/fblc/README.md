# FBLC Homepage

A modern, responsive homepage for Brampton FBLC (Future Business Leaders Club), JEC, & TA built with Next.js 15 and Tailwind CSS 4.

## 🎨 Design Overview

This homepage is based on a detailed Figma design and features:

- **Hero Section**: Bold typography with "EMPOWERING FUTURE BUSINESS LEADERS, ONE STEP AT A TIME!"
- **Navigation**: Full-width navbar with exact Figma specifications (#22356b color, 70px height, logo left, links right)
- **Stats Section**: Three cards showcasing membership numbers and subsidiaries
- **About Section**: Logo placement with detailed description and CTA
- **Gallery Section**: "What We Are Up To" with rotated image placeholders
- **Footer**: Social media links and community call-to-action

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **Google Fonts** - Custom typography (Poppins, Kameron, Mulish, etc.)
- **React Components** - Modular, reusable component architecture

## 📱 Responsive Design

The homepage is fully responsive with breakpoints for:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`
- Large Desktop: `> 1280px`

### Key Responsive Features:
- Flexible navigation that stacks on mobile
- Hero text that scales with viewport
- Stats cards that stack vertically on mobile
- About section that reorders on mobile (logo below content)
- Gallery images that adjust size and layout
- Footer that stacks columns on mobile

## 🎯 Component Architecture

### Core Components

1. **Navigation.js**
   - Full-width responsive navigation bar matching Figma specs
   - Exact color (#22356b) and dimensions (70px height, 1403px max width)
   - Logo positioned on left, navigation links on right
   - Mobile hamburger menu with smooth transitions
   - Hover effects with red accent lines

2. **Logo.js**
   - Reusable logo component with multiple sizes (sm, md, lg, xl)
   - SVG-based logo with gradient styling
   - Optional text display
   - Hover animations and scaling effects

3. **StatsCard.js**
   - Reusable stat display component
   - Three variants (primary, secondary, tertiary)
   - Hover animations and accent lines

4. **Button.js**
   - Flexible button component
   - Multiple variants and sizes
   - Consistent styling and interactions

### Design System

#### Colors
- **Primary Red**: `#a42b43` (CTA buttons, accents)
- **Blue Variants**: Light blue, medium blue, dark blue for cards
- **Background**: Gradient from slate-800 to black
- **Navy Blue**: `#1e40af` for navigation

#### Typography
- **Headings**: Poppins (Black 900 weight)
- **Navigation**: Kameron
- **Buttons**: Mulish (Bold)
- **Stats Numbers**: MuseoModerno (Black)
- **Stats Labels**: Mukta Malar (ExtraBold)
- **Body/Footer**: Kufam

#### Shadows & Effects
- Consistent shadow system using CSS custom properties
- Backdrop blur effects for cards
- Transform hover animations
- Gradient overlays

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage component
└── components/
    ├── Navigation.js       # Full-width navigation bar component
    ├── Logo.js            # Reusable logo component with SVG
    ├── StatsCard.js       # Statistics card component
    └── Button.js          # Reusable button component

public/
└── logo.svg               # FBLC logo in SVG format
```

## 🎨 Design Principles

### Flexbox-First Approach
- All layouts use flexbox for responsive behavior
- No CSS Grid used to maintain simplicity
- Consistent spacing with gap utilities

### Mobile-First Responsive Design
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Consistent component behavior across breakpoints

### Performance Considerations
- Component-based architecture for code splitting
- Optimized font loading with Google Fonts
- Minimal JavaScript for interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd FBLC/newSite/fblc
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Update CSS custom properties in `globals.css`:
```css
:root {
    --primary-red: #a42b43;
    --red-hover: #8b2a42;
    /* ... other colors */
}
```

### Typography
Fonts are loaded from Google Fonts. To change fonts, update the import URL in `globals.css` and the CSS custom properties.

### Component Variants
Each component supports multiple variants through props:
- **Button**: `primary`, `secondary`, `outline`, `ghost`
- **StatsCard**: `primary`, `secondary`, `tertiary`

## 📋 Features

### Interactive Elements
- ✅ Navigation hover effects with red accent lines
- ✅ Mobile hamburger menu with smooth transitions
- ✅ Logo hover scaling animation
- ✅ Button hover animations
- ✅ Card hover transformations
- ✅ Social media icon interactions
- ✅ Image hover effects in gallery

### Accessibility
- ✅ Focus indicators for keyboard navigation
- ✅ Semantic HTML structure
- ✅ Alt text support ready
- ✅ Reduced motion support
- ✅ Color contrast compliance

### Performance
- ✅ Optimized font loading
- ✅ Component-based code splitting
- ✅ CSS custom properties for theming
- ✅ Minimal JavaScript footprint

## 🔮 Future Enhancements

### Phase 2 Features
- [ ] Replace SVG logo with official FBLC logo image
- [ ] Add real images from FBLC events
- [ ] Implement smooth scroll navigation
- [ ] Add animation on scroll (AOS)
- [ ] Integrate with CMS for content management
- [ ] Add blog/news section
- [ ] Implement member registration flow

### Phase 3 Features
- [ ] Multi-language support
- [ ] Advanced animations with Framer Motion
- [ ] Image optimization with Next.js Image
- [ ] Progressive Web App (PWA) capabilities
- [ ] Analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the existing code style
4. Test on multiple screen sizes
5. Submit a pull request

## 📄 License

This project is part of the FBLC organization. All rights reserved.

---

**Built with ❤️ by the FBLC Development Team**