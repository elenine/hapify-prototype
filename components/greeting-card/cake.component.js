// Birthday Cake Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.cake = {
    name: '🎂 Birthday Cake',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cake Title</label>
                <input type="text" placeholder="Make a Wish!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cake Image (optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">🎂</div>
                    <div class="text-sm text-gray-600">Upload cake photo</div>
                    <input type="file" class="hidden section-data" data-field="cakeImage" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Time to blow out the candles and make your dreams come true!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Classic</option>
                    <option value="spotlight">Spotlight - Dramatic</option>
                    <option value="framed">Framed - Elegant</option>
                    <option value="animated">Animated - Fun</option>
                    <option value="split">Split Layout</option>
                    <option value="floating">Floating - Modern</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cake Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Add Decorations</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="candles">Candles</option>
                    <option value="confetti">Confetti</option>
                    <option value="sparkles">Sparkles</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#ffffff';
        const textColor = style.text || '#1f2937';
        const accentColor = style.accent || globalStyles.primaryColor;
        const title = data.title || 'Make a Wish!';
        const message = data.message || 'Time to blow out the candles!';

        const iconSizes = {
            small: 'text-7xl',
            medium: 'text-8xl',
            large: 'text-9xl',
            xlarge: 'text-[12rem]'
        };
        const iconSize = iconSizes[style.iconSize] || 'text-9xl';

        const cakeDisplay = data.cakeImage ?
            `<img src="${data.cakeImage}" class="w-64 h-64 rounded-2xl mx-auto object-cover shadow-xl">` :
            `<div class="${iconSize} mb-6">🎂</div>`;

        const decorations = {
            none: '',
            candles: '<div class="text-4xl mt-4">🕯️ 🕯️ 🕯️</div>',
            confetti: '<div class="text-3xl mt-4">🎊 🎉 🎊</div>',
            sparkles: '<div class="text-3xl mt-4">✨ ⭐ ✨</div>'
        };
        const decoration = decorations[style.decorations] || '';

        // Centered Layout
        if (layout === 'centered') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    ${cakeDisplay}
                    <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                    <p class="text-lg max-w-md mx-auto">${message}</p>
                    ${decoration}
                </div>
            `;
        }

        // Spotlight Layout
        if (layout === 'spotlight') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 flex items-center justify-center opacity-5">
                        <div class="text-[20rem]">🎂</div>
                    </div>
                    <div class="relative z-10 text-center">
                        ${cakeDisplay}
                        <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                        <p class="text-lg max-w-md mx-auto">${message}</p>
                        ${decoration}
                    </div>
                </div>
            `;
        }

        // Framed Layout
        if (layout === 'framed') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto border-4 rounded-2xl p-8 text-center" style="border-color: ${accentColor}; background: ${accentColor}11">
                        ${cakeDisplay}
                        <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                        <p class="text-lg">${message}</p>
                        ${decoration}
                    </div>
                </div>
            `;
        }

        // Animated Layout
        if (layout === 'animated') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="transform hover:scale-110 transition-transform duration-300">
                        ${cakeDisplay}
                    </div>
                    <h3 class="text-3xl font-bold mb-4 transform hover:scale-105 transition-transform" style="color: ${accentColor}">${title}</h3>
                    <p class="text-lg max-w-md mx-auto">${message}</p>
                    ${decoration}
                </div>
            `;
        }

        // Split Layout
        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                        <div class="md:w-1/2 text-center">
                            ${cakeDisplay}
                        </div>
                        <div class="md:w-1/2 text-center md:text-left">
                            <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                            <p class="text-lg">${message}</p>
                            ${decoration}
                        </div>
                    </div>
                </div>
            `;
        }

        // Floating Layout
        if (layout === 'floating') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto text-center p-8 rounded-2xl shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}22, ${accentColor}11)">
                        ${cakeDisplay}
                        <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                        <p class="text-lg">${message}</p>
                        ${decoration}
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                ${cakeDisplay}
                <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                <p class="text-lg max-w-md mx-auto">${message}</p>
            </div>
        `;
    }
};
