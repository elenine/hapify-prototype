// Hero Header Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '💒 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Couple Names</label>
                <input type="text" placeholder="John & Sarah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent section-data" data-field="names" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                <input type="text" placeholder="Are Getting Married" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Center</option>
                    <option value="split">Split with Image</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="minimal">Minimal</option>
                    <option value="card">Card Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'classic';
        const bgColor = style.bg || '#9333ea';
        const textColor = style.text || '#ffffff';
        const names = data.names || 'Couple Names';
        const tagline = data.tagline || 'Are Getting Married';
        const imageUrl = data.image;

        switch(layout) {
            case 'split':
                return `
                    <div class="flex flex-col md:flex-row min-h-[400px]" style="background: ${bgColor}; color: ${textColor}">
                        <div class="flex-1 flex items-center justify-center p-8">
                            <div class="text-center md:text-left">
                                <h1 class="text-4xl font-bold mb-3">${names}</h1>
                                <p class="text-xl opacity-90">${tagline}</p>
                                <div class="mt-6 h-1 w-20 bg-white opacity-50"></div>
                            </div>
                        </div>
                        <div class="flex-1 flex items-center justify-center p-8">
                            ${imageUrl ? `<img src="${imageUrl}" class="w-full max-w-sm h-64 object-cover rounded-lg shadow-2xl">` : '<div class="w-full max-w-sm h-64 bg-white bg-opacity-20 rounded-lg"></div>'}
                        </div>
                    </div>
                `;

            case 'overlay':
                return `
                    <div class="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                        ${imageUrl ? `
                            <img src="${imageUrl}" class="absolute inset-0 w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black opacity-50"></div>
                        ` : `<div class="absolute inset-0" style="background: ${bgColor};"></div>`}
                        <div class="relative z-10 text-center px-6" style="color: ${textColor}">
                            <h1 class="text-5xl font-bold mb-4 drop-shadow-lg">${names}</h1>
                            <p class="text-2xl opacity-90 drop-shadow-md">${tagline}</p>
                            <div class="mt-8 inline-block px-6 py-2 border-2 border-white rounded-full text-sm font-semibold">
                                ✨ Save the Date ✨
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-20 px-6" style="background: ${bgColor}; color: ${textColor}">
                        <div class="max-w-2xl mx-auto text-center space-y-6">
                            ${imageUrl ? `<img src="${imageUrl}" class="w-24 h-24 rounded-full mx-auto object-cover border-2 opacity-90" style="border-color: ${textColor}">` : ''}
                            <div class="space-y-2">
                                <h1 class="text-4xl font-light tracking-wide">${names}</h1>
                                <div class="flex items-center justify-center gap-3">
                                    <div class="h-px w-8 opacity-50" style="background: ${textColor}"></div>
                                    <p class="text-sm uppercase tracking-widest opacity-75">${tagline}</p>
                                    <div class="h-px w-8 opacity-50" style="background: ${textColor}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                            ${imageUrl ? `<img src="${imageUrl}" class="w-full h-48 object-cover">` : `<div class="w-full h-48" style="background: linear-gradient(135deg, ${bgColor} 0%, #ec4899 100%);"></div>`}
                            <div class="p-8 text-center" style="color: #1f2937">
                                <h1 class="text-3xl font-bold mb-2">${names}</h1>
                                <p class="text-lg text-gray-600">${tagline}</p>
                                <div class="mt-6 text-4xl">💒</div>
                            </div>
                        </div>
                    </div>
                `;

            case 'classic':
            default:
                return `
                    <div class="text-center py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                        ${imageUrl ? `<img src="${imageUrl}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white">` : '<div class="w-32 h-32 rounded-full mx-auto mb-6 bg-white bg-opacity-20"></div>'}
                        <h1 class="text-3xl font-bold mb-2">${names}</h1>
                        <p class="text-lg opacity-90">${tagline}</p>
                    </div>
                `;
        }
    }
};
