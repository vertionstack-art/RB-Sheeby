---
name: RB Sheeny
description: Stands de venda e apartamentos decorados para lançamentos no Rio de Janeiro, desde 1988.
colors:
  ink: "#16120f"
  ink-soft: "#2b2522"
  paper: "#ffffff"
  stone: "#f2f0ed"
  line: "#e2ddd8"
  muted: "#625b58"
  red: "#a12032"
  red-deep: "#83192a"
  red-tint: "#f6e7e9"
  blush: "#f0c9ce"
  whats: "#25d366"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 118"
  display-hero:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 118"
  accent:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 4.4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 3.3vw, 2.625rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  numeral:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 4rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "\"tnum\""
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
  tag:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  gutter: "16px"
  gutter-sm: "32px"
  grid-gap: "32px"
  section: "96px"
  section-md: "128px"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.ink-soft}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.stone}"
  button-compact:
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  field:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "52px"
  field-focus:
    backgroundColor: "{colors.paper}"
  field-invalid:
    backgroundColor: "{colors.red-tint}"
  tag-project-type:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  label-illustrative:
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
---

# Design System: RB Sheeny

## Overview

**Creative North Star: "The Showroom Window"**

RB Sheeny builds the first place a buyer sees a building, so the site behaves like a vitrine: a white, well-lit room where photographs of finished interiors do all the texturing and the type does the selling. The world is the category standard for a premium niche contractor, executed with editorial craft: a full-bleed interior photograph, a white filter card overlapping its edge, a strip of developer names, facts set large, a featured-then-grid portfolio, a dark services band, an accordion of reasons, and one fully red contact block.

Density is generous. Sections breathe on 96 to 128px of vertical space, content sits in a 1320px container on a 12-column grid, and every divider is a 1px hairline. Colour is almost entirely ink on white and stone; the logo's burgundy red is the only chroma and is spent in a few places: the primary WhatsApp action, the italic accent word on light ground, small square markers, and the drenched contact section.

The site must stay light on low-end Android (the reference device is a Galaxy J7 Prime). All motion is CSS: no framer-motion or other animation runtime, no large blur, and `backdrop-filter` only from the `sm:` breakpoint up.

**Key Characteristics:**
- White ground, stone secondary surface, warm near-black ink, a single burgundy accent.
- Wide, heavy Archivo display caps echoing the logo wordmark, with one italic Instrument Serif phrase per major heading.
- Square corners on photographs, cards, inputs and tabs; pill shapes only for buttons, chips and circular icon wells.
- Photography is the only texture; every stock image carries a visible "Imagem ilustrativa" label.
- CSS-only motion: staggered hero rise, slow photo settle, marquee, hover zoom, View Transition on the portfolio filter, all reduced-motion safe.

## Colors

A warm monochrome of ink, stone and hairline, with one wine-red accent pulled from the logo block.

### Primary
- **Logo Burgundy** (`red`): primary WhatsApp buttons, the floating WhatsApp pill, the italic accent word on light sections, the "+" in facts, square marquee markers, error text, focus outline, text selection, and the full background of the contact section.
- **Deep Burgundy** (`red-deep`): hover state of every red button.
- **Burgundy Wash** (`red-tint`): background of an invalid field. Nowhere else.
- **Blush** (`blush`): the italic accent word when it sits on ink or on the hero photograph, where the full red would lose contrast.

### Neutral
- **Warm Ink** (`ink`): body text, the services band, footer, selected chips, active form tab, secondary dark buttons, theme-color.
- **Ink Soft** (`ink-soft`): hover of ink buttons and the placeholder ground behind photos on dark.
- **Paper** (`paper`): page ground, the hero filter card, the contact form panel, project-type tags.
- **Stone** (`stone`): field background, image placeholders on light, empty-state panel, hover of light buttons and tabs.
- **Hairline** (`line`): every 1px border and divider, chip outlines, the header's bottom rule once it turns solid.
- **Muted Umber** (`muted`): secondary text, captions, labels, fact descriptions, the illustrative-imagery notice.

### Tertiary
- **WhatsApp Green** (`whats`): only the WhatsApp glyph inside light or ink buttons. Never a surface or text colour.

### Named Rules
**The One Chroma Rule.** Burgundy is the only chromatic colour in the interface. Green exists only as the WhatsApp mark; everything else is ink, stone, line or white.

**The Drenched Block Rule.** Red appears as a full surface exactly once per page: the contact section. Everywhere else it is an accent at button or word scale.

## Typography

**Display Font:** Archivo variable, width axis on (with ui-sans-serif, system-ui)
**Body Font:** Archivo at normal width (`wdth` 100)
**Accent Font:** Instrument Serif Italic 400 (with ui-serif, Georgia)

**Character:** The display face is stretched wide (`wdth` 118) and set extra-bold with tight tracking and sub-1 leading, so headlines read like the RB SHEENY wordmark. A single italic serif phrase interrupts each major heading, softening the construction voice into showroom language.

### Hierarchy
- **Display Hero** (800, clamp 3rem to 6rem, 0.92): the one hero headline, max 11ch, over the photograph.
- **Display** (800, clamp 2.5rem to 4.75rem, 0.92): section headings for portfolio, services and contact (contact runs larger, up to 5.25rem).
- **Headline** (600, clamp 2.125rem to 3.5rem, 1.02): section headings that sit beside other content, such as the reasons column; service titles use the same weight at clamp 2rem to 3rem.
- **Statement** (400, clamp 1.625rem to 2.625rem, 1.2): the about-section positioning paragraph, with its second sentence in muted.
- **Numeral** (300, clamp 2.75rem to 4rem, tabular figures): confirmed facts only (founding year, years, specialities), each over a muted label.
- **Title** (600, 1.25rem, up to 1.75rem on featured cards): project names and accordion questions (500 there).
- **Body** (400, 1.0625rem, 1.625 line height): running copy, capped at 46 to 56ch.
- **Label** (500, 0.9375rem): nav links, chips, filter labels, counts and captions.
- **Tag** (600, 0.75rem, 0.06em, uppercase): the project-type tag on a portfolio photograph, and nowhere else.

### Named Rules
**The One Italic Phrase Rule.** Each major heading carries exactly one italic serif phrase, usually the verb or the closing words ("vende", "entregues", "bem feitas", "começa aqui."). Red on light ground, blush on dark ground, white on the red block. Never two in one heading, never in body copy.

**The Wordmark Width Rule.** Display width (`wdth` 118, weight 800) is reserved for headlines and the developer marquee (`wdth` 112, 700). Body, labels and titles stay at normal width.

## Layout

A centred container of 1320px (1240px for the hero filter card) with gutters of 16px on phones and 32px from `sm:` (640px). Layout changes happen at `md:` (768px), where sections switch to a 12-column grid with a 32px gap; no larger breakpoints are used. Sections are spaced 96px vertically on phones and 128px from `md:`.

Recurring compositions: about splits 4/8 (photo, then statement and facts); reasons split 5/7 (heading plus a photo that stretches to match, then the accordion); contact splits 6/6. The portfolio grid opens with a 7/5 featured row of equal heights, continues in thirds, and resolves the last row into halves or a full-width card so the grid never ends with a gap. The second service card is offset down 96px on desktop for rhythm.

The hero fills the viewport (at least 680px on phones; on desktop it subtracts 64px so the overlapping filter card fits in the first screen) and anchors its content to the bottom-left over a top-and-bottom darkening gradient.

## Elevation & Depth

The system is flat. Depth comes from photography, the white-on-photo overlap of the filter card, and tonal bands (white, stone, ink, red). Shadows exist only on the two elements that float over other content, and both are soft and diffuse.

### Shadow Vocabulary
- **Card Float** (`box-shadow: 0 24px 60px -20px rgba(22,18,15,0.35)`): the hero filter card where it overlaps the photograph.
- **Red Float** (`box-shadow: 0 12px 30px -8px rgba(131,25,42,0.55)`): the floating WhatsApp button.
- **Header Rule** (`box-shadow: 0 1px 0 var(--color-line)`): a 1px hairline under the header once it turns solid; a rule, not elevation.

### Named Rules
**The Only-What-Floats Rule.** A shadow is allowed only on an element that physically overlaps other content. Cards in flow, photos and panels stay flat.

## Shapes

Two shapes and nothing between them. Photographs, cards, panels, inputs, selects, tabs and tags are square (0 radius). Buttons, chips and the circular icon wells (accordion plus, project WhatsApp mark, menu toggle) are full pills (999px). Borders are always 1px, in hairline on light ground and white at 15 to 50% opacity on dark. Small square markers (8px, red) separate names in the marquee.

## Components

### Buttons
Confident pills with a small press.
- **Shape:** full pill (999px), 52px tall, 24px side padding, 600 weight at 0.9375rem, icon gap 10px.
- **Primary:** Logo Burgundy with white text; the WhatsApp action on light or photo ground.
- **Ink:** Warm Ink with white text; secondary actions on white ("Ver N projetos", form submit, header CTA once solid). The form submit hovers to red.
- **Light:** white with ink text and a green WhatsApp glyph; used on the photo (header) and on the red contact block.
- **Outline:** 1px white at 50% on photo ("Ver portfólio"), 1px ink on light (empty-state reset).
- **Compact:** 44px tall, 16px padding, 0.875rem; header CTA only.
- **Hover / Focus / Active:** colour shifts over 200ms; press scales to 0.97 over 160ms on the out-expo curve; focus is a 2px red outline at 3px offset.

### Chips
- **Style:** pill, 44px tall, 1px hairline border, transparent ground, ink label at 500.
- **State:** `aria-pressed` true fills ink with white text; unpressed hovers the border to ink on fine pointers only.

### Cards / Containers
- **Corner Style:** square.
- **Background:** white on photo (filter card), white on red (contact form), stone for the empty state.
- **Shadow Strategy:** flat, except the hero filter card (Card Float).
- **Border:** none; internal divisions use hairlines.
- **Internal Padding:** 20px on phones, 28 to 36px from `sm:`.

### Inputs / Fields
- **Style:** square, 52px tall, stone ground, 1px hairline border, 16px text (prevents iOS zoom), red caret. Selects drop the native arrow for an inline 14px chevron. Textareas start at 120px.
- **Focus:** border turns ink and ground turns white; no glow.
- **Error:** border red, ground Burgundy Wash, message in red 500 below the field.

### Tabs (contact form)
A two-segment square switch inside a 1px hairline frame with 4px inset; the active segment fills ink with white text, the inactive hovers to stone.

### Navigation
Fixed header, 64px on phones and 80px from `sm:`. Over the hero it is transparent with the white logo, white links and a light WhatsApp pill; past the hero it turns white with the black logo, an ink pill and a hairline rule (95% white with backdrop blur only from `sm:`). Links are 0.9375rem at 500, 80% opacity, full opacity and underline on hover. On phones a menu button opens a white list of 56px rows divided by hairlines.

### Project Card (signature)
A square-cornered photograph with a white uppercase project-type tag top-left and an "Imagem ilustrativa" label bottom-right; below it, the project name, the developer and interior office in muted, and a 40px circular WhatsApp well that fills red on hover. On fine pointers the photo zooms to 1.04 over 900ms and a red pill "Conversar sobre este projeto" rises in. The whole card is one link to a pre-filled WhatsApp message. When the filter changes, cards slide to their new place through a View Transition (420ms).

### Accordion (reasons)
Exclusive `<details>` rows between hairlines, 72px minimum summary, a 40px circular red plus that rotates 45deg when open; the panel opens with animated block-size where supported.

### Illustrative Label
A small square badge (11px, 500, white at 90% on ink at 70%) on every stock photograph. Required by the brand's no-fabrication commitment; never removed while imagery is stock.

### Developer Marquee
Developer names in wide bold Archivo (clamp 1.75rem to 2.625rem) separated by 8px red squares, between two hairlines, edge-faded with a mask, 38s linear loop, paused on hover, static and wrapped under reduced motion.

## Do's and Don'ts

### Do:
- **Do** keep motion CSS-only: keyframes, transitions and the View Transition API. Every animation has a `prefers-reduced-motion` fallback.
- **Do** keep `backdrop-filter` behind the `sm:` breakpoint and keep blur radii small; the site must stay smooth on a Galaxy J7 Prime.
- **Do** keep the `@source "../**/*.{ts,tsx}";` line at the top of `globals.css`. The project path contains a space ("RB Sheeny"), and without it Tailwind 4 silently drops the custom classes.
- **Do** put exactly one italic serif phrase in each major heading, in red on light, blush on dark, white on red.
- **Do** label every stock photograph "Imagem ilustrativa".
- **Do** use 1px hairlines for every division and square corners for every photo, panel and input.
- **Do** gate hover effects behind `(hover: hover) and (pointer: fine)`.

### Don't:
- **Don't** add framer-motion or any JavaScript animation runtime, and don't use large blurs.
- **Don't** introduce a second chromatic colour; WhatsApp green stays a glyph.
- **Don't** round photographs, cards or inputs, and don't square off buttons or chips.
- **Don't** add shadows to in-flow cards or photos; only elements that overlap content may cast one.
- **Don't** set body copy, labels or titles in the wide display width.
- **Don't** add a small uppercase label above headings; the only uppercase tracked text in the system is the project-type tag on a photograph.
