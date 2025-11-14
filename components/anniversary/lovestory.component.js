// Love Story Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.lovestory = {
    name: '💕 Love Story',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Story Title</label>
                <input type="text" placeholder="How We Met" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Love Story</label>
                <textarea placeholder="Share your beautiful love story..." rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Centered Box</option>
                    <option value="narrative">Narrative - Story Format</option>
                    <option value="quote">Quote - Letter Style</option>
                    <option value="elegant">Elegant - Minimalist</option>
                    <option value="romantic">Romantic - Heart Themed</option>
                    <option value="storybook">Storybook - Illustrated Style</option>
                    <option value="modern">Modern - Clean Design</option>
                    <option value="vintage">Vintage - Classic Style</option>
                    <option value="poetic">Poetic - Artistic Layout</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderStyle" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="solid">Solid</option>
                    <option value="double">Double</option>
                    <option value="dashed">Dashed</option>
                    <option value="gradient">Gradient</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Decorative Elements</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="hearts">Hearts 💕</option>
                    <option value="flowers">Flowers 🌸</option>
                    <option value="stars">Stars ✨</option>
                    <option value="rings">Rings 💍</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="justify">Justify</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'card';
        const fontWeight = style.fontWeight || 'normal';
        const fontSize = style.fontSize || 'medium';
        const shadow = style.shadow || 'medium';
        const borderStyle = style.borderStyle || 'none';
        const borderRadius = style.borderRadius || 'medium';
        const spacing = style.spacing || 'normal';
        const decorations = style.decorations || 'none';
        const iconSize = style.iconSize || 'medium';
        const cardBg = style.cardBg || '#fef2f2';
        const accentColor = style.accentColor || '#dc2626';
        const secondaryColor = style.secondaryColor || '#f87171';
        const bg = style.bg || '#ffffff';
        const textAlign = style.textAlign || 'center';

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        };

        const fontSizeClasses = {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
            xlarge: 'text-xl'
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

        const decorationMap = {
            none: '',
            hearts: '💕',
            flowers: '🌸',
            stars: '✨',
            rings: '💍'
        };

        const iconSizeClasses = {
            small: 'text-3xl',
            medium: 'text-5xl',
            large: 'text-6xl',
            xlarge: 'text-7xl'
        };

        const getBorderClass = () => {
            if (borderStyle === 'none') return '';
            if (borderStyle === 'gradient') return 'border-4';
            return `border-2 ${borderStyle === 'dashed' ? 'border-dashed' : borderStyle === 'double' ? 'border-double border-4' : ''}`;
        };

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="text-center mb-6">
                            <div class="${iconSizeClasses[iconSize]} mb-3">💕</div>
                            ${decorationMap[decorations] ? `<div class="text-2xl mb-3">${decorationMap[decorations]}</div>` : ''}
                            <h2 class="text-2xl ${fontWeightClasses[fontWeight]}">${data.title || 'Our Love Story'}</h2>
                        </div>
                        <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${getBorderClass()}" style="background: ${cardBg}; ${borderStyle === 'gradient' ? `border-image: linear-gradient(135deg, ${accentColor}, ${secondaryColor}) 1;` : `border-color: ${accentColor};`}">
                            <p class="text-gray-700 leading-relaxed text-${textAlign} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Narrative Layout
        if (layout === 'narrative') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-l-4 pl-6 ${shadowClasses[shadow]}" style="border-color: ${accentColor}">
                            <h2 class="text-3xl ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                            <div class="text-2xl mb-6">💕</div>
                            ${decorationMap[decorations] ? `<div class="text-xl mb-4">${decorationMap[decorations]}</div>` : ''}
                            <p class="text-lg text-gray-700 leading-relaxed text-${textAlign} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Quote Layout
        if (layout === 'quote') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                            <div class="text-6xl opacity-20 absolute top-4 left-4" style="color: ${accentColor}">"</div>
                            <div class="relative z-10">
                                <h2 class="text-2xl font-serif mb-6 text-center ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                                ${decorationMap[decorations] ? `<div class="text-center ${iconSizeClasses[iconSize]} mb-4">${decorationMap[decorations]}</div>` : ''}
                                <p class="text-gray-700 leading-relaxed italic text-${textAlign} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}">${data.story || 'Share your beautiful love story here...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center border-t-2 border-b-2 py-12" style="border-color: ${accentColor}33">
                        <div class="text-xs uppercase tracking-widest mb-4" style="color: ${accentColor}">${data.title || 'Our Love Story'}</div>
                        <div class="flex items-center justify-center gap-4 mb-6">
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                            <div class="text-3xl">${decorationMap[decorations] || '💕'}</div>
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                        </div>
                        <p class="text-gray-600 font-light leading-relaxed text-${textAlign} ${fontSizeClasses[fontSize]}">${data.story || 'Share your beautiful love story here...'}</p>
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
                    ${decorationMap[decorations] ? `
                        <div class="absolute top-20 right-20 text-4xl opacity-20">${decorationMap[decorations]}</div>
                        <div class="absolute bottom-20 left-20 text-4xl opacity-20">${decorationMap[decorations]}</div>
                    ` : ''}
                    <div class="max-w-md mx-auto relative z-10">
                        <div class="text-center mb-6">
                            <div class="inline-block p-4 ${borderRadiusClasses[borderRadius]} mb-4" style="background: ${accentColor}22">
                                <div class="${iconSizeClasses[iconSize]}">❤️</div>
                            </div>
                            <h2 class="text-2xl ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                        </div>
                        <div class="p-6 bg-white ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}">
                            <p class="text-gray-700 leading-relaxed text-${textAlign} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Storybook Layout
        if (layout === 'storybook') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: linear-gradient(180deg, ${bg}, ${cardBg})">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}; border: 3px double ${accentColor}">
                            <div class="text-center mb-6">
                                <div class="${iconSizeClasses[iconSize]} mb-2">📖</div>
                                <h2 class="text-3xl font-serif ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                                <div class="h-1 w-20 mx-auto mt-3 ${borderRadiusClasses[borderRadius]}" style="background: linear-gradient(90deg, ${accentColor}, ${secondaryColor})"></div>
                            </div>
                            ${decorationMap[decorations] ? `<div class="text-center text-3xl mb-4">${decorationMap[decorations]}</div>` : ''}
                            <div class="relative">
                                <p class="text-gray-700 leading-loose first-letter:text-5xl first-letter:${fontWeightClasses[fontWeight]} first-letter:float-left first-letter:mr-2" style="text-align: ${textAlign === 'center' ? 'justify' : textAlign}; font-size: ${fontSize === 'small' ? '0.875rem' : fontSize === 'large' ? '1.125rem' : fontSize === 'xlarge' ? '1.25rem' : '1rem'}; font-weight: ${fontWeight === 'light' ? '300' : fontWeight === 'medium' ? '500' : fontWeight === 'semibold' ? '600' : fontWeight === 'bold' ? '700' : '400'};">
                                    ${data.story || 'Share your beautiful love story here...'}
                                </p>
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
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="md:col-span-1 flex flex-col items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor}); ${borderRadiusClasses[borderRadius] ? `border-radius: ${borderRadius === 'small' ? '0.25rem' : borderRadius === 'large' ? '1rem' : borderRadius === 'full' ? '1.5rem' : '0.5rem'}` : ''}">
                                <div class="text-white p-6 text-center">
                                    <div class="${iconSizeClasses[iconSize]} mb-3">${decorationMap[decorations] || '💕'}</div>
                                    <h2 class="text-xl ${fontWeightClasses[fontWeight]}">${data.title || 'Our Love Story'}</h2>
                                </div>
                            </div>
                            <div class="md:col-span-2 p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                                <p class="text-gray-700 leading-relaxed text-${textAlign} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}">${data.story || 'Share your beautiful love story here...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Vintage Layout
        if (layout === 'vintage') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="relative p-10 ${shadowClasses[shadow]}" style="background: ${cardBg}; border: 6px double ${accentColor}">
                            <div class="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2" style="border-color: ${secondaryColor}"></div>
                            <div class="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2" style="border-color: ${secondaryColor}"></div>
                            <div class="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2" style="border-color: ${secondaryColor}"></div>
                            <div class="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2" style="border-color: ${secondaryColor}"></div>
                            <div class="text-center mb-6">
                                <div class="${iconSizeClasses[iconSize]} mb-2">${decorationMap[decorations] || '💕'}</div>
                                <h2 class="text-2xl font-serif ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                                <div class="flex items-center justify-center gap-2 mt-2">
                                    <div class="h-px w-12" style="background: ${accentColor}"></div>
                                    <div class="text-sm">❤️</div>
                                    <div class="h-px w-12" style="background: ${accentColor}"></div>
                                </div>
                            </div>
                            <p class="text-gray-700 leading-relaxed font-serif text-${textAlign} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}">${data.story || 'Share your beautiful love story here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Poetic Layout
        if (layout === 'poetic') {
            return `
                <div class="${spacingClasses[spacing]} relative overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${cardBg} 50%, ${bg} 100%);">
                    <div class="absolute inset-0 opacity-5">
                        <div class="absolute top-10 left-10 text-8xl">${decorationMap[decorations] || '💕'}</div>
                        <div class="absolute top-40 right-20 text-6xl">${decorationMap[decorations] || '💕'}</div>
                        <div class="absolute bottom-20 left-1/3 text-7xl">${decorationMap[decorations] || '💕'}</div>
                    </div>
                    <div class="max-w-xl mx-auto relative z-10">
                        <div class="text-center mb-8">
                            <div class="inline-block">
                                <h2 class="text-3xl font-serif italic ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">${data.title || 'Our Love Story'}</h2>
                                <div class="h-1 ${borderRadiusClasses[borderRadius]}" style="background: linear-gradient(90deg, transparent, ${accentColor}, transparent)"></div>
                            </div>
                        </div>
                        <div class="p-8 backdrop-blur-sm ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}cc">
                            <p class="text-gray-700 leading-loose italic text-${textAlign} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}">${data.story || 'Share your beautiful love story here...'}</p>
                            <div class="text-center mt-6">
                                <div class="inline-block ${iconSizeClasses[iconSize]}">${decorationMap[decorations] || '💕'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default - Card
        return `
            <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    <div class="text-center mb-6">
                        <div class="${iconSizeClasses[iconSize]} mb-3">💕</div>
                        ${decorationMap[decorations] ? `<div class="text-2xl mb-3">${decorationMap[decorations]}</div>` : ''}
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]}">${data.title || 'Our Love Story'}</h2>
                    </div>
                    <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                        <p class="text-gray-700 leading-relaxed text-${textAlign} ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}">${data.story || 'Share your beautiful love story here...'}</p>
                    </div>
                </div>
            </div>
        `;
    }
};
