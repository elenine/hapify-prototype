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
                    <option value="confetti">Confetti - Floating confetti particles</option>
                    <option value="badge">Badge - With badge decoration</option>
                    <option value="ribbon">Ribbon - Ribbon banner style</option>
                    <option value="stamp">Stamp - Postage stamp style</option>
                    <option value="sparkle">Sparkle - Sparkling decoration</option>
                    <option value="heartBeat">Heart Beat - Beating heart animation</option>
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

        if (layout === 'confetti') {
            return `
                <div class="${padding} px-6 text-center relative" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 overflow-hidden pointer-events-none">
                        ${[...Array(15)].map((_, i) => {
                            const left = Math.random() * 100;
                            const top = Math.random() * 100;
                            const colors = [accentColor, '#fbbf24', '#34d399', '#60a5fa'];
                            const color = colors[i % colors.length];
                            return `<div class="absolute w-2 h-2 rounded-full" style="left: ${left}%; top: ${top}%; background: ${color}; opacity: 0.6"></div>`;
                        }).join('')}
                    </div>
                    <p class="${textSize} relative z-10">${message}</p>
                </div>
            `;
        }

        if (layout === 'badge') {
            return `
                <div class="${padding} px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full" style="background: ${accentColor}; box-shadow: 0 4px 14px rgba(0,0,0,0.15)">
                            <span class="text-xl">🏆</span>
                            <p class="${textSize} font-semibold text-white">${message}</p>
                            <span class="text-xl">🏆</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'ribbon') {
            return `
                <div class="${padding} px-6 text-center relative" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="relative">
                            <div class="px-8 py-3 relative" style="background: ${accentColor}; clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)">
                                <p class="${textSize} font-semibold text-white">${message}</p>
                            </div>
                            <div class="absolute -left-2 top-0 w-4 h-full" style="background: ${accentColor}; opacity: 0.7; transform: skewX(-10deg)"></div>
                            <div class="absolute -right-2 top-0 w-4 h-full" style="background: ${accentColor}; opacity: 0.7; transform: skewX(10deg)"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'stamp') {
            return `
                <div class="${padding} px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xs mx-auto p-4 relative" style="border: 3px dashed ${accentColor}; background: white">
                        <div class="absolute -top-2 -left-2 w-4 h-4 rounded-full" style="background: ${bgColor}"></div>
                        <div class="absolute -top-2 -right-2 w-4 h-4 rounded-full" style="background: ${bgColor}"></div>
                        <div class="absolute -bottom-2 -left-2 w-4 h-4 rounded-full" style="background: ${bgColor}"></div>
                        <div class="absolute -bottom-2 -right-2 w-4 h-4 rounded-full" style="background: ${bgColor}"></div>
                        <div class="text-3xl mb-2" style="color: ${accentColor}">★</div>
                        <p class="${textSize} font-semibold" style="color: ${accentColor}">${message}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'sparkle') {
            return `
                <div class="${padding} px-6 text-center relative" style="background: ${bgColor}; color: ${textColor}">
                    <div class="relative inline-block">
                        ${[...Array(8)].map((_, i) => {
                            const angle = (i * 45) * Math.PI / 180;
                            const distance = 40;
                            const x = Math.cos(angle) * distance;
                            const y = Math.sin(angle) * distance;
                            return `<div class="absolute text-xl" style="left: 50%; top: 50%; transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)); color: ${accentColor}; opacity: ${0.3 + Math.random() * 0.4}">✨</div>`;
                        }).join('')}
                        <p class="${textSize} relative z-10">${message}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'heartBeat') {
            return `
                <div class="${padding} px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-2xl animate-pulse" style="color: ${accentColor}">💖</span>
                        <p class="${textSize}">${message}</p>
                        <span class="text-2xl animate-pulse" style="color: ${accentColor}; animation-delay: 0.5s">💖</span>
                    </div>
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
