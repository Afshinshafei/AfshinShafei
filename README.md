# Retro Arcade Portfolio Website

A retro 80s arcade-themed personal portfolio website built with React and Vite, featuring neon colors, CRT scanlines, and pixel art fonts.

## Features

- 🎮 80s Arcade aesthetic with neon pink, cyan, and purple color scheme
- 📺 CRT scanline effect for authentic retro feel
- 🎯 Pixel art fonts (Press Start 2P & VT323)
- ✨ Minimal glow animations and hover effects
- 📱 Fully responsive design
- ⚡ Fast loading with Vite
- 🚀 Easy deployment to GitHub Pages

## Setup & Installation

1. Install dependencies:
```bash
npm install
```

2. Update your resume data:
   - Open `src/data/resume.js`
   - Replace placeholder text with your information from your CV/resume
   - Update personal info, skills, experience, education, and certifications

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

### Method 1: Automated with GitHub Actions (Recommended)

1. Push your code to GitHub
2. Go to your repository Settings > Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to the main branch and the workflow will automatically deploy

### Method 2: Manual Deployment

1. Update `vite.config.js` with your repository name:
```javascript
base: '/your-repo-name/',
```

2. Deploy manually:
```bash
npm run deploy
```

## Customization

### Colors
Edit CSS variables in `src/styles/global.css`:
```css
--neon-pink: #FF10F0;
--neon-cyan: #00F0FF;
--neon-purple: #BD00FF;
--dark-bg: #0A0E27;
```

### Fonts
Change fonts by updating the Google Fonts import in `index.html` and CSS variables.

### Content
All content is managed in `src/data/resume.js` for easy updates.

## Project Structure

```
personal_website/
├── src/
│   ├── components/      # React components
│   ├── styles/          # CSS styling
│   ├── data/            # Resume data
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── .github/workflows/   # GitHub Actions
└── vite.config.js       # Vite configuration
```

## Future Additions

The component structure is ready for expansion:
- Projects section
- Hobbies section
- Blog/articles
- Contact form

## Technologies Used

- React 18
- Vite 5
- CSS3 with custom arcade styling
- Google Fonts (Press Start 2P, VT323)
- GitHub Pages for hosting

## License

Feel free to use this template for your own portfolio!

---

**PRESS START TO CONTINUE** 🎮
