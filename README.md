# Ivan Silantev - Portfolio

A modern, professional portfolio website built with React, Three.js, and Framer Motion.

## 🚀 Features

- **Interactive 3D Background**: Particle system powered by Three.js with mouse interaction
- **Smooth Animations**: Framer Motion for scroll-triggered and interactive animations
- **Responsive Design**: Fully responsive across all devices
- **Modern Tech Stack**: React 18, Vite, Three.js, Framer Motion
- **Performance Optimized**: Fast loading times and smooth 60fps animations
- **Clean Code**: Component-based architecture with separated concerns

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **3D Graphics**: Three.js
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Pure CSS with CSS Variables

## 📦 Installation

1. **Clone the repository**
```bash
cd portfolio-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── ThreeBackground/
│   │       ├── ThreeBackground.jsx
│   │       └── ThreeBackground.css
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Updating Projects

Edit the `projects` array in `src/components/Projects/Projects.jsx`:

```jsx
const projects = [
  {
    title: 'Your Project Name',
    badges: [{ text: 'Featured', type: 'featured' }],
    icon: '🚀',
    challenge: 'The problem you solved',
    solution: 'How you solved it',
    result: 'The measurable impact',
    tech: ['React', 'Node.js', 'etc'],
    links: [
      { text: 'View Live', url: 'https://...', icon: 'external' },
      { text: 'GitHub', url: 'https://...', icon: 'github' }
    ]
  }
]
```

### Updating Services

Edit the `services` array in `src/components/Services/Services.jsx`

### Changing Colors

Modify CSS variables in `src/styles/index.css`:

```css
:root {
  --primary: #00d9ff;
  --secondary: #7c3aed;
  --accent: #f59e0b;
  --bg-dark: #0a0e27;
  --bg-darker: #050814;
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
}
```

## 📱 Adding Project Screenshots

Replace the placeholder icons with actual images in the project cards:

```jsx
<div className="project-image">
  <img src="/path/to/your/screenshot.png" alt="Project screenshot" />
</div>
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages

1. Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
# Push the dist folder to gh-pages branch
```

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contact

- **Email**: ivsilan2005@gmail.com
- **GitHub**: [@Melvud](https://github.com/Melvud)
- **Telegram**: [@Melvud](https://t.me/Melvud)

---

Built with ❤️ using React, Three.js, and Framer Motion
