# Business Portfolio - Sections Documentation

## Overview

The Business Portfolio template (`business-portfolio.html`) is a professional business showcase page builder that uses a component-based architecture. It allows users to create comprehensive business portfolios with 19 different section types, organized across two categories: **Most Used** and **More Sections**.

**Key Features:**
- Component-based architecture (modular JavaScript components)
- 4 Navigation modes: No Navigation, Tab View, Top Navigation Bar, Bottom Navigation Bar
- Real-time live preview with mobile/tablet device frames
- Info/Style tabs for each section
- Global layout and styling controls

---

## Current Status & TODO

### Current Implementation
Each section currently has:
- ✅ **1 View Layout** - Single render template per section
- ✅ **Basic Style Options** - Limited customization (colors, some layout options)

### 🚀 Future Enhancements (TODO)

#### Multiple View Layouts Per Section
Add alternative view templates for each section to provide variety:
- [ ] **Hero Banner** - Add 3-5 different hero layouts (centered, split, full-screen, minimal, etc.)
- [ ] **About Us** - Add layouts with image left/right, timeline view, grid view
- [ ] **Services** - Add grid view, list view, carousel view, icon-based view
- [ ] **Portfolio** - Add masonry grid, carousel, lightbox gallery, filterable grid
- [ ] **Contact** - Add form view, map view, split layout, minimal view
- [ ] **Team** - Add grid layouts (2/3/4 columns), carousel, detailed cards, minimal avatars
- [ ] **Testimonials** - Add carousel, grid view, single large quote, video testimonials
- [ ] **Social Media** - Add button styles, icon-only, branded colors, vertical stack
- [ ] **Call to Action** - Add banner, modal, inline, sidebar variations
- [ ] **Skills** - Add circular progress, icon-based, chart view, simple list
- [ ] **Pricing Plans** - Add toggle view, comparison table, featured plan, slider
- [ ] **FAQ** - Add accordion, two-column, search-enabled, categorized
- [ ] **Statistics** - Add counter animation, chart view, icon-based, timeline
- [ ] **Gallery** - Add Pinterest-style, slider, grid with captions, fullscreen
- [ ] **Clients** - Add carousel, ticker, grid with logos, detailed case studies
- [ ] **Awards** - Add timeline, grid, carousel, featured award spotlight
- [ ] **Video** - Add playlist, inline player, modal player, video grid
- [ ] **Features** - Add alternating layout, icon focus, comparison view, tabs
- [ ] **Process** - Add horizontal timeline, flowchart, animated steps, numbered circles

#### Enhanced Style Options Per Section
Add comprehensive styling controls for each section:
- [ ] **Typography** - Font size, weight, line height, letter spacing per section
- [ ] **Spacing** - Padding, margin controls (top, bottom, left, right)
- [ ] **Borders** - Border styles, widths, colors, radius per element
- [ ] **Shadows** - Box shadow presets and custom controls
- [ ] **Animations** - Entrance animations, hover effects, transitions
- [ ] **Backgrounds** - Gradient options, patterns, overlay effects, images
- [ ] **Layout** - Width constraints, alignment options, responsive breakpoints
- [ ] **Color Schemes** - Pre-defined color palettes per section type
- [ ] **Custom CSS** - Advanced users can add custom CSS classes

#### View/Style Selection UI
- [ ] Add "View Layout" selector in Info tab (dropdown or visual picker)
- [ ] Add "Style Preset" selector in Style tab
- [ ] Add preview thumbnails for each view layout option
- [ ] Add "Duplicate with different view" feature
- [ ] Add "Save as custom style" feature

#### Priority Sections for Multiple Views (Phase 1)
1. Hero Banner (most visible)
2. Portfolio (highly requested)
3. Services (common use case)
4. Testimonials (variety needed)
5. Team (different display needs)

---

## Section Categories

### Most Used Sections (5 sections)
1. Hero Banner
2. About Us
3. Services
4. Portfolio
5. Contact

### More Sections (14 sections)
6. Team
7. Testimonials
8. Social Media
9. Call to Action
10. Skills & Expertise
11. Pricing Plans
12. FAQ
13. Statistics
14. Gallery
15. Clients & Partners
16. Awards
17. Video
18. Features
19. Process

### Global Configuration
0. Page Layout (automatically added, required)

---

## Detailed Section Documentation

### 0. 🎨 Page Layout (Global Settings)

**Allow Multiple:** No (only one instance, automatically added)
**Category:** Required/Permanent
**Status:** Required, cannot be removed
**Current Views:** 1 (default only)
**Current Styles:** Advanced (navigation modes, typography, colors, spacing)

#### Info Tab Fields:

**Navigation Layout Type:**
- No Navigation (default) - Standard scrolling layout
- Tab View - Organize sections into tabs
- Top Navigation Bar - Fixed navigation bar at the top
- Bottom Navigation Bar - Fixed navigation bar at the bottom

**Tab View Settings** (when Tab View is selected):
- Tab Names (textarea) - One tab name per line
- Tab Style (dropdown): Underline, Pills, Buttons, Boxed
- Tab Alignment (dropdown): Left, Center, Right
- Tab Size (dropdown): Small, Medium, Large

**Top Navigation Settings** (when Top Nav is selected):
- Navigation Items (textarea) - One item per line
- Navigation Style (dropdown): Simple, Underline Active, Pills, Bordered
- Navigation Alignment (dropdown): Left, Center, Right
- Navigation Size (dropdown): Small, Medium, Large
- Navbar Background (color picker) - Default: #ffffff
- Navbar Text Color (color picker) - Default: #1f2937
- Sticky Navigation (checkbox) - Fixed at top (default: checked)

**Bottom Navigation Settings** (when Bottom Nav is selected):
- Navigation Items (textarea) - One item per line
- Navigation Style (dropdown): Simple, Underline Active, Pills, Bordered
- Navigation Alignment (dropdown): Left, Center, Right
- Navigation Size (dropdown): Small, Medium, Large
- Navbar Background (color picker) - Default: #ffffff
- Navbar Text Color (color picker) - Default: #1f2937
- Sticky Navigation (checkbox) - Fixed at bottom (default: checked)

#### Style Tab Options:

- Primary Color (color picker) - Default: #9333ea (purple)
- Secondary Color (color picker) - Default: #ec4899 (pink)
- Background Color (color picker) - Default: #ffffff
- Text Color (color picker) - Default: #1f2937
- Font Family (dropdown):
  - System Default
  - Georgia (Serif)
  - Times New Roman
  - Courier New
  - Arial
  - Comic Sans MS
  - Brush Script
- Border Radius (dropdown): Square, Small (4px), Medium (8px), Large (16px), Extra Large (24px), Pill Shape
- Spacing (dropdown): Compact, Normal, Relaxed, Spacious

#### View/Render:

No visible content rendered. Controls global styles and navigation structure.

---

### 1. 💼 Hero Banner

**Allow Multiple:** No
**Category:** Most Used
**Status:** Required when navigation is enabled, cannot be removed
**Current Views:** 1 (centered with image/icon)
**Current Styles:** Basic (background color, text color)
**TODO:** Add 3-5 hero layouts (split, full-screen, minimal, video background, parallax)

#### Info Tab Fields:

- Business Name (text input) - Placeholder: "Your Business Name"
- Tagline (text input) - Placeholder: "Your business tagline"
- Hero Image (file upload) - Click to upload image

#### Style Tab Options:

- Background Color (color picker) - Default: #2563eb (blue)
- Text Color (color picker) - Default: #ffffff (white)

#### View/Render:

Centered hero section with:
- Large centered image (or 💼 icon if no image)
- Business name in large bold heading
- Tagline in smaller text below
- Custom background and text colors

---

### 2. ℹ️ About Us

**Allow Multiple:** No
**Category:** Most Used
**Current Views:** 1 (centered text)
**Current Styles:** Basic (background color)
**TODO:** Add image+text layouts, timeline view, grid view, team photo integration

#### Info Tab Fields:

- Section Title (text input) - Default: "About Us"
- Description (textarea, 4 rows) - Placeholder: "Tell your business story..."

#### Style Tab Options:

- Background Color (color picker) - Default: #ffffff (white)

#### View/Render:

Centered content section with:
- Section title as large heading
- Description text in gray, centered
- Max-width constrained for readability

---

### 3. ⚙️ Services

**Allow Multiple:** No
**Category:** Most Used
**Current Views:** 1 (vertical list with checkmarks)
**Current Styles:** Basic (background color)
**TODO:** Add grid view, icon-based cards, pricing integration, feature comparison

#### Info Tab Fields:

- Section Title (text input) - Default: "Our Services"
- Services (textarea, 5 rows) - One service per line
  - Placeholder example: "Web Development\nMobile Apps\nConsulting\nDesign Services"

#### Style Tab Options:

- Background Color (color picker) - Default: #eff6ff (light blue)

#### View/Render:

List of services displayed as:
- Section title as heading
- Each service in white card with checkmark icon
- Vertical stack of service cards
- Light blue background

---

### 4. 📁 Portfolio

**Allow Multiple:** No
**Category:** Most Used
**Current Views:** 1 (placeholder only)
**Current Styles:** Basic (background color)
**TODO:** Add masonry grid, filterable gallery, lightbox, project details modal

#### Info Tab Fields:

- Section Title (text input) - Default: "Our Work"
- Upload Portfolio Images (file upload placeholder)
  - Note: Currently shows placeholder only

#### Style Tab Options:

- Background Color (color picker) - Default: #ffffff (white)

#### View/Render:

Portfolio placeholder section:
- Section title as heading
- Large folder icon (📁)
- "Portfolio items will appear here" message
- White background

---

### 5. 📞 Contact

**Allow Multiple:** No
**Category:** Most Used
**Current Views:** 1 (contact info cards)
**Current Styles:** Basic (background color)
**TODO:** Add contact form, map integration, split layout, social links integration

#### Info Tab Fields:

- Section Title (text input) - Default: "Get In Touch"
- Email (email input) - Placeholder: "contact@business.com"
- Phone (tel input) - Placeholder: "+1 234 567 8900"
- Address (textarea, 2 rows) - Placeholder: "Business address..."

#### Style Tab Options:

- Background Color (color picker) - Default: #eff6ff (light blue)

#### View/Render:

Contact information cards:
- Section title as heading
- Email card with 📧 icon (if provided)
- Phone card with 📞 icon (if provided)
- Address card with 📍 icon (if provided)
- Each in white card on light blue background

---

### 6. 👥 Team

**Allow Multiple:** No
**Category:** More Sections
**Current Views:** 1 (vertical cards)
**Current Styles:** Basic (background color)
**TODO:** Add grid layouts (2/3/4 cols), carousel, hover effects, social links per member

#### Info Tab Fields:

- Section Title (text input) - Default: "Meet Our Team"
- Team Members (textarea, 4 rows) - Format: "Name - Role" (one per line)
  - Example: "John Smith - CEO\nJane Doe - Lead Designer\nMike Johnson - Developer"

#### Style Tab Options:

- Background Color (color picker) - Default: #f9fafb (light gray)

#### View/Render:

Team member cards:
- Section title as heading
- Each member in white card with:
  - 👤 icon
  - Name (bold)
  - Role (gray text)
- Vertical stack on light gray background

---

### 7. 💬 Testimonials

**Allow Multiple:** No
**Category:** More Sections
**Current Views:** 1 (single testimonial card)
**Current Styles:** Basic (background color)
**TODO:** Add carousel, grid view, video testimonials, rating stars, multiple quotes

#### Info Tab Fields:

- Section Title (text input) - Default: "What Clients Say"
- Testimonial (textarea, 3 rows) - Placeholder: "Add a client testimonial..."
- Client Name (text input) - Placeholder: "Client Name"

#### Style Tab Options:

- Background Color (color picker) - Default: #ffffff (white)

#### View/Render:

Single testimonial card:
- Section title as heading
- Blue card with:
  - 💬 speech bubble icon
  - Testimonial text in quotes (italic)
  - Client name with dash prefix
- White background

---

### 8. 🔗 Social Media

**Allow Multiple:** No
**Category:** More Sections
**Current Views:** 1 (horizontal icon row)
**Current Styles:** Basic (background color, fixed icon colors)
**TODO:** Add vertical stack, branded colors, icon size options, more platforms

#### Info Tab Fields:

- Section Title (text input) - Default: "Follow Us"
- Facebook URL (url input) - Placeholder: "https://facebook.com/..."
- Instagram URL (url input) - Placeholder: "https://instagram.com/..."
- LinkedIn URL (url input) - Placeholder: "https://linkedin.com/..."

#### Style Tab Options:

- Background Color (color picker) - Default: #ffffff (white)

#### View/Render:

Social media icon row:
- Section title as heading
- Circular social media icons:
  - Facebook: Blue circle with "f"
  - Instagram: Pink circle with 📷
  - LinkedIn: Dark blue circle with "in"
- Centered horizontal layout

---

### 9. 🎯 Call to Action

**Allow Multiple:** No
**Category:** More Sections
**Current Views:** 1 (centered banner)
**Current Styles:** Basic (background color, text color)
**TODO:** Add modal popup, sidebar, inline, countdown timer, form integration

#### Info Tab Fields:

- Heading (text input) - Default: "Ready to Work Together?"
- Subtext (text input) - Default: "Let's bring your ideas to life"
- Button Text (text input) - Default: "Get Started"

#### Style Tab Options:

- Background Color (color picker) - Default: #2563eb (blue)
- Text Color (color picker) - Default: #ffffff (white)

#### View/Render:

Full-width CTA banner:
- Large heading
- Subtext below
- White button with contrasting text
- Colored background with white text
- Centered content

---

### 10. 🎓 Skills & Expertise

**Allow Multiple:** No
**Category:** More Sections
**Current Views:** 1 (progress bars)
**Current Styles:** Basic (background color, bar color)
**TODO:** Add circular progress, radar chart, icon-based grid, simple list

#### Info Tab Fields:

- Section Title (text input) - Default: "Our Expertise"
- Skills (textarea, 6 rows) - Format: "Skill Name - Percentage%" or "Skill Name"
  - Example: "Web Development - 95%\nMobile Apps - 90%\nUI/UX Design - 85%\nCloud Services - 80%"

#### Style Tab Options:

- Background Color (color picker) - Default: #f9fafb (light gray)
- Progress Bar Color (color picker) - Default: #2563eb (blue)

#### View/Render:

Skills with progress bars:
- Section title as heading
- For skills with percentage:
  - Skill name and percentage label
  - Horizontal progress bar
- For skills without percentage:
  - Bullet point with skill name
- Light gray background

---

### 11. 💰 Pricing Plans

**Allow Multiple:** No
**Category:** More Sections
**Dynamic Items:** Yes (Plans)
**Current Views:** 1 (horizontal cards)
**Current Styles:** Basic (background color, border color)
**TODO:** Add pricing toggle (monthly/yearly), comparison table, featured highlight

#### Info Tab Fields:

- Section Title (text input) - Default: "Pricing Plans"
- **Dynamic Plans** (add/remove):
  - Plan Name (text input)
  - Plan Price (text input) - e.g., "$99/mo"
  - Plan Features (textarea) - One feature per line

#### Style Tab Options:

- Background Color (color picker) - Default: #ffffff (white)
- Card Border Color (color picker) - Default: #e5e7eb (gray)

#### View/Render:

Pricing cards grid:
- Section title as heading
- Cards displayed in row (responsive grid)
- Second plan highlighted as "MOST POPULAR"
- Each card shows:
  - Plan name
  - Price (large, colored)
  - Feature list with checkmarks
  - "Choose Plan" button

---

### 12. ❓ FAQ

**Allow Multiple:** No
**Category:** More Sections
**Dynamic Items:** Yes (Questions)
**Current Views:** 1 (stacked cards)
**Current Styles:** Basic (background color)
**TODO:** Add accordion collapse, two-column layout, search filter, categories

#### Info Tab Fields:

- Section Title (text input) - Default: "Frequently Asked Questions"
- **Dynamic FAQs** (add/remove):
  - Question (text input)
  - Answer (textarea)

#### Style Tab Options:

- Background Color (color picker) - Default: #f9fafb (light gray)

#### View/Render:

FAQ accordion-style cards:
- Section title as heading
- Each FAQ in white card:
  - Question as bold heading
  - Answer in gray text
- Light gray background

---

### 13. 📊 Statistics

**Allow Multiple:** No
**Category:** More Sections
**Dynamic Items:** Yes (Stats)
**Current Views:** 1 (grid layout)
**Current Styles:** Basic (background color, text color)
**TODO:** Add counter animation, icon per stat, timeline view, chart integration

#### Info Tab Fields:

- Section Title (text input) - Default: "Our Achievements"
- **Dynamic Statistics** (add/remove):
  - Stat Value (text input) - e.g., "500+", "10 Years"
  - Stat Label (text input) - e.g., "Projects", "Experience"

#### Style Tab Options:

- Background Color (color picker) - Default: #1e40af (dark blue)
- Text Color (color picker) - Default: #ffffff (white)

#### View/Render:

Statistics grid:
- Section title as heading
- Grid layout (2x2 on mobile, 4 columns on desktop)
- Each stat shows:
  - Large value number
  - Small label below
- Dark background with white text

---

### 14. 🖼️ Gallery

**Allow Multiple:** No
**Category:** More Sections
**Current Views:** 1 (grid with placeholders)
**Current Styles:** Basic (background color, column count)
**TODO:** Add masonry layout, lightbox, carousel slider, filterable categories

#### Info Tab Fields:

- Section Title (text input) - Default: "Our Work"
- Image Titles (textarea, 6 rows) - One title per line
  - Example: "Project Alpha\nProject Beta\nProject Gamma"

#### Style Tab Options:

- Background Color (color picker) - Default: #ffffff (white)
- Grid Layout (dropdown): 2 Columns, 3 Columns (default), 4 Columns

#### View/Render:

Image gallery grid:
- Section title as heading
- Responsive grid (2/3/4 columns)
- Each item shows:
  - Gradient placeholder box
  - 🖼️ icon
  - Image title text
- Square aspect ratio tiles

---

### 15. 🤝 Clients & Partners

**Allow Multiple:** No
**Category:** More Sections
**Current Views:** 1 (logo grid)
**Current Styles:** Basic (background color, logo style)
**TODO:** Add carousel, ticker scroll, case study cards, logo upload support

#### Info Tab Fields:

- Section Title (text input) - Default: "Our Clients & Partners"
- Client Names (textarea, 6 rows) - One company name per line
  - Example: "Company A\nCompany B\nCompany C"

#### Style Tab Options:

- Background Color (color picker) - Default: #f9fafb (light gray)
- Logo Style (dropdown): Boxes, Circles (default), Minimal

#### View/Render:

Client logo grid:
- Section title as heading
- 3x6 grid (3 columns on mobile, 6 on desktop)
- Each logo placeholder:
  - White background
  - Company name text
  - Styled shape (boxes/circles/minimal)
- Light gray background

---

### 16. 🏆 Awards

**Allow Multiple:** No
**Category:** More Sections
**Dynamic Items:** Yes (Awards)
**Current Views:** 1 (card list)
**Current Styles:** Basic (background color)
**TODO:** Add timeline view, grid layout, carousel, featured award spotlight

#### Info Tab Fields:

- Section Title (text input) - Default: "Awards & Recognition"
- **Dynamic Awards** (add/remove):
  - Award Name (text input)
  - Year (text input)
  - Description (textarea, 2 rows)

#### Style Tab Options:

- Background Color (color picker) - Default: #fffbeb (light yellow)

#### View/Render:

Award cards:
- Section title as heading
- Each award in white card:
  - 🏆 trophy icon
  - Award name (bold)
  - Year (amber colored)
  - Description (gray text)
- Light yellow background

---

### 17. 🎥 Video

**Allow Multiple:** No
**Category:** More Sections
**Current Views:** 1 (placeholder player)
**Current Styles:** Basic (background color)
**TODO:** Add actual YouTube/Vimeo embed, playlist support, modal player, autoplay

#### Info Tab Fields:

- Section Title (text input) - Default: "Watch Our Story"
- Video Title (text input) - Placeholder: "Company Introduction"
- Video URL (url input) - Placeholder: "https://youtube.com/watch?v=..."
- Description (textarea, 3 rows) - Placeholder: "Video description..."

#### Style Tab Options:

- Background Color (color picker) - Default: #000000 (black)

#### View/Render:

Video player section:
- Section title (white text)
- Video placeholder:
  - 16:9 aspect ratio
  - Dark gradient background
  - 🎥 icon
  - Video title
  - URL display (if provided)
- Description below (if provided)
- Black background

---

### 18. ✨ Features

**Allow Multiple:** No
**Category:** More Sections
**Dynamic Items:** Yes (Features)
**Current Views:** 1 (2-column grid)
**Current Styles:** Basic (background color, card style)
**TODO:** Add alternating layout, icon focus, tabbed view, comparison table

#### Info Tab Fields:

- Section Title (text input) - Default: "Why Choose Us"
- **Dynamic Features** (add/remove):
  - Icon (text input) - Emoji placeholder
  - Feature Title (text input)
  - Description (textarea, 2 rows)

#### Style Tab Options:

- Background Color (color picker) - Default: #ffffff (white)
- Card Style (dropdown): Bordered, Shadow (default), Filled

#### View/Render:

Features grid:
- Section title as heading
- 2-column grid (responsive)
- Each feature card:
  - Large icon/emoji
  - Feature title (bold)
  - Description text
- Card styling based on selection

---

### 19. 🔄 Process

**Allow Multiple:** No
**Category:** More Sections
**Dynamic Items:** Yes (Steps)
**Current Views:** 2 (vertical timeline, cards)
**Current Styles:** Basic (background color, layout toggle)
**TODO:** Add horizontal timeline, flowchart diagram, animated steps, icon per step

#### Info Tab Fields:

- Section Title (text input) - Default: "Our Process"
- **Dynamic Steps** (add/remove):
  - Step Title (text input)
  - Step Description (textarea, 2 rows)

#### Style Tab Options:

- Background Color (color picker) - Default: #f0f9ff (light blue)
- Layout Style (dropdown): Vertical Timeline (default), Cards

#### View/Render:

**Vertical Timeline:**
- Numbered circles connected by line
- Step title and description to the right

**Cards Layout:**
- 2-column grid
- Numbered badges in cards
- Step title and description

---

## Navigation Modes

### No Navigation (Default)
- All sections displayed in vertical scroll
- No tab or navigation controls
- Simple single-page layout

### Tab View
- Hero section always visible at top
- Remaining sections organized into tabs
- Tab bar sticky at top
- Sections assigned to specific tabs
- Tab styles: Underline, Pills, Buttons, Boxed

### Top Navigation Bar
- Navigation bar sticky at top
- Hero section below navigation
- Sections assigned to navigation items
- Click navigation to show/hide sections
- Styles: Simple, Underline, Pills, Bordered

### Bottom Navigation Bar
- Navigation bar sticky at bottom
- Hero section at top
- Sections assigned to navigation items
- Mobile-optimized layout
- Styles: Simple, Underline, Pills, Bordered

---

## Section Assignment

When navigation is enabled (Tab View, Top Nav, or Bottom Nav):
- Each section (except Layout and Hero) has a dropdown to assign to navigation item
- Unassigned sections won't be displayed
- Multiple sections can be assigned to same navigation item
- Sections display in order they were added

---

## Default Sections

When the page loads, these sections are automatically added:
1. Page Layout (permanent, required)
2. Hero Banner (required when navigation enabled)
3. About Us
4. Services
5. Contact

---

## Component Architecture

All sections are defined as separate JavaScript component files in the `components/` directory:

- `layout.component.js` - Page Layout
- `hero.component.js` - Hero Banner
- `about.component.js` - About Us
- `services.component.js` - Services
- `portfolio.component.js` - Portfolio
- `contact.component.js` - Contact
- `team.component.js` - Team
- `testimonials.component.js` - Testimonials
- `social.component.js` - Social Media
- `cta.component.js` - Call to Action
- `skills.component.js` - Skills & Expertise
- `pricing.component.js` - Pricing Plans
- `faq.component.js` - FAQ
- `stats.component.js` - Statistics
- `gallery.component.js` - Gallery
- `clients.component.js` - Clients & Partners
- `awards.component.js` - Awards
- `video.component.js` - Video
- `features.component.js` - Features
- `process.component.js` - Process

**Supporting Files:**
- `dynamic-templates.js` - Templates for dynamic items (plans, FAQs, stats, awards, features, steps)
- `components-loader.js` - Loads all components and dispatches 'componentsReady' event

---

## Color Scheme

**Default Theme:** Blue-600 to Cyan-600 gradient

**Header/Branding:**
- Gradient: `from-blue-600 to-cyan-600`
- Primary: #2563eb (blue)
- Accent: #0891b2 (cyan)

---

## File Information

**File:** `business-portfolio.html`
**Lines:** ~1425
**Size:** ~80KB
**Template Type:** Event Invitation & Portfolio (Full-Featured)
**Architecture:** Component-based (modular)
**Total Sections:** 19 + 1 Layout = 20 components

---

**Last Updated:** 2025-11-14
**Documentation Version:** 1.0
