// Future Dreams Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.futuredreams = {
    name: '🌟 Future Dreams',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Looking Forward" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Future Plans (one per line)</label>
                <textarea placeholder="Travel the world together&#10;Watch our children grow&#10;Grow old side by side&#10;Create more beautiful memories" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="dreams" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <input type="text" placeholder="Here's to many more years together!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="closing" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic List</option>
                    <option value="grid">Grid Cards</option>
                    <option value="minimal">Minimal</option>
                    <option value="elegant">Elegant</option>
                    <option value="timeline">Timeline</option>
                    <option value="numbered">Numbered</option>
                    <option value="stars">Star Dreams</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm" selected>Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#ef4444';
        const cardBg = style.cardBg || '#fef2f2';
        const shadow = style.shadow || 'sm';
        const borderRadius = style.borderRadius || 'lg';

        const shadowClasses = { none: '', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
        const borderRadiusClasses = { sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };

        const dreams = data.dreams ? data.dreams.split('\n').filter(d => d.trim()) : [];

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🌟</div>
                        <h2 class="text-2xl font-bold mb-8">${data.title || 'Looking Forward'}</h2>
                        <div class="space-y-3 mb-6">
                            ${dreams.length > 0 ? dreams.map(dream => `
                                <div class="p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} flex items-center gap-3" style="background: ${cardBg}">
                                    <div style="color: ${accentColor}">✨</div>
                                    <div class="text-left">${dream}</div>
                                </div>
                            `).join('') : '<p class="text-gray-500">Add your future dreams...</p>'}
                        </div>
                        ${data.closing ? `<p class="text-lg font-semibold mt-6" style="color: ${accentColor}">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'grid') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">🌟</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Looking Forward'}</h2>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4 mb-6">
                            ${dreams.length > 0 ? dreams.map((dream, idx) => `
                                <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} text-center transition hover:scale-105" style="background: ${cardBg}">
                                    <div class="text-3xl mb-2">✨</div>
                                    <p class="text-gray-700">${dream}</p>
                                </div>
                            `).join('') : '<div class="col-span-2 text-center text-gray-500">Add your future dreams...</div>'}
                        </div>
                        ${data.closing ? `<p class="text-center text-lg font-semibold" style="color: ${accentColor}">${data.closing}</p>` : ''}
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${bg}">
                <div class="max-w-2xl mx-auto p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                    <div class="text-4xl mb-4">🌟</div>
                    <h2 class="text-2xl font-bold mb-6">${data.title || 'Looking Forward'}</h2>
                    <div class="space-y-2 mb-6">
                        ${dreams.length > 0 ? dreams.map(dream => `
                            <p class="text-gray-700"><span style="color: ${accentColor}">✨</span> ${dream}</p>
                        `).join('') : '<p class="text-gray-500">Add your future dreams...</p>'}
                    </div>
                    ${data.closing ? `<p class="text-lg font-semibold" style="color: ${accentColor}">${data.closing}</p>` : ''}
                </div>
            </div>
        `;
    }
};
