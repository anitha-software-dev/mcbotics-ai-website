Create a fully responsive React website for "McBoticsAI" using the reference design:
https://marvelous-fact-977714.framer.app/

IMPORTANT:
- Match layout and structure exactly like reference
- Use SAME content provided (do not rewrite)
- Apply premium modern SaaS UI
- Ensure full mobile responsiveness
- Use React + Tailwind CSS (or SCSS if already used)
- Maintain clean folder structure
- Optimize performance and assets

====================================================
PROJECT SETUP
====================================================
- Framework: React (Vite)
- Styling: Tailwind CSS (preferred) OR SCSS
- Assets:
  - Store images/videos in /public/images
  - Convert SVGs → PNG/WebP
- Folder structure:

/src
  /components
  /sections
  /pages
  /assets
/public/images

====================================================
THEME COLORS (MATCH REFERENCE)
====================================================
- Background: #0B0F19
- Card: #0F172A
- Primary: #3B82F6
- Secondary: #22D3EE
- Text: #FFFFFF
- Muted: #9CA3AF

Gradient:
linear-gradient(90deg, #3B82F6, #22D3EE)

Glow:
box-shadow: 0 0 20px rgba(59,130,246,0.4)

====================================================
GLOBAL UI RULES
====================================================
- Sentence case only
- Min font size: 14px
- Consistent spacing (section padding 80px)
- Buttons:
  - Same size everywhere
  - No mix of pill/square
- Cards:
  - border-radius: 12px
  - hover: scale(1.03)
- Use AOS animations:
  - fade-up, zoom-in

====================================================
HEADER NAVBAR
====================================================
- Left: Logo
- Center: Services, Process, Blog, Contact
- Sticky navbar
- Glass effect:
  backdrop-blur + transparent bg

====================================================
HERO SECTION
====================================================
- Fullscreen section
- Background: animated video (from /public/images)

Center content:
- Logo icon
- Subtitle: NEW GEN AI AUTOMATION PARTNER
- Title:
  Launch Limitless. Scale Smart.
  Rule the Future With McBotics AI.
- Content:
  Your ideas, our execution - powered by AI and innovation.
- Small text:
  Your Smart Partner for Technology & Business Growth
- Button:
  Book your Free Consultancy

UI:
- Center aligned
- Gradient glow text
- Overlay for readability

====================================================
VISION TO EXECUTION
====================================================
- Keep content same
- Center aligned paragraph
- Max width container
- Subtle fade animation

====================================================
BENEFITS SECTION
====================================================
Title: Why McBotics AI?

- 3 cards in one row
Each card:
- Image (convert from SVG → PNG/WebP)
- Title + content

UI:
- Equal height cards
- Hover lift effect
- Responsive:
  - Mobile → 1 column
  - Tablet → 2 column

====================================================
SERVICES SECTION
====================================================
Title: Service Portfolio

- 6 cards (3 per row, 2 rows)

Each card:
- Icon
- Title
- Content

UI:
- Grid layout
- Hover animation
- Icon highlight

====================================================
PROCESS SECTION
====================================================
Title:
Our Proven Vision-to-Scale Process

- 3 steps (01, 02, 03)

UI:
- Horizontal timeline (desktop)
- Vertical stack (mobile)

Each step:
- Big number
- Title
- Description

====================================================
FAQ SECTION
====================================================
Title:
Answers for Founders & Teams

Layout:
LEFT:
- Still Have Questions?
- Button: Ask a question

RIGHT:
- FAQ accordion (7 questions)

UI:
- Expand/collapse animation
- Clean spacing

====================================================
COMPARISON SECTION
====================================================
Title:
Why McBotics AI Beats the Rest

Layout:
- Two columns:
  LEFT: McBoticsAI
  RIGHT: Others

Content:
- Use same comparison points

UI:
- Table or card comparison
- Highlight McBotics column
- Add check icons

====================================================
CONTACT / CTA SECTION
====================================================
Title:
Ready to Build, Scale & Innovate? Let’s Build Together

Content:
Schedule a Call and Begin Automating

Button:
Book your Free Consultancy

Email:
support@mcbotics.com

UI:
- Center aligned
- Gradient background

====================================================
FOOTER
====================================================
- Left: Logo
- Right:
  Services, Process, Blog, Privacy, Terms

Bottom:
© 2025 McBotics AI. All rights reserved.

IMPORTANT:
- Remove:
  - “Get template”
  - “Made in Framer”
  - Edit icons

====================================================
ASSETS HANDLING
====================================================
- Extract SVG icons from reference
- Convert to:
  - PNG or WebP
- Store in:
  /public/images

- Add fallback images if needed
- Ensure no broken images

====================================================
RESPONSIVE DESIGN
====================================================
Mobile:
- Stack sections
- Reduce padding
- Resize images

Tablet:
- 2-column grids

Desktop:
- Full layout

====================================================
ANIMATIONS
====================================================
- AOS:
  fade-up
  zoom-in
- Add stagger effect for cards

====================================================
FINAL GOAL
====================================================
- Pixel-perfect layout similar to reference
- Premium modern SaaS UI
- Fully responsive
- Clean React structure
- Optimized assets
- Production-ready website