# Business Portfolio Components

This directory contains modular, reusable components for the business portfolio editor.

## Structure

```
components/
├── README.md                    # This file
├── components-loader.js         # Main loader script
├── dynamic-templates.js         # Templates for dynamic items (pricing, FAQ, etc.)
├── pricing.component.js         # ✅ Example component (completed)
├── faq.component.js            # Todo
├── awards.component.js         # Todo
├── features.component.js       # Todo
├── process.component.js        # Todo
├── stats.component.js          # Todo
└── ... (15 more components)
```

## Component File Format

Each component file follows this structure:

```javascript
// Component Name
// Brief description of what this component does

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.componentname = {
    name: '🎯 Display Name',
    allowMultiple: false,  // or true if multiple instances allowed

    // Info tab content (form fields)
    info: (sectionId) => `
        <div class="space-y-4">
            <!-- Form fields here -->
        </div>
    `,

    // Style tab content (styling options)
    style: `
        <div class="space-y-4">
            <!-- Style controls here -->
        </div>
    `,

    // Render function (generates preview HTML)
    render: (data, style) => {
        // Process data and return HTML
        return `<div>...</div>`;
    }
};
```

## Components with Dynamic Items

Some components support adding/removing multiple items (pricing plans, FAQ questions, etc.). These use the `dynamicItemTemplates` defined in `dynamic-templates.js`.

**Sections with dynamic items:**
- `pricing` - Multiple pricing plans
- `faq` - Multiple Q&A pairs
- `awards` - Multiple awards
- `features` - Multiple features
- `process` - Multiple steps
- `stats` - Multiple statistics

**How to add dynamic items to a component:**

1. Add a container in the info section:
```javascript
info: (sectionId) => `
    <div class="border-t pt-4 mt-4">
        <div class="flex justify-between items-center mb-3">
            <h4 class="font-medium text-gray-700">Items</h4>
            <button onclick="addDynamicItem('${sectionId}', 'items'); return false;"
                    type="button"
                    class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                + Add Item
            </button>
        </div>
        <div data-items-container="items"></div>
    </div>
`
```

2. Add the item template to `dynamic-templates.js`

3. Update the render function to collect dynamic items

## Loading Components in HTML

Add these script tags to your HTML file (in order):

```html
<!-- 1. Load dynamic templates first -->
<script src="components/dynamic-templates.js"></script>

<!-- 2. Load all component files -->
<script src="components/layout.component.js"></script>
<script src="components/hero.component.js"></script>
<script src="components/about.component.js"></script>
<!-- ... load all component files ... -->

<!-- 3. Load the component loader last -->
<script src="components/components-loader.js"></script>
```

## Benefits of Component Structure

1. **Maintainability** - Each section is in its own file
2. **Reusability** - Components can be shared across templates
3. **Organization** - Easy to find and edit specific sections
4. **Collaboration** - Multiple developers can work on different components
5. **Testing** - Components can be tested in isolation

## Creating New Components

1. Create a new file: `components/yourcomponent.component.js`
2. Follow the component format above
3. Add the script tag to your HTML
4. The component will automatically be available in the section picker

## Migration Status

- ✅ Components directory created
- ✅ Dynamic templates extracted
- ✅ Component loader created
- ✅ Example component created (pricing)
- ⏳ Remaining 19 components to extract
- ⏳ HTML file to be updated with component loaders

## Next Steps

1. Extract remaining components from `business-portfolio.html`
2. Update HTML to load components via script tags
3. Test that all components work correctly
4. Remove inline `sectionTemplates` object from HTML

## Example: Pricing Component

See `pricing.component.js` for a complete example of a component with dynamic items.
