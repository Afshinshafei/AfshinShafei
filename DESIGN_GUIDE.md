# Retro Arcade Portfolio - Design Guide

## Visual Design Concept

Your website features an authentic 80s arcade aesthetic with these key elements:

### Color Palette

- **Neon Pink** (#FF10F0): Primary headings and highlights
- **Neon Cyan** (#00F0FF): Body text and secondary elements
- **Neon Purple** (#BD00FF): Accents and borders
- **Neon Yellow** (#FFD700): Important dates and special info
- **Dark Navy** (#0A0E27): Background
- **Darker Navy** (#050816): Deep background

### Typography

- **Press Start 2P**: Pixel-perfect font for all headings (like classic arcade games)
- **VT323**: Retro terminal font for body text (larger and more readable)

### Visual Effects

#### CRT Scanlines
A subtle horizontal line pattern overlays the entire screen, mimicking old CRT monitors.

#### Neon Glow
All headings and interactive elements have a glowing text-shadow effect:
- Headings glow in their respective colors
- Hover effects intensify the glow
- Minimal animation keeps it subtle and professional

#### Screen Flicker
A very subtle opacity flicker effect creates that authentic old-screen feel.

## Page Sections

### 1. Header
```
┌─────────────────────────────────────┐
│      INSERT COIN _                  │
│                                     │
│      YOUR NAME                      │
│   (Glowing neon pink)               │
│                                     │
│     PLAYER 1 READY                  │
└─────────────────────────────────────┘
```

### 2. Hero / Player Profile
```
┌─────────────────────────────────────┐
│  [ PLAYER PROFILE ]                 │
│                                     │
│    ┌─────────┐                      │
│    │ Pixel   │                      │
│    │ Avatar  │  YOUR TITLE          │
│    └─────────┘  Location            │
│                                     │
│  Your professional summary text...  │
└─────────────────────────────────────┘
```

### 3. Skills / Power-Ups
```
┌─────────────────────────────────────┐
│  [ POWER-UPS & ABILITIES ]          │
│                                     │
│  ⚡ TECHNICAL    🔧 TOOLS           │
│  ▸ Skill 1      ▸ Tool 1            │
│  ▸ Skill 2      ▸ Tool 2            │
│                                     │
│  💫 SOFT SKILLS                     │
│  ▸ Skill 1                          │
└─────────────────────────────────────┘
```

### 4. Experience / Quest Log
```
┌─────────────────────────────────────┐
│  [ QUEST LOG ]                      │
│                                     │
│  │  ● JOB TITLE                     │
│  │    Company | Location            │
│  │    📅 Period                     │
│  │    ▸ Achievement 1               │
│  │    ▸ Achievement 2               │
│  │                                  │
│  │  ● PREVIOUS JOB                  │
│  └─   ...                           │
└─────────────────────────────────────┘
```
(Timeline with neon vertical line)

### 5. Education / Training Grounds
```
┌─────────────────────────────────────┐
│  [ TRAINING GROUNDS ]               │
│                                     │
│  🎓 EDUCATION                       │
│  Degree Name                        │
│  University Name                    │
│  Location                           │
│  📅 Period                          │
│                                     │
│  🏆 ACHIEVEMENTS                    │
│  [Cert 1]  [Cert 2]  [Cert 3]       │
└─────────────────────────────────────┘
```

### 6. Footer / Connect
```
┌─────────────────────────────────────┐
│  [ CONNECT ]                        │
│                                     │
│  📧 your.email@example.com          │
│  💼 LinkedIn Profile                │
│  💻 GitHub Profile                  │
│                                     │
│  GAME CREATED 2026                  │
│  PRESS START TO CONTINUE            │
└─────────────────────────────────────┘
```

## Interactive Elements

### Hover Effects
- Cards: Glow intensifies, slight upward movement
- Links: Color changes to neon yellow with enhanced glow
- Minimal, smooth transitions (0.3s)

### Responsive Design
- Desktop: Full arcade cabinet aesthetic
- Tablet: Simplified layout, maintains styling
- Mobile: Single column, optimized font sizes

## Arcade Card Style

All content sections use the "arcade card" design:
- Semi-transparent dark background
- Neon border (cyan/pink/purple)
- Corner decorations (small border corners)
- Inner glow effect
- Hover state enhancement

## Typography Hierarchy

```
H1 (Page Title):     Press Start 2P, ~2.5rem
H2 (Section Titles): Press Start 2P, ~1.5rem
H3 (Subsections):    Press Start 2P, ~1rem
Body Text:           VT323, ~1.5rem
Links:               VT323, ~1.5rem (pink → yellow on hover)
```

## Accessibility Notes

Despite the retro aesthetic, the site maintains good accessibility:
- High contrast colors (neon on dark)
- Clear font hierarchy
- Readable font sizes (VT323 for body text is larger than typical)
- Semantic HTML structure
- Proper heading levels

---

**The result is a unique, eye-catching portfolio that stands out while remaining professional and readable!** 🎮✨
