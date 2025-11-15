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
                    <option value="hearts">Hearts & Love</option>
                    <option value="polaroid">Polaroid Style</option>
                    <option value="intertwined">Intertwined Circles</option>
                    <option value="botanical">Botanical Frame</option>
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

            case 'hearts':
                return `
                    <div class="py-16 px-6 relative overflow-hidden" style="background: ${bgColor}">
                        <div class="absolute inset-0 opacity-5">
                            <div class="text-9xl absolute top-10 left-10">💕</div>
                            <div class="text-8xl absolute bottom-10 right-10">💖</div>
                            <div class="text-7xl absolute top-1/2 right-1/4">💝</div>
                        </div>
                        <h2 class="text-3xl font-bold text-center mb-12 relative z-10">The Happy Couple</h2>
                        <div class="max-w-4xl mx-auto relative z-10">
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-transform">
                                    <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                        👰
                                    </div>
                                    <h3 class="font-bold text-2xl mb-2">${bride}</h3>
                                    <div class="text-sm text-gray-500 mb-4">The Bride</div>
                                    <div class="flex justify-center gap-1">
                                        <span style="color: ${accentColor}">💕</span>
                                        <span style="color: ${accentColor}">💕</span>
                                        <span style="color: ${accentColor}">💕</span>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-transform">
                                    <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                        🤵
                                    </div>
                                    <h3 class="font-bold text-2xl mb-2">${groom}</h3>
                                    <div class="text-sm text-gray-500 mb-4">The Groom</div>
                                    <div class="flex justify-center gap-1">
                                        <span style="color: ${accentColor}">💕</span>
                                        <span style="color: ${accentColor}">💕</span>
                                        <span style="color: ${accentColor}">💕</span>
                                    </div>
                                </div>
                            </div>
                            ${about ? `<p class="mt-10 text-center text-gray-600 leading-relaxed max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">${about}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'polaroid':
                return `
                    <div class="py-16 px-6" style="background: linear-gradient(to bottom, ${bgColor}, ${accentColor}10);">
                        <h2 class="text-3xl font-bold text-center mb-12">The Happy Couple</h2>
                        <div class="max-w-3xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-12">
                                <div class="bg-white p-4 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                                    <div class="bg-gray-100 h-64 flex items-center justify-center mb-4">
                                        <div class="text-7xl">👰</div>
                                    </div>
                                    <div class="p-3 text-center font-handwriting">
                                        <h3 class="font-bold text-xl mb-1">${bride}</h3>
                                        <p class="text-sm text-gray-600">The Bride</p>
                                    </div>
                                </div>
                                <div class="bg-white p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                                    <div class="bg-gray-100 h-64 flex items-center justify-center mb-4">
                                        <div class="text-7xl">🤵</div>
                                    </div>
                                    <div class="p-3 text-center font-handwriting">
                                        <h3 class="font-bold text-xl mb-1">${groom}</h3>
                                        <p class="text-sm text-gray-600">The Groom</p>
                                    </div>
                                </div>
                            </div>
                            ${about ? `
                            <div class="mt-12 bg-white p-6 shadow-xl transform hover:-rotate-1 transition-transform">
                                <p class="text-center text-gray-700 leading-relaxed italic">"${about}"</p>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'intertwined':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <h2 class="text-3xl font-bold text-center mb-16">The Happy Couple</h2>
                        <div class="max-w-2xl mx-auto">
                            <div class="relative flex items-center justify-center mb-12">
                                <!-- Left circle (Bride) -->
                                <div class="relative">
                                    <div class="w-32 h-32 rounded-full border-4 flex items-center justify-center text-5xl bg-white shadow-xl" style="border-color: ${accentColor};">
                                        👰
                                    </div>
                                    <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                                        <span class="font-bold text-sm">${bride}</span>
                                    </div>
                                </div>

                                <!-- Heart connector -->
                                <div class="mx-4 text-5xl animate-pulse" style="color: ${accentColor};">💕</div>

                                <!-- Right circle (Groom) -->
                                <div class="relative">
                                    <div class="w-32 h-32 rounded-full border-4 flex items-center justify-center text-5xl bg-white shadow-xl" style="border-color: ${accentColor};">
                                        🤵
                                    </div>
                                    <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                                        <span class="font-bold text-sm">${groom}</span>
                                    </div>
                                </div>
                            </div>
                            ${about ? `<p class="mt-16 text-center text-gray-600 leading-relaxed max-w-lg mx-auto">${about}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'botanical':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-3xl mx-auto">
                            <h2 class="text-3xl font-bold text-center mb-10">The Happy Couple</h2>
                            <div class="relative bg-white rounded-3xl p-10 shadow-2xl" style="border: 3px solid ${accentColor}30;">
                                <!-- Decorative corners -->
                                <div class="absolute top-4 left-4 text-3xl opacity-60" style="color: ${accentColor};">🌿</div>
                                <div class="absolute top-4 right-4 text-3xl opacity-60 transform scale-x-[-1]" style="color: ${accentColor};">🌿</div>
                                <div class="absolute bottom-4 left-4 text-3xl opacity-60 transform scale-y-[-1]" style="color: ${accentColor};">🌿</div>
                                <div class="absolute bottom-4 right-4 text-3xl opacity-60 transform scale-x-[-1] scale-y-[-1]" style="color: ${accentColor};">🌿</div>

                                <div class="grid md:grid-cols-2 gap-8 mb-6">
                                    <div class="text-center">
                                        <div class="inline-block p-5 rounded-full mb-4" style="background: ${accentColor}15; border: 2px dashed ${accentColor}40;">
                                            <div class="text-5xl">👰</div>
                                        </div>
                                        <h3 class="font-bold text-2xl mb-1" style="color: ${accentColor};">${bride}</h3>
                                        <p class="text-sm text-gray-500 uppercase tracking-wide">The Bride</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="inline-block p-5 rounded-full mb-4" style="background: ${accentColor}15; border: 2px dashed ${accentColor}40;">
                                            <div class="text-5xl">🤵</div>
                                        </div>
                                        <h3 class="font-bold text-2xl mb-1" style="color: ${accentColor};">${groom}</h3>
                                        <p class="text-sm text-gray-500 uppercase tracking-wide">The Groom</p>
                                    </div>
                                </div>

                                ${about ? `
                                <div class="pt-6 border-t-2" style="border-color: ${accentColor}20;">
                                    <p class="text-center text-gray-600 leading-relaxed italic">${about}</p>
                                </div>
                                ` : ''}
                            </div>
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
                                <div class="p-6 rounded-xl shadow-md bg-white transform hover:scale-105 transition-transform">
                                    <div class="text-4xl mb-3">👰</div>
                                    <div class="font-bold text-xl">${bride}</div>
                                    <div class="text-sm text-gray-500 mt-1">The Bride</div>
                                </div>
                                <div class="text-3xl animate-pulse" style="color: ${accentColor};">💕</div>
                                <div class="p-6 rounded-xl shadow-md bg-white transform hover:scale-105 transition-transform">
                                    <div class="text-4xl mb-3">🤵</div>
                                    <div class="font-bold text-xl">${groom}</div>
                                    <div class="text-sm text-gray-500 mt-1">The Groom</div>
                                </div>
                            </div>
                            ${about ? `<p class="mt-8 text-gray-600 text-sm leading-relaxed bg-white p-4 rounded-lg shadow-sm">${about}</p>` : ''}
                        </div>
                    </div>
                `;
        }
    }
};
