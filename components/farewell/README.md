# Farewell Party Components

This directory contains reusable component files for the Farewell Party template in InviteGen.

## Architecture

The Farewell Party template follows a component-based architecture where each section type is defined in its own JavaScript file. This approach provides:

- **Modularity**: Each component is self-contained and can be modified independently
- **Reusability**: Components can be easily shared across different templates
- **Maintainability**: Code is organized and easy to understand
- **Scalability**: New components can be added without modifying existing code

## Components

### Core Components

1. **layout.component.js** - Global page layout settings including:
   - Navigation type selection (None, Tab View, Top Nav, Bottom Nav)
   - Global color schemes
   - Typography settings
   - Spacing controls

2. **hero.component.js** - Hero header section with:
   - Person's name and photo
   - Farewell party title
   - Customizable background and text colors

### Content Components

3. **aboutperson.component.js** - About the person leaving:
   - Position/Role
   - Duration at organization
   - Biography

4. **partydetails.component.js** - Party event details:
   - Date and time
   - Venue name and address
   - Visual cards for each detail

5. **farewell.component.js** - Reason for departure:
   - Predefined reason categories
   - Custom details text
   - Themed icons for each reason

6. **memories.component.js** - Shared memories section:
   - List of memorable moments
   - Bulleted memory cards

7. **wellwishes.component.js** - Messages and well wishes:
   - Section for collecting messages
   - Sample wish cards

8. **rsvp.component.js** - RSVP section:
   - RSVP call to action
   - Deadline date
   - RSVP button

9. **gallery.component.js** - Photo gallery:
   - Grid layout for photos
   - Multiple galleries supported

10. **contact.component.js** - Stay in touch section:
    - Email, phone, LinkedIn
    - Contact cards

## Component Structure

Each component follows this standard structure:

```javascript
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.componentName = {
    name: '🎯 Component Display Name',
    allowMultiple: false,  // or true
    info: `<!-- HTML for Info tab -->`,
    style: `<!-- HTML for Style tab -->`,
    render: (data, style, globalStyles) => `<!-- Preview HTML -->`
};
```

## Usage

Components are loaded automatically by the `components-loader.js` file when the page loads. The loader:

1. Initializes the `window.sectionComponents` object
2. Waits for all component files to load
3. Dispatches a 'componentsReady' event
4. Makes components available as `window.sectionTemplates`

## Color Scheme

The Farewell Party template uses a violet gradient theme:
- Primary: `#8b5cf6` (violet-500)
- Secondary: `#7c3aed` (violet-600)
- Gradient: `from-violet-500 to-violet-700`

## Navigation Features

The layout component supports four navigation modes:

1. **None**: Standard scrolling layout
2. **Tab View**: Organize sections into tabs with customizable styles
3. **Top Navigation**: Fixed or static navigation bar at the top
4. **Bottom Navigation**: Fixed or static navigation bar at the bottom

Each navigation mode includes:
- Style options (Simple, Underline, Pills, Bordered)
- Alignment controls (Left, Center, Right)
- Size options (Small, Medium, Large)
- Custom colors and sticky positioning

## Development

To add a new component:

1. Create a new `.component.js` file in this directory
2. Follow the standard component structure
3. Add the component name to `components-loader.js`
4. Add a button for it in `farewell-party.html` modal sections

To modify an existing component:

1. Open the component file
2. Edit the `info`, `style`, or `render` sections
3. Save the file - changes will be reflected on page reload

## License

Part of the InviteGen project.
