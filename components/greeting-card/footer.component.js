// Footer Component
window.sectionComponents = window.sectionComponents || {};
window.sectionComponents.footer = {
    name: '🎉 Footer',
    allowMultiple: false,
    info: `<div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Footer Message</label><input type="text" placeholder="Made with ❤️" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></div></div>`,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple - Clean centered text</option>
                    <option value="divider">Divider - With decorative line</option>
                    <option value="gradient">Gradient - Colorful gradient background</option>
                    <option value="decorative">Decorative - With icons and embellishments</option>
                    <option value="wave">Wave - Wave pattern decoration</option>
                    <option value="minimal">Minimal - Ultra minimalist</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#6b7280" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="text-xs">Extra Small</option>
                    <option value="text-sm" selected>Small</option>
                    <option value="text-base">Medium</option>
                    <option value="text-lg">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="padding" onchange="updatePreview()">
                    <option value="py-4">Small</option>
                    <option value="py-6">Medium</option>
                    <option value="py-8" selected>Large</option>
                    <option value="py-12">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="top">Top Border</option>
                    <option value="double">Double Top Border</option>
                    <option value="dashed">Dashed Top Border</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bgColor = style.bg || '#f9fafb';
        const textColor = style.text || '#6b7280';
        const accentColor = style.accent || '#ec4899';
        const textSize = style.textSize || 'text-sm';
        const padding = style.padding || 'py-8';
        const borderStyle = style.borderStyle || 'none';

        const message = data.message || 'Made with ❤️';

        const getBorderClass = () => {
            if (borderStyle === 'top') return 'border-t';
            if (borderStyle === 'double') return 'border-t-4 border-double';
            if (borderStyle === 'dashed') return 'border-t-2 border-dashed';
            return '';
        };

        if (layout === 'simple') {
            return `
                <div class="${padding} px-6 text-center ${getBorderClass()}" style="background: ${bgColor}; color: ${textColor}; border-color: ${accentColor}">
                    <p class="${textSize}">${message}</p>
                </div>
            `;
        }

        if (layout === 'divider') {
            return `
                <div class="${padding} px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="flex-1 h-px" style="background: ${accentColor}"></div>
                            <div class="text-2xl" style="color: ${accentColor}">✦</div>
                            <div class="flex-1 h-px" style="background: ${accentColor}"></div>
                        </div>
                        <p class="${textSize}">${message}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'gradient') {
            return `
                <div class="${padding} px-6 text-center" style="background: linear-gradient(135deg, ${accentColor}, ${bgColor})">
                    <p class="${textSize} font-medium" style="color: white">${message}</p>
                </div>
            `;
        }

        if (layout === 'decorative') {
            return `
                <div class="${padding} px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="flex items-center justify-center gap-3 mb-3">
                            <span class="text-xl" style="color: ${accentColor}">✨</span>
                            <span class="text-xl" style="color: ${accentColor}">🎉</span>
                            <span class="text-xl" style="color: ${accentColor}">✨</span>
                        </div>
                        <p class="${textSize}">${message}</p>
                        <div class="flex items-center justify-center gap-3 mt-3">
                            <span class="text-xl" style="color: ${accentColor}">🎈</span>
                            <span class="text-xl" style="color: ${accentColor}">💝</span>
                            <span class="text-xl" style="color: ${accentColor}">🎈</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'wave') {
            return `
                <div class="relative ${padding} px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute top-0 left-0 right-0 h-8" style="background: ${accentColor}; opacity: 0.1">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-full">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="${accentColor}" opacity="0.2"></path>
                        </svg>
                    </div>
                    <p class="${textSize} relative z-10">${message}</p>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="${padding} px-6 text-center" style="background: ${bgColor}">
                    <p class="${textSize}" style="color: ${textColor}; opacity: 0.6">${message}</p>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="${padding} px-6 text-center ${getBorderClass()}" style="background: ${bgColor}; color: ${textColor}; border-color: ${accentColor}">
                <p class="${textSize}">${message}</p>
            </div>
        `;
    }
};
