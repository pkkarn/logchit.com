---
trigger: always_on
---

These are techstack and project information

### 1. Tech Stack & Setup
- **Framework:** Next.js 14+ (App Router, TypeScript).
- **Styling:** Tailwind CSS.
- **Markdown:** Use `next-mdx-remote` or `gray-matter` for processing local MD/MDX files.
- **Typography:** Use `@next/font`. 'Space Grotesk' for headings (professional but modern) and 'Inter' for body text.
- **Code Highlighting:** Integrate `rehype-highlight` or `prismjs` so code blocks in the blog have proper syntax highlighting (crucial for a technical blog).
- **UI Components:** Use a modular component structure (Card, Hero, Navbar, Footer).

### 2. Design System & Color Palette (Theme: "Cyber-Minimalist")
The design must look expensive, stable, and high-tech.
- **Background:** Deep Slate (`#0F172A`) to Soft Black (`#020617`).
- **Surface/Cards:** Semi-transparent glassmorphism effect (White at 5% opacity with backdrop blur) or solid Dark Slate (`#1E293B`).
- **Primary Accent:** Electric Teal (`#2DD4BF`) for buttons, links, and active states.
- **Secondary Accent:** Soft Purple (`#A78BFA`) for subtle gradients or borders.
- **Text:** High contrast White (`#F8FAFC`) for headings, Slate Gray (`#94A3B8`) for metadata/subtext.
- **Visuals:** Add subtle glowing gradients in the background (using Tailwind absolute positioning) to give depth without clutter.

### 3. Core Pages & Layout
1.  **Homepage:**
    -   **Hero Section:** A bold H1 headline: "Building Scalable Digital Architectures." A subheadline explaining my role, and two CTA buttons: "Read Articles" (Primary) and "Contact Me" (Secondary/Outline).
    -   **Article Catalog:** A clean grid layout displaying blog posts. Each card must show: Title, Date, Estimated Read Time, and a list of tags (pill-shaped). Hover effects should slightly lift the card and glow the border.
2.  **Blog Post Page (`/blog/[slug]`):**
    -   A dedicated reading view with a maximum width (`prose-lg` from tailwind-typography).
    -   A sticky Table of Contents on the right side (hidden on mobile).
    -   High-quality typography for long-form reading.

---

Most Important instruction. whenever we ask you to generate new markdown and all make sure you

add markdown inside @posts_markdown folder and then add the entry inside @posts_markdown/index.ts and then also add thumbnails in @thumbnail and attach that... do one more thing to generate thumbnail use this image prompt where change the [SUBJECT] context depending topic, given image prompt...

```
[SUBJECT], cyber-minimalist style, deep slate background, glowing electric teal and soft violet accents, cinematic lighting, ultra-detailed, premium high-tech aesthetic, 8k resolution. in 16:9 ratio image size
`
