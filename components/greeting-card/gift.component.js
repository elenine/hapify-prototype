// Gift Section Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gift = {
    name: '🎁 Gift Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Title</label>
                <input type="text" placeholder="A Special Gift for You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Image (optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">🎁</div>
                    <div class="text-sm text-gray-600">Upload gift photo</div>
                    <input type="file" class="hidden section-data" data-field="giftImage" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Description</label>
                <textarea placeholder="May this gift bring joy to your special day!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="wrapped">Wrapped Gift - Classic</option>
                    <option value="opened">Opened Box - Surprise</option>
                    <option value="elegant">Elegant - Bow & Ribbon</option>
                    <option value="modern">Modern - Clean</option>
                    <option value="festive">Festive - Colorful</option>
                    <option value="minimal">Minimal - Simple</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'wrapped';
        const bgColor = style.bg || '#f0fdf4';
        const borderColor = style.border || '#10b981';
        const textColor = style.text || '#1f2937';
        const title = data.title || 'A Special Gift for You';
        const description = data.description || 'May this gift bring joy to your special day!';

        const iconSizes = {
            medium: 'text-7xl',
            large: 'text-8xl',
            xlarge: 'text-9xl'
        };
        const iconSize = iconSizes[style.iconSize] || 'text-8xl';

        const giftDisplay = data.giftImage ?
            `<img src="${data.giftImage}" class="w-48 h-48 rounded-xl mx-auto object-cover shadow-lg">` :
            `<div class="${iconSize} mb-6">🎁</div>`;

        if (layout === 'wrapped') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto border-4 rounded-2xl p-8 text-center" style="border-color: ${borderColor}">
                        ${giftDisplay}
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg leading-relaxed">${description}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'opened') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-6xl mb-4">🎁✨</div>
                        ${giftDisplay}
                        <h3 class="text-2xl font-bold mb-4" style="color: ${borderColor}">${title}</h3>
                        <p class="text-lg leading-relaxed">${description}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto p-8 rounded-2xl shadow-xl text-center" style="background: linear-gradient(135deg, ${borderColor}22, ${borderColor}11)">
                        <div class="text-4xl mb-4">🎀</div>
                        ${giftDisplay}
                        <h3 class="text-2xl font-serif italic mb-4">${title}</h3>
                        <p class="text-base leading-relaxed">${description}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
                        <div class="md:w-1/2 text-center">
                            ${giftDisplay}
                        </div>
                        <div class="md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4" style="color: ${borderColor}">${title}</h3>
                            <p class="text-lg">${description}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'festive') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 opacity-10 text-9xl flex items-center justify-center">🎁</div>
                    <div class="relative z-10 text-center">
                        <div class="text-4xl mb-4">🎉🎊🎈</div>
                        ${giftDisplay}
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg max-w-xl mx-auto">${description}</p>
                        <div class="text-4xl mt-4">✨🎁✨</div>
                    </div>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🎁</div>
                        <h3 class="text-xl font-semibold mb-3">${title}</h3>
                        <p class="text-base">${description}</p>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-2xl mx-auto border-4 rounded-2xl p-8 text-center" style="border-color: ${borderColor}">
                    ${giftDisplay}
                    <h3 class="text-2xl font-bold mb-4">${title}</h3>
                    <p class="text-lg leading-relaxed">${description}</p>
                </div>
            </div>
        `;
    }
};
