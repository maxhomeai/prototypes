# MaxHome Prototypes

This repository contains interactive prototypes for MaxHome, built for demo and presentation purposes. Each prototype is a standalone HTML/CSS/JS application that can be viewed directly in a browser without any build process.

## Purpose

These prototypes are designed to:
- Demonstrate user interface concepts and workflows
- Validate design decisions with stakeholders
- Test user interactions before full implementation
- Serve as visual specifications for development teams

## Technology Stack

- **React** (via CDN) - For interactive UI components
- **Tailwind CSS** (via CDN) - For styling
- **Babel Standalone** - For JSX transpilation in the browser
- **No build process required** - Open HTML files directly in browser

## Repository Structure

```
prototypes/
├── prototype-1/           # Agreement Intake Flow prototype
│   └── agreement-intake.html
├── shared/
│   ├── components/        # Reusable React components
│   │   └── Sidenav.js
│   └── assets/
│       ├── images/        # Shared images (logos, etc.)
│       └── icons/         # Shared icon assets
└── README.md
```

## Viewing Prototypes

Simply open any HTML file in your web browser. All dependencies are loaded via CDN.

For example:
```bash
open prototype-1/agreement-intake.html
```

## Deployment

This repository is hosted on GitHub Pages at: `maxhome.github.io/prototypes`

Access prototypes via:
- `maxhome.github.io/prototypes/prototype-1/agreement-intake.html`

## Development Workflow

1. Create new prototype folder: `prototype-X/`
2. Build standalone HTML file with inline React/Tailwind
3. Use shared components from `shared/components/`
4. Test locally by opening in browser
5. Commit and push to deploy via GitHub Pages

## Shared Components

Reusable components are stored in `shared/components/` and can be included via:
```html
<script src="../shared/components/ComponentName.js"></script>
```

Components use `React.createElement()` syntax to avoid build dependencies.

## Design System

Shared assets (logos, colors, styles) are maintained in `shared/assets/` for consistency across all prototypes.
