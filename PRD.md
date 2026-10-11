# PRD.md — Wedding Online Invitation Website

> **Purpose:** Product requirements for rebuilding a polished, responsive wedding invitation website based on the reference at https://bigdate.events/wd-bfeij.
>
> **Reference identity:** “Arjun Weds Divya” (the sample content visible in the reference). Treat names, dates, family details, venue information, photos, and event structure as replaceable content—not hard-coded product assumptions.
>
> **Reference-review note:** The live reference URL must be opened in a real browser by the implementation agent. Scroll from top to bottom, test all controls, inspect desktop and mobile layouts, and record any animation/audio/loading behavior before implementation. This document captures the structure and visible content that could be confirmed from the page’s accessible text. The original website’s source code was not directly retrieved, so no claim is made that its original HTML/CSS/JavaScript has been recovered.

## 1. Product overview

Create a digital wedding invitation that feels like a personal, elegant, editorial invitation rather than a generic event page. It should introduce the couple, present family information, communicate event schedules and venues, let guests open map directions, display a curated photo gallery, and close with a warm thank-you message.

The experience must be mobile-first because guests are likely to open the invitation from a messaging app. It should also look intentional on desktop and tablet.

### Product goals

1. Deliver an emotionally engaging first impression.
2. Make the couple and wedding details immediately understandable.
3. Make each event’s date, time, venue, address, and map action easy to find.
4. Showcase the couple’s photographs without overwhelming the invitation content.
5. Keep the experience fast, accessible, and usable on small screens.
6. Keep event text and media easy to replace for a different couple.
7. Avoid dead links, broken images, clipped content, and layout shifts.

### Non-goals unless explicitly requested

- Guest login or account creation.
- RSVP collection or guest management.
- Payment/activation flows from the reference provider.
- An admin dashboard or database-backed CMS.
- Copying BigDate branding, proprietary source code, or assets without permission.

## 2. Reference website

- **Reference URL:** https://bigdate.events/wd-bfeij
- **Visible title:** Arjun Weds Divya
- **Observed page sequence:** couple/hero introduction → family details and save-the-date cue → “When & Where” event list → “Memories” gallery → “THANK YOU” closing message → provider invitation-activation/promotion area.
- **Important:** The reference’s visible event dates are in 2025 and are historical. They are example content only. Replace them with the actual wedding data supplied for the new project.

The accessible page content lists:
- Divya — daughter of Rajendran P & Vijayasree V.
- Arjun — son of Ravindran KS & Saritha Ravindran.
- Groom’s Sangeeth — 22/10/2025, 4:00 PM onwards, Sreenilayam Karath House, Ottapalam.
- Bride’s Mehandi — 22/10/2025, 4:00 PM onwards, Puthenpurayil House, West of BHS Sringapuram, Kodungallur.
- Wedding — 24/10/2025, 10:00 AM onwards, MD Convention Centre, Thekkumkara, Thrissur.
- Reception Party — 25/10/2025, 11:00 AM–3:00 PM, Palliyalil Auditorium, Kulappully, Palakkad.
- Map actions are presented as “View Map”.
- A Memories section contains multiple photographs.
- The closing copy reads: “We can't wait to see all of our beloved friends and relatives at the wedding.”
- The provider page also displays an invitation activation message. That is likely a platform/monetization element, not part of a standalone invitation; do not reproduce it unless specifically required.

## 3. Target users and user stories

### Primary user: invited guest
- As a guest, I want to identify the couple immediately.
- As a guest, I want to understand the relationship/family details.
- As a guest, I want to find the event date, start time, venue, and address quickly.
- As a guest, I want to open directions in Google Maps with one tap.
- As a guest, I want to view the couple’s photographs in a pleasant gallery.
- As a guest, I want to read a closing message and understand the invitation is complete.

### Secondary user: invitation owner/developer
- As the owner, I want all text, dates, venue data, map URLs, and photos stored in a clear configuration/data file.
- As the owner, I want to change the event count without rewriting the page layout.
- As the owner, I want to preview the invitation at mobile, tablet, and desktop widths.
- As the owner, I want broken assets and links to be easy to detect.

## 4. Functional requirements

### FR-01 — Hero / couple introduction
- Present both names prominently, with a visual relationship marker such as “&” or “Weds”.
- Display the wedding date in a clearly readable format.
- Use the supplied hero/couple photograph or artwork.
- Preserve the image’s intended crop and focal point across responsive sizes.
- If the live reference includes an opening interaction (such as a letter/envelope reveal), inspect and reproduce its behavior only after verifying it in the browser. Do not invent a transition that conflicts with the reference.
- Any intro animation must have a reduced-motion fallback and must not trap or delay access to event information.

### FR-02 — Family details
- Display bride and groom names as separate, clearly identified entries.
- Display parent/family lines beneath the correct person.
- Support longer names and family text without overflow.
- Allow this section to be omitted or rearranged if the target invitation’s content differs.

### FR-03 — Save-the-date cue
- Include the visible “SAVE THE DATE” cue or equivalent.
- If an actual calendar-download action is added, it must use correct event details and a valid calendar file/link. Do not render a fake/inert button.

### FR-04 — Event schedule (“When & Where”)
- Render events from structured data rather than duplicated hard-coded markup.
- Each event supports: title, date, time label, venue name, address, optional image, and map URL.
- Reference event types include Groom’s Sangeeth, Bride’s Mehandi, Wedding, and Reception Party.
- Support a variable number of events.
- Event cards/rows must remain readable on mobile and must not clip the event image, title, or address.
- If the target design combines wedding and reception into one event/venue block, implement that grouping only when confirmed by the supplied project requirements; otherwise keep event data separate.
- Dates and times must be formatted consistently and must not be guessed.

### FR-05 — Map navigation
- Each event with a known venue has a “View Map” action.
- Open the correct destination in a new tab/window or the expected map application.
- Use a real, verified Google Maps URL or a properly encoded destination query.
- Provide a safe fallback when no map URL is configured: hide the action or generate a destination query from the actual venue/address.
- Use accessible link text, such as “View map for Wedding at [venue]”, where appropriate.

### FR-06 — Memories gallery
- Display the supplied couple/memory images in the order defined by the content data.
- Preserve image aspect ratios or use intentional, consistent crops.
- Avoid stretched images.
- If the reference uses a masonry, grid, slider, or lightbox, verify the exact pattern in the browser and reproduce it where feasible.
- If a lightbox is implemented, support close button, Escape key, previous/next controls where provided, and accessible image descriptions.
- Images must have useful alt text when informative; decorative images should use empty alt text.

### FR-07 — Thank-you closing
- Include a visually distinct “THANK YOU” heading.
- Include a warm closing sentence, editable in configuration.
- Include the closing image/artwork if the reference/project assets contain one.
- Ensure the closing image does not obscure the text or crop out important people.

### FR-08 — Provider/activation content
- The reference’s final content contains a platform activation prompt, payment reassurance, and chat/support prompt.
- For a standalone wedding invitation, exclude these commercial/platform controls by default.
- Include them only if the product owner explicitly wants a provider footer/CTA and provides legitimate links and copy.

### FR-09 — Responsive behavior
- Support narrow mobile widths (starting around 320 CSS px), common phones, tablets, laptops, and wide desktop displays.
- Avoid horizontal scrolling.
- Reflow event details and gallery layout naturally.
- Ensure tap targets are comfortably sized and separated.
- Test both portrait and landscape orientations.

### FR-10 — Loading, failures, and resilience
- Prevent missing image URLs from collapsing the layout; use a tasteful fallback.
- Use image dimensions/aspect ratios or reserved containers to reduce layout shift.
- Lazy-load below-the-fold gallery images where suitable.
- Do not lazy-load the critical hero image if doing so makes the initial view visibly late.
- If a map link is absent, do not show a dead link.
- No console errors, broken asset paths, or non-functional visible controls.

## 5. Non-functional requirements

### Performance
- Optimize images and avoid shipping unnecessary large assets.
- Prefer responsive image sizes and modern formats where supported.
- Avoid large animation libraries for a small number of effects unless justified.
- Keep the initial render lightweight and make below-the-fold content progressively available.

### Accessibility
- Use semantic headings in a logical order.
- All interactive elements must be keyboard accessible.
- Provide visible focus styles.
- Maintain sufficient text/background contrast.
- Respect `prefers-reduced-motion`.
- Do not use color alone to communicate event distinctions.
- Give informative images meaningful alt text.
- Make external map links understandable to screen-reader users.

### Compatibility
- Test current Chromium-based browsers, Firefox, Safari where available, and Android/iOS mobile browsers.
- The invitation must remain usable if autoplay audio is blocked. Do not force autoplay sound.

### Maintainability
- Keep event content and asset references in a single clearly named data/config module.
- Use reusable components for event items and gallery items.
- Keep styling organized by section/component or in a coherent stylesheet.
- Avoid fragile absolute positioning for primary content.

## 6. Suggested content model

```js
export const invitation = {
  couple: {
    personOneName: "Bride name",
    personTwoName: "Groom name",
    weddingDateLabel: "Wedding date",
    heroImage: "/assets/couple-hero.webp",
    family: {
      bride: "D/o ...",
      groom: "S/o ..."
    }
  },
  events: [
    {
      id: "wedding",
      title: "Wedding",
      dateLabel: "24 October 2026",
      timeLabel: "10:00 AM onwards",
      venue: "Venue name",
      address: "Full address",
      image: "/assets/wedding-venue.webp",
      mapUrl: "https://www.google.com/maps/..."
    }
  ],
  memories: [
    { src: "/assets/memory-01.webp", alt: "The couple outdoors" }
  ],
  closing: {
    heading: "THANK YOU",
    message: "We can't wait to celebrate with you."
  }
};
```

Use the real project’s naming conventions if they already exist. The sample is illustrative and must not overwrite existing project data.

## 7. Acceptance criteria

- [ ] The implementation agent opens the reference URL in a browser and records its visual behavior before coding.
- [ ] The page has a clear couple introduction and wedding date.
- [ ] Family details are displayed correctly and do not overflow.
- [ ] Every configured event shows the correct title, date, time, venue, and address.
- [ ] Every displayed map action opens the correct destination.
- [ ] The Memories gallery renders all configured photos without distortion or broken paths.
- [ ] The closing thank-you section is present.
- [ ] The provider activation CTA is excluded unless explicitly requested.
- [ ] Layout is usable at 320 px width and at desktop sizes.
- [ ] No horizontal overflow, clipped essential text, broken links, or broken images.
- [ ] Keyboard focus is visible; controls are keyboard-operable.
- [ ] Reduced-motion preferences are respected.
- [ ] The browser console has no significant errors.
- [ ] The README or handoff notes explain how to replace couple details, event data, images, and map URLs.

## 8. Verification checklist for the AI coding agent

Before implementation:
1. Open https://bigdate.events/wd-bfeij in a real browser.
2. Inspect the initial load and wait for all animations/media to finish.
3. Scroll in small increments from the top to the bottom.
4. Capture screenshots of every section at mobile and desktop widths.
5. Test all visible links, buttons, audio controls, gallery interactions, and opening/reveal interactions if present.
6. Inspect image crops, typography, backgrounds, separators, spacing, decorative assets, and section transitions.
7. Inspect the browser’s DOM/CSS/network requests only for observation and asset identification; do not assume the original source is available or copy proprietary code.
8. Compare observations with this PRD and record discrepancies before coding.

After implementation:
1. Compare screenshots section by section.
2. Test every map URL and every interactive element.
3. Verify responsive behavior and keyboard navigation.
4. Check console/network failures and optimize oversized images.
5. Confirm the final result follows the existing repository’s framework and conventions.
