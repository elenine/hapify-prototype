// Event Details Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.details = {
    name: '📋 Event Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                <input type="text" placeholder="Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="Full address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Layout</option>
                    <option value="timeline">Timeline View</option>
                    <option value="compact">Compact List</option>
                    <option value="elegant">Elegant Boxes</option>
                    <option value="modern">Modern Split</option>
                    <option value="ticket">Ticket Style</option>
                    <option value="calendar">Calendar View</option>
                    <option value="infographic">Infographic</option>
                    <option value="badge">Badge Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#faf5ff';
        const accentColor = style.accent || '#9333ea';
        const formattedDate = data.date ? new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : null;

        switch(layout) {
            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-12">Event Details</h2>
                        <div class="max-w-2xl mx-auto relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1 rounded" style="background: ${accentColor}30;"></div>
                            ${formattedDate ? `
                            <div class="relative flex gap-6 mb-8 pl-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 flex-shrink-0" style="background: ${accentColor}; color: white;">
                                    📅
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="text-sm font-semibold" style="color: ${accentColor}">Date</div>
                                    <div class="font-medium text-lg mt-1">${formattedDate}</div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="relative flex gap-6 mb-8 pl-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 flex-shrink-0" style="background: ${accentColor}; color: white;">
                                    🕐
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="text-sm font-semibold" style="color: ${accentColor}">Time</div>
                                    <div class="font-medium text-lg mt-1">${data.time}</div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="relative flex gap-6 mb-8 pl-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 flex-shrink-0" style="background: ${accentColor}; color: white;">
                                    📍
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="text-sm font-semibold" style="color: ${accentColor}">Venue</div>
                                    <div class="font-medium text-lg mt-1">${data.venue}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="relative flex gap-6 pl-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 flex-shrink-0" style="background: ${accentColor}; color: white;">
                                    🏠
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="text-sm font-semibold" style="color: ${accentColor}">Address</div>
                                    <div class="font-medium mt-1">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'compact':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8">Event Details</h2>
                        <div class="max-w-lg mx-auto bg-white rounded-xl p-6 shadow-lg" style="border-top: 4px solid ${accentColor}">
                            <div class="space-y-3">
                                ${formattedDate ? `
                                <div class="flex items-center gap-3 pb-3 border-b">
                                    <span class="text-2xl">📅</span>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500">Date</div>
                                        <div class="font-semibold">${formattedDate}</div>
                                    </div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="flex items-center gap-3 pb-3 border-b">
                                    <span class="text-2xl">🕐</span>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500">Time</div>
                                        <div class="font-semibold">${data.time}</div>
                                    </div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="flex items-center gap-3 pb-3 border-b">
                                    <span class="text-2xl">📍</span>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500">Venue</div>
                                        <div class="font-semibold">${data.venue}</div>
                                    </div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="flex items-center gap-3">
                                    <span class="text-2xl">🏠</span>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500">Address</div>
                                        <div class="font-semibold text-sm">${data.address}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-10" style="color: ${accentColor}">Event Details</h2>
                        <div class="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                            ${formattedDate ? `
                            <div class="text-center p-6 rounded-xl bg-white shadow-md border-2" style="border-color: ${accentColor}30">
                                <div class="text-4xl mb-3">📅</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Date</div>
                                <div class="font-bold text-lg">${formattedDate}</div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="text-center p-6 rounded-xl bg-white shadow-md border-2" style="border-color: ${accentColor}30">
                                <div class="text-4xl mb-3">🕐</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Time</div>
                                <div class="font-bold text-lg">${data.time}</div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="text-center p-6 rounded-xl bg-white shadow-md border-2" style="border-color: ${accentColor}30">
                                <div class="text-4xl mb-3">📍</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Venue</div>
                                <div class="font-bold text-lg">${data.venue}</div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="text-center p-6 rounded-xl bg-white shadow-md border-2" style="border-color: ${accentColor}30">
                                <div class="text-4xl mb-3">🏠</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Address</div>
                                <div class="font-bold">${data.address}</div>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-4xl mx-auto">
                            <h2 class="text-3xl font-bold mb-10 text-center" style="color: ${accentColor}">Event Details</h2>
                            <div class="bg-white rounded-2xl overflow-hidden shadow-xl">
                                <div class="p-8" style="background: linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}05 100%)">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        ${formattedDate ? `
                                        <div class="flex items-start gap-4">
                                            <div class="p-3 rounded-lg" style="background: ${accentColor}; color: white;">
                                                <span class="text-2xl">📅</span>
                                            </div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Date</div>
                                                <div class="font-bold text-lg">${formattedDate}</div>
                                            </div>
                                        </div>` : ''}
                                        ${data.time ? `
                                        <div class="flex items-start gap-4">
                                            <div class="p-3 rounded-lg" style="background: ${accentColor}; color: white;">
                                                <span class="text-2xl">🕐</span>
                                            </div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Time</div>
                                                <div class="font-bold text-lg">${data.time}</div>
                                            </div>
                                        </div>` : ''}
                                        ${data.venue ? `
                                        <div class="flex items-start gap-4">
                                            <div class="p-3 rounded-lg" style="background: ${accentColor}; color: white;">
                                                <span class="text-2xl">📍</span>
                                            </div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Venue</div>
                                                <div class="font-bold text-lg">${data.venue}</div>
                                            </div>
                                        </div>` : ''}
                                        ${data.address ? `
                                        <div class="flex items-start gap-4">
                                            <div class="p-3 rounded-lg" style="background: ${accentColor}; color: white;">
                                                <span class="text-2xl">🏠</span>
                                            </div>
                                            <div>
                                                <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Address</div>
                                                <div class="font-bold">${data.address}</div>
                                            </div>
                                        </div>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'ticket':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-3xl font-bold text-center mb-10">Event Details</h2>
                            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden" style="border: 3px dashed ${accentColor};">
                                <div class="p-8" style="background: linear-gradient(135deg, ${accentColor}10, ${accentColor}05);">
                                    <div class="text-center mb-6">
                                        <div class="text-6xl mb-2">🎫</div>
                                        <h3 class="text-2xl font-bold" style="color: ${accentColor};">Wedding Invitation</h3>
                                    </div>
                                    <div class="space-y-4">
                                        ${formattedDate ? `
                                        <div class="flex items-center justify-between p-4 bg-white rounded-lg border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-3xl">📅</div>
                                                <div>
                                                    <div class="text-xs uppercase text-gray-500">Date</div>
                                                    <div class="font-bold">${formattedDate}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${data.time ? `
                                        <div class="flex items-center justify-between p-4 bg-white rounded-lg border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-3xl">🕐</div>
                                                <div>
                                                    <div class="text-xs uppercase text-gray-500">Time</div>
                                                    <div class="font-bold">${data.time}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${data.venue ? `
                                        <div class="flex items-center justify-between p-4 bg-white rounded-lg border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-3xl">📍</div>
                                                <div>
                                                    <div class="text-xs uppercase text-gray-500">Venue</div>
                                                    <div class="font-bold">${data.venue}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                        ${data.address ? `
                                        <div class="flex items-center justify-between p-4 bg-white rounded-lg border-l-4" style="border-color: ${accentColor};">
                                            <div class="flex items-center gap-3">
                                                <div class="text-3xl">🏠</div>
                                                <div>
                                                    <div class="text-xs uppercase text-gray-500">Address</div>
                                                    <div class="font-bold text-sm">${data.address}</div>
                                                </div>
                                            </div>
                                        </div>` : ''}
                                    </div>
                                </div>
                                <div class="h-12 flex items-center justify-center gap-2" style="background: ${accentColor};">
                                    <span class="text-white font-bold">ADMIT ONE</span>
                                    <span class="text-white text-2xl">💒</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'calendar':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <h2 class="text-3xl font-bold text-center mb-10">Event Details</h2>
                        <div class="max-w-3xl mx-auto">
                            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                ${formattedDate ? `
                                <div class="p-8" style="background: ${accentColor};">
                                    <div class="text-center text-white">
                                        <div class="text-sm uppercase tracking-wide mb-2">${new Date(data.date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</div>
                                        <div class="text-7xl font-bold mb-2">${new Date(data.date).getDate()}</div>
                                        <div class="text-lg uppercase tracking-wider">${new Date(data.date).toLocaleDateString('en-US', {weekday: 'long'})}</div>
                                    </div>
                                </div>` : ''}
                                <div class="p-8 space-y-6">
                                    ${data.time ? `
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}20;">
                                            🕐
                                        </div>
                                        <div>
                                            <div class="text-xs text-gray-500 uppercase tracking-wide">Time</div>
                                            <div class="font-bold text-xl">${data.time}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.venue ? `
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}20;">
                                            📍
                                        </div>
                                        <div>
                                            <div class="text-xs text-gray-500 uppercase tracking-wide">Venue</div>
                                            <div class="font-bold text-xl">${data.venue}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}20;">
                                            🏠
                                        </div>
                                        <div>
                                            <div class="text-xs text-gray-500 uppercase tracking-wide">Address</div>
                                            <div class="font-medium">${data.address}</div>
                                        </div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'infographic':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <h2 class="text-3xl font-bold text-center mb-12">Event Details</h2>
                        <div class="max-w-4xl mx-auto">
                            <div class="relative">
                                <!-- Connecting line -->
                                <div class="hidden md:block absolute top-24 left-0 right-0 h-1" style="background: ${accentColor}30;"></div>

                                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    ${formattedDate ? `
                                    <div class="relative text-center">
                                        <div class="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 bg-white shadow-xl relative z-10" style="border: 4px solid ${accentColor};">
                                            📅
                                        </div>
                                        <div class="font-bold text-sm mb-1" style="color: ${accentColor};">DATE</div>
                                        <div class="text-sm font-medium">${formattedDate}</div>
                                    </div>` : ''}
                                    ${data.time ? `
                                    <div class="relative text-center">
                                        <div class="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 bg-white shadow-xl relative z-10" style="border: 4px solid ${accentColor};">
                                            🕐
                                        </div>
                                        <div class="font-bold text-sm mb-1" style="color: ${accentColor};">TIME</div>
                                        <div class="text-sm font-medium">${data.time}</div>
                                    </div>` : ''}
                                    ${data.venue ? `
                                    <div class="relative text-center">
                                        <div class="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 bg-white shadow-xl relative z-10" style="border: 4px solid ${accentColor};">
                                            📍
                                        </div>
                                        <div class="font-bold text-sm mb-1" style="color: ${accentColor};">VENUE</div>
                                        <div class="text-sm font-medium">${data.venue}</div>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div class="relative text-center">
                                        <div class="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 bg-white shadow-xl relative z-10" style="border: 4px solid ${accentColor};">
                                            🏠
                                        </div>
                                        <div class="font-bold text-sm mb-1" style="color: ${accentColor};">ADDRESS</div>
                                        <div class="text-xs font-medium px-2">${data.address}</div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-4xl mx-auto">
                            <h2 class="text-3xl font-bold text-center mb-12">Event Details</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                ${formattedDate ? `
                                <div class="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
                                    <div class="absolute top-0 right-0 w-20 h-20" style="background: ${accentColor}; opacity: 0.1; border-radius: 0 0 0 100%;"></div>
                                    <div class="flex items-start gap-4">
                                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style="background: ${accentColor}; color: white;">
                                            📅
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs uppercase tracking-wider font-bold mb-2" style="color: ${accentColor};">Wedding Date</div>
                                            <div class="font-bold text-xl">${formattedDate}</div>
                                        </div>
                                    </div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
                                    <div class="absolute top-0 right-0 w-20 h-20" style="background: ${accentColor}; opacity: 0.1; border-radius: 0 0 0 100%;"></div>
                                    <div class="flex items-start gap-4">
                                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style="background: ${accentColor}; color: white;">
                                            🕐
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs uppercase tracking-wider font-bold mb-2" style="color: ${accentColor};">Ceremony Time</div>
                                            <div class="font-bold text-xl">${data.time}</div>
                                        </div>
                                    </div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
                                    <div class="absolute top-0 right-0 w-20 h-20" style="background: ${accentColor}; opacity: 0.1; border-radius: 0 0 0 100%;"></div>
                                    <div class="flex items-start gap-4">
                                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style="background: ${accentColor}; color: white;">
                                            📍
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs uppercase tracking-wider font-bold mb-2" style="color: ${accentColor};">Venue</div>
                                            <div class="font-bold text-xl">${data.venue}</div>
                                        </div>
                                    </div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
                                    <div class="absolute top-0 right-0 w-20 h-20" style="background: ${accentColor}; opacity: 0.1; border-radius: 0 0 0 100%;"></div>
                                    <div class="flex items-start gap-4">
                                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style="background: ${accentColor}; color: white;">
                                            🏠
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs uppercase tracking-wider font-bold mb-2" style="color: ${accentColor};">Location</div>
                                            <div class="font-medium text-sm">${data.address}</div>
                                        </div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'cards':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8">Event Details</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${formattedDate ? `
                            <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div class="text-2xl">📅</div>
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">Date</div>
                                    <div class="font-medium">${formattedDate}</div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div class="text-2xl">🕐</div>
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">Time</div>
                                    <div class="font-medium">${data.time}</div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div class="text-2xl">📍</div>
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">Venue</div>
                                    <div class="font-medium">${data.venue}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div class="text-2xl">🏠</div>
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">Address</div>
                                    <div class="font-medium text-sm">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
