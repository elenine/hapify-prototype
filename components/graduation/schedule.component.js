// Ceremony Schedule Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '📅 Ceremony Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Ceremony Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                <textarea placeholder="Here's the schedule for the graduation ceremony..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items</label>
                <div class="text-xs text-gray-500 mb-2">Format: Time | Activity (one per line)</div>
                <textarea placeholder="9:00 AM | Guest Arrival & Registration&#10;10:00 AM | Procession & Opening Ceremony&#10;10:30 AM | Commencement Address&#10;11:30 AM | Degree Conferral&#10;12:30 PM | Closing Remarks&#10;1:00 PM | Reception & Photos" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm section-data" data-field="items" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="timeline">Timeline View</option>
                    <option value="cards">Card View</option>
                    <option value="minimal">Minimal List</option>
                    <option value="modern">Modern Steps</option>
                    <option value="accordion">Accordion Style</option>
                    <option value="gradient-steps">Gradient Steps</option>
                    <option value="circular-timeline">Circular Timeline</option>
                    <option value="agenda">Agenda Planner</option>
                    <option value="colorful-blocks">Colorful Blocks</option>
                    <option value="split-view">Split View</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="shadow" oninput="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm" selected>Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'timeline';
        const bg = style.bg || '#f9fafb';
        const accent = style.accent || '#6366f1';
        const shadow = style.shadow || 'sm';
        const items = data.items ? data.items.split('\n').filter(item => item.trim()) : [];

        const shadowMap = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };

        const shadowClass = shadowMap[shadow];

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

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="grid sm:grid-cols-2 gap-4">
                                ${parsedItems.map((item, index) => `
                                    <div class="bg-white rounded-lg p-5 ${shadowClass} border-2" style="border-color: ${accent}15">
                                        ${item.time ? `<div class="font-bold text-sm mb-2" style="color: ${accent}">🕐 ${item.time}</div>` : ''}
                                        <div class="text-gray-800 font-medium">${item.activity}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="space-y-3">
                                ${parsedItems.map((item, index) => `
                                    <div class="flex items-center gap-4 p-4 rounded-lg" style="background: ${accent}05; border-left: 4px solid ${accent}">
                                        ${item.time ? `<div class="font-bold text-sm min-w-24" style="color: ${accent}">${item.time}</div>` : ''}
                                        <div class="flex-1 text-gray-800">${item.activity}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="grid gap-4">
                                ${parsedItems.map((item, index) => `
                                    <div class="flex items-start gap-4">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white font-bold ${shadowClass}" style="background: ${accent}">
                                            <div class="text-xs">Step</div>
                                            <div class="text-2xl">${index + 1}</div>
                                        </div>
                                        <div class="flex-1 bg-white rounded-xl p-5 ${shadowClass}">
                                            ${item.time ? `<div class="font-bold mb-2 flex items-center gap-2" style="color: ${accent}">
                                                <span class="text-xl">🕐</span>
                                                <span>${item.time}</span>
                                            </div>` : ''}
                                            <div class="text-gray-800 font-medium">${item.activity}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'accordion':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="space-y-2">
                                ${parsedItems.map((item, index) => `
                                    <div class="bg-white rounded-xl overflow-hidden ${shadowClass} border-2" style="border-color: ${accent}20">
                                        <div class="p-5" style="background: linear-gradient(to right, ${accent}10, transparent)">
                                            <div class="flex items-center justify-between">
                                                <div class="flex-1">
                                                    ${item.time ? `<div class="text-xs font-bold uppercase tracking-wide mb-2" style="color: ${accent}">⏰ ${item.time}</div>` : ''}
                                                    <div class="text-gray-800 font-bold text-lg">${item.activity}</div>
                                                </div>
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style="background: ${accent}20; color: ${accent}">
                                                    <span class="text-xl">▶</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient-steps':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="grid gap-4">
                                ${parsedItems.map((item, index) => {
                                    const opacity = 100 - (index * 10);
                                    return `
                                        <div class="relative rounded-2xl p-6 ${shadowClass} text-white overflow-hidden" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}${opacity > 50 ? opacity : 50} 100%)">
                                            <div class="absolute top-2 right-2 w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center font-bold text-xl">
                                                ${index + 1}
                                            </div>
                                            ${item.time ? `<div class="text-sm font-bold mb-2 opacity-90">🕐 ${item.time}</div>` : ''}
                                            <div class="font-bold text-lg pr-14">${item.activity}</div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'circular-timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="relative">
                                <div class="absolute left-8 top-0 bottom-0 w-1 rounded-full" style="background: linear-gradient(to bottom, ${accent}, ${accent}50)"></div>
                                <div class="space-y-8">
                                    ${parsedItems.map((item, index) => `
                                        <div class="relative flex gap-6 items-start">
                                            <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl z-10 ${shadowClass} border-4 border-white" style="background: linear-gradient(135deg, ${accent}, ${accent}dd)">
                                                ${['🎓', '🎯', '🎤', '📜', '🎊', '📸', '🎉'][index % 7]}
                                            </div>
                                            <div class="flex-1 bg-white rounded-2xl p-5 ${shadowClass} mt-2">
                                                ${item.time ? `<div class="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2" style="background: ${accent}20; color: ${accent}">⏰ ${item.time}</div>` : ''}
                                                <div class="text-gray-800 font-bold text-lg">${item.activity}</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'agenda':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-2xl ${shadowClass} overflow-hidden">
                                <div class="p-6 text-center text-white" style="background: linear-gradient(135deg, ${accent}, ${accent}cc)">
                                    <div class="text-4xl mb-2">📅</div>
                                    <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                    ${data.description ? `<p class="mt-2 opacity-90">${data.description}</p>` : ''}
                                </div>
                                <div class="divide-y divide-gray-200">
                                    ${parsedItems.map((item, index) => `
                                        <div class="p-5 hover:bg-gray-50 transition-colors">
                                            <div class="flex items-center gap-4">
                                                ${item.time ? `
                                                    <div class="flex-shrink-0 w-20 text-center">
                                                        <div class="inline-block px-3 py-2 rounded-lg font-bold text-sm" style="background: ${accent}15; color: ${accent}">
                                                            ${item.time}
                                                        </div>
                                                    </div>
                                                ` : ''}
                                                <div class="flex-1">
                                                    <div class="flex items-center gap-3">
                                                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background: ${accent}">
                                                            ${index + 1}
                                                        </div>
                                                        <div class="text-gray-800 font-medium">${item.activity}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'colorful-blocks':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="grid gap-4">
                                ${parsedItems.map((item, index) => {
                                    const gradients = [
                                        'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                                        'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                                        'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                        'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                                        'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                                        'linear-gradient(135deg, #f97316 0%, #dc2626 100%)'
                                    ];
                                    const gradient = gradients[index % gradients.length];
                                    return `
                                        <div class="rounded-2xl p-6 ${shadowClass} text-white relative overflow-hidden" style="background: ${gradient}">
                                            <div class="absolute top-2 right-2 w-10 h-10 rounded-full bg-white bg-opacity-25 flex items-center justify-center font-bold">
                                                ${index + 1}
                                            </div>
                                            <div class="pr-12">
                                                ${item.time ? `<div class="text-sm font-bold mb-2 flex items-center gap-2 opacity-95">
                                                    <span class="text-xl">⏰</span>
                                                    <span>${item.time}</span>
                                                </div>` : ''}
                                                <div class="font-bold text-lg">${item.activity}</div>
                                            </div>
                                            <div class="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white opacity-10" style="transform: translate(25%, 25%)"></div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'split-view':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="bg-white rounded-2xl ${shadowClass} overflow-hidden">
                                ${parsedItems.map((item, index) => `
                                    <div class="flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} border-b border-gray-100 last:border-0">
                                        ${item.time ? `
                                            <div class="w-32 flex-shrink-0 p-5 flex items-center justify-center text-white font-bold" style="background: ${accent}">
                                                <div class="text-center">
                                                    <div class="text-2xl mb-1">🕐</div>
                                                    <div class="text-sm">${item.time}</div>
                                                </div>
                                            </div>
                                        ` : ''}
                                        <div class="flex-1 p-5 flex items-center">
                                            <div>
                                                <div class="inline-block w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mb-2" style="background: ${accent}">
                                                    ${index + 1}
                                                </div>
                                                <div class="text-gray-800 font-bold text-lg">${item.activity}</div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;

            case 'timeline':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">📅</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Ceremony Schedule'}</h2>
                                ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                            </div>
                            <div class="relative">
                                <div class="absolute left-6 top-0 bottom-0 w-0.5" style="background: ${accent}33"></div>
                                <div class="space-y-6">
                                    ${parsedItems.map((item, index) => `
                                        <div class="relative flex gap-4 items-start">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10 ${shadowClass}" style="background: ${accent}">
                                                ${index + 1}
                                            </div>
                                            <div class="flex-1 bg-white rounded-lg p-4 ${shadowClass} border" style="border-color: ${accent}20">
                                                ${item.time ? `<div class="font-bold text-sm mb-1" style="color: ${accent}">🕐 ${item.time}</div>` : ''}
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
    }
};
