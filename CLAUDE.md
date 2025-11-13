# InviteGen - Digital Invitation & Portfolio Generator

## Purpose

InviteGen is a comprehensive web-based platform for creating beautiful, customized digital invitations and portfolios for various life events and business purposes. The application empowers users to design professional-looking invitations without any coding knowledge through an intuitive visual editor with real-time preview.

## Project Overview

InviteGen provides a suite of 13 specialized template editors, each tailored for specific occasions:

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

## Technical Architecture

### Technology Stack

- **Frontend Framework**: Pure HTML5 + JavaScript (ES6+)
- **CSS Framework**: Tailwind CSS (via CDN)
- **Build System**: None required - static HTML files
- **Dependencies**: Zero npm dependencies - completely self-contained

### File Structure

```
/
├── index.html                      # Landing page with template grid
├── wedding-invitation.html         # Wedding template editor
├── birthday-wishes.html            # Birthday template editor
├── business-portfolio.html         # Business template editor
├── baby-shower.html                # Baby shower template editor
├── event-invitation.html           # Generic event template editor
├── engagement-announcement.html    # Engagement template editor
├── birth-announcement.html         # Birth announcement template editor
├── anniversary-wishes.html         # Anniversary template editor
├── graduation-ceremony.html        # Graduation template editor
├── housewarming-party.html         # Housewarming template editor
├── retirement-celebration.html     # Retirement template editor
├── farewell-party.html             # Farewell party template editor
├── conference-seminar.html         # Conference & seminar template editor
└── CLAUDE.md                       # This documentation file
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
    info: `<div>...HTML for Info tab...</div>`,
    style: `<div>...HTML for Style tab...</div>`,
    render: (data, style) => `<div>...Preview HTML...</div>`
  },
  // ... 8 more sections
};
```

### Color Schemes

Each template uses a distinct gradient for brand consistency:

| Template | Gradient Colors |
|----------|----------------|
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

## Usage Workflow

### For Users

1. **Choose Template**: Select from 12 event-specific templates on landing page
2. **Add Sections**: Click "Add Section" to open section picker
3. **Enter Content**: Fill in Info tab fields with event details
4. **Customize Style**: Switch to Style tab to adjust colors and appearance
5. **Preview**: View real-time preview in mobile/tablet frames
6. **Publish**: Generate QR code and publish invitation

### For Developers

1. **Local Development**: Open any HTML file directly in browser
2. **No Build Step**: Files are self-contained with CDN dependencies
3. **Customization**: Modify `sectionTemplates` object to add/edit sections
4. **Theming**: Adjust gradient colors in header and button classes

## Browser Compatibility

- Chrome 90+ (recommended)
- Firefox 88+
- Safari 14+
- Edge 90+

Requires JavaScript enabled and modern ES6+ support.

## File Sizes

Each template HTML file:
- Average size: 700-780 lines (~40-47KB)
- No external assets required (except Tailwind CDN)
- Fast load times with CDN caching

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

### Technical Improvements

- **Component Framework**: Migrate to React/Vue for better state management
- **TypeScript**: Add type safety for better maintainability
- **Testing**: Unit and integration tests for core functions
- **Build Pipeline**: Optimize assets and enable tree-shaking
- **PWA**: Offline support as Progressive Web App

## Project History

The InviteGen project was developed to provide an accessible, code-free solution for creating professional digital invitations. The Info/Style tabs pattern was established to separate content from presentation, reducing cognitive load on users while maintaining flexibility for customization.

All 11 templates (plus the reference wedding template) were systematically upgraded to follow this consistent pattern, ensuring a unified user experience across all event types.

## License

This project's license should be specified here.

## Contact

For questions, issues, or contributions, please contact the project maintainers.

---

*Last Updated: 2025-11-13*
*Project: InviteGen - Digital Invitation & Portfolio Generator*
