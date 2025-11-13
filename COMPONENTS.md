# InviteGen Reusable Components Documentation

## Overview

The `components.js` library provides reusable web components and utilities for creating consistent editor interfaces across all InviteGen templates. This eliminates code duplication and makes it easy to maintain navigation bars, preview frames, and editor sections.

## Table of Contents

1. [Installation](#installation)
2. [Web Components](#web-components)
   - [PhoneMockup](#phonemockup)
   - [SectionWrapper](#sectionwrapper)
3. [Navigation Helpers](#navigation-helpers)
4. [Layout Settings Generator](#layout-settings-generator)
5. [Global Functions](#global-functions)
6. [Migration Guide](#migration-guide)

---

## Installation

Add the components script to your HTML file **before** your main template script:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Template - InviteGen</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Your HTML content -->

    <!-- Load components library FIRST -->
    <script src="components.js"></script>

    <!-- Then your template script -->
    <script>
        // Your template-specific code
    </script>
</body>
</html>
```

---

## Web Components

### PhoneMockup

A customizable device preview frame that simulates mobile and tablet devices.

#### Usage

```html
<phone-mockup device="mobile">
    <div id="previewContent">
        <!-- Your preview content goes here -->
    </div>
</phone-mockup>
```

#### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `device` | string | `mobile` | Device type: `mobile` or `tablet` |
| `width` | string | auto | Custom width (e.g., `400px`) |
| `height` | string | auto | Custom height (e.g., `700px`) |

#### Default Dimensions

- **Mobile**: 375px × 667px (iPhone SE size)
- **Tablet**: 768px × 1024px (iPad size)

#### Example

```html
<!-- Mobile preview -->
<phone-mockup device="mobile">
    <div>Mobile content</div>
</phone-mockup>

<!-- Tablet preview -->
<phone-mockup device="tablet">
    <div>Tablet content</div>
</phone-mockup>

<!-- Custom size -->
<phone-mockup width="400px" height="800px">
    <div>Custom size content</div>
</phone-mockup>
```

#### JavaScript Control

```javascript
// Change device type
const mockup = document.querySelector('phone-mockup');
mockup.setAttribute('device', 'tablet');

// Change size dynamically
mockup.setAttribute('width', '400px');
mockup.setAttribute('height', '800px');
```

---

### SectionWrapper

A consistent section editor with Info/Style tabs, perfect for the left panel editor interface.

#### Usage

```html
<section-wrapper
    section-title="Hero Banner"
    section-icon="💼"
    section-id="section-1"
    section-type="hero">

    <!-- Info tab content -->
    <div slot="info">
        <label>Title</label>
        <input type="text" placeholder="Enter title" />
    </div>

    <!-- Style tab content -->
    <div slot="style">
        <label>Background Color</label>
        <input type="color" value="#ffffff" />
    </div>
</section-wrapper>
```

#### Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `section-title` | string | Yes | Display name of the section |
| `section-icon` | string | Yes | Emoji icon for the section |
| `section-id` | string | Yes | Unique identifier for the section |
| `section-type` | string | Yes | Section type (e.g., `hero`, `about`) |

#### Events

The component emits custom events:

```javascript
// Listen for delete event
sectionWrapper.addEventListener('section-delete', (event) => {
    const sectionId = event.detail.id;
    console.log('Delete section:', sectionId);
    // Handle section deletion
});
```

#### Example

```html
<section-wrapper
    section-title="About Us"
    section-icon="ℹ️"
    section-id="about-123"
    section-type="about">

    <div slot="info" class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
                Company Name
            </label>
            <input type="text"
                   class="w-full px-4 py-2 border rounded-lg section-data"
                   data-field="companyName"
                   placeholder="Enter company name" />
        </div>
    </div>

    <div slot="style" class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
                Background Color
            </label>
            <input type="color"
                   value="#ffffff"
                   class="w-full h-10 rounded-lg section-style"
                   data-field="bgColor" />
        </div>
    </div>
</section-wrapper>
```

---

## Navigation Helpers

The `NavigationHelpers` object provides utility functions for generating navigation bars.

### generateTabNavigation(config)

Generates tab-style navigation for tab view mode.

#### Parameters

```javascript
const config = {
    tabNames: ['Home', 'About', 'Services'],  // Array of tab names
    tabStyle: 'underline',                     // 'underline' | 'pills' | 'buttons' | 'boxed'
    tabAlignment: 'left',                      // 'left' | 'center' | 'right'
    tabSize: 'medium',                         // 'small' | 'medium' | 'large'
    tabId: 'tab-unique-id'                     // Optional unique ID (auto-generated if not provided)
};
```

#### Returns

```javascript
{
    id: 'tab-1234567890',    // Unique tab ID
    html: '<div>...</div>'   // HTML string for the navigation
}
```

#### Example

```javascript
const tabNav = NavigationHelpers.generateTabNavigation({
    tabNames: ['Home', 'About', 'Services', 'Contact'],
    tabStyle: 'pills',
    tabAlignment: 'center',
    tabSize: 'medium'
});

// Insert into preview
previewContent.innerHTML = tabNav.html + otherContent;
```

### generateTopNavigation(config)

Generates a top navigation bar (sticky or static).

#### Parameters

```javascript
const config = {
    navItems: ['Home', 'About', 'Portfolio'],  // Array of nav items
    navStyle: 'simple',                        // 'simple' | 'underline' | 'pills' | 'bordered'
    navAlignment: 'left',                      // 'left' | 'center' | 'right'
    navSize: 'medium',                         // 'small' | 'medium' | 'large'
    navBgColor: '#ffffff',                     // Background color
    navTextColor: '#111827',                   // Text color
    navSticky: true,                           // Sticky positioning
    navId: 'nav-unique-id'                     // Optional unique ID
};
```

#### Returns

```javascript
{
    id: 'nav-1234567890',    // Unique nav ID
    html: '<div>...</div>'   // HTML string for the navigation
}
```

#### Example

```javascript
const topNav = NavigationHelpers.generateTopNavigation({
    navItems: ['Home', 'About', 'Services', 'Contact'],
    navStyle: 'underline',
    navAlignment: 'center',
    navBgColor: '#f9fafb',
    navTextColor: '#1f2937',
    navSticky: true
});

previewContent.innerHTML = topNav.html + heroSection + contentSections;
```

### generateBottomNavigation(config)

Generates a bottom navigation bar (mobile-style).

#### Parameters

```javascript
const config = {
    navItems: ['Home', 'About', 'Services'],   // Array of nav items (max 5 recommended)
    navStyle: 'simple',                        // Currently only 'simple' supported
    navBgColor: '#ffffff',                     // Background color
    navTextColor: '#111827',                   // Text color
    showLabels: true,                          // Show text labels
    showIcons: true,                           // Show icons
    navId: 'nav-unique-id'                     // Optional unique ID
};
```

#### Returns

```javascript
{
    id: 'nav-1234567890',    // Unique nav ID
    html: '<div>...</div>'   // HTML string for the navigation
}
```

#### Example

```javascript
const bottomNav = NavigationHelpers.generateBottomNavigation({
    navItems: ['Home', 'About', 'Portfolio', 'Contact'],
    navBgColor: '#ffffff',
    navTextColor: '#374151',
    showLabels: true,
    showIcons: true
});

// Bottom nav is fixed, so just append it
previewContent.innerHTML = heroSection + contentSections + bottomNav.html;
```

### generateTabContentContainers(tabId, tabNames, sectionsByTab)

Generates container divs for tab content sections.

#### Parameters

```javascript
const tabId = 'tab-1234567890';        // ID from generateTabNavigation
const tabNames = ['Home', 'About'];     // Array of tab names
const sectionsByTab = {
    'Home': [
        { html: '<div>Section 1</div>', type: 'hero' },
        { html: '<div>Section 2</div>', type: 'about' }
    ],
    'About': [
        { html: '<div>Section 3</div>', type: 'team' }
    ]
};
```

#### Returns

```javascript
'<div class="preview-tab-contents">...</div>'  // HTML string
```

#### Example

```javascript
// Generate tab navigation
const tabNav = NavigationHelpers.generateTabNavigation({
    tabNames: ['Home', 'About'],
    tabStyle: 'pills'
});

// Organize sections by tab
const sectionsByTab = {
    'Home': [],
    'About': []
};

sections.forEach(section => {
    const assignedTab = section.querySelector('[data-field="assignedTab"]')?.value;
    if (assignedTab && sectionsByTab[assignedTab]) {
        const template = sectionTemplates[section.dataset.type];
        const { data, style } = getSectionData(section);
        sectionsByTab[assignedTab].push({
            html: template.render(data, style),
            type: section.dataset.type
        });
    }
});

// Generate complete HTML
const tabContainers = NavigationHelpers.generateTabContentContainers(
    tabNav.id,
    ['Home', 'About'],
    sectionsByTab
);

previewContent.innerHTML = tabNav.html + tabContainers;
```

### generateNavContentContainers(navId, navItems, sectionsByNavItem)

Generates container divs for navigation item content sections (top/bottom nav).

#### Parameters

```javascript
const navId = 'nav-1234567890';           // ID from generateTopNavigation/generateBottomNavigation
const navItems = ['Home', 'About'];        // Array of nav items
const sectionsByNavItem = {
    'Home': [
        { html: '<div>Section 1</div>', type: 'hero' }
    ],
    'About': [
        { html: '<div>Section 2</div>', type: 'about' }
    ]
};
```

#### Returns

```javascript
'<div class="nav-sections-container">...</div>'  // HTML string
```

---

## Layout Settings Generator

The `LayoutSettingsGenerator` provides pre-built HTML for layout configuration sections.

### generateLayoutInfoTab()

Generates the complete Info tab for the Layout section, including:
- Navigation type selection (None, Tab View, Top Nav, Bottom Nav)
- Tab View configuration (tab names, style, alignment, size)
- Top Navigation configuration (nav items, style, alignment, size, sticky)
- Bottom Navigation configuration (nav items, show icons/labels)

#### Usage

```javascript
const sectionTemplates = {
    layout: {
        name: '🎨 Page Layout',
        allowMultiple: false,
        info: LayoutSettingsGenerator.generateLayoutInfoTab(),
        style: LayoutSettingsGenerator.generateLayoutStyleTab(),
        render: (data, style) => {
            // Your render logic
        }
    }
};
```

### generateLayoutStyleTab()

Generates the Style tab for the Layout section, including:
- Navigation bar background color
- Navigation bar text color

#### Usage

```javascript
const sectionTemplates = {
    layout: {
        name: '🎨 Page Layout',
        allowMultiple: false,
        info: LayoutSettingsGenerator.generateLayoutInfoTab(),
        style: LayoutSettingsGenerator.generateLayoutStyleTab(),
        render: (data, style) => {
            // Your render logic
        }
    }
};
```

---

## Global Functions

The components library adds several global functions to the `window` object for navigation control.

### switchPreviewTab(tabId, tabName)

Switches between tabs in tab view mode.

**Called automatically by tab buttons** - you typically don't need to call this manually.

```javascript
// Manually switch to a specific tab
switchPreviewTab('tab-1234567890', 'About');
```

### switchNavSection(navId, navItem)

Switches between navigation sections in top/bottom nav mode.

**Called automatically by nav buttons** - you typically don't need to call this manually.

```javascript
// Manually switch to a specific navigation section
switchNavSection('nav-1234567890', 'Portfolio');
```

### toggleNavigationSettings(radio)

Shows/hides the appropriate navigation configuration panels based on selected nav type.

**Called automatically by radio button changes** in the layout settings.

```javascript
// Manually toggle (usually not needed)
const radioButton = document.querySelector('[name="navType"][value="tabview"]');
toggleNavigationSettings(radioButton);
```

### generateNavigationAssignmentDropdown(currentValue)

Generates a dropdown menu for assigning sections to tabs or navigation items.

```javascript
// Generate dropdown for a section
const dropdownHtml = generateNavigationAssignmentDropdown('Home');
```

### updateSectionNavigationDropdowns()

Updates all section assignment dropdowns when layout configuration changes.

**Called automatically when tab names or nav items change**.

```javascript
// Manually trigger update
updateSectionNavigationDropdowns();
```

---

## Migration Guide

### Step 1: Include the Components Library

Add the script tag to your HTML:

```html
<script src="components.js"></script>
<script>
    // Your existing template code
</script>
```

### Step 2: Add Layout Section Template

Replace your existing layout section with the generated one:

```javascript
const sectionTemplates = {
    layout: {
        name: '🎨 Page Layout',
        allowMultiple: false,
        info: LayoutSettingsGenerator.generateLayoutInfoTab(),
        style: LayoutSettingsGenerator.generateLayoutStyleTab(),
        render: (data, style) => {
            // No visual output for layout section
            return '';
        }
    },
    // ... your other sections
};
```

### Step 3: Update Preview Generation Logic

In your `updatePreview()` function, use the Navigation Helpers:

```javascript
function updatePreview() {
    const sections = document.querySelectorAll('.section-wrapper');
    const layoutSection = document.querySelector('[data-type="layout"]');
    let html = '';

    if (layoutSection) {
        const navType = layoutSection.querySelector('[data-field="navType"]:checked')?.value;

        if (navType === 'tabview') {
            // Use Tab Navigation
            const tabNamesText = layoutSection.querySelector('[data-field="tabNames"]')?.value || '';
            const tabNames = tabNamesText.split('\n').map(t => t.trim()).filter(t => t);
            const tabStyle = layoutSection.querySelector('[data-field="tabStyle"]')?.value || 'underline';
            const tabAlignment = layoutSection.querySelector('[data-field="tabAlignment"]')?.value || 'left';
            const tabSize = layoutSection.querySelector('[data-field="tabSize"]')?.value || 'medium';

            const tabNav = NavigationHelpers.generateTabNavigation({
                tabNames,
                tabStyle,
                tabAlignment,
                tabSize
            });

            // First, render hero section (always visible, before tabs)
            const heroSection = document.querySelector('[data-type="hero"]');
            if (heroSection) {
                const template = sectionTemplates['hero'];
                const { data, style } = getSectionData(heroSection);
                html += template.render(data, style);
            }

            // Group sections by tab
            const sectionsByTab = {};
            tabNames.forEach(tab => {
                sectionsByTab[tab] = [];
            });

            sections.forEach(section => {
                const type = section.dataset.type;
                if (type === 'layout' || type === 'hero') return;

                const assignedTab = section.querySelector('[data-field="assignedNavItem"]')?.value;
                if (assignedTab && sectionsByTab[assignedTab]) {
                    const template = sectionTemplates[type];
                    const { data, style } = getSectionData(section);
                    sectionsByTab[assignedTab].push({
                        html: template.render(data, style),
                        type: type
                    });
                }
            });

            const tabContainers = NavigationHelpers.generateTabContentContainers(
                tabNav.id,
                tabNames,
                sectionsByTab
            );

            html += tabNav.html + tabContainers;
        } else if (navType === 'topnav') {
            // Use Top Navigation
            const navItemsText = layoutSection.querySelector('[data-field="navItems"]')?.value || '';
            const navItems = navItemsText.split('\n').map(t => t.trim()).filter(t => t);
            const navStyle = layoutSection.querySelector('[data-field="navStyle"]')?.value || 'simple';
            const navAlignment = layoutSection.querySelector('[data-field="navAlignment"]')?.value || 'left';
            const navSize = layoutSection.querySelector('[data-field="navSize"]')?.value || 'medium';
            const navSticky = layoutSection.querySelector('[data-field="navSticky"]')?.checked ?? true;
            const navBgColor = layoutSection.querySelector('[data-field="navBgColor"]')?.value || '#ffffff';
            const navTextColor = layoutSection.querySelector('[data-field="navTextColor"]')?.value || '#111827';

            const topNav = NavigationHelpers.generateTopNavigation({
                navItems,
                navStyle,
                navAlignment,
                navSize,
                navBgColor,
                navTextColor,
                navSticky
            });

            html += topNav.html;

            // Render hero section first (always visible)
            const heroSection = document.querySelector('[data-type="hero"]');
            if (heroSection) {
                const template = sectionTemplates['hero'];
                const { data, style } = getSectionData(heroSection);
                html += template.render(data, style);
            }

            // Group sections by nav item
            const sectionsByNavItem = {};
            navItems.forEach(item => {
                sectionsByNavItem[item] = [];
            });

            sections.forEach(section => {
                const type = section.dataset.type;
                if (type === 'layout' || type === 'hero') return;

                const assignedNavItem = section.querySelector('[data-field="assignedNavItem"]')?.value;
                if (assignedNavItem && sectionsByNavItem[assignedNavItem]) {
                    const template = sectionTemplates[type];
                    const { data, style } = getSectionData(section);
                    sectionsByNavItem[assignedNavItem].push({
                        html: template.render(data, style),
                        type: type
                    });
                }
            });

            const navContainers = NavigationHelpers.generateNavContentContainers(
                topNav.id,
                navItems,
                sectionsByNavItem
            );

            html += navContainers;
        } else if (navType === 'bottomnav') {
            // Similar to topnav, but with bottom navigation
            // ... (see full example in business-portfolio.html)
        }
    } else {
        // No layout section - render all sections normally
        sections.forEach(section => {
            const type = section.dataset.type;
            const template = sectionTemplates[type];
            const { data, style } = getSectionData(section);
            html += template.render(data, style);
        });
    }

    document.getElementById('previewContent').innerHTML = html;
}
```

### Step 4: Optional - Use PhoneMockup Component

Replace your hardcoded phone frame with the component:

**Before:**
```html
<div class="w-[375px] h-[667px] bg-gray-900 rounded-[36px] p-3 shadow-2xl">
    <div class="w-full h-full bg-white rounded-[28px] overflow-y-auto" id="previewContent">
        <!-- Preview content -->
    </div>
</div>
```

**After:**
```html
<phone-mockup device="mobile">
    <div id="previewContent">
        <!-- Preview content -->
    </div>
</phone-mockup>
```

### Step 5: Optional - Use SectionWrapper Component

You can gradually migrate your section HTML to use the SectionWrapper component, but this is optional. The component is most useful for new templates or major refactorings.

---

## Complete Example

Here's a complete minimal example using all components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Template - InviteGen</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="flex h-screen">
        <!-- Left Panel -->
        <div class="w-1/2 p-6 overflow-y-auto">
            <h2 class="text-2xl font-bold mb-6">Editor</h2>
            <div id="sectionsContainer"></div>
            <button onclick="addSection('hero')" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                Add Section
            </button>
        </div>

        <!-- Right Panel -->
        <div class="w-1/2 p-6 bg-gray-100 flex items-center justify-center">
            <phone-mockup device="mobile">
                <div id="previewContent">
                    <div class="p-8 text-center">
                        <h3 class="text-xl font-bold">Preview</h3>
                    </div>
                </div>
            </phone-mockup>
        </div>
    </div>

    <script src="components.js"></script>
    <script>
        let sectionCounter = 0;

        const sectionTemplates = {
            layout: {
                name: '🎨 Page Layout',
                allowMultiple: false,
                info: LayoutSettingsGenerator.generateLayoutInfoTab(),
                style: LayoutSettingsGenerator.generateLayoutStyleTab(),
                render: () => ''
            },
            hero: {
                name: '💼 Hero Section',
                info: `<div><input type="text" placeholder="Title" data-field="title" class="section-data" /></div>`,
                style: `<div><input type="color" value="#ffffff" data-field="bgColor" class="section-style" /></div>`,
                render: (data, style) => `
                    <div style="background-color: ${style.bgColor}; padding: 2rem;">
                        <h1>${data.title || 'Welcome'}</h1>
                    </div>
                `
            }
        };

        function addSection(type) {
            const id = `section-${++sectionCounter}`;
            const template = sectionTemplates[type];

            const wrapper = document.createElement('section-wrapper');
            wrapper.setAttribute('section-title', template.name);
            wrapper.setAttribute('section-icon', template.name.split(' ')[0]);
            wrapper.setAttribute('section-id', id);
            wrapper.setAttribute('section-type', type);
            wrapper.classList.add('section-wrapper', 'mb-4');
            wrapper.dataset.type = type;

            wrapper.innerHTML = `
                <div slot="info">${template.info}</div>
                <div slot="style">${template.style}</div>
            `;

            wrapper.addEventListener('section-delete', (e) => {
                wrapper.remove();
                updatePreview();
            });

            document.getElementById('sectionsContainer').appendChild(wrapper);
            updatePreview();
        }

        function getSectionData(section) {
            const data = {};
            const style = {};

            section.querySelectorAll('.section-data').forEach(input => {
                const field = input.dataset.field;
                data[field] = input.type === 'checkbox' ? input.checked : input.value;
            });

            section.querySelectorAll('.section-style').forEach(input => {
                const field = input.dataset.field;
                style[field] = input.value;
            });

            return { data, style };
        }

        function updatePreview() {
            const sections = document.querySelectorAll('.section-wrapper');
            let html = '';

            sections.forEach(section => {
                const type = section.dataset.type;
                const template = sectionTemplates[type];
                const { data, style } = getSectionData(section);
                html += template.render(data, style);
            });

            document.getElementById('previewContent').innerHTML = html || '<div class="p-8 text-center text-gray-500">Add sections to see preview</div>';
        }

        // Add initial layout section
        addSection('layout');
    </script>
</body>
</html>
```

---

## Browser Compatibility

The components library requires:
- ES6+ support (Chrome 51+, Firefox 54+, Safari 10+, Edge 15+)
- Web Components v1 (Custom Elements)
- Shadow DOM v1

All modern browsers since 2018 support these features natively.

---

## Best Practices

1. **Always load components.js before your template script**
2. **Use the Layout Settings Generator** for consistent navigation configuration
3. **Call `updatePreview()` after any data changes** to keep the preview in sync
4. **Use `data-field` attributes** on inputs to make data extraction easier
5. **Keep section templates pure** - they should only depend on data and style parameters
6. **Test navigation with multiple tabs/items** to ensure proper switching behavior

---

## Troubleshooting

### Navigation doesn't switch

- Make sure `components.js` is loaded before your template script
- Check browser console for JavaScript errors
- Verify that `switchPreviewTab()` or `switchNavSection()` functions exist in global scope

### Section assignment dropdowns don't appear

- Ensure you've added a Layout section first
- Check that tab names or nav items are entered (one per line)
- Call `updateSectionNavigationDropdowns()` after layout changes

### PhoneMockup doesn't display correctly

- Verify Tailwind CSS is loaded
- Check that the component is defined: `console.log(customElements.get('phone-mockup'))`
- Ensure you're not overriding Shadow DOM styles

### SectionWrapper tabs don't work

- The component handles tab switching internally via Shadow DOM
- Don't try to manually switch tabs from outside the component
- Use the `section-delete` event to handle deletion

---

## Contributing

To add new features to the components library:

1. Add your component/function to `components.js`
2. Document it in this file (COMPONENTS.md)
3. Test it in at least one template
4. Update the version number and changelog

---

## Changelog

### Version 1.0.0 (2025-11-13)
- Initial release
- PhoneMockup web component
- SectionWrapper web component
- NavigationHelpers utility functions
- LayoutSettingsGenerator
- Global navigation switching functions

---

## License

This components library is part of the InviteGen project and follows the same license.

---

## Support

For questions or issues with the components library:
1. Check this documentation thoroughly
2. Review the example in business-portfolio.html
3. Check browser console for errors
4. Contact the project maintainers

---

*Last Updated: 2025-11-13*
*Components Version: 1.0.0*
