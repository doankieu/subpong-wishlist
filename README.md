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

## Analytics tracking (GA4)

This project includes Google Analytics 4 page and event tracking.

1. Open [index.html](index.html) and confirm the GA4 Measurement ID is correct for your property (currently `G-2MR55XKPD6`).
2. Deploy the site.
3. In GA4 Realtime, verify these events:
   - `page_view` (automatic)
   - `waitlist_submit_success`
   - `waitlist_submit_error`
   - `cta_click`
   - `outbound_click`

Privacy note: current tracking setup does not send personal form fields (name, email, postcode).

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
