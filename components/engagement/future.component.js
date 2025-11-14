// Future Plans Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.future = {
    name: '🌟 Future Plans',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Future Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wedding Date (if set)</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="weddingdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Share your future plans and dreams..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="dreamy">Dreamy Gradient</option>
                    <option value="card">Card with Icon</option>
                    <option value="banner">Banner Style</option>
                    <option value="timeline">Timeline View</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bg = style.bg || '#fdf2f8';
        const accent = style.accent || '#ec4899';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'dreamy') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${accent}20 100%); color: ${textColor}">
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-10 left-10 text-7xl">✨</div>
                        <div class="absolute top-20 right-20 text-5xl">💫</div>
                        <div class="absolute bottom-10 left-1/4 text-6xl">🌟</div>
                        <div class="absolute bottom-20 right-10 text-4xl">⭐</div>
                    </div>
                    <div class="relative max-w-2xl mx-auto text-center">
                        <div class="inline-block p-4 rounded-full mb-6 shadow-xl" style="background: ${accent};">
                            <span class="text-5xl">🌟</span>
                        </div>
                        <h2 class="text-4xl font-bold mb-6">${data.title || 'Our Future Together'}</h2>
                        ${data.weddingdate ? `
                        <div class="mb-6 p-6 bg-white bg-opacity-90 rounded-2xl shadow-xl inline-block">
                            <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accent};">Save the Date</div>
                            <div class="text-2xl font-bold" style="color: ${accent};">${new Date(data.weddingdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                        </div>
                        ` : ''}
                        <p class="text-lg leading-relaxed max-w-xl mx-auto">${data.message || 'We are excited to start this new chapter together and look forward to celebrating with you!'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="p-8 rounded-2xl shadow-xl" style="background: white;">
                            <div class="flex items-start gap-6">
                                <div class="flex-shrink-0 p-4 rounded-full" style="background: ${accent}20;">
                                    <span class="text-5xl">🌟</span>
                                </div>
                                <div class="flex-1">
                                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Our Future Together'}</h2>
                                    ${data.weddingdate ? `
                                    <div class="mb-4 p-4 rounded-lg" style="background: ${accent}10;">
                                        <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent};">Save the Date</div>
                                        <div class="font-bold" style="color: ${accent};">${new Date(data.weddingdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                    </div>
                                    ` : ''}
                                    <p class="leading-relaxed">${data.message || 'We are excited to start this new chapter together and look forward to celebrating with you!'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <div class="p-8 rounded-3xl shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%); color: white;">
                            <div class="text-center">
                                <div class="text-6xl mb-4">🌟</div>
                                <h2 class="text-3xl font-bold mb-4">${data.title || 'Our Future Together'}</h2>
                                <p class="text-lg mb-6 opacity-90">${data.message || 'We are excited to start this new chapter together and look forward to celebrating with you!'}</p>
                                ${data.weddingdate ? `
                                <div class="inline-block px-8 py-4 bg-white rounded-full" style="color: ${accent};">
                                    <div class="text-xs uppercase tracking-wide mb-1 font-semibold">Save the Date</div>
                                    <div class="text-xl font-bold">${new Date(data.weddingdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-4">🌟</div>
                            <h2 class="text-3xl font-bold">${data.title || 'Our Future Together'}</h2>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex-1 text-center">
                                <div class="text-3xl mb-2">💑</div>
                                <div class="text-sm font-semibold">Now</div>
                                <div class="text-xs text-gray-500">Engaged</div>
                            </div>
                            <div class="flex-1">
                                <div class="h-1 rounded-full" style="background: linear-gradient(90deg, ${accent} 0%, ${accent}40 100%);"></div>
                            </div>
                            ${data.weddingdate ? `
                            <div class="flex-1 text-center">
                                <div class="text-3xl mb-2">💍</div>
                                <div class="text-sm font-semibold" style="color: ${accent};">${new Date(data.weddingdate).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</div>
                                <div class="text-xs text-gray-500">Wedding Day</div>
                            </div>
                            ` : `
                            <div class="flex-1 text-center">
                                <div class="text-3xl mb-2">💍</div>
                                <div class="text-xs text-gray-500">Wedding Day</div>
                            </div>
                            `}
                        </div>
                        <p class="text-center leading-relaxed mt-8">${data.message || 'We are excited to start this new chapter together and look forward to celebrating with you!'}</p>
                    </div>
                </div>
            `;
        } else {
            // Centered Classic (default)
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🌟</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Our Future Together'}</h2>
                        ${data.weddingdate ? `<div class="mb-4 p-4 bg-white rounded-lg shadow-md"><div class="text-xs text-gray-500 mb-1">Save the Date</div><div class="font-bold" style="color: ${accent};">${new Date(data.weddingdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div></div>` : ''}
                        <p class="leading-relaxed">${data.message || 'We are excited to start this new chapter together and look forward to celebrating with you!'}</p>
                    </div>
                </div>
            `;
        }
    }
};
