# Mobile Product Studio portfolio

Static HTML, CSS, and JavaScript; no dependencies or build step added. The existing CNAME and all nine section anchors are retained. The canonical and social URLs now match `chiranjeevipandey.com.np` in CNAME.

## What changed

- Mobile Product Studio direction: porcelain, charcoal, and cobalt; large product compositions; responsive layouts; and light/dark themes.
- Clear Android/KMP positioning, selected work before services, concise work history, grouped capabilities, and direct email contact.
- ProperPDF featured with official iOS screenshots and verified Android/iOS store links. No unverified implementation stack or performance claims added.
- Sajilo Patro reach attributed to the store listing, not to the developer's contribution. Existing client quotes retained verbatim; stale marketplace ratings and unsupported headline metrics removed.
- All original client/project/profile links retained except the On the Go listing, which returned HTTP 404. Its case study and original URL below are preserved.
- Local WebP screenshots, explicit image dimensions, lazy loading below the fold, system fonts, no icon-font dependency, and a local social-sharing card and favicon.
- Semantic sections, one H1, skip link, visible focus, native disclosures, reduced-motion support, keyboard menu controls, and resilient theme storage.

## Validation

Passed JavaScript syntax (`node --check script.js`), whitespace (`git diff --check`), source checks for duplicate IDs, fragment destinations, original section anchors, local assets, image attributes, structured-data JSON, heading hierarchy, and email links. This repository has no package manifest, build command, or configured linter.

Browser bootstrap and documented discovery returned no available browsers. Desktop/mobile visual inspection, keyboard interaction, theme persistence, console checks, and email-client launching could not be completed. These remain required manual checks; source-level responsive review is not a substitute for a browser test.

Suggested manual checks: 360px, 390px, 768px, and 1440px widths; no horizontal overflow; menu open/close and Escape; Tab focus order; theme toggle/reload; reduced-motion preference; all project disclosures; direct `#education` and `#skills` links; mailto and profile actions.

## Information to provide

- A current public resume PDF or URL. None exists in this project.
- Specific languages, UI frameworks, and architectural decisions for ProperPDF. The user has confirmed fully native Android and iOS implementations.
- Measured outcomes and your precise involvement/timeframe for each project, if you want deeper case studies. No revenue, latency, or performance figures have been invented.
- A replacement public link for On the Go, and a public Zizi link if one is available.
- Optional direct review URLs for the existing client testimonials. Quotes are retained from the previous portfolio; marketplace ratings were not reasserted.

## Sources and assets

Verified September 18, 2026:

- ProperPDF Android: https://play.google.com/store/apps/details?id=io.github.thegbguy.pdfmate
- ProperPDF iOS: https://apps.apple.com/us/app/properpdf-pdf-editor-offline/id6760956540
- Official screenshot source: Apple's public lookup API, https://itunes.apple.com/lookup?id=6760956540&country=us (01-merge.png and 08-home.png). Downloaded screenshots retained in `images/properpdf`; optimized WebP copies used on the page.
- Sajilo Patro: https://play.google.com/store/apps/details?id=com.nayapatro (100K+ total downloads).
- Enigma listing resolved through web lookup: https://play.google.com/store/apps/details?id=com.enigmartc.enigma
- On the Go original URL (HTTP 404): https://play.google.com/store/apps/details?id=onthego.automobilerepair.autogarage.garageservices.workshop
- Employment, education, project responsibilities, client quotes, and profile/contact links: pre-existing `index.html`. User-supplied positioning and ProperPDF ownership incorporated.

The website has been changed locally; no production deployment was performed.

## Mobile interactions retained

- Reused the real phone frames embedded in the official ProperPDF screenshots. CSS crops away the surrounding store artwork; the original images remain unchanged. The hero pairs two real screens, while the case study uses a swipeable gallery with feature captions.
- Added native horizontal scroll snapping, previous/next buttons, labelled segmented screen selectors, Arrow/Home/End keyboard controls, selected states, and a polite slide counter. There is no autoplay. Without JavaScript, the full gallery remains horizontally scrollable.
- Introduced shared rounded surfaces, compact chips, subtle elevation, and pressed feedback. Reduced-motion preferences disable spring transitions and smooth gallery movement.
- Added a mobile-only Work/About/Contact navigation bar with safe-area support. Page clearance follows its measured height, including enlarged text, and anchor scrolling reserves space above it.
- Kept all three featured case studies visible. An Android filter would duplicate All because all three support Android; a Multiplatform filter would isolate only ProperPDF. Project filtering is intentionally deferred until the selection is broader. The gallery uses segmented controls where they provide a useful choice.
- No dependencies or new image downloads added in this refinement.

Validation: JavaScript syntax, diff whitespace, HTML anchor/asset/control references, and dependency-free mocked interaction checks passed. Interaction checks covered gallery buttons, swipe-state synchronization, keyboard navigation, bounds, resize, reduced motion, theme with blocked storage, Escape to close the menu, and bottom-navigation focus. Browser discovery again returned no available browsers; these checks do not establish visual/layout correctness. Please also check swipe behavior, bottom-bar clearance in portrait/landscape and larger text, and light/dark appearance on a real mobile browser.

## Complete theme overhaul

The accepted Mobile Product Studio direction is now implemented throughout the site. The former layered stylesheet was replaced with one consolidated design system.

- New compact `cp.` identity, product-led hero, and headline: “From first idea to everyday use.”
- Large ProperPDF composition, dark featured case study, and alternating client-project layouts.
- Three focused service columns, editorial experience sidebar, compact chronology, and grouped engineering capabilities.
- More personal About copy and a full-width cobalt contact section.
- Matching local social-sharing image and favicon; social image visually inspected.
- Preserved screenshot gallery, keyboard controls, theme behavior, reduced-motion support, bottom navigation, public anchors, and external links.

Final checks passed: HTML nesting; image dimensions and file references; original section anchors; gallery control references; structured data; JavaScript syntax; diff whitespace; mocked interaction checks. Nine primary foreground/background combinations meet at least 4.5:1 contrast (including normal text, muted text, dark theme, featured project, gallery, contact, and selected gallery control).

No browser connection was available during this overhaul. Rendered mobile/desktop layouts and real-browser interaction checks remain unverified. No production deployment performed.

## Store galleries and Entervu — September 19, 2026

- Added all screenshots returned by the current English/US ProperPDF listings: 8 Google Play, 8 iPhone, and 8 iPad screenshots. ProperPDF now has a device selector; each set keeps the store order.
- Added Entervu as a selected project with all 8 Google Play screenshots and its public store link. Updated the Spiralogics experience entry to identify Entervu explicitly. The maintenance responsibility comes from the user's confirmation; no feature ownership or quantified outcomes are attributed.
- Full store artwork is shown without cropping, including tablet variants. Each image opens a larger local WebP in a new tab. Images use explicit dimensions, lazy loading, and local optimized assets; the existing hero composition is unchanged.
- Gallery controls now work independently for multiple projects, with per-device counts, selected states, keyboard navigation, reduced-motion behavior, and responsive sizing. All images remain scrollable when JavaScript is unavailable.
- Original CDN URLs, device groups, store order, local paths, and dimensions are recorded in `images/store-sources.json`. These cover the fetched listings; localized store variants are not included.
- Sources: https://play.google.com/store/apps/details?id=io.github.thegbguy.pdfmate and https://itunes.apple.com/lookup?id=6760956540&country=us for ProperPDF; https://play.google.com/store/apps/details?id=com.entervu.entervu&hl=en-US for Entervu.
- Validated all 32 downloaded images visually in contact sheets; verified HTML nesting, gallery controls, image paths/dimensions, public anchors, JavaScript syntax, and diff whitespace. Mocked interaction checks pass for both galleries, all device groups, swipe synchronization, keyboard boundaries, resizing, measured navigation clearance, and reduced motion. No browser was available for rendered layout testing.

## Dimitra store links

Added the user-provided Google Play links to Connected Farmer and Connected Cacao in the Dimitra experience entry. Both listing names verified September 19, 2026. Existing responsibility descriptions preserved.

## Entervu screenshot selection

At the user’s request, Entervu now uses the same static, staggered two-image container as Sajilo Patro, with a subtle lavender background. Only store screenshots 1 and 4 are retained. The Entervu carousel controls, other six image files, and their source-manifest entries were removed. ProperPDF’s galleries and the Entervu contribution/store link are preserved. This selection does not establish copyright permission.

## Employment update

User confirmed that employment at Spiralogics International ended at the end of June 2026. The experience entry now reads August 2025–June 2026 and uses past tense. The ongoing freelance entry is listed first. Hero availability, About copy, and social descriptions now state that Chiranjeevi is freelancing and seeking a full-time engineering role.

## Confirmed native products

The user confirmed that ProperPDF is fully native on both Android and iOS, and ProperImage is a native iOS app. ProperPDF’s published copy and platform tags now make this explicit. Neither product should be presented as a KMP/CMP case study. Specific languages and UI frameworks have not been confirmed. ProperImage is now included after ProperPDF with native iOS positioning and official store screenshots.

## Gallery label removal fix

Fixed gallery initialization after the optional platform label was removed from the HTML: JavaScript now checks for the element before updating it. The existing arrow controls and device selectors can initialize again. Removed the visible “Swipe to explore” hint and “Official store screenshots” heading; retained feature captions and accessible labels. Centered pagination beneath the gallery.

## ProperImage added before commit

Added ProperImage immediately after ProperPDF, with its confirmed native iOS positioning, iPhone/iPad support, on-device image workflows, and App Store link. The gallery includes all 6 iPhone and 6 iPad screenshots returned by Apple’s US lookup endpoint on September 19, 2026, retaining full artwork and reusing the accessible gallery controls. Device selectors and arrow buttons have no redundant visible instruction/source hints. Specific languages or frameworks have not been assumed, and no “no tracking” claim is made.

Removed two unused newly downloaded originals (`images/properpdf/home.jpg` and `images/properpdf/merge.jpg`); the referenced optimized WebP versions remain. Original pre-existing image files are preserved.

ProperImage source: https://apps.apple.com/us/app/properimage-heic-to-jpg-pdf/id6778331646 and https://itunes.apple.com/lookup?id=6778331646&country=us. CDN sources and image dimensions are recorded in `images/store-sources.json`.
