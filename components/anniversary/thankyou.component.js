// Thank You Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
    name: '🙏 Thank You',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                <textarea placeholder="Thank you for celebrating with us..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Note</label>
                <input type="text" placeholder="With love," class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="closing" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Classic</option>
                    <option value="elegant">Elegant - Decorative</option>
                    <option value="heartfelt">Heartfelt - Warm</option>
                    <option value="minimal">Minimal - Simple</option>
                    <option value="gratitude">Gratitude - Sincere</option>
                    <option value="modern">Modern - Clean</option>
                    <option value="card">Card - Boxed</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal" selected>Normal</option>
                    <option value="medium">Medium</option>
                    <option value="semibold">Semibold</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="full">Full Round</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="loose">Loose</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorative Elements</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="hands">Praying Hands 🙏</option>
                    <option value="hearts">Hearts 💕</option>
                    <option value="flowers">Flowers 🌸</option>
                    <option value="sparkle">Sparkle ✨</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#f87171" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const fontWeight = style.fontWeight || 'normal';
        const fontSize = style.fontSize || 'medium';
        const shadow = style.shadow || 'medium';
        const borderRadius = style.borderRadius || 'medium';
        const spacing = style.spacing || 'normal';
        const iconSize = style.iconSize || 'medium';
        const decorations = style.decorations || 'none';
        const accentColor = style.accentColor || '#dc2626';
        const secondaryColor = style.secondaryColor || '#f87171';
        const bg = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        };

        const fontSizeClasses = {
            small: 'text-base',
            medium: 'text-lg',
            large: 'text-xl',
            xlarge: 'text-2xl'
        };

        const shadowClasses = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg',
            xlarge: 'shadow-xl'
        };

        const borderRadiusClasses = {
            none: 'rounded-none',
            small: 'rounded',
            medium: 'rounded-lg',
            large: 'rounded-2xl',
            full: 'rounded-3xl'
        };

        const spacingClasses = {
            compact: 'py-8 px-4',
            normal: 'py-12 px-6',
            relaxed: 'py-16 px-8',
            loose: 'py-20 px-10'
        };

        const iconSizeClasses = {
            small: 'text-3xl',
            medium: 'text-5xl',
            large: 'text-6xl',
            xlarge: 'text-7xl'
        };

        const decorationMap = {
            none: '',
            hands: '🙏',
            hearts: '💕',
            flowers: '🌸',
            sparkle: '✨'
        };

        // Centered Layout
        if (layout === 'centered') {
            return `
                <div class="${spacingClasses[spacing]} text-center" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="${iconSizeClasses[iconSize]} mb-4">🙏</div>
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-3">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-6">Thank You</h2>
                        <p class="text-gray-700 ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<p class="text-gray-600 italic ${fontWeightClasses[fontWeight]}">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center border-t-2 border-b-2 py-12" style="border-color: ${accentColor}33">
                        <div class="flex items-center justify-center gap-4 mb-6">
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                            <div class="${iconSizeClasses[iconSize]}">${decorationMap[decorations] || '🙏'}</div>
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                        </div>
                        <h2 class="text-3xl font-light mb-8 tracking-wide">Thank You</h2>
                        <p class="text-gray-600 font-light leading-relaxed ${fontSizeClasses[fontSize]} mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<p class="text-gray-500 italic font-light ${fontWeightClasses[fontWeight]}">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Heartfelt Layout
        if (layout === 'heartfelt') {
            return `
                <div class="${spacingClasses[spacing]} relative overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${bg}dd 100%);">
                    <div class="absolute top-4 right-4 text-6xl opacity-10">💕</div>
                    <div class="absolute bottom-4 left-4 text-6xl opacity-10">💕</div>
                    <div class="max-w-md mx-auto text-center relative z-10">
                        <div class="inline-block p-4 ${borderRadiusClasses[borderRadius]} mb-4" style="background: ${accentColor}22">
                            <div class="${iconSizeClasses[iconSize]}">🙏</div>
                        </div>
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-3">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-6">Thank You</h2>
                        <p class="text-gray-700 ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<p class="text-gray-600 italic ${fontWeightClasses[fontWeight]}">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-lg mx-auto text-center">
                        ${decorationMap[decorations] ? `<div class="${iconSizeClasses[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-3xl font-light mb-8" style="color: ${accentColor}">Thank You</h2>
                        <p class="text-gray-600 ${fontSizeClasses[fontSize]} font-light leading-relaxed mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<p class="text-gray-500 text-sm tracking-wide ${fontWeightClasses[fontWeight]}">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Gratitude Layout
        if (layout === 'gratitude') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="mb-6">
                            <div class="inline-block p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                <div class="${iconSizeClasses[iconSize]} text-white">${decorationMap[decorations] || '🙏'}</div>
                            </div>
                        </div>
                        <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-6" style="color: ${accentColor}">With Gratitude</h2>
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                            <p class="text-gray-700 ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} leading-relaxed mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                            ${data.closing ? `<div class="pt-6 border-t" style="border-color: ${accentColor}22">
                                <p class="text-gray-600 italic ${fontWeightClasses[fontWeight]}">${data.closing}</p>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout
        if (layout === 'modern') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="flex items-center gap-6">
                            <div class="w-1 h-32 ${borderRadiusClasses[borderRadius]}" style="background: linear-gradient(180deg, ${accentColor}, ${secondaryColor})"></div>
                            <div class="flex-1 text-center">
                                <div class="${iconSizeClasses[iconSize]} mb-3">${decorationMap[decorations] || '🙏'}</div>
                                <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-4" style="color: ${accentColor}">Thank You</h2>
                                <p class="text-gray-700 ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} mb-4">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                                ${data.closing ? `<p class="text-gray-600 italic ${fontWeightClasses[fontWeight]}">${data.closing}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-8 text-center" style="background: ${cardBg}; border-top: 4px solid ${accentColor}">
                        <div class="${iconSizeClasses[iconSize]} mb-4">🙏</div>
                        ${decorationMap[decorations] ? `<div class="text-2xl mb-3">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-6">Thank You</h2>
                        <p class="text-gray-700 ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} leading-relaxed mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                        ${data.closing ? `<div class="pt-4 border-t" style="border-color: ${accentColor}22">
                            <p class="text-gray-600 italic ${fontWeightClasses[fontWeight]}">${data.closing}</p>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Default - Centered
        return `
            <div class="${spacingClasses[spacing]} text-center" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    <div class="${iconSizeClasses[iconSize]} mb-4">🙏</div>
                    ${decorationMap[decorations] ? `<div class="text-3xl mb-3">${decorationMap[decorations]}</div>` : ''}
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-6">Thank You</h2>
                    <p class="text-gray-700 ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} mb-6">${data.message || 'Thank you for celebrating with us and being part of our journey.'}</p>
                    ${data.closing ? `<p class="text-gray-600 italic ${fontWeightClasses[fontWeight]}">${data.closing}</p>` : ''}
                </div>
            </div>
        `;
    }
};
