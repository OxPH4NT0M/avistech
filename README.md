# Avistech.com Website

## Tech Stack
- **HTML5** (semantic multi-page structure: `index.html`, `recycle.html`, `supplier.html`)
- **Modern CSS3** (custom properties, CSS Grid, fluid `clamp()` typography, earthen palette)
- **Vanilla ES6 JavaScript** (`js/main.js` — zero external JS dependencies)
- **Google Fonts**: `Instrument Serif`, `Plus Jakarta Sans`, `JetBrains Mono`

## What You Need to Install
- **Nothing required** to run or deploy. No Node.js, npm, or build step is needed.
- To preview locally in VS Code, you can optionally install the **Live Server** extension (Ritwick Dey), or run:
  ```bash
  python3 -m http.server 8080
  ```
  and open `http://localhost:8080`.

## Adding Your Logo, Images & Company Details
1. **Logo**: Search for `<!-- LOGO SLOT:` in `index.html`, `recycle.html`, and `supplier.html`, and replace `<span class="brand-logo-slot"></span>` with your `<img src="./assets/logo.svg" alt="Avistech">`.
2. **Hero Images**: Images live in `./assets/`:
   - `hero-recycle.jpg` (used on Home left side + Recycle page hero)
   - `hero-supplier.jpg` (used on Home right side + Supplier page hero)
   These are web-optimized copies (1600px wide, ~200–250 KB). The full-size originals are kept in
   `./assets/originals/` and don't need to be uploaded with the site. If you swap in a new photo,
   resize it to ~1600px wide and update the `width`/`height` attributes on its `<img>` tags.
3. **Company Details & Registration Numbers**: Replace the bracketed placeholders (`[Office Address, Maharashtra]`, `[+91 XXXXX XXXXX]`, `[To be added]`, etc.) in `recycle.html` and `supplier.html`.
4. **Favicon**: `./assets/favicon.svg` is a placeholder "A" monogram. Replace it with your logo mark.

## Contact Forms (Web3Forms)
Both inquiry forms (Recycle page and Supplier page) send submissions to your email through
[Web3Forms](https://web3forms.com) — no server needed.
- An access key is already set in the hidden `access_key` field of both forms (`recycle.html` and
  `supplier.html`). Submissions go to the email address that key was created for. The key is public
  by design, so it's fine to leave it in the HTML.
- To send inquiries to a different inbox, go to https://web3forms.com, enter that email address to get
  a new access key, and replace the `access_key` value in the form(s).
- Want recycling and procurement inquiries to go to different inboxes? Create two keys (one per email)
  and use one in each page.

Each email arrives with the subject "New recycling inquiry — avistech.com" or "New procurement
inquiry — avistech.com". A hidden spam-trap field (`botcheck`) filters out simple bots; if spam becomes a
problem, Web3Forms also supports hCaptcha. Check web3forms.com for current free-plan limits.

## Domain & Link Previews
The canonical URLs, link-preview (Open Graph) tags, `robots.txt` and `sitemap.xml` all assume the
live site is `https://avistech.com/`. If it will be served from a different address (e.g. `https://www.avistech.com/`),
search-and-replace `https://avistech.com` across those files. Link previews use `./assets/og-recycle.jpg`
and `./assets/og-supplier.jpg` (1200×630).
