# Avi MEP Consultants — Modern Website

A premium engineering consultancy web application for **Avi MEP Consultants LLC**, specializing in Mechanical, Electrical, Plumbing (MEP), Fire Protection engineering, NYC Local Law 87 / 97 compliance, and NYC DOB Special Inspections.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## 🚀 Deploying to Netlify via GitHub

This project is pre-configured for seamless, zero-config deployment on **Netlify**.

### Quick Setup Steps:

1. **Push this repository to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Avi MEP website redesign"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Log in to your [Netlify Dashboard](https://app.netlify.com/).
   - Click **"Add new site"** → **"Import an existing project"**.
   - Select **GitHub** and authorize access to your repository.

3. **Confirm Build Settings** *(Netlify automatically detects these from `netlify.toml`)*:
   - **Base directory**: `(leave blank / root)`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `20` or higher

4. **Click "Deploy site"**:
   - Netlify will run `npm run build` and publish your site in seconds with full client-side routing support (via `_redirects` and `netlify.toml`).

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint TypeScript types
npm run lint
```

---

## 📁 Project Structure

```
├── netlify.toml          # Netlify build configuration & SPA redirect rules
├── public/
│   ├── _redirects        # Netlify SPA fallback routing (/* /index.html 200)
│   └── assets/avimep/    # High-resolution project, team & service assets
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, Modals)
│   ├── data/             # Verified company data, projects, and services
│   ├── pages/            # Multi-page views (Home, Services, Projects, About, Insights, Contact)
│   ├── App.tsx           # Route orchestration & modal state
│   ├── index.css         # Architectural design tokens & typography
│   └── main.tsx          # Application entry point
├── index.html            # SEO meta tags, Google Fonts & Schema.org JSON-LD
└── vite.config.ts        # Vite configuration with Tailwind CSS v4
```
