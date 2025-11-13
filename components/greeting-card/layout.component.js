// Page Layout Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.layout = {
    name: '🎨 Page Layout',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div class="border-b pb-4 mb-4">
                <label class="block text-sm font-semibold text-gray-700 mb-3">Navigation Layout Type</label>
                <div class="space-y-2">
                    <label class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="navType" value="none" class="section-data" data-field="navType" onchange="toggleNavigationSettings(this); updatePreview()" checked>
                        <div>
                            <div class="font-medium text-sm">No Navigation</div>
                            <div class="text-xs text-gray-600">Standard scrolling layout</div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <h4 class="text-sm font-semibold text-gray-700 border-b pb-2 mb-4">Global Colors</h4>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="primaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => '' // Layout section doesn't render visible content
};
