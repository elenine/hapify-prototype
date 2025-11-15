// Gift Preferences Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gifts = {
    name: '🎁 Gift Preferences',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Gift Information" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Message</label>
                <textarea placeholder="Your presence is the best gift, but if you'd like to bring something..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Registry Link (Optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="registryLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Registry Name (Optional)</label>
                <input type="text" placeholder="Amazon, Target, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="registryName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Alternative Options (Optional)</label>
                <textarea placeholder="• Cash gifts welcome&#10;• Donations to [Charity Name]&#10;• Gift cards appreciated" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="alternatives" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">One option per line</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="minimal">Minimal</option>
                    <option value="gradient">Gradient Box</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="playful">Playful</option>
                    <option value="modern">Modern Split</option>
                    <option value="festive">Festive</option>
                    <option value="simple">Simple Note</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const alternatives = data.alternatives ? data.alternatives.split('\n').filter(alt => alt.trim()) : [];
        const bgColor = style.bg || '#f9fafb';
        const accentColor = style.accent || '#ec4899';
        const layout = style.layout || 'card';

        // Minimal
        if (layout === 'minimal') {
            return `
                <div class="py-16 px-6 text-center" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🎁</div>
                        <h2 class="text-2xl font-bold mb-3">${data.title || 'Gift Information'}</h2>
                        <div class="w-16 h-1 mx-auto mb-4" style="background: ${accentColor}"></div>
                        <p class="text-gray-600 mb-8">${data.message || "Your presence is the best gift"}</p>
                        ${data.registryLink ? `
                            <a href="${data.registryLink}" target="_blank" class="inline-block border-2 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition" style="border-color: ${accentColor}; color: ${accentColor}">
                                ${data.registryName ? `View ${data.registryName} Registry` : 'View Registry'} →
                            </a>
                        ` : ''}
                        ${alternatives.length > 0 ? `
                            <div class="mt-8">
                                <ul class="space-y-2 text-sm text-gray-600">
                                    ${alternatives.map(alt => `<li>${alt}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Gradient Box
        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 shadow-2xl text-white text-center">
                            <div class="text-6xl mb-4">🎁</div>
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Gift Information'}</h2>
                            <p class="text-white text-opacity-95 mb-8">${data.message || "Your presence is the best gift"}</p>
                            ${data.registryLink ? `
                                <a href="${data.registryLink}" target="_blank" class="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg mb-6">
                                    ${data.registryName ? `${data.registryName} Registry` : 'View Registry'}
                                </a>
                            ` : ''}
                            ${alternatives.length > 0 ? `
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-5 mt-6">
                                    <div class="text-sm font-bold mb-3 uppercase tracking-wide">Other Options</div>
                                    <ul class="space-y-2 text-sm">
                                        ${alternatives.map(alt => `<li class="text-white text-opacity-95">${alt}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Frame
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="border-4 rounded-2xl p-10 bg-white shadow-xl text-center" style="border-color: ${accentColor}">
                            <div class="text-6xl mb-4">🎁</div>
                            <h2 class="text-3xl font-bold mb-3" style="color: ${accentColor}">${data.title || 'Gift Information'}</h2>
                            <div class="w-24 h-1 mx-auto mb-6" style="background: ${accentColor}; opacity: 0.5"></div>
                            <p class="text-gray-700 mb-8 leading-relaxed">${data.message || "Your presence is the best gift"}</p>

                            ${data.registryLink ? `
                                <div class="mb-8">
                                    <div class="text-xs uppercase tracking-wider mb-3" style="color: ${accentColor}">Gift Registry</div>
                                    <a href="${data.registryLink}" target="_blank" class="inline-block text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition shadow-md" style="background: ${accentColor}">
                                        ${data.registryName ? `View ${data.registryName} Registry` : 'View Registry'}
                                    </a>
                                </div>
                            ` : ''}

                            ${alternatives.length > 0 ? `
                                <div class="pt-8 border-t space-y-3" style="border-color: ${accentColor}30">
                                    <div class="text-sm font-semibold uppercase tracking-wider" style="color: ${accentColor}">Alternative Options</div>
                                    <ul class="space-y-2 text-sm text-gray-600">
                                        ${alternatives.map(alt => `<li>${alt}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Playful
        if (layout === 'playful') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${accentColor}15 0%, ${bgColor} 100%);">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="inline-block transform hover:rotate-12 transition-transform text-8xl mb-6">🎁</div>
                        <h2 class="text-3xl font-black mb-4" style="color: ${accentColor}">${data.title || 'Gift Ideas!'}</h2>
                        <p class="text-lg text-gray-700 mb-8">${data.message || "Your presence is the best gift"}</p>

                        <div class="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-transform">
                            ${data.registryLink ? `
                                <div class="mb-6">
                                    <div class="text-6xl mb-4">🎀</div>
                                    <a href="${data.registryLink}" target="_blank" class="inline-block text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-lg" style="background: ${accentColor}">
                                        ${data.registryName ? `${data.registryName} 🎉` : 'Open Registry 🎉'}
                                    </a>
                                </div>
                            ` : ''}

                            ${alternatives.length > 0 ? `
                                <div class="${data.registryLink ? 'pt-6 border-t border-gray-200' : ''}">
                                    <div class="text-2xl mb-4">✨</div>
                                    <div class="text-sm font-bold mb-4" style="color: ${accentColor}">More Options</div>
                                    <ul class="space-y-3 text-left max-w-xs mx-auto">
                                        ${alternatives.map(alt => `<li class="flex items-start gap-2"><span style="color: ${accentColor}">🎈</span><span class="text-gray-700">${alt}</span></li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Split
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-xl">
                            <div class="p-10 flex flex-col justify-center text-white" style="background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)">
                                <div class="text-7xl mb-4">🎁</div>
                                <h2 class="text-3xl font-bold">${data.title || 'Gift Info'}</h2>
                            </div>
                            <div class="p-10 flex flex-col justify-center">
                                <p class="text-gray-700 mb-6 leading-relaxed">${data.message || "Your presence is the best gift"}</p>

                                ${data.registryLink ? `
                                    <a href="${data.registryLink}" target="_blank" class="inline-block text-center text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition mb-4" style="background: ${accentColor}">
                                        ${data.registryName ? `View ${data.registryName}` : 'View Registry'}
                                    </a>
                                ` : ''}

                                ${alternatives.length > 0 ? `
                                    <div class="pt-4">
                                        <div class="text-xs font-semibold uppercase tracking-wider mb-2" style="color: ${accentColor}">Alternative Options</div>
                                        <ul class="space-y-1 text-sm text-gray-600">
                                            ${alternatives.map(alt => `<li>${alt}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Festive
        if (layout === 'festive') {
            return `
                <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%);">
                    <div class="max-w-lg mx-auto">
                        <div class="flex justify-center gap-4 mb-6">
                            <span class="text-5xl animate-bounce">🎁</span>
                            <span class="text-5xl animate-bounce" style="animation-delay: 0.1s">🎉</span>
                            <span class="text-5xl animate-bounce" style="animation-delay: 0.2s">🎈</span>
                        </div>
                        <h2 class="text-4xl font-black mb-4 text-gray-900">${data.title || 'Gift Ideas'}</h2>
                        <p class="text-lg text-gray-800 mb-8">${data.message || "Your presence is the best gift"}</p>

                        <div class="bg-white rounded-2xl p-8 shadow-2xl">
                            ${data.registryLink ? `
                                <div class="mb-6">
                                    <div class="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Gift Registry</div>
                                    <a href="${data.registryLink}" target="_blank" class="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-xl font-black text-lg hover:shadow-xl transition shadow-md">
                                        ${data.registryName ? `${data.registryName} 🎊` : 'View Registry 🎊'}
                                    </a>
                                </div>
                            ` : ''}

                            ${alternatives.length > 0 ? `
                                <div class="${data.registryLink ? 'pt-6 border-t border-gray-200' : ''}">
                                    <div class="text-sm font-bold uppercase tracking-wider mb-4 text-gray-700">Other Wonderful Options</div>
                                    <ul class="space-y-2 text-left max-w-xs mx-auto">
                                        ${alternatives.map(alt => `<li class="flex items-start gap-2"><span class="text-pink-500">✨</span><span class="text-gray-700">${alt}</span></li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Simple Note
        if (layout === 'simple') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white rounded-lg p-8 shadow-sm border-l-4" style="border-color: ${accentColor}">
                            <div class="flex items-start gap-4 mb-4">
                                <div class="text-4xl">🎁</div>
                                <div>
                                    <h2 class="text-xl font-bold mb-2">${data.title || 'Gift Information'}</h2>
                                    <p class="text-gray-600 text-sm">${data.message || "Your presence is the best gift"}</p>
                                </div>
                            </div>

                            ${data.registryLink ? `
                                <div class="mt-4 pt-4 border-t border-gray-200">
                                    <a href="${data.registryLink}" target="_blank" class="text-sm font-semibold hover:underline" style="color: ${accentColor}">
                                        ${data.registryName ? `View ${data.registryName} Registry →` : 'View Gift Registry →'}
                                    </a>
                                </div>
                            ` : ''}

                            ${alternatives.length > 0 ? `
                                <div class="mt-4 pt-4 border-t border-gray-200">
                                    <div class="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Alternatives</div>
                                    <ul class="space-y-1 text-xs text-gray-600">
                                        ${alternatives.map(alt => `<li>• ${alt}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Card Style (default)
        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                <div class="max-w-lg mx-auto">
                    <div class="text-5xl mb-4">🎁</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Gift Information'}</h2>
                    <p class="text-gray-600 mb-6">${data.message || "Your presence is the best gift, but if you'd like to bring something..."}</p>

                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        ${data.registryLink ? `
                            <div class="mb-6">
                                <div class="text-sm text-gray-500 mb-3">Gift Registry</div>
                                <a href="${data.registryLink}" target="_blank" class="inline-block text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition" style="background: ${accentColor}">
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
};
