# Retirement Celebration Components

This directory contains reusable components for the Retirement Celebration template.

## Component-Based Architecture

Each section is defined as a separate component file, making it easier to maintain and reuse code across different templates.

## Available Components

### Core Components
1. **layout.component.js** - Page layout with navigation modes (tabs, top nav, bottom nav, none)
2. **hero.component.js** - Hero header with retiree information and photo

### Content Components
3. **careerhighlights.component.js** - Career accomplishments and highlights
4. **yearsofservice.component.js** - Years of service statistics
5. **partydetails.component.js** - Retirement party date, time, venue
6. **memorylane.component.js** - Memorable stories and moments
7. **futureplans.component.js** - Retirement plans and dreams
8. **rsvp.component.js** - RSVP section
9. **gallery.component.js** - Photo gallery
10. **thankyou.component.js** - Thank you message
11. **timeline.component.js** - Career timeline/journey
12. **testimonials.component.js** - Tributes and messages from colleagues
13. **achievements.component.js** - Awards and recognitions
14. **countdown.component.js** - Countdown to retirement date
15. **dresscode.component.js** - Dress code information
16. **schedule.component.js** - Event schedule/agenda
17. **contact.component.js** - Contact information for organizers
18. **quotes.component.js** - Inspirational retirement quotes

## Component Structure

Each component follows this structure:

```javascript
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.componentName = {
    name: '🎯 Component Name',
    allowMultiple: true/false,  // Whether multiple instances are allowed
    info: `...`,                 // HTML for Info tab
    style: `...`,                // HTML for Style tab
    render: (data, style) => `...`  // Function that renders preview HTML
};
```

## How Components are Loaded

1. Individual component files are loaded via `<script>` tags in retirement-celebration.html
2. The `components-loader.js` file verifies all components are loaded
3. Components are registered to `window.sectionComponents`
4. The loader dispatches a `componentsReady` event when complete

## Navigation Modes

The layout component supports four navigation modes:

1. **None** - Standard scrolling layout
2. **Tab View** - Organize sections into tabs
3. **Top Navigation** - Fixed navigation bar at the top
4. **Bottom Navigation** - Fixed navigation bar at the bottom

## Color Scheme

- **Primary**: Cyan-500 to Cyan-700 (#06b6d4 to #0891b2)
- **Secondary**: Teal tones
- **Accent**: Retirement celebration theme colors

## Usage

To use these components in a template:

```html
<!-- Load individual component files -->
<script src="components/retirement/layout.component.js"></script>
<script src="components/retirement/hero.component.js"></script>
<!-- ... other components ... -->
<script src="components/retirement/components-loader.js"></script>
```

The main template script will wait for the `componentsReady` event before initializing.

## Adding New Components

1. Create a new `.component.js` file following the structure above
2. Add the component name to `componentFiles` array in `components-loader.js`
3. Load the component in retirement-celebration.html

## Benefits

- **Modularity**: Each section is self-contained
- **Reusability**: Components can be shared across templates
- **Maintainability**: Easier to update individual sections
- **Organization**: Cleaner code structure

---

Last updated: 2025-11-14
