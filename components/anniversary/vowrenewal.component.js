// Vow Renewal Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.vowrenewal = {
    name: '💍 Vow Renewal',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Renewing Our Vows" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ceremony Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Message</label>
                <textarea placeholder="Join us as we renew our commitment..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Simple</option>
                    <option value="elegant">Elegant - Decorative</option>
                    <option value="card">Card - Boxed</option>
                    <option value="split">Split - Two Tone</option>
                    <option value="romantic">Romantic - Heart Themed</option>
                    <option value="classic">Classic - Traditional</option>
                    <option value="modern">Modern - Sleek Design</option>
                    <option value="ceremonial">Ceremonial - Formal</option>
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
                    <option value="rings">Rings 💍</option>
                    <option value="hearts">Hearts 💕</option>
                    <option value="flowers">Flowers 🌸</option>
                    <option value="doves">Doves 🕊️</option>
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
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const fontWeight = style.fontWeight || 'normal';
        const shadow = style.shadow || 'medium';
        const borderRadius = style.borderRadius || 'medium';
        const spacing = style.spacing || 'normal';
        const iconSize = style.iconSize || 'medium';
        const decorations = style.decorations || 'none';
        const accentColor = style.accentColor || '#dc2626';
        const secondaryColor = style.secondaryColor || '#f87171';
        const bg = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#fef2f2';

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
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
            rings: '💍',
            hearts: '💕',
            flowers: '🌸',
            doves: '🕊️'
        };

        // Centered Layout
        if (layout === 'centered') {
            return `
                <div class="${spacingClasses[spacing]} text-center" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="${iconSizeClasses[iconSize]} mb-4">💍</div>
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-3">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Vow Renewal'}</h2>
                        ${data.time ? `<p class="text-lg mb-4" style="color: ${accentColor}">Ceremony at ${data.time}</p>` : ''}
                        ${data.message ? `<p class="text-gray-600 px-4 ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center border-t-2 border-b-2 py-12" style="border-color: ${accentColor}33">
                        <div class="text-xs uppercase tracking-widest text-gray-400 mb-4">Special Ceremony</div>
                        <div class="flex items-center justify-center gap-4 mb-6">
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                            <div class="${iconSizeClasses[iconSize]}">${decorationMap[decorations] || '💍'}</div>
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                        </div>
                        <h2 class="text-3xl font-light mb-6 tracking-wide">${data.title || 'Vow Renewal'}</h2>
                        ${data.time ? `<p class="text-lg mb-6 font-light" style="color: ${accentColor}">${data.time}</p>` : ''}
                        ${data.message ? `<p class="text-gray-600 font-light leading-relaxed ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} p-8 text-center" style="background: ${cardBg}; border-top: 4px solid ${accentColor}">
                        <div class="${iconSizeClasses[iconSize]} mb-4">💍</div>
                        ${decorationMap[decorations] ? `<div class="text-2xl mb-3">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Vow Renewal'}</h2>
                        ${data.time ? `<div class="mb-4 p-3 bg-white ${borderRadiusClasses[borderRadius]}"><span class="${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">Time:</span> ${data.time}</div>` : ''}
                        ${data.message ? `<p class="text-gray-600 mt-4 ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Split Layout
        if (layout === 'split') {
            return `
                <div class="grid md:grid-cols-2 gap-0">
                    <div class="py-16 px-6 flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                        <div class="text-center text-white">
                            <div class="${iconSizeClasses[iconSize]} mb-4">💍</div>
                            ${decorationMap[decorations] ? `<div class="text-4xl mb-3">${decorationMap[decorations]}</div>` : ''}
                            <h2 class="text-3xl ${fontWeightClasses[fontWeight]}">${data.title || 'Vow Renewal'}</h2>
                        </div>
                    </div>
                    <div class="py-16 px-6 flex items-center justify-center" style="background: ${bg}">
                        <div class="text-center">
                            ${data.time ? `<p class="text-xl mb-4 ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">${data.time}</p>` : ''}
                            ${data.message ? `<p class="text-gray-700 ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Romantic Layout
        if (layout === 'romantic') {
            return `
                <div class="${spacingClasses[spacing]} relative overflow-hidden" style="background: linear-gradient(135deg, ${cardBg} 0%, ${bg} 100%);">
                    <div class="absolute top-4 left-4 text-6xl opacity-10">💕</div>
                    <div class="absolute bottom-4 right-4 text-6xl opacity-10">💕</div>
                    <div class="max-w-md mx-auto text-center relative z-10">
                        <div class="inline-block p-4 ${borderRadiusClasses[borderRadius]} mb-4" style="background: ${accentColor}22">
                            <div class="${iconSizeClasses[iconSize]}">💍</div>
                        </div>
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-3">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4" style="color: ${accentColor}">${data.title || 'Vow Renewal'}</h2>
                        ${data.time ? `<p class="text-lg mb-4" style="color: ${accentColor}">${data.time}</p>` : ''}
                        <div class="p-6 bg-white ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}">
                            ${data.message ? `<p class="text-gray-700 ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Classic Layout
        if (layout === 'classic') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-10 ${shadowClasses[shadow]}" style="background: ${cardBg}; border: 4px double ${accentColor}">
                            <div class="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2" style="border-color: ${secondaryColor}"></div>
                            <div class="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2" style="border-color: ${secondaryColor}"></div>
                            <div class="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2" style="border-color: ${secondaryColor}"></div>
                            <div class="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2" style="border-color: ${secondaryColor}"></div>
                            <div class="text-center">
                                <div class="${iconSizeClasses[iconSize]} mb-3">${decorationMap[decorations] || '💍'}</div>
                                <h2 class="text-2xl font-serif ${fontWeightClasses[fontWeight]} mb-4" style="color: ${accentColor}">${data.title || 'Vow Renewal'}</h2>
                                <div class="flex items-center justify-center gap-2 mb-4">
                                    <div class="h-px w-12" style="background: ${accentColor}"></div>
                                    <div class="text-sm">💕</div>
                                    <div class="h-px w-12" style="background: ${accentColor}"></div>
                                </div>
                                ${data.time ? `<p class="text-lg mb-4 font-serif" style="color: ${accentColor}">${data.time}</p>` : ''}
                                ${data.message ? `<p class="text-gray-700 font-serif ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                            </div>
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
                            <div class="flex-1">
                                <div class="flex items-center gap-4 mb-3">
                                    <div class="${iconSizeClasses[iconSize]}">💍</div>
                                    ${decorationMap[decorations] ? `<div class="text-3xl">${decorationMap[decorations]}</div>` : ''}
                                </div>
                                <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">${data.title || 'Vow Renewal'}</h2>
                                ${data.time ? `<p class="text-lg mb-2 ${fontWeightClasses[fontWeight]}" style="color: ${secondaryColor}">${data.time}</p>` : ''}
                                ${data.message ? `<p class="text-gray-600 ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Ceremonial Layout
        if (layout === 'ceremonial') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="mb-6">
                            <div class="inline-block p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                <div class="${iconSizeClasses[iconSize]} text-white">💍</div>
                            </div>
                        </div>
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}; border-top: 6px solid ${accentColor}; border-bottom: 6px solid ${secondaryColor}">
                            <div class="text-xs uppercase tracking-widest mb-3" style="color: ${accentColor}">Sacred Ceremony</div>
                            ${decorationMap[decorations] ? `<div class="text-3xl mb-3">${decorationMap[decorations]}</div>` : ''}
                            <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-6" style="color: ${accentColor}">${data.title || 'Vow Renewal'}</h2>
                            ${data.time ? `<div class="mb-6 p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${accentColor}11; border-left: 4px solid ${accentColor}">
                                <p class="text-sm uppercase tracking-wider mb-1" style="color: ${accentColor}">Ceremony Time</p>
                                <p class="text-xl ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">${data.time}</p>
                            </div>` : ''}
                            ${data.message ? `<p class="text-gray-700 leading-relaxed ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default - Centered
        return `
            <div class="${spacingClasses[spacing]} text-center" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    <div class="${iconSizeClasses[iconSize]} mb-4">💍</div>
                    ${decorationMap[decorations] ? `<div class="text-3xl mb-3">${decorationMap[decorations]}</div>` : ''}
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4">${data.title || 'Vow Renewal'}</h2>
                    ${data.time ? `<p class="text-lg text-gray-700 mb-4">Ceremony at ${data.time}</p>` : ''}
                    ${data.message ? `<p class="text-gray-600 px-4 ${fontWeightClasses[fontWeight]}">${data.message}</p>` : ''}
                </div>
            </div>
        `;
    }
};
