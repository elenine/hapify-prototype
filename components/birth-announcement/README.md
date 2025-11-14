# Birth Announcement Components

This directory contains reusable component files for the Birth Announcement template in InviteGen.

## Architecture

The Birth Announcement template follows a component-based architecture where each section type is defined in its own JavaScript file. This approach provides:

- **Modularity**: Each component is self-contained and can be modified independently
- **Reusability**: Components can be easily shared across different templates
- **Maintainability**: Code is organized and easy to understand
- **Scalability**: New components can be added without modifying existing code

## Components

### Core Component

1. **hero.component.js** - Hero header section with:
   - Baby's name and photo
   - Announcement title
   - Customizable background and text colors

### Information Components

2. **stats.component.js** - Baby's first stats:
   - Birth date and time
   - Weight and length
   - Styled stat cards

3. **parents.component.js** - Family information:
   - Mother's and father's names
   - Siblings information
   - Family cards

4. **grandparents.component.js** - Grandparents information:
   - Maternal and paternal grandparents
   - Special message about grandparents
   - Organized by family side

### Story & Message Components

5. **story.component.js** - Birth story section:
   - Story title
   - Detailed birth narrative
   - Multiple stories supported

6. **message.component.js** - Family message:
   - Message title
   - Heartfelt message from family
   - Multiple messages supported

7. **wishes.component.js** - Well wishes collection:
   - Instructions for sending wishes
   - Contact email for wishes
   - Sample wishes display

### Special Features Components

8. **name-meaning.component.js** - Name meaning and significance:
   - Baby's full name
   - First and middle name meanings
   - Story of why the name was chosen

9. **milestones.component.js** - Baby milestones:
   - First achievements
   - Multiple milestone entries
   - Visual milestone cards

10. **timeline.component.js** - Journey timeline:
    - Pregnancy timeline
    - Important dates (found out, first visit, gender reveal, due date, birth)
    - Visual timeline with icons

11. **funfacts.component.js** - Fun facts about baby:
    - Favorite song
    - Sleep habits
    - Personality traits
    - Nickname and characteristics

### Event Components

12. **visiting.component.js** - Visiting information:
    - Hospital/home location
    - Visiting hours
    - Special instructions

13. **thankyou.component.js** - Thank you section:
    - Thank you title
    - Gratitude message

### Media & Contact Components

14. **gallery.component.js** - Photo gallery:
    - Gallery title and description
    - Grid layout for baby photos
    - Multiple galleries supported

15. **video.component.js** - Video section:
    - Video title and description
    - Video URL (YouTube, Vimeo, etc.)
    - Multiple videos supported

16. **contact.component.js** - Contact information:
    - Contact person name
    - Email and phone details
    - Contact cards

## Component Structure

Each component follows this standard structure:

```javascript
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.componentName = {
    name: '👶 Component Display Name',
    allowMultiple: false,  // or true
    info: (sectionId) => `<!-- HTML for Info tab -->`,
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

The Birth Announcement template uses a teal gradient theme:
- Primary: `#14b8a6` (teal-500)
- Secondary: `#0d9488` (teal-600)
- Gradient: `from-teal-400 to-teal-600`
- Accent: `#f0fdfa` (teal-50)

## Navigation Features

When used with the layout component from the main components library, the template supports four navigation modes:

1. **None**: Standard scrolling layout (default)
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
4. Add a button for it in `birth-announcement.html` modal sections

To modify an existing component:

1. Open the component file
2. Edit the `info`, `style`, or `render` sections
3. Save the file - changes will be reflected on page reload

## License

Part of the InviteGen project.
