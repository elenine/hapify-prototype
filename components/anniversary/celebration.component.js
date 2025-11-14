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
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="sharp">Sharp</option>
                    <option value="bordered">Bordered</option>
                    <option value="shadow">Shadow</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'cards';
        const cardStyle = style.cardStyle || 'rounded';
        const accentColor = style.accentColor || '#dc2626';
        const bg = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';
        const iconSize = style.iconSize || 'medium';

        const cardClasses = {
            rounded: 'rounded-lg',
            sharp: 'rounded-none',
            bordered: 'rounded-lg border-2',
            shadow: 'rounded-lg shadow-lg'
        };

        const iconSizes = {
            small: 'text-xl',
            medium: 'text-2xl',
            large: 'text-4xl'
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
                        <h2 class="text-3xl font-light text-center mb-12 tracking-wide">Celebration Details</h2>
                        <div class="space-y-8">
                            ${dateStr ? `
                            <div class="text-center pb-6 border-b" style="border-color: ${accentColor}33">
                                <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor}">📅</div>
                                <div class="text-xs uppercase tracking-widest text-gray-400 mb-2">Date</div>
                                <div class="text-lg font-light">${dateStr}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="text-center pb-6 border-b" style="border-color: ${accentColor}33">
                                <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor}">🕐</div>
                                <div class="text-xs uppercase tracking-widest text-gray-400 mb-2">Time</div>
                                <div class="text-lg font-light">${data.time}</div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="text-center pb-6 border-b" style="border-color: ${accentColor}33">
                                <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor}">🏛️</div>
                                <div class="text-xs uppercase tracking-widest text-gray-400 mb-2">Venue</div>
                                <div class="text-lg font-light">${data.venue}</div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="text-center pb-6">
                                <div class="${iconSizes[iconSize]} mb-3" style="color: ${accentColor}">📍</div>
                                <div class="text-xs uppercase tracking-widest text-gray-400 mb-2">Address</div>
                                <div class="font-light">${data.address}</div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default - return cards layout
        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <h2 class="text-2xl font-bold text-center mb-8">Celebration Details</h2>
                <div class="max-w-md mx-auto space-y-4">
                    ${dateStr ? `
                    <div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${cardBg}">
                        <div class="text-2xl">📅</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Date</div>
                            <div class="font-medium">${dateStr}</div>
                        </div>
                    </div>` : ''}
                    ${data.time ? `
                    <div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${cardBg}">
                        <div class="text-2xl">🕐</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Time</div>
                            <div class="font-medium">${data.time}</div>
                        </div>
                    </div>` : ''}
                    ${data.venue ? `
                    <div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${cardBg}">
                        <div class="text-2xl">🏛️</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Venue</div>
                            <div class="font-medium">${data.venue}</div>
                        </div>
                    </div>` : ''}
                    ${data.address ? `
                    <div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${cardBg}">
                        <div class="text-2xl">📍</div>
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
