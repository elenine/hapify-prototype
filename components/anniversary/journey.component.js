// Journey Together Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.journey = {
    name: '🛤️ Journey Together',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Journey Highlights (one per line)</label>
                <textarea placeholder="First met in college&#10;Got engaged in Paris&#10;Welcomed our first child&#10;Built our dream home" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="highlights" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="list">List - Simple Items</option>
                    <option value="timeline">Timeline - Vertical Flow</option>
                    <option value="cards">Cards - Boxed Items</option>
                    <option value="steps">Steps - Numbered Path</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'list';
        const accentColor = style.accentColor || '#dc2626';
        const bg = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';

        const highlights = data.highlights ? data.highlights.split('\n').filter(h => h.trim()) : [];

        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${highlights.map(highlight => `
                            <div class="flex items-start gap-3 p-4 rounded-lg" style="background: ${cardBg}">
                                <div class="mt-1" style="color: ${accentColor}">❤️</div>
                                <div>${highlight}</div>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-md mx-auto relative">
                        <div class="absolute left-4 top-0 bottom-0 w-1" style="background: ${accentColor}"></div>
                        <div class="space-y-6 relative">
                            ${highlights.map(highlight => `
                                <div class="flex gap-4">
                                    <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative z-10" style="background: ${accentColor}">
                                        <div class="text-white text-xs">❤</div>
                                    </div>
                                    <div class="flex-1 pt-1">
                                        <div class="p-3 rounded-lg" style="background: ${cardBg}">
                                            ${highlight}
                                        </div>
                                    </div>
                                </div>
                            `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${highlights.map(highlight => `
                            <div class="p-6 rounded-lg shadow-md text-center" style="background: ${cardBg}; border-top: 4px solid ${accentColor}">
                                <div class="text-3xl mb-3" style="color: ${accentColor}">❤️</div>
                                <p class="text-gray-700">${highlight}</p>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500 col-span-2">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        if (layout === 'steps') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Journey'}</h2>
                    <div class="max-w-md mx-auto space-y-4">
                        ${highlights.map((highlight, idx) => `
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style="background: ${accentColor}">
                                    ${idx + 1}
                                </div>
                                <div class="flex-1 pt-2">
                                    <div class="p-4 rounded-lg" style="background: ${cardBg}">
                                        ${highlight}
                                    </div>
                                </div>
                            </div>
                        `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Journey'}</h2>
                <div class="max-w-md mx-auto space-y-4">
                    ${highlights.map(highlight => `
                        <div class="flex items-start gap-3 p-4 rounded-lg" style="background: ${cardBg}">
                            <div class="mt-1" style="color: ${accentColor}">❤️</div>
                            <div>${highlight}</div>
                        </div>
                    `).join('') || '<p class="text-center text-gray-500">Add journey highlights</p>'}
                </div>
            </div>
        `;
    }
};
