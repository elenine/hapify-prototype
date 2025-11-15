// Party Details Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.partydetails = {
    name: '🎉 Party Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="Conference Center" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="Full venue address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Layout</option>
                    <option value="timeline">Timeline Style</option>
                    <option value="minimal">Minimal List</option>
                    <option value="boxed">Boxed Design</option>
                    <option value="elegant">Elegant Classic</option>
                    <option value="compact">Compact Single Card</option>
                    <option value="grid">Grid Display</option>
                    <option value="banner">Modern Banner</option>
                    <option value="ticket">Ticket Style</option>
                    <option value="sidebar">Sidebar Info</option>
                    <option value="floating">Floating Info Cards</option>
                    <option value="magazine">Magazine Layout</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        const dateFormatted = data.date ? new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">Retirement Party Details</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${data.date ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}20;">
                                <div class="text-2xl">📅</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${textColor}80;">Date</div>
                                    <div class="font-medium">${dateFormatted}</div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}20;">
                                <div class="text-2xl">🕐</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${textColor}80;">Time</div>
                                    <div class="font-medium">${data.time}</div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}20;">
                                <div class="text-2xl">🏛️</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${textColor}80;">Venue</div>
                                    <div class="font-medium">${data.venue}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg shadow-sm" style="background: ${accentColor}20;">
                                <div class="text-2xl">📍</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${textColor}80;">Address</div>
                                    <div class="text-sm">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                        <div class="max-w-md mx-auto">
                            <div class="relative pl-8 space-y-6">
                                <div class="absolute left-2 top-2 bottom-2 w-0.5" style="background: ${accentColor};"></div>
                                ${data.date ? `
                                <div class="relative">
                                    <div class="absolute left-[-2rem] top-1 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="text-2xl mb-1">📅</div>
                                    <div class="font-semibold mb-1">Date</div>
                                    <div class="text-sm opacity-80">${dateFormatted}</div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="relative">
                                    <div class="absolute left-[-2rem] top-1 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="text-2xl mb-1">🕐</div>
                                    <div class="font-semibold mb-1">Time</div>
                                    <div class="text-sm opacity-80">${data.time}</div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="relative">
                                    <div class="absolute left-[-2rem] top-1 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="text-2xl mb-1">🏛️</div>
                                    <div class="font-semibold mb-1">Venue</div>
                                    <div class="text-sm opacity-80">${data.venue}</div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="relative">
                                    <div class="absolute left-[-2rem] top-1 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="text-2xl mb-1">📍</div>
                                    <div class="font-semibold mb-1">Address</div>
                                    <div class="text-sm opacity-80">${data.address}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-2">Party Details</h2>
                            <div class="w-16 h-1 rounded-full mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-4">
                                ${data.date ? `<div><span class="text-2xl mr-2">📅</span><span class="font-medium">${dateFormatted}</span></div>` : ''}
                                ${data.time ? `<div><span class="text-2xl mr-2">🕐</span><span class="font-medium">${data.time}</span></div>` : ''}
                                ${data.venue ? `<div><span class="text-2xl mr-2">🏛️</span><span class="font-medium">${data.venue}</span></div>` : ''}
                                ${data.address ? `<div><span class="text-2xl mr-2">📍</span><span class="text-sm opacity-80">${data.address}</span></div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'boxed':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="border-4 rounded-2xl p-8" style="border-color: ${accentColor};">
                                <h2 class="text-2xl font-bold text-center mb-6" style="color: ${accentColor};">Retirement Party</h2>
                                <div class="space-y-4">
                                    ${data.date ? `
                                    <div class="flex items-center gap-3 pb-3 border-b" style="border-color: ${accentColor}20;">
                                        <span class="text-3xl">${'📅'}</span>
                                        <div>
                                            <div class="text-xs font-semibold uppercase tracking-wide" style="color: ${accentColor};">Date</div>
                                            <div class="font-medium">${dateFormatted}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.time ? `
                                    <div class="flex items-center gap-3 pb-3 border-b" style="border-color: ${accentColor}20;">
                                        <span class="text-3xl">🕐</span>
                                        <div>
                                            <div class="text-xs font-semibold uppercase tracking-wide" style="color: ${accentColor};">Time</div>
                                            <div class="font-medium">${data.time}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.venue ? `
                                    <div class="flex items-center gap-3 pb-3 border-b" style="border-color: ${accentColor}20;">
                                        <span class="text-3xl">🏛️</span>
                                        <div>
                                            <div class="text-xs font-semibold uppercase tracking-wide" style="color: ${accentColor};">Venue</div>
                                            <div class="font-medium">${data.venue}</div>
                                        </div>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div class="flex items-center gap-3">
                                        <span class="text-3xl">📍</span>
                                        <div>
                                            <div class="text-xs font-semibold uppercase tracking-wide" style="color: ${accentColor};">Address</div>
                                            <div class="text-sm">${data.address}</div>
                                        </div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="text-center mb-8">
                                <div class="inline-block">
                                    <h2 class="text-2xl font-serif mb-2">Celebration Details</h2>
                                    <div class="flex justify-center gap-1">
                                        <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                        <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                        <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg p-6 space-y-5">
                                ${data.date ? `
                                <div class="text-center">
                                    <div class="text-4xl mb-2">📅</div>
                                    <div class="text-xs uppercase tracking-widest mb-1" style="color: ${accentColor};">Date</div>
                                    <div class="font-semibold">${dateFormatted}</div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="text-center border-t pt-5" style="border-color: ${accentColor}20;">
                                    <div class="text-4xl mb-2">🕐</div>
                                    <div class="text-xs uppercase tracking-widest mb-1" style="color: ${accentColor};">Time</div>
                                    <div class="font-semibold">${data.time}</div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="text-center border-t pt-5" style="border-color: ${accentColor}20;">
                                    <div class="text-4xl mb-2">🏛️</div>
                                    <div class="text-xs uppercase tracking-widest mb-1" style="color: ${accentColor};">Venue</div>
                                    <div class="font-semibold">${data.venue}</div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="text-center border-t pt-5" style="border-color: ${accentColor}20;">
                                    <div class="text-4xl mb-2">📍</div>
                                    <div class="text-xs uppercase tracking-widest mb-1" style="color: ${accentColor};">Address</div>
                                    <div class="text-sm">${data.address}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'compact':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="rounded-2xl shadow-xl overflow-hidden" style="background: ${accentColor};">
                                <div class="p-6 text-center text-white">
                                    <h2 class="text-2xl font-bold mb-4">Party Details</h2>
                                    <div class="space-y-3 text-sm">
                                        ${data.date ? `<div class="flex items-center justify-center gap-2"><span>📅</span><span>${dateFormatted}</span></div>` : ''}
                                        ${data.time ? `<div class="flex items-center justify-center gap-2"><span>🕐</span><span>${data.time}</span></div>` : ''}
                                        ${data.venue ? `<div class="flex items-center justify-center gap-2"><span>🏛️</span><span>${data.venue}</span></div>` : ''}
                                        ${data.address ? `<div class="flex items-center justify-center gap-2"><span>📍</span><span>${data.address}</span></div>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'grid':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                        <div class="max-w-md mx-auto">
                            <div class="grid grid-cols-2 gap-4">
                                ${data.date ? `
                                <div class="p-4 rounded-xl text-center shadow-md" style="background: ${accentColor}20;">
                                    <div class="text-3xl mb-2">📅</div>
                                    <div class="text-xs font-bold mb-1" style="color: ${accentColor};">DATE</div>
                                    <div class="text-xs font-medium">${dateFormatted}</div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="p-4 rounded-xl text-center shadow-md" style="background: ${accentColor}20;">
                                    <div class="text-3xl mb-2">🕐</div>
                                    <div class="text-xs font-bold mb-1" style="color: ${accentColor};">TIME</div>
                                    <div class="text-xs font-medium">${data.time}</div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="p-4 rounded-xl text-center shadow-md col-span-2" style="background: ${accentColor}20;">
                                    <div class="text-3xl mb-2">🏛️</div>
                                    <div class="text-xs font-bold mb-1" style="color: ${accentColor};">VENUE</div>
                                    <div class="text-sm font-medium">${data.venue}</div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="p-4 rounded-xl text-center shadow-md col-span-2" style="background: ${accentColor}20;">
                                    <div class="text-3xl mb-2">📍</div>
                                    <div class="text-xs font-bold mb-1" style="color: ${accentColor};">ADDRESS</div>
                                    <div class="text-xs">${data.address}</div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'banner':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="rounded-2xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}CC 100%);">
                                <div class="p-8 text-white text-center">
                                    <h2 class="text-3xl font-bold mb-6">Join Us!</h2>
                                    <div class="space-y-4">
                                        ${data.date ? `
                                        <div class="bg-white bg-opacity-20 rounded-lg p-3">
                                            <div class="text-2xl mb-1">📅</div>
                                            <div class="font-bold text-sm">${dateFormatted}</div>
                                        </div>` : ''}
                                        ${data.time ? `
                                        <div class="bg-white bg-opacity-20 rounded-lg p-3">
                                            <div class="text-2xl mb-1">🕐</div>
                                            <div class="font-bold text-sm">${data.time}</div>
                                        </div>` : ''}
                                        ${data.venue ? `
                                        <div class="bg-white bg-opacity-20 rounded-lg p-3">
                                            <div class="text-2xl mb-1">🏛️</div>
                                            <div class="font-bold text-sm">${data.venue}</div>
                                        </div>` : ''}
                                        ${data.address ? `
                                        <div class="bg-white bg-opacity-20 rounded-lg p-3">
                                            <div class="text-2xl mb-1">📍</div>
                                            <div class="text-xs">${data.address}</div>
                                        </div>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'ticket':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="relative rounded-xl shadow-2xl overflow-hidden" style="background: white;">
                                <div class="absolute top-0 left-0 right-0 h-2" style="background: ${accentColor};"></div>
                                <div class="pt-6 pb-8 px-6">
                                    <div class="text-center mb-6">
                                        <div class="inline-block px-6 py-2 rounded-full text-white text-sm font-bold" style="background: ${accentColor};">
                                            RETIREMENT PARTY
                                        </div>
                                    </div>
                                    <div class="space-y-4">
                                        ${data.date ? `
                                        <div class="flex items-start gap-3 border-l-4 pl-3" style="border-color: ${accentColor};">
                                            <span class="text-2xl">📅</span>
                                            <div>
                                                <div class="text-xs uppercase font-bold" style="color: ${accentColor};">Date</div>
                                                <div class="font-medium">${dateFormatted}</div>
                                            </div>
                                        </div>` : ''}
                                        ${data.time ? `
                                        <div class="flex items-start gap-3 border-l-4 pl-3" style="border-color: ${accentColor};">
                                            <span class="text-2xl">🕐</span>
                                            <div>
                                                <div class="text-xs uppercase font-bold" style="color: ${accentColor};">Time</div>
                                                <div class="font-medium">${data.time}</div>
                                            </div>
                                        </div>` : ''}
                                        ${data.venue ? `
                                        <div class="flex items-start gap-3 border-l-4 pl-3" style="border-color: ${accentColor};">
                                            <span class="text-2xl">🏛️</span>
                                            <div>
                                                <div class="text-xs uppercase font-bold" style="color: ${accentColor};">Venue</div>
                                                <div class="font-medium">${data.venue}</div>
                                            </div>
                                        </div>` : ''}
                                        ${data.address ? `
                                        <div class="flex items-start gap-3 border-l-4 pl-3" style="border-color: ${accentColor};">
                                            <span class="text-2xl">📍</span>
                                            <div>
                                                <div class="text-xs uppercase font-bold" style="color: ${accentColor};">Location</div>
                                                <div class="text-sm">${data.address}</div>
                                            </div>
                                        </div>` : ''}
                                    </div>
                                </div>
                                <div class="border-t-2 border-dashed py-3 px-6 text-center text-xs" style="border-color: ${accentColor}40; background: ${accentColor}10;">
                                    <span style="color: ${accentColor};">🎉 We Can't Wait to Celebrate! 🎉</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'sidebar':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="flex rounded-xl shadow-xl overflow-hidden">
                                <div class="w-16 flex-shrink-0 flex flex-col items-center justify-center text-white py-6" style="background: ${accentColor};">
                                    <div class="transform -rotate-90 whitespace-nowrap text-sm font-bold tracking-widest">
                                        DETAILS
                                    </div>
                                </div>
                                <div class="flex-1 p-6 bg-white space-y-4">
                                    ${data.date ? `
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <span class="text-xl">📅</span>
                                            <span class="text-xs font-bold uppercase" style="color: ${accentColor};">Date</span>
                                        </div>
                                        <div class="font-medium text-sm pl-7">${dateFormatted}</div>
                                    </div>` : ''}
                                    ${data.time ? `
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <span class="text-xl">🕐</span>
                                            <span class="text-xs font-bold uppercase" style="color: ${accentColor};">Time</span>
                                        </div>
                                        <div class="font-medium text-sm pl-7">${data.time}</div>
                                    </div>` : ''}
                                    ${data.venue ? `
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <span class="text-xl">🏛️</span>
                                            <span class="text-xs font-bold uppercase" style="color: ${accentColor};">Venue</span>
                                        </div>
                                        <div class="font-medium text-sm pl-7">${data.venue}</div>
                                    </div>` : ''}
                                    ${data.address ? `
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <span class="text-xl">📍</span>
                                            <span class="text-xs font-bold uppercase" style="color: ${accentColor};">Address</span>
                                        </div>
                                        <div class="text-xs pl-7">${data.address}</div>
                                    </div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'floating':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${data.date ? `
                            <div class="ml-4 p-5 rounded-2xl shadow-lg transform hover:scale-105 transition" style="background: white;">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md" style="background: ${accentColor}; color: white;">
                                        📅
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold" style="color: ${accentColor};">DATE</div>
                                        <div class="font-semibold">${dateFormatted}</div>
                                    </div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="mr-4 p-5 rounded-2xl shadow-lg transform hover:scale-105 transition" style="background: white;">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md" style="background: ${accentColor}; color: white;">
                                        🕐
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold" style="color: ${accentColor};">TIME</div>
                                        <div class="font-semibold">${data.time}</div>
                                    </div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="ml-4 p-5 rounded-2xl shadow-lg transform hover:scale-105 transition" style="background: white;">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md" style="background: ${accentColor}; color: white;">
                                        🏛️
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold" style="color: ${accentColor};">VENUE</div>
                                        <div class="font-semibold">${data.venue}</div>
                                    </div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="mr-4 p-5 rounded-2xl shadow-lg transform hover:scale-105 transition" style="background: white;">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md" style="background: ${accentColor}; color: white;">
                                        📍
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold" style="color: ${accentColor};">ADDRESS</div>
                                        <div class="text-sm">${data.address}</div>
                                    </div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'magazine':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="mb-6">
                                <div class="text-4xl font-bold mb-2" style="color: ${accentColor};">PARTY</div>
                                <div class="text-2xl font-light">Details</div>
                                <div class="w-20 h-1 mt-2" style="background: ${accentColor};"></div>
                            </div>
                            <div class="space-y-6">
                                ${data.date ? `
                                <div class="flex items-start gap-4">
                                    <div class="text-4xl" style="color: ${accentColor};">📅</div>
                                    <div class="flex-1 pt-1">
                                        <div class="text-xs font-bold uppercase tracking-wider mb-1" style="color: ${accentColor};">When</div>
                                        <div class="text-lg font-semibold">${dateFormatted}</div>
                                    </div>
                                </div>` : ''}
                                ${data.time ? `
                                <div class="flex items-start gap-4">
                                    <div class="text-4xl" style="color: ${accentColor};">🕐</div>
                                    <div class="flex-1 pt-1">
                                        <div class="text-xs font-bold uppercase tracking-wider mb-1" style="color: ${accentColor};">Time</div>
                                        <div class="text-lg font-semibold">${data.time}</div>
                                    </div>
                                </div>` : ''}
                                ${data.venue ? `
                                <div class="flex items-start gap-4">
                                    <div class="text-4xl" style="color: ${accentColor};">🏛️</div>
                                    <div class="flex-1 pt-1">
                                        <div class="text-xs font-bold uppercase tracking-wider mb-1" style="color: ${accentColor};">Where</div>
                                        <div class="text-lg font-semibold">${data.venue}</div>
                                    </div>
                                </div>` : ''}
                                ${data.address ? `
                                <div class="flex items-start gap-4">
                                    <div class="text-4xl" style="color: ${accentColor};">📍</div>
                                    <div class="flex-1 pt-1">
                                        <div class="text-xs font-bold uppercase tracking-wider mb-1" style="color: ${accentColor};">Address</div>
                                        <div class="text-sm leading-relaxed">${data.address}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">Retirement Party Details</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${data.date ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${accentColor}20;">
                                <div class="text-2xl">📅</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${textColor}80;">Date</div>
                                    <div class="font-medium">${dateFormatted}</div>
                                </div>
                            </div>` : ''}
                            ${data.time ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${accentColor}20;">
                                <div class="text-2xl">🕐</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${textColor}80;">Time</div>
                                    <div class="font-medium">${data.time}</div>
                                </div>
                            </div>` : ''}
                            ${data.venue ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${accentColor}20;">
                                <div class="text-2xl">🏛️</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${textColor}80;">Venue</div>
                                    <div class="font-medium">${data.venue}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="flex items-start gap-4 p-4 rounded-lg" style="background: ${accentColor}20;">
                                <div class="text-2xl">📍</div>
                                <div>
                                    <div class="text-xs mb-1" style="color: ${textColor}80;">Address</div>
                                    <div class="text-sm">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
