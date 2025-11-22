# Business Portfolio Creator

## Purpose

Business Portfolio Creator is a focused web-based platform for creating beautiful, customized digital business portfolios and professional showcase pages. The application empowers users to design professional-looking portfolio websites without any coding knowledge through an intuitive visual editor with real-time preview.

## Project Overview

This is a **single-template application** focused exclusively on creating business portfolios. Previously a multi-template invitation generator, the project was streamlined in November 2025 (PR #97) to focus solely on the Business Portfolio use case.

### Template: Business Portfolio

A comprehensive professional portfolio builder with 18 specialized section types:

**Core Business Sections:**
- **💼 Hero Banner** - Eye-catching landing section with business headline
- **ℹ️ About Event** - Company or professional background information
- **⚙️ Services** - Service offerings and capabilities
- **🎓 Skills & Expertise** - Professional skills showcase
- **📁 Portfolio** - Work samples and project showcases
- **📊 Case Study** - Detailed project case studies
- **👥 Team** - Team member profiles
- **🏆 Awards** - Recognition and achievements
- **📊 Statistics** - Key metrics and accomplishments

**Engagement Sections:**
- **💰 Pricing Plans** - Service packages and pricing tiers
- **🔄 Process** - Work methodology and workflow
- **✨ Features** - Product or service features
- **🎥 Video** - Video content embedding
- **🖼️ Gallery** - Image galleries and photo showcases
- **💬 Testimonials** - Client reviews and feedback
- **🤝 Clients & Partners** - Client logos and partnerships

**Utility Sections:**
- **📞 Contact** - Contact forms and information
- **🔗 Social Media** - Social media links and profiles
- **❓ FAQ** - Frequently asked questions
- **🎯 Call to Action** - Conversion-focused sections
- **🎨 Page Layout** - Navigation configuration (tabs, top nav, bottom nav, or single-page)

## Key Features

### 1. Info/Style Tabs Pattern

Each section follows a dual-tab architecture:

- **Info Tab**: Form fields for entering content data (names, descriptions, links, etc.)
- **Style Tab**: Customization options for visual appearance (colors, fonts, layouts)

This separation allows users to focus on content first, then customize styling without confusion.

### 2. Dynamic Section Management

- Add/remove sections on-the-fly
- Drag-and-drop reordering capability (visual affordance provided)
- 18 specialized section types optimized for business portfolios
- Real-time preview updates as sections are added or modified

### 3. Live Preview

- Split-screen editor/preview interface
- Device preview modes (mobile: 375px / tablet: 768px)
- Instant visual feedback for all changes
- Fullscreen preview option

### 4. Responsive Design

- Mobile-first approach using Tailwind CSS
- Adaptive layouts for all screen sizes
- Device-specific preview frames for mobile and tablet testing

### 5. Publishing & Sharing

- QR code generation for easy sharing
- URL copying functionality
- Publish workflow simulation

### 6. Advanced Navigation

The Business Portfolio template supports multiple navigation modes:
- **Tab View** - Multi-page tabbed interface
- **Top Navigation Bar** - Traditional horizontal menu
- **Bottom Navigation Bar** - Mobile-style bottom menu
- **No Navigation** - Single-page scrolling layout

## Technical Architecture

### Technology Stack

- **Frontend Framework**: Pure HTML5 + JavaScript (ES6+)
- **CSS Framework**: Tailwind CSS (via CDN)
- **Build System**: None required - static HTML files
- **Dependencies**: Zero npm dependencies - completely self-contained
- **Architecture**: Component-based with modular JavaScript files

### File Structure

```
/
├── index.html                          # Landing page
├── business-portfolio.html             # Portfolio builder (1,429 lines)
│
├── CLAUDE.md                           # This documentation file
├── COMPONENTS.md                       # Component system documentation
├── README.md                           # Minimal project readme
│
└── components/                         # Component-based architecture
    ├── README.md                       # Component directory documentation
    ├── components-loader.js            # Auto-registration loader
    ├── dynamic-templates.js            # Templates for repeating items
    │
    ├── Shared Components (17 files, ~6,000 lines)
    ├── about.component.js              # About/background sections
    ├── awards.component.js             # Awards and recognition
    ├── casestudy.component.js          # Case study sections
    ├── clients.component.js            # Client logos and partnerships
    ├── contact.component.js            # Contact forms
    ├── cta.component.js                # Call to action sections
    ├── faq.component.js                # FAQ sections
    ├── features.component.js           # Feature showcases
    ├── gallery.component.js            # Photo galleries
    ├── layout.component.js             # Navigation configuration
    ├── portfolio.component.js          # Portfolio/work showcases
    ├── pricing.component.js            # Pricing tables
    ├── process.component.js            # Process/workflow sections
    ├── services.component.js           # Service listings
    ├── skills.component.js             # Skills showcases
    ├── social.component.js             # Social media links
    ├── stats.component.js              # Statistics displays
    ├── team.component.js               # Team member profiles
    ├── testimonials.component.js       # Client testimonials
    └── video.component.js              # Video embedding
    │
    └── business/                       # Business-specific components
        └── hero.component.js           # Hero banner section (~29KB)
```

### Architecture Pattern

The application uses a **fully component-based architecture** where all sections are defined in separate `.component.js` files.

#### HTML Structure

```html
<header>                    <!-- Sticky navigation bar -->
<div class="flex">
  <div class="left-panel">  <!-- Editor interface -->
    <div id="sectionsContainer">
      <!-- Dynamic sections added here -->
    </div>
    <button>Add Section</button>
  </div>
  <div class="right-panel">  <!-- Live preview -->
    <div id="previewContent">
      <!-- Preview renders here -->
    </div>
  </div>
</div>
<div id="sectionModal">    <!-- Section selection modal -->
<div id="qrModal">         <!-- QR code modal -->
```

#### JavaScript Core Functions

Essential functions in `business-portfolio.html`:

```javascript
// Modal Management
openSectionModal()      // Show section picker
closeSectionModal()     // Hide section picker

// Section Management
addSection(type)        // Add new section by type
removeSection(id)       // Delete section by ID
switchTab(event, id, tab)  // Toggle Info/Style tabs

// Data Management
getSectionData(section) // Extract data and style from section
updatePreview()         // Regenerate preview HTML

// Utilities
handleImageUpload(input)   // Process image uploads
setDevice(device)          // Switch preview device
previewFullscreen()        // Open fullscreen preview
generateQR()               // Show QR code modal
copyUrl()                  // Copy share URL to clipboard
publishProject()           // Publish workflow
```

#### Component Structure

Each component file follows this pattern:

```javascript
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.sectionname = {
    name: '🎯 Display Name',      // Section name with emoji
    allowMultiple: true,           // or false if only one allowed

    info: (sectionId) => `         // Info tab HTML (function)
        <div>
            <label>Field Name</label>
            <input id="${sectionId}-fieldName" />
        </div>
    `,

    style: `                       // Style tab HTML (string)
        <div>
            <label>Color</label>
            <input type="color" />
        </div>
    `,

    render: (data, style) => `     // Preview HTML generator
        <div>
            ${data.fieldName || 'Default content'}
        </div>
    `
};
```

### Component Loading System

Components are loaded via the `components-loader.js` script:

1. **Auto-Registration**: Components register themselves to `window.sectionComponents`
2. **Loader Script**: Executed after all component scripts load
3. **Template Assignment**: Main app assigns components to `sectionTemplates`
4. **Section Modal**: Automatically populated with available sections

### Dynamic Items System

For sections with repeating elements (pricing tiers, FAQ items, team members):

1. **Template Definition**: Add to `components/dynamic-templates.js`
2. **Add Button**: Use `addDynamicItem()` in Info tab
3. **Data Collection**: Loop through items in render function
4. **Example**: See `pricing.component.js` or `faq.component.js`

### Color Scheme

The Business Portfolio template uses a **Blue-600 to Cyan-600 gradient** for brand consistency throughout the interface.

## Design Principles

### 1. Simplicity

Clean, uncluttered interface focusing on content creation rather than complex configuration options.

### 2. Immediate Feedback

Every user action results in instant visual feedback through the live preview panel.

### 3. Progressive Disclosure

Advanced styling options are separated into Style tabs, preventing information overload for new users.

### 4. Mobile-First

All designs prioritize mobile viewing experience, reflecting how most visitors will view portfolios.

### 5. Professional Quality

Section templates designed to create portfolio pages that look professionally crafted.

## Usage Workflow

### For Users

1. **Open Editor**: Navigate to `business-portfolio.html`
2. **Add Sections**: Click "Add Section" to open section picker
3. **Enter Content**: Fill in Info tab fields with business details
4. **Customize Style**: Switch to Style tab to adjust colors and appearance
5. **Configure Layout**: Add Layout section to choose navigation style
6. **Preview**: View real-time preview in mobile/tablet frames
7. **Publish**: Generate QR code and publish portfolio

### For Developers

#### Adding a New Section Component

```bash
# 1. Create component file
touch components/newsection.component.js

# 2. Implement component following pattern
# (Add window.sectionComponents.newsection with name, allowMultiple, info, style, render)

# 3. Add script tag to business-portfolio.html BEFORE components-loader.js
# <script src="components/newsection.component.js"></script>

# 4. Test in browser - verify:
# - Section appears in modal
# - Info/Style tabs work
# - Preview renders correctly
```

#### Modifying Existing Components

```bash
# 1. Locate component file in components/
# 2. Edit the component object (info, style, or render)
# 3. Refresh browser to see changes
# 4. Test thoroughly
```

#### Working with Dynamic Items

```bash
# 1. Define item template in components/dynamic-templates.js
# 2. Add "Add Item" button in component's info tab
# 3. Collect items in render function:
#    const items = Array.from(section.querySelectorAll('.dynamic-item'))
# 4. Loop and render each item
```

## Browser Compatibility

- Chrome 90+ (recommended)
- Firefox 88+
- Safari 14+
- Edge 90+

Requires JavaScript enabled and modern ES6+ support.

## File Sizes

- **business-portfolio.html**: 1,429 lines (~74KB)
- **index.html**: Landing page (~23KB)
- **Components**: 18 component files totaling ~6,822 lines
- **Total Codebase**: ~8,251 lines

## Development Workflows

### Debugging Tips

1. **Section Not Appearing in Modal**:
   - Check component file has correct syntax
   - Verify script tag is before `components-loader.js`
   - Check browser console for syntax errors
   - Verify component registers to `window.sectionComponents`

2. **Preview Not Updating**:
   - Check `getSectionData()` is reading form fields correctly
   - Verify input field IDs match pattern: `${sectionId}-fieldName`
   - Check render function is returning valid HTML
   - Look for JavaScript errors in console

3. **Styling Not Applying**:
   - Verify Tailwind CDN is loaded (check Network tab)
   - Check class names are valid Tailwind classes
   - Ensure no typos in class names
   - Test in incognito mode (rules out cache issues)

4. **Image Upload Not Working**:
   - Check input `type="file"` has `onchange="handleImageUpload(this)"`
   - Verify data URL is being captured in `getSectionData`
   - Check render function handles data URL in `img src`
   - Ensure preview updates after upload

### Understanding Data Flow

1. **User Input** → Info/Style Tab Form Fields
2. **Form Fields** → Captured by `getSectionData(section)` function
3. **Section Data** → Passed to section's `render(data, style)` function
4. **Rendered HTML** → Inserted into preview panel
5. **Preview Panel** → Wrapped in device mockup (mobile/tablet)

Key functions in this flow:
- `getSectionData(section)`: Extracts all form field values from a section
- `updatePreview()`: Loops through all sections, calls getSectionData + render for each
- Section's `render(data, style)`: Generates HTML using data and style parameters

### Common Development Tasks

#### Task 1: Add a New Section Component

```javascript
// 1. Create file: components/announcement.component.js
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.announcement = {
    name: '📢 Announcement',
    allowMultiple: true,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium mb-2">Title</label>
                <input type="text" id="${sectionId}-title"
                    class="w-full px-4 py-2 border rounded-lg"
                    placeholder="Important Update">
            </div>
            <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea id="${sectionId}-message"
                    class="w-full px-4 py-2 border rounded-lg"
                    rows="4"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium mb-2">Background Color</label>
                <input type="color" id="style-bgColor" value="#f3f4f6"
                    class="w-full h-10 rounded-lg">
            </div>
        </div>
    `,

    render: (data, style) => {
        const bgColor = style.bgColor || '#f3f4f6';
        return `
            <div class="p-6" style="background-color: ${bgColor}">
                <h3 class="text-2xl font-bold mb-4">${data.title || 'Announcement'}</h3>
                <p class="text-gray-700">${data.message || 'Your message here'}</p>
            </div>
        `;
    }
};

// 2. Add script tag to business-portfolio.html before components-loader.js:
// <script src="components/announcement.component.js"></script>

// 3. Refresh browser - section appears automatically in modal
```

#### Task 2: Add Dynamic Items to a Section

```javascript
// Example: Adding team members to a team section
render: (data, style) => {
    // Find all team member items in the section
    const section = document.getElementById(data.sectionId);
    const memberElements = section?.querySelectorAll('.team-member-item') || [];

    let membersHtml = '';
    memberElements.forEach(item => {
        const name = item.querySelector('[id$="-name"]')?.value || '';
        const role = item.querySelector('[id$="-role"]')?.value || '';
        const photo = item.querySelector('[id$="-photo"]')?.getAttribute('data-image-url') || '';

        membersHtml += `
            <div class="text-center">
                <img src="${photo}" alt="${name}" class="w-24 h-24 rounded-full mx-auto mb-2">
                <h4 class="font-bold">${name}</h4>
                <p class="text-sm text-gray-600">${role}</p>
            </div>
        `;
    });

    return `<div class="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">${membersHtml}</div>`;
}
```

#### Task 3: Modify Navigation Styles

The Layout component (`components/layout.component.js`) controls navigation. To customize:

1. Open `components/layout.component.js`
2. Find the `render` function
3. Modify navigation HTML/styles for different modes
4. Test all 4 navigation modes (tabs, top nav, bottom nav, none)

## AI Assistant Guidelines

### Overview for AI Assistants

When working with this codebase, you are maintaining a **focused single-template application** with:
- **1 portfolio builder template** (business-portfolio.html)
- **18 section components** across shared and business-specific directories
- **Component-based architecture** with all sections in separate `.component.js` files
- **No build system** - all files must work directly in browsers
- **~8,251 lines total** (manageable and maintainable)

### Critical Principles

1. **Simplicity**: Keep the focused nature of the app - don't over-engineer
2. **Mobile-First**: Most users view portfolios on mobile devices
3. **Zero Dependencies**: No npm packages - only CDN resources (Tailwind CSS)
4. **Self-Contained**: HTML files must work independently when opened in a browser
5. **Component Consistency**: All components follow the same pattern

### When Adding Features

1. **Choose Component Location**:
   - Shared component (used across business types): `components/sectionname.component.js`
   - Business-specific component: `components/business/sectionname.component.js`

2. **Follow Component Pattern**:
   ```javascript
   window.sectionComponents.sectionname = {
       name: '🎯 Display Name',
       allowMultiple: true/false,
       info: (sectionId) => `...`,  // Info tab HTML
       style: `...`,                 // Style tab HTML
       render: (data, style) => `...` // Preview rendering
   };
   ```

3. **Maintain Consistency Checklist**:
   - [ ] Use Blue/Cyan gradient colors
   - [ ] Include emoji in section name
   - [ ] Use camelCase for data field names
   - [ ] Include both Info and Style tabs
   - [ ] Test real-time preview updates
   - [ ] Verify mobile responsiveness (375px width)
   - [ ] Handle empty/missing data gracefully
   - [ ] Add script tag before `components-loader.js`

4. **Update Documentation**:
   - Update section count in CLAUDE.md if adding new sections
   - Document major features in component README if needed

### When Fixing Bugs

1. **Scope Assessment**:
   - Shared component: Affects business-portfolio.html
   - Main HTML: Only affects the single template
   - Component loader: Affects entire app initialization

2. **Testing Checklist**:
   - [ ] Test in Chrome, Firefox, Safari
   - [ ] Test mobile preview (375px)
   - [ ] Test tablet preview (768px)
   - [ ] Test fullscreen preview
   - [ ] Verify Info tab data capture
   - [ ] Verify Style tab controls work
   - [ ] Check browser console for errors
   - [ ] Test with empty/missing fields

3. **Common Bug Locations**:
   - Image upload: `handleImageUpload()` function
   - Preview rendering: `updatePreview()` function
   - Section management: `addSection()` / `removeSection()` functions
   - Modal behavior: `openSectionModal()` / `closeSectionModal()`
   - Component loading: `components-loader.js`

### Code Search Patterns

```bash
# Find all component files
ls components/*.component.js components/business/*.component.js

# Search for a pattern across all components
grep -r "pattern" components/

# Count sections available
grep -o "name: '" components/*.component.js | wc -l

# Check component registration
grep "window.sectionComponents" components/*.component.js

# View component loader
cat components/components-loader.js
```

### Naming Conventions

- **Template**: `kebab-case.html` (business-portfolio.html)
- **Components**: `name.component.js` (hero.component.js)
- **Section IDs**: `section-{counter}` (section-1, section-2)
- **Section Types**: lowercase (hero, about, contact)
- **Data Fields**: camelCase (companyName, tagline, description)

### Performance Considerations

1. **File Sizes**:
   - Main template: 1,429 lines (~74KB) - very manageable
   - Largest component: hero.component.js (~29KB)
   - Total components: ~6,822 lines

2. **Browser Performance**:
   - Preview updates on every keystroke (debounced recommended)
   - Image uploads create data URLs (can slow with large images)
   - Component loaders execute synchronously at page load

3. **Optimization Guidelines**:
   - Avoid heavy external dependencies
   - Use Tailwind classes vs inline styles
   - Minimize DOM manipulation in render functions
   - Consider debouncing preview updates for better UX

### Git Workflow

Based on repository history:

```bash
# Feature branches follow pattern: claude/<description>-<session-id>
# Example: claude/limit-app-business-portfolio-01HWixBFJnmWp1sWL18XgXQ3

# Commit messages are descriptive:
# "Add new testimonials section to business portfolio"
# "Fix image upload handling in gallery component"
# "Update navigation styles for mobile devices"

# PRs are merged via pull request (never direct to main)
# Clean up branches after merge
```

## Project History

### Evolution Timeline

1. **Phase 1-6** (Pre-November 2025): Multi-template invitation generator
   - Started with 12 event invitation templates
   - Grew to 20 templates (13 events + 6 greeting cards + 1 landing)
   - 290+ total sections across all templates
   - 317+ component files
   - Component-based architecture development

2. **Phase 7** (November 2025 - PR #97): **Focus Shift to Business Portfolio**
   - **Major Simplification**: Removed all templates except Business Portfolio
   - Reduced from 20 templates to 1 focused template
   - Reduced from 317+ components to 18 focused components
   - From 87,000+ lines to ~6,800 lines of component code
   - Maintained component-based architecture
   - Streamlined for better maintainability and focus

### Why the Change?

The application was refocused to serve a single, well-defined purpose: **creating professional business portfolios**. This allows for:
- Better user experience with a focused feature set
- Easier maintenance with less code to manage
- Faster development of new portfolio-specific features
- Clearer value proposition

## Current State (November 2025)

### Recent Development

- **PR #97** (November 22, 2025): Removed all templates except Business Portfolio
  - Deleted 18 template HTML files
  - Removed 299+ template-specific components
  - Kept 18 business-relevant components
  - Updated landing page to focus on business portfolio use case
  - Streamlined documentation

### Application Statistics

- **Templates**: 1 (Business Portfolio)
- **HTML Files**: 2 (index.html + business-portfolio.html)
- **Component Files**: 18 total
  - 17 shared business components
  - 1 business-specific hero component
- **Total Sections**: 18 section types
- **Total Code**: ~8,251 lines (1,429 HTML + ~6,822 components)
- **Architecture**: Fully component-based
- **Dependencies**: Zero (Tailwind CSS via CDN only)

### Available Sections

All 18 sections are production-ready and fully tested:

| Component | File | Purpose |
|-----------|------|---------|
| 💼 Hero Banner | business/hero.component.js | Landing section |
| ℹ️ About Event | about.component.js | Background info |
| ⚙️ Services | services.component.js | Service listings |
| 🎓 Skills & Expertise | skills.component.js | Skills showcase |
| 📁 Portfolio | portfolio.component.js | Work samples |
| 📊 Case Study | casestudy.component.js | Project details |
| 👥 Team | team.component.js | Team profiles |
| 🏆 Awards | awards.component.js | Recognition |
| 📊 Statistics | stats.component.js | Key metrics |
| 💰 Pricing Plans | pricing.component.js | Service pricing |
| 🔄 Process | process.component.js | Workflow |
| ✨ Features | features.component.js | Feature lists |
| 🎥 Video | video.component.js | Video embeds |
| 🖼️ Gallery | gallery.component.js | Photo galleries |
| 💬 Testimonials | testimonials.component.js | Reviews |
| 🤝 Clients & Partners | clients.component.js | Client logos |
| 📞 Contact | contact.component.js | Contact forms |
| 🔗 Social Media | social.component.js | Social links |
| ❓ FAQ | faq.component.js | FAQs |
| 🎯 Call to Action | cta.component.js | CTAs |
| 🎨 Page Layout | layout.component.js | Navigation config |

## Future Enhancement Opportunities

### Potential Features

- **Template Variations**: Different visual themes for the portfolio
- **Export Options**: PDF portfolio export, image export
- **Real QR Generation**: Actual QR code creation (currently placeholder)
- **Form Validation**: Enhanced input validation
- **Local Storage**: Auto-save work-in-progress
- **Accessibility**: Enhanced ARIA labels and keyboard navigation
- **Backend Integration**: Save portfolios to database
- **User Accounts**: Multi-user support with saved projects
- **Analytics**: Portfolio view tracking
- **Custom Domain**: Publish to custom domain

### Technical Improvements

- **TypeScript**: Add type safety
- **Testing**: Unit tests for components
- **Build Pipeline**: Optional optimization
- **PWA**: Offline support
- **State Management**: For complex interactions
- **Animation Library**: Advanced transitions
- **SEO Optimization**: Better meta tags and structure

## Quick Reference

### Essential Files

```
business-portfolio.html     # Main template editor
index.html                 # Landing page
components/                # All section components
  ├── components-loader.js # Auto-loader
  ├── layout.component.js  # Navigation
  ├── business/           # Business-specific
  └── [16 shared components]
```

### Key Functions

```javascript
// In business-portfolio.html
addSection(type)           // Add a section
removeSection(id)          // Remove a section
updatePreview()            // Refresh preview
getSectionData(section)    // Extract section data
handleImageUpload(input)   // Handle image uploads
```

### Component Template

```javascript
window.sectionComponents.name = {
    name: '🎯 Name',
    allowMultiple: true,
    info: (sectionId) => `HTML`,
    style: `HTML`,
    render: (data, style) => `HTML`
};
```

### Color Palette

- **Primary Gradient**: Blue-600 (#2563eb) to Cyan-600 (#0891b2)
- **Use in**: Headers, buttons, accents
- **Background**: Gray-50 (#f9fafb)
- **Cards**: White (#ffffff)

## Related Documentation

- **COMPONENTS.md** - Detailed component API documentation
- **components/README.md** - Component directory structure guide
- **README.md** - Minimal project overview

## Support & Contribution

For questions or contributions, please refer to the project repository guidelines.

---

**Last Updated:** 2025-11-22
**Project:** Business Portfolio Creator
**Version:** 2.0 (Focused Edition)
**Template:** 1 (Business Portfolio)
**Sections:** 18 professional portfolio sections
**Architecture:** Component-based (18 modular components)
**Total Code:** ~8,251 lines
**Dependencies:** Zero (Tailwind CSS CDN only)
