// Signature Component - Shared across multiple greeting card templates
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.signature = {
    name: '✍️ Signature',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="closing" onchange="updatePreview()" placeholder="With love and best wishes">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="name" onchange="updatePreview()" placeholder="Your Name">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" onchange="updatePreview()">
                    <option value="standard">Standard</option>
                    <option value="handwritten">Handwritten Style</option>
                    <option value="formal">Formal</option>
                    <option value="modern">Modern</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="bgColor" value="#ffffff" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="textColor" value="#1f2937" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="align" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bgColor || '#ffffff';
        const textColor = style.textColor || '#1f2937';
        const align = style.align || 'center';
        const layout = style.layout || 'standard';
        const closing = data.closing || 'With love';
        const name = data.name || 'Your Friend';

        if (layout === 'handwritten') {
            return `
                <div class="p-8" style="background-color: ${bgColor}; text-align: ${align};">
                    <div class="max-w-lg mx-auto">
                        <p class="text-xl font-serif italic mb-3" style="color: ${textColor};">${closing},</p>
                        <p class="text-2xl font-serif italic" style="color: ${textColor};">${name}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'formal') {
            return `
                <div class="p-8" style="background-color: ${bgColor}; text-align: ${align};">
                    <div class="max-w-lg mx-auto border-t-2 border-gray-300 pt-6">
                        <p class="text-base uppercase tracking-wide text-gray-600 mb-2">${closing}</p>
                        <p class="text-2xl font-bold" style="color: ${textColor};">${name}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto" style="text-align: ${align};">
                        <div class="inline-block px-6 py-4 rounded-xl" style="background-color: ${textColor}10;">
                            <p class="text-sm mb-1 opacity-70" style="color: ${textColor};">${closing}</p>
                            <p class="text-xl font-bold" style="color: ${textColor};">${name}</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Standard layout
            return `
                <div class="p-8" style="background-color: ${bgColor}; text-align: ${align};">
                    <div class="max-w-lg mx-auto">
                        <p class="text-lg text-gray-700 mb-2">${closing},</p>
                        <p class="text-xl font-semibold" style="color: ${textColor};">${name}</p>
                    </div>
                </div>
            `;
        }
    }
};
