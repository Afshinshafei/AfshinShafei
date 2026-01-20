# Project Overview: Retro Personal Website

## What Was Built

A complete, retro gaming-styled personal portfolio website built with modern web technologies, ready for deployment to GitHub Pages.

## Key Features

### 1. Retro Gaming Aesthetic
- **Atari-inspired fonts**: Press Start 2P for headings, VT323 for body text
- **CRT effects**: Scanlines overlay and subtle flicker animation
- **Retro color palette**: 
  - Primary: Neon green (#33ff33)
  - Secondary: Amber (#ffb000)
  - Accent: Cyan (#00ffff)
  - Background: Dark (#0a0a0a)
- **Pixel-perfect borders**: Clean, geometric design elements
- **Glow effects**: Text shadows for authentic CRT monitor feel

### 2. Complete Content Sections

✅ **Home/About** - Personal introduction and professional summary  
✅ **Education** - All academic degrees and qualifications  
✅ **Experience** - Professional work history  
✅ **Research** - PhD research details and contributions  
✅ **Publications** - Academic papers and conference presentations  
✅ **Skills** - Technical skills, languages, and extracurricular activities  

### 3. Modern Technology Stack
- **Next.js 14**: Latest version with App Router
- **TypeScript**: Type-safe code throughout
- **Tailwind CSS**: Utility-first styling with custom retro theme
- **Static Export**: Optimized for GitHub Pages deployment
- **Responsive Design**: Mobile-friendly on all devices

### 4. Developer-Friendly
- **Modular Components**: Reusable UI elements
- **Structured Data**: Easy-to-update content in `data/resume.ts`
- **Clean Code**: Well-organized, commented, and maintainable
- **GitHub Actions**: Automated deployment workflow included

## File Structure

```
personal_webiste/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment workflow
│
├── app/                         # Next.js app directory
│   ├── education/
│   │   └── page.tsx            # Education page
│   ├── experience/
│   │   └── page.tsx            # Experience page
│   ├── publications/
│   │   └── page.tsx            # Publications & Conferences
│   ├── research/
│   │   └── page.tsx            # Research page
│   ├── skills/
│   │   └── page.tsx            # Skills page
│   ├── favicon.ico             # Site icon
│   ├── globals.css             # Global styles & retro effects
│   ├── layout.tsx              # Root layout with navigation
│   ├── not-found.tsx           # 404 error page
│   └── page.tsx                # Home page
│
├── components/                  # Reusable React components
│   ├── Navigation.tsx          # Retro navigation bar
│   ├── PixelDivider.tsx        # Decorative pixel divider
│   ├── RetroCard.tsx           # Card component (green/amber/cyan)
│   └── SectionTitle.tsx        # Section header component
│
├── data/
│   └── resume.ts               # Your CV data (EDIT THIS!)
│
├── public/
│   └── .nojekyll               # GitHub Pages configuration
│
├── .eslintrc.json              # ESLint configuration
├── .gitattributes              # Git attributes
├── .gitignore                  # Git ignore rules
├── DEPLOYMENT_GUIDE.md         # Detailed deployment instructions
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── PROJECT_OVERVIEW.md         # This file
├── QUICK_START.md              # Quick start guide
├── README.md                   # Main documentation
├── tailwind.config.ts          # Tailwind custom theme
└── tsconfig.json               # TypeScript configuration
```

## Content Included

All information from your CV and LinkedIn profile has been structured and included:

### Personal Information
- Name: Afshin Shafei
- Title: Research Fellow, Ph.D. in Environmental Engineering
- Contact: Email, phone, LinkedIn, website
- Location: Rome, Italy

### Professional Background
- **Current**: Research Fellow at Sapienza Università di Roma (2025-present)
- **Advisory**: Technical Adviser at AquaNRG (2017-present)

### Academic Journey
- Ph.D. in Environmental and Hydraulic Engineering (2024)
- M.Sc. in Environmental Engineering (2021)
- M.Sc. in Civil Engineering and Architecture (2018)
- B.Sc. in Civil Engineering (2015)

### Research Contributions
- 2 Published preprints on early warning systems
- 6 Conference presentations (IDRA24, EGU2024, AGU2024, etc.)
- PhD research on climate prediction using AI/ML

### Technical Expertise
- Programming: Python
- Cloud: Google Cloud Platform (GCP), Google Colab
- Software: LaTeX, QGIS, AQUASIM, SWMM, EPANET
- OS: Linux, Windows

### Languages
- Azerbaijani (Native)
- Farsi (Native)
- English (Fluent - IELTS 7.5)
- Turkish (Professional)
- Italian (Basic)
- Arabic (Elementary)

## Design Philosophy

### Clean & Simple
- Focus on content over decoration
- Clear hierarchy and navigation
- Easy-to-read typography

### Retro But Modern
- Nostalgic aesthetic meets modern performance
- Responsive design for all devices
- Fast loading times with static generation

### Future-Ready
- Easy to add new sections (projects, blog, gallery)
- Modular component architecture
- Scalable data structure

## Deployment Options

### Option 1: GitHub Actions (Automated)
- Push to main branch
- Automatic build and deployment
- No manual steps required

### Option 2: Manual Deployment
- Build locally with `npm run build`
- Deploy `out/` folder to gh-pages branch
- Full control over deployment timing

## Customization Points

### Easy Updates
1. **Content**: Edit `data/resume.ts`
2. **Colors**: Modify `tailwind.config.ts`
3. **Layout**: Update component files
4. **Pages**: Add new routes in `app/` directory

### Advanced Customization
- Add animations in `globals.css`
- Create new components in `components/`
- Extend Tailwind theme
- Add new sections/pages

## Next Steps

1. **Install**: Run `npm install`
2. **Develop**: Run `npm run dev` and visit localhost:3000
3. **Customize**: Update your information in `data/resume.ts`
4. **Test**: Review all pages and sections
5. **Deploy**: Follow DEPLOYMENT_GUIDE.md
6. **Share**: Show off your retro website!

## Future Enhancements

Ready-to-add features:
- Projects showcase page
- Blog section with markdown support
- Photo gallery
- Contact form
- Downloadable resume PDF
- Dark/light mode toggle (retro themes)
- Easter eggs and interactive elements
- Visitor counter (retro style!)

## Support & Documentation

- **Quick Start**: See `QUICK_START.md`
- **Full Docs**: See `README.md`
- **Deployment**: See `DEPLOYMENT_GUIDE.md`
- **Code Comments**: Check inline documentation

## Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| Next.js | React framework | 14.2.0 |
| React | UI library | 18.3.0 |
| TypeScript | Type safety | 5.4.0 |
| Tailwind CSS | Styling | 3.4.3 |
| PostCSS | CSS processing | 8.4.38 |
| Autoprefixer | CSS compatibility | 10.4.19 |

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- 📦 Small bundle size (static export)
- ⚡ Fast page loads
- 📱 Mobile-optimized
- ♿ Accessible markup
- 🔍 SEO-friendly

## License

Open source - feel free to use and modify for personal use.

---

**Built with**: Modern tech + Retro vibes = Unique personal website! 🎮

**Created for**: Afshin Shafei  
**Date**: January 2026  
**Version**: 1.0.0
