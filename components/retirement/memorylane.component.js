// Memory Lane Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memorylane = {
    name: '🛤️ Memory Lane',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Memory Lane" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memorable Stories (one per line)</label>
                <textarea placeholder="The time you saved the day...&#10;Your legendary presentations&#10;Coffee break conversations&#10;Team building moments" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="stories" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Style</option>
                    <option value="timeline">Timeline View</option>
                    <option value="bubbles">Speech Bubbles</option>
                    <option value="scrapbook">Scrapbook Style</option>
                    <option value="minimal">Minimal List</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
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
        const bgColor = style.bg || '#ecfeff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';
        const stories = data.stories ? data.stories.split('\n').filter(s => s.trim()) : [];

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memory Lane'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${stories.length > 0 ? stories.map(story => `
                                <div class="p-4 bg-white rounded-lg shadow-md">
                                    <div class="flex items-start gap-3">
                                        <div class="text-xl" style="color: ${accentColor};">💭</div>
                                        <p class="leading-relaxed">${story}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add memorable stories</p>'}
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memory Lane'}</h2>
                        <div class="max-w-md mx-auto">
                            <div class="relative pl-8 space-y-6">
                                <div class="absolute left-2 top-2 bottom-2 w-0.5" style="background: ${accentColor};"></div>
                                ${stories.length > 0 ? stories.map((story, index) => `
                                    <div class="relative">
                                        <div class="absolute left-[-2rem] top-2 w-4 h-4 rounded-full" style="background: ${accentColor};"></div>
                                        <div class="p-4 bg-white rounded-lg shadow-sm">
                                            <div class="flex items-start gap-2">
                                                <span class="text-xl">💭</span>
                                                <p class="text-sm leading-relaxed">${story}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add memorable stories</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'bubbles':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memory Lane'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${stories.length > 0 ? stories.map((story, index) => {
                                const isLeft = index % 2 === 0;
                                return `
                                    <div class="flex ${isLeft ? 'justify-start' : 'justify-end'}">
                                        <div class="relative max-w-[85%] p-4 rounded-2xl shadow-md ${isLeft ? 'rounded-tl-none' : 'rounded-tr-none'}" style="background: ${isLeft ? 'white' : accentColor + '20'};">
                                            <div class="flex items-start gap-2">
                                                <span class="text-lg">💭</span>
                                                <p class="text-sm leading-relaxed">${story}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center opacity-50">Add memorable stories</p>'}
                        </div>
                    </div>
                `;

            case 'scrapbook':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memory Lane'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${stories.length > 0 ? stories.map((story, index) => {
                                const rotations = ['-2deg', '1deg', '-1deg', '2deg', '-3deg'];
                                const rotation = rotations[index % rotations.length];
                                return `
                                    <div class="bg-white p-5 rounded-lg shadow-lg transform" style="rotate: ${rotation}; border-left: 4px solid ${accentColor};">
                                        <div class="flex items-start gap-3 mb-3">
                                            <span class="text-2xl">💭</span>
                                            <p class="text-sm leading-relaxed italic">${story}</p>
                                        </div>
                                        <div class="flex gap-1 justify-end">
                            <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                            <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                            <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center opacity-50">Add memorable stories</p>'}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-2">${data.title || 'Memory Lane'}</h2>
                            <div class="w-16 h-1 rounded-full mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-4 text-left">
                                ${stories.length > 0 ? stories.map(story => `
                                    <div class="pb-4 border-b" style="border-color: ${accentColor}20;">
                                        <div class="flex items-start gap-3">
                                            <span style="color: ${accentColor};">💭</span>
                                            <p class="text-sm leading-relaxed">${story}</p>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add memorable stories</p>'}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memory Lane'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${stories.length > 0 ? stories.map(story => `
                                <div class="p-4 bg-white rounded-lg shadow-sm">
                                    <div class="flex items-start gap-3">
                                        <div style="color: ${accentColor};">💭</div>
                                        <p>${story}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add memorable stories</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
