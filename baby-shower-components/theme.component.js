// Theme Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.theme = {
    name: '🎨 Shower Theme',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Name</label>
                <input type="text" placeholder="Twinkle Twinkle Little Star" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="themeName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Colors</label>
                <input type="text" placeholder="Soft Blue & Gold" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="colors" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code</label>
                <input type="text" placeholder="Casual Chic" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="dressCode" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Description</label>
                <textarea rows="3" placeholder="Join us for a celestial celebration under the stars..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="banner">Banner Style</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const isCard = (style.layout || 'card') === 'card';
        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}">
                <div class="max-w-2xl mx-auto">
                    ${isCard ? `
                        <div class="bg-white rounded-xl shadow-lg p-8">
                            <div class="text-center mb-6">
                                <div class="text-5xl mb-3">🎨</div>
                                <h2 class="text-2xl font-bold mb-2">Shower Theme</h2>
                            </div>
                            ${data.themeName ? `<div class="mb-4"><span class="font-semibold" style="color: ${globalStyles.primaryColor || '#f59e0b'}">Theme:</span> <span class="text-gray-700">${data.themeName}</span></div>` : ''}
                            ${data.colors ? `<div class="mb-4"><span class="font-semibold" style="color: ${globalStyles.primaryColor || '#f59e0b'}">Colors:</span> <span class="text-gray-700">${data.colors}</span></div>` : ''}
                            ${data.dressCode ? `<div class="mb-4"><span class="font-semibold" style="color: ${globalStyles.primaryColor || '#f59e0b'}">Dress Code:</span> <span class="text-gray-700">${data.dressCode}</span></div>` : ''}
                            ${data.description ? `<div class="mt-6 pt-6 border-t border-gray-200"><p class="text-gray-600 italic">${data.description}</p></div>` : ''}
                        </div>
                    ` : `
                        <div class="text-center">
                            <h2 class="text-3xl font-bold mb-6">${data.themeName || 'Shower Theme'}</h2>
                            <div class="grid grid-cols-2 gap-6 mb-6">
                                ${data.colors ? `<div class="bg-white bg-opacity-70 rounded-lg p-4"><div class="font-semibold mb-1" style="color: ${globalStyles.primaryColor || '#f59e0b'}">Colors</div><div class="text-gray-700">${data.colors}</div></div>` : ''}
                                ${data.dressCode ? `<div class="bg-white bg-opacity-70 rounded-lg p-4"><div class="font-semibold mb-1" style="color: ${globalStyles.primaryColor || '#f59e0b'}">Dress Code</div><div class="text-gray-700">${data.dressCode}</div></div>` : ''}
                            </div>
                            ${data.description ? `<p class="text-gray-700 italic">${data.description}</p>` : ''}
                        </div>
                    `}
                </div>
            </div>
        `;
    }
};
