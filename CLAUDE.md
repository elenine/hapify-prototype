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

### When Adding Features

1. **Maintain Consistency**: Follow existing patterns exactly
2. **Test Thoroughly**: Verify changes in all preview modes
3. **Update Documentation**: Keep CLAUDE.md current
4. **Consider Both Categories**: Event invitations need navigation support, cards don't
5. **Use Components**: Prefer `components.js` helpers over custom code

### When Fixing Bugs

1. **Check Similar Templates**: Fix may apply to multiple files
2. **Test Mobile**: Most users view on mobile devices
3. **Verify Preview**: Ensure live preview updates correctly
4. **Test All Tabs**: Check both Info and Style tabs

### When Refactoring

1. **Read Migration Docs**: Follow `MIGRATION_EXAMPLE.md` exactly
2. **Test Navigation**: Verify all navigation modes work
3. **Incremental Changes**: Migrate one template at a time
4. **Keep Backups**: Preserve `.backup` files during migration

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
5. **Phase 5**: Began migration to component-based architecture (ongoing)

All templates were systematically upgraded to follow consistent patterns, ensuring a unified user experience across all event types and card styles.

## Related Documentation

- **COMPONENTS.md** - Complete API reference for components.js
- **MIGRATION_EXAMPLE.md** - Step-by-step migration guide
- **components/README.md** - Component-based architecture guide

## License

This project's license should be specified here.

## Contact

For questions, issues, or contributions, please contact the project maintainers.

---

**Last Updated:** 2025-11-14
**Project:** InviteGen - Digital Invitation & Greeting Card Generator
**Templates:** 20 (13 Event Invitations + 6 Greeting Cards + 1 Landing Page)
**Components System:** Active (components.js + modular components)
**Architecture:** Traditional inline + Component-based (migration in progress)
