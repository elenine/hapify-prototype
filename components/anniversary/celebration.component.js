// Celebration Details Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebration = {
    name: '🎉 Celebration Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Celebration Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="The Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="Full venue address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Cards - Individual Boxes</option>
                    <option value="list">List - Compact View</option>
                    <option value="timeline">Timeline - Vertical Flow</option>
                    <option value="grid">Grid - 2 Column Layout</option>
                    <option value="elegant">Elegant - Minimalist Style</option>
                    <option value="modern">Modern - Clean Design</option>
                    <option value="colorful">Colorful - Vibrant Style</option>
                    <option value="classic">Classic - Traditional Look</option>
                    <option value="infoboard">Info Board - Bulletin Style</option>
                    <option value="accordion">Accordion - Expandable View</option>
                    <option value="metro">Metro - Tile Layout</option>
                    <option value="polaroid-cards">Polaroid Cards - Photo Style</option>
                    <option value="neon-signs">Neon Signs - Glowing Display</option>
                    <option value="postcard">Postcard - Vintage Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="sharp">Sharp</option>
                    <option value="bordered">Bordered</option>
                    <option value="shadow">Shadow</option>
                    <option value="gradient">Gradient</option>
                    <option value="glass">Glass Effect</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal">Normal</option>
                    <option value="medium" selected>Medium</option>
                    <option value="semibold">Semi Bold</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#fecaca" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
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
                    <option value="full">Full Rounded</option>
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
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'cards';
        const cardStyle = style.cardStyle || 'rounded';
        const fontWeight = style.fontWeight || 'medium';
        const accentColor = style.accentColor || '#dc2626';
        const bg = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';
        const secondaryColor = style.secondaryColor || '#fecaca';
        const iconSize = style.iconSize || 'medium';
        const shadow = style.shadow || 'medium';
        const borderRadius = style.borderRadius || 'medium';
        const spacing = style.spacing || 'normal';

        const cardClasses = {
            rounded: 'rounded-lg',
            sharp: 'rounded-none',
            bordered: 'rounded-lg border-2',
            shadow: 'rounded-lg shadow-lg',
            gradient: 'rounded-lg border-4',
            glass: 'rounded-lg backdrop-blur-sm bg-opacity-90'
        };

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        };

        const iconSizes = {
            small: 'text-xl',
            medium: 'text-2xl',
            large: 'text-4xl',
            xlarge: 'text-5xl'
        };

        const shadowClasses = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg',
            xlarge: 'shadow-2xl'
        };

        const borderRadiusClasses = {
            none: 'rounded-none',
            small: 'rounded-sm',
            medium: 'rounded-lg',
            large: 'rounded-2xl',
            full: 'rounded-full'
        };

        const spacingClasses = {
            compact: 'space-y-2',
            normal: 'space-y-4',
            relaxed: 'space-y-6',
            loose: 'space-y-8'
        };

        const dateStr = data.date ? new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        // Cards Layout
        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl font-bold text-center mb-8">Celebration Details</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${dateStr ? `
                        <div class="flex items-start gap-4 p-4 ${cardClasses[cardStyle]}" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="${iconSizes[iconSize]}">📅</div>
                            <div>
                                <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Date</div>
                                <div class="font-medium">${dateStr}</div>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="flex items-start gap-4 p-4 ${cardClasses[cardStyle]}" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="${iconSizes[iconSize]}">🕐</div>
                            <div>
                                <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Time</div>
                                <div class="font-medium">${data.time}</div>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="flex items-start gap-4 p-4 ${cardClasses[cardStyle]}" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="${iconSizes[iconSize]}">🏛️</div>
                            <div>
                                <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Venue</div>
                                <div class="font-medium">${data.venue}</div>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="flex items-start gap-4 p-4 ${cardClasses[cardStyle]}" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="${iconSizes[iconSize]}">📍</div>
                            <div>
                                <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Address</div>
                                <div class="text-sm">${data.address}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // List Layout
        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl font-bold text-center mb-8">Celebration Details</h2>
                    <div class="max-w-lg mx-auto ${cardClasses[cardStyle]} overflow-hidden" style="background: ${cardBg}; border-color: ${accentColor}">
                        ${dateStr ? `
                        <div class="flex items-center gap-4 p-4 border-b" style="border-color: ${bg}">
                            <div class="${iconSizes[iconSize]}" style="color: ${accentColor}">📅</div>
                            <div class="flex-1">
                                <div class="text-xs text-gray-500">Date</div>
                                <div class="font-medium">${dateStr}</div>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="flex items-center gap-4 p-4 border-b" style="border-color: ${bg}">
                            <div class="${iconSizes[iconSize]}" style="color: ${accentColor}">🕐</div>
                            <div class="flex-1">
                                <div class="text-xs text-gray-500">Time</div>
                                <div class="font-medium">${data.time}</div>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="flex items-center gap-4 p-4 border-b" style="border-color: ${bg}">
                            <div class="${iconSizes[iconSize]}" style="color: ${accentColor}">🏛️</div>
                            <div class="flex-1">
                                <div class="text-xs text-gray-500">Venue</div>
                                <div class="font-medium">${data.venue}</div>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="flex items-center gap-4 p-4" >
                            <div class="${iconSizes[iconSize]}" style="color: ${accentColor}">📍</div>
                            <div class="flex-1">
                                <div class="text-xs text-gray-500">Address</div>
                                <div class="text-sm">${data.address}</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Timeline Layout
        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl font-bold text-center mb-8">Celebration Details</h2>
                    <div class="max-w-md mx-auto relative">
                        <div class="absolute left-6 top-0 bottom-0 w-1" style="background: ${accentColor}"></div>
                        <div class="space-y-6 relative">
                            ${dateStr ? `
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 ${cardClasses[cardStyle]} flex items-center justify-center relative z-10" style="background: ${cardBg}; border: 2px solid ${accentColor}">
                                    <div class="${iconSizes[iconSize]}">📅</div>
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Date</div>
                                    <div class="font-medium">${dateStr}</div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 ${cardClasses[cardStyle]} flex items-center justify-center relative z-10" style="background: ${cardBg}; border: 2px solid ${accentColor}">
                                    <div class="${iconSizes[iconSize]}">🕐</div>
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Time</div>
                                    <div class="font-medium">${data.time}</div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 ${cardClasses[cardStyle]} flex items-center justify-center relative z-10" style="background: ${cardBg}; border: 2px solid ${accentColor}">
                                    <div class="${iconSizes[iconSize]}">🏛️</div>
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Venue</div>
                                    <div class="font-medium">${data.venue}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 ${cardClasses[cardStyle]} flex items-center justify-center relative z-10" style="background: ${cardBg}; border: 2px solid ${accentColor}">
                                    <div class="${iconSizes[iconSize]}">📍</div>
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor}">Address</div>
                                    <div class="text-sm">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Grid Layout
        if (layout === 'grid') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl font-bold text-center mb-8">Celebration Details</h2>
                    <div class="max-w-2xl mx-auto grid grid-cols-2 gap-4">
                        ${dateStr ? `
                        <div class="p-6 ${cardClasses[cardStyle]} text-center" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="${iconSizes[iconSize]} mb-2" style="color: ${accentColor}">📅</div>
                            <div class="text-xs uppercase tracking-wider mb-2 text-gray-500">Date</div>
                            <div class="font-medium text-sm">${dateStr}</div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="p-6 ${cardClasses[cardStyle]} text-center" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="${iconSizes[iconSize]} mb-2" style="color: ${accentColor}">🕐</div>
                            <div class="text-xs uppercase tracking-wider mb-2 text-gray-500">Time</div>
                            <div class="font-medium text-sm">${data.time}</div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="p-6 ${cardClasses[cardStyle]} text-center col-span-2" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="${iconSizes[iconSize]} mb-2" style="color: ${accentColor}">🏛️</div>
                            <div class="text-xs uppercase tracking-wider mb-2 text-gray-500">Venue</div>
                            <div class="font-medium">${data.venue}</div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="p-6 ${cardClasses[cardStyle]} text-center col-span-2" style="background: ${cardBg}; border-color: ${accentColor}">
                            <div class="${iconSizes[iconSize]} mb-2" style="color: ${accentColor}">📍</div>
                            <div class="text-xs uppercase tracking-wider mb-2 text-gray-500">Address</div>
                            <div class="text-sm">${data.address}</div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <h2 class="text-3xl ${fontWeightClasses[fontWeight]} text-center mb-12 tracking-wide">Celebration Details</h2>
                        <div class="${spacingClasses[spacing]}">
                            ${dateStr ? `
                            <div class="text-center pb-6 border-b ${shadowClasses[shadow]}" style="border-color: ${accentColor}33">
                                <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor}">📅</div>
                                <div class="text-xs uppercase tracking-widest text-gray-400 mb-2">Date</div>
                                <div class="text-lg ${fontWeightClasses[fontWeight]}">${dateStr}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="text-center pb-6 border-b ${shadowClasses[shadow]}" style="border-color: ${accentColor}33">
                                <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor}">🕐</div>
                                <div class="text-xs uppercase tracking-widest text-gray-400 mb-2">Time</div>
                                <div class="text-lg ${fontWeightClasses[fontWeight]}">${data.time}</div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="text-center pb-6 border-b ${shadowClasses[shadow]}" style="border-color: ${accentColor}33">
                                <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor}">🏛️</div>
                                <div class="text-xs uppercase tracking-widest text-gray-400 mb-2">Venue</div>
                                <div class="text-lg ${fontWeightClasses[fontWeight]}">${data.venue}</div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="text-center pb-6">
                                <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor}">📍</div>
                                <div class="text-xs uppercase tracking-widest text-gray-400 mb-2">Address</div>
                                <div class="${fontWeightClasses[fontWeight]}">${data.address}</div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg} 0%, ${secondaryColor} 100%)">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-3xl ${fontWeightClasses[fontWeight]} text-center mb-10" style="color: ${accentColor}">Event Details</h2>
                        <div class="${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} overflow-hidden" style="background: ${cardBg}">
                            <div class="grid md:grid-cols-2 gap-6 p-8">
                                ${dateStr ? `
                                <div class="flex items-center gap-4 p-4 ${borderRadiusClasses[borderRadius]}" style="background: linear-gradient(135deg, ${secondaryColor} 0%, ${accentColor}22 100%)">
                                    <div class="${iconSizes[iconSize]} flex-shrink-0" style="color: ${accentColor}">📅</div>
                                    <div>
                                        <div class="text-xs uppercase tracking-wider mb-1 text-gray-500">Date</div>
                                        <div class="${fontWeightClasses[fontWeight]}">${dateStr}</div>
                                    </div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="flex items-center gap-4 p-4 ${borderRadiusClasses[borderRadius]}" style="background: linear-gradient(135deg, ${secondaryColor} 0%, ${accentColor}22 100%)">
                                    <div class="${iconSizes[iconSize]} flex-shrink-0" style="color: ${accentColor}">🕐</div>
                                    <div>
                                        <div class="text-xs uppercase tracking-wider mb-1 text-gray-500">Time</div>
                                        <div class="${fontWeightClasses[fontWeight]}">${data.time}</div>
                                    </div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="flex items-center gap-4 p-4 md:col-span-2 ${borderRadiusClasses[borderRadius]}" style="background: linear-gradient(135deg, ${secondaryColor} 0%, ${accentColor}22 100%)">
                                    <div class="${iconSizes[iconSize]} flex-shrink-0" style="color: ${accentColor}">🏛️</div>
                                    <div>
                                        <div class="text-xs uppercase tracking-wider mb-1 text-gray-500">Venue</div>
                                        <div class="${fontWeightClasses[fontWeight]}">${data.venue}</div>
                                    </div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="flex items-center gap-4 p-4 md:col-span-2 ${borderRadiusClasses[borderRadius]}" style="background: linear-gradient(135deg, ${secondaryColor} 0%, ${accentColor}22 100%)">
                                    <div class="${iconSizes[iconSize]} flex-shrink-0" style="color: ${accentColor}">📍</div>
                                    <div>
                                        <div class="text-xs uppercase tracking-wider mb-1 text-gray-500">Address</div>
                                        <div class="text-sm ${fontWeightClasses[fontWeight]}">${data.address}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Colorful Layout
        if (layout === 'colorful') {
            const colors = [accentColor, secondaryColor, `${accentColor}cc`, `${secondaryColor}dd`];
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-3xl ${fontWeightClasses[fontWeight]} text-center mb-10">🎨 Celebration Details 🎨</h2>
                    <div class="max-w-lg mx-auto ${spacingClasses[spacing]}">
                        ${dateStr ? `
                        <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} transform hover:scale-105 transition-transform" style="background: linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%);">
                            <div class="flex items-center gap-4">
                                <div class="${iconSizes[iconSize]} text-white">📅</div>
                                <div class="text-white">
                                    <div class="text-xs uppercase tracking-wider mb-1 opacity-90">Date</div>
                                    <div class="${fontWeightClasses[fontWeight]} text-lg">${dateStr}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} transform hover:scale-105 transition-transform" style="background: linear-gradient(135deg, ${colors[2]} 0%, ${colors[3]} 100%);">
                            <div class="flex items-center gap-4">
                                <div class="${iconSizes[iconSize]} text-white">🕐</div>
                                <div class="text-white">
                                    <div class="text-xs uppercase tracking-wider mb-1 opacity-90">Time</div>
                                    <div class="${fontWeightClasses[fontWeight]} text-lg">${data.time}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} transform hover:scale-105 transition-transform" style="background: linear-gradient(135deg, ${colors[1]} 0%, ${colors[2]} 100%);">
                            <div class="flex items-center gap-4">
                                <div class="${iconSizes[iconSize]} text-white">🏛️</div>
                                <div class="text-white">
                                    <div class="text-xs uppercase tracking-wider mb-1 opacity-90">Venue</div>
                                    <div class="${fontWeightClasses[fontWeight]} text-lg">${data.venue}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} transform hover:scale-105 transition-transform" style="background: linear-gradient(135deg, ${colors[3]} 0%, ${colors[0]} 100%);">
                            <div class="flex items-center gap-4">
                                <div class="${iconSizes[iconSize]} text-white">📍</div>
                                <div class="text-white">
                                    <div class="text-xs uppercase tracking-wider mb-1 opacity-90">Address</div>
                                    <div class="${fontWeightClasses[fontWeight]}">${data.address}</div>
                                </div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Classic Layout
        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto border-4 ${borderRadiusClasses[borderRadius]} p-8 ${shadowClasses[shadow]}" style="border-color: ${accentColor}; background: ${cardBg}">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8 pb-4 border-b-2" style="border-color: ${accentColor}; color: ${accentColor}">Celebration Details</h2>
                        <div class="${spacingClasses[spacing]}">
                            ${dateStr ? `
                            <div class="flex items-start gap-4">
                                <div class="${iconSizes[iconSize]} flex-shrink-0" style="color: ${accentColor}">📅</div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-wider mb-1 ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">Date</div>
                                    <div class="text-gray-800">${dateStr}</div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="flex items-start gap-4">
                                <div class="${iconSizes[iconSize]} flex-shrink-0" style="color: ${accentColor}">🕐</div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-wider mb-1 ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">Time</div>
                                    <div class="text-gray-800">${data.time}</div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="flex items-start gap-4">
                                <div class="${iconSizes[iconSize]} flex-shrink-0" style="color: ${accentColor}">🏛️</div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-wider mb-1 ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">Venue</div>
                                    <div class="text-gray-800">${data.venue}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="flex items-start gap-4">
                                <div class="${iconSizes[iconSize]} flex-shrink-0" style="color: ${accentColor}">📍</div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-wider mb-1 ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">Address</div>
                                    <div class="text-gray-800 text-sm">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Info Board Layout
        if (layout === 'infoboard') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-3xl ${fontWeightClasses[fontWeight]} text-center mb-10">📌 Event Information Board</h2>
                    <div class="max-w-2xl mx-auto p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${cardBg} 0%, ${secondaryColor}22 100%); border: 8px solid ${accentColor};">
                        <div class="grid md:grid-cols-2 gap-6">
                            ${dateStr ? `
                            <div class="p-4 bg-yellow-100 ${borderRadiusClasses[borderRadius]} transform rotate-1 ${shadowClasses[shadow]}">
                                <div class="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-6 text-2xl" style="color: ${accentColor};">📍</div>
                                <div class="${iconSizes[iconSize]} mb-2" style="color: ${accentColor};">📅</div>
                                <div class="text-xs uppercase tracking-wider ${fontWeightClasses[fontWeight]} mb-1">Date</div>
                                <div class="text-gray-800">${dateStr}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="p-4 bg-pink-100 ${borderRadiusClasses[borderRadius]} transform -rotate-1 ${shadowClasses[shadow]}">
                                <div class="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-6 text-2xl" style="color: ${accentColor};">📍</div>
                                <div class="${iconSizes[iconSize]} mb-2" style="color: ${accentColor};">🕐</div>
                                <div class="text-xs uppercase tracking-wider ${fontWeightClasses[fontWeight]} mb-1">Time</div>
                                <div class="text-gray-800">${data.time}</div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="p-4 bg-blue-100 ${borderRadiusClasses[borderRadius]} transform rotate-2 ${shadowClasses[shadow]}">
                                <div class="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-6 text-2xl" style="color: ${accentColor};">📍</div>
                                <div class="${iconSizes[iconSize]} mb-2" style="color: ${accentColor};">🏛️</div>
                                <div class="text-xs uppercase tracking-wider ${fontWeightClasses[fontWeight]} mb-1">Venue</div>
                                <div class="text-gray-800">${data.venue}</div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="p-4 bg-green-100 ${borderRadiusClasses[borderRadius]} transform -rotate-2 ${shadowClasses[shadow]}">
                                <div class="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-6 text-2xl" style="color: ${accentColor};">📍</div>
                                <div class="${iconSizes[iconSize]} mb-2" style="color: ${accentColor};">📍</div>
                                <div class="text-xs uppercase tracking-wider ${fontWeightClasses[fontWeight]} mb-1">Address</div>
                                <div class="text-gray-800 text-sm">${data.address}</div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Accordion Layout
        if (layout === 'accordion') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">Event Details</h2>
                    <div class="max-w-lg mx-auto ${spacingClasses[spacing]}">
                        ${dateStr ? `
                        <div class="${borderRadiusClasses[borderRadius]} overflow-hidden ${shadowClasses[shadow]} mb-2" style="background: ${cardBg}; border-left: 4px solid ${accentColor};">
                            <div class="p-4 flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${accentColor} 0%, ${secondaryColor} 100%);">
                                    <div class="text-white text-xl">📅</div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor};">Date</div>
                                    <div class="${fontWeightClasses[fontWeight]}">${dateStr}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="${borderRadiusClasses[borderRadius]} overflow-hidden ${shadowClasses[shadow]} mb-2" style="background: ${cardBg}; border-left: 4px solid ${accentColor};">
                            <div class="p-4 flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${accentColor} 0%, ${secondaryColor} 100%);">
                                    <div class="text-white text-xl">🕐</div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor};">Time</div>
                                    <div class="${fontWeightClasses[fontWeight]}">${data.time}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="${borderRadiusClasses[borderRadius]} overflow-hidden ${shadowClasses[shadow]} mb-2" style="background: ${cardBg}; border-left: 4px solid ${accentColor};">
                            <div class="p-4 flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${accentColor} 0%, ${secondaryColor} 100%);">
                                    <div class="text-white text-xl">🏛️</div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor};">Venue</div>
                                    <div class="${fontWeightClasses[fontWeight]}">${data.venue}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="${borderRadiusClasses[borderRadius]} overflow-hidden ${shadowClasses[shadow]}" style="background: ${cardBg}; border-left: 4px solid ${accentColor};">
                            <div class="p-4 flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center ${shadowClasses[shadow]}" style="background: linear-gradient(135deg, ${accentColor} 0%, ${secondaryColor} 100%);">
                                    <div class="text-white text-xl">📍</div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${accentColor};">Address</div>
                                    <div class="text-sm ${fontWeightClasses[fontWeight]}">${data.address}</div>
                                </div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Metro Layout
        if (layout === 'metro') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-3xl ${fontWeightClasses[fontWeight]} text-center mb-10">Celebration Details</h2>
                    <div class="max-w-3xl mx-auto grid grid-cols-2 gap-3">
                        ${dateStr ? `
                        <div class="col-span-2 md:col-span-1 p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} text-white" style="background: linear-gradient(135deg, ${accentColor} 0%, ${secondaryColor} 100%);">
                            <div class="${iconSizes[iconSize]} mb-3">📅</div>
                            <div class="text-xs uppercase tracking-wider mb-2 opacity-90">Date</div>
                            <div class="text-xl ${fontWeightClasses[fontWeight]}">${dateStr}</div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}; border: 2px solid ${accentColor};">
                            <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor};">🕐</div>
                            <div class="text-xs uppercase tracking-wider mb-2 text-gray-500">Time</div>
                            <div class="text-xl ${fontWeightClasses[fontWeight]}">${data.time}</div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="col-span-2 p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${secondaryColor}; color: white;">
                            <div class="${iconSizes[iconSize]} mb-3">🏛️</div>
                            <div class="text-xs uppercase tracking-wider mb-2 opacity-90">Venue</div>
                            <div class="text-xl ${fontWeightClasses[fontWeight]}">${data.venue}</div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="col-span-2 p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}; border: 2px solid ${secondaryColor};">
                            <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor};">📍</div>
                            <div class="text-xs uppercase tracking-wider mb-2 text-gray-500">Address</div>
                            <div class="${fontWeightClasses[fontWeight]}">${data.address}</div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Polaroid Cards Layout
        if (layout === 'polaroid-cards') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-10">Celebration Snapshots</h2>
                    <div class="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
                        ${dateStr ? `
                        <div class="bg-white p-4 pb-12 ${shadowClasses[shadow]} transform rotate-2 hover:rotate-0 transition-transform">
                            <div class="bg-gradient-to-br from-red-100 to-red-200 p-8 ${borderRadiusClasses[borderRadius]} text-center">
                                <div class="${iconSizes[iconSize]} mb-4">📅</div>
                                <div class="${fontWeightClasses[fontWeight]} text-gray-800">${dateStr}</div>
                            </div>
                            <div class="text-center mt-4">
                                <div class="text-xs uppercase tracking-wider text-gray-500">Date</div>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="bg-white p-4 pb-12 ${shadowClasses[shadow]} transform -rotate-2 hover:rotate-0 transition-transform">
                            <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-8 ${borderRadiusClasses[borderRadius]} text-center">
                                <div class="${iconSizes[iconSize]} mb-4">🕐</div>
                                <div class="${fontWeightClasses[fontWeight]} text-gray-800">${data.time}</div>
                            </div>
                            <div class="text-center mt-4">
                                <div class="text-xs uppercase tracking-wider text-gray-500">Time</div>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="bg-white p-4 pb-12 ${shadowClasses[shadow]} transform rotate-1 hover:rotate-0 transition-transform">
                            <div class="bg-gradient-to-br from-green-100 to-green-200 p-8 ${borderRadiusClasses[borderRadius]} text-center">
                                <div class="${iconSizes[iconSize]} mb-4">🏛️</div>
                                <div class="${fontWeightClasses[fontWeight]} text-gray-800">${data.venue}</div>
                            </div>
                            <div class="text-center mt-4">
                                <div class="text-xs uppercase tracking-wider text-gray-500">Venue</div>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="bg-white p-4 pb-12 ${shadowClasses[shadow]} transform -rotate-1 hover:rotate-0 transition-transform">
                            <div class="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 ${borderRadiusClasses[borderRadius]} text-center">
                                <div class="${iconSizes[iconSize]} mb-4">📍</div>
                                <div class="text-sm ${fontWeightClasses[fontWeight]} text-gray-800">${data.address}</div>
                            </div>
                            <div class="text-center mt-4">
                                <div class="text-xs uppercase tracking-wider text-gray-500">Address</div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Neon Signs Layout
        if (layout === 'neon-signs') {
            return `
                <div class="py-12 px-6" style="background: #0a0a0a;">
                    <h2 class="text-3xl ${fontWeightClasses[fontWeight]} text-center mb-10 text-white" style="text-shadow: 0 0 20px ${accentColor};">Event Details</h2>
                    <div class="max-w-md mx-auto ${spacingClasses[spacing]}">
                        ${dateStr ? `
                        <div class="p-6 ${borderRadiusClasses[borderRadius]}" style="background: #1a1a1a; border: 2px solid ${accentColor}; box-shadow: 0 0 20px ${accentColor}44, inset 0 0 20px ${accentColor}11;">
                            <div class="flex items-center gap-4">
                                <div class="${iconSizes[iconSize]}" style="color: ${accentColor}; filter: drop-shadow(0 0 10px ${accentColor});">📅</div>
                                <div>
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${secondaryColor}; text-shadow: 0 0 10px ${secondaryColor};">Date</div>
                                    <div class="text-white ${fontWeightClasses[fontWeight]}" style="text-shadow: 0 0 10px ${accentColor}88;">${dateStr}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.time ? `
                        <div class="p-6 ${borderRadiusClasses[borderRadius]}" style="background: #1a1a1a; border: 2px solid ${accentColor}; box-shadow: 0 0 20px ${accentColor}44, inset 0 0 20px ${accentColor}11;">
                            <div class="flex items-center gap-4">
                                <div class="${iconSizes[iconSize]}" style="color: ${accentColor}; filter: drop-shadow(0 0 10px ${accentColor});">🕐</div>
                                <div>
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${secondaryColor}; text-shadow: 0 0 10px ${secondaryColor};">Time</div>
                                    <div class="text-white ${fontWeightClasses[fontWeight]}" style="text-shadow: 0 0 10px ${accentColor}88;">${data.time}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.venue ? `
                        <div class="p-6 ${borderRadiusClasses[borderRadius]}" style="background: #1a1a1a; border: 2px solid ${accentColor}; box-shadow: 0 0 20px ${accentColor}44, inset 0 0 20px ${accentColor}11;">
                            <div class="flex items-center gap-4">
                                <div class="${iconSizes[iconSize]}" style="color: ${accentColor}; filter: drop-shadow(0 0 10px ${accentColor});">🏛️</div>
                                <div>
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${secondaryColor}; text-shadow: 0 0 10px ${secondaryColor};">Venue</div>
                                    <div class="text-white ${fontWeightClasses[fontWeight]}" style="text-shadow: 0 0 10px ${accentColor}88;">${data.venue}</div>
                                </div>
                            </div>
                        </div>` : ''}
                        ${data.address ? `
                        <div class="p-6 ${borderRadiusClasses[borderRadius]}" style="background: #1a1a1a; border: 2px solid ${accentColor}; box-shadow: 0 0 20px ${accentColor}44, inset 0 0 20px ${accentColor}11;">
                            <div class="flex items-center gap-4">
                                <div class="${iconSizes[iconSize]}" style="color: ${accentColor}; filter: drop-shadow(0 0 10px ${accentColor});">📍</div>
                                <div>
                                    <div class="text-xs uppercase tracking-wider mb-1" style="color: ${secondaryColor}; text-shadow: 0 0 10px ${secondaryColor};">Address</div>
                                    <div class="text-white text-sm ${fontWeightClasses[fontWeight]}" style="text-shadow: 0 0 10px ${accentColor}88;">${data.address}</div>
                                </div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            `;
        }

        // Postcard Layout
        if (layout === 'postcard') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-10">Invitation Postcard</h2>
                    <div class="max-w-2xl mx-auto">
                        <div class="relative ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} overflow-hidden" style="background: linear-gradient(135deg, ${cardBg} 0%, ${secondaryColor}22 100%); border: 8px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                            <div class="absolute top-4 right-4 w-20 h-16 border-4 ${borderRadiusClasses[borderRadius]}" style="border-color: ${accentColor};">
                                <div class="text-center pt-2">
                                    <div class="text-xs" style="color: ${accentColor};">STAMP</div>
                                </div>
                            </div>
                            <div class="p-8">
                                <div class="text-xs uppercase tracking-widest mb-6" style="color: ${accentColor};">~ Celebration Details ~</div>
                                <div class="${spacingClasses[spacing]}">
                                    ${dateStr ? `
                                    <div class="flex items-start gap-4">
                                        <div class="${iconSizes[iconSize]}" style="color: ${accentColor};">📅</div>
                                        <div>
                                            <div class="text-xs uppercase tracking-wider mb-1 text-gray-500">Date</div>
                                            <div class="${fontWeightClasses[fontWeight]} italic">${dateStr}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.time ? `
                                    <div class="flex items-start gap-4">
                                        <div class="${iconSizes[iconSize]}" style="color: ${accentColor};">🕐</div>
                                        <div>
                                            <div class="text-xs uppercase tracking-wider mb-1 text-gray-500">Time</div>
                                            <div class="${fontWeightClasses[fontWeight]} italic">${data.time}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.venue ? `
                                    <div class="flex items-start gap-4">
                                        <div class="${iconSizes[iconSize]}" style="color: ${accentColor};">🏛️</div>
                                        <div>
                                            <div class="text-xs uppercase tracking-wider mb-1 text-gray-500">Venue</div>
                                            <div class="${fontWeightClasses[fontWeight]} italic">${data.venue}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div class="flex items-start gap-4">
                                        <div class="${iconSizes[iconSize]}" style="color: ${accentColor};">📍</div>
                                        <div>
                                            <div class="text-xs uppercase tracking-wider mb-1 text-gray-500">Address</div>
                                            <div class="text-sm italic">${data.address}</div>
                                        </div>
                                    </div>` : ''}
                                </div>
                                <div class="mt-8 pt-6 border-t-2 border-dashed" style="border-color: ${accentColor}33">
                                    <div class="text-center text-xs text-gray-500">Looking forward to celebrating with you!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default - return cards layout
        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">Celebration Details</h2>
                <div class="max-w-md mx-auto ${spacingClasses[spacing]} ${shadowClasses[shadow]}">
                    ${dateStr ? `
                    <div class="flex items-start gap-4 p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${cardBg}">
                        <div class="${iconSizes[iconSize]}">📅</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Date</div>
                            <div class="${fontWeightClasses[fontWeight]}">${dateStr}</div>
                        </div>
                    </div>` : ''}
                    ${data.time ? `
                    <div class="flex items-start gap-4 p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${cardBg}">
                        <div class="${iconSizes[iconSize]}">🕐</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Time</div>
                            <div class="${fontWeightClasses[fontWeight]}">${data.time}</div>
                        </div>
                    </div>` : ''}
                    ${data.venue ? `
                    <div class="flex items-start gap-4 p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${cardBg}">
                        <div class="${iconSizes[iconSize]}">🏛️</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Venue</div>
                            <div class="${fontWeightClasses[fontWeight]}">${data.venue}</div>
                        </div>
                    </div>` : ''}
                    ${data.address ? `
                    <div class="flex items-start gap-4 p-4 ${borderRadiusClasses[borderRadius]}" style="background: ${cardBg}">
                        <div class="${iconSizes[iconSize]}">📍</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Address</div>
                            <div class="text-sm">${data.address}</div>
                        </div>
                    </div>` : ''}
                </div>
            </div>
        `;
    }
};
