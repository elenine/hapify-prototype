// Registry Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.registry = {
    name: '🎁 Registry',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Title</label>
                <input type="text" placeholder="Gift Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="link" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Your presence is the best gift..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Center</option>
                    <option value="card">Gift Card</option>
                    <option value="banner">Elegant Banner</option>
                    <option value="wrapped">Gift Wrap Theme</option>
                    <option value="modern">Modern CTA</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bg = style.bg || '#fdf2f8';
        const accent = style.accent || '#ec4899';
        const buttonColor = style.buttonColor || '#e11d48';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'card') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                            <div class="absolute top-0 right-0 w-32 h-32 opacity-10" style="background: linear-gradient(135deg, ${accent} 0%, transparent 100%);"></div>
                            <div class="relative">
                                <div class="inline-block p-4 rounded-full mb-6 shadow-lg" style="background: ${accent}20;">
                                    <span class="text-5xl">🎁</span>
                                </div>
                                <h2 class="text-3xl font-bold mb-4">${data.title || 'Gift Registry'}</h2>
                                <p class="text-gray-600 mb-6 leading-relaxed">${data.message || 'Your presence is the best gift!'}</p>
                                ${data.link ? `<a href="${data.link}" target="_blank" class="inline-block px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-md text-white" style="background: ${buttonColor};">View Registry</a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <div class="p-10 rounded-3xl shadow-2xl text-center text-white" style="background: linear-gradient(135deg, ${accent} 0%, ${buttonColor} 100%);">
                            <div class="text-6xl mb-6">🎁</div>
                            <h2 class="text-4xl font-bold mb-4">${data.title || 'Gift Registry'}</h2>
                            <p class="text-lg mb-8 opacity-90 max-w-xl mx-auto">${data.message || 'Your presence is the best gift!'}</p>
                            ${data.link ? `<a href="${data.link}" target="_blank" class="inline-block bg-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition text-lg" style="color: ${buttonColor};">View Our Registry</a>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'wrapped') {
            return `
                <div class="relative py-16 px-6 overflow-hidden" style="background: ${bg}; color: ${textColor}">
                    <div class="absolute inset-0 opacity-5">
                        <div class="absolute top-10 left-10 text-8xl">🎁</div>
                        <div class="absolute top-20 right-20 text-6xl">🎀</div>
                        <div class="absolute bottom-20 left-1/4 text-7xl">🎁</div>
                        <div class="absolute bottom-10 right-10 text-5xl">🎀</div>
                    </div>
                    <div class="relative max-w-2xl mx-auto text-center">
                        <div class="inline-block p-6 rounded-2xl mb-6 shadow-xl" style="background: linear-gradient(135deg, ${accent}20 0%, ${accent}40 100%);">
                            <span class="text-6xl">🎁</span>
                        </div>
                        <h2 class="text-3xl font-bold mb-4">${data.title || 'Gift Registry'}</h2>
                        <div class="p-8 bg-white rounded-2xl shadow-lg mb-6 max-w-xl mx-auto">
                            <p class="text-gray-600 leading-relaxed">${data.message || 'Your presence is the best gift!'}</p>
                        </div>
                        ${data.link ? `<a href="${data.link}" target="_blank" class="inline-block px-8 py-4 rounded-lg font-bold hover:shadow-xl transition text-white shadow-lg" style="background: ${buttonColor};">🎀 View Registry</a>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div class="text-center md:text-left">
                            <div class="inline-block text-7xl mb-4">🎁</div>
                            <h2 class="text-4xl font-bold mb-4">${data.title || 'Gift Registry'}</h2>
                            <p class="text-gray-600 text-lg leading-relaxed">${data.message || 'Your presence is the best gift!'}</p>
                        </div>
                        <div class="flex flex-col items-center md:items-end justify-center">
                            <div class="p-8 bg-white rounded-2xl shadow-xl text-center">
                                <div class="text-4xl mb-4" style="color: ${accent};">🎀</div>
                                ${data.link ? `<a href="${data.link}" target="_blank" class="inline-block px-10 py-4 rounded-lg font-bold hover:opacity-90 transition text-white text-lg shadow-lg" style="background: ${buttonColor};">View Registry</a>` : ''}
                                <p class="text-xs text-gray-500 mt-4">Click to see our wish list</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Simple Center (default)
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🎁</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Gift Registry'}</h2>
                        <p class="text-gray-600 mb-6">${data.message || 'Your presence is the best gift!'}</p>
                        ${data.link ? `<a href="${data.link}" target="_blank" class="inline-block px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-white" style="background: ${buttonColor};">View Registry</a>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
