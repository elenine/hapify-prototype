// Couple Info Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.couple = {
    name: '💑 Couple Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bride Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bride" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Groom Name</label>
                <input type="text" placeholder="John Smith" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="groom" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">About</label>
                <textarea placeholder="Tell your story..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="about" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="stacked">Stacked Cards</option>
                    <option value="sidebyside">Side by Side</option>
                    <option value="circular">Circular Flow</option>
                    <option value="elegant">Elegant Timeline</option>
                    <option value="modern">Modern Grid</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'stacked';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#9333ea';
        const bride = data.bride || 'Bride Name';
        const groom = data.groom || 'Groom Name';
        const about = data.about;

        switch(layout) {
            case 'sidebyside':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-8">The Happy Couple</h2>
                        <div class="max-w-3xl mx-auto">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div class="text-center p-6 rounded-xl" style="background: ${accentColor}15; border: 2px solid ${accentColor}30">
                                    <div class="text-5xl mb-4">👰</div>
                                    <h3 class="font-bold text-xl mb-2">${bride}</h3>
                                    <p class="text-sm text-gray-600">The Bride</p>
                                </div>
                                <div class="text-center p-6 rounded-xl" style="background: ${accentColor}15; border: 2px solid ${accentColor}30">
                                    <div class="text-5xl mb-4">🤵</div>
                                    <h3 class="font-bold text-xl mb-2">${groom}</h3>
                                    <p class="text-sm text-gray-600">The Groom</p>
                                </div>
                            </div>
                            ${about ? `<p class="mt-8 text-center text-gray-600 text-sm leading-relaxed max-w-lg mx-auto">${about}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'circular':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-12">The Happy Couple</h2>
                        <div class="max-w-2xl mx-auto">
                            <div class="flex items-center justify-center gap-4">
                                <div class="flex-1 text-center">
                                    <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl mb-3" style="background: ${accentColor}20; border: 3px solid ${accentColor}">
                                        👰
                                    </div>
                                    <h3 class="font-bold text-lg">${bride}</h3>
                                </div>
                                <div class="text-3xl" style="color: ${accentColor}">💕</div>
                                <div class="flex-1 text-center">
                                    <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl mb-3" style="background: ${accentColor}20; border: 3px solid ${accentColor}">
                                        🤵
                                    </div>
                                    <h3 class="font-bold text-lg">${groom}</h3>
                                </div>
                            </div>
                            ${about ? `<p class="mt-8 text-center text-gray-600 text-sm leading-relaxed">${about}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <h2 class="text-2xl font-bold text-center mb-12">The Happy Couple</h2>
                        <div class="max-w-md mx-auto relative">
                            <div class="absolute left-1/2 top-0 bottom-0 w-0.5" style="background: ${accentColor}30; transform: translateX(-50%);"></div>

                            <div class="relative flex items-center mb-12">
                                <div class="flex-1 text-right pr-8">
                                    <h3 class="font-bold text-xl mb-1">${bride}</h3>
                                    <p class="text-sm text-gray-500">The Bride</p>
                                </div>
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10" style="background: ${accentColor}; color: white;">
                                    👰
                                </div>
                                <div class="flex-1"></div>
                            </div>

                            <div class="relative flex items-center mb-8">
                                <div class="flex-1"></div>
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10" style="background: ${accentColor}; color: white;">
                                    🤵
                                </div>
                                <div class="flex-1 text-left pl-8">
                                    <h3 class="font-bold text-xl mb-1">${groom}</h3>
                                    <p class="text-sm text-gray-500">The Groom</p>
                                </div>
                            </div>
                            ${about ? `<p class="mt-8 text-center text-gray-600 text-sm leading-relaxed">${about}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-4xl mx-auto">
                            <h2 class="text-3xl font-bold text-center mb-10" style="color: ${accentColor}">The Happy Couple</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 rounded-2xl overflow-hidden" style="border-color: ${accentColor}30">
                                <div class="p-8 text-center" style="background: ${accentColor}08">
                                    <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}20">
                                        <div class="text-4xl">👰</div>
                                    </div>
                                    <h3 class="font-bold text-2xl mb-1">${bride}</h3>
                                    <div class="text-xs uppercase tracking-wide text-gray-500 mb-4">The Bride</div>
                                    <div class="h-1 w-16 mx-auto rounded" style="background: ${accentColor}"></div>
                                </div>
                                <div class="p-8 text-center" style="background: ${accentColor}08">
                                    <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}20">
                                        <div class="text-4xl">🤵</div>
                                    </div>
                                    <h3 class="font-bold text-2xl mb-1">${groom}</h3>
                                    <div class="text-xs uppercase tracking-wide text-gray-500 mb-4">The Groom</div>
                                    <div class="h-1 w-16 mx-auto rounded" style="background: ${accentColor}"></div>
                                </div>
                            </div>
                            ${about ? `<p class="mt-8 text-center text-gray-600 leading-relaxed max-w-xl mx-auto">${about}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'stacked':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-6">The Happy Couple</h2>
                            <div class="space-y-4">
                                <div class="p-4 rounded-lg" style="background: ${accentColor}15">
                                    <div class="text-3xl mb-2">👰</div>
                                    <div class="font-semibold">${bride}</div>
                                </div>
                                <div class="text-2xl">💕</div>
                                <div class="p-4 rounded-lg" style="background: ${accentColor}15">
                                    <div class="text-3xl mb-2">🤵</div>
                                    <div class="font-semibold">${groom}</div>
                                </div>
                            </div>
                            ${about ? `<p class="mt-6 text-gray-600 text-sm leading-relaxed">${about}</p>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
