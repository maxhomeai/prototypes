# Prototypes Repository

## Project Overview

Repository for creating interactive prototypes based on Figma designs, hosted on GitHub Pages at `maxhome.github.io/prototypes`.

**Key Characteristics:**
- Each prototype is a standalone HTML/CSS/JS file using React via CDN
- Prototypes share a common design system for consistency
- Each prototype can contain multiple flows/screens with separate shareable URLs
- Direct URL access only - no index page or navigation between prototypes

## Repository Structure

```
prototypes/
├── shared/
│   ├── styles/          # Design system CSS (colors, typography, spacing)
│   ├── components/      # Reusable React components
│   └── assets/          # Shared assets used across prototypes
│       ├── images/      # Shared images (logos, illustrations)
│       └── icons/       # Shared icon files
├── prototype-1/
│   ├── onboarding.html  # Individual flow/screen
│   ├── dashboard.html   # Individual flow/screen
│   ├── settings.html    # Individual flow/screen
│   └── assets/          # Prototype-specific assets
├── prototype-2/
│   ├── checkout.html
│   ├── confirmation.html
│   └── assets/          # Prototype-specific assets
└── CLAUDE.md
```

### Directory Conventions

- **shared/** - Design system and reusable components
  - `styles/` - CSS variables, utility classes, component styles
  - `components/` - Reusable React component definitions
  - `assets/` - Shared assets used across multiple prototypes
    - `images/` - Logos, illustrations, backgrounds used globally
    - `icons/` - Icon files (SVG, PNG) for common UI elements
- **prototype-[n]/** - Individual prototype folders
  - Each HTML file represents a distinct flow or screen
  - Files are self-contained and can be shared independently
  - File naming: descriptive-flow-name.html (e.g., `user-onboarding.html`, `payment-flow.html`)
  - `assets/` - Prototype-specific images, screenshots, or media files

## Development Workflow

### Adding a New Prototype

1. Create a new folder: `prototype-[n]/`
2. Add HTML files for each flow/screen in the prototype
3. Import required libraries and shared components in each file:
   ```html
   <!-- Required libraries -->
   <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
   <script src="https://cdn.tailwindcss.com"></script>

   <!-- Shared components -->
   <script src="../shared/components/Sidenav.js"></script>
   ```
4. Use inline SVG icons (Lucide design style):
   ```javascript
   // In JSX files (type="text/babel")
   const IconName = ({ size = 20 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
       <path d="..." />
     </svg>
   );

   // In plain JS files
   React.createElement('svg', {
     width: 20, height: 20, viewBox: '0 0 24 24',
     fill: 'none', stroke: 'currentColor', strokeWidth: 2,
     strokeLinecap: 'round', strokeLinejoin: 'round'
   }, React.createElement('path', { d: '...' }))
   ```
   Get SVG paths from https://lucide.dev
5. Test locally, then push to GitHub

### Adding a New Flow to Existing Prototype

1. Create a new HTML file in the prototype folder
2. Follow the same structure as existing flows
3. Import shared design system
4. No need to link flows together - each is independently shareable

### URL Structure

Each flow is accessed via direct URL:
```
https://maxhome.github.io/prototypes/prototype-1/onboarding.html
https://maxhome.github.io/prototypes/prototype-1/dashboard.html
https://maxhome.github.io/prototypes/prototype-2/checkout.html
```

**Important**: Prototypes are not linked to each other. Share specific URLs directly with stakeholders.

## Design System Approach

### Shared Styles

All prototypes must import and use shared design system:
- **CSS Variables** - Colors, spacing, typography tokens
- **Utility Classes** - Common layout patterns, spacing helpers
- **Component Styles** - Consistent button, input, card styles

### Shared Components

Reusable React components defined in `shared/components/`:
- Import via script tag in each HTML file
- Components use the shared design system styles
- Keep components simple and stateless when possible

### Maintaining Consistency

- Always use design system tokens (colors, spacing) rather than hardcoded values
- Follow existing component patterns when creating new UI elements
- Test changes to shared/ across multiple prototypes to avoid breaking changes

## Assets Management

### Shared Assets

Store assets used across multiple prototypes in `shared/assets/`:
- **Company logos** - Brand assets used in all prototypes
- **Common icons** - UI icons (hamburger menu, close button, etc.)
- **Illustrations** - Generic graphics reusable across flows

Reference shared assets using relative paths:
```html
<img src="../shared/assets/images/logo.png" alt="Logo">
<img src="../shared/assets/icons/menu.svg" alt="Menu">
```

### Prototype-Specific Assets

Store assets unique to a prototype in its `assets/` folder:
- **Screenshots** - Design reference images
- **Flow-specific graphics** - Custom illustrations for that prototype
- **Temporary assets** - Images used during development

Reference prototype assets:
```html
<img src="./assets/screenshot-1.png" alt="Reference">
```

### Best Practices

- Use SVG for icons when possible (better scaling, smaller file size)
- Optimize images before adding (compress PNGs/JPGs)
- Use descriptive filenames: `dashboard-hero-image.png` not `img1.png`
- Avoid large file sizes - GitHub Pages has bandwidth limits
- Move frequently reused prototype assets to `shared/assets/`

## GitHub Pages Deployment

### Setup (One-time)

1. Push repository to GitHub under maxhome organization
2. Enable GitHub Pages in repository settings
3. Set source to main branch, root directory

### Deployment Process

- Changes pushed to main branch automatically deploy
- Access prototypes via `https://maxhome.github.io/prototypes/[prototype-folder]/[flow].html`
- No build process required - static files served directly

### Testing Before Deployment

- Test locally by opening HTML files in browser
- Verify relative paths work correctly (shared/ imports)
- Check that all flows work independently
