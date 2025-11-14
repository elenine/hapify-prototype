// Party Details Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.party = {
    name: '🎈 Party Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="Party Hall" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="Full venue address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="cards">Icon Cards</option>
                    <option value="list">Simple List</option>
                    <option value="grid">Grid View</option>
                    <option value="timeline">Timeline Style</option>
                    <option value="modern">Modern Blocks</option>
                    <option value="compact">Compact</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#fdf2f8';
        const formattedDate = data.date ? new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        // Simple List
        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <h2 class="text-2xl font-bold text-center mb-8">🎈 Party Details</h2>
                    <div class="max-w-lg mx-auto bg-white rounded-xl p-8 shadow-md">
                        <div class="space-y-6">
                            ${data.date ? `
                                <div>
                                    <div class="text-sm font-semibold text-pink-600 mb-1">📅 Date</div>
                                    <div class="text-lg font-medium text-gray-800">${formattedDate}</div>
                                </div>
                            ` : ''}
                            ${data.time ? `
                                <div>
                                    <div class="text-sm font-semibold text-pink-600 mb-1">🕐 Time</div>
                                    <div class="text-lg font-medium text-gray-800">${data.time}</div>
                                </div>
                            ` : ''}
                            ${data.venue ? `
                                <div>
                                    <div class="text-sm font-semibold text-pink-600 mb-1">🎈 Venue</div>
                                    <div class="text-lg font-medium text-gray-800">${data.venue}</div>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div>
                                    <div class="text-sm font-semibold text-pink-600 mb-1">📍 Address</div>
                                    <div class="text-gray-700">${data.address}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Grid View
        if (layout === 'grid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                    <div class="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${data.date ? `
                            <div class="bg-white rounded-lg p-6 text-center shadow-sm">
                                <div class="text-4xl mb-3">📅</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Date</div>
                                <div class="font-semibold text-gray-800">${formattedDate}</div>
                            </div>
                        ` : ''}
                        ${data.time ? `
                            <div class="bg-white rounded-lg p-6 text-center shadow-sm">
                                <div class="text-4xl mb-3">🕐</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Time</div>
                                <div class="font-semibold text-gray-800">${data.time}</div>
                            </div>
                        ` : ''}
                        ${data.venue ? `
                            <div class="bg-white rounded-lg p-6 text-center shadow-sm">
                                <div class="text-4xl mb-3">🎈</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Venue</div>
                                <div class="font-semibold text-gray-800">${data.venue}</div>
                            </div>
                        ` : ''}
                        ${data.address ? `
                            <div class="bg-white rounded-lg p-6 text-center shadow-sm">
                                <div class="text-4xl mb-3">📍</div>
                                <div class="text-xs uppercase tracking-wide text-gray-500 mb-1">Address</div>
                                <div class="font-semibold text-gray-800 text-sm">${data.address}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Timeline Style
        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                    <div class="max-w-2xl mx-auto">
                        <div class="relative">
                            <div class="absolute left-6 top-0 bottom-0 w-1 bg-pink-200"></div>
                            <div class="space-y-6">
                                ${data.date ? `
                                    <div class="relative flex gap-4 items-start">
                                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-2xl z-10">📅</div>
                                        <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                                            <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Date</div>
                                            <div class="font-semibold text-gray-800">${formattedDate}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.time ? `
                                    <div class="relative flex gap-4 items-start">
                                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-2xl z-10">🕐</div>
                                        <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                                            <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Time</div>
                                            <div class="font-semibold text-gray-800">${data.time}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.venue ? `
                                    <div class="relative flex gap-4 items-start">
                                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-2xl z-10">🎈</div>
                                        <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                                            <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Venue</div>
                                            <div class="font-semibold text-gray-800">${data.venue}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.address ? `
                                    <div class="relative flex gap-4 items-start">
                                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-2xl z-10">📍</div>
                                        <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                                            <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Address</div>
                                            <div class="font-medium text-gray-800 text-sm">${data.address}</div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Blocks
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-3xl font-bold text-center mb-2">Party Details</h2>
                        <div class="text-center text-pink-600 mb-8">Mark your calendar! 🎉</div>
                        <div class="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                ${data.date ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-5">
                                        <div class="text-3xl mb-2">📅</div>
                                        <div class="text-xs uppercase tracking-wider opacity-90 mb-1">Date</div>
                                        <div class="text-lg font-bold">${formattedDate}</div>
                                    </div>
                                ` : ''}
                                ${data.time ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-5">
                                        <div class="text-3xl mb-2">🕐</div>
                                        <div class="text-xs uppercase tracking-wider opacity-90 mb-1">Time</div>
                                        <div class="text-lg font-bold">${data.time}</div>
                                    </div>
                                ` : ''}
                                ${data.venue ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-5">
                                        <div class="text-3xl mb-2">🎈</div>
                                        <div class="text-xs uppercase tracking-wider opacity-90 mb-1">Venue</div>
                                        <div class="text-lg font-bold">${data.venue}</div>
                                    </div>
                                ` : ''}
                                ${data.address ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-5">
                                        <div class="text-3xl mb-2">📍</div>
                                        <div class="text-xs uppercase tracking-wider opacity-90 mb-1">Address</div>
                                        <div class="font-semibold">${data.address}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Compact
        if (layout === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-500">
                        <h3 class="text-xl font-bold text-gray-900 mb-4">🎈 Party Details</h3>
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            ${data.date ? `
                                <div>
                                    <span class="text-gray-500">📅</span>
                                    <span class="font-semibold ml-2">${formattedDate}</span>
                                </div>
                            ` : ''}
                            ${data.time ? `
                                <div>
                                    <span class="text-gray-500">🕐</span>
                                    <span class="font-semibold ml-2">${data.time}</span>
                                </div>
                            ` : ''}
                            ${data.venue ? `
                                <div class="col-span-2">
                                    <span class="text-gray-500">🎈</span>
                                    <span class="font-semibold ml-2">${data.venue}</span>
                                </div>
                            ` : ''}
                            ${data.address ? `
                                <div class="col-span-2">
                                    <span class="text-gray-500">📍</span>
                                    <span class="ml-2">${data.address}</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Icon Cards (default)
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
                <div class="max-w-md mx-auto space-y-4">
                    ${data.date ? `
                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <div class="text-2xl">📅</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Date</div>
                            <div class="font-medium">${formattedDate}</div>
                        </div>
                    </div>` : ''}
                    ${data.time ? `
                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <div class="text-2xl">🕐</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Time</div>
                            <div class="font-medium">${data.time}</div>
                        </div>
                    </div>` : ''}
                    ${data.venue ? `
                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <div class="text-2xl">🎈</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Venue</div>
                            <div class="font-medium">${data.venue}</div>
                        </div>
                    </div>` : ''}
                    ${data.address ? `
                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <div class="text-2xl">📍</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Address</div>
                            <div class="font-medium text-sm">${data.address}</div>
                        </div>
                    </div>` : ''}
                </div>
            </div>
        `;
    }
};
