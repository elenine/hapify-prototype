// Layout component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.layout = {
    name: '🎨 Layout & Global Settings',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <p class="text-sm text-gray-600">Configure global appearance settings for your congratulations card</p>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <input type="color" class="section-style w-full h-10 rounded-lg border border-gray-300" data-style="primaryColor" value="#f59e0b" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" class="section-style w-full h-10 rounded-lg border border-gray-300" data-style="secondaryColor" value="#ea580c" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="section-style w-full h-10 rounded-lg border border-gray-300" data-style="bgColor" value="#ffffff" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" class="section-style w-full h-10 rounded-lg border border-gray-300" data-style="textColor" value="#1f2937" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg" data-style="fontFamily" onchange="updatePreview()">
                    <option value="system-ui, -apple-system, sans-serif">System Default</option>
                    <option value="Georgia, serif">Georgia</option>
                    <option value="'Times New Roman', serif">Times New Roman</option>
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="'Courier New', monospace">Courier New</option>
                    <option value="'Comic Sans MS', cursive">Comic Sans</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        return '';
    }
};
