// Quotes Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quotes = {
    name: '💬 Love Quotes',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Text</label>
                <textarea placeholder="Love is not about how many days, months, or years you have been together..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="quote" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Author (optional)</label>
                <input type="text" placeholder="Anonymous" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="author" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="minimal">Minimal</option>
                    <option value="modern">Modern Block</option>
                    <option value="script">Script Style</option>
                    <option value="bordered">Bordered</option>
                    <option value="ribbon">Ribbon Banner</option>
                    <option value="floating">Floating Quote</option>
                    <option value="manuscript">Manuscript</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#f87171" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal" selected>Normal</option>
                    <option value="medium">Medium</option>
                    <option value="semibold">Semi Bold</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="quoteSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm" selected>Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                    <option value="full">Full</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Mark Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="quoteMarkStyle" onchange="updatePreview()">
                    <option value="standard">Standard "...</option>
                    <option value="large">Large Opening "...</option>
                    <option value="decorative">Decorative 💬...</option>
                    <option value="none">None</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hover Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="hoverEffect" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="lift" selected>Lift</option>
                    <option value="grow">Grow</option>
                    <option value="glow">Glow</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fef2f2';
        const accentColor = style.accentColor || '#ef4444';
        const secondaryColor = style.secondaryColor || '#f87171';
        const cardBg = style.cardBg || '#ffffff';
        const fontWeight = style.fontWeight || 'normal';
        const quoteSize = style.quoteSize || 'large';
        const shadow = style.shadow || 'sm';
        const borderRadius = style.borderRadius || 'lg';
        const spacing = style.spacing || 'normal';
        const quoteMarkStyle = style.quoteMarkStyle || 'standard';
        const textAlign = style.textAlign || 'center';
        const hoverEffect = style.hoverEffect || 'lift';

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        };

        const quoteSizeClasses = {
            small: 'text-base',
            medium: 'text-lg',
            large: 'text-xl',
            xlarge: 'text-2xl'
        };

        const shadowClasses = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };

        const borderRadiusClasses = {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full'
        };

        const spacingClasses = {
            compact: 'py-8 px-6',
            normal: 'py-12 px-6',
            relaxed: 'py-16 px-6',
            loose: 'py-20 px-6'
        };

        const hoverEffectClasses = {
            none: '',
            lift: 'transition hover:-translate-y-1',
            grow: 'transition hover:scale-105',
            glow: 'transition hover:shadow-2xl'
        };

        const getQuoteText = () => {
            const quoteText = data.quote || 'Add your favorite love quote...';

            if (quoteMarkStyle === 'standard') {
                return `"${quoteText}"`;
            } else if (quoteMarkStyle === 'large') {
                return quoteText;
            } else if (quoteMarkStyle === 'decorative') {
                return quoteText;
            } else {
                return quoteText;
            }
        };

        // Classic Card Layout
        if (layout === 'classic') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} text-center ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}">
                            ${quoteMarkStyle === 'large' ? `<div class="text-4xl mb-4" style="color: ${accentColor}">"</div>` : ''}
                            ${quoteMarkStyle === 'decorative' ? `<div class="text-4xl mb-4">💬</div>` : ''}
                            <p class="${quoteSizeClasses[quoteSize]} text-gray-700 italic mb-4 ${fontWeightClasses[fontWeight]}"
                               style="text-align: ${textAlign}">
                                ${getQuoteText()}
                            </p>
                            ${data.author ? `<p class="text-sm text-gray-500">— ${data.author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Frame Layout
        if (layout === 'elegant') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}; border: 4px double ${accentColor}">
                            <div class="absolute -top-4 -left-4 w-8 h-8 ${borderRadiusClasses['full']}"
                                 style="background: ${accentColor}"></div>
                            <div class="absolute -top-4 -right-4 w-8 h-8 ${borderRadiusClasses['full']}"
                                 style="background: ${secondaryColor}"></div>
                            <div class="absolute -bottom-4 -left-4 w-8 h-8 ${borderRadiusClasses['full']}"
                                 style="background: ${secondaryColor}"></div>
                            <div class="absolute -bottom-4 -right-4 w-8 h-8 ${borderRadiusClasses['full']}"
                                 style="background: ${accentColor}"></div>

                            ${quoteMarkStyle === 'large' ? `<div class="text-6xl opacity-20 absolute top-4 left-4" style="color: ${accentColor}">"</div>` : ''}
                            <div class="relative z-10 text-${textAlign}">
                                ${quoteMarkStyle === 'decorative' ? `<div class="text-3xl mb-4">💬</div>` : ''}
                                <p class="${quoteSizeClasses[quoteSize]} text-gray-700 italic mb-4 ${fontWeightClasses[fontWeight]}">
                                    ${getQuoteText()}
                                </p>
                                ${data.author ? `<p class="text-sm ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">— ${data.author}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-${textAlign}">
                        ${quoteMarkStyle === 'decorative' ? `<div class="text-3xl mb-4">💬</div>` : ''}
                        ${quoteMarkStyle === 'large' ? `<div class="text-5xl mb-2 opacity-50" style="color: ${accentColor}">"</div>` : ''}
                        <p class="${quoteSizeClasses[quoteSize]} text-gray-700 italic mb-4 ${fontWeightClasses[fontWeight]}">
                            ${getQuoteText()}
                        </p>
                        ${data.author ? `
                            <div class="flex items-center gap-3 ${textAlign === 'center' ? 'justify-center' : textAlign === 'right' ? 'justify-end' : ''}">
                                <div class="h-px w-12 ${borderRadiusClasses[borderRadius]}" style="background: ${accentColor}"></div>
                                <p class="text-sm text-gray-600 ${fontWeightClasses[fontWeight]}">${data.author}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Modern Block Layout
        if (layout === 'modern') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}; border-left: 6px solid ${accentColor}">
                            ${quoteMarkStyle === 'decorative' ? `<div class="text-4xl mb-4">💬</div>` : ''}
                            <p class="${quoteSizeClasses[quoteSize]} text-gray-700 ${fontWeightClasses[fontWeight]} mb-4"
                               style="text-align: ${textAlign}; ${quoteMarkStyle !== 'none' ? 'font-style: italic;' : ''}">
                                ${getQuoteText()}
                            </p>
                            ${data.author ? `
                                <div class="flex items-center gap-3 pt-4 border-t" style="border-color: ${accentColor}22">
                                    <div class="w-2 h-2 ${borderRadiusClasses['full']}" style="background: ${accentColor}"></div>
                                    <p class="text-sm ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">${data.author}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Script Style Layout
        if (layout === 'script') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="inline-block p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: linear-gradient(135deg, ${cardBg}, ${bg})">
                            ${quoteMarkStyle === 'large' ? `<div class="text-6xl mb-4" style="color: ${accentColor}">"</div>` : ''}
                            ${quoteMarkStyle === 'decorative' ? `<div class="text-5xl mb-4">💬</div>` : ''}
                            <p class="${quoteSizeClasses[quoteSize]} font-serif italic ${fontWeightClasses[fontWeight]} mb-6"
                               style="color: ${accentColor}; text-align: ${textAlign};">
                                ${getQuoteText()}
                            </p>
                            ${data.author ? `
                                <div class="pt-4">
                                    <div class="h-px w-24 mx-auto mb-3" style="background: linear-gradient(90deg, transparent, ${accentColor}, transparent)"></div>
                                    <p class="text-sm text-gray-600 font-serif ${fontWeightClasses[fontWeight]}">${data.author}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Bordered Layout
        if (layout === 'bordered') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg};
                                    border-top: 3px solid ${accentColor};
                                    border-bottom: 3px solid ${secondaryColor};
                                    border-left: 1px solid ${accentColor}33;
                                    border-right: 1px solid ${secondaryColor}33;">
                            <div class="text-center">
                                ${quoteMarkStyle === 'decorative' ? `<div class="text-4xl mb-4">💬</div>` : ''}
                                ${quoteMarkStyle === 'large' ? `<div class="text-5xl mb-2" style="color: ${accentColor}">"</div>` : ''}
                                <p class="${quoteSizeClasses[quoteSize]} text-gray-700 italic ${fontWeightClasses[fontWeight]} mb-4"
                                   style="text-align: ${textAlign}">
                                    ${getQuoteText()}
                                </p>
                                ${data.author ? `
                                    <div class="inline-block px-6 py-2 ${borderRadiusClasses['full']}"
                                         style="background: linear-gradient(90deg, ${accentColor}, ${secondaryColor})">
                                        <p class="text-sm text-white ${fontWeightClasses[fontWeight]}">${data.author}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Ribbon Banner Layout
        if (layout === 'ribbon') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-8 pt-12 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}">
                            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 px-8 py-2 ${borderRadiusClasses[borderRadius]} ${shadowClasses['md']}"
                                 style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor}); color: white;">
                                <span class="text-sm font-semibold uppercase tracking-wider">
                                    ${quoteMarkStyle === 'decorative' ? '💬 ' : ''}Quote
                                </span>
                            </div>

                            <div class="text-${textAlign}">
                                ${quoteMarkStyle === 'large' ? `<div class="text-5xl mb-4" style="color: ${accentColor}">"</div>` : ''}
                                <p class="${quoteSizeClasses[quoteSize]} text-gray-700 italic ${fontWeightClasses[fontWeight]} mb-4">
                                    ${getQuoteText()}
                                </p>
                                ${data.author ? `
                                    <div class="pt-4 border-t" style="border-color: ${accentColor}22">
                                        <p class="text-sm ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">— ${data.author}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Floating Quote Layout
        if (layout === 'floating') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="relative inline-block">
                            ${quoteMarkStyle === 'decorative' ? `
                                <div class="absolute -top-8 -left-8 text-6xl opacity-30">💬</div>
                            ` : ''}
                            ${quoteMarkStyle === 'large' ? `
                                <div class="absolute -top-6 -left-6 text-7xl opacity-20" style="color: ${accentColor}">"</div>
                            ` : ''}

                            <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]} relative z-10"
                                 style="background: ${cardBg}">
                                <p class="${quoteSizeClasses[quoteSize]} text-gray-700 italic ${fontWeightClasses[fontWeight]} mb-4"
                                   style="text-align: ${textAlign}">
                                    ${getQuoteText()}
                                </p>
                                ${data.author ? `
                                    <div class="flex items-center justify-center gap-2">
                                        <div class="w-8 h-px" style="background: ${accentColor}"></div>
                                        <p class="text-sm text-gray-600 ${fontWeightClasses[fontWeight]}">${data.author}</p>
                                        <div class="w-8 h-px" style="background: ${secondaryColor}"></div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Manuscript Layout
        if (layout === 'manuscript') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}; border: 2px solid ${accentColor}22">
                            <div class="relative">
                                <div class="absolute -left-4 top-0 bottom-0 w-1 ${borderRadiusClasses[borderRadius]}"
                                     style="background: linear-gradient(180deg, ${accentColor}, ${secondaryColor})"></div>

                                <div style="text-align: ${textAlign}">
                                    ${quoteMarkStyle === 'decorative' ? `<div class="text-4xl mb-4">💬</div>` : ''}
                                    ${quoteMarkStyle === 'large' ? `
                                        <p class="${quoteSizeClasses[quoteSize]} text-gray-700 font-serif ${fontWeightClasses[fontWeight]} mb-4 first-letter:text-5xl first-letter:${fontWeightClasses['bold']} first-letter:float-left first-letter:mr-2"
                                           style="text-align: ${textAlign === 'center' ? 'justify' : textAlign}; font-style: italic; color: ${accentColor}22">
                                            ${getQuoteText()}
                                        </p>
                                    ` : `
                                        <p class="${quoteSizeClasses[quoteSize]} text-gray-700 font-serif italic ${fontWeightClasses[fontWeight]} mb-4">
                                            ${getQuoteText()}
                                        </p>
                                    `}
                                    ${data.author ? `
                                        <div class="mt-6 pt-6 border-t" style="border-color: ${accentColor}22">
                                            <p class="text-sm font-serif ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">
                                                — ${data.author}
                                            </p>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default to classic
        return '';
    }
};
