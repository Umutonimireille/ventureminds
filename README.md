# Venture Minds

A modern, dynamic multi-page website for **Venture Minds**  a student think-tank from African Leadership University in Rwanda, showcasing the eLab entrepreneurship lab journey.

## Tech Stack

- **React** (Vite) + **React Router** for navigation
- **Framer Motion** for animations and page transitions
- **Tailwind CSS** for styling
- Fully responsive (mobile, tablet, desktop)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── assets/          # Logo and static images
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── CustomCursor.jsx
│   ├── ContactForm.jsx
│   ├── HeroSlideshow.jsx
│   ├── ImageGallery.jsx
│   ├── PageTransition.jsx
│   ├── ParticleBackground.jsx
│   ├── SectionHeading.jsx
│   ├── StatCounter.jsx
│   ├── TeamCard.jsx
│   └── Timeline.jsx
├── context/         # React context (cursor state)
├── data/            # Content data files (easy to update)
│   ├── site.js
│   ├── team.js
│   ├── challenges.js
│   ├── projects.js
│   ├── timeline.js
│   └── impact.js
└── pages/           # Route pages
    ├── Home.jsx
    ├── About.jsx
    ├── Team.jsx
    ├── Challenges.jsx
    ├── ProblemSolution.jsx
    ├── Impact.jsx
    └── Contact.jsx
```

## Updating Content

All content is stored in `src/data/` files. Look for `// SWAP:` comments indicating where to replace placeholder images with real eLab photos.

- **Team photos**: Set the `photo` field in `src/data/team.js`
- **Gallery images**: Update URLs in `src/data/timeline.js` and `src/data/impact.js`
- **Hero slideshow**: Edit slides in `src/components/HeroSlideshow.jsx`
- **Stats, testimonials, challenges**: Edit the respective data files

## Brand Colors

| Color         | Hex         | Usage            |
| ------------- | ----------- | ---------------- |
| Black         | `#0A0A0A` | Background       |
| Blue          | `#1E7FBF` | Home section     |
| Green         | `#2E9E44` | About section    |
| Orange        | `#F2932E` | Team, highlights |
| Red           | `#C0392B` | Challenges       |
| Charcoal Gray | `#3A3A3A` | Solutions        |
| Gold          | `#F2B807` | Impact section   |

## Build

```bash
npm run build
npm run preview
```
