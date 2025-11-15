// Success Timeline component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.successTimeline = {
    name: '📅 Success Timeline',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="Your Path to Success" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 1 - Date</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="date1" placeholder="Jan 2023" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 1 - Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="event1" placeholder="Joined the team" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 2 - Date</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="date2" placeholder="Jun 2023" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 2 - Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="event2" placeholder="First major project" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 3 - Date</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="date3" placeholder="Dec 2024" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event 3 - Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="event3" placeholder="Promotion achieved!" onchange="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="horizontal">Horizontal Timeline</option>
                    <option value="zigzag">Zigzag</option>
                    <option value="cards">Timeline Cards</option>
                    <option value="dots">Dotted Path</option>
                    <option value="arrows">Arrow Flow</option>
                    <option value="modern">Modern Blocks</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="icon" onchange="updatePreview()">
                    <option value="📅">📅 Calendar</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="🏆">🏆 Trophy</option>
                    <option value="🎯">🎯 Target</option>
                    <option value="✨">✨ Sparkle</option>
                    <option value="🚀">🚀 Rocket</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const title = data.title || 'Your Path to Success';
        const date1 = data.date1 || '';
        const event1 = data.event1 || '';
        const date2 = data.date2 || '';
        const event2 = data.event2 || '';
        const date3 = data.date3 || '';
        const event3 = data.event3 || '';
        const layout = style.layout || 'vertical';
        const icon = style.icon || '📅';

        const events = [
            { date: date1, event: event1 },
            { date: date2, event: event2 },
            { date: date3, event: event3 }
        ].filter(e => e.date && e.event);

        if (events.length === 0) {
            return `<div class="p-6 text-center opacity-50" style="color: ${globalStyles.textColor};">
                <p>Add timeline events to display here</p>
            </div>`;
        }

        if (layout === 'vertical') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: linear-gradient(to bottom, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                            <div class="space-y-12">
                                ${events.map((e, idx) => `
                                    <div class="relative pl-20">
                                        <div class="absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-xl" style="background: ${idx === events.length - 1 ? globalStyles.secondaryColor : globalStyles.primaryColor}; color: white;">
                                            ${icon}
                                        </div>
                                        <div class="bg-white rounded-xl shadow-md p-6">
                                            <p class="text-sm font-bold mb-2 uppercase tracking-wide" style="color: ${globalStyles.secondaryColor};">${e.date}</p>
                                            <p class="text-xl font-semibold" style="color: ${globalStyles.textColor};">${e.event}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'horizontal') {
            return `
                <div class="p-6 overflow-x-auto">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="flex items-center justify-between min-w-max gap-4">
                            ${events.map((e, idx) => `
                                <div class="flex flex-col items-center" style="min-width: 200px;">
                                    <div class="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg mb-4" style="background: ${globalStyles.primaryColor}; color: white;">
                                        ${icon}
                                    </div>
                                    <div class="text-center">
                                        <p class="text-sm font-bold mb-2 uppercase" style="color: ${globalStyles.secondaryColor};">${e.date}</p>
                                        <p class="text-lg font-semibold" style="color: ${globalStyles.textColor};">${e.event}</p>
                                    </div>
                                </div>
                                ${idx < events.length - 1 ? `
                                    <div class="h-1 flex-1 min-w-20" style="background: ${globalStyles.primaryColor};"></div>
                                ` : ''}
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'zigzag') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold mb-12 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="space-y-8">
                            ${events.map((e, idx) => `
                                <div class="flex items-center gap-6 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}">
                                    <div class="flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}">
                                        <p class="text-sm font-bold mb-2 uppercase tracking-wide" style="color: ${globalStyles.secondaryColor};">${e.date}</p>
                                        <p class="text-xl font-semibold" style="color: ${globalStyles.textColor};">${e.event}</p>
                                    </div>
                                    <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor}); color: white;">
                                        ${icon}
                                    </div>
                                    <div class="flex-1"></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'cards') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="grid md:grid-cols-${events.length === 2 ? '2' : '3'} gap-6">
                            ${events.map((e, idx) => `
                                <div class="rounded-2xl shadow-xl overflow-hidden">
                                    <div class="p-6 text-center text-white" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                                        <div class="text-5xl mb-3">${icon}</div>
                                        <p class="text-lg font-bold uppercase">${e.date}</p>
                                    </div>
                                    <div class="bg-white p-6 text-center">
                                        <p class="text-lg font-semibold" style="color: ${globalStyles.textColor};">${e.event}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'dots') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-12 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="relative">
                            <div class="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2" style="background: ${globalStyles.primaryColor}; opacity: 0.3;"></div>
                            <div class="space-y-16">
                                ${events.map((e, idx) => `
                                    <div class="relative">
                                        <div class="absolute left-1/2 top-0 w-6 h-6 rounded-full transform -translate-x-1/2" style="background: ${globalStyles.primaryColor};"></div>
                                        <div class="text-center pt-12">
                                            <div class="inline-block bg-white rounded-2xl shadow-lg p-6">
                                                <p class="text-sm font-bold mb-2 uppercase tracking-wide" style="color: ${globalStyles.secondaryColor};">${e.date}</p>
                                                <p class="text-xl font-semibold" style="color: ${globalStyles.textColor};">${e.event}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'arrows') {
            return `
                <div class="p-6" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}10, ${globalStyles.secondaryColor}10);">
                    <div class="max-w-3xl mx-auto py-8">
                        <h3 class="text-3xl font-bold mb-12 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="flex items-center justify-center gap-4 flex-wrap">
                            ${events.map((e, idx) => `
                                <div class="flex items-center gap-4">
                                    <div class="bg-white rounded-xl shadow-xl p-6 text-center" style="min-width: 200px;">
                                        <div class="text-4xl mb-3">${icon}</div>
                                        <p class="text-sm font-bold mb-2 uppercase" style="color: ${globalStyles.secondaryColor};">${e.date}</p>
                                        <p class="text-lg font-semibold" style="color: ${globalStyles.textColor};">${e.event}</p>
                                    </div>
                                    ${idx < events.length - 1 ? `
                                        <div class="text-4xl" style="color: ${globalStyles.primaryColor};">→</div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="space-y-4">
                            ${events.map((e, idx) => `
                                <div class="rounded-2xl overflow-hidden shadow-lg">
                                    <div class="flex items-center gap-4 p-6" style="background: ${idx % 2 === 0 ? globalStyles.primaryColor + '15' : globalStyles.secondaryColor + '15'};">
                                        <div class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-md" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor}); color: white;">
                                            ${icon}
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm font-bold mb-1 uppercase tracking-wide" style="color: ${globalStyles.secondaryColor};">${e.date}</p>
                                            <p class="text-xl font-semibold" style="color: ${globalStyles.textColor};">${e.event}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto">
                        <h3 class="text-3xl font-bold mb-12 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="space-y-8">
                            ${events.map((e, idx) => `
                                <div class="border-l-4 pl-6" style="border-color: ${idx === events.length - 1 ? globalStyles.secondaryColor : globalStyles.primaryColor};">
                                    <p class="text-sm font-bold mb-1 uppercase tracking-widest" style="color: ${globalStyles.secondaryColor};">${e.date}</p>
                                    <p class="text-xl font-light" style="color: ${globalStyles.textColor};">${e.event}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            <h3 class="text-2xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${title}</h3>
            ${events.map(e => `
                <div class="mb-3">
                    <p class="text-sm font-bold" style="color: ${globalStyles.secondaryColor};">${e.date}</p>
                    <p class="text-base" style="color: ${globalStyles.textColor};">${e.event}</p>
                </div>
            `).join('')}
        </div>`;
    }
};
