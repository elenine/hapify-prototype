// Gift Preferences Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gifts = {
    name: '🎁 Gift Preferences',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Gift Information" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Message</label>
                <textarea placeholder="Your presence is the best gift, but if you'd like to celebrate with a gift..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Registry Link (Optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="registryLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Name (Optional)</label>
                <input type="text" placeholder="Amazon, Target, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="registryName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Alternative Options (Optional)</label>
                <textarea placeholder="• Monetary gifts welcome&#10;• Contributions to education fund&#10;• Gift cards appreciated" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="alternatives" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">One option per line</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card</option>
                    <option value="split">Split Layout</option>
                    <option value="modern">Modern</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#f9fafb';
        const accent = style.accent || '#6366f1';
        const alternatives = data.alternatives ? data.alternatives.split('\n').filter(alt => alt.trim()) : [];

        switch(layout) {
            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-8 items-center">
                                <div class="text-center md:text-left">
                                    <div class="text-6xl mb-4">🎁</div>
                                    <h2 class="text-3xl font-bold mb-4" style="color: ${accent}">${data.title || 'Gift Information'}</h2>
                                    <p class="text-gray-600">${data.message || "Your presence is the best gift, but if you'd like to celebrate with a gift..."}</p>
                                </div>
                                <div class="bg-white rounded-2xl p-8 shadow-lg">
                                    ${data.registryLink ? `
                                        <div class="mb-6">
                                            <div class="text-sm mb-2" style="color: ${accent}">Gift Registry</div>
                                            <a href="${data.registryLink}" target="_blank" class="inline-block text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition" style="background: ${accent}">
                                                ${data.registryName ? `View ${data.registryName} Registry` : 'View Registry'}
                                            </a>
                                        </div>
                                    ` : ''}
                                    ${alternatives.length > 0 ? `
                                        <div class="${data.registryLink ? 'pt-6 border-t border-gray-200' : ''}">
                                            <div class="text-sm font-semibold mb-3" style="color: ${accent}">Other Options</div>
                                            <ul class="space-y-2 text-sm text-gray-600">
                                                ${alternatives.map(alt => `<li class="flex items-start gap-2"><span style="color: ${accent}">•</span><span>${alt}</span></li>`).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%); color: white">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-6xl mb-6">🎁</div>
                            <h2 class="text-4xl font-black mb-4">${data.title || 'Gift Information'}</h2>
                            <p class="text-lg mb-8 opacity-90">${data.message || "Your presence is the best gift, but if you'd like to celebrate with a gift..."}</p>

                            ${data.registryLink ? `
                                <div class="mb-8">
                                    <a href="${data.registryLink}" target="_blank" class="inline-block bg-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition text-lg" style="color: ${accent}">
                                        ${data.registryName ? `View ${data.registryName} Registry` : 'View Gift Registry'}
                                    </a>
                                </div>
                            ` : ''}

                            ${alternatives.length > 0 ? `
                                <div class="mt-8 p-6 bg-white bg-opacity-10 backdrop-blur rounded-xl max-w-md mx-auto">
                                    <div class="text-sm font-semibold mb-4">Other Options</div>
                                    <ul class="space-y-2 text-sm">
                                        ${alternatives.map(alt => `<li class="opacity-95">${alt}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-xl mx-auto text-center">
                            <div class="text-4xl mb-4">🎁</div>
                            <h2 class="text-2xl font-bold mb-4" style="color: ${accent}">${data.title || 'Gift Information'}</h2>
                            <p class="text-gray-600 mb-6 text-sm">${data.message || "Your presence is the best gift, but if you'd like to celebrate with a gift..."}</p>

                            ${data.registryLink ? `
                                <div class="mb-6">
                                    <a href="${data.registryLink}" target="_blank" class="inline-block text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition" style="background: ${accent}">
                                        ${data.registryName ? `${data.registryName} Registry` : 'Gift Registry'}
                                    </a>
                                </div>
                            ` : ''}

                            ${alternatives.length > 0 ? `
                                <div class="pt-6 border-t border-gray-200">
                                    <ul class="space-y-2 text-sm text-gray-600">
                                        ${alternatives.map(alt => `<li>${alt}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-lg mx-auto">
                            <div class="text-5xl mb-4">🎁</div>
                            <h2 class="text-2xl font-bold mb-4" style="color: ${accent}">${data.title || 'Gift Information'}</h2>
                            <p class="text-gray-600 mb-6">${data.message || "Your presence is the best gift, but if you'd like to celebrate with a gift..."}</p>

                            <div class="bg-white rounded-xl p-6 shadow-sm">
                                ${data.registryLink ? `
                                    <div class="mb-6">
                                        <div class="text-sm mb-3" style="color: ${accent}">Gift Registry</div>
                                        <a href="${data.registryLink}" target="_blank" class="inline-block text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition" style="background: ${accent}">
                                            ${data.registryName ? `View ${data.registryName} Registry` : 'View Registry'}
                                        </a>
                                    </div>
                                ` : ''}

                                ${alternatives.length > 0 ? `
                                    <div class="${data.registryLink ? 'pt-6 border-t border-gray-200' : ''}">
                                        <div class="text-sm font-semibold text-gray-700 mb-3">Other Options</div>
                                        <ul class="space-y-2 text-left text-sm text-gray-600 max-w-xs mx-auto">
                                            ${alternatives.map(alt => `<li>${alt}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
