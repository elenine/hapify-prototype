# Wedding Invitation Components

This directory contains reusable component definitions for the Wedding Invitation page.

## Architecture

Each component is defined in its own file and registers itself to the global `window.weddingSectionComponents` object. This modular approach allows for:

- **Easy maintenance**: Each component is self-contained
- **Reusability**: Components can be shared across different wedding templates
- **Scalability**: New components can be added without modifying existing code
- **Separation of concerns**: UI logic is separated from the main HTML file

## Component Structure

Each component file follows this pattern:

```javascript
window.weddingSectionComponents = window.weddingSectionComponents || {};

window.weddingSectionComponents.componentName = {
    name: '🎨 Display Name',
    allowMultiple: false, // or true if component can be added multiple times
    info: `HTML template for the Info tab`,
    style: `HTML template for the Style tab`,
    render: (data, style, globalStyles) => `Preview HTML template`
};
```

## Components

### Core Components

1. **layout.component.js** - Page layout and global settings
   - Navigation options (tabs, top nav, bottom nav)
   - Global colors, fonts, spacing
   - Can only be added once

2. **hero.component.js** - Hero header section
   - Couple names
   - Tagline
   - Cover photo
   - Can only be added once

### Content Components

3. **couple.component.js** - Couple information
   - Bride and groom names
   - About text
   - Can only be added once

4. **details.component.js** - Event details
   - Date and time
   - Venue and address
   - Can only be added once

5. **story.component.js** - Love story
   - Title
   - Story text
   - Can be added multiple times

6. **gallery.component.js** - Photo gallery
   - Gallery title
   - Photo uploads
   - Can be added multiple times

7. **rsvp.component.js** - RSVP section
   - RSVP title
   - Message
   - Can only be added once

### Utility Components

8. **map.component.js** - Location map
   - Location name
   - Google Maps URL
   - Can only be added once

9. **schedule.component.js** - Event schedule
   - Schedule title
   - Timeline items
   - Can only be added once

10. **message.component.js** - Custom message
    - Heading
    - Message text
    - Can be added multiple times

## Loading System

The `components-loader.js` file manages the component loading process:

1. Monitors component registration
2. Verifies all required components are loaded
3. Dispatches `weddingComponentsReady` event when complete
4. Provides error handling and diagnostics

## Usage

To use these components in a page:

```html
<!-- Load all component files -->
<script src="wedding-components/layout.component.js"></script>
<script src="wedding-components/hero.component.js"></script>
<script src="wedding-components/couple.component.js"></script>
<!-- ... other components ... -->
<script src="wedding-components/components-loader.js"></script>

<!-- Initialize app after components load -->
<script>
    window.addEventListener('weddingComponentsReady', () => {
        // Components are ready, initialize app
        initializeApp();
    });
</script>
```

## Navigation Features

The layout component provides three navigation modes:

### 1. No Navigation (Default)
Standard scrolling layout with all sections visible.

### 2. Tab View
Sections are organized into tabs with various styles:
- Underline tabs
- Pill tabs
- Button tabs
- Boxed tabs

Customizable alignment (left/center/right) and size (small/medium/large).

### 3. Top/Bottom Navigation
Fixed navigation bar with section switching:
- Simple style
- Underline active
- Pills
- Bordered

Customizable colors, alignment, size, and sticky behavior.

## Extending

To add a new component:

1. Create a new file: `your-component.component.js`
2. Register it to `window.weddingSectionComponents`
3. Add the file to the components loader's `requiredComponents` array
4. Include the script tag in the HTML file

## Best Practices

- Keep components self-contained and independent
- Use consistent naming conventions
- Follow the existing component structure
- Test components in isolation before integration
- Document any special requirements or dependencies
