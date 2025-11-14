// Hero Header Component for Retirement Celebration

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🌴 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Retiree Name</label>
                <input type="text" placeholder="John Smith" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Position/Title</label>
                <input type="text" placeholder="Senior Manager" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent section-data" data-field="position" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Retiree Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photo</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="minimal">Minimal Elegant</option>
                    <option value="bold">Bold Celebration</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#06b6d4';
        const textColor = style.text || '#ffffff';

        switch(layout) {
            case 'centered':
                return `
                    <div class="text-center py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                        ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="text-6xl mb-4">🌴</div>'}
                        <h1 class="text-3xl font-bold mb-2">Happy Retirement!</h1>
                        <p class="text-2xl font-semibold">${data.name || "Retiree Name"}</p>
                        ${data.position ? `<p class="text-lg mt-2 opacity-90">${data.position}</p>` : ''}
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="text-center py-20 px-6" style="background: ${bgColor}; color: ${textColor}">
                        ${data.image ? `<img src="${data.image}" class="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="text-5xl mb-4">🌴</div>'}
                        <p class="text-sm uppercase tracking-widest mb-3 opacity-80">Celebrating</p>
                        <h1 class="text-4xl font-light mb-3">${data.name || "Retiree Name"}</h1>
                        <div class="w-16 h-0.5 mx-auto mb-3" style="background: ${textColor}; opacity: 0.5;"></div>
                        ${data.position ? `<p class="text-base opacity-75">${data.position}</p>` : ''}
                    </div>
                `;

            case 'bold':
                return `
                    <div class="relative py-24 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                        <div class="absolute inset-0 opacity-10">
                            <div class="absolute top-0 right-0 w-64 h-64 rounded-full" style="background: ${textColor}; transform: translate(50%, -50%);"></div>
                            <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full" style="background: ${textColor}; transform: translate(-50%, 50%);"></div>
                        </div>
                        <div class="relative text-center">
                            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-2xl">` : '<div class="text-7xl mb-6">🌴</div>'}
                            <h1 class="text-4xl font-black mb-2 tracking-tight">HAPPY RETIREMENT</h1>
                            <p class="text-3xl font-bold">${data.name || "Retiree Name"}</p>
                            ${data.position ? `<p class="text-xl font-medium opacity-90 mt-2">${data.position}</p>` : ''}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="text-center py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                        ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white">` : '<div class="text-6xl mb-4">🌴</div>'}
                        <h1 class="text-3xl font-bold mb-2">Happy Retirement!</h1>
                        <p class="text-2xl font-semibold">${data.name || "Retiree Name"}</p>
                        ${data.position ? `<p class="text-lg mt-2 opacity-90">${data.position}</p>` : ''}
                    </div>
                `;
        }
    }
};
