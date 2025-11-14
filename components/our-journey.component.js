// Our Journey Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['our-journey'] = {
    name: '🗺️ Our Journey',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Our Journey Together" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Journey Description</label>
                <textarea placeholder="From strangers to soulmates, our journey has been magical..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Journey Steps (Format: Date | Event | Description, one per line)</label>
                <textarea placeholder="Jan 2020 | First Meeting | We met at the coffee shop on 5th Avenue
Jun 2020 | First Date | Our amazing dinner at the Italian restaurant
Dec 2020 | First Anniversary | Celebrated our love with a romantic getaway" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="steps" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Journey Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="journeyStyle" onchange="updatePreview()">
                    <option value="zigzag">Zigzag Timeline</option>
                    <option value="vertical">Vertical Timeline</option>
                    <option value="roadmap">Roadmap Style</option>
                    <option value="path">Journey Path</option>
                    <option value="cards">Story Cards</option>
                    <option value="pins">Map Pins</option>
                    <option value="steps">Journey Steps</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const steps = (data.steps || '').split('\n').filter(s => s.trim());
        const journeyStyle = style.journeyStyle || 'zigzag';
        const bgColor = style.bg || '#fdf2f8';
        const accentColor = style.accentColor || '#ec4899';

        if (steps.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto text-center">
                        <div class="text-5xl mb-4">🗺️</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'Our Journey Together'}</h2>
                        <p class="text-gray-400">Add journey steps to see your timeline...</p>
                    </div>
                </div>
            `;
        }

        let stepsHTML = '';

        if (journeyStyle === 'zigzag') {
            stepsHTML = steps.map((step, index) => {
                const parts = step.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const description = parts[2] || '';
                const isLeft = index % 2 === 0;

                return `
                    <div class="relative flex items-center mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}">
                        <div class="flex-1 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}">
                            <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                                <div class="text-sm font-semibold mb-1" style="color: ${accentColor}">${date}</div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">${event}</h3>
                                <p class="text-gray-600">${description}</p>
                            </div>
                        </div>
                        <div class="flex-shrink-0 w-4 h-4 rounded-full border-4 z-10" style="border-color: ${accentColor}; background: white;"></div>
                        <div class="flex-1"></div>
                    </div>
                `;
            }).join('');
            stepsHTML = `
                <div class="relative">
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" style="background: ${accentColor}"></div>
                    ${stepsHTML}
                </div>
            `;
        } else if (journeyStyle === 'vertical') {
            stepsHTML = steps.map((step, index) => {
                const parts = step.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const description = parts[2] || '';

                return `
                    <div class="relative pl-12 pb-8 ${index === steps.length - 1 ? '' : 'border-l-2'}" style="border-color: ${accentColor}">
                        <div class="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: ${accentColor}">${index + 1}</div>
                        <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                            <div class="text-sm font-semibold mb-2" style="color: ${accentColor}">${date}</div>
                            <h3 class="text-xl font-bold mb-2 text-gray-900">${event}</h3>
                            <p class="text-gray-700">${description}</p>
                        </div>
                    </div>
                `;
            }).join('');
            stepsHTML = `<div class="max-w-3xl mx-auto">${stepsHTML}</div>`;
        } else if (journeyStyle === 'roadmap') {
            stepsHTML = steps.map((step, index) => {
                const parts = step.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const description = parts[2] || '';

                return `
                    <div class="relative mb-8">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0">
                                <div class="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); box-shadow: 0 4px 12px ${accentColor}40;">
                                    📍
                                </div>
                                ${index < steps.length - 1 ? `<div class="w-1 h-16 mx-auto mt-2" style="background: ${accentColor}40;"></div>` : ''}
                            </div>
                            <div class="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                                <div class="text-sm font-bold mb-2 tracking-wide" style="color: ${accentColor}">${date}</div>
                                <h3 class="text-2xl font-bold mb-3 text-gray-900">${event}</h3>
                                <p class="text-gray-700 leading-relaxed">${description}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        } else if (journeyStyle === 'path') {
            stepsHTML = `
                <div class="relative">
                    <svg class="absolute w-full h-full" style="top: 0; left: 0;">
                        <path d="M 50 50 Q 200 100, 350 50 T 650 50" stroke="${accentColor}40" stroke-width="3" fill="none" stroke-dasharray="10,5"/>
                    </svg>
                    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${steps.map((step, index) => {
                            const parts = step.split('|').map(p => p.trim());
                            const date = parts[0] || '';
                            const event = parts[1] || '';
                            const description = parts[2] || '';

                            return `
                                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accentColor}">
                                            ${index + 1}
                                        </div>
                                        <div class="text-sm font-bold" style="color: ${accentColor}">${date}</div>
                                    </div>
                                    <h3 class="text-xl font-bold mb-2 text-gray-900">${event}</h3>
                                    <p class="text-gray-700">${description}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        } else if (journeyStyle === 'cards') {
            stepsHTML = `
                <div class="grid md:grid-cols-2 gap-6">
                    ${steps.map((step, index) => {
                        const parts = step.split('|').map(p => p.trim());
                        const date = parts[0] || '';
                        const event = parts[1] || '';
                        const description = parts[2] || '';

                        return `
                            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                                <div class="h-3" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                                <div class="p-6">
                                    <div class="flex items-center gap-3 mb-4">
                                        <span class="text-3xl">🗺️</span>
                                        <div class="text-sm font-bold" style="color: ${accentColor}">${date}</div>
                                    </div>
                                    <h3 class="text-xl font-bold mb-3 text-gray-900">${event}</h3>
                                    <p class="text-gray-700 leading-relaxed">${description}</p>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (journeyStyle === 'pins') {
            stepsHTML = `
                <div class="grid md:grid-cols-3 gap-6">
                    ${steps.map((step) => {
                        const parts = step.split('|').map(p => p.trim());
                        const date = parts[0] || '';
                        const event = parts[1] || '';
                        const description = parts[2] || '';

                        return `
                            <div class="text-center">
                                <div class="relative inline-block mb-4">
                                    <div class="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40); border: 4px solid ${accentColor}">
                                        📍
                                    </div>
                                </div>
                                <div class="bg-white rounded-xl p-5 shadow-md">
                                    <div class="text-xs font-bold mb-2" style="color: ${accentColor}">${date}</div>
                                    <h3 class="text-lg font-bold mb-2 text-gray-900">${event}</h3>
                                    <p class="text-sm text-gray-600">${description}</p>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (journeyStyle === 'steps') {
            stepsHTML = `
                <div class="space-y-6">
                    ${steps.map((step, index) => {
                        const parts = step.split('|').map(p => p.trim());
                        const date = parts[0] || '';
                        const event = parts[1] || '';
                        const description = parts[2] || '';

                        return `
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0 text-center">
                                    <div class="w-20 h-20 rounded-lg flex flex-col items-center justify-center text-white shadow-lg" style="background: ${accentColor};">
                                        <div class="text-sm font-bold">STEP</div>
                                        <div class="text-3xl font-bold">${index + 1}</div>
                                    </div>
                                </div>
                                <div class="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                    <div class="flex items-center justify-between mb-3">
                                        <h3 class="text-xl font-bold text-gray-900">${event}</h3>
                                        <div class="text-sm font-semibold px-3 py-1 rounded-full" style="background: ${accentColor}20; color: ${accentColor}">${date}</div>
                                    </div>
                                    <p class="text-gray-700">${description}</p>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-12">
                        <div class="text-5xl mb-4">🗺️</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'Our Journey Together'}</h2>
                        ${data.description ? `<p class="text-lg text-gray-600 max-w-2xl mx-auto">${data.description}</p>` : ''}
                    </div>
                    ${stepsHTML}
                </div>
            </div>
        `;
    }
};
