// Party Details Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.partydetails = {
                name: '🎉 Party Details',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Party Date</label>
                            <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="date" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                            <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="time" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                            <input type="text" placeholder="Office Rooftop Lounge" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="venue" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <textarea placeholder="Full venue address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Cards - Individual Boxes</option>
                                <option value="list">List - Compact View</option>
                                <option value="timeline">Timeline - Event Flow</option>
                                <option value="grid">Grid - 2 Column Layout</option>
                                <option value="modern">Modern - Icon Banner</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                                <option value="elevated">Elevated - Shadow</option>
                                <option value="bordered">Bordered - Clean Lines</option>
                                <option value="filled">Filled - Solid Background</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="iconSize" onchange="updatePreview()">
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'cards';
                    const bg = style.bg || '#faf5ff';
                    const accentColor = style.accentColor || '#8b5cf6';
                    const cardStyle = style.cardStyle || 'elevated';
                    const iconSize = style.iconSize || 'md';

                    const iconSizeClass = iconSize === 'sm' ? 'text-xl' : iconSize === 'lg' ? 'text-4xl' : 'text-2xl';

                    const getCardClasses = () => {
                        if (cardStyle === 'elevated') return 'bg-white rounded-xl shadow-md';
                        if (cardStyle === 'bordered') return 'bg-white rounded-xl border-2';
                        return 'rounded-xl';
                    };

                    // Cards Layout - Individual Boxes
                    if (layout === 'cards') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-md mx-auto space-y-4">
                                    ${data.date ? `
                                        <div class="flex items-start gap-4 p-5 ${getCardClasses()}" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass}">📅</div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Date</div>
                                                <div class="font-semibold text-lg">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.time ? `
                                        <div class="flex items-start gap-4 p-5 ${getCardClasses()}" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass}">🕐</div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Time</div>
                                                <div class="font-semibold text-lg">${data.time}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.venue ? `
                                        <div class="flex items-start gap-4 p-5 ${getCardClasses()}" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass}">🏛️</div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Venue</div>
                                                <div class="font-semibold text-lg">${data.venue}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${data.address ? `
                                        <div class="flex items-start gap-4 p-5 ${getCardClasses()}" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass}">📍</div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Address</div>
                                                <div class="text-sm">${data.address}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // List Layout - Compact View
                    if (layout === 'list') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6">
                                    <div class="space-y-4 divide-y">
                                        ${data.date ? `
                                            <div class="flex items-center gap-4 pt-4 first:pt-0">
                                                <div class="${iconSizeClass} w-12 text-center">📅</div>
                                                <div class="flex-1">
                                                    <div class="text-xs opacity-60">Date</div>
                                                    <div class="font-semibold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.time ? `
                                            <div class="flex items-center gap-4 pt-4">
                                                <div class="${iconSizeClass} w-12 text-center">🕐</div>
                                                <div class="flex-1">
                                                    <div class="text-xs opacity-60">Time</div>
                                                    <div class="font-semibold">${data.time}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.venue ? `
                                            <div class="flex items-center gap-4 pt-4">
                                                <div class="${iconSizeClass} w-12 text-center">🏛️</div>
                                                <div class="flex-1">
                                                    <div class="text-xs opacity-60">Venue</div>
                                                    <div class="font-semibold">${data.venue}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.address ? `
                                            <div class="flex items-center gap-4 pt-4">
                                                <div class="${iconSizeClass} w-12 text-center">📍</div>
                                                <div class="flex-1">
                                                    <div class="text-xs opacity-60">Address</div>
                                                    <div class="text-sm">${data.address}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Timeline Layout - Event Flow
                    if (layout === 'timeline') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-md mx-auto relative">
                                    <div class="absolute left-6 top-0 bottom-0 w-1" style="background: ${accentColor}30"></div>
                                    <div class="space-y-6 relative">
                                        ${data.date ? `
                                            <div class="flex gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconSizeClass} bg-white shadow-lg z-10" style="border: 3px solid ${accentColor}">📅</div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">DATE</div>
                                                    <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.time ? `
                                            <div class="flex gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconSizeClass} bg-white shadow-lg z-10" style="border: 3px solid ${accentColor}">🕐</div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">TIME</div>
                                                    <div class="font-bold">${data.time}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.venue ? `
                                            <div class="flex gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconSizeClass} bg-white shadow-lg z-10" style="border: 3px solid ${accentColor}">🏛️</div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">VENUE</div>
                                                    <div class="font-bold">${data.venue}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.address ? `
                                            <div class="flex gap-4">
                                                <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconSizeClass} bg-white shadow-lg z-10" style="border: 3px solid ${accentColor}">📍</div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md">
                                                    <div class="text-xs font-semibold mb-1" style="color: ${accentColor}">ADDRESS</div>
                                                    <div class="text-sm">${data.address}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Grid Layout - 2 Column
                    if (layout === 'grid') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}">
                                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                                <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                                    ${data.date ? `
                                        <div class="p-6 ${getCardClasses()} text-center" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass} mb-3">📅</div>
                                            <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accentColor}">Date</div>
                                            <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    ` : ''}
                                    ${data.time ? `
                                        <div class="p-6 ${getCardClasses()} text-center" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass} mb-3">🕐</div>
                                            <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accentColor}">Time</div>
                                            <div class="font-bold">${data.time}</div>
                                        </div>
                                    ` : ''}
                                    ${data.venue ? `
                                        <div class="p-6 ${getCardClasses()} text-center" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass} mb-3">🏛️</div>
                                            <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accentColor}">Venue</div>
                                            <div class="font-bold">${data.venue}</div>
                                        </div>
                                    ` : ''}
                                    ${data.address ? `
                                        <div class="p-6 ${getCardClasses()} text-center" style="${cardStyle === 'filled' ? `background: ${accentColor}15` : ''}">
                                            <div class="${iconSizeClass} mb-3">📍</div>
                                            <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accentColor}">Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Modern Layout - Icon Banner
                    if (layout === 'modern') {
                        return `
                            <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg}, ${accentColor}15)">
                                <h2 class="text-3xl font-bold text-center mb-10">Party Details</h2>
                                <div class="max-w-3xl mx-auto">
                                    <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                        <div class="p-2" style="background: linear-gradient(90deg, ${accentColor}, ${accentColor}90)">
                                            <div class="flex justify-around text-white ${iconSizeClass}">
                                                ${data.date ? '<div>📅</div>' : ''}
                                                ${data.time ? '<div>🕐</div>' : ''}
                                                ${data.venue ? '<div>🏛️</div>' : ''}
                                                ${data.address ? '<div>📍</div>' : ''}
                                            </div>
                                        </div>
                                        <div class="p-6 space-y-4">
                                            ${data.date ? `
                                                <div class="border-l-4 pl-4" style="border-color: ${accentColor}">
                                                    <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Date</div>
                                                    <div class="font-bold text-xl">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                                </div>
                                            ` : ''}
                                            ${data.time ? `
                                                <div class="border-l-4 pl-4" style="border-color: ${accentColor}">
                                                    <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Time</div>
                                                    <div class="font-bold text-xl">${data.time}</div>
                                                </div>
                                            ` : ''}
                                            ${data.venue ? `
                                                <div class="border-l-4 pl-4" style="border-color: ${accentColor}">
                                                    <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Venue</div>
                                                    <div class="font-bold text-xl">${data.venue}</div>
                                                </div>
                                            ` : ''}
                                            ${data.address ? `
                                                <div class="border-l-4 pl-4" style="border-color: ${accentColor}">
                                                    <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Address</div>
                                                    <div class="text-sm">${data.address}</div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
