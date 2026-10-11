# design.md — Wedding Online Invitation Design & Implementation Specification

> **Live visual reference:** https://bigdate.events/wd-bfeij
>
> **Instruction to implementation agent:** Open the reference in a real browser and inspect it top-to-bottom before making design decisions. The accessible page text confirms the content order below, but it does not expose all visual details or the original source code. Do not invent exact colors, fonts, animation timing, or layout measurements; measure/observe these in the live page and record them before implementation.

## 1. Design direction

Build an elegant, intimate, wedding-specific digital invitation. The experience should feel like opening and reading a carefully designed invitation, not browsing a generic event dashboard.

Design priorities:
1. **Emotion first:** a strong couple-focused opening and restrained decorative details.
2. **Readable information:** event logistics should be clear even when viewed quickly on a phone.
3. **Photographic storytelling:** images should feel curated, not like an unstructured dump.
4. **Visual continuity:** typography, spacing, image treatment, dividers, and backgrounds should feel like one coherent invitation.
5. **Responsive integrity:** preserve the composition while reflowing for small screens.
6. **No invented ornamentation:** use the live reference and supplied assets as the authority.

## 2. Reference audit protocol (mandatory)

Before coding, inspect the reference URL at mobile and desktop breakpoints. Record:
- Initial viewport, whether a preloader/opening screen exists, and what happens after load.
- Hero composition, name treatment, date treatment, image crop, and background.
- Font families/weights, capitalization, letter spacing, line heights, and text hierarchy.
- Background colors/textures, ornamental motifs, borders, shadows, and separators.
- How the “When & Where” events are arranged, including event imagery and text alignment.
- Whether event rows/cards alternate, stack, or use a timeline.
- Gallery layout: grid, masonry, carousel, lightbox, hover/tap behavior, and image ordering.
- Closing section composition and image crop.
- Any background music, sound toggle, envelope/letter interaction, rope/string interaction, scroll reveal, parallax, or other animation. Only implement behaviors actually observed or separately specified by the project owner.
- Footer/provider CTA and whether it belongs in the requested standalone product.
- Responsive changes, sticky elements, touch interactions, loading placeholders, and browser console errors.

Capture screenshots for each section at approximately:
- Mobile: 375–390 CSS px wide.
- Tablet: around 768 CSS px wide.
- Desktop: around 1366–1440 CSS px wide.

If the live page differs from the structure described here, prioritize verified browser observations and update this document with a short “Observed deviations” note.

## 3. Page information architecture

Use this default order, matching the accessible content sequence:

1. Hero / couple introduction
2. Family details and save-the-date cue
3. “When & Where” event schedule
4. “Memories” photo gallery
5. “THANK YOU” closing section
6. Optional standalone footer (not the provider’s activation/payment prompt by default)

Do not add a navigation bar unless the reference or product owner requires one. A long invitation usually works best as a continuous, guided vertical experience.

## 4. Section specifications

### 4.1 Hero / couple introduction

**Content**
- Bride’s name
- Connector (`&`, “Weds”, or exact reference treatment)
- Groom’s name
- Wedding date
- Main couple photograph/artwork

**Composition**
- Treat this as the visual anchor of the page.
- Establish a clear typographic hierarchy: names first, date second, supporting decoration third.
- Preserve intentional negative space around names.
- Use a deliberate image focal point; avoid cropping faces at common screen widths.
- Use the exact reference’s alignment and background treatment after inspection.

**Behavior**
- If the reference has an opening reveal, reproduce its actual sequence and interaction only after testing it. Do not make the visitor wait through a long animation before reaching the invitation.
- Keep the page’s meaningful content in the document even if an animation is skipped or reduced.
- If a reveal has a “skip/open” control, it must work by keyboard and touch.
- Avoid autoplay sound. If audio is part of the observed design and explicitly desired, use an obvious play/pause toggle and respect browser autoplay restrictions.

**Responsive**
- Scale names fluidly without clipping.
- Stack or reposition image/text elements at narrow widths.
- Keep the main names and date visible without requiring a horizontal swipe.

### 4.2 Family details and save-the-date

**Content**
- Bride name and family line (reference example: “D/o Rajendran P & Vijayasree V”).
- Groom name and family line (reference example: “S/o Ravindran KS & Saritha Ravindran”).
- “SAVE THE DATE” cue.

**Design**
- Maintain equal visual weight between both people unless the reference deliberately uses another composition.
- Family lines should be smaller than the names but remain readable.
- Use spacing or a subtle divider to distinguish the two entries.
- Ensure long names wrap naturally.

**Behavior**
- A plain “SAVE THE DATE” label is not a button.
- If a calendar action is required, implement a real calendar link/file from verified event data.

### 4.3 “When & Where” event schedule

**Content per event**
- Event title
- Date
- Time
- Venue name
- Venue address
- Optional event image
- “View Map” link

**Reference examples**
- Groom’s Sangeeth
- Bride’s Mehandi
- Wedding
- Reception Party

**Design**
- Reproduce the reference’s actual event arrangement after browser inspection. Do not assume a card grid just because each event has an image.
- Keep event title, date/time, venue, and address grouped as a single readable unit.
- Event photography should have a consistent visual treatment and intentional crop.
- Differentiate event entries with spacing, alignment, subtle dividers, or the exact reference motif—not unnecessary decorative cards.
- The venue/address should be easy to scan and should not be visually subordinate to decorative details.

**Map action**
- Style “View Map” as a clear text link or button according to the reference.
- Add a small map/arrow icon only if it matches the established visual language.
- Verify each URL and use `target="_blank"` with appropriate `rel` values when opening a new tab.
- Never use a fake `href="#"`.

**Responsive**
- If the reference uses side-by-side image and copy, stack them at narrow widths while preserving reading order.
- Avoid tiny date labels or cramped addresses.
- Keep the map action large enough to tap.

### 4.4 “Memories” gallery

**Content**
- Section heading: “Memories”
- Ordered list of supplied photographs

**Design**
- Determine from the live reference whether the gallery is a grid, masonry composition, carousel, or another layout.
- Preserve the intended order and varying aspect ratios if the reference uses them deliberately.
- Avoid forcing portrait and landscape photographs into identical crops if doing so cuts off important subjects.
- Use consistent gaps and edges.
- Do not add captions unless they appear in the reference or are supplied as content.

**Interaction**
- Verify whether clicking/tapping an image opens a larger view.
- If a lightbox is present/required: show a close control, allow Escape to close, prevent background scrolling while open, and provide accessible names for controls.
- If no lightbox is present, do not add one merely for decoration.

**Performance**
- Use optimized image assets.
- Lazy-load images below the fold.
- Set intrinsic width/height or aspect ratio to reduce layout shifts.

### 4.5 Thank-you closing

**Content**
- Heading: “THANK YOU”
- Editable message. Reference example: “We can't wait to see all of our beloved friends and relatives at the wedding.”
- Optional closing photograph/artwork.

**Design**
- This section should feel like a deliberate emotional ending.
- Preserve adequate contrast between text and background.
- Keep the message visually connected to the closing image without covering important faces.
- Match the reference’s alignment, spacing, and image treatment after visual inspection.

### 4.6 Footer / provider content

The reference extraction includes a final provider-specific area promoting invitation activation, payment security, and chat support. For a custom standalone invitation, exclude this area by default. Do not copy provider marketing, payment messaging, or branding into the new product unless requested and authorized.

If a custom footer is needed, keep it quiet and consistent with the invitation.

## 5. Design tokens — establish after inspecting the live page

Do not guess the original values. Measure/identify them from the live page, then centralize the final values as CSS variables.

```css
:root {
  /* Replace placeholders after reference inspection */
  --color-page-bg: /* observed value */;
  --color-surface: /* observed value */;
  --color-text: /* observed value */;
  --color-muted: /* observed value */;
  --color-accent: /* observed value */;
  --color-divider: /* observed value */;

  --font-display: /* observed display font */;
  --font-body: /* observed body font */;

  --text-hero: /* responsive display size */;
  --text-section: /* section heading size */;
  --text-body: /* body size */;
  --text-caption: /* minimum readable supporting size */;

  --content-max: 72rem; /* adjust after measuring */
  --page-gutter: clamp(1rem, 4vw, 3rem);
  --section-space: clamp(3rem, 8vw, 7rem);
  --radius-image: /* observed value */;
}
```

Use `clamp()` for responsive type and spacing where appropriate. Do not create a large token system for a small page; keep only values that genuinely recur.

## 6. Typography rules

- Identify the actual font family if it is publicly loaded and available for legitimate use; otherwise choose a close, licensed alternative.
- Use no more typefaces than necessary.
- Use display typography for names and section headings; prioritize legibility for venue/address details.
- Match observed capitalization and letter spacing.
- Avoid applying all-caps to long body copy.
- Ensure long names and addresses wrap without overlapping adjacent content.
- Avoid layout built around a single fixed line break unless the reference’s art direction requires it and responsive alternatives are provided.

## 7. Image and asset strategy

Create a clear asset map, for example:

```text
public/
  assets/
    couple-hero.webp
    event-sangeeth.webp
    event-mehandi.webp
    event-wedding.webp
    event-reception.webp
    memory-01.webp
    memory-02.webp
    closing-photo.webp
```

These names are illustrative. Reuse the project’s existing `assets`/`assests` directory and actual filenames if already present; do not rename files blindly.

Rules:
- Inspect the existing repository and asset directory before creating or replacing files.
- Never assume an asset exists just because it appears in this example.
- Do not hotlink reference-site photos as a production dependency unless the owner has permission and the URLs are stable.
- Prefer locally supplied/authorized images.
- Use `object-fit: cover` only when the crop is intentional; use `contain` where the whole image/artwork must remain visible.
- Set `object-position` for important faces/focal points.
- Provide alt text based on actual image content, not guessed descriptions.
- Use optimized WebP/AVIF where supported while preserving source quality.

## 8. Layout and responsive behavior

Use a mobile-first CSS approach. Suggested test breakpoints (not a claim about the original site):
- Small mobile: 320–374 px
- Standard mobile: 375–430 px
- Tablet: 600–900 px
- Desktop: 901–1279 px
- Wide desktop: 1280 px and above

Rules:
- Avoid fixed heights for text-heavy sections.
- Avoid absolute positioning for essential content.
- Use a centered content wrapper with controlled maximum width.
- Use CSS Grid/Flexbox for responsive structure.
- Preserve a logical DOM reading order even if desktop visuals use alternating layouts.
- Do not hide essential event details on mobile.
- Test the gallery at both portrait and landscape aspect ratios.
- Check for horizontal overflow and safe-area padding on mobile devices.

## 9. Motion and interaction principles

First verify what motion exists on the live reference. Possible patterns such as a letter/envelope reveal, scroll-triggered fade, parallax, animated decorative element, or gallery lightbox are **not confirmed by the extracted text** and must not be treated as requirements unless observed or requested.

When motion is used:
- Keep it short and purposeful.
- Avoid animating large blocks in a way that delays reading.
- Respect `prefers-reduced-motion: reduce`.
- Avoid scroll-jacking.
- Do not use motion as the only way to reveal critical information.
- Avoid repeated distracting loops.
- Ensure interaction is usable with touch, mouse, and keyboard.

## 10. Suggested component architecture

Adapt to the existing repository; do not replace its framework without a reason.

```text
InvitationPage
├── HeroSection
├── FamilyDetails
├── EventSchedule
│   └── EventItem (repeated from event data)
├── MemoriesGallery
│   └── MemoryImage (repeated from gallery data)
├── ThankYouSection
└── OptionalFooter
```

Recommended separation:
- `data/invitation.js` or equivalent: couple, family, event, gallery, and closing content.
- `components/`: reusable page sections.
- `styles/`: global tokens and section styles, or co-located component styles.
- `public/assets/`: authorized local media.

Keep content separate from presentation. Avoid duplicating the same event markup for each event.

## 11. Example semantic structure

This is a structural example, not recovered source code from BigDate:

```html
<main>
  <section aria-labelledby="couple-heading" class="hero">
    <h1 id="couple-heading">
      <span class="person-one">Bride name</span>
      <span aria-hidden="true" class="couple-connector">&amp;</span>
      <span class="person-two">Groom name</span>
    </h1>
    <p class="wedding-date">Wedding date</p>
  </section>

  <section aria-label="Family details" class="family-details">
    <!-- Bride and groom family details -->
  </section>

  <section aria-labelledby="events-heading" class="events">
    <h2 id="events-heading">When &amp; Where</h2>
    <!-- Render event items from data -->
  </section>

  <section aria-labelledby="memories-heading" class="memories">
    <h2 id="memories-heading">Memories</h2>
    <!-- Render supplied gallery images -->
  </section>

  <section aria-labelledby="thanks-heading" class="thank-you">
    <h2 id="thanks-heading">THANK YOU</h2>
    <p>Editable closing message</p>
  </section>
</main>
```

Use framework-native components if the repository uses React/Vue/etc.; do not paste this static HTML over an existing app.

## 12. Quality assurance checklist

### Visual comparison
- [ ] Compare each section with a browser screenshot of the reference.
- [ ] Confirm typography, color, image crops, section spacing, and decorative details against observed evidence.
- [ ] Confirm the page has the same overall content order unless a deliberate project change is documented.
- [ ] Verify there is no accidental duplication of headings, images, or footers.

### Interaction
- [ ] Test the hero/opening interaction if one exists.
- [ ] Test map links for every event.
- [ ] Test gallery interactions if present.
- [ ] Confirm no inert buttons or placeholder links remain.
- [ ] Confirm any audio control starts/stops audio and has a meaningful accessible label.

### Responsive/accessibility
- [ ] Test mobile, tablet, and desktop widths.
- [ ] Test keyboard tab order and visible focus.
- [ ] Check color contrast and image alt text.
- [ ] Test reduced-motion mode.
- [ ] Confirm no horizontal scrolling or clipped text.

### Technical
- [ ] Check browser console and network panel.
- [ ] Check image loading and layout shift.
- [ ] Check external links and safe new-tab behavior.
- [ ] Verify all text and event data are editable without restructuring the page.

## 13. Important implementation honesty note

This document is a design specification informed by the reference’s accessible content and the project’s intended goals. It is **not** a dump of BigDate’s original source code. The original HTML/CSS/JavaScript was not directly available through the page-text inspection used to prepare this document. The coding agent must inspect the live browser presentation and the local project repository, then replace all “verify/observe” notes with measured, verified details before claiming a pixel-accurate reproduction.
