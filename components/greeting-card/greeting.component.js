// Greeting Message Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.greeting = {
    name: '💝 Greeting Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea placeholder="Wishing you the happiest of birthdays filled with love, laughter, and joy..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple - Plain Text</option>
                    <option value="card">Card - With Border</option>
                    <option value="quote">Quote - Styled as Quote</option>
                    <option value="decorated">Decorated - With Icons</option>
                    <option value="gradient">Gradient - Background Fade</option>
                    <option value="boxed">Boxed - Contained Design</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="fontSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="fontStyle" onchange="updatePreview()">
                    <option value="normal">Normal</option>
                    <option value="italic">Italic</option>
                    <option value="serif">Serif</option>
                    <option value="serif-italic">Serif Italic</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="tight">Tight</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="loose">Loose</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'simple';
        const align = style.align || 'center';
        const bgColor = style.bg || '#ffffff';
        const textColor = style.textColor || globalStyles.textColor;

        const fontSizes = {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
            xlarge: 'text-xl'
        };
        const fontSize = fontSizes[style.fontSize] || 'text-lg';

        const fontStyles = {
            normal: '',
            italic: 'italic',
            serif: 'font-serif',
            'serif-italic': 'font-serif italic'
        };
        const fontStyle = fontStyles[style.fontStyle] || '';

        const spacings = {
            tight: 'leading-snug',
            normal: 'leading-relaxed',
            relaxed: 'leading-loose',
            loose: 'leading-10'
        };
        const spacing = spacings[style.spacing] || 'leading-relaxed';

        const message = data.message || 'Your heartfelt birthday message goes here...';

        // Simple Layout
        if (layout === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; text-align: ${align}">
                    <div class="max-w-2xl mx-auto">
                        <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                    </div>
                </div>
            `;
        }

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-2 rounded-lg p-8 shadow-lg" style="border-color: ${globalStyles.primaryColor}; text-align: ${align}">
                            <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Quote Layout
        if (layout === 'quote') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="relative">
                            <div class="text-6xl opacity-20 absolute -top-4 -left-2" style="color: ${globalStyles.primaryColor}">"</div>
                            <blockquote class="relative pl-8 pr-8 border-l-4" style="border-color: ${globalStyles.primaryColor}">
                                <p class="${fontSize} ${spacing} ${fontStyle} font-medium" style="color: ${textColor}">${message}</p>
                            </blockquote>
                            <div class="text-6xl opacity-20 absolute -bottom-4 right-0" style="color: ${globalStyles.primaryColor}">"</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Decorated Layout
        if (layout === 'decorated') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto" style="text-align: ${align}">
                        <div class="flex items-center justify-center mb-4">
                            <span class="text-2xl mx-2">💝</span>
                            <span class="text-2xl mx-2">✨</span>
                            <span class="text-2xl mx-2">💝</span>
                        </div>
                        <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                        <div class="flex items-center justify-center mt-4">
                            <span class="text-2xl mx-2">🎂</span>
                            <span class="text-2xl mx-2">🎈</span>
                            <span class="text-2xl mx-2">🎂</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Gradient Layout
        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${globalStyles.primaryColor}22 100%)">
                    <div class="max-w-2xl mx-auto relative z-10" style="text-align: ${align}">
                        <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                    </div>
                </div>
            `;
        }

        // Boxed Layout
        if (layout === 'boxed') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-xl mx-auto">
                        <div class="rounded-xl p-8 shadow-xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}15 0%, ${globalStyles.secondaryColor}15 100%); text-align: ${align}">
                            <div class="bg-white bg-opacity-80 rounded-lg p-6">
                                <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; text-align: ${align}">
                <div class="max-w-2xl mx-auto">
                    <p class="${fontSize} ${spacing} ${fontStyle}" style="color: ${textColor}">${message}</p>
                </div>
            </div>
        `;
    }
};
