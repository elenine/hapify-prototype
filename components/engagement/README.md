# Engagement Announcement Components

This directory contains modular components for the Engagement Announcement template.

## Architecture

Each section is defined as a separate component file following this pattern:

```javascript
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.sectionName = {
    name: '💍 Section Name',
    allowMultiple: false,
    info: (sectionId) => `...HTML for Info tab...`,
    style: `...HTML for Style tab...`,
    render: (data, style, globalStyles) => `...Preview HTML...`
};
```

## Components

### Core Components

1. **layout.component.js** - Global page layout and navigation settings
   - Navigation types: None, Tab View, Top Nav, Bottom Nav
   - Global styling options (colors, fonts, spacing)
   - Navigation styling configuration

2. **hero.component.js** - Main announcement header
   - Partner names
   - Engagement date
   - Couple photo upload
   - Customizable background and text colors

### Story Components

3. **lovestory.component.js** - How the couple met
   - Story title
   - Love story narrative
   - Background color customization

4. **proposal.component.js** - The proposal story
   - Proposal title
   - Proposal narrative
   - Background color customization

5. **couple.component.js** - About the couple
   - Relationship duration
   - Fun facts
   - Background color customization

### Visual Components

6. **photos.component.js** - Photo gallery
   - Gallery title
   - Description
   - 3x3 photo grid placeholder
   - Background color customization

### Event Components

7. **celebration.component.js** - Engagement party details
   - Event title
   - Date, time, venue
   - Address with map
   - Background color customization

8. **registry.component.js** - Gift registry
   - Registry title
   - Registry link
   - Custom message
   - Background color customization

9. **rsvp.component.js** - RSVP section
   - RSVP title and message
   - Deadline date
   - RSVP button
   - Background color customization

10. **future.component.js** - Future plans
    - Section title
    - Wedding date (if set)
    - Future plans message
    - Background color customization

## Usage

### In HTML File

Load components in this order:

```html
<!-- Component Scripts -->
<script src="components/engagement/layout.component.js"></script>
<script src="components/engagement/hero.component.js"></script>
<script src="components/engagement/lovestory.component.js"></script>
<script src="components/engagement/proposal.component.js"></script>
<script src="components/engagement/couple.component.js"></script>
<script src="components/engagement/photos.component.js"></script>
<script src="components/engagement/celebration.component.js"></script>
<script src="components/engagement/registry.component.js"></script>
<script src="components/engagement/rsvp.component.js"></script>
<script src="components/engagement/future.component.js"></script>

<!-- Component Loader (MUST be last) -->
<script src="components/engagement/components-loader.js"></script>
```

### Component Registration

Components automatically register themselves to `window.sectionComponents`. The loader dispatches a `componentsReady` event when all components are loaded.

## Navigation Support

The layout component provides four navigation modes:

1. **No Navigation** - Single scrolling page
2. **Tab View** - Multi-tab interface with sections assigned to tabs
3. **Top Navigation Bar** - Traditional top menu navigation
4. **Bottom Navigation Bar** - Mobile-style bottom navigation

When navigation is enabled, each section (except hero and layout) gets a dropdown to assign it to a specific tab/navigation item.

## Styling Features

### Global Styles (Layout Component)
- Primary & secondary colors
- Background & text colors
- Font family selection
- Border radius options
- Spacing presets (compact, normal, relaxed, spacious)

### Navigation Styles
- **Tab View**: Underline, pills, buttons, boxed styles
- **Top/Bottom Nav**: Simple, underline, pills, bordered styles
- Custom colors and sticky positioning

### Section-Specific Styles
Each component provides its own style options, typically including:
- Background color customization
- Text color options (where applicable)
- Layout variations (where applicable)

## Color Scheme

Default engagement announcement colors:
- Primary: `#e11d48` (Rose 600)
- Secondary: `#ec4899` (Pink 600)
- Accent: Rose/Pink gradients throughout

## File Organization

```
components/engagement/
├── README.md                    # This file
├── components-loader.js         # Component loader script
├── layout.component.js          # Layout & navigation settings
├── hero.component.js            # Hero header
├── lovestory.component.js       # Love story
├── proposal.component.js        # Proposal story
├── couple.component.js          # Couple details
├── photos.component.js          # Photo gallery
├── celebration.component.js     # Celebration event
├── registry.component.js        # Gift registry
├── rsvp.component.js            # RSVP
└── future.component.js          # Future plans
```

## Adding New Components

1. Create a new `.component.js` file
2. Follow the component pattern shown above
3. Add the component name to `components-loader.js`
4. Import the script in the HTML file before the loader

## Benefits

- **Maintainability**: Each section is isolated and easy to update
- **Reusability**: Components can be shared across templates
- **Testability**: Components can be tested independently
- **Organization**: Clear separation of concerns
- **Scalability**: Easy to add new sections

---

**Last Updated:** 2025-11-14
**Template:** Engagement Announcement
**Components:** 10 modular sections
