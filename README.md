# SubPong Wishlist (Static Site)

Premium black-and-pink one-page wishlist site for the SubPong concept.

## Features

- Full-screen video background hero
- Premium transitions and section reveal motion
- Mobile responsive layout
- Wishlist form wired for free backend capture (Formspree-ready)

## Project files

- `index.html` page structure and content
- `styles.css` design system, layout, and transitions
- `script.js` reveal effects and form behavior
- `assets/video/subpong-poster.svg` poster fallback
- `assets/video/subpong-hero.mp4` optional local video (add your own)

## Run locally

Open `index.html` directly, or run a local static server.

## Connect real wishlist submissions

1. Create a free form at Formspree.
2. Replace `https://formspree.io/f/your-form-id` in `index.html` with your form endpoint.
3. Test a submission.

## Deploy for free

### Cloudflare Pages (recommended)

1. Push this folder to a Git repo.
2. Create a new Cloudflare Pages project from that repo.
3. Build settings:
   - Framework preset: None
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. Deploy and attach custom domain later.

### Alternatives

- Netlify Drop / Netlify Git deploy
- GitHub Pages

## Video note

Current hero includes a remote fallback source. For best branding/performance, replace with your own compressed MP4 in `assets/video/subpong-hero.mp4`.
