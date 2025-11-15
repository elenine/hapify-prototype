// Agenda/Schedule Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.agenda = {
                name: '📅 Agenda',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Event Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (Time - Session Title, one per line)</label>
                            <textarea placeholder="09:00 AM - Registration & Coffee&#10;10:00 AM - Opening Keynote&#10;11:00 AM - Breakout Sessions&#10;12:30 PM - Lunch Break&#10;02:00 PM - Panel Discussion&#10;04:00 PM - Closing Remarks" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="schedule" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="timeline">Timeline Classic</option>
                                <option value="cards">Modern Cards</option>
                                <option value="compact">Compact List</option>
                                <option value="blocks">Bold Blocks</option>
                                <option value="minimal">Minimal Clean</option>
                                <option value="gradient">Gradient Cards</option>
                                <option value="table">Table Format</option>
                                <option value="badges">Badge Timeline</option>
                                <option value="zigzag">Zigzag Flow</option>
                                <option value="accordion">Accordion Style</option>
                                <option value="pills">Time Pills</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-none">Sharp</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="shadow-sm">Subtle</option>
                                <option value="shadow-md">Medium</option>
                                <option value="shadow-lg">Bold</option>
                                <option value="shadow-xl">Extra Bold</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const scheduleItems = data.schedule ? data.schedule.split('\n').filter(s => s.trim()) : [];
                    const layout = style.layout || 'timeline';
                    const bgColor = style.bg || '#f9fafb';
                    const accentColor = style.accent || '#14b8a6';
                    const secondaryColor = style.secondary || '#10b981';
                    const radius = style.radius || 'rounded-lg';
                    const shadow = style.shadow || 'shadow-md';

                    if (scheduleItems.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                <div class="text-center text-gray-500 text-sm">Add schedule items to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'timeline':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto relative">
                                        <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accentColor}; opacity: 0.3;"></div>
                                        <div class="space-y-6">
                                            ${scheduleItems.map((item, index) => {
                                                const [time, session] = item.split('-').map(s => s.trim());
                                                return `
                                                    <div class="relative pl-16">
                                                        <div class="absolute left-5 top-1 w-6 h-6 rounded-full border-4 border-white shadow-md" style="background: ${accentColor}"></div>
                                                        <div class="bg-white p-4 rounded-xl shadow-md">
                                                            <div class="text-xs font-bold mb-2" style="color: ${accentColor}">${time || item}</div>
                                                            <div class="text-sm font-medium text-gray-900">${session || ''}</div>
                                                        </div>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${scheduleItems.map(item => {
                                            const [time, session] = item.split('-').map(s => s.trim());
                                            return `
                                                <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-4" style="border-left-color: ${accentColor}">
                                                    <div class="p-5">
                                                        <div class="flex items-start gap-4">
                                                            <div class="flex-shrink-0">
                                                                <div class="px-3 py-2 rounded-lg text-xs font-bold text-white" style="background: ${accentColor}">
                                                                    ${time || item}
                                                                </div>
                                                            </div>
                                                            <div class="flex-1 pt-1">
                                                                <div class="text-sm font-semibold text-gray-900">${session || ''}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'compact':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-xl shadow-md overflow-hidden">
                                            ${scheduleItems.map((item, index) => {
                                                const [time, session] = item.split('-').map(s => s.trim());
                                                return `
                                                    <div class="flex items-center gap-4 p-4 ${index !== 0 ? 'border-t border-gray-200' : ''}">
                                                        <div class="flex-shrink-0 w-20 text-right">
                                                            <span class="text-xs font-bold" style="color: ${accentColor}">${time || item}</span>
                                                        </div>
                                                        <div class="w-px h-8" style="background: ${accentColor}; opacity: 0.3;"></div>
                                                        <div class="flex-1 text-sm text-gray-900">${session || ''}</div>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'blocks':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${scheduleItems.map(item => {
                                            const [time, session] = item.split('-').map(s => s.trim());
                                            return `
                                                <div class="relative p-5 rounded-xl shadow-lg text-white overflow-hidden" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)">
                                                    <div class="absolute top-0 right-0 text-7xl opacity-10 -mt-4 -mr-4">📅</div>
                                                    <div class="relative">
                                                        <div class="text-xs font-bold mb-2 opacity-90">${time || item}</div>
                                                        <div class="text-sm font-semibold">${session || ''}</div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${scheduleItems.map((item, index) => {
                                            const [time, session] = item.split('-').map(s => s.trim());
                                            return `
                                                <div class="py-3 ${index !== scheduleItems.length - 1 ? 'border-b border-gray-300' : ''}">
                                                    <div class="flex gap-3">
                                                        <div class="flex-shrink-0 font-mono text-xs font-bold pt-0.5" style="color: ${accentColor}; min-width: 70px;">
                                                            ${time || item}
                                                        </div>
                                                        <div class="flex-1 text-sm text-gray-700">
                                                            ${session || ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${scheduleItems.map((item, index) => {
                                            const [time, session] = item.split('-').map(s => s.trim());
                                            const isEven = index % 2 === 0;
                                            const cardColor = isEven ? accentColor : secondaryColor;
                                            return `
                                                <div class="relative ${radius} overflow-hidden ${shadow}" style="background: linear-gradient(135deg, ${cardColor}, ${cardColor}dd); color: white;">
                                                    <div class="absolute top-0 right-0 text-7xl opacity-10 -mt-4 -mr-4">📅</div>
                                                    <div class="relative p-5">
                                                        <div class="text-xs font-bold mb-2 opacity-90">${time || item}</div>
                                                        <div class="text-sm font-semibold">${session || ''}</div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'table':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white ${radius} ${shadow} overflow-hidden">
                                            <div class="grid grid-cols-3 gap-0 border-b-2" style="border-color: ${accentColor};">
                                                <div class="p-3 font-bold text-xs uppercase text-center" style="background: ${accentColor}20; color: ${accentColor};">Time</div>
                                                <div class="col-span-2 p-3 font-bold text-xs uppercase" style="background: ${accentColor}20; color: ${accentColor};">Session</div>
                                            </div>
                                            ${scheduleItems.map((item, index) => {
                                                const [time, session] = item.split('-').map(s => s.trim());
                                                return `
                                                    <div class="grid grid-cols-3 gap-0 ${index !== scheduleItems.length - 1 ? 'border-b border-gray-200' : ''}">
                                                        <div class="p-4 text-xs font-bold text-center" style="color: ${accentColor}; background: ${accentColor}05;">
                                                            ${time || item}
                                                        </div>
                                                        <div class="col-span-2 p-4 text-sm text-gray-700">
                                                            ${session || ''}
                                                        </div>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'badges':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto relative pl-12">
                                        <div class="absolute left-4 top-0 bottom-0 w-0.5" style="background: ${accentColor}30;"></div>
                                        <div class="space-y-5">
                                            ${scheduleItems.map((item, index) => {
                                                const [time, session] = item.split('-').map(s => s.trim());
                                                return `
                                                    <div class="relative">
                                                        <div class="absolute left-[-2.7rem] top-3 w-8 h-8 ${radius === 'rounded-none' ? '' : 'rounded-full'} flex items-center justify-center text-xs font-bold ${shadow}" style="background: ${accentColor}; color: white;">
                                                            ${index + 1}
                                                        </div>
                                                        <div class="bg-white p-5 ${radius} ${shadow} border-l-4" style="border-left-color: ${accentColor};">
                                                            <div class="inline-block px-3 py-1 ${radius === 'rounded-none' ? '' : 'rounded-full'} text-xs font-bold mb-3" style="background: ${accentColor}20; color: ${accentColor};">
                                                                ${time || item}
                                                            </div>
                                                            <div class="text-sm font-semibold text-gray-900">${session || ''}</div>
                                                        </div>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'zigzag':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${scheduleItems.map((item, index) => {
                                            const [time, session] = item.split('-').map(s => s.trim());
                                            const isEven = index % 2 === 0;
                                            return `
                                                <div class="flex items-center gap-3 ${isEven ? '' : 'flex-row-reverse'}">
                                                    <div class="flex-shrink-0 ${isEven ? 'text-right' : 'text-left'}" style="min-width: 80px;">
                                                        <div class="inline-block px-3 py-2 ${radius} ${shadow} text-xs font-bold" style="background: linear-gradient(135deg, ${isEven ? accentColor : secondaryColor}, ${isEven ? accentColor : secondaryColor}dd); color: white;">
                                                            ${time || item}
                                                        </div>
                                                    </div>
                                                    <div class="flex-1 p-4 bg-white ${radius} ${shadow} transform ${isEven ? 'translate-x-0' : 'translate-x-0'}">
                                                        <div class="text-sm font-semibold text-gray-900">${session || ''}</div>
                                                    </div>
                                                    <div class="flex-shrink-0 w-3 h-3 ${radius === 'rounded-none' ? '' : 'rounded-full'}" style="background: ${isEven ? accentColor : secondaryColor};"></div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'accordion':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto space-y-2">
                                        ${scheduleItems.map((item, index) => {
                                            const [time, session] = item.split('-').map(s => s.trim());
                                            return `
                                                <div class="bg-white ${radius} ${shadow} overflow-hidden">
                                                    <div class="p-4" style="background: linear-gradient(90deg, ${accentColor}15, transparent);">
                                                        <div class="flex items-center gap-3">
                                                            <div class="flex-shrink-0 w-12 h-12 ${radius === 'rounded-none' ? '' : 'rounded-full'} flex items-center justify-center ${shadow}" style="background: ${accentColor}; color: white;">
                                                                <span class="text-sm font-bold">${String(index + 1).padStart(2, '0')}</span>
                                                            </div>
                                                            <div class="flex-1">
                                                                <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accentColor};">${time || item}</div>
                                                                <div class="text-sm font-semibold text-gray-900">${session || ''}</div>
                                                            </div>
                                                            <div class="flex-shrink-0 text-2xl" style="color: ${accentColor};">›</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'pills':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto">
                                        <div class="flex flex-wrap gap-3 justify-center mb-6">
                                            ${scheduleItems.map((item, index) => {
                                                const [time, session] = item.split('-').map(s => s.trim());
                                                return `
                                                    <div class="inline-block px-4 py-2 ${radius === 'rounded-none' ? '' : 'rounded-full'} ${shadow} text-xs font-bold" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor}); color: white;">
                                                        ${time || item}
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                        <div class="space-y-3">
                                            ${scheduleItems.map((item, index) => {
                                                const [time, session] = item.split('-').map(s => s.trim());
                                                return `
                                                    <div class="flex items-start gap-3 p-4 bg-white ${radius} ${shadow}">
                                                        <div class="flex-shrink-0 w-8 h-8 ${radius === 'rounded-none' ? '' : 'rounded-full'} flex items-center justify-center text-xs font-bold" style="background: ${accentColor}20; color: ${accentColor};">
                                                            ${index + 1}
                                                        </div>
                                                        <div class="flex-1 pt-0.5">
                                                            <div class="text-xs font-semibold mb-1" style="color: ${accentColor};">${time || item}</div>
                                                            <div class="text-sm font-medium text-gray-900">${session || ''}</div>
                                                        </div>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${scheduleItems.map(item => {
                                            const [time, session] = item.split('-').map(s => s.trim());
                                            return `
                                                <div class="flex gap-4 p-3 bg-white rounded-lg border-l-4" style="border-left-color: ${accentColor}">
                                                    <div class="flex-shrink-0 font-semibold text-sm" style="color: ${accentColor}; min-width: 80px;">
                                                        ${time || item}
                                                    </div>
                                                    <div class="flex-1 text-sm">
                                                        ${session || ''}
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
