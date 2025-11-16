# InviteGen - Digital Invitation & Greeting Card Generator

## Purpose

InviteGen is a comprehensive web-based platform for creating beautiful, customized digital invitations, greeting cards, and portfolios for various life events and business purposes. The application empowers users to design professional-looking invitations and cards without any coding knowledge through an intuitive visual editor with real-time preview.

## Project Overview

InviteGen provides **20 specialized template editors** across two main categories:

### Category 1: Event Invitations & Portfolios (13 Templates)

Full-featured invitation and portfolio builders with advanced navigation options:

- **Wedding Invitation** - Elegant wedding announcements with ceremony details
- **Birthday Wishes** - Celebratory birthday party invitations
- **Business Portfolio** - Professional business showcase pages
- **Baby Shower** - Sweet baby shower celebration invites
- **Event Invitation** - Generic event invitations for any occasion
- **Engagement Announcement** - Romantic engagement announcements
- **Birth Announcement** - Joyful new baby announcements
- **Anniversary Wishes** - Milestone anniversary celebrations
- **Graduation Ceremony** - Academic achievement announcements
- **Housewarming Party** - New home celebration invites
- **Retirement Celebration** - Career milestone celebrations
- **Farewell Party** - Goodbye and send-off event invites
- **Conference & Seminar** - Professional event pages for conferences and seminars

### Category 2: Greeting Cards (6 Templates)

Simplified card creators optimized for direct sharing:

- **Birthday Greeting Card** - Simple birthday wishes cards
- **Thank You Card** - Express gratitude with style
- **Love & Romance Card** - Romantic messages and love letters
- **Holiday Greetings Card** - Seasonal holiday wishes
- **Congratulations Card** - Celebrate achievements
- **Get Well Soon Card** - Send healing wishes

## Key Features

### 1. Info/Style Tabs Pattern

Each section in every template follows a dual-tab architecture:

- **Info Tab**: Contains form fields for entering content data (names, dates, messages, etc.)
- **Style Tab**: Provides customization options for visual appearance (colors, fonts, layouts)

This separation allows users to focus on content first, then customize styling without confusion.

### 2. Dynamic Section Management

- Add/remove sections on-the-fly
- Drag-and-drop reordering (visual affordance provided)
- Each template offers 9 specialized section types
- Real-time preview updates as sections are added or modified

### 3. Live Preview

- Split-screen editor/preview interface
- Device preview modes (mobile/tablet)
- Instant visual feedback for all changes
- Fullscreen preview option

### 4. Responsive Design

- Mobile-first approach using Tailwind CSS
- Adaptive layouts for all screen sizes
- Device-specific preview frames (375px mobile, 768px tablet)

### 5. Publishing & Sharing

- QR code generation for easy sharing
- URL copying functionality
- Publish workflow simulation

### 6. Advanced Navigation (Event Invitations & Portfolios)

Full-featured templates support multiple navigation modes:
- **Tab View** - Multi-page tabbed interface
- **Top Navigation Bar** - Traditional horizontal menu
- **Bottom Navigation Bar** - Mobile-style bottom menu
- **No Navigation** - Single-page scrolling layout

### 7. Simplified Creation (Greeting Cards)

Card templates are streamlined for quick creation:
- Fewer sections (3-5 vs 9)
- Direct sharing focus
- Faster editing workflow
- Perfect for casual greetings

## Technical Architecture

### Technology Stack

- **Frontend Framework**: Pure HTML5 + JavaScript (ES6+)
- **CSS Framework**: Tailwind CSS (via CDN)
- **Build System**: None required - static HTML files
- **Dependencies**: Zero npm dependencies - completely self-contained

### File Structure

```
/
├── index.html                          # Landing page with template grid
│
├── CLAUDE.md                           # This documentation file
├── COMPONENTS.md                       # Components system documentation
├── MIGRATION_EXAMPLE.md                # Migration guide
├── README.md                           # Project readme
│
├── components.js                       # Reusable components library
├── components/                         # Component-based architecture (experimental)
│   ├── README.md                       # Components directory documentation
│   ├── dynamic-templates.js            # Templates for dynamic items
│   ├── components-loader.js            # Component loader script
│   ├── layout.component.js             # Layout component
│   ├── hero.component.js               # Hero section component
│   ├── about.component.js              # About section component
│   ├── pricing.component.js            # Pricing section component
│   ├── faq.component.js                # FAQ section component
│   ├── [20+ component files]           # Other reusable components
│   │
│   ├── farewell/                       # Farewell party components
│   │   ├── README.md
│   │   ├── components-loader.js
│   │   └── [10 component files]
│   ├── graduation/                     # Graduation components
│   │   ├── components-loader.js
│   │   └── [10 component files]
│   ├── birthday/                       # Birthday components
│   ├── event/                          # Event components
│   ├── greeting-card/                  # Greeting card components
│   └── wedding/                        # Wedding components
│
├── EVENT INVITATIONS & PORTFOLIOS (Full-Featured)
├── wedding-invitation.html             # Wedding template editor
├── birthday-wishes.html                # Birthday party invitation editor
├── business-portfolio.html             # Business showcase editor
├── baby-shower.html                    # Baby shower invitation editor
├── event-invitation.html               # Generic event invitation editor
├── engagement-announcement.html        # Engagement announcement editor
├── birth-announcement.html             # Birth announcement editor
├── anniversary-wishes.html             # Anniversary celebration editor
├── graduation-ceremony.html            # Graduation announcement editor
├── housewarming-party.html             # Housewarming invitation editor
├── retirement-celebration.html         # Retirement celebration editor
├── farewell-party.html                 # Farewell party invitation editor
├── conference-seminar.html             # Conference & seminar editor
│
├── GREETING CARDS (Simplified)
├── birthday-greeting-card.html         # Birthday card editor
├── thank-you-card.html                 # Thank you card editor
├── love-romance-card.html              # Love & romance card editor
├── holiday-greetings-card.html         # Holiday greetings card editor
├── congratulations-card.html           # Congratulations card editor
└── get-well-soon-card.html             # Get well soon card editor
```

### Common Architecture Pattern

All template editors follow an identical structure:

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

Each template includes these essential functions:

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

#### Section Templates Object

Each template has a `sectionTemplates` object defining available sections:

```javascript
const sectionTemplates = {
  sectionType: {
    name: '🎉 Section Name',
    allowMultiple: true,  // or false if only one instance allowed
    info: `<div>...HTML for Info tab...</div>`,
    style: `<div>...HTML for Style tab...</div>`,
    render: (data, style) => `<div>...Preview HTML...</div>`
  },
  // ... 8 more sections
};
```

### Reusable Components System

The `components.js` library provides reusable web components:

#### 1. PhoneMockup Component

A customizable device preview frame:

```html
<phone-mockup device="mobile">
    <div id="previewContent">
        <!-- Preview content -->
    </div>
</phone-mockup>
```

#### 2. NavigationHelpers

Functions for generating navigation bars:
- `generateTabNavigation()` - Tab-style navigation
- `generateTopNavigation()` - Top navigation bar
- `generateBottomNavigation()` - Bottom navigation bar
- `generateTabContentContainers()` - Tab content wrappers
- `generateNavContentContainers()` - Nav content wrappers

#### 3. LayoutSettingsGenerator

Pre-built layout configuration UI:
- `generateLayoutInfoTab()` - Navigation type selection
- `generateLayoutStyleTab()` - Navigation styling options

**Documentation:**
- See `COMPONENTS.md` for full API documentation
- See `MIGRATION_EXAMPLE.md` for migration guide

### Component-Based Architecture (Experimental)

Some templates are being migrated to a component-based architecture:

**Structure:**
```javascript
// Each component is a separate .js file
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎯 Hero Section',
    allowMultiple: false,
    info: (sectionId) => `...`,
    style: `...`,
    render: (data, style) => `...`
};
```

**Benefits:**
- Better code organization
- Easier maintenance
- Component reusability across templates
- Isolated testing

**Status:**
- ✅ farewell-party.html - Fully migrated
- ✅ graduation-ceremony.html - Fully migrated
- ⏳ business-portfolio.html - In progress
- ⏳ Other templates - Planned

### Color Schemes

Each template uses a distinct gradient for brand consistency:

| Template | Gradient Colors |
|----------|----------------|
| **Event Invitations & Portfolios** |
| Wedding Invitation | Blue-600 to Cyan-600 |
| Birthday Wishes | Pink-600 to Rose-600 |
| Business Portfolio | Blue-600 to Cyan-600 |
| Baby Shower | Yellow-400 to Amber-600 |
| Event Invitation | Green-600 to Emerald-600 |
| Engagement Announcement | Rose-600 to Pink-600 |
| Birth Announcement | Teal-400 to Teal-600 |
| Anniversary Wishes | Red-500 to Red-700 |
| Graduation Ceremony | Indigo-500 to Indigo-700 |
| Housewarming Party | Orange-500 to Orange-700 |
| Retirement Celebration | Cyan-500 to Cyan-700 |
| Farewell Party | Violet-500 to Violet-700 |
| Conference & Seminar | Teal-600 to Emerald-600 |
| **Greeting Cards** |
| Birthday Greeting Card | Pink-400 to Rose-500 |
| Thank You Card | Blue-500 to Indigo-600 |
| Love & Romance Card | Rose-400 to Pink-500 |
| Holiday Greetings Card | Red-500 to Green-600 |
| Congratulations Card | Amber-500 to Orange-600 |
| Get Well Soon Card | Teal-400 to Cyan-500 |

## Design Principles

### 1. Consistency

All templates follow the exact same interaction patterns, making it easy for users to switch between different event types without learning new interfaces.

### 2. Simplicity

Clean, uncluttered interface focusing on content creation rather than complex configuration options.

### 3. Immediate Feedback

Every user action results in instant visual feedback through the live preview panel.

### 4. Progressive Disclosure

Advanced styling options are separated into Style tabs, preventing information overload for new users.

### 5. Mobile-First

All designs prioritize mobile viewing experience, reflecting how most recipients will view invitations.

### 6. Appropriate Complexity

- **Full Templates**: Advanced navigation options for complex multi-page invitations
- **Card Templates**: Simplified interface for quick greeting card creation

## Usage Workflow

### For Users

1. **Choose Template**: Select from 20 templates on landing page
2. **Add Sections**: Click "Add Section" to open section picker
3. **Enter Content**: Fill in Info tab fields with event details
4. **Customize Style**: Switch to Style tab to adjust colors and appearance
5. **Configure Layout** (Event Invitations): Choose navigation style (tabs, top/bottom nav, or none)
6. **Preview**: View real-time preview in mobile/tablet frames
7. **Publish**: Generate QR code and publish invitation or card

### For Developers

#### Working with Traditional Templates

1. **Local Development**: Open any HTML file directly in browser
2. **No Build Step**: Files are self-contained with CDN dependencies
3. **Customization**: Modify `sectionTemplates` object to add/edit sections
4. **Theming**: Adjust gradient colors in header and button classes

#### Working with Components

1. **Include components.js**: Add `<script src="components.js"></script>`
2. **Use Web Components**: Replace hardcoded HTML with `<phone-mockup>` component
3. **Add Layout Section**: Use `LayoutSettingsGenerator` for navigation configuration
4. **Update Preview Logic**: Implement navigation-aware preview rendering

See `MIGRATION_EXAMPLE.md` for detailed migration steps.

#### Working with Component-Based Templates

1. **Load Components**: Include component scripts before main script
2. **Use Component Loader**: Components auto-register via `components-loader.js`
3. **Add New Components**: Create new `.component.js` files following the pattern
4. **Dynamic Items**: Use `dynamic-templates.js` for repeating elements (pricing, FAQ, etc.)

## Browser Compatibility

- Chrome 90+ (recommended)
- Firefox 88+
- Safari 14+
- Edge 90+

Requires JavaScript enabled and modern ES6+ support.

## File Sizes

**Event Invitations & Portfolios:**
- Average size: 1000-1400 lines (~55-80KB)
- Full-featured with navigation options

**Greeting Cards:**
- Average size: 800-850 lines (~40-45KB)
- Simplified for quick creation

**Components Library:**
- components.js: ~1500 lines (~45KB)
- Individual components: 100-300 lines each

## Development Workflows

### Adding a New Template

1. Copy an existing template from the same category
2. Update colors/gradients to match theme
3. Modify `sectionTemplates` object with new sections
4. Update metadata (title, description, emoji)
5. Add template card to `index.html`
6. Test all features (preview, sections, QR code)

### Migrating to Components System

1. Read `COMPONENTS.md` for API documentation
2. Follow steps in `MIGRATION_EXAMPLE.md`
3. Include `components.js` script
4. Add Layout section with `LayoutSettingsGenerator`
5. Update `updatePreview()` function for navigation support
6. Test all navigation modes

### Creating Reusable Components

1. Create new file: `components/name.component.js`
2. Follow component format:
   ```javascript
   window.sectionComponents.name = {
       name: '🎯 Name',
       allowMultiple: true,
       info: (sectionId) => `...`,
       style: `...`,
       render: (data, style) => `...`
   };
   ```
3. Add script tag to HTML
4. Component auto-registers and appears in section picker

### Using Dynamic Items

For sections with repeating items (pricing, FAQ, team members):

1. Add template to `components/dynamic-templates.js`
2. Use `addDynamicItem()` button in Info tab
3. Collect dynamic items in render function
4. See `pricing.component.js` for example

## AI Assistant Guidelines

### Overview for AI Assistants

When working with this codebase, you are maintaining a **large-scale static HTML application** with:
- **20 template editors** totaling 28,000+ lines of HTML
- **317+ component files** totaling 87,000+ lines of JavaScript
- **290+ customizable sections** across all templates
- **Hybrid architecture** mixing inline sections and external components
- **No build system** - all files must work directly in browsers

### Critical Principles

1. **Consistency is Paramount**: All 20 templates must maintain identical interaction patterns
2. **Mobile-First**: 90%+ of end users view on mobile devices
3. **Zero Dependencies**: No npm packages - only CDN resources (Tailwind CSS)
4. **Self-Contained**: Each HTML file must work independently when opened in a browser
5. **Backward Compatibility**: Never break existing functionality

### When Adding Features

1. **Identify Template Type First**:
   - Event Invitations (13 templates): Need navigation support (tabs/top nav/bottom nav/none)
   - Greeting Cards (6 templates): Simplified, no navigation needed

2. **Choose Architecture Approach**:
   - Component-based templates: Add `.component.js` file in appropriate directory
   - Inline templates: Add section to `sectionTemplates` object in HTML
   - Check template's current architecture before deciding

3. **Follow Component Patterns**:
   ```javascript
   window.sectionComponents.sectionname = {
       name: '🎯 Display Name',
       allowMultiple: true/false,
       info: (sectionId) => `...`,  // Info tab HTML
       style: `...`,                 // Style tab HTML
       render: (data, style) => `...` // Preview rendering
   };
   ```

4. **Maintain Consistency Checklist**:
   - [ ] Use template's color gradient (see Color Schemes table)
   - [ ] Follow existing emoji style in section names
   - [ ] Use camelCase for data field names
   - [ ] Include both Info and Style tabs
   - [ ] Test real-time preview updates
   - [ ] Verify mobile responsiveness
   - [ ] Add to section modal picker
   - [ ] Handle empty/missing data gracefully

5. **Update Documentation**:
   - Update section counts in CLAUDE.md
   - Document new components in IMPLEMENTATION_SUMMARY.md if major change
   - Keep color schemes and template listings current

### When Adding Layout Styles

The project recently added 100+ creative layout styles to greeting cards. When adding layout styles:

1. **Provide Multiple Options**: Aim for 6-12 layout styles per section
2. **Name Descriptively**: Use clear names like "Classic Center", "Modern Split", "Elegant Card"
3. **Use Tailwind Classes**: All styling via Tailwind CSS utility classes
4. **Test Mobile**: Verify layouts work on 375px mobile viewport
5. **Include Variety**: Mix traditional and creative layouts
6. **Document in Style Tab**: Make layout selection clear in UI

Example pattern:
```javascript
const layout = data.layoutStyle || 'default';
const layouts = {
    'default': `<div class="text-center">...</div>`,
    'split': `<div class="grid grid-cols-2">...</div>`,
    'card': `<div class="bg-white rounded-lg shadow-lg">...</div>`,
    // ... 6-12 total options
};
return layouts[layout] || layouts['default'];
```

### When Fixing Bugs

1. **Scope Assessment**:
   - Component-based bug: Check if component is shared across templates
   - Inline bug: Only affects single template
   - Preview bug: May affect all templates (check `updatePreview()` function)

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
   - Image upload handling: `handleImageUpload()` function
   - Preview rendering: `updatePreview()` function
   - Section management: `addSection()` / `removeSection()` functions
   - Modal behavior: `openSectionModal()` / `closeSectionModal()`
   - Navigation rendering: Navigation helper functions in `components.js`

4. **Multi-Template Fixes**:
   - If bug exists in shared component: Fix once, affects all templates using it
   - If bug is in core pattern: May need to fix in all 20 HTML files
   - Use search to find all instances: `grep -r "pattern" *.html`

### When Refactoring

1. **Migration to Components**:
   - Read `MIGRATION_EXAMPLE.md` thoroughly first
   - Create component directory if needed
   - Extract sections one at a time
   - Test after each extraction
   - Keep backup of original HTML
   - Update component loader to include new components

2. **Incremental Approach**:
   ```
   Step 1: Create component file
   Step 2: Test component loads
   Step 3: Verify section appears in modal
   Step 4: Test Info/Style tabs
   Step 5: Test preview rendering
   Step 6: Remove inline section
   Step 7: Full template test
   ```

3. **Do Not Refactor** if:
   - Template works fine as-is
   - No bugs to fix
   - No new features to add
   - User hasn't requested it

4. **Preserve Backups**:
   - Keep `.backup` files indefinitely
   - Create new backup before major refactoring
   - Never delete backups without explicit permission

### File Organization Conventions

- **Templates**: Root directory (`*.html`)
- **Components Library**: `components.js` (shared utilities)
- **Component Files**: `components/` directory (modular sections)
- **Documentation**: `*.md` files in root
- **Backups**: `*.backup` files (preserve during changes)

### Naming Conventions

- **Templates**: `kebab-case.html` (e.g., `birthday-greeting-card.html`)
- **Components**: `name.component.js` (e.g., `hero.component.js`)
- **Section IDs**: `section-{counter}` (e.g., `section-1`)
- **Section Types**: lowercase (e.g., `hero`, `about`, `contact`)
- **Data Fields**: camelCase (e.g., `brideName`, `weddingDate`)
- **Layout Styles**: camelCase (e.g., `classicCenter`, `modernSplit`)
- **Component Directories**: Template-specific subdirectories in `components/` (e.g., `components/wedding/`)

### Code Search Patterns

Common patterns for finding code across templates:

```bash
# Find all templates with a specific section type
grep -l "sectionTemplates.hero" *.html

# Find all uses of a function
grep -r "updatePreview()" *.html

# Find all component files with specific pattern
find components -name "*.component.js" -exec grep -l "allowMultiple: true" {} \;

# Count sections in a template
grep -o "name: '" wedding-invitation.html | wc -l

# Find all templates using component-based architecture
grep -l "components-loader.js" *.html
```

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

### Performance Considerations

1. **File Sizes**:
   - Largest template: `thank-you-card.html` (287KB) - extensive layout options
   - Largest component: Many components 20-30KB due to multiple layout styles
   - Total codebase: ~115MB (manageable without build step)

2. **Browser Performance**:
   - Preview updates on every keystroke (debounced)
   - Image uploads create data URLs (can slow down with many large images)
   - Component loaders execute synchronously at page load

3. **Optimization Guidelines**:
   - Avoid adding heavy external dependencies
   - Keep component files under 50KB when possible
   - Use Tailwind classes instead of inline styles (better caching)
   - Minimize DOM manipulation in render functions

### Git Workflow Patterns

Based on recent commits:

```bash
# Feature branches follow pattern: claude/<descriptive-name>-<session-id>
# Example: claude/improve-card-mockup-styles-0165e26GnKcmzL1ghTQuXgn1

# Commit messages are descriptive with counts:
# "Add 24 creative layout styles to shared greeting card components"
# "Add 48 creative layout styles to get-well-soon-card sections"

# PRs are merged via pull request (never direct to main)
# PR branches are cleaned up after merge
```

Commit guidelines:
- Describe what was added/changed/fixed
- Include counts for sections/components added
- Group related changes in single commit
- Push after completing logical units of work

### Common Development Tasks

#### Task 1: Add a New Section to Component-Based Template

```bash
# 1. Create component file
touch components/wedding/newsection.component.js

# 2. Implement component following pattern
# (Add name, allowMultiple, info, style, render)

# 3. Add script tag to HTML
# <script src="components/wedding/newsection.component.js"></script>

# 4. Update component loader if needed
# (Usually auto-loads if in same directory)

# 5. Test in browser - check:
# - Section appears in modal
# - Info/Style tabs work
# - Preview renders correctly
```

#### Task 2: Add a New Section to Inline Template

```bash
# 1. Open template HTML file
# 2. Find sectionTemplates object
# 3. Add new section:
#    newsection: {
#        name: '🎯 New Section',
#        allowMultiple: true,
#        info: `...`,
#        style: `...`,
#        render: (data, style) => `...`
#    }
# 4. Find section modal
# 5. Add button:
#    <button onclick="addSection('newsection')">
#        🎯 New Section
#    </button>
# 6. Test in browser
```

#### Task 3: Add Layout Styles to Existing Section

```bash
# 1. Open component file or find inline section
# 2. In Style tab, add layout dropdown:
#    <select id="${sectionId}-layoutStyle">
#        <option value="default">Classic Center</option>
#        <option value="split">Modern Split</option>
#        <option value="card">Elegant Card</option>
#        <!-- Add 6-12 options -->
#    </select>
# 3. In render function, read layout:
#    const layout = data.layoutStyle || 'default';
# 4. Create layouts object with all variations
# 5. Return: layouts[layout] || layouts['default']
# 6. Test all layouts in preview
```

#### Task 4: Fix Bug Across Multiple Templates

```bash
# 1. Identify if it's component-based or inline
# 2. If component: Fix in shared component file
# 3. If inline: Search all templates
#    grep -l "buggy pattern" *.html
# 4. Fix in each file
# 5. Test each affected template
# 6. Commit with message listing all files changed
```

### Debugging Tips

1. **Section Not Appearing in Modal**:
   - Check component file has correct syntax
   - Verify script tag is before components-loader.js
   - Check browser console for syntax errors
   - Verify component registers to window.sectionComponents

2. **Preview Not Updating**:
   - Check getSectionData() is reading form fields correctly
   - Verify input field IDs match pattern: `${sectionId}-fieldName`
   - Check render function is returning valid HTML
   - Look for JavaScript errors in console

3. **Styling Not Applying**:
   - Verify Tailwind CDN is loaded (check Network tab)
   - Check class names are valid Tailwind classes
   - Ensure no typos in class names
   - Test in incognito mode (rules out cache issues)

4. **Image Upload Not Working**:
   - Check input type="file" has onchange="handleImageUpload(this)"
   - Verify data URL is being captured in getSectionData
   - Check render function handles data URL in img src
   - Ensure preview updates after upload

## Future Enhancement Opportunities

### Potential Features

- **Local Storage**: Save work-in-progress locally
- **Export Options**: PDF, PNG image export
- **Template Themes**: Multiple visual themes per event type
- **Real QR Generation**: Actual QR code creation (currently placeholder)
- **Form Validation**: Enhanced input validation and error handling
- **Accessibility**: ARIA labels and keyboard navigation improvements
- **Image Gallery**: Multiple image uploads per section
- **Drag-and-Drop**: Actual implementation of section reordering
- **Backend Integration**: Save invitations to server/database
- **User Accounts**: Multi-user support with saved projects
- **Template Preview**: Preview templates before opening editor
- **Social Sharing**: Direct share to social media platforms

### Technical Improvements

- **Complete Component Migration**: All templates using component-based architecture
- **TypeScript**: Add type safety for better maintainability
- **Testing**: Unit and integration tests for core functions
- **Build Pipeline**: Optimize assets and enable tree-shaking
- **PWA**: Offline support as Progressive Web App
- **State Management**: Redux/Zustand for complex state
- **Server-Side Rendering**: For better SEO and performance

## Project History

The InviteGen project was developed to provide an accessible, code-free solution for creating professional digital invitations and greeting cards. The Info/Style tabs pattern was established to separate content from presentation, reducing cognitive load on users while maintaining flexibility for customization.

### Evolution Timeline

1. **Phase 1**: Initial 12 event invitation templates with basic section management
2. **Phase 2**: Added Business Portfolio with advanced features
3. **Phase 3**: Introduced 6 simplified greeting card templates
4. **Phase 4**: Developed reusable components system (`components.js`)
5. **Phase 5**: Began migration to component-based architecture
6. **Phase 6**: Section enhancement project - Added 29 specialized sections across all templates (completed)
7. **Phase 7**: Creative layout styles project - Enhanced greeting cards with 100+ new layout styles (ongoing)

All templates were systematically upgraded to follow consistent patterns, ensuring a unified user experience across all event types and card styles.

## Current State (November 2025)

### Recent Development

The platform has undergone significant enhancements:

#### Section Enhancement Project (Completed)
- **Scope**: All 13 implementation phases from NEW_SECTIONS_SUGGESTIONS.md
- **Impact**: 290 total sections (up from 261, +11% growth)
- **New Components**: 29 specialized components created
- **Key Additions**:
  - Housewarming Party: +8 sections (80% growth) - largest expansion
  - Conference & Seminar: +7 professional sections
  - Event Invitation: +5 practical sections (accessibility, parking, weather)
  - Wedding, Anniversary, Birthday, and all other templates enhanced
- **Documentation**: See IMPLEMENTATION_SUMMARY.md for complete details

#### Creative Layout Styles Project (Ongoing)
- **Focus**: Greeting card templates with multiple creative layout options
- **Recent Merges**:
  - PR #95: 24 creative layout styles to shared greeting card components
  - PR #94: 32+ layout styles to thank-you-card sections
  - PR #93: 95+ layout styles to thank-you-card.html
  - PR #92: Holiday card mobile layout enhancements
  - PR #91: Love & romance card mobile improvements
- **Goal**: Provide 6-12 layout style options per section for maximum customization

### Component Architecture Status

#### Fully Migrated Templates (Component-Based)
All components in separate `.component.js` files with dedicated component loaders:

- ✅ **farewell-party.html** - 23 components in `components/farewell/`
- ✅ **graduation-ceremony.html** - 26 components in `components/graduation/`
- ✅ **retirement-celebration.html** - 20 components in `components/retirement/`
- ✅ **engagement-announcement.html** - 20 components in `components/engagement/`
- ✅ **anniversary-wishes.html** - 27 components in `components/anniversary/`
- ✅ **birth-announcement.html** - 19 components in `components/birth-announcement/`
- ✅ **birthday-wishes.html** - 32 components in `components/birthday/`
- ✅ **event-invitation.html** - 26 components in `components/event/`
- ✅ **wedding-invitation.html** - 20 components in `components/wedding/`
- ✅ **baby-shower.html** - 21 components in `baby-shower-components/`
- ✅ **congratulations-card.html** - 18 components in `components/congratulations/`
- ✅ **birthday-greeting-card.html** - 39 components in `components/greeting-card/`

#### Partially Migrated Templates
Mix of inline sections and external components:

- ⏳ **business-portfolio.html** - Some shared components, migration in progress
- ⏳ **conference-seminar.html** - Mix of inline and external components
- ⏳ **housewarming-party.html** - Primarily inline sections (18 sections)

#### Traditional Templates (Inline)
Sections defined in inline `sectionTemplates` object:

- 📝 **thank-you-card.html** - Inline sections with extensive layout variations
- 📝 **love-romance-card.html** - Inline sections with creative layouts
- 📝 **holiday-greetings-card.html** - Inline sections
- 📝 **get-well-soon-card.html** - Inline sections with creative layouts

### File Organization

```
/home/user/hapify-prototype/
├── Landing & Documentation
│   ├── index.html                          # Landing page with template grid
│   ├── README.md                           # Project readme (minimal)
│   ├── CLAUDE.md                           # This file - comprehensive AI guide
│   ├── COMPONENTS.md                       # Component API documentation
│   ├── MIGRATION_EXAMPLE.md                # Migration guide
│   ├── IMPLEMENTATION_SUMMARY.md           # Recent enhancement summary
│   ├── NEW_SECTIONS_SUGGESTIONS.md         # Section enhancement specifications
│   ├── PULL_REQUEST.md                     # Latest PR documentation
│   └── PHASE_1_PROMPT.md                   # Development phase documentation
│
├── Shared Component System
│   ├── components.js                       # Reusable web components (PhoneMockup, etc.)
│   └── components/                         # Modular component architecture
│       ├── README.md                       # Component system guide
│       ├── components-loader.js            # Auto-registration loader
│       ├── dynamic-templates.js            # Templates for dynamic items
│       │
│       ├── Shared Components (60+ files)
│       │   ├── layout.component.js         # Navigation configuration
│       │   ├── hero.component.js           # Hero sections
│       │   ├── about.component.js          # About sections
│       │   ├── contact.component.js        # Contact forms
│       │   ├── gallery.component.js        # Photo galleries
│       │   ├── pricing.component.js        # Pricing tables
│       │   ├── faq.component.js            # FAQ sections
│       │   ├── testimonials.component.js   # Testimonials
│       │   ├── timeline.component.js       # Timeline displays
│       │   └── [50+ more shared components]
│       │
│       └── Template-Specific Component Directories
│           ├── anniversary/                # 27 anniversary components
│           ├── birthday/                   # 32 birthday components
│           ├── birth-announcement/         # 19 birth announcement components
│           ├── business/                   # 1 business component
│           ├── congratulations/            # 18 congratulations components
│           ├── engagement/                 # 20 engagement components
│           ├── event/                      # 26 event components
│           ├── farewell/                   # 23 farewell components
│           ├── graduation/                 # 26 graduation components
│           ├── greeting-card/              # 39 greeting card components
│           ├── retirement/                 # 20 retirement components
│           └── wedding/                    # 20 wedding components
│
├── baby-shower-components/                 # 21 baby shower components (separate)
│   ├── components-loader.js
│   ├── dynamic-templates.js
│   └── [21 component files]
│
├── Event Invitation Templates (13 files)
│   ├── wedding-invitation.html             # 19 sections - Blue/Cyan gradient
│   ├── birthday-wishes.html                # 30 sections - Pink/Rose gradient
│   ├── business-portfolio.html             # 21 sections - Blue/Cyan gradient
│   ├── baby-shower.html                    # 19 sections - Yellow/Amber gradient
│   ├── event-invitation.html               # 25 sections - Green/Emerald gradient
│   ├── engagement-announcement.html        # 19 sections - Rose/Pink gradient
│   ├── birth-announcement.html             # 17 sections - Teal gradient
│   ├── anniversary-wishes.html             # 25 sections - Red gradient
│   ├── graduation-ceremony.html            # 25 sections - Indigo gradient
│   ├── housewarming-party.html             # 18 sections - Orange gradient
│   ├── retirement-celebration.html         # 19 sections - Cyan gradient
│   ├── farewell-party.html                 # 22 sections - Violet gradient
│   └── conference-seminar.html             # 27 sections - Teal/Emerald gradient
│
├── Greeting Card Templates (6 files)
│   ├── birthday-greeting-card.html         # Pink/Rose gradient
│   ├── thank-you-card.html                 # Blue/Indigo gradient (287KB - largest)
│   ├── love-romance-card.html              # Rose/Pink gradient
│   ├── holiday-greetings-card.html         # Red/Green gradient
│   ├── congratulations-card.html           # Amber/Orange gradient
│   └── get-well-soon-card.html             # Teal/Cyan gradient (95KB)
│
├── Backup Files (4 files)
│   ├── anniversary-wishes.html.backup
│   ├── baby-shower.html.backup
│   ├── birth-announcement.html.backup
│   └── wedding-invitation.html.backup
│
└── Utility Scripts
    ├── extract-components.sh               # Component extraction shell script
    └── extract_components.py               # Component extraction Python script
```

## Quick Reference for AI Assistants

### Template Directory Quick Reference

| Template | Sections | Architecture | Component Dir | File Size | Status |
|----------|----------|--------------|---------------|-----------|--------|
| **Event Invitations** | | | | | |
| wedding-invitation.html | 19 | Component | components/wedding/ | ~74KB | ✅ Complete |
| birthday-wishes.html | 30 | Component | components/birthday/ | ~78KB | ✅ Complete |
| business-portfolio.html | 21 | Hybrid | components/business/ | ~74KB | ⏳ Partial |
| baby-shower.html | 19 | Component | baby-shower-components/ | ~74KB | ✅ Complete |
| event-invitation.html | 25 | Component | components/event/ | ~50KB | ✅ Complete |
| engagement-announcement.html | 19 | Component | components/engagement/ | ~71KB | ✅ Complete |
| birth-announcement.html | 17 | Component | components/birth-announcement/ | ~39KB | ✅ Complete |
| anniversary-wishes.html | 25 | Component | components/anniversary/ | ~77KB | ✅ Complete |
| graduation-ceremony.html | 25 | Component | components/graduation/ | ~75KB | ✅ Complete |
| housewarming-party.html | 18 | Inline | N/A | ~181KB | ✅ Complete |
| retirement-celebration.html | 19 | Component | components/retirement/ | ~70KB | ✅ Complete |
| farewell-party.html | 22 | Component | components/farewell/ | ~75KB | ✅ Complete |
| conference-seminar.html | 27 | Hybrid | N/A | ~62KB | ⏳ Partial |
| **Greeting Cards** | | | | | |
| birthday-greeting-card.html | - | Component | components/greeting-card/ | ~48KB | ✅ Complete |
| thank-you-card.html | - | Inline | N/A | ~288KB | ✅ Complete |
| love-romance-card.html | - | Inline | N/A | ~49KB | ✅ Complete |
| holiday-greetings-card.html | - | Inline | N/A | ~46KB | ✅ Complete |
| congratulations-card.html | - | Component | components/congratulations/ | ~32KB | ✅ Complete |
| get-well-soon-card.html | - | Inline | N/A | ~95KB | ✅ Complete |

### Component Count by Directory

| Directory | Component Files | Total Lines | Notes |
|-----------|----------------|-------------|-------|
| components/ (shared) | ~60 files | ~30,000+ | Shared across templates |
| components/anniversary/ | 27 files | ~8,000+ | Anniversary-specific |
| components/birthday/ | 32 files | ~9,000+ | Birthday-specific |
| components/birth-announcement/ | 19 files | ~5,500+ | Birth-specific |
| components/business/ | 1 file | ~300 | Business-specific |
| components/congratulations/ | 18 files | ~5,000+ | Congratulations-specific |
| components/engagement/ | 20 files | ~6,000+ | Engagement-specific |
| components/event/ | 26 files | ~7,500+ | Event-specific |
| components/farewell/ | 23 files | ~6,500+ | Farewell-specific |
| components/graduation/ | 26 files | ~7,500+ | Graduation-specific |
| components/greeting-card/ | 39 files | ~11,000+ | Greeting card-specific |
| components/retirement/ | 20 files | ~6,000+ | Retirement-specific |
| components/wedding/ | 20 files | ~6,000+ | Wedding-specific |
| baby-shower-components/ | 21 files | ~6,000+ | Baby shower (separate) |
| **TOTAL** | **317+ files** | **87,531 lines** | |

### Key Statistics

- **Total Templates**: 20 (13 event + 6 greeting cards + 1 landing)
- **Total Sections**: 290+ across all templates
- **Total Component Files**: 317+
- **Total HTML Lines**: 28,093
- **Total Component Lines**: 87,531
- **Total Codebase**: ~115,000+ lines
- **Component Directories**: 13 subdirectories
- **Backup Files**: 4 templates
- **Documentation Files**: 8 markdown files
- **Average Sections per Event Template**: 22 sections
- **Largest Template**: thank-you-card.html (287KB)
- **Most Sections**: birthday-wishes.html (30 sections)
- **Most Components**: components/greeting-card/ (39 components)

### Common File Patterns

```javascript
// Pattern 1: Component Registration
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.sectionname = { ... };

// Pattern 2: Section Counter
let sectionCounter = 0;
const id = `section-${sectionCounter++}`;

// Pattern 3: Data Capture
const data = {
    fieldName: document.getElementById(`${sectionId}-fieldName`)?.value || ''
};

// Pattern 4: Layout Selection
const layout = data.layoutStyle || 'default';
const layouts = { default: `...`, split: `...`, card: `...` };
return layouts[layout] || layouts['default'];

// Pattern 5: Image Handling
function handleImageUpload(input) {
    const reader = new FileReader();
    reader.onload = function(e) {
        input.setAttribute('data-image-url', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
}
```

### Decision Tree for Adding Sections

```
Is this for an event invitation or greeting card?
├─ Event Invitation (13 templates)
│  └─ Does template use component-based architecture?
│     ├─ YES (12 templates)
│     │  └─ Create .component.js file in components/<template-name>/
│     │     Add script tag to HTML
│     │     Test and verify
│     └─ NO (housewarming-party.html, conference-seminar.html partially)
│        └─ Add section to sectionTemplates object in HTML
│           Add button to section modal
│           Test and verify
└─ Greeting Card (6 templates)
   └─ Does template use component-based architecture?
      ├─ YES (birthday-greeting-card.html, congratulations-card.html)
      │  └─ Create .component.js file in components/greeting-card/ or components/congratulations/
      │     Add script tag to HTML
      │     Test and verify
      └─ NO (4 templates: thank-you, love-romance, holiday, get-well-soon)
         └─ Add section to sectionTemplates object in HTML
            Add button to section modal
            Add 6-12 layout style variations
            Test all layouts
```

### Critical Files to Never Modify Without Backup

1. `components.js` - Shared by all templates
2. `components/components-loader.js` - Used by component-based templates
3. `components/dynamic-templates.js` - Used by sections with dynamic items
4. `index.html` - Landing page with all template links

### Files Safe to Modify

- Individual component files (only affects templates that use them)
- Individual template HTML files (only affects that template)
- Documentation files (no code impact)

### When in Doubt

1. **Check existing patterns** - Look at similar templates
2. **Read documentation** - COMPONENTS.md, MIGRATION_EXAMPLE.md
3. **Test in browser** - Open HTML file directly
4. **Check console** - Look for JavaScript errors
5. **Ask user** - If unclear, ask for clarification

## Related Documentation

- **COMPONENTS.md** - Complete API reference for components.js
- **MIGRATION_EXAMPLE.md** - Step-by-step migration guide
- **components/README.md** - Component-based architecture guide

## License

This project's license should be specified here.

## Contact

For questions, issues, or contributions, please contact the project maintainers.

---

**Last Updated:** 2025-11-16
**Project:** InviteGen - Digital Invitation & Greeting Card Generator
**Templates:** 20 (13 Event Invitations + 6 Greeting Cards + 1 Landing Page)
**Total Sections:** 290+ sections across all templates
**Components System:** Active (components.js + 317+ modular components)
**Architecture:** Hybrid (Traditional inline + Component-based)
**Total Lines of Code:** ~115,000+ lines (28,093 HTML + 87,531 components)
