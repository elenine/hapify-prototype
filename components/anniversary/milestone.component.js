// Milestone Info Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.milestone = {
    name: '🎊 Milestone Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Years Together</label>
                <input type="number" placeholder="25" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="years" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="weddingdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone Description</label>
                <textarea placeholder="Celebrating a quarter century of love..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Centered Box</option>
                    <option value="badge">Badge - Large Number Display</option>
                    <option value="timeline">Timeline - Horizontal Layout</option>
                    <option value="celebration">Celebration - With Decorations</option>
                    <option value="elegant">Elegant - Minimalist Style</option>
                    <option value="circular">Circular - Ring Design</option>
                    <option value="banner">Banner - Wide Display</option>
                    <option value="modern">Modern - Asymmetric Layout</option>
                    <option value="vintage">Vintage - Classic Style</option>
                    <option value="confetti">Confetti - Festive Design</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded Corners</option>
                    <option value="sharp">Sharp Corners</option>
                    <option value="pill">Pill Shaped</option>
                    <option value="shadow">With Shadow</option>
                    <option value="bordered">Bordered</option>
                    <option value="gradient">Gradient Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="numberSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal">Normal</option>
                    <option value="semibold">Semi Bold</option>
                    <option value="bold" selected>Bold</option>
                    <option value="extrabold">Extra Bold</option>
                    <option value="black">Black</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="numberColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fecaca" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small Shadow</option>
                    <option value="medium" selected>Medium Shadow</option>
                    <option value="large">Large Shadow</option>
                    <option value="xlarge">Extra Large Shadow</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorative Elements</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sparkles">Sparkles</option>
                    <option value="hearts">Hearts</option>
                    <option value="stars">Stars</option>
                    <option value="celebration">Celebration</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Animation Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="animation" onchange="updatePreview()">
                    <option value="none">No Animation</option>
                    <option value="pulse">Pulse Effect</option>
                    <option value="glow">Glow Effect</option>
                    <option value="bounce">Bounce Effect</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'card';
        const cardStyle = style.cardStyle || 'rounded';
        const numberSize = style.numberSize || 'large';
        const fontWeight = style.fontWeight || 'bold';
        const numberColor = style.numberColor || '#dc2626';
        const bg = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#fef2f2';
        const accentColor = style.accentColor || '#fecaca';
        const textAlign = style.textAlign || 'center';
        const shadow = style.shadow || 'medium';
        const decorations = style.decorations || 'none';
        const animation = style.animation || 'none';

        const cardClasses = {
            rounded: 'rounded-lg',
            sharp: 'rounded-none',
            pill: 'rounded-full px-12',
            shadow: 'rounded-lg shadow-2xl',
            bordered: 'rounded-lg border-4',
            gradient: 'rounded-lg border-4'
        };

        const numberSizeClasses = {
            small: 'text-4xl',
            medium: 'text-6xl',
            large: 'text-7xl',
            xlarge: 'text-9xl'
        };

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
            black: 'font-black'
        };

        const shadowClasses = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg',
            xlarge: 'shadow-2xl'
        };

        const decorationMap = {
            sparkles: '✨ 💫 ✨',
            hearts: '💕 ❤️ 💕',
            stars: '⭐ ⭐ ⭐',
            celebration: '🎊 🎉 🎊',
            none: ''
        };

        const animationClasses = {
            pulse: 'animate-pulse',
            glow: 'drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]',
            bounce: 'animate-bounce',
            none: ''
        };

        const dateStr = data.weddingdate ? new Date(data.weddingdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto text-${textAlign}">
                        <h2 class="text-2xl font-bold mb-6">Milestone</h2>
                        <div class="p-8 ${cardClasses[cardStyle]}" style="background: ${cardBg}">
                            <div class="text-6xl font-bold mb-2" style="color: ${numberColor}">${data.years || '0'}</div>
                            <div class="text-xl font-semibold mb-4">Years Together</div>
                            ${dateStr ? `<div class="text-sm text-gray-600 mb-4">Since ${dateStr}</div>` : ''}
                            ${data.description ? `<p class="text-gray-700 mt-4">${data.description}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Badge Layout
        if (layout === 'badge') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="inline-block p-12 ${cardClasses[cardStyle]} border-4" style="background: ${cardBg}; border-color: ${numberColor}">
                            <div class="text-8xl font-black mb-4" style="color: ${numberColor}">${data.years || '0'}</div>
                            <div class="text-2xl font-bold uppercase tracking-wider">Years</div>
                        </div>
                        ${dateStr ? `<p class="text-lg text-gray-600 mt-6">Married ${dateStr}</p>` : ''}
                        ${data.description ? `<p class="text-gray-700 mt-6 max-w-lg mx-auto">${data.description}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Timeline Layout
        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">Our Journey</h2>
                        <div class="flex items-center gap-8 ${cardClasses[cardStyle]} p-8" style="background: ${cardBg}">
                            <div class="flex-shrink-0 text-center">
                                <div class="text-6xl font-bold" style="color: ${numberColor}">${data.years || '0'}</div>
                                <div class="text-sm font-semibold mt-2">YEARS</div>
                            </div>
                            <div class="flex-shrink-0 text-4xl" style="color: ${numberColor}">→</div>
                            <div class="flex-1">
                                ${dateStr ? `<div class="text-lg font-semibold mb-2">Since ${dateStr}</div>` : ''}
                                ${data.description ? `<p class="text-gray-700">${data.description}</p>` : '<p class="text-gray-500">Celebrating love and togetherness</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Celebration Layout
        if (layout === 'celebration') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto text-center">
                        <div class="text-4xl mb-4">🎊 ✨ 🎉</div>
                        <h2 class="text-3xl font-bold mb-6">Celebrating</h2>
                        <div class="relative p-10 ${cardClasses[cardStyle]} overflow-hidden" style="background: ${cardBg}">
                            <div class="absolute top-4 left-4 text-3xl">🎈</div>
                            <div class="absolute top-4 right-4 text-3xl">🎈</div>
                            <div class="absolute bottom-4 left-4 text-3xl">💐</div>
                            <div class="absolute bottom-4 right-4 text-3xl">💐</div>
                            <div class="relative">
                                <div class="text-7xl font-bold mb-3" style="color: ${numberColor}">${data.years || '0'}</div>
                                <div class="text-2xl font-bold">Years of Love</div>
                                ${dateStr ? `<div class="text-sm text-gray-600 mt-4">${dateStr}</div>` : ''}
                                ${data.description ? `<p class="text-gray-700 mt-6">${data.description}</p>` : ''}
                            </div>
                        </div>
                        <div class="text-4xl mt-4">💕 ❤️ 💕</div>
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="text-center border-t-2 border-b-2 py-12 ${shadowClasses[shadow]}" style="border-color: ${numberColor}">
                            <div class="text-sm uppercase tracking-widest text-gray-500 mb-4">Anniversary Milestone</div>
                            ${decorationMap[decorations] ? `<div class="text-2xl mb-4">${decorationMap[decorations]}</div>` : ''}
                            <div class="flex items-center justify-center gap-6">
                                <div class="h-px flex-1" style="background: ${numberColor}"></div>
                                <div class="${numberSizeClasses[numberSize]} ${fontWeightClasses[fontWeight]} ${animationClasses[animation]}" style="color: ${numberColor}">${data.years || '0'}</div>
                                <div class="h-px flex-1" style="background: ${numberColor}"></div>
                            </div>
                            <div class="text-xl ${fontWeightClasses[fontWeight]} mt-4 tracking-wide">Years Together</div>
                            ${dateStr ? `<div class="text-sm text-gray-500 mt-6 italic">${dateStr}</div>` : ''}
                            ${data.description ? `<p class="text-gray-600 mt-8 font-light leading-relaxed">${data.description}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Circular Layout
        if (layout === 'circular') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto text-center">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-8">Milestone</h2>
                        ${decorationMap[decorations] ? `<div class="text-3xl mb-6">${decorationMap[decorations]}</div>` : ''}
                        <div class="relative inline-block ${shadowClasses[shadow]}">
                            <div class="w-64 h-64 rounded-full flex items-center justify-center relative ${animationClasses[animation]}" style="background: linear-gradient(135deg, ${cardBg} 0%, ${accentColor} 100%); border: 8px solid ${numberColor}">
                                <div class="text-center">
                                    <div class="${numberSizeClasses[numberSize]} ${fontWeightClasses[fontWeight]} mb-2" style="color: ${numberColor}">${data.years || '0'}</div>
                                    <div class="text-lg font-semibold uppercase tracking-wider">Years</div>
                                </div>
                            </div>
                        </div>
                        ${dateStr ? `<p class="text-lg mt-6">Since ${dateStr}</p>` : ''}
                        ${data.description ? `<p class="text-gray-700 mt-6 max-w-sm mx-auto">${data.description}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Banner Layout
        if (layout === 'banner') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg} 0%, ${cardBg} 100%)">
                    <div class="max-w-4xl mx-auto ${cardClasses[cardStyle]} overflow-hidden ${shadowClasses[shadow]}" style="background: ${cardBg}; border-color: ${accentColor}">
                        <div class="px-12 py-8" style="background: linear-gradient(90deg, ${numberColor} 0%, ${accentColor} 100%);">
                            <div class="flex items-center justify-between">
                                ${decorationMap[decorations] ? `<div class="text-4xl">${decorationMap[decorations]}</div>` : '<div></div>'}
                                <div class="text-center flex-1">
                                    <div class="${numberSizeClasses[numberSize]} ${fontWeightClasses[fontWeight]} ${animationClasses[animation]} text-white mb-2">${data.years || '0'}</div>
                                    <div class="text-2xl text-white uppercase tracking-widest">Years Together</div>
                                </div>
                                ${decorationMap[decorations] ? `<div class="text-4xl">${decorationMap[decorations]}</div>` : '<div></div>'}
                            </div>
                        </div>
                        <div class="px-12 py-6 text-center">
                            ${dateStr ? `<div class="text-lg mb-4">Celebrating since ${dateStr}</div>` : ''}
                            ${data.description ? `<p class="text-gray-700">${data.description}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="grid grid-cols-3 gap-6 items-center ${cardClasses[cardStyle]} p-8 ${shadowClasses[shadow]}" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="col-span-1 flex items-center justify-center">
                                <div class="text-center ${animationClasses[animation]}">
                                    <div class="${numberSizeClasses[numberSize]} ${fontWeightClasses[fontWeight]}" style="color: ${numberColor}">${data.years || '0'}</div>
                                </div>
                            </div>
                            <div class="col-span-2">
                                ${decorationMap[decorations] ? `<div class="text-2xl mb-3">${decorationMap[decorations]}</div>` : ''}
                                <h3 class="text-3xl ${fontWeightClasses[fontWeight]} mb-2">Years of Love</h3>
                                <div class="h-1 w-16 mb-4" style="background: ${numberColor}"></div>
                                ${dateStr ? `<p class="text-sm text-gray-500 mb-3">Married ${dateStr}</p>` : ''}
                                ${data.description ? `<p class="text-gray-700 text-sm leading-relaxed">${data.description}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Vintage Layout
        if (layout === 'vintage') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="border-4 ${shadowClasses[shadow]} p-12 relative" style="border-color: ${numberColor}; background: ${cardBg};">
                            <div class="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2" style="border-color: ${accentColor}"></div>
                            <div class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2" style="border-color: ${accentColor}"></div>
                            <div class="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2" style="border-color: ${accentColor}"></div>
                            <div class="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2" style="border-color: ${accentColor}"></div>

                            ${decorationMap[decorations] ? `<div class="text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                            <div class="text-xs uppercase tracking-widest mb-4" style="color: ${accentColor}">~ Celebrating ~</div>
                            <div class="${numberSizeClasses[numberSize]} ${fontWeightClasses[fontWeight]} ${animationClasses[animation]} mb-2" style="color: ${numberColor}">${data.years || '0'}</div>
                            <div class="text-2xl ${fontWeightClasses[fontWeight]} mb-6">Years of Marriage</div>
                            <div class="border-t-2 border-b-2 py-4 my-6" style="border-color: ${accentColor}33">
                                ${dateStr ? `<div class="text-sm italic">${dateStr}</div>` : ''}
                            </div>
                            ${data.description ? `<p class="text-gray-700 font-light italic">"${data.description}"</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Confetti Layout
        if (layout === 'confetti') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bg}">
                    <div class="absolute inset-0 pointer-events-none">
                        <div class="absolute top-10 left-10 text-3xl ${animationClasses[animation]}">🎊</div>
                        <div class="absolute top-20 right-20 text-2xl ${animationClasses[animation]}">🎉</div>
                        <div class="absolute top-40 left-1/4 text-xl ${animationClasses[animation]}">✨</div>
                        <div class="absolute top-60 right-1/3 text-3xl ${animationClasses[animation]}">🎈</div>
                        <div class="absolute bottom-20 left-20 text-2xl ${animationClasses[animation]}">💫</div>
                        <div class="absolute bottom-32 right-16 text-xl ${animationClasses[animation]}">🎊</div>
                    </div>
                    <div class="max-w-md mx-auto relative z-10">
                        <div class="text-center ${cardClasses[cardStyle]} p-10 ${shadowClasses[shadow]}" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="text-4xl mb-4">🎉 🎊 🎈</div>
                            <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-6">Celebration!</h2>
                            <div class="${numberSizeClasses[numberSize]} ${fontWeightClasses[fontWeight]} ${animationClasses[animation]} mb-3" style="color: ${numberColor}">${data.years || '0'}</div>
                            <div class="text-2xl ${fontWeightClasses[fontWeight]} mb-6">Amazing Years</div>
                            ${dateStr ? `<div class="text-sm text-gray-600 mb-4">Since ${dateStr}</div>` : ''}
                            ${data.description ? `<p class="text-gray-700 mt-4">${data.description}</p>` : ''}
                            ${decorationMap[decorations] ? `<div class="text-3xl mt-6">${decorationMap[decorations]}</div>` : ''}
                            <div class="text-4xl mt-4">💕 ❤️ 💕</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <div class="max-w-md mx-auto text-center">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} mb-6">Milestone</h2>
                    ${decorationMap[decorations] ? `<div class="text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                    <div class="p-8 ${cardClasses[cardStyle]} ${shadowClasses[shadow]}" style="background: ${cardBg}; border-color: ${accentColor}">
                        <div class="${numberSizeClasses[numberSize]} ${fontWeightClasses[fontWeight]} ${animationClasses[animation]} mb-2" style="color: ${numberColor}">${data.years || '0'}</div>
                        <div class="text-xl font-semibold mb-4">Years Together</div>
                        ${dateStr ? `<div class="text-sm text-gray-600 mb-4">Since ${dateStr}</div>` : ''}
                        ${data.description ? `<p class="text-gray-700 mt-4">${data.description}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
