# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated, with a stated reason: Lucas said the site "vai crescer muito, teremos muitas coisas para acrescentar e mudar". Chosen: Next.js (App Router, static export friendly) + TypeScript + Tailwind CSS 4, deployed on Vercel from GitHub `vertionstack-art/RB-Sheeby`. All editable content (projects, contact, texts) lives in one content file so it can grow without touching layout code. The project folder path contains a space, so Tailwind needs an explicit `@source` line.

## Users

Primary: marketing and product people at real-estate developers (incorporadoras) in Rio de Janeiro who are preparing a launch and need a sales stand and/or a decorated model apartment built on a fixed launch date. Secondary: interior-architecture offices that designed a decorated apartment and need a contractor to execute it faithfully.

## Product Purpose

Marketing site for RB Sheeny Construções e Engenharia. It must make a visitor understand, in seconds, that RB Sheeny builds only two things (stands de venda and apartamentos decorados), show delivered work, and route them to WhatsApp or a quote form. Success = a qualified contact from an incorporadora or an architecture office.

## Positioning

A niche contractor: it does not build buildings, it builds what sells the building. Only stands and decorated apartments, since 1988, on launch deadlines with showroom-level finish, executing interior-architecture projects to the detail.

## Operating Context

Launch calendars are fixed; the stand must be ready on launch day and the decorado must convince whoever walks in. Architecture offices hand over a drawn project and expect faithful execution. First contact happens via WhatsApp in Brazil.

## Capabilities and Constraints

- Two services only: Stands de venda; Apartamentos decorados.
- Service area: Rio de Janeiro, RJ.
- Contact: WhatsApp / phone +55 21 96019-4636. LinkedIn: https://www.linkedin.com/company/rb-sheeny-constru%C3%A7%C3%B5es/about/
- Legal: RB Sheeny Construções Ltda · CNPJ 45.858.356/0001-07.
- Forms have no backend yet; submitting composes a WhatsApp message (open decision: e-mail/CRM destination).
- Must stay light on old Android phones (Lucas tests on a Galaxy J7 Prime): no framer-motion, no large blur, CSS-first motion.

## Brand Commitments

- Logo files: `public/brand/rb-logo-branca.png` (white letters), `public/brand/rb-logo-preta.png` (black letters), `public/brand/rb-sheeny-logo.png`. Wordmark "RB SHEENY" in heavy black sans with a solid wine/burgundy-red block, subtitle "CONSTRUÇÕES E ENGENHARIA".
- Brand red comes from the logo block (burgundy). Language: Brazilian Portuguese.
- Credit line: "Site desenvolvido por Vertion Stack" linking to vertionstack.com (no .br).

## Evidence on Hand

Confirmed by Lucas (2026-09-30) as confirmed by RB Sheeny:
- Founded 1988; 30+ years in the segment.
- Delivered projects: Stand Cyrela Oka; Decorado Cyrela Mudrá (interiores Carol Miluzzi); Stand Cyrela Concept; Decorado Patrimar Oceana Golf (interiores Fernanda Marques); Decorado Cyrela Concept; Stand Novolar Recreio; Decorado Cyrela On Botafogo.
- Developers worked with: Cyrela, MRV, Gafisa, Cury, Patrimar, Novolar.
- Interior offices executed: Fernanda Marques, Carol Miluzzi.

Absent, never fabricate: real project photos (current imagery is illustrative stock and must be labeled "Imagens ilustrativas"), number of projects delivered, testimonials, awards, lead times in days, prices, business hours, address.

## Product Principles

1. Specialization is the argument: say "only stands and decorados" everywhere, never dilute into general construction.
2. Prove with named work, not adjectives.
3. Every page has one obvious way to reach WhatsApp.
4. Nothing invented: unconfirmed facts stay out or are marked pending.
5. Content grows in one file; layout never needs editing to add a project.

## Accessibility & Inclusion

WCAG AA contrast, keyboard-operable filters/accordion/tabs, prefers-reduced-motion respected, usable on low-end Android.
