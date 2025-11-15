// Party Schedule/Activities Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '📅 Party Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Party Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea placeholder="Here's what we have planned for the celebration..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items</label>
                <div class="text-xs text-gray-500 mb-2">Format: Time | Activity (one per line)</div>
                <textarea placeholder="3:00 PM | Guest Arrival & Welcome Drinks&#10;4:00 PM | Party Games & Activities&#10;5:00 PM | Cake Cutting & Birthday Song&#10;6:00 PM | Dinner & Dancing&#10;8:00 PM | Farewell" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 font-mono text-sm section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="timeline">Timeline View</option>
                    <option value="cards">Card Grid</option>
                    <option value="modern">Modern Steps</option>
                    <option value="numbered">Numbered List</option>
                    <option value="gradient">Gradient Timeline</option>
                    <option value="compact">Compact List</option>
                    <option value="elegant">Elegant Schedule</option>
                    <option value="vibrant">Vibrant Blocks</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'timeline';
        const bgColor = style.bg || '#f9fafb';
        const accentColor = style.accent || '#ec4899';
        const items = data.items ? data.items.split('\n').filter(item => item.trim()) : [];

        const parsedItems = items.map(item => {
            const parts = item.split('|');
            if (parts.length >= 2) {
                return {
                    time: parts[0].trim(),
                    activity: parts[1].trim()
                };
            }
            return {
                time: '',
                activity: item.trim()
            };
        });

        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">📅</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Party Schedule'}</h2>
                            ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="grid sm:grid-cols-2 gap-4">
                            ${parsedItems.map((item, index) => `
                                <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                                    ${item.time ? `<div class="font-bold text-sm mb-2" style="color: ${accentColor}">🕐 ${item.time}</div>` : ''}
                                    <div class="text-gray-800 font-medium">${item.activity}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Steps
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-5xl mb-3">📅</div>
                            <h2 class="text-3xl font-bold">${data.title || 'Party Schedule'}</h2>
                            ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="space-y-4">
                            ${parsedItems.map((item, index) => `
                                <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4" style="border-color: ${accentColor}">
                                    <div class="flex items-start gap-4">
                                        <div class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        <div class="flex-1">
                                            ${item.time ? `<div class="text-sm font-semibold mb-1 opacity-75" style="color: ${accentColor}">⏰ ${item.time}</div>` : ''}
                                            <div class="text-lg font-semibold text-gray-900">${item.activity}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Numbered List
        if (layout === 'numbered') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">📅</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Party Schedule'}</h2>
                            ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="bg-white rounded-xl p-8 shadow-md">
                            <div class="space-y-5">
                                ${parsedItems.map((item, index) => `
                                    <div class="flex items-start gap-4 pb-5 ${index < parsedItems.length - 1 ? 'border-b border-gray-200' : ''}">
                                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        <div class="flex-1">
                                            ${item.time ? `<div class="text-sm font-bold mb-1" style="color: ${accentColor}">${item.time}</div>` : ''}
                                            <div class="text-gray-800">${item.activity}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Gradient Timeline
        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${accentColor}15 0%, ${bgColor} 100%);">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-6xl mb-3">📅</div>
                            <h2 class="text-3xl font-bold" style="color: ${accentColor}">${data.title || 'Party Schedule'}</h2>
                            ${data.description ? `<p class="text-gray-700 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="relative">
                            <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b" style="background: linear-gradient(to bottom, ${accentColor}, ${accentColor}80);"></div>
                            <div class="space-y-8">
                                ${parsedItems.map((item, index) => `
                                    <div class="relative flex gap-4 items-start">
                                        <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                            ${index + 1}
                                        </div>
                                        <div class="flex-1 bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                                            ${item.time ? `<div class="text-xs font-bold uppercase tracking-wider mb-2" style="color: ${accentColor}">⏰ ${item.time}</div>` : ''}
                                            <div class="text-gray-900 font-semibold text-lg">${item.activity}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Compact List
        if (layout === 'compact') {
            return `
                <div class="py-10 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span class="text-4xl">📅</span>
                            <span>${data.title || 'Party Schedule'}</span>
                        </h2>
                        ${data.description ? `<p class="text-gray-600 mb-6">${data.description}</p>` : ''}
                        <div class="bg-white rounded-lg p-6 shadow-sm">
                            <div class="divide-y divide-gray-200">
                                ${parsedItems.map((item, index) => `
                                    <div class="py-3 flex items-center gap-4">
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        ${item.time ? `<div class="flex-shrink-0 text-sm font-bold" style="color: ${accentColor}">${item.time}</div>` : ''}
                                        <div class="flex-1 text-gray-800 text-sm">${item.activity}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Schedule
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-5xl mb-3">📅</div>
                            <h2 class="text-3xl font-bold mb-2">${data.title || 'Party Schedule'}</h2>
                            <div class="w-24 h-1 mx-auto mb-4" style="background: ${accentColor}"></div>
                            ${data.description ? `<p class="text-gray-600 italic">${data.description}</p>` : ''}
                        </div>
                        <div class="space-y-6">
                            ${parsedItems.map((item, index) => `
                                <div class="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-opacity-50 transition-all" style="border-color: ${index % 2 === 0 ? accentColor + '20' : '#f3f4f6'}">
                                    <div class="flex items-start gap-4">
                                        ${item.time ? `
                                            <div class="flex-shrink-0 text-center">
                                                <div class="px-4 py-2 rounded-lg font-bold text-white shadow-md" style="background: ${accentColor}">
                                                    ${item.time}
                                                </div>
                                            </div>
                                        ` : ''}
                                        <div class="flex-1 pt-2">
                                            <div class="text-lg font-semibold text-gray-900">${item.activity}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Vibrant Blocks
        if (layout === 'vibrant') {
            const colors = [accentColor, '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#ec4899'];
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-6xl mb-3">🎉</div>
                            <h2 class="text-3xl font-black uppercase tracking-tight">${data.title || 'Party Schedule'}</h2>
                            ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="grid sm:grid-cols-2 gap-4">
                            ${parsedItems.map((item, index) => {
                                const color = colors[index % colors.length];
                                return `
                                    <div class="rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-transform" style="background: linear-gradient(135deg, ${color} 0%, ${color}dd 100%);">
                                        <div class="text-5xl mb-3">${index + 1}</div>
                                        ${item.time ? `<div class="text-sm font-bold mb-2 opacity-90">⏰ ${item.time}</div>` : ''}
                                        <div class="text-lg font-bold">${item.activity}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Timeline View (default)
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">📅</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Party Schedule'}</h2>
                        ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                    </div>
                    <div class="relative">
                        <div class="absolute left-6 top-0 bottom-0 w-0.5" style="background: ${accentColor}30;"></div>
                        <div class="space-y-6">
                            ${parsedItems.map((item, index) => `
                                <div class="relative flex gap-4 items-start">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10" style="background: ${accentColor}">
                                        ${index + 1}
                                    </div>
                                    <div class="flex-1 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                                        ${item.time ? `<div class="font-bold text-sm mb-1" style="color: ${accentColor}">🕐 ${item.time}</div>` : ''}
                                        <div class="text-gray-800 font-medium">${item.activity}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
