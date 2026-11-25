# Muhammadu Saajith — Personal Portfolio

A portable, dependency-free portfolio built with HTML, CSS, and JavaScript. The design uses a light theme with white and pale green surfaces, emerald accents, layered CSS artwork, and responsive cards. The contact section uses deep emerald with white text. It needs no framework, build step, account, database, analytics, external fonts, or third-party asset service. This is local source; no deployment was performed.

## Preview

Open `dist/index.html` directly, or install Node.js and run `npm start` or `npm run dev` from this folder. Open http://127.0.0.1:4173. Stop the server with Ctrl+C. No `npm install` or build step is required. `npm run check` checks JavaScript syntax.

## Design and behavior

- The light palette is centralized in `:root` custom properties in `dist/style.css`, including derived green shadow and overlay tokens. The standalone favicon has matching local palette tokens. White and pale green surfaces use dark text; the deep emerald contact section uses white text and focus indicators. The profile photograph retains its original colors.
- The top navigation remains fixed while scrolling. Section offsets keep headings visible below it, and the active section is highlighted.
- The mobile menu supports keyboard navigation, closes after choosing a section, and closes with Escape. Visible focus styles identify keyboard targets.
- Credential filters retain their pressed state, and document details open in an accessible native dialog. The internship experience letter has a privacy-safe preview and redacted PDF download under Credentials → Experience, linked from the internship entry. Direct PDF links work without JavaScript; the other three cards remain clear placeholders.
- The hero uses the original profile photo at `dist/assets/saajith-profile.jpg` in a CSS portrait frame, approximately 340px wide on desktop and 240px on mobile. Its proportions are preserved, with intrinsic dimensions and eager/high-priority loading. Decorative depth is separate from the photograph. AquaSense pool artwork uses lightweight CSS; the pool is a concept illustration, not a screenshot or a live research demo.
- Entrance effects and subtle pointer tilt enhance supported desktop devices. Reduced-motion preferences disable unnecessary motion; touch interaction does not depend on hover.
- Core content and section links remain available without JavaScript. Filtering, active-section tracking, and document dialogs require JavaScript.

## Content and source status

The portfolio preserves the existing project content and the supplied facts: Muhammadu Saajith is an entry-level Software Engineer in Sri Lanka, completed a six-month internship at Gamage Recruiters, develops software independently through CodeForge Technology, and led the SLIIT final-year AquaSense research group. The SLIIT final semester is complete and results are pending; the portfolio does not claim that a degree has been awarded. Dates, degree title, metrics, client projects, additional education and courses are intentionally omitted until confirmed.

Existing skills and AquaSense research descriptions are retained. The research repository is https://github.com/muhammadusj001/R26-IT-143, the showcase is https://aquasense-r26-it-143.vercel.app/, and the personal GitHub is https://github.com/muhammadusj001. No operating AI demo is implied. All pool artwork is a CSS concept illustration.

The Gamage Recruiters internship experience letter is included only as a permanently redacted public PDF and preview under `dist/assets/documents/`. The supplied original remains outside this project. Its card identifies it as a privacy-safe copy, without claiming independent issuer verification. The SLIIT, CodeForge, and courses/certifications cards remain explicitly pending placeholders. No CV download or unredacted original document is included.

The letter's signature, stamp and footer contact details were permanently removed. The public PDF was rebuilt from sanitized pixels, so it is an image-based copy with no original text layer, attachments or form fields. Its final page was rendered and visually reviewed; an independent PDF parser checked the flattened structure. The preview is 1200×1697. Both assets returned HTTP 200 with the correct PDF/JPEG content types, and filtering, dialog reset and focus restoration passed scripted checks. Restart an already running local server after this update to load the added PDF MIME support.

## Complete before public launch

1. In `dist/script.js`, set `LINKEDIN_URL` to your confirmed `https://www.linkedin.com/in/.../` URL. Until then, the clickable LinkedIn button opens the service home and visibly says the profile is pending.
2. Confirm skill labels and CodeForge wording against the latest CV. Add actual employment dates, education award title and other projects only when confirmed.
3. Supply any remaining CV or letters for redacted preview preparation. Add a public CV download only after redaction; no broken download button is present now.
4. Replace credential placeholders only after verifying the issuer and reviewing the final exported files. Never present a placeholder as an actual certificate.

## Safe document publishing

Keep originals OUTSIDE this project and its Git history. A hidden link, JavaScript password, robots exclusion, CSS mask, black rectangle overlay, or an unlinked public file does not protect private information.

Permanently remove NIC/passport/student identifiers where unnecessary, home addresses, signatures, third-party phone numbers/emails, private references and document metadata. Inspect every page and check copy/paste and text extraction as well as the image. A flattened, sanitized image can be used as a preview, but ensure the original data was removed before export. Do not include original documents beneath overlays or as hidden PDF layers.

For originals, use recipient-specific restricted cloud sharing with verified recruiters, read-only permission, expiry where supported, and access revocation. Keep those links outside the public portfolio. This static project has no authenticated document portal.

## Manual verification

Use a browser at approximately 360px, 768px, and 1440px:

1. Confirm there is no horizontal scrolling. Scroll through every section; the navbar should stay visible and the active item should follow the section.
2. Follow every section link, including a direct URL fragment, and confirm its heading sits below the navbar. On mobile, open the menu with the keyboard, choose a section, and confirm it closes. Test Escape and visible focus.
3. Try every credential filter, open each details dialog, close it with its button and Escape, and confirm keyboard focus returns to the triggering control. Open the internship preview and PDF download, then open a placeholder card and confirm its dialog does not show the internship preview. After filtering to Education or Certificates, follow the internship documentation link and confirm the correct card becomes visible.
4. Follow the GitHub, repository, research showcase, and LinkedIn links. The current pending LinkedIn label should remain honest.
5. Enable reduced motion and confirm tilt/entrance motion stops. Disable JavaScript and confirm content and section navigation remain readable and available.
6. Inspect the browser console and network panel for JavaScript errors and missing local assets. External site availability depends on those services.

These are repeatable checks, not a claim that every browser or external service has been tested.

The original redesign passed a dependency-free interaction test covering navigation, filters, dialogs and motion preferences. The light theme passed JavaScript and CSS syntax checks, palette-token and contrast calculations, source review of desktop/mobile navigation, filter, dialog, hover and focus states, and HTTP checks for all five site assets. Exact page copy and link targets were compared before and after; the script, server, package configuration and original photo remain byte-identical during the theme update. The photo retains its 400×400 dimensions and is served as `image/jpeg`. Browser integration was unavailable, and the native Chrome preview window remained minimized through the supported restore attempt. Actual rendering at 360px, 768px and 1440px, browser console inspection, and end-to-end pointer/keyboard checks therefore remain unverified. External link destinations are preserved; live availability could not be confirmed for every destination.

Only the `dist` directory needs to be served by a static host if you choose to publish later. This task does not deploy or register a website. Use an actual public production URL on a CV only after publishing and verifying it.

## Add the URL to your CV

Place a clickable `Portfolio: https://YOUR-ACTUAL-DOMAIN` in the contact header beside GitHub and LinkedIn. Keep the full readable URL in ATS-friendly versions. Export to PDF and check that the link remains clickable. A portfolio supplements your CV; keep the research GitHub and AquaSense showcase links in the research entry.

## Structure

`dist/index.html` contains all page content. `dist/style.css` controls the light emerald theme, fixed navigation offsets, responsive layout, visible focus, and reduced motion. `dist/script.js` controls LinkedIn configuration, the mobile menu, active navigation, credential filters, native accessible dialog, and progressive visual effects. `dist/favicon.svg` is the local vector icon. `dist/assets/saajith-profile.jpg` is the original profile photo; the website references this project copy. `server.cjs` serves local previews on loopback only, including JPEG assets. `package.json` retains the start/dev/check commands.
