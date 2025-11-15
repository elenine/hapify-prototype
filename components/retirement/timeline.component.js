// Career Timeline Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Career Timeline',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Career Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Events (format: Year | Title | Description - one per line)</label>
                <textarea placeholder="1995 | Joined the Company | Started as Junior Developer&#10;2000 | Promotion | Became Team Lead&#10;2010 | Major Achievement | Led critical project&#10;2025 | Retirement | Celebrated career" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="events" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format each event as: Year | Title | Description</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="timelineStyle" onchange="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="modern">Modern Cards</option>
                    <option value="roadmap">Roadmap Style</option>
                    <option value="milestone">Milestone Markers</option>
                    <option value="zigzag">Zigzag Layout</option>
                    <option value="minimal">Minimal Clean</option>
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
        const timelineStyle = style.timelineStyle || 'vertical';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';
        const events = data.events ? data.events.split('\n').filter(e => e.trim()).map(event => {
            const parts = event.split('|').map(p => p.trim());
            return {
                year: parts[0] || '',
                title: parts[1] || '',
                description: parts[2] || ''
            };
        }) : [];

        switch(timelineStyle) {
            case 'vertical':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Journey'}</h2>
                        <div class="max-w-md mx-auto relative">
                            <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accentColor}40;"></div>
                            ${events.length > 0 ? events.map((event, index) => `
                                <div class="relative pl-20 pb-8">
                                    <div class="absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow" style="background: ${accentColor};"></div>
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <div class="font-bold text-sm mb-1" style="color: ${accentColor};">${event.year}</div>
                                        <h3 class="text-lg font-bold mb-2">${event.title}</h3>
                                        <p class="text-sm opacity-80">${event.description}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add timeline events</p>'}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Journey'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${events.length > 0 ? events.map(event => `
                                <div class="rounded-lg p-6 shadow-md" style="background: ${accentColor}20; border-left: 4px solid ${accentColor};">
                                    <div class="flex items-center gap-4 mb-2">
                                        <div class="text-white px-3 py-1 rounded-full text-sm font-bold" style="background: ${accentColor};">${event.year}</div>
                                        <h3 class="text-lg font-bold">${event.title}</h3>
                                    </div>
                                    <p class="text-sm opacity-80 ml-16">${event.description}</p>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add timeline events</p>'}
                        </div>
                    </div>
                `;

            case 'roadmap':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Journey'}</h2>
                        <div class="max-w-md mx-auto relative">
                            <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1" style="background: ${accentColor}40;"></div>
                            ${events.length > 0 ? events.map((event, index) => `
                                <div class="relative mb-12">
                                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white" style="background: ${accentColor};"></div>
                                    <div class="text-center pt-10">
                                        <div class="inline-block px-3 py-1 rounded-full mb-2 text-sm font-bold text-white" style="background: ${accentColor};">${event.year}</div>
                                        <h3 class="text-lg font-bold mb-2">${event.title}</h3>
                                        <p class="text-sm opacity-80 max-w-xs mx-auto">${event.description}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add timeline events</p>'}
                        </div>
                    </div>
                `;

            case 'milestone':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Journey'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${events.length > 0 ? events.map((event, index) => `
                                <div class="relative">
                                    <div class="flex items-start gap-4">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style="background: ${accentColor};">
                                            <span class="text-xs">${event.year}</span>
                                        </div>
                                        <div class="flex-1 pt-2">
                                            <h3 class="text-lg font-bold mb-1">${event.title}</h3>
                                            <p class="text-sm opacity-80">${event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add timeline events</p>'}
                        </div>
                    </div>
                `;

            case 'zigzag':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Journey'}</h2>
                        <div class="max-w-md mx-auto space-y-8">
                            ${events.length > 0 ? events.map((event, index) => {
                                const isLeft = index % 2 === 0;
                                return `
                                    <div class="flex ${isLeft ? 'justify-start' : 'justify-end'}">
                                        <div class="max-w-[85%] p-4 rounded-xl shadow-md" style="background: ${isLeft ? 'white' : accentColor + '20'};">
                                            <div class="inline-block px-2 py-1 rounded text-xs font-bold text-white mb-2" style="background: ${accentColor};">${event.year}</div>
                                            <h3 class="font-bold mb-1">${event.title}</h3>
                                            <p class="text-sm opacity-80">${event.description}</p>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center opacity-50">Add timeline events</p>'}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-2">${data.title || 'Career Journey'}</h2>
                            <div class="w-16 h-1 rounded-full mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-6 text-left">
                                ${events.length > 0 ? events.map(event => `
                                    <div class="pb-6 border-b" style="border-color: ${accentColor}20;">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="font-bold text-sm" style="color: ${accentColor};">${event.year}</span>
                                            <span class="text-sm opacity-40">•</span>
                                            <h3 class="font-bold">${event.title}</h3>
                                        </div>
                                        <p class="text-sm opacity-80">${event.description}</p>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add timeline events</p>'}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Journey'}</h2>
                        <div class="max-w-md mx-auto relative">
                            <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: ${accentColor}40;"></div>
                            ${events.length > 0 ? events.map((event, index) => `
                                <div class="relative pl-20 pb-8">
                                    <div class="absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow" style="background: ${accentColor};"></div>
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <div class="font-bold text-sm mb-1" style="color: ${accentColor};">${event.year}</div>
                                        <h3 class="text-lg font-bold mb-2">${event.title}</h3>
                                        <p class="text-sm opacity-80">${event.description}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add timeline events</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
