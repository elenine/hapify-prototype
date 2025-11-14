// Speakers Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.speakers = {
                name: '🎤 Speakers',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Featured Speakers" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Speakers (Name - Title/Company, one per line)</label>
                            <textarea placeholder="Dr. Jane Smith - AI Research Lead, Tech Corp&#10;John Doe - VP of Engineering, StartUp Inc&#10;Sarah Wilson - Industry Expert" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="speakers" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Modern Cards</option>
                                <option value="list">Professional List</option>
                                <option value="minimal">Minimal Clean</option>
                                <option value="featured">Featured Spotlight</option>
                                <option value="circles">Circle Profiles</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="sm">Subtle</option>
                                <option value="md">Medium</option>
                                <option value="lg">Bold</option>
                                <option value="xl">Extra Bold</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const speakers = data.speakers ? data.speakers.split('\n').filter(s => s.trim()) : [];
                    const layout = style.layout || 'cards';
                    const bgColor = style.bg || '#ffffff';
                    const accentColor = style.accent || '#14b8a6';
                    const shadow = style.shadow || 'md';

                    if (speakers.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Featured Speakers'}</h2>
                                <div class="text-center text-gray-500 text-sm">Add speakers to display</div>
                            </div>
                        `;
                    }

                    const shadowClass = `shadow-${shadow}`;

                    switch(layout) {
                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Featured Speakers'}</h2>
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${speakers.map(speaker => {
                                            const [name, title] = speaker.split('-').map(s => s.trim());
                                            return `
                                                <div class="p-5 bg-white rounded-xl border-l-4 ${shadowClass} hover:shadow-xl transition-shadow" style="border-left-color: ${accentColor}">
                                                    <div class="flex items-start gap-4">
                                                        <div class="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-3xl" style="background: ${accentColor}20">
                                                            🎤
                                                        </div>
                                                        <div class="flex-1">
                                                            <div class="font-bold text-lg text-gray-900">${name || speaker}</div>
                                                            ${title ? `<div class="text-sm text-gray-600 mt-1">${title}</div>` : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'list':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Featured Speakers'}</h2>
                                    <div class="max-w-md mx-auto divide-y divide-gray-200">
                                        ${speakers.map(speaker => {
                                            const [name, title] = speaker.split('-').map(s => s.trim());
                                            return `
                                                <div class="py-4 flex items-center gap-4">
                                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">
                                                        🎤
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="font-semibold text-base text-gray-900">${name || speaker}</div>
                                                        ${title ? `<div class="text-xs text-gray-500 mt-0.5">${title}</div>` : ''}
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
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Featured Speakers'}</h2>
                                    <div class="max-w-md mx-auto space-y-6">
                                        ${speakers.map(speaker => {
                                            const [name, title] = speaker.split('-').map(s => s.trim());
                                            return `
                                                <div class="text-center py-4 border-b border-gray-200 last:border-0">
                                                    <div class="text-2xl mb-2">🎤</div>
                                                    <div class="font-bold text-lg" style="color: ${accentColor}">${name || speaker}</div>
                                                    ${title ? `<div class="text-sm text-gray-600 mt-1">${title}</div>` : ''}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'featured':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Featured Speakers'}</h2>
                                    <div class="max-w-md mx-auto space-y-6">
                                        ${speakers.map((speaker, index) => {
                                            const [name, title] = speaker.split('-').map(s => s.trim());
                                            return `
                                                <div class="relative p-6 rounded-2xl ${shadowClass} overflow-hidden" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)">
                                                    <div class="absolute top-0 right-0 text-9xl opacity-10 -mt-8 -mr-4">🎤</div>
                                                    <div class="relative">
                                                        <div class="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs text-white font-medium mb-3">
                                                            Speaker ${index + 1}
                                                        </div>
                                                        <h3 class="text-xl font-bold text-white mb-2">${name || speaker}</h3>
                                                        ${title ? `<p class="text-sm text-white text-opacity-90">${title}</p>` : ''}
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'circles':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Featured Speakers'}</h2>
                                    <div class="max-w-md mx-auto space-y-5">
                                        ${speakers.map(speaker => {
                                            const [name, title] = speaker.split('-').map(s => s.trim());
                                            return `
                                                <div class="flex items-center gap-4 p-4 bg-white rounded-xl ${shadowClass}">
                                                    <div class="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-3xl ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%); color: white;">
                                                        🎤
                                                    </div>
                                                    <div class="flex-1 min-w-0">
                                                        <div class="font-bold text-base text-gray-900 truncate">${name || speaker}</div>
                                                        ${title ? `<div class="text-sm text-gray-600 mt-1">${title}</div>` : ''}
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Featured Speakers'}</h2>
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${speakers.map(speaker => {
                                            const [name, title] = speaker.split('-').map(s => s.trim());
                                            return `
                                                <div class="p-4 bg-gray-50 rounded-lg text-center border border-gray-200">
                                                    <div class="text-4xl mb-2">🎤</div>
                                                    <div class="font-bold text-lg">${name || speaker}</div>
                                                    ${title ? `<div class="text-sm text-gray-600 mt-1">${title}</div>` : ''}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
