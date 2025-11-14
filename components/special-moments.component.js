// Special Moments Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['special-moments'] = {
    name: '✨ Special Moments',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Moments We Cherish" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Moments</label>
                <div data-items-container="moments">
                    <!-- Dynamic moment items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'moments')" class="mt-3 w-full py-2 px-4 border-2 border-dashed border-rose-300 rounded-lg text-rose-600 hover:bg-rose-50 transition">
                    + Add Moment
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Modern Cards</option>
                    <option value="timeline">Timeline View</option>
                    <option value="masonry">Masonry Layout</option>
                    <option value="polaroid">Polaroid Stack</option>
                    <option value="badges">Badge Style</option>
                    <option value="scrapbook">Scrapbook Style</option>
                    <option value="memories">Memory Wall</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff7ed" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const moments = [];
        const container = document.querySelector(`[data-type="special-moments"] [data-items-container="moments"]`);
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const emoji = item.querySelector('[data-field="emoji"]')?.value || '✨';
                const title = item.querySelector('[data-field="title"]')?.value || '';
                const description = item.querySelector('[data-field="description"]')?.value || '';
                if (title) {
                    moments.push({ emoji, title, description });
                }
            });
        }

        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#fff7ed';
        const accentColor = style.accent || '#f59e0b';

        if (moments.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">${data.title || 'Moments We Cherish'}</h2>
                    <div class="max-w-5xl mx-auto text-center py-8 text-gray-500">
                        <p>Add special moments that you cherish together</p>
                    </div>
                </div>
            `;
        }

        let momentsHTML = '';

        if (layout === 'cards') {
            momentsHTML = `
                <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${moments.map(moment => `
                        <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                            <div class="text-4xl mb-3">${moment.emoji}</div>
                            <h3 class="text-xl font-bold mb-2 text-gray-900">${moment.title}</h3>
                            <p class="text-gray-700">${moment.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'timeline') {
            momentsHTML = `
                <div class="max-w-3xl mx-auto">
                    ${moments.map((moment, index) => `
                        <div class="relative pl-12 pb-8 ${index === moments.length - 1 ? '' : 'border-l-2'}\" style="border-color: ${accentColor}">
                            <div class="absolute -left-6 top-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-white shadow-lg" style="border: 3px solid ${accentColor}">
                                ${moment.emoji}
                            </div>
                            <div class="bg-white rounded-lg p-6 shadow-md">
                                <h3 class="text-xl font-bold mb-2" style="color: ${accentColor}">${moment.title}</h3>
                                <p class="text-gray-700">${moment.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'masonry') {
            const col1 = moments.filter((_, i) => i % 3 === 0);
            const col2 = moments.filter((_, i) => i % 3 === 1);
            const col3 = moments.filter((_, i) => i % 3 === 2);

            const renderColumn = (items) => items.map((moment, i) => {
                const heights = ['min-h-48', 'min-h-64', 'min-h-56'];
                const height = heights[i % heights.length];
                return `
                    <div class="${height} bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 mb-4 flex flex-col">
                        <div class="text-5xl mb-4">${moment.emoji}</div>
                        <h3 class="text-lg font-bold mb-2" style="color: ${accentColor}">${moment.title}</h3>
                        <p class="text-gray-700 flex-1">${moment.description}</p>
                    </div>
                `;
            }).join('');

            momentsHTML = `
                <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>${renderColumn(col1)}</div>
                    <div>${renderColumn(col2)}</div>
                    <div>${renderColumn(col3)}</div>
                </div>
            `;
        } else if (layout === 'polaroid') {
            momentsHTML = `
                <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
                    ${moments.map((moment, i) => {
                        const rotation = (i % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 2);
                        return `
                            <div class="transform hover:scale-110 transition" style="transform: rotate(${rotation}deg);">
                                <div class="bg-white p-5 shadow-2xl" style="width: 240px;">
                                    <div class="bg-gradient-to-br from-amber-50 to-orange-50 h-48 flex items-center justify-center mb-4 text-6xl">
                                        ${moment.emoji}
                                    </div>
                                    <h3 class="text-base font-bold mb-2 text-center text-gray-900">${moment.title}</h3>
                                    <p class="text-sm text-gray-600 text-center">${moment.description}</p>
                                    <div class="h-6"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (layout === 'badges') {
            momentsHTML = `
                <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
                    ${moments.map(moment => `
                        <div class="flex flex-col items-center text-center">
                            <div class="relative w-32 h-32 mb-4">
                                <div class="absolute inset-0 rounded-full" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); box-shadow: 0 8px 20px ${accentColor}40;"></div>
                                <div class="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                                    <div class="text-4xl">${moment.emoji}</div>
                                </div>
                                <!-- Badge ribbon -->
                                <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-12" style="background: ${accentColor}"></div>
                                <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                    <div class="flex">
                                        <div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 12px solid ${accentColor};"></div>
                                    </div>
                                </div>
                            </div>
                            <h3 class="text-lg font-bold mb-2 mt-6" style="color: ${accentColor}">${moment.title}</h3>
                            <p class="text-sm text-gray-700">${moment.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'scrapbook') {
            momentsHTML = `
                <div class="max-w-4xl mx-auto space-y-8">
                    ${moments.map((moment, i) => {
                        const isLeft = i % 2 === 0;
                        const rotation = (isLeft ? -1 : 1) * (Math.random() * 2 + 1);
                        return `
                            <div class="${isLeft ? 'text-left' : 'text-right'}">
                                <div class="inline-block transform hover:scale-105 transition" style="transform: rotate(${rotation}deg);">
                                    <div class="bg-white p-6 rounded-lg shadow-xl relative" style="border: 3px dashed ${accentColor}40;">
                                        <!-- Decorative tape -->
                                        <div class="absolute -top-3 ${isLeft ? 'left-8' : 'right-8'} w-20 h-6 opacity-60" style="background: linear-gradient(to right, transparent, ${accentColor}, transparent); transform: rotate(-5deg);"></div>

                                        <div class="flex items-start gap-4 mb-4">
                                            <div class="w-20 h-20 rounded-lg flex items-center justify-center text-4xl flex-shrink-0" style="background: ${accentColor}20;">
                                                ${moment.emoji}
                                            </div>
                                            <div class="flex-1 text-left">
                                                <h3 class="text-lg font-bold mb-2" style="color: ${accentColor}">${moment.title}</h3>
                                                <p class="text-sm text-gray-700">${moment.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (layout === 'memories') {
            momentsHTML = `
                <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${moments.map(moment => `
                        <div class="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
                            <div class="absolute inset-0 opacity-10" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);"></div>
                            <div class="relative z-10 p-8 flex items-start gap-4">
                                <div class="w-20 h-20 rounded-xl flex items-center justify-center text-4xl flex-shrink-0" style="background: ${accentColor};">
                                    ${moment.emoji}
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-xl font-bold mb-3 text-gray-900">${moment.title}</h3>
                                    <p class="text-gray-700 leading-relaxed">${moment.description}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="text-center mb-10">
                    <div class="text-5xl mb-4">✨</div>
                    <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Moments We Cherish'}</h2>
                </div>
                ${momentsHTML}
            </div>
        `;
    }
};
