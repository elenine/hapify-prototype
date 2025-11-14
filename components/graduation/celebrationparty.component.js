// Celebration Party Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebrationparty = {
    name: '🥳 Celebration Party',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Title</label>
                <input type="text" placeholder="Graduation Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Date & Time</label>
                <input type="text" placeholder="Following the ceremony" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="datetime" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <textarea placeholder="Party venue details..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="location" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="festive">Festive Banner</option>
                    <option value="elegant">Elegant Card</option>
                    <option value="modern">Modern Split</option>
                    <option value="playful">Playful Balloons</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'festive';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';
        const text = style.text || '#1f2937';

        switch(layout) {
            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-lg mx-auto">
                            <div class="bg-white rounded-3xl shadow-xl p-8 border-t-8" style="border-color: ${accent}">
                                <div class="text-center mb-6">
                                    <div class="inline-block p-4 rounded-full mb-4" style="background: ${accent}15">
                                        <span class="text-5xl">🥳</span>
                                    </div>
                                    <h2 class="text-3xl font-bold mb-2" style="color: ${accent}">${data.title || 'Celebration Party'}</h2>
                                    <div class="w-16 h-1 rounded mx-auto" style="background: ${accent}"></div>
                                </div>
                                ${data.datetime ? `
                                    <div class="flex items-center gap-3 mb-4 p-4 rounded-xl" style="background: ${accent}10">
                                        <span class="text-2xl">🕐</span>
                                        <span class="font-medium">${data.datetime}</span>
                                    </div>
                                ` : ''}
                                ${data.location ? `
                                    <div class="flex items-start gap-3 p-4 rounded-xl" style="background: ${accent}10">
                                        <span class="text-2xl">📍</span>
                                        <span class="text-sm">${data.location}</span>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-3xl mx-auto">
                            <div class="rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                                <div class="flex-1 p-8" style="background: ${accent}; color: white">
                                    <div class="text-6xl mb-4">🥳</div>
                                    <h2 class="text-3xl font-bold mb-4">${data.title || 'Celebration Party'}</h2>
                                    <p class="text-sm opacity-90">Join us for an unforgettable celebration!</p>
                                </div>
                                <div class="flex-1 bg-white p-8">
                                    ${data.datetime ? `
                                        <div class="mb-6">
                                            <div class="text-xs font-semibold mb-2" style="color: ${accent}">WHEN</div>
                                            <div class="font-semibold text-lg">${data.datetime}</div>
                                        </div>
                                    ` : ''}
                                    ${data.location ? `
                                        <div>
                                            <div class="text-xs font-semibold mb-2" style="color: ${accent}">WHERE</div>
                                            <div class="text-sm">${data.location}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'playful':
                return `
                    <div class="py-12 px-6 relative overflow-hidden" style="background: ${bg}; color: ${text}">
                        <div class="absolute top-0 left-0 text-6xl opacity-20">🎈</div>
                        <div class="absolute top-10 right-10 text-5xl opacity-20">🎊</div>
                        <div class="absolute bottom-0 left-1/4 text-5xl opacity-20">🎉</div>
                        <div class="max-w-md mx-auto text-center relative z-10">
                            <div class="flex justify-center gap-3 mb-6">
                                <span class="text-5xl">🎈</span>
                                <span class="text-6xl">🥳</span>
                                <span class="text-5xl">🎈</span>
                            </div>
                            <h2 class="text-3xl font-bold mb-6" style="color: ${accent}">${data.title || 'Celebration Party'}</h2>
                            ${data.datetime ? `
                                <div class="mb-4 p-4 bg-white rounded-2xl shadow-md">
                                    <div class="text-xs font-semibold mb-1" style="color: ${accent}">🕐 Party Time</div>
                                    <div class="font-bold">${data.datetime}</div>
                                </div>
                            ` : ''}
                            ${data.location ? `
                                <div class="p-4 bg-white rounded-2xl shadow-md">
                                    <div class="text-xs font-semibold mb-1" style="color: ${accent}">📍 Location</div>
                                    <div class="text-sm">${data.location}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'festive':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-md mx-auto text-center">
                            <div class="text-5xl mb-4">🥳</div>
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Celebration Party'}</h2>
                            ${data.datetime ? `<p class="mb-3 font-medium">${data.datetime}</p>` : ''}
                            ${data.location ? `<div class="p-4 bg-white rounded-lg shadow-sm"><p class="text-sm">${data.location}</p></div>` : ''}
                        </div>
                    </div>
                `;
        }
    }`
};
