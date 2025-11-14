# Anniversary Wishes Components

This directory contains the component-based architecture for the Anniversary Wishes template.

## Components

All components follow the standard structure:

```javascript
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.componentName = {
    name: 'Display Name',
    allowMultiple: true/false,
    info: (sectionId) => `...`, // or info: `...`
    style: `...`,
    render: (data, style, globalStyles) => `...`
};
```

### Available Components

1. **layout.component.js** - Page Layout & Navigation Settings
   - Navigation type selection (None, Tab View, Top Nav, Bottom Nav)
   - Navigation styling options
   - Global theme settings (colors, fonts, spacing)
   - `allowMultiple: false`

2. **hero.component.js** - Hero Header
   - Couple names
   - Title text
   - Cover photo upload
   - `allowMultiple: false`

3. **milestone.component.js** - Milestone Info
   - Years together
   - Wedding date
   - Milestone description
   - `allowMultiple: false`

4. **journey.component.js** - Journey Together
   - Section title
   - Journey highlights (multi-line)
   - `allowMultiple: false`

5. **lovestory.component.js** - Love Story
   - Story title
   - Love story text
   - `allowMultiple: false`

6. **celebration.component.js** - Celebration Details
   - Celebration date
   - Time
   - Venue name
   - Address
   - `allowMultiple: false`

7. **vowrenewal.component.js** - Vow Renewal
   - Section title
   - Ceremony time
   - Special message
   - `allowMultiple: false`

8. **rsvp.component.js** - RSVP Section
   - RSVP title
   - Message
   - RSVP deadline
   - `allowMultiple: false`

9. **gallery.component.js** - Memory Gallery
   - Gallery title
   - Gallery description
   - Photo upload support
   - `allowMultiple: true`

10. **thankyou.component.js** - Thank You
    - Thank you message
    - Closing note
    - `allowMultiple: false`

11. **timeline.component.js** - Relationship Timeline
    - Timeline events with years
    - Milestone markers
    - `allowMultiple: false`

12. **guestbook.component.js** - Guest Messages
    - Guest message form
    - Instructions
    - `allowMultiple: false`

13. **oursong.component.js** - Our Song
    - Song name and artist
    - Story behind the song
    - Spotify/YouTube link
    - `allowMultiple: false`

14. **contact.component.js** - Contact Information
    - Contact person name
    - Phone and email
    - Additional info
    - `allowMultiple: false`

15. **venue.component.js** - Venue Details
    - Venue name and address
    - Google Maps link
    - Parking information
    - `allowMultiple: false`

16. **accommodation.component.js** - Accommodation
    - Hotel name and address
    - Phone and website
    - Group code/special rate
    - `allowMultiple: true` (multiple hotels)

17. **dresscode.component.js** - Dress Code
    - Dress code type (formal, semi-formal, etc.)
    - Additional details
    - Suggested colors
    - `allowMultiple: false`

18. **gifts.component.js** - Gift Preferences
    - Gift message
    - Registry links (up to 2)
    - `allowMultiple: false`

19. **schedule.component.js** - Event Schedule
    - Timeline of events
    - Time and activity format
    - `allowMultiple: false`

20. **quotes.component.js** - Love Quotes
    - Quote text
    - Author attribution
    - `allowMultiple: true` (multiple quotes)

21. **futuredreams.component.js** - Future Dreams
    - Future plans together
    - Closing message
    - `allowMultiple: false`

22. **countdown.component.js** - Countdown Timer
    - Target date/time
    - Live countdown display
    - Custom message
    - `allowMultiple: false`

## Component Loader

The `components-loader.js` file ensures all components are loaded before the application initializes. It:

1. Checks for required components
2. Dispatches a `componentsReady` event when all components are loaded
3. Logs any missing components for debugging

## Color Scheme

Anniversary template uses a red gradient theme:
- Primary Color: #ef4444 (red-500)
- Secondary Color: #dc2626 (red-600)
- Focus rings and accents use red-500

## Navigation Support

The anniversary template includes full navigation support:
- **No Navigation**: Traditional scrolling page
- **Tab View**: Multi-page tabbed interface
- **Top Navigation**: Fixed or sticky top navigation bar
- **Bottom Navigation**: Mobile-style bottom navigation

Each section (except layout and hero) can be assigned to a specific tab/navigation item when navigation is enabled.

## Usage

To use these components in `anniversary-wishes.html`:

```html
<!-- Load all component scripts -->
<script src="components/anniversary/layout.component.js"></script>
<script src="components/anniversary/hero.component.js"></script>
<!-- ... other components ... -->
<script src="components/anniversary/components-loader.js"></script>

<script>
    // Components are available via window.sectionComponents
    let sectionTemplates = {};

    // Wait for components to load
    window.addEventListener('componentsReady', (event) => {
        sectionTemplates = window.sectionComponents;
        // Initialize app...
    });
</script>
```

## Benefits of Component-Based Architecture

1. **Better Organization**: Each section is in its own file
2. **Easier Maintenance**: Update one component without touching others
3. **Reusability**: Components can be shared across templates
4. **Cleaner Code**: Smaller, focused files instead of one large template object
5. **Team Collaboration**: Multiple developers can work on different components simultaneously

## Migration Status

✅ **Fully Migrated** (as of 2025-11-14)

The Anniversary Wishes template has been successfully migrated from inline `sectionTemplates` to the component-based architecture, following the pattern established in:
- farewell-party.html (fully migrated)
- graduation-ceremony.html (fully migrated)
- business-portfolio.html (in progress)

---

**Last Updated:** 2025-11-14
**Components:** 22 total (21 content + 1 layout)
**Template:** anniversary-wishes.html
**Total Sections Available:** 22 specialized anniversary sections
