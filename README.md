# Afshin Shafei - Retro Arcade Portfolio

A retro-style personal website with 80s arcade aesthetics, built with React and Vite. Features neon colors, grid backgrounds, scanline effects, and pixel fonts for a nostalgic gaming experience.

## Features

- 🎮 **80s Arcade Aesthetic**: Neon colors, CRT scanlines, and grid backgrounds
- ✨ **Smooth Animations**: Glitch effects, neon glows, and transitions
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development
- 🎨 **Modern React**: Component-based architecture for easy updates

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **CSS3** - Custom styling with animations
- **Google Fonts** - Press Start 2P & VT323 retro fonts

## Local Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/personal_webiste.git
cd personal_webiste
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

### Method 1: Using gh-pages package (Recommended)

1. **Update the repository name** in `vite.config.js`:
   - Change the `base` value to match your GitHub repository name
   - Example: If your repo is `https://github.com/username/my-portfolio`, use `base: '/my-portfolio/'`

2. **Install dependencies** (if not already done):
```bash
npm install
```

3. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

This will build your site and push it to the `gh-pages` branch.

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select the `gh-pages` branch
   - Click Save
   - Your site will be live at `https://YOUR_USERNAME.github.io/personal_webiste/`

### Method 2: Manual Deployment

1. **Build the project**:
```bash
npm run build
```

2. **Push the dist folder** to GitHub:
```bash
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

3. **Enable GitHub Pages** (same as Method 1, step 4)

### Method 3: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then enable GitHub Pages from the `gh-pages` branch as described above.

## Project Structure

```
personal_webiste/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Hero section with name and title
│   │   ├── About.jsx            # Summary and bio
│   │   ├── Education.jsx        # Educational timeline
│   │   ├── Experience.jsx       # Work experience
│   │   ├── Research.jsx         # PhD research details
│   │   ├── Publications.jsx     # Research publications
│   │   ├── Conferences.jsx      # Conference presentations
│   │   ├── Skills.jsx           # Technical and language skills
│   │   └── Contact.jsx          # Contact info and references
│   ├── App.jsx                  # Main component
│   ├── App.css                  # Arcade styling
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## Customization

### Updating Content

Edit the component files in `src/components/` to update your information:
- Personal info: `About.jsx`, `Contact.jsx`
- Work history: `Experience.jsx`
- Education: `Education.jsx`
- Research: `Research.jsx`, `Publications.jsx`, `Conferences.jsx`
- Skills: `Skills.jsx`

### Changing Colors

Edit CSS variables in `src/App.css`:

```css
:root {
  --neon-cyan: #00ffff;      /* Primary neon color */
  --neon-magenta: #ff00ff;   /* Secondary neon color */
  --neon-yellow: #ffff00;    /* Accent color */
  --bg-dark: #0a0a1a;        /* Main background */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Style it using the existing arcade card classes

Example:
```jsx
// src/components/Projects.jsx
function Projects() {
  return (
    <section className="section" id="projects">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> PROJECTS <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          {/* Your projects here */}
        </div>
      </div>
    </section>
  )
}
```

## Troubleshooting

### GitHub Pages shows 404

- Make sure the `base` path in `vite.config.js` matches your repository name
- Verify GitHub Pages is enabled in repository settings
- Check that the `gh-pages` branch exists and has the built files

### Styles not loading after deployment

- Clear your browser cache
- Check that the `base` path in `vite.config.js` is correct
- Verify all assets are being referenced with relative paths

### Fonts not loading

- Check your internet connection (fonts load from Google Fonts CDN)
- Verify the font links in `index.html` are correct

## License

This project is open source and available under the MIT License.

## Contact

Afshin Shafei
- Email: afshin.shafei@gmail.com
- LinkedIn: [linkedin.com/in/afshin-shafei-ph-d-a92425117](https://www.linkedin.com/in/afshin-shafei-ph-d-a92425117)

---

Made with ❤️ and retro vibes
