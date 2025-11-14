// Registry Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.registry = {
    name: '🎁 Registry',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Title</label>
                <input type="text" placeholder="Baby Registry" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Link</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="link" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Your presence is the best gift..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="centered">Centered - Simple</option>
                    <option value="card">Card - Elevated Box</option>
                    <option value="bordered">Bordered - Frame Style</option>
                    <option value="modern">Modern - Gradient</option>
                    <option value="minimal">Minimal - Clean</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bg = style.bg || '#ffffff';
        const buttonColor = style.buttonColor || '#f59e0b';
        const accent = style.accent || '#fbbf24';
        const textColor = style.textColor || '#1f2937';

        switch(layout) {
            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-2xl shadow-2xl p-8 text-center" style="border-top: 5px solid ${accent};">
                                <div class="text-6xl mb-4">🎁</div>
                                <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Baby Registry'}</h2>
                                <p class="mb-6 opacity-75" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                                ${data.link ? `
                                <a href="${data.link}" target="_blank" class="inline-block px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition" style="background: ${buttonColor};">
                                    View Registry
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'bordered':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="border-4 rounded-2xl p-8 text-center" style="border-color: ${accent};">
                                <div class="text-5xl mb-4">🎁</div>
                                <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Baby Registry'}</h2>
                                <div class="h-1 w-16 mx-auto mb-4" style="background: ${accent};"></div>
                                <p class="mb-6" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                                ${data.link ? `
                                <a href="${data.link}" target="_blank" class="inline-block px-8 py-3 rounded-lg font-semibold text-white border-2 hover:shadow-lg transition" style="background: ${buttonColor}; border-color: ${buttonColor};">
                                    View Registry
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="rounded-3xl p-8 shadow-2xl text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${buttonColor} 100%);">
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center text-6xl mx-auto mb-6">
                                    🎁
                                </div>
                                <h2 class="text-3xl font-bold mb-4 text-white">${data.title || 'Baby Registry'}</h2>
                                <div class="bg-white rounded-2xl p-6 mb-6">
                                    <p style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                                </div>
                                ${data.link ? `
                                <a href="${data.link}" target="_blank" class="inline-block px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition bg-white" style="color: ${buttonColor};">
                                    View Registry
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="text-5xl mb-4">🎁</div>
                            <h2 class="text-3xl font-light mb-4" style="color: ${textColor}; letter-spacing: 0.05em;">${data.title || 'Baby Registry'}</h2>
                            <div class="h-0.5 w-16 mx-auto mb-6" style="background: ${accent};"></div>
                            <p class="text-lg mb-8 opacity-75" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                            ${data.link ? `
                            <a href="${data.link}" target="_blank" class="inline-block px-10 py-3 rounded-lg font-medium text-white border-2 hover:shadow-lg transition" style="background: ${buttonColor}; border-color: ${buttonColor};">
                                View Registry
                            </a>` : ''}
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">🎁</div>
                            <h2 class="text-2xl font-bold mb-4" style="color: ${textColor};">${data.title || 'Baby Registry'}</h2>
                            <p class="mb-6" style="color: ${textColor}; opacity: 0.75;">${data.message || 'Your presence is the best gift!'}</p>
                            ${data.link ? `
                            <a href="${data.link}" target="_blank" class="inline-block px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition" style="background: ${buttonColor};">
                                View Registry
                            </a>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
