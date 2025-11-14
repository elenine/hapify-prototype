// Hero Banner Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
                name: '💼 Hero Banner',
                allowMultiple: false,  // Only one hero section allowed
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                            <input type="text" placeholder="Your Business Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                            <input type="text" placeholder="Your business tagline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description (optional)</label>
                            <textarea placeholder="Brief description of your business..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 cursor-pointer" onclick="this.querySelector('input').click()">
                                <div class="text-3xl mb-2">📸</div>
                                <div class="text-sm text-gray-600">Click to upload</div>
                                <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Call-to-Action Button Text (optional)</label>
                            <input type="text" placeholder="Get Started" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="ctaText" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered (Classic)</option>
                                <option value="split">Split Layout</option>
                                <option value="full-background">Full Background</option>
                                <option value="card">Card Style</option>
                                <option value="minimalist">Minimalist</option>
                                <option value="modern">Modern Gradient</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style, globalStyles) => {
                    const layout = style.layout || 'centered';
                    const bg = style.bg || '#2563eb';
                    const textColor = style.text || '#ffffff';
                    const accent = style.accent || '#10b981';
                    const name = data.name || 'Business Name';
                    const tagline = data.tagline || 'Your professional tagline';
                    const description = data.description || '';
                    const ctaText = data.ctaText || '';
                    const hasImage = data.image;

                    switch(layout) {
                        case 'split':
                            return `
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-0" style="background: ${bg};">
                                    <div class="flex items-center justify-center py-16 px-6" style="color: ${textColor};">
                                        <div class="max-w-md">
                                            <h1 class="text-4xl font-bold mb-3">${name}</h1>
                                            <p class="text-xl mb-4 opacity-90">${tagline}</p>
                                            ${description ? `<p class="text-sm opacity-80 mb-6">${description}</p>` : ''}
                                            ${ctaText ? `<button class="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105" style="background: ${accent}; color: white;">${ctaText}</button>` : ''}
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center p-8" style="background: rgba(255,255,255,0.1);">
                                        ${hasImage ? `<img src="${data.image}" class="w-full max-w-sm rounded-2xl shadow-2xl object-cover" style="max-height: 400px;">` : '<div class="text-8xl opacity-50">💼</div>'}
                                    </div>
                                </div>
                            `;

                        case 'full-background':
                            return `
                                <div class="relative py-24 px-6" style="background: ${hasImage ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${data.image}') center/cover` : bg}; color: ${textColor};">
                                    <div class="max-w-2xl mx-auto text-center">
                                        ${!hasImage ? '<div class="text-7xl mb-6 opacity-80">💼</div>' : ''}
                                        <h1 class="text-4xl md:text-5xl font-bold mb-4">${name}</h1>
                                        <p class="text-xl md:text-2xl mb-6 opacity-90">${tagline}</p>
                                        ${description ? `<p class="text-base opacity-80 mb-8">${description}</p>` : ''}
                                        ${ctaText ? `<button class="px-8 py-4 rounded-lg font-semibold text-lg transition-transform hover:scale-105" style="background: ${accent}; color: white;">${ctaText}</button>` : ''}
                                    </div>
                                </div>
                            `;

                        case 'card':
                            return `
                                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bg} 0%, ${accent} 100%);">
                                    <div class="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden" style="color: #1f2937;">
                                        ${hasImage ? `<img src="${data.image}" class="w-full h-48 object-cover">` : `<div class="h-48 flex items-center justify-center" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);"><div class="text-7xl">💼</div></div>`}
                                        <div class="p-8 text-center">
                                            <h1 class="text-3xl font-bold mb-3">${name}</h1>
                                            <p class="text-lg text-gray-600 mb-4">${tagline}</p>
                                            ${description ? `<p class="text-sm text-gray-500 mb-6">${description}</p>` : ''}
                                            ${ctaText ? `<button class="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105" style="background: ${bg}; color: white;">${ctaText}</button>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimalist':
                            return `
                                <div class="py-20 px-6" style="background: white; color: #1f2937;">
                                    <div class="max-w-2xl mx-auto text-center">
                                        ${hasImage ? `<img src="${data.image}" class="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4" style="border-color: ${bg};">` : `<div class="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl" style="background: ${bg}20; color: ${bg};">💼</div>`}
                                        <h1 class="text-4xl font-light mb-3" style="color: ${bg};">${name}</h1>
                                        <div class="w-16 h-1 mx-auto mb-4" style="background: ${accent};"></div>
                                        <p class="text-lg text-gray-600 mb-4">${tagline}</p>
                                        ${description ? `<p class="text-sm text-gray-500 mb-6 max-w-md mx-auto">${description}</p>` : ''}
                                        ${ctaText ? `<button class="px-6 py-2 rounded-full font-medium border-2 transition-all hover:scale-105" style="border-color: ${bg}; color: ${bg};">${ctaText}</button>` : ''}
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg} 0%, ${accent} 100%); color: ${textColor};">
                                    <div class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20" style="background: white; transform: translate(30%, -30%);"></div>
                                    <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20" style="background: white; transform: translate(-30%, 30%);"></div>
                                    <div class="relative max-w-2xl mx-auto text-center">
                                        ${hasImage ? `<img src="${data.image}" class="w-28 h-28 rounded-2xl mx-auto mb-6 object-cover shadow-xl border-4 border-white">` : '<div class="text-7xl mb-6">💼</div>'}
                                        <h1 class="text-4xl md:text-5xl font-bold mb-4">${name}</h1>
                                        <p class="text-xl mb-4 opacity-95">${tagline}</p>
                                        ${description ? `<p class="text-base opacity-85 mb-8 max-w-lg mx-auto">${description}</p>` : ''}
                                        ${ctaText ? `<button class="px-8 py-4 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105" style="background: white; color: ${bg};">${ctaText}</button>` : ''}
                                    </div>
                                </div>
                            `;

                        case 'centered':
                        default:
                            return `
                                <div class="text-center py-16 px-6" style="background: ${bg}; color: ${textColor};">
                                    ${hasImage ? `<img src="${data.image}" class="w-24 h-24 rounded-lg mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="text-6xl mb-6">💼</div>'}
                                    <h1 class="text-3xl font-bold mb-2">${name}</h1>
                                    <p class="text-lg opacity-90 mb-4">${tagline}</p>
                                    ${description ? `<p class="text-sm opacity-80 mb-6 max-w-md mx-auto">${description}</p>` : ''}
                                    ${ctaText ? `<button class="px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105" style="background: ${accent}; color: white;">${ctaText}</button>` : ''}
                                </div>
                            `;
                    }
                }
            };
