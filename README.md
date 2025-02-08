HEAD
# H2H
HandToHand: A food donation platform for nearby orphanages and old age homes
# HandToHand Project

This is a React project with a structured folder layout.

## Folder Structure

```
/project-root
  ├── /src
  │   ├── /components
  │   │   ├── Hero.js
  │   │   ├── Hero.css
  │   │   ├── Navbar.js
  │   │   ├── Navbar.css
  │   │   ├── AddHome.js
  │   │   ├── AddHome.css
  │   ├── App.js
  │   ├── App.css
  │   ├── responsive.css (for global responsive styling)
  │   ├── index.js
  ├── /public
  │   ├── assets (for images, icons, etc.)
  │   ├── index.html (to be created manually)
  ├── package.json
  ├── README.md
```

## Features

- **Navbar:** Provides site-wide navigation.
- **Hero Section:** Displays an introduction with animations.
- **Add Home Page:** Allows users to register their homes for assistance.
- **Responsive Design:** Ensures compatibility with mobile devices.

## Steps to Run

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   npm start
   ```

## Notes
- Ensure assets like images (`/public/assets`) are correctly placed.
- The project uses `framer-motion` for animations and `react-router-dom` for navigation.
- Responsive styles are managed in `responsive.css` and component-specific CSS files.

fb1f971 (Removed node_modules from tracking)
