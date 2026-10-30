---
name: Ravipati Pujitha, Frontend Developer
description: A portfolio hung as a gallery. Four painted rooms, one picture rail, white tombstone labels.
colors:
  wall-lobby: "#2747B8"
  wall-works: "#1E6B52"
  wall-archive: "#E8A317"
  wall-desk: "#B23A5F"
  paper: "#FFFFFF"
  ink: "#141414"
  ink-soft: "#4A4A4A"
  label-hairline: "#E2E2E2"
  error: "#9E1F3F"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.4rem, 9.6vw, 9rem)"
    fontWeight: 750
    lineHeight: 0.88
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 118"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 8.4vw, 6rem)"
    fontWeight: 750
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 108"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 108"
  wall-text:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.35
  label-title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.55
  code:
    fontFamily: "ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.875rem"
rounded:
  none: "0px"
spacing:
  rail: "2px"
  frame: "clamp(8px, 1vw, 14px)"
  stack: "18px"
  label-pad: "clamp(18px, 2vw, 26px)"
  gutter: "clamp(16px, 5vw, 80px)"
  room-head: "clamp(48px, 8vh, 96px)"
  room-gap: "clamp(80px, 12vw, 160px)"
  header: "88px"
  max-width: "1320px"
components:
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "14px 26px"
  label-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.label-pad}"
  frame:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "{spacing.frame}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 2px"
  rail-link:
    typography: "{typography.body}"
    padding: "14px 0"
  rail-header:
    height: "{spacing.header}"
---

# Design System: Ravipati Pujitha, Frontend Developer

## Overview

**Creative North Star: "The Exhibition"**

The site is a small gallery. Each route is a room with its own flat, full-strength painted wall: a cobalt Lobby, a viridian Works room, a marigold Archive, a rose Desk. A 2px picture rail runs across the top of every room. The navigation sits on that rail. Shipped apps hang from it on thin wires as framed works, each with a white tombstone label beside it. Room-scale headings are lettered straight onto the wall in wide, heavy Archivo, like wall vinyl. Everything that is not a work or a label stays on the wall as text, with no card behind it.

Density is calm and uneven on purpose. Each room has one dominant work, and labels hang at different heights and widths instead of sitting in an equal grid. Depth comes only from objects hanging off the wall (frames, labels, the paper button), and each casts a soft drop shadow below it. Motion is limited to one authored moment: a work lands on its wire and settles, and the wall colour fades when you change rooms.

**Key Characteristics:**
- One flat painted wall per room, swapped by `data-room` on `<html>`; there are no gradients and no texture.
- A 2px rail at the top and a second rail (the skirting) above the footer close every room.
- White paper objects (frame, label, button) are the only surfaces. Everything else is lettered on the wall.
- One grotesk family (Archivo, variable width and weight) handles every role, from 9rem vinyl to 0.875rem labels.
- Square corners everywhere.

## Colors

Four saturated wall colours, each used as a whole room, against plain paper and near-black ink.

### Primary
- **Cobalt Lobby** (wall-lobby): the Home wall and the `theme-color`. Paper text sits on it.
- **Viridian Works** (wall-works): the Projects wall. Paper text.
- **Marigold Archive** (wall-archive): the About wall. It is the one light wall, so it takes ink text. `--on-wall` switches to ink there, and the text-selection colours invert.
- **Rose Desk** (wall-desk): the Contact wall. Paper text. The form on this wall also uses it for the input caret and the focus outline.

### Neutral
- **Gallery Paper** (paper): label cards, picture frames, the Lobby button, form fields. It is also the text colour on the three dark walls.
- **Label Ink** (ink): text on labels and on the marigold wall, the submit button fill, input underlines, and the selection highlight.
- **Soft Ink** (ink-soft): secondary metadata on labels (year, medium, the "On view:" prefix, the optional-field note).
- **Label Hairline** (label-hairline): 1px dividers between rows inside a label card (contract stages, study rows).
- **Deep Rose Error** (error): the form error message only.

### Named Rules
**The One Wall Rule.** Each room is painted in exactly one wall colour, edge to edge. Never place two wall colours on the same screen, and never use a wall colour as an accent chip, button or border.

**The Ink-Never-Wall Rule.** Text never takes a wall colour. Text on a wall uses `--on-wall`: paper on cobalt, viridian and rose, ink on marigold. Text on paper uses ink. A new room must pair its wall with whichever of those two passes contrast.

## Typography

**Display Font:** Archivo variable (self-hosted latin subset, weight 400–800, width 62–125%), falling back to Helvetica Neue and Arial
**Body Font:** Archivo (same file)
**Label/Mono Font:** the system monospace stack, used only for code inside a study

**Character:** A single grotesk does all the work. Large type is widened (`font-stretch` 104–118%), set heavy at weight 750, and tracked tight, so it reads as vinyl lettering. Small type stays at normal width and lets weight do the ranking.

### Hierarchy
- **Display** (750, clamp 3.4–9rem, width 118%, line-height 0.88): the name in the Lobby only.
- **Headline** (750, clamp 3–6rem, width 108%, line-height 0.92): the room name at the top of each other room. Directory entries (clamp 2–4rem, width 112%), the footer line (clamp 1.75–3rem) and the Desk email (clamp 1.6–4.5rem, width 104%) are scaled variants of the same treatment.
- **Title** (750, clamp 1.75–2.5rem, width 108%, line-height 1): headings on wall panels. Each one sits on its own 2px rule.
- **Wall text** (400, clamp 1.25–1.75rem, line-height 1.35, max 34ch): the one-sentence intro under a room heading.
- **Label title** (700, 1.3rem, -0.01em): the name of a work on its tombstone label.
- **Body** (400, 1rem, line-height 1.55): label copy runs at 0.97rem with a 65ch maximum, and panel copy is capped at 42ch.
- **Label** (700, 0.875rem): form field labels. Metadata uses tabular numerals.

### Named Rules
**The Vinyl Rule.** Anything lettered onto the wall at room scale is Archivo 750, widened (104–118%), with negative tracking (-0.025 to -0.035em) and line-height at or below 1. Type inside a label card is never widened.

## Layout

The page sits in a container with a maximum width of 1320px and fluid gutters (clamp 16–80px). The rail header is 88px tall (64px under 640px), and its links sit on the bottom edge, against the rail. Rooms open with a heading block padded clamp(48px, 8vh, 96px). Major groups of works are separated by clamp(80px, 12vw, 160px).

Works are placed on asymmetric grids, never in equal cards. The Lobby splits 7fr / 5fr, with the name on the left and the hung work on the right. In the Lobby, the work's wire starts at the rail itself. Works pairs one 8fr feature with a 4fr label column, then a work pushed off-centre (columns 2–3 of a 2/5/5 grid), then small works at 300–380px. The Archive hangs wall panels on a 12-column grid with uneven spans and staggered top offsets (40, 64 and 96px). The Desk puts the email at room scale above a 760px form aligned right.

Responsive behaviour: everything collapses to one column at 900–960px, and the staggered offsets reset to zero. Under 640px the nav drops the name and the shortcut numbers and spreads its four links across the full width.

## Elevation & Depth

The wall is flat. Depth exists only where a paper object hangs off the wall, and the shadow sits low and soft, as if lit from above. There is no hard offset shadow, no glow, and no shadow on wall text.

### Shadow Vocabulary
- **Hang** (`box-shadow: 0 28px 36px -22px rgba(0,0,0,0.45)`): picture frames.
- **Label** (`box-shadow: 0 10px 18px -14px rgba(0,0,0,0.35)`): tombstone label cards. The paper button uses the same shape at 0.4 opacity.

### Named Rules
**The Hung Object Rule.** Only paper objects hanging on the wall (frame, label, paper button) cast shadows. Wall panels, rails and lettering stay flat.

## Shapes

Every corner is square (0px). The structural lines are the 2px rail at the top, the 2px skirting above the footer, the 2px rule under each panel heading, and the 2px top rule above the Desk email and the directory. On the wall, rows are divided by 1px lines in the wall's text colour (25% ink on marigold). Inside labels, rows use 1px label hairlines. The wire is a 1.5px non-scaling stroke drawn from the frame's two top corners up to a single hook.

## Components

### Buttons
Paper objects, square and confident.
- **Shape:** square (0px).
- **Paper (on a wall):** paper fill, ink text, 700 weight, 14px 22px padding, label shadow, with a trailing arrow icon.
- **Ink (on paper or in a form):** ink fill, paper text, 700 weight, 14px 26px padding.
- **Hover / Focus:** lifts 2px (0.25s, `cubic-bezier(0.16,1,0.3,1)`). The focus outline is 2px in the context's text colour, offset 3px. Disabled buttons drop to 0.6 opacity.

### Cards / Containers
- **Tombstone label:** paper background with ink text, padded clamp(18px, 2vw, 26px), square, with the label shadow. Stacked as title, then metadata (ink-soft: year, line break, medium), then a one-line description, then an "On view:" link in bold underline. A label sits beside a work, never on top of it.
- **Frame:** paper mount padded clamp(8px, 1vw, 14px) around a 16:10 screenshot cropped from the top, with the hang shadow.
- **Wall panel:** no card. A title on a 2px rule, with text lettered directly onto the wall in the wall's text colour.

### Inputs / Fields
- **Style:** paper fill, ink text, no radius. Single-line inputs have only a 2px ink bottom border. The textarea has a full 2px ink border and a minimum height of 140px.
- **Hover:** fill shifts to #F6F6F6.
- **Focus:** 2px rose outline (wall-desk), offset 2px, and a rose caret.
- **Error:** the status line under the form turns deep rose. The fields themselves do not change colour.

### Navigation
A row of four room links sitting on the picture rail, at 0.97rem weight 500, each preceded by its keyboard shortcut number (01–04, tabular, 0.75 opacity). Keys 1–4 switch rooms. State is shown by the line and never by colour: on hover a 4px hook drops from the rail under the link, and the active room gets a 10px hook plus 700 weight (0.35s, `cubic-bezier(0.16,1,0.3,1)`). On mobile the name and numbers are hidden and the links spread across the full width.

### Hung Work (signature)
A framed piece suspended on two wires that run from the frame's corners to one hook, with its tombstone label underneath or to the side. On entry the work drops 18px with a slight -0.6deg tilt, overshoots by 3px, and settles (0.9s, `cubic-bezier(0.16,1,0.3,1)`, transform-origin at the top centre). When there is no live app to show, the frame holds a study (a typed spec sheet in ink on paper) instead of a screenshot.

### Directory
On the wall, the room names are listed between a 2px rail and 1px rules: key number, then the room name at headline scale, then a one-line description, then an arrow. On hover the name is underlined at 2px and the arrow moves 6px to the right.

## Do's and Don'ts

### Do:
- **Do** give every new room one full-strength flat wall and set `--on-wall` to whichever of paper or ink passes contrast on it.
- **Do** hang shipped work as a frame on a wire with a white tombstone label (title, year and medium, description, "On view:" link).
- **Do** letter room-scale headings in Archivo 750, widened 104–118%, with tracking from -0.025 to -0.035em.
- **Do** show active and hover states with the rail line (a hook dropping 4px on hover, 10px when active) or underline thickness, never with a colour change.
- **Do** keep corners square and structural lines at 2px (rail) or 1px (row divider).
- **Do** keep motion to the hang settle and the 0.5s wall fade, and switch both off under `prefers-reduced-motion`.

### Don't:
- **Don't** set text in a wall colour, and don't use wall colours as accents on another room's wall.
- **Don't** lay works out as a row of equal cards. Each wall has one dominant work and staggered companions.
- **Don't** put wall text in cards. Panels are lettered straight onto the wall.
- **Don't** add shadows to anything that isn't a hung paper object, and don't use hard offset shadows.
- **Don't** round corners or add gradients or textures to walls.
