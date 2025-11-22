// Press/Media Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.press = {
    name: '📰 Press & Media',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Press & Media" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="We've been featured in..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div class="border-t pt-4 mt-4">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-medium text-gray-700">Press Mentions</h4>
                    <button onclick="addDynamicItem('${sectionId}', 'press'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Press Item</button>
                </div>
                <div data-items-container="press"></div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="magazine">Magazine Style</option>
                    <option value="timeline">Timeline</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f97316" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#fef3f2';
        const accentColor = style.accent || '#f97316';
        const title = data.title || 'Press & Media';
        const description = data.description || '';

        const pressItems = [];
        Object.keys(data).forEach(key => {
            const match = key.match(/^press-publication-(.+)$/);
            if (match) {
                const id = match[1];
                pressItems.push({
                    publication: data[`press-publication-${id}`],
                    headline: data[`press-headline-${id}`],
                    date: data[`press-date-${id}`],
                    url: data[`press-url-${id}`]
                });
            }
        });

        const headerHtml = `
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold mb-2">${title}</h2>
                ${description ? `<p class="text-sm text-gray-600">${description}</p>` : ''}
            </div>
        `;

        if (pressItems.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    ${headerHtml}
                    <div class="text-center text-gray-500 text-sm">Add press mentions to display</div>
                </div>
            `;
        }

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${pressItems.map(item => `
                                <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition">
                                    <div class="flex items-start gap-3">
                                        <div class="text-2xl">📰</div>
                                        <div class="flex-1">
                                            <div class="text-xs font-bold mb-1" style="color: ${accentColor};">${item.publication || 'Publication'}</div>
                                            <h3 class="text-sm font-bold mb-1">${item.headline || 'Headline'}</h3>
                                            ${item.date ? `<p class="text-xs text-gray-500">${item.date}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'magazine':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${pressItems.map(item => `
                                <div class="bg-white rounded-xl p-5 shadow-lg border-t-4" style="border-color: ${accentColor};">
                                    <div class="flex items-center gap-2 mb-2">
                                        <div class="text-2xl">📰</div>
                                        <div class="text-xs font-bold" style="color: ${accentColor};">${item.publication || 'Publication'}</div>
                                        ${item.date ? `<div class="ml-auto text-xs text-gray-500">${item.date}</div>` : ''}
                                    </div>
                                    <h3 class="text-sm font-bold mb-2">${item.headline || 'Headline'}</h3>
                                    ${item.url ? `<a href="${item.url}" class="text-xs" style="color: ${accentColor};">Read Article →</a>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${pressItems.map((item, idx) => `
                                <div class="flex gap-4">
                                    <div class="flex flex-col items-center">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white flex-shrink-0" style="background: ${accentColor};">
                                            📰
                                        </div>
                                        ${idx < pressItems.length - 1 ? `<div class="w-0.5 flex-1 my-2" style="background: ${accentColor}40;"></div>` : ''}
                                    </div>
                                    <div class="flex-1 pb-6">
                                        <div class="bg-white rounded-lg p-4 shadow-sm">
                                            ${item.date ? `<div class="text-xs text-gray-500 mb-1">${item.date}</div>` : ''}
                                            <div class="text-xs font-bold mb-1" style="color: ${accentColor};">${item.publication || 'Publication'}</div>
                                            <h3 class="text-sm font-bold">${item.headline || 'Headline'}</h3>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${pressItems.map(item => `
                                <div class="border-l-4 pl-4" style="border-color: ${accentColor};">
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="text-lg">📰</span>
                                        <div class="text-xs font-bold" style="color: ${accentColor};">${item.publication || 'Publication'}</div>
                                        ${item.date ? `<div class="ml-auto text-xs text-gray-500">${item.date}</div>` : ''}
                                    </div>
                                    <h3 class="text-sm font-bold pl-7">${item.headline || 'Headline'}</h3>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${pressItems.map(item => `
                                <div class="bg-white rounded-lg p-4 shadow-md">
                                    <div class="text-xs font-bold mb-1" style="color: ${accentColor};">${item.publication || 'Publication'}</div>
                                    <h3 class="text-sm font-bold mb-1">${item.headline || 'Headline'}</h3>
                                    ${item.date ? `<p class="text-xs text-gray-500">${item.date}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
        }
    }
};
