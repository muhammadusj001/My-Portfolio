# Muhammadu Saajith — Personal Portfolio

A portable, dependency-free portfolio built with HTML, CSS, and JavaScript. The design uses a light theme with white and pale green surfaces, emerald accents, layered CSS artwork, and responsive cards. The contact section uses deep emerald with white text. It needs no framework, build step, account, database, analytics, external fonts, or third-party asset service. This is local source; no deployment was performed.

## Preview

Open `dist/index.html` directly, or install Node.js and run `npm start` or `npm run dev` from this folder. Open http://127.0.0.1:4173. Stop the server with Ctrl+C. No `npm install` or build step is required. `npm run check` checks JavaScript syntax.

## Vercel settings — prepared, not deployed

The inspected project is a buildless static HTML/CSS/JavaScript website. Its public entry point is `dist/index.html`; `dist` also contains the stylesheet, script, favicon, profile photo and redacted document assets. The root `vercel.json` declares:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "",
  "outputDirectory": "dist"
}
```

For a future Vercel import of `muhammadusj001/My-Portfolio`, use these exact settings:

| Setting | Value |
| --- | --- |
| Repository | `https://github.com/muhammadusj001/My-Portfolio` |
| Production branch | `main` |
| Root Directory | Repository root (`./`), where `vercel.json` and `package.json` are located |
| Framework Preset | **Other** (`framework: null`) |
| Build Command | Enable Override and leave the value empty (`buildCommand: ""`) |
| Output Directory | `dist` |
| Install Command | Leave the default; this project has no package dependencies and needs no custom install command |
| Environment variables | None required |

Keep the Root Directory at the repository root; the Output Directory selects `dist`. `server.cjs`, `npm start` and `npm run dev` are for local preview only. Do not use them as a Build Command or configure `server.cjs` as a Vercel server. Navigation uses page fragments, so no catch-all rewrite is required. Only `dist` is intended to be served publicly.

These settings follow Vercel's [static-site build instructions](https://vercel.com/docs/builds/configure-a-build#skip-build-step) and [configuration schema](https://openapi.vercel.sh/vercel.json). This preparation does not create a Vercel project, run a deployment or change repository visibility.

The personal LinkedIn URL is still unconfigured (`LINKEDIN_URL` in `dist/script.js`). Its existing service-home link and visible pending label remain unchanged; replace it only with a confirmed personal profile URL.

Deployment-readiness checks passed for JSON configuration, JavaScript/server syntax, exact-case asset paths, all fragment/document targets, stylesheet/SVG structure, public-file privacy review and scripted menu/navigation/filter/dialog/motion behavior. A local HTTP smoke test served all seven public files with the correct content types and exact bytes; repository-level server/configuration files were not publicly served. The GitHub profile and research repository were reachable through GitHub's API, and the research showcase returned HTTP 200. No website source, content, styling or asset changes were needed.

Live browser verification could not run because the computer-use service timed out during availability checks. Rendered desktop/mobile geometry, real pointer/keyboard behavior and the browser console therefore remain unverified. No Vercel build or deployment was run.

## Design and behavior

- The light palette is centralized in `:root` custom properties in `dist/style.css`, including derived green shadow and overlay tokens. The standalone favicon has matching local palette tokens. White and pale green surfaces use dark text; the deep emerald contact section uses white text and focus indicators. The profile photograph retains its original colors.
- The top navigation remains fixed while scrolling. Section offsets keep headings visible below it, and the active section is highlighted.
- The mobile menu supports keyboard navigation, closes after choosing a section, and closes with Escape. Visible focus styles identify keyboard targets.
- Credential filters retain their pressed state, and document details open in an accessible native dialog. The internship experience letter has a privacy-safe preview and redacted PDF download under Credentials → Experience, linked from the internship entry. Direct PDF links work without JavaScript; the ESOFT diploma and transcript have public copies; the other two cards remain clear placeholders.
- The hero uses the original profile photo at `dist/assets/saajith-profile.jpg` in a CSS portrait frame, approximately 340px wide on desktop and 240px on mobile. Its proportions are preserved, with intrinsic dimensions and eager/high-priority loading. Decorative depth is separate from the photograph. AquaSense pool artwork uses lightweight CSS; the pool is a concept illustration, not a screenshot or a live research demo.
- Entrance effects and subtle pointer tilt enhance supported desktop devices. Reduced-motion preferences disable unnecessary motion; touch interaction does not depend on hover.
- Core content and section links remain available without JavaScript. Filtering, active-section tracking, and document dialogs require JavaScript.

## Content and source status

The portfolio preserves the existing project content and the supplied facts: Muhammadu Saajith is an entry-level Software Engineer in Sri Lanka, completed a six-month internship at Gamage Recruiters, develops software independently through CodeForge Technology, and led the SLIIT final-year AquaSense research group. The SLIIT final semester is complete and results are pending; the portfolio does not claim that a degree has been awarded. Dates, degree title, metrics, client projects, additional education and courses are intentionally omitted until confirmed.

Existing skills and AquaSense research descriptions are retained. The research repository is https://github.com/muhammadusj001/R26-IT-143, the showcase is https://aquasense-r26-it-143.vercel.app/, and the personal GitHub is https://github.com/muhammadusj001. No operating AI demo is implied. All pool artwork is a CSS concept illustration.

The Gamage Recruiters internship experience letter is included only as a permanently redacted public PDF and preview under `dist/assets/documents/`. The supplied original remains outside this project. Its card identifies it as a privacy-safe copy, without claiming independent issuer verification. The SLIIT and CodeForge cards remain explicitly pending placeholders. The courses placeholder is replaced with the ESOFT diploma and its supporting academic transcript. No CV download or unredacted original document is included.

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

## ESOFT diploma documents

The two supplied PDFs document one qualification: Assured Diploma in Information Technology (DiTEC), ESOFT METRO CAMPUS. The certificate states completion in March 2024 and issue on 30 March 2024. Its second page contains explanatory notes, including the statement that this is not a Pearson qualification. The separate academic transcript shows award on 27 March 2024 and issue on 22 April 2024. It supports the same diploma and is not counted as another certification. No independent issuer verification or degree equivalence is claimed.

The certificate prints MOHAMED HISHAM MOHAMED SAJITH; the transcript prints Mohamed Hisham Mohamed Sajith. Both differ from the portfolio name Muhammadu Saajith. These printed names are preserved and the discrepancy is disclosed beside the credential cards.

Public files: `dist/assets/documents/esoft-ditec-certificate-redacted.pdf` (2 pages), `esoft-ditec-transcript-redacted.pdf` (1 page), and corresponding `-preview.jpg` thumbnails. Originals remain outside the repository. Student IDs, certificate/registration identifiers, barcode, signatures, and unnecessary footer contact details are permanently removed. The public PDFs are rebuilt solely from sanitized page pixels, with no original scan resources, OCR/text layer, source metadata, attachments, annotations, fields, or revision history. Names, institution, qualification, dates, module results, and explanatory notes are preserved. The copies are labeled as privacy-safe copies, not substitutes for the originals.

The diploma appears once in Education, with certificate and transcript cards under Certificates. Existing internship and placeholder dialogs remain unchanged. The Education documentation link reveals the certificate even after another filter is selected.

Validation for the ESOFT update: all three source and public pages were visually read/reviewed; independent PDF parsing confirms image-only sanitized page content with no metadata, fields, or attachments. Exact-case asset and fragment checks, local HTTP byte comparisons, MIME types, download filenames, and new-tab security attributes passed. JavaScript syntax and whitespace checks passed. Chrome showed both cards at desktop and 400px mobile widths; the certificate opened in a new tab as a two-page PDF. All category filters returned the expected document counts: All 5, Education 1, Experience 2, Certificates 2. The transcript is a supporting document rather than a second qualification.

## School examination results

The newly supplied merged PDFs are Department of Examinations, Sri Lanka results schedules, not ESOFT certificates. Each has two pages: results plus supporting notes. They document G.C.E. (Advanced Level) Examination 2021 (2022), dated 18 January 2023, and G.C.E. (O/L) Examination, December 2017 — New Syllabus, dated 25 September 2018. The latter's reverse-side school endorsement is dated 16 September 2022; that is not substituted for the printed document date. No final award, independent issuer verification, degree equivalence, or inferred issue date is claimed. The A/L notes identify the schedule as primary pass/fail evidence subject to confirmation by the Commissioner General of Examinations.

Both print MUHAMMADU HISHAM MUHAMMADU SAJITH, differing from portfolio name Muhammadu Saajith. Printed names and result details remain unchanged; the discrepancy is disclosed alongside the cards.

Public copies and first-page thumbnails use the `gce-advanced-level-results` and `gce-ordinary-level-results` filenames under `dist/assets/documents/`. Both cards use the Education category. The corresponding Education entry links to each card and reveals it if another filter was selected. Existing ESOFT documents, internship, placeholders, and dialogs remain present.

Originals remain outside the repository. Public copies permanently remove the NIC, residential address, candidate/centre identifiers, unnecessary school and sheet identifiers, and the handwritten school endorsement/signature. Reverse-page pale mirrored private data is removed from exported pixels while retaining printed explanatory text. No QR codes, barcodes, or issuer verification URLs were found on these pages. Each sanitized PDF is rebuilt with one sanitized image per page, with no source image resources, OCR/text layer, metadata, attachments, annotations, fields, or revision history. Names, examination titles, results, printed dates, and issuer attribution are preserved.

Validation: every original and sanitized page was visually inspected, including mirrored private data on scan backs and the front-side mirrored signature. Independent PDF parsing verified the sanitized image-only structure and absent text/metadata/attachments/fields. Exact-case local assets, fragment targets, HTTP byte comparisons, MIME types, download filenames, and new-tab security attributes passed. JavaScript syntax and whitespace checks passed. Chrome showed both new cards at desktop and 400px mobile widths; the A/L view link opened the sanitized PDF in a new tab. Filter counts are All 7, Education 3, Experience 2, Certificates 2. Original files, temporary inspection data, and pending CodeForge work are excluded from this update.
