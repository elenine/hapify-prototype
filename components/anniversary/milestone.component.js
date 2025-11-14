// Milestone Info Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.milestone = {
    name: '🎊 Milestone Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Years Together</label>
                <input type="number" placeholder="25" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="years" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="weddingdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone Description</label>
                <textarea placeholder="Celebrating a quarter century of love..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Centered Box</option>
                    <option value="badge">Badge - Large Number Display</option>
                    <option value="timeline">Timeline - Horizontal Layout</option>
                    <option value="celebration">Celebration - With Decorations</option>
                    <option value="elegant">Elegant - Minimalist Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="rounded">Rounded Corners</option>
                    <option value="sharp">Sharp Corners</option>
                    <option value="pill">Pill Shaped</option>
                    <option value="shadow">With Shadow</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="numberColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'card';
        const cardStyle = style.cardStyle || 'rounded';
        const numberColor = style.numberColor || '#dc2626';
        const bg = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#fef2f2';
        const textAlign = style.textAlign || 'center';

        const cardClasses = {
            rounded: 'rounded-lg',
            sharp: 'rounded-none',
            pill: 'rounded-full px-12',
            shadow: 'rounded-lg shadow-2xl'
        };

        const dateStr = data.weddingdate ? new Date(data.weddingdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : '';

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto text-${textAlign}">
                        <h2 class="text-2xl font-bold mb-6">Milestone</h2>
                        <div class="p-8 ${cardClasses[cardStyle]}" style="background: ${cardBg}">
                            <div class="text-6xl font-bold mb-2" style="color: ${numberColor}">${data.years || '0'}</div>
                            <div class="text-xl font-semibold mb-4">Years Together</div>
                            ${dateStr ? `<div class="text-sm text-gray-600 mb-4">Since ${dateStr}</div>` : ''}
                            ${data.description ? `<p class="text-gray-700 mt-4">${data.description}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Badge Layout
        if (layout === 'badge') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="inline-block p-12 ${cardClasses[cardStyle]} border-4" style="background: ${cardBg}; border-color: ${numberColor}">
                            <div class="text-8xl font-black mb-4" style="color: ${numberColor}">${data.years || '0'}</div>
                            <div class="text-2xl font-bold uppercase tracking-wider">Years</div>
                        </div>
                        ${dateStr ? `<p class="text-lg text-gray-600 mt-6">Married ${dateStr}</p>` : ''}
                        ${data.description ? `<p class="text-gray-700 mt-6 max-w-lg mx-auto">${data.description}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Timeline Layout
        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">Our Journey</h2>
                        <div class="flex items-center gap-8 ${cardClasses[cardStyle]} p-8" style="background: ${cardBg}">
                            <div class="flex-shrink-0 text-center">
                                <div class="text-6xl font-bold" style="color: ${numberColor}">${data.years || '0'}</div>
                                <div class="text-sm font-semibold mt-2">YEARS</div>
                            </div>
                            <div class="flex-shrink-0 text-4xl" style="color: ${numberColor}">→</div>
                            <div class="flex-1">
                                ${dateStr ? `<div class="text-lg font-semibold mb-2">Since ${dateStr}</div>` : ''}
                                ${data.description ? `<p class="text-gray-700">${data.description}</p>` : '<p class="text-gray-500">Celebrating love and togetherness</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Celebration Layout
        if (layout === 'celebration') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto text-center">
                        <div class="text-4xl mb-4">🎊 ✨ 🎉</div>
                        <h2 class="text-3xl font-bold mb-6">Celebrating</h2>
                        <div class="relative p-10 ${cardClasses[cardStyle]} overflow-hidden" style="background: ${cardBg}">
                            <div class="absolute top-4 left-4 text-3xl">🎈</div>
                            <div class="absolute top-4 right-4 text-3xl">🎈</div>
                            <div class="absolute bottom-4 left-4 text-3xl">💐</div>
                            <div class="absolute bottom-4 right-4 text-3xl">💐</div>
                            <div class="relative">
                                <div class="text-7xl font-bold mb-3" style="color: ${numberColor}">${data.years || '0'}</div>
                                <div class="text-2xl font-bold">Years of Love</div>
                                ${dateStr ? `<div class="text-sm text-gray-600 mt-4">${dateStr}</div>` : ''}
                                ${data.description ? `<p class="text-gray-700 mt-6">${data.description}</p>` : ''}
                            </div>
                        </div>
                        <div class="text-4xl mt-4">💕 ❤️ 💕</div>
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="text-center border-t-2 border-b-2 py-12" style="border-color: ${numberColor}">
                            <div class="text-sm uppercase tracking-widest text-gray-500 mb-4">Anniversary Milestone</div>
                            <div class="flex items-center justify-center gap-6">
                                <div class="h-px flex-1" style="background: ${numberColor}"></div>
                                <div class="text-6xl font-light" style="color: ${numberColor}">${data.years || '0'}</div>
                                <div class="h-px flex-1" style="background: ${numberColor}"></div>
                            </div>
                            <div class="text-xl font-light mt-4 tracking-wide">Years Together</div>
                            ${dateStr ? `<div class="text-sm text-gray-500 mt-6 italic">${dateStr}</div>` : ''}
                            ${data.description ? `<p class="text-gray-600 mt-8 font-light leading-relaxed">${data.description}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <div class="max-w-md mx-auto text-center">
                    <h2 class="text-2xl font-bold mb-6">Milestone</h2>
                    <div class="p-8 rounded-lg" style="background: ${cardBg}">
                        <div class="text-6xl font-bold mb-2" style="color: ${numberColor}">${data.years || '0'}</div>
                        <div class="text-xl font-semibold mb-4">Years Together</div>
                        ${dateStr ? `<div class="text-sm text-gray-600 mb-4">Since ${dateStr}</div>` : ''}
                        ${data.description ? `<p class="text-gray-700 mt-4">${data.description}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
