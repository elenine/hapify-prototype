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
