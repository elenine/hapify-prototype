// Timeline Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Relationship Timeline',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Story Timeline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Events (format: Year | Event)</label>
                <textarea placeholder="2000 | First met at college&#10;2005 | Got engaged in Paris&#10;2010 | Wedding day&#10;2015 | First child born&#10;2020 | Bought our dream home" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="events" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">One event per line, use | to separate year and description</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="vertical">Vertical - Traditional</option>
                    <option value="horizontal">Horizontal - Wide Display</option>
                    <option value="zigzag">Zigzag - Alternating</option>
                    <option value="cards">Cards - Boxed Events</option>
                    <option value="minimal">Minimal - Clean Lines</option>
                    <option value="modern">Modern - Sleek Design</option>
                    <option value="vintage">Vintage - Classic Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Line Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="lineStyle" onchange="updatePreview()">
                    <option value="solid">Solid</option>
                    <option value="dashed">Dashed</option>
                    <option value="dotted">Dotted</option>
                    <option value="gradient">Gradient</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Year Badge Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="badgeStyle" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Rectangle</option>
                    <option value="sharp">Sharp Rectangle</option>
                    <option value="pill">Pill</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Hover Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="hoverEffect" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="lift" selected>Lift</option>
                    <option value="glow">Glow</option>
                    <option value="scale">Scale</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Year Badge Color</label>
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
        const layout = style.layout || 'vertical';
        const lineStyle = style.lineStyle || 'solid';
        const badgeStyle = style.badgeStyle || 'circle';
        const fontWeight = style.fontWeight || 'normal';
        const shadow = style.shadow || 'medium';
        const borderRadius = style.borderRadius || 'medium';
        const spacing = style.spacing || 'normal';
        const hoverEffect = style.hoverEffect || 'lift';
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

        const hoverEffectClasses = {
            none: '',
            lift: 'hover:-translate-y-1 transition-transform',
            glow: 'hover:shadow-xl transition-shadow',
            scale: 'hover:scale-105 transition-transform'
        };

        const badgeStyleClasses = {
            circle: 'rounded-full w-16 h-16 flex items-center justify-center',
            rounded: 'rounded-lg px-4 py-2',
            sharp: 'rounded-none px-4 py-2',
            pill: 'rounded-full px-5 py-2'
        };

        const events = data.events ? data.events.split('\n').filter(e => e.trim()).map(event => {
            const [year, description] = event.split('|').map(s => s.trim());
            return { year: year || '', description: description || event };
        }) : [];

        // Vertical Layout
        if (layout === 'vertical') {
            const lineClasses = lineStyle === 'gradient'
                ? ''
                : `border-l-2 ${lineStyle === 'dashed' ? 'border-dashed' : lineStyle === 'dotted' ? 'border-dotted' : ''}`;

            const lineElement = lineStyle === 'gradient'
                ? `<div class="absolute left-8 top-0 bottom-0 w-1" style="background: linear-gradient(180deg, ${accentColor}, ${secondaryColor})"></div>`
                : `<div class="absolute left-8 top-0 bottom-0 ${lineClasses}" style="border-color: ${accentColor}"></div>`;

            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Story Timeline'}</h2>
                    <div class="max-w-2xl mx-auto relative">
                        ${lineElement}
                        <div class="space-y-6">
                            ${events.map(event => `
                                <div class="flex gap-6 relative">
                                    <div class="flex-shrink-0 ${badgeStyleClasses[badgeStyle]} ${shadowClasses[shadow]} text-white text-sm ${fontWeightClasses[fontWeight]} z-10" style="background: ${accentColor}">
                                        ${event.year}
                                    </div>
                                    <div class="flex-1 pt-2">
                                        <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}" style="background: ${cardBg}">
                                            <p class="text-gray-700 ${fontWeightClasses[fontWeight]}">${event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('') || '<p class="text-center text-gray-500">Add timeline events</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Horizontal Layout
        if (layout === 'horizontal') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Story Timeline'}</h2>
                    <div class="max-w-full mx-auto overflow-x-auto">
                        <div class="flex items-center gap-4 min-w-max px-8">
                            ${events.map((event, idx) => `
                                <div class="flex flex-col items-center text-center ${hoverEffectClasses[hoverEffect]}">
                                    <div class="${badgeStyleClasses[badgeStyle]} ${shadowClasses[shadow]} text-white text-sm ${fontWeightClasses[fontWeight]} mb-4" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                        ${event.year}
                                    </div>
                                    <div class="w-px h-12 mb-4" style="background: ${accentColor}"></div>
                                    <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} max-w-xs" style="background: ${cardBg}">
                                        <p class="text-gray-700 text-sm ${fontWeightClasses[fontWeight]}">${event.description}</p>
                                    </div>
                                </div>
                                ${idx < events.length - 1 ? `<div class="h-px w-12 flex-shrink-0" style="background: ${accentColor}"></div>` : ''}
                            `).join('') || '<p class="text-center text-gray-500">Add timeline events</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Zigzag Layout
        if (layout === 'zigzag') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Story Timeline'}</h2>
                    <div class="max-w-3xl mx-auto space-y-8">
                        ${events.map((event, idx) => {
                            const isLeft = idx % 2 === 0;
                            return `
                                <div class="flex items-center gap-6 ${isLeft ? '' : 'flex-row-reverse'}">
                                    <div class="flex-1 ${isLeft ? 'text-right' : 'text-left'}">
                                        <div class="inline-block p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}" style="background: ${cardBg}">
                                            <p class="${fontWeightClasses[fontWeight]} text-gray-700">${event.description}</p>
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 ${badgeStyleClasses[badgeStyle]} ${shadowClasses[shadow]} text-white text-sm ${fontWeightClasses[fontWeight]}" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                        ${event.year}
                                    </div>
                                    <div class="flex-1"></div>
                                </div>
                            `;
                        }).join('') || '<p class="text-center text-gray-500">Add timeline events</p>'}
                    </div>
                </div>
            `;
        }

        // Cards Layout
        if (layout === 'cards') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Story Timeline'}</h2>
                    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${events.map(event => `
                            <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]} text-center" style="background: ${cardBg}; border-top: 4px solid ${accentColor}">
                                <div class="inline-block ${badgeStyleClasses[badgeStyle]} ${shadowClasses[shadow]} text-white text-sm ${fontWeightClasses[fontWeight]} mb-4" style="background: ${accentColor}">
                                    ${event.year}
                                </div>
                                <p class="text-gray-700 ${fontWeightClasses[fontWeight]}">${event.description}</p>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500 col-span-full">Add timeline events</p>'}
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl font-light text-center mb-8 tracking-wide">${data.title || 'Our Story Timeline'}</h2>
                    <div class="max-w-2xl mx-auto">
                        ${events.map((event, idx) => `
                            <div class="flex items-center gap-6 py-4 border-b ${hoverEffectClasses[hoverEffect]}" style="border-color: ${accentColor}22">
                                <div class="flex-shrink-0 text-sm ${fontWeightClasses[fontWeight]} ${borderRadiusClasses[borderRadius]} px-4 py-2" style="background: ${accentColor}11; color: ${accentColor}">
                                    ${event.year}
                                </div>
                                <div class="flex-1">
                                    <p class="${fontWeightClasses[fontWeight]} text-gray-700">${event.description}</p>
                                </div>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500">Add timeline events</p>'}
                    </div>
                </div>
            `;
        }

        // Modern Layout
        if (layout === 'modern') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Story Timeline'}</h2>
                    <div class="max-w-3xl mx-auto space-y-4">
                        ${events.map(event => `
                            <div class="flex items-center gap-4 p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}" style="background: ${cardBg}">
                                <div class="flex-shrink-0 ${badgeStyleClasses[badgeStyle]} ${shadowClasses[shadow]} text-white text-sm ${fontWeightClasses[fontWeight]}" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                    ${event.year}
                                </div>
                                <div class="h-12 w-px" style="background: ${accentColor}33"></div>
                                <div class="flex-1">
                                    <p class="text-gray-700 ${fontWeightClasses[fontWeight]}">${event.description}</p>
                                </div>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500">Add timeline events</p>'}
                    </div>
                </div>
            `;
        }

        // Vintage Layout
        if (layout === 'vintage') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <h2 class="text-2xl font-serif ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Story Timeline'}</h2>
                    <div class="max-w-2xl mx-auto relative">
                        <div class="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2" style="background: linear-gradient(180deg, ${accentColor}, ${secondaryColor})"></div>
                        <div class="space-y-12">
                            ${events.map((event, idx) => {
                                const isLeft = idx % 2 === 0;
                                return `
                                    <div class="flex items-center gap-8 ${isLeft ? '' : 'flex-row-reverse'}">
                                        <div class="flex-1 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}">
                                            <div class="inline-block p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}" style="background: ${cardBg}; border: 2px solid ${accentColor}">
                                                <div class="text-xs uppercase tracking-wider mb-2 font-serif" style="color: ${accentColor}">${event.year}</div>
                                                <p class="text-gray-700 font-serif ${fontWeightClasses[fontWeight]}">${event.description}</p>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0 w-4 h-4 rounded-full z-10 ${shadowClasses[shadow]}" style="background: ${accentColor}; border: 3px solid ${bg}"></div>
                                        <div class="flex-1"></div>
                                    </div>
                                `;
                            }).join('') || '<p class="text-center text-gray-500">Add timeline events</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default - Vertical
        return `
            <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Our Story Timeline'}</h2>
                <div class="max-w-2xl mx-auto">
                    ${events.map(event => `
                        <div class="flex gap-4 mb-6">
                            <div class="flex-shrink-0 ${badgeStyleClasses[badgeStyle]} ${shadowClasses[shadow]} text-white text-sm ${fontWeightClasses[fontWeight]}" style="background: ${accentColor}">
                                ${event.year}
                            </div>
                            <div class="flex-1">
                                <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                                    <p class="text-gray-700 ${fontWeightClasses[fontWeight]}">${event.description}</p>
                                </div>
                            </div>
                        </div>
                    `).join('') || '<p class="text-center text-gray-500">Add timeline events</p>'}
                </div>
            </div>
        `;
    }
};
