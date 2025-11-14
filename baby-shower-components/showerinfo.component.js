// Shower Info Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.showerinfo = {
    name: '🎉 Shower Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shower Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shower Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="Home, Restaurant, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="Full address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="cards">Cards - Info Boxes</option>
                    <option value="list">List - Vertical Items</option>
                    <option value="compact">Compact - Single Card</option>
                    <option value="elegant">Elegant - Styled Boxes</option>
                    <option value="modern">Modern - Gradient Design</option>
                    <option value="timeline">Timeline - Connected Flow</option>
                    <option value="hexagon">Hexagon - Geometric Cards</option>
                    <option value="newspaper">Newspaper - Column Style</option>
                    <option value="ticket">Ticket - Event Pass Style</option>
                    <option value="calendar">Calendar - Visual Date</option>
                    <option value="stamp">Stamp - Postal Style</option>
                    <option value="minimal">Minimal - Clean Typography</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="iconStyle" oninput="updatePreview()">
                    <option value="simple">Simple Icons</option>
                    <option value="circled">Circled Icons</option>
                    <option value="squared">Squared Icons</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="iconSize" oninput="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bg = style.bg || '#fffbeb';
        const cardBg = style.cardBg || '#ffffff';
        const accent = style.accent || '#fbbf24';
        const iconStyle = style.iconStyle || 'simple';
        const iconSize = style.iconSize || 'medium';

        const iconSizes = {
            small: { wrapper: 'w-8 h-8 sm:w-10 sm:h-10', icon: 'text-lg sm:text-xl' },
            medium: { wrapper: 'w-10 h-10 sm:w-12 sm:h-12', icon: 'text-xl sm:text-2xl' },
            large: { wrapper: 'w-12 h-12 sm:w-14 sm:h-14', icon: 'text-2xl sm:text-3xl' }
        };

        const formattedDate = data.date ? new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        const getIconWrapper = (icon) => {
            const size = iconSizes[iconSize];
            if (iconStyle === 'circled') {
                return `<div class="${size.wrapper} rounded-full flex items-center justify-center ${size.icon} flex-shrink-0" style="background: ${accent}; color: white;">${icon}</div>`;
            } else if (iconStyle === 'squared') {
                return `<div class="${size.wrapper} rounded-lg flex items-center justify-center ${size.icon} flex-shrink-0" style="background: ${accent}; color: white;">${icon}</div>`;
            }
            return `<div class="${size.icon} flex-shrink-0">${icon}</div>`;
        };

        switch(layout) {
            case 'list':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <h2 class="text-2xl font-bold text-center mb-8">Shower Details</h2>
                        <div class="max-w-2xl mx-auto">
                            <div class="divide-y" style="border-color: ${accent};">
                                ${data.date ? `
                                <div class="py-4 flex items-center gap-4">
                                    ${getIconWrapper('📅')}
                                    <div class="flex-1">
                                        <div class="text-xs opacity-60 mb-1">Date</div>
                                        <div class="font-bold">${formattedDate}</div>
                                    </div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="py-4 flex items-center gap-4">
                                    ${getIconWrapper('🕐')}
                                    <div class="flex-1">
                                        <div class="text-xs opacity-60 mb-1">Time</div>
                                        <div class="font-bold">${data.time}</div>
                                    </div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="py-4 flex items-center gap-4">
                                    ${getIconWrapper('🏠')}
                                    <div class="flex-1">
                                        <div class="text-xs opacity-60 mb-1">Venue</div>
                                        <div class="font-bold">${data.venue}</div>
                                    </div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="py-4 flex items-center gap-4">
                                    ${getIconWrapper('📍')}
                                    <div class="flex-1">
                                        <div class="text-xs opacity-60 mb-1">Address</div>
                                        <div class="text-sm">${data.address}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'compact':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">Shower Details</h2>
                            <div class="p-8 rounded-2xl" style="background: ${cardBg}; border-left: 4px solid ${accent};">
                                <div class="grid gap-4">
                                    ${data.date ? `
                                    <div class="flex items-center gap-3">
                                        <span class="text-2xl">📅</span>
                                        <span class="font-semibold">${formattedDate}</span>
                                    </div>` : ''}
                                    ${data.time ? `
                                    <div class="flex items-center gap-3">
                                        <span class="text-2xl">🕐</span>
                                        <span class="font-semibold">${data.time}</span>
                                    </div>` : ''}
                                    ${data.venue ? `
                                    <div class="flex items-center gap-3">
                                        <span class="text-2xl">🏠</span>
                                        <span class="font-semibold">${data.venue}</span>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div class="flex items-center gap-3">
                                        <span class="text-2xl">📍</span>
                                        <span class="text-sm">${data.address}</span>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <h2 class="text-2xl font-bold text-center mb-8">Shower Details</h2>
                        <div class="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
                            ${data.date ? `
                            <div class="p-6 rounded-xl text-center border-2" style="background: ${cardBg}; border-color: ${accent};">
                                <div class="text-3xl mb-3">📅</div>
                                <div class="text-xs opacity-60 mb-1">Date</div>
                                <div class="font-bold">${formattedDate}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="p-6 rounded-xl text-center border-2" style="background: ${cardBg}; border-color: ${accent};">
                                <div class="text-3xl mb-3">🕐</div>
                                <div class="text-xs opacity-60 mb-1">Time</div>
                                <div class="font-bold">${data.time}</div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="p-6 rounded-xl text-center border-2" style="background: ${cardBg}; border-color: ${accent};">
                                <div class="text-3xl mb-3">🏠</div>
                                <div class="text-xs opacity-60 mb-1">Venue</div>
                                <div class="font-bold">${data.venue}</div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="p-6 rounded-xl text-center border-2 sm:col-span-2" style="background: ${cardBg}; border-color: ${accent};">
                                <div class="text-3xl mb-3">📍</div>
                                <div class="text-xs opacity-60 mb-1">Address</div>
                                <div class="text-sm">${data.address}</div>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <h2 class="text-2xl font-bold text-center mb-8">Shower Details</h2>
                        <div class="max-w-md mx-auto">
                            <div class="rounded-3xl p-8 shadow-xl" style="background: linear-gradient(135deg, ${accent} 0%, ${cardBg} 100%);">
                                <div class="space-y-4">
                                    ${data.date ? `
                                    <div class="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4">
                                        <div class="flex items-center gap-4">
                                            <div class="text-3xl">📅</div>
                                            <div>
                                                <div class="text-xs opacity-60 mb-1">Date</div>
                                                <div class="font-bold">${formattedDate}</div>
                                            </div>
                                        </div>
                                    </div>` : ''}
                                    ${data.time ? `
                                    <div class="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4">
                                        <div class="flex items-center gap-4">
                                            <div class="text-3xl">🕐</div>
                                            <div>
                                                <div class="text-xs opacity-60 mb-1">Time</div>
                                                <div class="font-bold">${data.time}</div>
                                            </div>
                                        </div>
                                    </div>` : ''}
                                    ${data.venue ? `
                                    <div class="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4">
                                        <div class="flex items-center gap-4">
                                            <div class="text-3xl">🏠</div>
                                            <div>
                                                <div class="text-xs opacity-60 mb-1">Venue</div>
                                                <div class="font-bold">${data.venue}</div>
                                            </div>
                                        </div>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div class="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4">
                                        <div class="flex items-center gap-4">
                                            <div class="text-3xl">📍</div>
                                            <div>
                                                <div class="text-xs opacity-60 mb-1">Address</div>
                                                <div class="text-sm">${data.address}</div>
                                            </div>
                                        </div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <h2 class="text-2xl font-bold text-center mb-8">Shower Details</h2>
                        <div class="max-w-md mx-auto relative">
                            <div class="absolute left-6 top-0 bottom-0 w-1" style="background: ${accent};"></div>
                            <div class="space-y-6 relative">
                                ${data.date ? `
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 shadow-lg" style="background: ${accent}; color: white;">📅</div>
                                    <div class="flex-1 pt-2">
                                        <div class="text-xs opacity-60 mb-1">Date</div>
                                        <div class="font-bold text-lg">${formattedDate}</div>
                                    </div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 shadow-lg" style="background: ${accent}; color: white;">🕐</div>
                                    <div class="flex-1 pt-2">
                                        <div class="text-xs opacity-60 mb-1">Time</div>
                                        <div class="font-bold text-lg">${data.time}</div>
                                    </div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 shadow-lg" style="background: ${accent}; color: white;">🏠</div>
                                    <div class="flex-1 pt-2">
                                        <div class="text-xs opacity-60 mb-1">Venue</div>
                                        <div class="font-bold text-lg">${data.venue}</div>
                                    </div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 shadow-lg" style="background: ${accent}; color: white;">📍</div>
                                    <div class="flex-1 pt-2">
                                        <div class="text-xs opacity-60 mb-1">Address</div>
                                        <div class="text-sm">${data.address}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'hexagon':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <h2 class="text-2xl font-bold text-center mb-8">Shower Details</h2>
                        <div class="max-w-3xl mx-auto">
                            <div class="grid sm:grid-cols-2 gap-8">
                                ${data.date ? `
                                <div class="text-center">
                                    <div class="w-32 h-32 mx-auto mb-4 flex items-center justify-center shadow-xl" style="background: ${accent}; color: white; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
                                        <div>
                                            <div class="text-3xl mb-1">📅</div>
                                            <div class="text-xs font-bold">Date</div>
                                        </div>
                                    </div>
                                    <div class="font-bold">${formattedDate}</div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="text-center">
                                    <div class="w-32 h-32 mx-auto mb-4 flex items-center justify-center shadow-xl" style="background: ${accent}; color: white; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
                                        <div>
                                            <div class="text-3xl mb-1">🕐</div>
                                            <div class="text-xs font-bold">Time</div>
                                        </div>
                                    </div>
                                    <div class="font-bold">${data.time}</div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="text-center">
                                    <div class="w-32 h-32 mx-auto mb-4 flex items-center justify-center shadow-xl" style="background: ${accent}; color: white; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
                                        <div>
                                            <div class="text-3xl mb-1">🏠</div>
                                            <div class="text-xs font-bold">Venue</div>
                                        </div>
                                    </div>
                                    <div class="font-bold">${data.venue}</div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="text-center">
                                    <div class="w-32 h-32 mx-auto mb-4 flex items-center justify-center shadow-xl" style="background: ${accent}; color: white; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
                                        <div>
                                            <div class="text-3xl mb-1">📍</div>
                                            <div class="text-xs font-bold">Address</div>
                                        </div>
                                    </div>
                                    <div class="text-sm leading-tight">${data.address}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'newspaper':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <div class="border-t-4 border-b-4 py-6 mb-6" style="border-color: ${accent};">
                                <h2 class="text-3xl font-bold text-center uppercase tracking-wider" style="font-family: 'Georgia', serif;">Shower Details</h2>
                            </div>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="space-y-6">
                                    ${data.date ? `
                                    <div class="border-l-4 pl-4" style="border-color: ${accent};">
                                        <div class="text-xs uppercase tracking-wider opacity-60 mb-2" style="font-family: 'Georgia', serif;">Date</div>
                                        <div class="font-bold text-lg">${formattedDate}</div>
                                    </div>` : ''}
                                    ${data.time ? `
                                    <div class="border-l-4 pl-4" style="border-color: ${accent};">
                                        <div class="text-xs uppercase tracking-wider opacity-60 mb-2" style="font-family: 'Georgia', serif;">Time</div>
                                        <div class="font-bold text-lg">${data.time}</div>
                                    </div>` : ''}
                                </div>
                                <div class="space-y-6">
                                    ${data.venue ? `
                                    <div class="border-l-4 pl-4" style="border-color: ${accent};">
                                        <div class="text-xs uppercase tracking-wider opacity-60 mb-2" style="font-family: 'Georgia', serif;">Venue</div>
                                        <div class="font-bold text-lg">${data.venue}</div>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div class="border-l-4 pl-4" style="border-color: ${accent};">
                                        <div class="text-xs uppercase tracking-wider opacity-60 mb-2" style="font-family: 'Georgia', serif;">Address</div>
                                        <div class="text-sm leading-relaxed">${data.address}</div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'ticket':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="relative overflow-hidden rounded-2xl shadow-2xl" style="background: ${cardBg};">
                                <div class="absolute top-0 left-0 right-0 h-2" style="background: ${accent};"></div>
                                <div class="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full" style="background: ${bg};"></div>
                                <div class="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full" style="background: ${bg};"></div>
                                <div class="p-6 sm:p-8">
                                    <div class="text-center mb-6">
                                        <div class="text-xs uppercase tracking-widest opacity-50 mb-2">Event Ticket</div>
                                        <h2 class="text-xl sm:text-2xl font-bold" style="color: ${accent};">Baby Shower</h2>
                                    </div>
                                    <div class="space-y-4 border-t border-dashed pt-6" style="border-color: ${accent}40;">
                                        ${data.date ? `
                                        <div class="flex justify-between items-center">
                                            <span class="text-xs sm:text-sm opacity-60 uppercase tracking-wider">Date</span>
                                            <span class="font-bold text-sm sm:text-base">${formattedDate}</span>
                                        </div>` : ''}
                                        ${data.time ? `
                                        <div class="flex justify-between items-center">
                                            <span class="text-xs sm:text-sm opacity-60 uppercase tracking-wider">Time</span>
                                            <span class="font-bold text-sm sm:text-base">${data.time}</span>
                                        </div>` : ''}
                                        ${data.venue ? `
                                        <div class="flex justify-between items-center">
                                            <span class="text-xs sm:text-sm opacity-60 uppercase tracking-wider">Venue</span>
                                            <span class="font-bold text-sm sm:text-base">${data.venue}</span>
                                        </div>` : ''}
                                        ${data.address ? `
                                        <div class="pt-2 border-t border-dashed" style="border-color: ${accent}40;">
                                            <div class="text-xs opacity-60 uppercase tracking-wider mb-1">Location</div>
                                            <div class="text-xs sm:text-sm">${data.address}</div>
                                        </div>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'calendar':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <h2 class="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Shower Details</h2>
                            <div class="grid md:grid-cols-2 gap-6 items-center">
                                ${data.date ? `
                                <div class="flex justify-center">
                                    <div class="w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl" style="background: ${cardBg};">
                                        <div class="py-3 text-center text-white font-bold text-sm sm:text-base" style="background: ${accent};">
                                            ${new Date(data.date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
                                        </div>
                                        <div class="py-8 sm:py-12 text-center">
                                            <div class="text-6xl sm:text-7xl font-bold mb-2" style="color: ${accent};">
                                                ${new Date(data.date).getDate()}
                                            </div>
                                            <div class="text-base sm:text-lg font-semibold opacity-60">
                                                ${new Date(data.date).toLocaleDateString('en-US', {weekday: 'long'})}
                                            </div>
                                        </div>
                                    </div>
                                </div>` : ''}
                                <div class="space-y-4">
                                    ${data.time ? `
                                    <div class="flex items-center gap-3 sm:gap-4">
                                        ${getIconWrapper('🕐')}
                                        <div>
                                            <div class="text-xs opacity-60">Time</div>
                                            <div class="font-bold text-sm sm:text-base">${data.time}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.venue ? `
                                    <div class="flex items-center gap-3 sm:gap-4">
                                        ${getIconWrapper('🏠')}
                                        <div>
                                            <div class="text-xs opacity-60">Venue</div>
                                            <div class="font-bold text-sm sm:text-base">${data.venue}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div class="flex items-center gap-3 sm:gap-4">
                                        ${getIconWrapper('📍')}
                                        <div>
                                            <div class="text-xs opacity-60">Address</div>
                                            <div class="text-xs sm:text-sm">${data.address}</div>
                                        </div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'stamp':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Shower Details</h2>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                ${data.date ? `
                                <div class="relative p-4 sm:p-6 text-center border-4 border-dashed" style="border-color: ${accent}; background: ${cardBg};">
                                    <div class="absolute -top-1 -left-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -top-1 -right-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -bottom-1 -left-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -bottom-1 -right-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="text-2xl sm:text-3xl mb-2">📅</div>
                                    <div class="text-xs uppercase opacity-60 mb-1">Date</div>
                                    <div class="font-bold text-sm sm:text-base">${formattedDate}</div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="relative p-4 sm:p-6 text-center border-4 border-dashed" style="border-color: ${accent}; background: ${cardBg};">
                                    <div class="absolute -top-1 -left-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -top-1 -right-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -bottom-1 -left-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -bottom-1 -right-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="text-2xl sm:text-3xl mb-2">🕐</div>
                                    <div class="text-xs uppercase opacity-60 mb-1">Time</div>
                                    <div class="font-bold text-sm sm:text-base">${data.time}</div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="relative p-4 sm:p-6 text-center border-4 border-dashed" style="border-color: ${accent}; background: ${cardBg};">
                                    <div class="absolute -top-1 -left-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -top-1 -right-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -bottom-1 -left-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -bottom-1 -right-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="text-2xl sm:text-3xl mb-2">🏠</div>
                                    <div class="text-xs uppercase opacity-60 mb-1">Venue</div>
                                    <div class="font-bold text-sm sm:text-base">${data.venue}</div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="relative p-4 sm:p-6 text-center border-4 border-dashed sm:col-span-2" style="border-color: ${accent}; background: ${cardBg};">
                                    <div class="absolute -top-1 -left-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -top-1 -right-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -bottom-1 -left-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="absolute -bottom-1 -right-1 w-6 h-6" style="background: ${bg};"></div>
                                    <div class="text-2xl sm:text-3xl mb-2">📍</div>
                                    <div class="text-xs uppercase opacity-60 mb-1">Address</div>
                                    <div class="text-xs sm:text-sm">${data.address}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-lg mx-auto text-center space-y-8 sm:space-y-10">
                            <h2 class="text-2xl sm:text-3xl font-light uppercase tracking-widest">Event Details</h2>
                            ${data.date ? `
                            <div>
                                <div class="text-xs uppercase tracking-widest opacity-40 mb-2">Date</div>
                                <div class="text-xl sm:text-2xl font-bold" style="color: ${accent};">${formattedDate}</div>
                                <div class="h-1 w-16 mx-auto mt-2" style="background: ${accent};"></div>
                            </div>` : ''}
                            ${data.time ? `
                            <div>
                                <div class="text-xs uppercase tracking-widest opacity-40 mb-2">Time</div>
                                <div class="text-lg sm:text-xl font-semibold">${data.time}</div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div>
                                <div class="text-xs uppercase tracking-widest opacity-40 mb-2">Venue</div>
                                <div class="text-lg sm:text-xl font-semibold">${data.venue}</div>
                            </div>` : ''}
                            ${data.address ? `
                            <div>
                                <div class="text-xs uppercase tracking-widest opacity-40 mb-2">Location</div>
                                <div class="text-sm sm:text-base opacity-75">${data.address}</div>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'cards':
            default:
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <h2 class="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Shower Details</h2>
                        <div class="max-w-md mx-auto space-y-3 sm:space-y-4">
                            ${data.date ? `
                            <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl shadow-sm" style="background: ${cardBg};">
                                ${getIconWrapper('📅')}
                                <div class="flex-1 min-w-0">
                                    <div class="text-xs opacity-60 mb-1">Date</div>
                                    <div class="font-medium text-sm sm:text-base">${formattedDate}</div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl shadow-sm" style="background: ${cardBg};">
                                ${getIconWrapper('🕐')}
                                <div class="flex-1 min-w-0">
                                    <div class="text-xs opacity-60 mb-1">Time</div>
                                    <div class="font-medium text-sm sm:text-base">${data.time}</div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl shadow-sm" style="background: ${cardBg};">
                                ${getIconWrapper('🏠')}
                                <div class="flex-1 min-w-0">
                                    <div class="text-xs opacity-60 mb-1">Venue</div>
                                    <div class="font-medium text-sm sm:text-base">${data.venue}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl shadow-sm" style="background: ${cardBg};">
                                ${getIconWrapper('📍')}
                                <div class="flex-1 min-w-0">
                                    <div class="text-xs opacity-60 mb-1">Address</div>
                                    <div class="text-xs sm:text-sm">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
