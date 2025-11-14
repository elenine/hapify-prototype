// Journey Together Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.journey = {
    name: '🛤️ Journey Together',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Journey Highlights (one per line)</label>
                <textarea placeholder="First met in college&#10;Got engaged in Paris&#10;Welcomed our first child&#10;Built our dream home" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="highlights" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="list">List - Simple Items</option>
                    <option value="timeline">Timeline - Vertical Flow</option>
                    <option value="cards">Cards - Boxed Items</option>
                    <option value="steps">Steps - Numbered Path</option>
                    <option value="zigzag">Zigzag - Alternating Layout</option>
                    <option value="minimal">Minimal - Clean List</option>
                    <option value="roadmap">Roadmap - Journey Path</option>
                    <option value="milestones">Milestones - Achievement Track</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="iconStyle" onchange="updatePreview()">
                    <option value="heart">Heart ❤️</option>
                    <option value="star">Star ⭐</option>
                    <option value="sparkle">Sparkle ✨</option>
                    <option value="flower">Flower 🌸</option>
                    <option value="ring">Ring 💍</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="timelineStyle" onchange="updatePreview()">
                    <option value="solid">Solid Line</option>
                    <option value="dashed">Dashed Line</option>
                    <option value="dotted">Dotted Line</option>
                    <option value="gradient">Gradient Line</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hover Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="hoverEffect" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="lift" selected>Lift</option>
                    <option value="glow">Glow</option>
                    <option value="scale">Scale</option>
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
        const layout = style.layout || 'list';
        const fontWeight = style.fontWeight || 'normal';
        const shadow = style.shadow || 'medium';
        const borderRadius = style.borderRadius || 'medium';
        const spacing = style.spacing || 'normal';
        const iconStyle = style.iconStyle || 'heart';
        const iconSize = style.iconSize || 'medium';
        const timelineStyle = style.timelineStyle || 'solid';
        const hoverEffect = style.hoverEffect || 'lift';
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

        const iconMap = {
            heart: '❤️',
            star: '⭐',
            sparkle: '✨',
            flower: '🌸',
            ring: '💍'
        };

        const iconSizeClasses = {
            small: 'text-base',
            medium: 'text-xl',
            large: 'text-2xl',
            xlarge: 'text-3xl'
        };

        const timelineStyleClasses = {
            solid: '',
            dashed: 'border-dashed',
            dotted: 'border-dotted',
            gradient: ''
        };

        const hoverEffectClasses = {
            none: '',
            lift: 'hover:-translate-y-1 transition-transform',
            glow: 'hover:shadow-xl transition-shadow',
            scale: 'hover:scale-105 transition-transform'
        };

        const highlights = data.highlights ? data.highlights.split('\n').filter(h => h.trim()) : [];

        // List Layout
        if (layout === 'list') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${highlights.map(highlight => `
                            <div class="flex items-start gap-3 p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}" style="background: ${cardBg}">
                                <div class="${iconSizeClasses[iconSize]} mt-1" style="color: ${accentColor}">${iconMap[iconStyle]}</div>
                                <div class="${fontWeightClasses[fontWeight]}">${highlight}</div>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        // Timeline Layout
        if (layout === 'timeline') {
            const timelineLine = timelineStyle === 'gradient'
                ? `<div class="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b" style="background: linear-gradient(180deg, ${accentColor}, ${secondaryColor})"></div>`
                : `<div class="absolute left-4 top-0 bottom-0 w-1 border-l-2 ${timelineStyleClasses[timelineStyle]}" style="border-color: ${accentColor}"></div>`;

            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-md mx-auto relative">
                        ${timelineLine}
                        <div class="space-y-6 relative">
                            ${highlights.map(highlight => `
                                <div class="flex gap-4">
                                    <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${shadowClasses[shadow]}" style="background: ${accentColor}">
                                        <div class="text-white ${iconSizeClasses[iconSize]}">${iconMap[iconStyle]}</div>
                                    </div>
                                    <div class="flex-1 pt-1">
                                        <div class="p-3 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]} ${fontWeightClasses[fontWeight]}" style="background: ${cardBg}">
                                            ${highlight}
                                        </div>
                                    </div>
                                </div>
                            `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Cards Layout
        if (layout === 'cards') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${highlights.map(highlight => `
                            <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]} text-center" style="background: ${cardBg}; border-top: 4px solid ${accentColor}">
                                <div class="${iconSizeClasses[iconSize]} text-3xl mb-3" style="color: ${accentColor}">${iconMap[iconStyle]}</div>
                                <p class="text-gray-700 ${fontWeightClasses[fontWeight]}">${highlight}</p>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500 col-span-2">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        // Steps Layout
        if (layout === 'steps') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${highlights.map((highlight, idx) => `
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${fontWeightClasses[fontWeight]} text-white ${shadowClasses[shadow]}" style="background: ${accentColor}">
                                    ${idx + 1}
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]} ${fontWeightClasses[fontWeight]}" style="background: ${cardBg}">
                                        ${highlight}
                                    </div>
                                </div>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        // Zigzag Layout
        if (layout === 'zigzag') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-2xl mx-auto space-y-8">
                        ${highlights.map((highlight, idx) => {
                            const isEven = idx % 2 === 0;
                            return `
                                <div class="flex items-center gap-6 ${isEven ? '' : 'flex-row-reverse'}">
                                    <div class="flex-1 ${isEven ? 'text-right' : 'text-left'}">
                                        <div class="inline-block p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}" style="background: ${cardBg}">
                                            <p class="${fontWeightClasses[fontWeight]} text-gray-700">${highlight}</p>
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                        <div class="text-white ${iconSizeClasses[iconSize]}">${iconMap[iconStyle]}</div>
                                    </div>
                                    <div class="flex-1"></div>
                                </div>
                            `;
                        }).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl font-light text-center mb-8 tracking-wide">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-xl mx-auto">
                        ${highlights.map((highlight, idx) => `
                            <div class="py-4 border-b ${hoverEffectClasses[hoverEffect]}" style="border-color: ${accentColor}22">
                                <div class="flex items-center gap-3">
                                    <div class="${iconSizeClasses[iconSize]}" style="color: ${accentColor}">${iconMap[iconStyle]}</div>
                                    <p class="${fontWeightClasses[fontWeight]} text-gray-700">${highlight}</p>
                                </div>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        // Roadmap Layout
        if (layout === 'roadmap') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-3xl mx-auto relative">
                        <div class="absolute left-0 right-0 top-1/2 h-1 transform -translate-y-1/2 hidden md:block" style="background: linear-gradient(90deg, ${accentColor}, ${secondaryColor})"></div>
                        <div class="grid grid-cols-1 md:grid-cols-${Math.min(highlights.length, 4)} gap-4 relative z-10">
                            ${highlights.map((highlight, idx) => `
                                <div class="text-center">
                                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}" style="background: ${cardBg}; border: 3px solid ${accentColor}">
                                        <div class="${iconSizeClasses[iconSize]}" style="color: ${accentColor}">${iconMap[iconStyle]}</div>
                                    </div>
                                    <p class="${fontWeightClasses[fontWeight]} text-sm text-gray-700">${highlight}</p>
                                </div>
                            `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Milestones Layout
        if (layout === 'milestones') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: linear-gradient(180deg, ${bg}, ${cardBg})">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-2xl mx-auto space-y-6">
                        ${highlights.map((highlight, idx) => `
                            <div class="relative">
                                <div class="flex items-center gap-4">
                                    <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                         style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                        <div class="text-white ${iconSizeClasses[iconSize]}">${iconMap[iconStyle]}</div>
                                    </div>
                                    <div class="flex-1 p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                         style="background: ${cardBg}; border-left: 4px solid ${accentColor}">
                                        <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Milestone ${idx + 1}</div>
                                        <p class="${fontWeightClasses[fontWeight]} text-gray-700">${highlight}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        // Default - List
        return `
            <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Journey'}</h2>
                <div class="max-w-md mx-auto space-y-4">
                    ${highlights.map(highlight => `
                        <div class="flex items-start gap-3 p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}" style="background: ${cardBg}">
                            <div class="${iconSizeClasses[iconSize]} mt-1" style="color: ${accentColor}">${iconMap[iconStyle]}</div>
                            <div class="${fontWeightClasses[fontWeight]}">${highlight}</div>
                        </div>
                    `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                </div>
            </div>
        `;
    }
};
