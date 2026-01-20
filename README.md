# Afshin Shafei - Personal Website

A retro gaming-styled personal portfolio website built with Next.js, featuring an Atari-inspired design with modern responsiveness.

## Features

- **Retro Gaming Aesthetic**: Atari-style fonts (Press Start 2P, VT323), CRT effects, and pixel-perfect borders
- **Fully Static**: Exports to static HTML for GitHub Pages deployment
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Type-Safe**: Built with TypeScript for better code quality
- **Modern Stack**: Next.js 14 with App Router and Tailwind CSS

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── education/         # Education page
│   ├── experience/        # Experience page
│   ├── research/          # Research page
│   ├── publications/      # Publications & Conferences page
│   ├── skills/            # Skills page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── RetroCard.tsx      # Card component
│   ├── SectionTitle.tsx   # Section title component
│   └── PixelDivider.tsx   # Divider component
├── data/                  # Data files
│   └── resume.ts          # CV/Resume data
├── public/                # Static files
└── next.config.js         # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal_webiste
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

### Build Static Site

To build the site for production:

```bash
npm run build
```

This will create an `out/` folder with all static files ready for deployment.

## Deployment to GitHub Pages

### Method 1: Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. Push the repository to GitHub:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Push the `out/` folder to a `gh-pages` branch:
```bash
cd out
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -f origin gh-pages
```

4. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select `gh-pages` branch as the source
   - Click Save

### Method 2: Using GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

Then just push to main branch and it will auto-deploy!

### Configuration for GitHub Pages

#### For User/Organization Site (username.github.io)

If deploying to `username.github.io`, no changes needed to `next.config.js`.

#### For Project Site (username.github.io/repo-name)

If deploying to a repository like `username.github.io/personal-website`, update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/personal-website', // Replace with your repo name
  images: {
    unoptimized: true,
  },
}
```

### Custom Domain

To use a custom domain (like afshinshafei.com):

1. Create a `CNAME` file in the `public/` folder with your domain:
```
afshinshafei.com
```

2. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or use A records pointing to GitHub's IPs

3. Enable custom domain in GitHub Pages settings

## Customization

### Update Content

Edit `data/resume.ts` to update your personal information, education, experience, publications, etc.

### Change Colors

Modify the retro color scheme in `tailwind.config.ts`:

```typescript
colors: {
  retro: {
    bg: '#0a0a0a',      // Background
    surface: '#1a1a1a', // Card background
    border: '#33ff33',  // Border color
    green: '#33ff33',   // Primary color
    amber: '#ffb000',   // Secondary color
    cyan: '#00ffff',    // Accent color
    pink: '#ff00ff',    // Additional accent
    text: '#e0e0e0',    // Text color
  },
}
```

### Add New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file in that folder
3. Update the navigation in `components/Navigation.tsx`

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Press Start 2P, VT323 (Google Fonts)
- **Deployment**: GitHub Pages (Static Export)

## Browser Support

Modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available for personal use.

## Contact

Afshin Shafei
- Email: afshin.shafei@gmail.com
- LinkedIn: [linkedin.com/in/afshin-shafei-ph-d-a92425117](https://www.linkedin.com/in/afshin-shafei-ph-d-a92425117)
- Website: [afshinshafei.com](https://afshinshafei.com)

---

Built with retro vibes and modern tech! 🕹️
