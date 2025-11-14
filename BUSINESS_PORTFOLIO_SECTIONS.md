# Business Portfolio Sections Documentation

**Template:** business-portfolio.html
**Last Updated:** 2025-11-14
**Total Sections:** 20 (1 Layout + 1 Hero + 18 Content Sections)

---

## Table of Contents

1. [Overview](#overview)
2. [Global Settings](#global-settings)
3. [Required Sections](#required-sections)
4. [Most Used Sections](#most-used-sections)
5. [Additional Sections](#additional-sections)
6. [Navigation Options](#navigation-options)
7. [Section Summary Table](#section-summary-table)

---

## Overview

The Business Portfolio template provides a comprehensive set of 20 specialized sections to create professional business showcase pages. Sections are organized into three categories:

- **Global Settings**: Page Layout (1 section) - Controls overall navigation and styling
- **Required**: Hero Banner (1 section) - Main introductory section
- **Most Used**: Core business sections (4 sections)
- **Additional**: Advanced and specialized sections (14 sections)

---

## Global Settings

### 🎨 Page Layout

**Location:** Automatically added on page load
**Allow Multiple:** No
**Can Be Removed:** No
**Badge:** Global Settings (Purple)

#### Info Tab

| Field | Type | Description | Options |
|-------|------|-------------|---------|
| **Navigation Layout Type** | Radio Group | Choose navigation style | • No Navigation (default)<br>• Tab View<br>• Top Navigation Bar<br>• Bottom Navigation Bar |

##### Tab View Settings (visible when Tab View selected)

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Tab Names | Textarea | Define tab names (one per line) | Home<br>About<br>Services<br>Contact |
| Tab Style | Select | Visual style of tabs | Underline, Pills, Buttons, Boxed |
| Tab Alignment | Select | Horizontal alignment | Left, Center, Right |
| Tab Size | Select | Size of tab buttons | Small, Medium, Large |

##### Top Navigation Settings (visible when Top Nav selected)

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Navigation Items | Textarea | Menu item names (one per line) | Home<br>About<br>Services<br>Contact |
| Navigation Style | Select | Visual style | Simple, Underline Active, Pills, Bordered |
| Navigation Alignment | Select | Horizontal alignment | Left, Center, Right |
| Navigation Size | Select | Button size | Small, Medium, Large |
| Navbar Background | Color Picker | Background color | #ffffff |
| Navbar Text Color | Color Picker | Text color | #1f2937 |
| Sticky Navigation | Checkbox | Fixed at top when scrolling | Checked by default |

##### Bottom Navigation Settings (visible when Bottom Nav selected)

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Navigation Items | Textarea | Menu item names (one per line) | Home<br>About<br>Services<br>Contact |
| Navigation Style | Select | Visual style | Simple, Underline Active, Pills, Bordered |
| Navigation Alignment | Select | Horizontal alignment | Left, Center, Right |
| Navigation Size | Select | Button size | Small, Medium, Large |
| Navbar Background | Color Picker | Background color | #ffffff |
| Navbar Text Color | Color Picker | Text color | #1f2937 |
| Sticky Navigation | Checkbox | Fixed at bottom when scrolling | Checked by default |

#### Style Tab

| Field | Type | Default Value | Description |
|-------|------|---------------|-------------|
| Primary Color | Color Picker | #9333ea | Used for headings and accents |
| Secondary Color | Color Picker | #ec4899 | Used for secondary elements |
| Background Color | Color Picker | #ffffff | Page background |
| Text Color | Color Picker | #1f2937 | Default text color |
| Font Family | Select | System Default | Font for entire page |
| Border Radius | Select | Medium (8px) | Corner roundness |
| Spacing | Select | Normal | Content spacing |

**Font Family Options:**
- System Default
- Georgia (Serif)
- Times New Roman
- Courier New
- Arial
- Comic Sans
- Brush Script

**Border Radius Options:**
- Square (0px)
- Small (4px)
- Medium (8px)
- Large (16px)
- Extra Large (24px)
- Pill Shape (9999px)

**Spacing Options:**
- Compact
- Normal
- Relaxed
- Spacious

---

## Required Sections

### 💼 Hero Banner

**Allow Multiple:** No
**Can Be Removed:** No
**Badge:** Required (Blue)
**Category:** Most Used

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Business Name | Text Input | Your company name | Your Business Name |
| Tagline | Text Input | Business tagline/slogan | Your business tagline |
| Hero Image | File Upload | Logo or hero image | 📸 Click to upload |

#### Style Tab

| Field | Type | Default Value | Description |
|-------|------|---------------|-------------|
| Background Color | Color Picker | #2563eb | Section background |
| Text Color | Color Picker | #ffffff | Text color |

#### Preview Rendering
- Displays business name as large heading
- Shows tagline below
- If image uploaded: Shows as rounded logo (96x96px)
- If no image: Shows briefcase emoji (💼)
- Centered layout with padding

---

## Most Used Sections

These sections appear in the first tab of the "Add Section" modal.

### ℹ️ About Us

**Allow Multiple:** No
**Category:** Most Used

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | About Us |
| Description | Textarea (4 rows) | Company story/description | Tell your business story... |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #ffffff |

---

### ⚙️ Services

**Allow Multiple:** No
**Category:** Most Used

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Our Services |
| Services | Textarea (5 rows) | List of services (one per line) | Web Development<br>Mobile Apps<br>Consulting<br>Design Services |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #eff6ff |

#### Preview Rendering
- Services appear as individual cards
- Each card has checkmark (✓) icon
- White background cards on colored section background

---

### 📁 Portfolio

**Allow Multiple:** No
**Category:** Most Used

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Our Work |
| Upload Portfolio Images | File Upload | Multiple image upload placeholder | 🖼️ Click to upload multiple images |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #ffffff |

#### Preview Rendering
- Currently shows placeholder folder icon
- Displays "Portfolio items will appear here" message

---

### 📞 Contact

**Allow Multiple:** No
**Category:** Most Used

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Get In Touch |
| Email | Email Input | Contact email address | contact@business.com |
| Phone | Tel Input | Contact phone number | +1 234 567 8900 |
| Address | Textarea (2 rows) | Physical address | Business address... |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #eff6ff |

#### Preview Rendering
- Each contact method shown in separate card
- Email: 📧 icon
- Phone: 📞 icon
- Address: 📍 icon
- Only shows cards for filled-in fields

---

## Additional Sections

These sections appear in the "More Sections" tab of the modal.

### 👥 Team

**Allow Multiple:** No
**Category:** More Sections

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Meet Our Team |
| Team Members | Textarea (4 rows) | Members in format: Name - Role (one per line) | John Smith - CEO<br>Jane Doe - Lead Designer<br>Mike Johnson - Developer |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #f9fafb |

#### Preview Rendering
- Each member shown in white card
- Person icon (👤) above name
- Name in bold, role in gray text below

---

### 💬 Testimonials

**Allow Multiple:** No
**Category:** More Sections

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | What Clients Say |
| Testimonial | Textarea (3 rows) | Client testimonial text | Add a client testimonial... |
| Client Name | Text Input | Name of client | Client Name |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #ffffff |

#### Preview Rendering
- Quote displayed in blue background box
- Speech bubble icon (💬) centered above quote
- Italic text for testimonial
- Client name with dash prefix below

---

### 🔗 Social Media

**Allow Multiple:** No
**Category:** More Sections

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Follow Us |
| Facebook URL | URL Input | Facebook page URL | https://facebook.com/... |
| Instagram URL | URL Input | Instagram profile URL | https://instagram.com/... |
| LinkedIn URL | URL Input | LinkedIn profile URL | https://linkedin.com/... |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #ffffff |

#### Preview Rendering
- Social icons shown as colored circles
- Facebook: Blue circle with 'f'
- Instagram: Pink circle with camera emoji
- LinkedIn: Dark blue circle with 'in'
- Only shows icons for filled-in URLs

---

### 🎯 Call to Action

**Allow Multiple:** No
**Category:** More Sections

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Heading | Text Input | Main CTA heading | Ready to Work Together? |
| Subtext | Text Input | Supporting text | Let's bring your ideas to life |
| Button Text | Text Input | Text on CTA button | Get Started |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #2563eb |
| Text Color | Color Picker | #ffffff |

#### Preview Rendering
- Centered content
- Large heading, subtext, and button
- Button has white background with blue text (inverted)

---

### 🎓 Skills & Expertise

**Allow Multiple:** No
**Category:** More Sections

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Our Expertise |
| Skills | Textarea (6 rows) | Skills with optional percentage (one per line) | Web Development - 95%<br>Mobile Apps - 90%<br>UI/UX Design - 85%<br>Cloud Services - 80% |

**Format:** `Skill Name - Percentage` or just `Skill Name`

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #f9fafb |
| Progress Bar Color | Color Picker | #2563eb |

#### Preview Rendering
- Skills with percentage: Progress bar with label and percentage
- Skills without percentage: Bullet point with colored dot
- Progress bars filled according to percentage

---

### 💰 Pricing Plans

**Allow Multiple:** No
**Category:** More Sections
**Special Feature:** Dynamic Items

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Pricing Plans |
| **+ Add Plan Button** | Action | Adds new pricing plan | - |

**For each Plan:**

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Plan Name | Text Input | Name of pricing tier | Basic / Pro / Enterprise |
| Price | Text Input | Price with currency | $29/mo |
| Features | Textarea | Features list (one per line) | Feature 1<br>Feature 2<br>Feature 3 |
| **✕ Remove Button** | Action | Removes this plan | - |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #ffffff |
| Card Border Color | Color Picker | #e5e7eb |

#### Preview Rendering
- Plans shown in grid (adapts to number of plans)
- Second plan marked as "MOST POPULAR" with blue border
- Each plan has checkmarks for features
- "Choose Plan" button at bottom of each card

---

### ❓ FAQ

**Allow Multiple:** No
**Category:** More Sections
**Special Feature:** Dynamic Items

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Frequently Asked Questions |
| **+ Add Question Button** | Action | Adds new FAQ item | - |

**For each FAQ:**

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Question | Text Input | FAQ question | What is your process? |
| Answer | Textarea | FAQ answer | We follow a proven methodology... |
| **✕ Remove Button** | Action | Removes this FAQ | - |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #f9fafb |

#### Preview Rendering
- Each Q&A shown in white card with shadow
- Question in bold, larger text
- Answer in gray, smaller text

---

### 📊 Statistics

**Allow Multiple:** No
**Category:** More Sections
**Special Feature:** Dynamic Items

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Our Achievements |
| **+ Add Stat Button** | Action | Adds new statistic | - |

**For each Statistic:**

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Value | Text Input | Numeric value or text | 500+ / $2M+ / 98% |
| Label | Text Input | Description of stat | Happy Clients / Revenue / Satisfaction |
| **✕ Remove Button** | Action | Removes this stat | - |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #1e40af (dark blue) |
| Text Color | Color Picker | #ffffff |

#### Preview Rendering
- Grid layout (2 columns mobile, 4 on desktop)
- Large value numbers
- Small label text below
- Designed for dark background with light text

---

### 🖼️ Gallery

**Allow Multiple:** No
**Category:** More Sections

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Our Work |
| Image Titles | Textarea (6 rows) | Titles for gallery items (one per line) | Project Alpha<br>Project Beta<br>Project Gamma<br>Project Delta<br>Project Epsilon<br>Project Zeta |

#### Style Tab

| Field | Type | Default Value | Options |
|-------|------|---------------|---------|
| Background Color | Color Picker | #ffffff | - |
| Grid Layout | Select | 3 Columns | 2 Columns, 3 Columns, 4 Columns |

#### Preview Rendering
- Responsive grid based on column setting
- Square aspect ratio placeholders
- Blue gradient background for each image placeholder
- Gallery icon (🖼️) and title text

---

### 🤝 Clients & Partners

**Allow Multiple:** No
**Category:** More Sections

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Our Clients & Partners |
| Client Names | Textarea (6 rows) | Company names (one per line) | Company A<br>Company B<br>Company C<br>Company D<br>Company E<br>Company F |

#### Style Tab

| Field | Type | Default Value | Options |
|-------|------|---------------|---------|
| Background Color | Color Picker | #f9fafb | - |
| Logo Style | Select | Circles | Boxes, Circles, Minimal |

#### Preview Rendering
- Grid layout (3 columns mobile, 6 on desktop)
- Company name inside styled container
- Container style varies by Logo Style selection

---

### 🏆 Awards

**Allow Multiple:** No
**Category:** More Sections
**Special Feature:** Dynamic Items

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Awards & Recognition |
| **+ Add Award Button** | Action | Adds new award entry | - |

**For each Award:**

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Award Name | Text Input | Name of award | Best Innovation Award |
| Year | Text Input | Year received | 2023 |
| Description | Textarea (2 rows) | Award description | Recognized for outstanding... |
| **✕ Remove Button** | Action | Removes this award | - |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #fffbeb (cream) |

#### Preview Rendering
- Each award in white card with shadow
- Trophy emoji (🏆) on left
- Award name in bold with year in amber color
- Description below in gray text

---

### 🎥 Video

**Allow Multiple:** No
**Category:** More Sections

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Watch Our Story |
| Video Title | Text Input | Title of video | Company Introduction |
| Video URL | URL Input | YouTube, Vimeo, etc. URL | https://youtube.com/watch?v=... |
| Description | Textarea (3 rows) | Video description | Video description... |

#### Style Tab

| Field | Type | Default Value |
|-------|------|---------------|
| Background Color | Color Picker | #000000 (black) |

#### Preview Rendering
- 16:9 aspect ratio video placeholder
- Video icon (🎥) and title in center
- Shows URL if provided
- Description below in gray box (if provided)
- Dark theme design

---

### ✨ Features

**Allow Multiple:** No
**Category:** More Sections
**Special Feature:** Dynamic Items

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Why Choose Us |
| **+ Add Feature Button** | Action | Adds new feature | - |

**For each Feature:**

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Icon | Text Input | Emoji or icon | ⚡ / 🚀 / 💡 |
| Feature Title | Text Input | Feature name | Lightning Fast |
| Description | Textarea (2 rows) | Feature description | Our optimized platform... |
| **✕ Remove Button** | Action | Removes this feature | - |

#### Style Tab

| Field | Type | Default Value | Options |
|-------|------|---------------|---------|
| Background Color | Color Picker | #ffffff | - |
| Card Style | Select | Shadow | Bordered, Shadow, Filled |

#### Preview Rendering
- 2-column grid layout
- Each feature in card with icon, title, description
- Card styling varies by Card Style selection

---

### 🔄 Process

**Allow Multiple:** No
**Category:** More Sections
**Special Feature:** Dynamic Items

#### Info Tab

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Section Title | Text Input | Heading for section | Our Process |
| **+ Add Step Button** | Action | Adds new process step | - |

**For each Step:**

| Field | Type | Description | Placeholder |
|-------|------|-------------|-------------|
| Step Title | Text Input | Title of step | Discovery |
| Step Description | Textarea (2 rows) | Step details | We learn about your needs... |
| **✕ Remove Button** | Action | Removes this step | - |

#### Style Tab

| Field | Type | Default Value | Options |
|-------|------|---------------|---------|
| Background Color | Color Picker | #f0f9ff | - |
| Layout Style | Select | Vertical Timeline | Vertical Timeline, Cards |

#### Preview Rendering

**Vertical Timeline:**
- Numbered circles connected by vertical line
- Steps shown sequentially down the page

**Cards:**
- 2-column grid
- Each step in white card with number badge

---

## Navigation Options

When navigation is enabled in the Page Layout section, all content sections (except Layout and Hero) display an additional field:

### Navigation Assignment Dropdown

| Mode | Field Label | Description |
|------|-------------|-------------|
| Tab View | Assign to Tab | Select which tab this section appears in |
| Top Nav | Assign to Navigation Item | Select which nav item this section appears under |
| Bottom Nav | Assign to Navigation Item | Select which nav item this section appears under |

**Behavior:**
- Hero section is always visible (not assigned to any tab/nav item)
- Other sections only appear when their assigned tab/nav item is active
- Sections without assignment won't be visible in preview

---

## Section Summary Table

| # | Section | Icon | Allow Multiple | Category | Dynamic Items | Default Background |
|---|---------|------|----------------|----------|---------------|-------------------|
| 1 | Page Layout | 🎨 | No | Global Settings | No | N/A |
| 2 | Hero Banner | 💼 | No | Required | No | #2563eb (blue) |
| 3 | About Us | ℹ️ | No | Most Used | No | #ffffff |
| 4 | Services | ⚙️ | No | Most Used | No | #eff6ff (light blue) |
| 5 | Portfolio | 📁 | No | Most Used | No | #ffffff |
| 6 | Contact | 📞 | No | Most Used | No | #eff6ff (light blue) |
| 7 | Team | 👥 | No | More | No | #f9fafb (light gray) |
| 8 | Testimonials | 💬 | No | More | No | #ffffff |
| 9 | Social Media | 🔗 | No | More | No | #ffffff |
| 10 | Call to Action | 🎯 | No | More | No | #2563eb (blue) |
| 11 | Skills & Expertise | 🎓 | No | More | No | #f9fafb (light gray) |
| 12 | Pricing Plans | 💰 | No | More | Yes (Plans) | #ffffff |
| 13 | FAQ | ❓ | No | More | Yes (Questions) | #f9fafb (light gray) |
| 14 | Statistics | 📊 | No | More | Yes (Stats) | #1e40af (dark blue) |
| 15 | Gallery | 🖼️ | No | More | No | #ffffff |
| 16 | Clients & Partners | 🤝 | No | More | No | #f9fafb (light gray) |
| 17 | Awards | 🏆 | No | More | Yes (Awards) | #fffbeb (cream) |
| 18 | Video | 🎥 | No | More | No | #000000 (black) |
| 19 | Features | ✨ | No | More | Yes (Features) | #ffffff |
| 20 | Process | 🔄 | No | More | Yes (Steps) | #f0f9ff (light blue) |

---

## Navigation Modes Summary

### No Navigation (Default)
- All sections stack vertically
- Standard scrolling page
- No tabs or navigation bars

### Tab View
- Sections organized into tabs
- Hero always visible at top
- Tab bar sticky at top of page
- Content switches when tab clicked
- 4 style options: Underline, Pills, Buttons, Boxed

### Top Navigation Bar
- Traditional horizontal menu
- Hero always visible below nav
- Navigation sticky at top
- Content switches when nav item clicked
- 4 style options: Simple, Underline Active, Pills, Bordered

### Bottom Navigation Bar
- Mobile-style bottom menu
- Hero always visible at top
- Navigation sticky at bottom
- Content switches when nav item clicked
- 4 style options: Simple, Underline Active, Pills, Bordered

---

## Dynamic Items Feature

Six sections support dynamic items (add/remove multiple entries):

1. **Pricing Plans** - Add multiple pricing tiers
2. **FAQ** - Add multiple Q&A pairs
3. **Statistics** - Add multiple stat counters
4. **Awards** - Add multiple awards
5. **Features** - Add multiple feature cards
6. **Process** - Add multiple process steps

**How it works:**
- Click "+ Add [Type]" button in Info tab
- New form fields appear for that item
- Each item has "✕ Remove" button
- Changes update preview in real-time

---

## Component Architecture

All sections use a component-based architecture with separate JavaScript files:

**Location:** `/components/[name].component.js`

Each component defines:
- `name` - Display name with emoji
- `allowMultiple` - Whether multiple instances allowed
- `info` - HTML for Info tab (can be function for dynamic sections)
- `style` - HTML for Style tab
- `render(data, style, globalStyles)` - Function to generate preview HTML

**Dynamic Templates:** `/components/dynamic-templates.js`
Contains templates for repeating items (pricing plans, FAQs, etc.)

---

## Default Sections on Page Load

When business-portfolio.html loads, these sections are automatically added:

1. **Page Layout** (required, cannot be removed)
2. **Hero Banner** (required, cannot be removed)
3. **About Us**
4. **Services**
5. **Contact**

Users can then add more sections using the "+ Add Section" button.

---

## Color Scheme

**Primary Colors:**
- Blue-600 to Cyan-600 gradient (header, buttons)
- Primary: #9333ea (purple)
- Secondary: #ec4899 (pink)

**Section Backgrounds (Defaults):**
- White: #ffffff
- Light Blue: #eff6ff / #f0f9ff
- Light Gray: #f9fafb
- Dark Blue: #1e40af
- Cream: #fffbeb
- Black: #000000

---

## Preview Devices

**Mobile Frame:** 375px × 667px
**Tablet Frame:** 768px × 1024px

Toggle between devices using preview controls.

---

## File References

- **Main Template:** `/business-portfolio.html:1-1425`
- **Components Directory:** `/components/`
- **Layout Component:** `/components/layout.component.js:1-253`
- **Hero Component:** `/components/hero.component.js:1-47`
- **Other Components:** 18 additional `.component.js` files
- **Dynamic Templates:** `/components/dynamic-templates.js`
- **Components Loader:** `/components/components-loader.js`

---

## Notes

- All sections except Layout and Hero can be removed
- Navigation assignment only appears when navigation is enabled
- Global styles from Layout section apply to entire preview
- Preview updates in real-time as fields are edited
- Images use data URLs (base64 encoded)
- QR code generation is placeholder (not functional)

---

**End of Documentation**
