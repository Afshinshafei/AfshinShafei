# Quick Start Guide

Get your retro personal website running in minutes!

## Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Version 18.0 or later required

2. **Install dependencies**
   ```bash
   npm install
   ```

## Development

**Start the development server:**
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Update Your Content

Edit the file `data/resume.ts` to customize with your information:

- Personal information
- Education history
- Work experience
- Publications
- Skills and languages
- And more!

## Preview Changes

The development server supports hot reload. Just save your changes and the browser will automatically update!

## Build for Production

```bash
npm run build
```

This creates an `out/` folder with your static website.

## Deploy to GitHub Pages

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

**Quick deploy:**
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings
4. Done!

## Customize Design

### Change Colors

Edit `tailwind.config.ts` to change the retro color scheme:

```typescript
colors: {
  retro: {
    green: '#33ff33',  // Change to your preferred color
    amber: '#ffb000',
    // ... more colors
  },
}
```

### Modify Layout

- Edit `app/layout.tsx` for global layout changes
- Edit individual page files in `app/` folders
- Update components in `components/` folder

## Project Structure

```
.
├── app/              Pages and routes
├── components/       Reusable UI components
├── data/            Your content (CV data)
├── public/          Static files
└── README.md        Full documentation
```

## Need Help?

- Check [README.md](README.md) for full documentation
- See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for deployment help
- Review code comments for implementation details

## Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server
3. ✅ Update `data/resume.ts` with your info
4. ✅ Test locally
5. ✅ Deploy to GitHub Pages
6. 🎉 Share your retro website!

---

Happy coding! 🕹️
