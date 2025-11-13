# Migration Example: Converting Templates to Use Components

This guide shows a step-by-step example of converting an existing InviteGen template to use the new reusable components from `components.js`.

## Before and After Comparison

### Step 1: Include the Components Library

**BEFORE:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Wedding Invitation - InviteGen</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- content -->

    <script>
        // Your template code
    </script>
</body>
</html>
```

**AFTER:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Wedding Invitation - InviteGen</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- content -->

    <!-- Load components FIRST -->
    <script src="components.js"></script>

    <!-- Then your template code -->
    <script>
        // Your template code
    </script>
</body>
</html>
```

---

### Step 2: Replace Phone Mockup HTML

**BEFORE:**
```html
<!-- Mobile Frame -->
<div id="mobileFrame" class="w-[375px] h-[667px] bg-gray-900 rounded-[36px] p-3 shadow-2xl mx-auto">
    <div class="w-full h-full bg-white rounded-[28px] overflow-y-auto" id="previewContent">
        <div class="flex items-center justify-center h-full text-center p-8">
            <div>
                <div class="text-6xl mb-4">💒</div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Start Creating</h3>
                <p class="text-gray-600 text-sm">Add sections to build your invitation</p>
            </div>
        </div>
    </div>
</div>

<!-- Tablet Frame -->
<div id="tabletFrame" class="w-[768px] h-[1024px] bg-gray-900 rounded-[36px] p-3 shadow-2xl mx-auto hidden">
    <div class="w-full h-full bg-white rounded-[28px] overflow-y-auto" id="previewContentTablet">
        <!-- Same content as mobile -->
    </div>
</div>
```

**AFTER:**
```html
<!-- Mobile Frame -->
<phone-mockup device="mobile" id="mobileFrame">
    <div id="previewContent">
        <div class="flex items-center justify-center h-full text-center p-8">
            <div>
                <div class="text-6xl mb-4">💒</div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Start Creating</h3>
                <p class="text-gray-600 text-sm">Add sections to build your invitation</p>
            </div>
        </div>
    </div>
</phone-mockup>

<!-- Tablet Frame -->
<phone-mockup device="tablet" id="tabletFrame" style="display: none;">
    <div id="previewContentTablet">
        <!-- Same content as mobile -->
    </div>
</phone-mockup>
```

---

### Step 3: Add Layout Section to sectionTemplates

**BEFORE:**
```javascript
const sectionTemplates = {
    hero: {
        name: '💒 Wedding Hero',
        info: `<div>...</div>`,
        style: `<div>...</div>`,
        render: (data, style) => `<div>...</div>`
    },
    details: {
        name: '📅 Wedding Details',
        info: `<div>...</div>`,
        style: `<div>...</div>`,
        render: (data, style) => `<div>...</div>`
    },
    // ... more sections
};
```

**AFTER:**
```javascript
const sectionTemplates = {
    layout: {
        name: '🎨 Page Layout',
        allowMultiple: false,
        info: LayoutSettingsGenerator.generateLayoutInfoTab(),
        style: LayoutSettingsGenerator.generateLayoutStyleTab(),
        render: (data, style) => {
            // Layout section doesn't render visual content
            return '';
        }
    },
    hero: {
        name: '💒 Wedding Hero',
        info: `<div>...</div>`,
        style: `<div>...</div>`,
        render: (data, style) => `<div>...</div>`
    },
    details: {
        name: '📅 Wedding Details',
        info: `<div>...</div>`,
        style: `<div>...</div>`,
        render: (data, style) => `<div>...</div>`
    },
    // ... more sections
};
```

---

### Step 4: Update Section Info Tabs to Include Navigation Assignment

For each section (except `layout` and `hero`), add navigation assignment dropdown at the end of the Info tab:

**BEFORE:**
```javascript
const sectionTemplates = {
    details: {
        name: '📅 Wedding Details',
        info: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input type="text" placeholder="June 15, 2024" class="w-full px-4 py-2 border rounded-lg section-data" data-field="date">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input type="text" placeholder="3:00 PM" class="w-full px-4 py-2 border rounded-lg section-data" data-field="time">
                </div>
            </div>
        `,
        // ... style and render
    }
};
```

**AFTER:**
```javascript
const sectionTemplates = {
    details: {
        name: '📅 Wedding Details',
        info: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input type="text" placeholder="June 15, 2024" class="w-full px-4 py-2 border rounded-lg section-data" data-field="date">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input type="text" placeholder="3:00 PM" class="w-full px-4 py-2 border rounded-lg section-data" data-field="time">
                </div>

                <!-- Navigation Assignment Container (will be populated dynamically) -->
                <div class="nav-assignment-container"></div>
            </div>
        `,
        // ... style and render
    }
};
```

---

### Step 5: Update the updatePreview() Function

This is the most significant change. Replace your preview generation logic with navigation-aware logic.

**BEFORE:**
```javascript
function updatePreview() {
    const sections = document.querySelectorAll('.section-wrapper');
    let html = '';

    sections.forEach(section => {
        const type = section.dataset.type;
        const template = sectionTemplates[type];
        const { data, style } = getSectionData(section);
        html += template.render(data, style, globalStyles);
    });

    document.getElementById('previewContent').innerHTML = html ||
        '<div class="flex items-center justify-center h-full text-center p-8">...</div>';
}
```

**AFTER:**
```javascript
function updatePreview() {
    const sections = document.querySelectorAll('.section-wrapper');
    const layoutSection = document.querySelector('[data-type="layout"]');
    let html = '';

    // Get global styles
    const globalStyles = getGlobalStyles();

    if (layoutSection) {
        const navType = layoutSection.querySelector('[data-field="navType"]:checked')?.value;

        if (navType === 'tabview') {
            // === TAB VIEW MODE ===
            const tabNamesText = layoutSection.querySelector('[data-field="tabNames"]')?.value || '';
            const tabNames = tabNamesText.split('\n').map(t => t.trim()).filter(t => t);

            if (tabNames.length > 0) {
                const tabStyle = layoutSection.querySelector('[data-field="tabStyle"]')?.value || 'underline';
                const tabAlignment = layoutSection.querySelector('[data-field="tabAlignment"]')?.value || 'left';
                const tabSize = layoutSection.querySelector('[data-field="tabSize"]')?.value || 'medium';

                // Generate tab navigation
                const tabNav = NavigationHelpers.generateTabNavigation({
                    tabNames,
                    tabStyle,
                    tabAlignment,
                    tabSize
                });

                // Group sections by assigned tab
                const sectionsByTab = {};
                tabNames.forEach(tab => {
                    sectionsByTab[tab] = [];
                });

                sections.forEach(section => {
                    const type = section.dataset.type;
                    if (type === 'layout') return;

                    const assignedTab = section.querySelector('[data-field="assignedTab"]')?.value;
                    if (assignedTab && sectionsByTab[assignedTab]) {
                        const template = sectionTemplates[type];
                        const { data, style } = getSectionData(section);
                        sectionsByTab[assignedTab].push({
                            html: template.render(data, style, globalStyles),
                            type: type
                        });
                    }
                });

                // Generate tab content containers
                const tabContainers = NavigationHelpers.generateTabContentContainers(
                    tabNav.id,
                    tabNames,
                    sectionsByTab
                );

                html = tabNav.html + tabContainers;
            }
        } else if (navType === 'topnav') {
            // === TOP NAVIGATION MODE ===
            const navItemsText = layoutSection.querySelector('[data-field="navItems"]')?.value || '';
            const navItems = navItemsText.split('\n').map(t => t.trim()).filter(t => t);

            if (navItems.length > 0) {
                const navStyle = layoutSection.querySelector('[data-field="navStyle"]')?.value || 'simple';
                const navAlignment = layoutSection.querySelector('[data-field="navAlignment"]')?.value || 'left';
                const navSize = layoutSection.querySelector('[data-field="navSize"]')?.value || 'medium';
                const navSticky = layoutSection.querySelector('[data-field="navSticky"]')?.checked ?? true;
                const navBgColor = layoutSection.querySelector('[data-field="navBgColor"]')?.value || '#ffffff';
                const navTextColor = layoutSection.querySelector('[data-field="navTextColor"]')?.value || '#111827';

                // Generate top navigation
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

                // Render hero section (always visible)
                const heroSection = document.querySelector('[data-type="hero"]');
                if (heroSection) {
                    const template = sectionTemplates['hero'];
                    const { data, style } = getSectionData(heroSection);
                    html += template.render(data, style, globalStyles);
                }

                // Group sections by assigned nav item
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
                            html: template.render(data, style, globalStyles),
                            type: type
                        });
                    }
                });

                // Generate navigation content containers
                const navContainers = NavigationHelpers.generateNavContentContainers(
                    topNav.id,
                    navItems,
                    sectionsByNavItem
                );

                html += navContainers;
            }
        } else if (navType === 'bottomnav') {
            // === BOTTOM NAVIGATION MODE ===
            const navItemsText = layoutSection.querySelector('[data-field="navItems"]')?.value || '';
            const navItems = navItemsText.split('\n').map(t => t.trim()).filter(t => t);

            if (navItems.length > 0) {
                const navBgColor = layoutSection.querySelector('[data-field="navBgColor"]')?.value || '#ffffff';
                const navTextColor = layoutSection.querySelector('[data-field="navTextColor"]')?.value || '#111827';
                const showNavIcons = layoutSection.querySelector('[data-field="showNavIcons"]')?.checked ?? true;
                const showNavLabels = layoutSection.querySelector('[data-field="showNavLabels"]')?.checked ?? true;

                // Wrap in flex container for sticky bottom nav
                html += '<div class="min-h-full flex flex-col">';

                // Render hero section (always visible)
                const heroSection = document.querySelector('[data-type="hero"]');
                if (heroSection) {
                    const template = sectionTemplates['hero'];
                    const { data, style } = getSectionData(heroSection);
                    html += template.render(data, style, globalStyles);
                }

                // Group sections by assigned nav item
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
                            html: template.render(data, style, globalStyles),
                            type: type
                        });
                    }
                });

                // Add spacer for bottom nav
                html += '<div class="flex-1">';

                // Generate navigation content containers
                const bottomNav = NavigationHelpers.generateBottomNavigation({
                    navItems,
                    navBgColor,
                    navTextColor,
                    showLabels: showNavLabels,
                    showIcons: showNavIcons
                });

                const navContainers = NavigationHelpers.generateNavContentContainers(
                    bottomNav.id,
                    navItems,
                    sectionsByNavItem
                );

                html += navContainers;
                html += '</div>'; // Close spacer
                html += bottomNav.html;
                html += '</div>'; // Close flex container
            }
        } else {
            // === NO NAVIGATION (DEFAULT) ===
            sections.forEach(section => {
                const type = section.dataset.type;
                if (type === 'layout') return;

                const template = sectionTemplates[type];
                const { data, style } = getSectionData(section);
                html += template.render(data, style, globalStyles);
            });
        }
    } else {
        // No layout section - render all sections normally
        sections.forEach(section => {
            const type = section.dataset.type;
            const template = sectionTemplates[type];
            const { data, style } = getSectionData(section);
            html += template.render(data, style, globalStyles);
        });
    }

    // Update preview
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = html ||
        '<div class="flex items-center justify-center h-full text-center p-8">...</div>';

    // Sync mobile preview if it exists
    const mobilePreviewContent = document.getElementById('mobilePreviewContent');
    if (mobilePreviewContent) {
        mobilePreviewContent.innerHTML = previewContent.innerHTML;
    }
}
```

---

### Step 6: Add Helper Function for Global Styles

Add this helper function if you use global styles:

```javascript
function getGlobalStyles() {
    const layoutSection = document.querySelector('[data-type="layout"]');
    if (!layoutSection) return {};

    const navBgColor = layoutSection.querySelector('[data-field="navBgColor"]')?.value || '#ffffff';
    const navTextColor = layoutSection.querySelector('[data-field="navTextColor"]')?.value || '#111827';

    return {
        navBgColor,
        navTextColor
    };
}
```

---

### Step 7: Update Section Modal to Include Layout

**BEFORE:**
```html
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <button data-section-type="hero" onclick="addSection('hero')" class="...">
        <div class="text-4xl mb-2">💒</div>
        <div class="font-semibold text-sm">Wedding Hero</div>
    </button>
    <!-- more sections -->
</div>
```

**AFTER:**
```html
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <button data-section-type="layout" onclick="addSection('layout')" class="...">
        <div class="text-4xl mb-2">🎨</div>
        <div class="font-semibold text-sm">Page Layout</div>
    </button>
    <button data-section-type="hero" onclick="addSection('hero')" class="...">
        <div class="text-4xl mb-2">💒</div>
        <div class="font-semibold text-sm">Wedding Hero</div>
    </button>
    <!-- more sections -->
</div>
```

---

### Step 8: Update addSection Function to Populate Navigation Dropdowns

**BEFORE:**
```javascript
function addSection(type) {
    const template = sectionTemplates[type];
    const id = `section-${++sectionCounter}`;

    const sectionHtml = `
        <div class="section-wrapper bg-white border rounded-xl mb-4" data-id="${id}" data-type="${type}">
            <!-- section HTML -->
        </div>
    `;

    document.getElementById('sectionsContainer').insertAdjacentHTML('beforeend', sectionHtml);
    closeSectionModal();
    updatePreview();
}
```

**AFTER:**
```javascript
function addSection(type) {
    const template = sectionTemplates[type];

    // Check if section type only allows one instance
    if (template.allowMultiple === false) {
        const existingSection = document.querySelector(`[data-type="${type}"]`);
        if (existingSection) {
            alert(`Only one ${template.name} section is allowed`);
            return;
        }
    }

    const id = `section-${++sectionCounter}`;

    const sectionHtml = `
        <div class="section-wrapper bg-white border rounded-xl mb-4" data-id="${id}" data-type="${type}">
            <!-- section HTML -->
        </div>
    `;

    document.getElementById('sectionsContainer').insertAdjacentHTML('beforeend', sectionHtml);
    closeSectionModal();

    // Populate navigation dropdown for this section (if applicable)
    if (type !== 'layout' && type !== 'hero') {
        setTimeout(() => {
            updateSectionNavigationDropdowns();
        }, 10);
    }

    updatePreview();
}
```

---

## Summary of Changes

1. ✅ Include `components.js` before your template script
2. ✅ Replace phone mockup HTML with `<phone-mockup>` component
3. ✅ Add `layout` section to `sectionTemplates` using `LayoutSettingsGenerator`
4. ✅ Add navigation assignment container to all section Info tabs
5. ✅ Completely rewrite `updatePreview()` to handle navigation modes
6. ✅ Add helper function `getGlobalStyles()` if needed
7. ✅ Add Layout button to section modal
8. ✅ Update `addSection()` to populate navigation dropdowns

---

## Testing Checklist

After migration, test these scenarios:

- [ ] Add Layout section and configure Tab View
- [ ] Add sections and assign them to different tabs
- [ ] Switch between tabs in preview
- [ ] Configure Top Navigation Bar
- [ ] Assign sections to navigation items
- [ ] Switch between navigation items in preview
- [ ] Configure Bottom Navigation Bar
- [ ] Test with icons only, labels only, and both
- [ ] Test "No Navigation" mode (all sections visible)
- [ ] Test color customization for navigation bars
- [ ] Test mobile and tablet preview modes
- [ ] Test section deletion
- [ ] Test that hero section always appears first (in nav modes)

---

## Common Issues

### Navigation doesn't switch
**Solution:** Make sure `components.js` is loaded first and check browser console for errors.

### Dropdowns don't appear
**Solution:** Call `updateSectionNavigationDropdowns()` after adding sections or changing layout configuration.

### Styles look wrong
**Solution:** Ensure Tailwind CSS is loaded and that you're using the correct class names.

### Hero section appears twice
**Solution:** In top/bottom nav modes, make sure you're checking for `type === 'hero'` and skipping it in the sections loop.

---

## Need Help?

Refer to:
- `COMPONENTS.md` - Full API documentation
- `components.js` - Source code with inline comments
- `business-portfolio.html` - Complete working example

---

*Last Updated: 2025-11-13*
