---
version: alpha
name: "Frequency-Based Extraction"
description: "Design tokens extracted from CSSOM frequency analysis without LLM interpretation."
colors:
  primary: "#e5e5e5"
  text: "#000000"
  text-2: "#0a0a0a"
  text-3: "#262626"
  text-4: "#404040"
  text-5: "#292827"
  text-6: "#a1a1a1"
  text-7: "#737373"
  local-accent: "#ffffff"
  local-accent-2: "#23d57c"
typography:
  type-1:
    fontFamily: "__miletusGrotesk_bce060"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  type-2:
    fontFamily: "__miletusGrotesk_bce060"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "20px"
  type-3:
    fontFamily: "__ttMono_57d2d2"
    fontSize: "9px"
    fontWeight: "400"
    lineHeight: "10.8px"
  type-4:
    fontFamily: "__miletusGrotesk_bce060"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "22px"
  type-5:
    fontFamily: "__ttMono_57d2d2"
    fontSize: "11px"
    fontWeight: "400"
    lineHeight: "13.2px"
    letterSpacing: "0.44px"
rounded:
  radius-1: "2px"
  radius-2: "4px"
  radius-3: "999px"
  radius-4: "8px"
  radius-5: "3px"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "6px"
  space-4: "24px"
  space-5: "4px"
  space-6: "12px"
  space-7: "32px"
  space-8: "5px"
  space-9: "20px"
  space-10: "10px"
---

## Overview

Design tokens extracted from CSSOM frequency analysis without LLM interpretation.

**Signature traits:**
- Extracted
- Frequency-based
- Single-theme palette profile
- Visual system emphasizes consistency across tokens
- Color usage follows semantic role assignments

## Colors

The palette uses 10 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

### Primary Brand
- **Primary** (#e5e5e5): Frequency rank #1 (1124 occurrences); token importance brandCandidate: action-centric usage with area share 99.5%. Role: primary. {authored: rgb(229, 229, 229), space: rgb}

### Text Scale
- **Text** (#000000): Frequency rank #2 (745 occurrences); token importance textCandidate: repeated text-role usage (745 hits). Role: text. {authored: rgb(0, 0, 0), space: rgb}
- **Text-2** (#0a0a0a): Frequency rank #3 (205 occurrences); token importance textCandidate: repeated text-role usage (205 hits). Role: text. {authored: rgb(10, 10, 10), space: rgb, alpha: 0.03}
- **Text-3** (#262626): Frequency rank #4 (102 occurrences); token importance textCandidate: repeated text-role usage (102 hits). Role: text. {authored: rgb(38, 38, 38), space: rgb}
- **Text-4** (#404040): Frequency rank #5 (59 occurrences); token importance textCandidate: repeated text-role usage (59 hits). Role: text. {authored: rgb(64, 64, 64), space: rgb}
- **Text-5** (#292827): Frequency rank #7 (42 occurrences); token importance textCandidate: repeated text-role usage (42 hits). Role: text. {authored: rgb(41, 40, 39), space: rgb}
- **Text-6** (#a1a1a1): Frequency rank #8 (39 occurrences); token importance textCandidate: repeated text-role usage (39 hits). Role: text. {authored: rgb(161, 161, 161), space: rgb}
- **Text-7** (#737373): Frequency rank #9 (34 occurrences); token importance textCandidate: repeated text-role usage (34 hits). Role: text. {authored: rgb(115, 115, 115), space: rgb}

### Interactive
- **Local-accent** (#ffffff): Frequency rank #6 (57 occurrences); token importance localAccent: localized usage with limited global footprint. Role: border. {authored: rgb(255, 255, 255), space: rgb, alpha: 0.07}
- **Local-accent-2** (#23d57c): Frequency rank #10 (30 occurrences); token importance localAccent: localized usage with limited global footprint. Role: border. {authored: rgb(35, 213, 124), space: rgb}

## Typography

Typography uses __miletusGrotesk_bce060, __ttMono_57d2d2 across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes __miletusGrotesk_bce060 and __ttMono_57d2d2 for visual contrast. Sizes range from 9px to 16px.

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Frequency rank #1 | __miletusGrotesk_bce060 | 16px | 400 | 24px | normal | __miletusGrotesk_bce060, __miletusGrotesk_Fallback_bce060, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif | Extracted token |
| Frequency rank #2 | __miletusGrotesk_bce060 | 14px | 400 | 20px | normal | __miletusGrotesk_bce060, __miletusGrotesk_Fallback_bce060 | Extracted token |
| Frequency rank #3 | __ttMono_57d2d2 | 9px | 400 | 10.8px | normal | __ttMono_57d2d2, __ttMono_Fallback_57d2d2 | Extracted token |
| Frequency rank #4 | __miletusGrotesk_bce060 | 16px | 400 | 22px | normal | __miletusGrotesk_bce060, __miletusGrotesk_Fallback_bce060 | Extracted token |
| Frequency rank #5 | __ttMono_57d2d2 | 11px | 400 | 13.2px | 0.44px | __ttMono_57d2d2, __ttMono_Fallback_57d2d2 | Extracted token |

## Layout

Layout rhythm is inferred from spacing tokens and responsive breakpoint evidence.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| space-5 | 4px | 4 | Extracted spacing token |
| space-8 | 5px | 5 | Extracted spacing token |
| space-3 | 6px | 6 | Extracted spacing token |
| space-1 | 8px | 8 | Extracted spacing token |
| space-10 | 10px | 10 | Extracted spacing token |
| space-6 | 12px | 12 | Extracted spacing token |
| space-2 | 16px | 16 | Extracted spacing token |
| space-9 | 20px | 20 | Extracted spacing token |
| space-4 | 24px | 24 | Extracted spacing token |
| space-7 | 32px | 32 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | backdrop-filter | blur(20px) |
| Light | outline-style | solid |
| Light | outline-color | rgb(0, 0, 0) ; rgb(38, 38, 38) ; rgba(0, 0, 0, 0) |
| Light | outline-width | 3px ; 2px |
| Light | outline-offset | 0px ; 2px |
| Light | transform | matrix(1, 0, 0, 1, 0, 0) ; matrix(1.2, 0, 0, 1.2, 0, 0) ; matrix(-1, 0, 0, 1, 0, 0) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| radius-1 | 2px | 2 | Hairline corner |
| radius-5 | 3px | 3 | Subtle corner |
| radius-2 | 4px | 4 | Subtle corner |
| radius-4 | 8px | 8 | Control corner |
| radius-3 | 999px | 999 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| radius-1 | 2px | px |
| radius-2 | 4px | px |
| radius-3 | 999px | px |
| radius-4 | 8px | px |
| radius-5 | 3px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails tie generation choices back to validated tokens, component patterns, and evidence-backed hierarchy.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 470px | screen and (max-width: 470px) |
| Mobile | <= 600px | (max-width: 600px) |
| Mobile | <= 660px | screen and (max-width: 660px) |
| Mobile | <= 700px | screen and (max-width: 700px) |
| Mobile | <= 767px | (max-width: 767px) |
| Breakpoint 6 | <= 800px | screen and (max-width: 800px) |
| Breakpoint 7 | <= 1000px | screen and (max-width: 1000px) |
| Breakpoint 8 | <= 1024px | screen and (max-width: 1024px) |
| Breakpoint 9 | <= 1030px | screen and (max-width: 1030px) |
| Breakpoint 10 | <= 1125px | screen and (max-width: 1125px) |
| Breakpoint 11 | <= 1160px | screen and (max-width: 1160px) |
| Breakpoint 12 | <= 1200px | screen and (max-width: 1200px) |
| Breakpoint 13 | <= 1240px | screen and (max-width: 1240px) |
| Breakpoint 14 | <= 1440px | screen and (max-width: 1440px) |
| Mobile | >= 390px | (min-width: 390px) |
| Mobile | >= 640px | (min-width: 640px) |
| Tablet | >= 768px | (min-width: 768px) |
| Desktop | >= 1024px | (min-width: 1024px) |
| Desktop | >= 1030px | screen and (min-width: 1030px) |
| Desktop | >= 1125px | screen and (min-width: 1125px) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
