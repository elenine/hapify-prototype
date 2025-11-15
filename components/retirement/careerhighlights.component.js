// Career Highlights Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.careerhighlights = {
    name: '⭐ Career Highlights',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Career Highlights" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accomplishments (one per line)</label>
                <textarea placeholder="Led major project initiatives&#10;Mentored countless team members&#10;Received excellence awards&#10;Built lasting partnerships" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="highlights" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card List</option>
                    <option value="timeline">Timeline View</option>
                    <option value="grid">Grid Layout</option>
                    <option value="minimal">Minimal List</option>
                    <option value="badges">Badge Style</option>
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
        const highlights = data.highlights ? data.highlights.split('\n').filter(h => h.trim()) : [];

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Highlights'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${highlights.length > 0 ? highlights.map(highlight => `
                                <div class="flex items-start gap-3 p-4 rounded-lg shadow-sm" style="background: ${accentColor}20;">
                                    <div class="mt-1" style="color: ${accentColor};">⭐</div>
                                    <div>${highlight}</div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add career highlights</p>'}
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Highlights'}</h2>
                        <div class="max-w-md mx-auto">
                            <div class="relative pl-8 space-y-6">
                                <div class="absolute left-2 top-2 bottom-2 w-0.5" style="background: ${accentColor};"></div>
                                ${highlights.length > 0 ? highlights.map((highlight, index) => `
                                    <div class="relative">
                                        <div class="absolute left-[-2rem] top-1 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                        <div class="flex items-start gap-3">
                                            <div class="text-xl">⭐</div>
                                            <div>${highlight}</div>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add career highlights</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'grid':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Highlights'}</h2>
                        <div class="max-w-md mx-auto">
                            <div class="grid grid-cols-1 gap-4">
                                ${highlights.length > 0 ? highlights.map((highlight, index) => `
                                    <div class="p-4 rounded-xl shadow-md text-center" style="background: linear-gradient(135deg, ${accentColor}20 0%, ${accentColor}10 100%);">
                                        <div class="text-3xl mb-2">⭐</div>
                                        <p class="text-sm font-medium">${highlight}</p>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add career highlights</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-2">${data.title || 'Career Highlights'}</h2>
                            <div class="w-16 h-1 rounded-full mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-3 text-left">
                                ${highlights.length > 0 ? highlights.map(highlight => `
                                    <div class="flex items-start gap-3 pb-3 border-b" style="border-color: ${accentColor}20;">
                                        <span style="color: ${accentColor};">⭐</span>
                                        <span>${highlight}</span>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add career highlights</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'badges':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Highlights'}</h2>
                        <div class="max-w-md mx-auto">
                            <div class="flex flex-wrap gap-3 justify-center">
                                ${highlights.length > 0 ? highlights.map(highlight => `
                                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm" style="background: ${accentColor}; color: white;">
                                        <span>⭐</span>
                                        <span class="text-sm font-medium">${highlight}</span>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add career highlights</p>'}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Highlights'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${highlights.length > 0 ? highlights.map(highlight => `
                                <div class="flex items-start gap-3 p-4 rounded-lg" style="background: ${accentColor}20;">
                                    <div style="color: ${accentColor};">⭐</div>
                                    <div>${highlight}</div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add career highlights</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
