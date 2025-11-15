// Ceremony Details Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.ceremonydetails = {
    name: '🎉 Ceremony Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ceremony Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ceremony Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="University Auditorium" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="Full venue address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="list">List View</option>
                    <option value="grid">Grid View</option>
                    <option value="compact">Compact Cards</option>
                    <option value="featured">Featured Style</option>
                    <option value="timeline-view">Timeline View</option>
                    <option value="modern-split">Modern Split</option>
                    <option value="glass-cards">Glass Cards</option>
                    <option value="accordion">Accordion Style</option>
                    <option value="banner-info">Banner Info</option>
                    <option value="colorful-blocks">Colorful Blocks</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="filled">Filled</option>
                    <option value="outlined">Outlined</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'list';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#6366f1';
        const cardStyle = style.cardStyle || 'filled';
        const iconSize = style.iconSize || 'medium';

        const iconSizeMap = {
            small: 'text-xl',
            medium: 'text-2xl',
            large: 'text-4xl'
        };

        const iconClass = iconSizeMap[iconSize];

        const getCardClasses = (cardStyle, accent) => {
            switch(cardStyle) {
                case 'outlined':
                    return `border-2 bg-transparent`;
                case 'minimal':
                    return `border-b-2`;
                default:
                    return ``;
            }
        };

        const getCardStyles = (cardStyle, accent) => {
            switch(cardStyle) {
                case 'outlined':
                    return `border-color: ${accent}`;
                case 'minimal':
                    return `border-color: ${accent}33`;
                case 'filled':
                default:
                    return `background: ${accent}15`;
            }
        };

        switch(layout) {
            case 'grid':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">Ceremony Details</h2>
                        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${data.date ? `
                                <div class="p-6 rounded-xl ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                    <div class="${iconClass} mb-3">📅</div>
                                    <div class="text-xs font-semibold mb-2" style="color: ${accent}">DATE</div>
                                    <div class="font-semibold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                </div>
                            ` : ''}
                            ${data.time ? `
                                <div class="p-6 rounded-xl ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                    <div class="${iconClass} mb-3">🕐</div>
                                    <div class="text-xs font-semibold mb-2" style="color: ${accent}">TIME</div>
                                    <div class="font-semibold">${data.time}</div>
                                </div>
                            ` : ''}
                            ${data.venue ? `
                                <div class="p-6 rounded-xl ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                    <div class="${iconClass} mb-3">🏛️</div>
                                    <div class="text-xs font-semibold mb-2" style="color: ${accent}">VENUE</div>
                                    <div class="font-semibold">${data.venue}</div>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div class="p-6 rounded-xl ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                    <div class="${iconClass} mb-3">📍</div>
                                    <div class="text-xs font-semibold mb-2" style="color: ${accent}">ADDRESS</div>
                                    <div class="text-sm">${data.address}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'compact':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">Ceremony Details</h2>
                        <div class="max-w-2xl mx-auto flex flex-wrap justify-center gap-3">
                            ${data.date ? `
                                <div class="px-4 py-3 rounded-full flex items-center gap-2 ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                    <span class="${iconClass}">📅</span>
                                    <span class="font-medium">${new Date(data.date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</span>
                                </div>
                            ` : ''}
                            ${data.time ? `
                                <div class="px-4 py-3 rounded-full flex items-center gap-2 ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                    <span class="${iconClass}">🕐</span>
                                    <span class="font-medium">${data.time}</span>
                                </div>
                            ` : ''}
                            ${data.venue ? `
                                <div class="px-4 py-3 rounded-full flex items-center gap-2 ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                    <span class="${iconClass}">🏛️</span>
                                    <span class="font-medium">${data.venue}</span>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div class="px-4 py-3 rounded-full flex items-center gap-2 ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                    <span class="${iconClass}">📍</span>
                                    <span class="font-medium text-sm">${data.address}</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'featured':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8 p-8 rounded-2xl" style="background: ${accent}; color: white">
                                <div class="text-6xl mb-4">🎓</div>
                                <h2 class="text-3xl font-bold mb-2">Graduation Ceremony</h2>
                                <p class="text-sm opacity-90">Please join us to celebrate</p>
                            </div>
                            <div class="space-y-3">
                                ${data.date ? `
                                    <div class="flex items-center gap-4 p-5 rounded-xl ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl" style="background: ${accent}; color: white">
                                            📅
                                        </div>
                                        <div>
                                            <div class="text-xs font-semibold mb-1" style="color: ${accent}">Date</div>
                                            <div class="font-bold text-lg">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.time ? `
                                    <div class="flex items-center gap-4 p-5 rounded-xl ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl" style="background: ${accent}; color: white">
                                            🕐
                                        </div>
                                        <div>
                                            <div class="text-xs font-semibold mb-1" style="color: ${accent}">Time</div>
                                            <div class="font-bold text-lg">${data.time}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.venue ? `
                                    <div class="flex items-center gap-4 p-5 rounded-xl ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl" style="background: ${accent}; color: white">
                                            🏛️
                                        </div>
                                        <div>
                                            <div class="text-xs font-semibold mb-1" style="color: ${accent}">Venue</div>
                                            <div class="font-bold text-lg">${data.venue}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.address ? `
                                    <div class="flex items-center gap-4 p-5 rounded-xl ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl" style="background: ${accent}; color: white">
                                            📍
                                        </div>
                                        <div>
                                            <div class="text-xs font-semibold mb-1" style="color: ${accent}">Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'timeline-view':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">Ceremony Timeline</h2>
                        <div class="max-w-2xl mx-auto relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${accent}33"></div>
                            <div class="space-y-6">
                                ${data.date ? `
                                    <div class="relative pl-16">
                                        <div class="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full" style="background: ${accent}"></div>
                                        <div class="p-5 rounded-xl" style="background: ${accent}10">
                                            <div class="${iconClass} mb-2">📅</div>
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Ceremony Date</div>
                                            <div class="font-bold text-lg">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.time ? `
                                    <div class="relative pl-16">
                                        <div class="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full" style="background: ${accent}"></div>
                                        <div class="p-5 rounded-xl" style="background: ${accent}10">
                                            <div class="${iconClass} mb-2">🕐</div>
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Start Time</div>
                                            <div class="font-bold text-lg">${data.time}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.venue ? `
                                    <div class="relative pl-16">
                                        <div class="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full" style="background: ${accent}"></div>
                                        <div class="p-5 rounded-xl" style="background: ${accent}10">
                                            <div class="${iconClass} mb-2">🏛️</div>
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Venue Location</div>
                                            <div class="font-bold text-lg">${data.venue}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.address ? `
                                    <div class="relative pl-16">
                                        <div class="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full" style="background: ${accent}"></div>
                                        <div class="p-5 rounded-xl" style="background: ${accent}10">
                                            <div class="${iconClass} mb-2">📍</div>
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Full Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'modern-split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">Ceremony Details</h2>
                        <div class="max-w-4xl mx-auto">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-6">
                                    ${data.date ? `
                                        <div class="p-6 rounded-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%); color: white">
                                            <div class="${iconClass} mb-3">📅</div>
                                            <div class="text-xs font-bold uppercase tracking-wide mb-2 opacity-90">Date</div>
                                            <div class="font-bold text-xl">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    ` : ''}
                                    ${data.venue ? `
                                        <div class="p-6 rounded-2xl" style="background: ${accent}15">
                                            <div class="${iconClass} mb-3">🏛️</div>
                                            <div class="text-xs font-bold uppercase tracking-wide mb-2" style="color: ${accent}">Venue</div>
                                            <div class="font-bold text-lg">${data.venue}</div>
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="space-y-6">
                                    ${data.time ? `
                                        <div class="p-6 rounded-2xl" style="background: ${accent}15">
                                            <div class="${iconClass} mb-3">🕐</div>
                                            <div class="text-xs font-bold uppercase tracking-wide mb-2" style="color: ${accent}">Time</div>
                                            <div class="font-bold text-lg">${data.time}</div>
                                        </div>
                                    ` : ''}
                                    ${data.address ? `
                                        <div class="p-6 rounded-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%); color: white">
                                            <div class="${iconClass} mb-3">📍</div>
                                            <div class="text-xs font-bold uppercase tracking-wide mb-2 opacity-90">Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'glass-cards':
                return `
                    <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg} 0%, ${accent}22 100%)">
                        <h2 class="text-2xl font-bold text-center mb-8">Event Details</h2>
                        <div class="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${data.date ? `
                                <div class="p-6 rounded-2xl backdrop-blur-sm" style="background: rgba(255,255,255,0.8); border: 1px solid ${accent}33">
                                    <div class="${iconClass} mb-3">📅</div>
                                    <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Date</div>
                                    <div class="font-bold text-lg">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                </div>
                            ` : ''}
                            ${data.time ? `
                                <div class="p-6 rounded-2xl backdrop-blur-sm" style="background: rgba(255,255,255,0.8); border: 1px solid ${accent}33">
                                    <div class="${iconClass} mb-3">🕐</div>
                                    <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Time</div>
                                    <div class="font-bold text-lg">${data.time}</div>
                                </div>
                            ` : ''}
                            ${data.venue ? `
                                <div class="p-6 rounded-2xl backdrop-blur-sm" style="background: rgba(255,255,255,0.8); border: 1px solid ${accent}33">
                                    <div class="${iconClass} mb-3">🏛️</div>
                                    <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Venue</div>
                                    <div class="font-bold text-lg">${data.venue}</div>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div class="p-6 rounded-2xl backdrop-blur-sm" style="background: rgba(255,255,255,0.8); border: 1px solid ${accent}33">
                                    <div class="${iconClass} mb-3">📍</div>
                                    <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Address</div>
                                    <div class="text-sm">${data.address}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'accordion':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">Ceremony Information</h2>
                        <div class="max-w-2xl mx-auto space-y-3">
                            ${data.date ? `
                                <div class="rounded-xl overflow-hidden" style="border: 2px solid ${accent}33">
                                    <div class="p-5 flex items-center gap-4" style="background: ${accent}">
                                        <div class="${iconClass} text-white">📅</div>
                                        <div class="flex-1 text-white">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Ceremony Date</div>
                                            <div class="font-bold text-lg">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            ${data.time ? `
                                <div class="rounded-xl overflow-hidden" style="border: 2px solid ${accent}33">
                                    <div class="p-5 flex items-center gap-4" style="background: ${accent}dd">
                                        <div class="${iconClass} text-white">🕐</div>
                                        <div class="flex-1 text-white">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Start Time</div>
                                            <div class="font-bold text-lg">${data.time}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            ${data.venue ? `
                                <div class="rounded-xl overflow-hidden" style="border: 2px solid ${accent}33">
                                    <div class="p-5 flex items-center gap-4" style="background: ${accent}bb">
                                        <div class="${iconClass} text-white">🏛️</div>
                                        <div class="flex-1 text-white">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Venue</div>
                                            <div class="font-bold text-lg">${data.venue}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div class="rounded-xl overflow-hidden" style="border: 2px solid ${accent}33">
                                    <div class="p-5 flex items-center gap-4" style="background: ${accent}99">
                                        <div class="${iconClass} text-white">📍</div>
                                        <div class="flex-1 text-white">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'banner-info':
                return `
                    <div style="background: ${bg}">
                        <div class="py-6 px-6 text-center" style="background: ${accent}; color: white">
                            <h2 class="text-3xl font-black">CEREMONY DETAILS</h2>
                        </div>
                        <div class="py-12 px-6">
                            <div class="max-w-3xl mx-auto space-y-4">
                                ${data.date ? `
                                    <div class="flex items-center gap-4 p-6 rounded-xl" style="background: ${accent}10">
                                        <div class="w-20 h-20 rounded-2xl flex items-center justify-center ${iconClass}" style="background: ${accent}; color: white">
                                            📅
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Date</div>
                                            <div class="font-bold text-xl">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.time ? `
                                    <div class="flex items-center gap-4 p-6 rounded-xl" style="background: ${accent}10">
                                        <div class="w-20 h-20 rounded-2xl flex items-center justify-center ${iconClass}" style="background: ${accent}; color: white">
                                            🕐
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Time</div>
                                            <div class="font-bold text-xl">${data.time}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.venue ? `
                                    <div class="flex items-center gap-4 p-6 rounded-xl" style="background: ${accent}10">
                                        <div class="w-20 h-20 rounded-2xl flex items-center justify-center ${iconClass}" style="background: ${accent}; color: white">
                                            🏛️
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Venue</div>
                                            <div class="font-bold text-xl">${data.venue}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.address ? `
                                    <div class="flex items-center gap-4 p-6 rounded-xl" style="background: ${accent}10">
                                        <div class="w-20 h-20 rounded-2xl flex items-center justify-center ${iconClass}" style="background: ${accent}; color: white">
                                            📍
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'colorful-blocks':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">Event Information</h2>
                        <div class="max-w-2xl mx-auto grid grid-cols-1 gap-4">
                            ${data.date ? `
                                <div class="p-6 rounded-2xl text-white" style="background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)">
                                    <div class="flex items-center gap-4">
                                        <div class="${iconClass}">📅</div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Date</div>
                                            <div class="font-bold text-xl">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            ${data.time ? `
                                <div class="p-6 rounded-2xl text-white" style="background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)">
                                    <div class="flex items-center gap-4">
                                        <div class="${iconClass}">🕐</div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Time</div>
                                            <div class="font-bold text-xl">${data.time}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            ${data.venue ? `
                                <div class="p-6 rounded-2xl text-white" style="background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%)">
                                    <div class="flex items-center gap-4">
                                        <div class="${iconClass}">🏛️</div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Venue</div>
                                            <div class="font-bold text-xl">${data.venue}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div class="p-6 rounded-2xl text-white" style="background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)">
                                    <div class="flex items-center gap-4">
                                        <div class="${iconClass}">📍</div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'list':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <h2 class="text-2xl font-bold text-center mb-8">Graduation Ceremony</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${data.date ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                <div class="${iconClass}">📅</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${accent}">Date</div>
                                    <div class="font-medium">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                <div class="${iconClass}">🕐</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${accent}">Time</div>
                                    <div class="font-medium">${data.time}</div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                <div class="${iconClass}">🏛️</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${accent}">Venue</div>
                                    <div class="font-medium">${data.venue}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg ${getCardClasses(cardStyle, accent)}" style="${getCardStyles(cardStyle, accent)}">
                                <div class="${iconClass}">📍</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${accent}">Address</div>
                                    <div class="text-sm">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;
        }
    }`
};
