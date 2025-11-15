// Photo Component - Shared across multiple greeting card templates
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photo = {
    name: '📷 Photo',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="image" onchange="handleImageUpload(this)">
                <p class="text-xs text-gray-500 mt-1">Upload a photo or leave blank for default</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption (Optional)</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="caption" onchange="updatePreview()" placeholder="Add a caption to your photo">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" onchange="updatePreview()">
                    <option value="standard">Standard Rounded</option>
                    <option value="framed">Classic Frame</option>
                    <option value="polaroid">Polaroid Snap</option>
                    <option value="circular">Circular Focus</option>
                    <option value="gallery">Gallery Wall</option>
                    <option value="scrapbook">Scrapbook Style</option>
                    <option value="floating">Floating Shadow</option>
                    <option value="magazine">Magazine Layout</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="bgColor" value="#ffffff" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="accentColor" value="#10b981" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="textColor" value="#1f2937" onchange="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'standard';
        const bgColor = style.bgColor || '#ffffff';
        const accentColor = style.accentColor || '#10b981';
        const textColor = style.textColor || '#1f2937';
        const caption = data.caption || '';
        const image = data.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60"%3E📷%3C/text%3E%3C/svg%3E';

        const layouts = {
            standard: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <img src="${image}" alt="Photo" class="w-full h-72 object-cover rounded-xl shadow-lg">
                        ${caption ? `<p class="text-center mt-4 text-base" style="color: ${textColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `,
            framed: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-md mx-auto p-6 shadow-2xl rounded-2xl" style="background-color: ${accentColor};">
                        <img src="${image}" alt="Photo" class="w-full h-72 object-cover rounded-lg">
                        ${caption ? `<p class="text-center text-white mt-4 font-medium text-base">${caption}</p>` : ''}
                    </div>
                </div>
            `,
            polaroid: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-md mx-auto bg-white p-4 pb-16 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                        <img src="${image}" alt="Photo" class="w-full h-72 object-cover mb-3">
                        ${caption ? `<p class="text-center text-lg" style="color: ${textColor}; font-family: 'Courier New', monospace;">${caption}</p>` : ''}
                    </div>
                </div>
            `,
            circular: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-white" style="outline: 4px solid ${accentColor};">
                            <img src="${image}" alt="Photo" class="w-full h-full object-cover">
                        </div>
                        ${caption ? `<p class="mt-6 text-lg font-semibold" style="color: ${textColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `,
            gallery: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-white p-8 shadow-xl">
                            <img src="${image}" alt="Photo" class="w-full h-80 object-cover border-4" style="border-color: ${accentColor};">
                            ${caption ? `<div class="mt-6 border-t-2 pt-4" style="border-color: ${accentColor};"><p class="text-center text-base italic" style="color: ${textColor};">${caption}</p></div>` : ''}
                        </div>
                    </div>
                </div>
            `,
            scrapbook: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-md mx-auto relative">
                        <div class="absolute -top-3 -right-3 w-12 h-12 rounded-full opacity-40" style="background-color: ${accentColor};"></div>
                        <div class="absolute -bottom-3 -left-3 w-16 h-16 rounded-full opacity-30" style="background-color: ${accentColor};"></div>
                        <div class="relative bg-white p-6 rounded-xl shadow-xl border-4 border-dashed" style="border-color: ${accentColor};">
                            <img src="${image}" alt="Photo" class="w-full h-64 object-cover rounded-lg mb-4">
                            ${caption ? `<p class="text-center text-base font-medium" style="color: ${textColor};">${caption}</p>` : ''}
                            <div class="flex justify-center gap-3 mt-4">
                                <div class="w-3 h-3 rounded-full" style="background-color: ${accentColor};"></div>
                                <div class="w-3 h-3 rounded-full" style="background-color: ${accentColor};"></div>
                                <div class="w-3 h-3 rounded-full" style="background-color: ${accentColor};"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            floating: `
                <div class="p-8 relative" style="background: linear-gradient(to bottom right, ${bgColor}, ${accentColor}15);">
                    <div class="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20" style="background-color: ${accentColor};"></div>
                    <div class="max-w-md mx-auto relative z-10">
                        <div class="bg-white p-3 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
                            <img src="${image}" alt="Photo" class="w-full h-72 object-cover rounded-xl">
                        </div>
                        ${caption ? `<p class="text-center mt-6 text-lg font-medium px-6 py-3 rounded-full inline-block bg-white shadow-lg mx-auto block" style="color: ${textColor};">${caption}</p>` : ''}
                    </div>
                </div>
            `,
            magazine: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-2xl mx-auto grid md:grid-cols-2 gap-6 items-center">
                        <div class="relative">
                            <div class="absolute -inset-2 rounded-2xl opacity-20" style="background-color: ${accentColor};"></div>
                            <img src="${image}" alt="Photo" class="relative z-10 w-full h-80 object-cover rounded-xl shadow-xl">
                        </div>
                        <div class="p-6">
                            <div class="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4" style="background-color: ${accentColor}; color: white;">
                                FEATURED
                            </div>
                            ${caption ? `<p class="text-xl leading-relaxed" style="color: ${textColor};">${caption}</p>` : `<p class="text-xl leading-relaxed" style="color: ${textColor};">A moment captured in time</p>`}
                        </div>
                    </div>
                </div>
            `
        };

        return layouts[layout] || layouts.standard;
    }
};
