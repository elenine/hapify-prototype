// Achievements & Awards Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.achievements = {
    name: '🏆 Achievements & Awards',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Awards & Recognition" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievements (one per line)</label>
                <textarea placeholder="Employee of the Year 2020&#10;Leadership Excellence Award&#10;Innovation Award&#10;30 Years Service Award" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="achievements" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid Cards</option>
                    <option value="badges">Badge Style</option>
                    <option value="list">List View</option>
                    <option value="ribbon">Ribbon Style</option>
                    <option value="trophy">Trophy Display</option>
                    <option value="elegant">Elegant Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'grid';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#f59e0b';
        const textColor = style.text || '#1f2937';
        const achievements = data.achievements ? data.achievements.split('\n').filter(a => a.trim()) : [];

        switch(layout) {
            case 'grid':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Awards & Recognition'}</h2>
                        <div class="max-w-md mx-auto grid grid-cols-1 gap-4">
                            ${achievements.length > 0 ? achievements.map(achievement => `
                                <div class="flex items-start gap-3 p-4 rounded-lg shadow-md" style="background: ${accentColor}20;">
                                    <div class="text-3xl">🏆</div>
                                    <div class="flex-1">
                                        <p class="font-semibold">${achievement}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add achievements</p>'}
                        </div>
                    </div>
                `;

            case 'badges':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Awards & Recognition'}</h2>
                        <div class="max-w-md mx-auto flex flex-wrap gap-3 justify-center">
                            ${achievements.length > 0 ? achievements.map(achievement => `
                                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-md" style="background: ${accentColor}; color: white;">
                                    <span class="text-lg">🏆</span>
                                    <span class="text-sm font-medium">${achievement}</span>
                                </div>
                            `).join('') : '<p class="w-full text-center opacity-50">Add achievements</p>'}
                        </div>
                    </div>
                `;

            case 'list':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-2">${data.title || 'Awards & Recognition'}</h2>
                            <div class="w-16 h-1 rounded-full mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-3 text-left">
                                ${achievements.length > 0 ? achievements.map(achievement => `
                                    <div class="flex items-start gap-3 pb-3 border-b" style="border-color: ${accentColor}20;">
                                        <span class="text-xl" style="color: ${accentColor};">🏆</span>
                                        <span class="font-medium">${achievement}</span>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add achievements</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Awards & Recognition'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${achievements.length > 0 ? achievements.map(achievement => `
                                <div class="relative p-4 pl-6 bg-white rounded-r-lg shadow-md" style="border-left: 6px solid ${accentColor};">
                                    <div class="flex items-center gap-3">
                                        <span class="text-2xl">🏆</span>
                                        <p class="font-semibold">${achievement}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add achievements</p>'}
                        </div>
                    </div>
                `;

            case 'trophy':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold mb-8">${data.title || 'Awards & Recognition'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${achievements.length > 0 ? achievements.map(achievement => `
                                <div class="p-6 bg-white rounded-xl shadow-lg" style="border-top: 4px solid ${accentColor};">
                                    <div class="text-4xl mb-3">🏆</div>
                                    <p class="font-semibold text-lg">${achievement}</p>
                                </div>
                            `).join('') : '<p class="opacity-50">Add achievements</p>'}
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-8">
                                <div class="flex justify-center gap-1 mb-4">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                </div>
                                <h2 class="text-2xl font-serif">${data.title || 'Awards & Recognition'}</h2>
                                <div class="w-24 h-0.5 mx-auto mt-3" style="background: ${accentColor};"></div>
                            </div>
                            <div class="space-y-4 text-left">
                                ${achievements.length > 0 ? achievements.map((achievement, index) => `
                                    <div class="flex items-start gap-3 p-4 rounded-lg" style="background: ${accentColor}10;">
                                        <span class="font-serif font-bold" style="color: ${accentColor};">${index + 1}.</span>
                                        <p class="flex-1 font-medium">${achievement}</p>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add achievements</p>'}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Awards & Recognition'}</h2>
                        <div class="max-w-md mx-auto grid grid-cols-1 gap-4">
                            ${achievements.length > 0 ? achievements.map(achievement => `
                                <div class="flex items-start gap-3 p-4 rounded-lg shadow-md" style="background: ${accentColor}20;">
                                    <div class="text-3xl">🏆</div>
                                    <div class="flex-1">
                                        <p class="font-semibold">${achievement}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add achievements</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
