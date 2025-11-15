// Theme Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.theme = {
    name: '🎨 Shower Theme',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Name</label>
                <input type="text" placeholder="Twinkle Twinkle Little Star" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="themeName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Colors</label>
                <input type="text" placeholder="Soft Blue & Gold" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="colors" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code</label>
                <input type="text" placeholder="Casual Chic" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="dressCode" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Description</label>
                <textarea rows="3" placeholder="Join us for a celestial celebration under the stars..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Classic Box</option>
                    <option value="banner">Banner - Full Width</option>
                    <option value="gradient">Gradient - Colorful Design</option>
                    <option value="palette">Palette - Color Swatches</option>
                    <option value="minimal">Minimal - Simple & Clean</option>
                    <option value="badge">Badge - Circular Theme</option>
                    <option value="magazine">Magazine - Editorial</option>
                    <option value="ribbon">Ribbon - Banner Style</option>
                    <option value="sticker">Sticker - Playful Cards</option>
                    <option value="confetti">Confetti - Festive Style</option>
                    <option value="timeline">Timeline - Visual Flow</option>
                    <option value="polaroid">Polaroid - Frame Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#fef3c7';
        const accent = style.accent || '#f59e0b';

        switch(layout) {
            case 'gradient':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="rounded-3xl p-8 shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%);">
                                <div class="text-center mb-6">
                                    <div class="text-6xl mb-3">🎨</div>
                                    <h2 class="text-3xl font-bold text-white mb-4">Shower Theme</h2>
                                </div>
                                <div class="bg-white bg-opacity-90 rounded-2xl p-6 space-y-4">
                                    ${data.themeName ? `<div class="text-center"><span class="text-2xl font-bold" style="color: ${accent};">${data.themeName}</span></div>` : ''}
                                    ${data.colors ? `<div><span class="font-semibold" style="color: ${accent};">Colors:</span> <span class="text-gray-700">${data.colors}</span></div>` : ''}
                                    ${data.dressCode ? `<div><span class="font-semibold" style="color: ${accent};">Dress Code:</span> <span class="text-gray-700">${data.dressCode}</span></div>` : ''}
                                    ${data.description ? `<div class="mt-4 pt-4 border-t border-gray-200"><p class="text-gray-600 italic">${data.description}</p></div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'palette':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <h2 class="text-3xl font-bold text-center mb-8">Shower Theme</h2>
                            <div class="grid md:grid-cols-3 gap-6">
                                <div class="bg-white rounded-xl p-6 shadow-lg text-center" style="border-top: 6px solid ${accent};">
                                    <div class="text-4xl mb-3">🎨</div>
                                    <div class="font-semibold text-gray-600 text-sm mb-2">Theme</div>
                                    <div class="font-bold text-lg">${data.themeName || 'Not Set'}</div>
                                </div>
                                <div class="bg-white rounded-xl p-6 shadow-lg text-center" style="border-top: 6px solid ${accent};">
                                    <div class="text-4xl mb-3">🌈</div>
                                    <div class="font-semibold text-gray-600 text-sm mb-2">Colors</div>
                                    <div class="font-bold text-lg">${data.colors || 'Not Set'}</div>
                                </div>
                                <div class="bg-white rounded-xl p-6 shadow-lg text-center" style="border-top: 6px solid ${accent};">
                                    <div class="text-4xl mb-3">👔</div>
                                    <div class="font-semibold text-gray-600 text-sm mb-2">Dress Code</div>
                                    <div class="font-bold text-lg">${data.dressCode || 'Not Set'}</div>
                                </div>
                            </div>
                            ${data.description ? `<div class="mt-8 bg-white rounded-xl p-6 shadow-lg text-center"><p class="text-gray-600 italic">${data.description}</p></div>` : ''}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-center">
                            <div class="text-5xl mb-4">🎨</div>
                            <h2 class="text-3xl font-light mb-3" style="letter-spacing: 0.1em;">SHOWER THEME</h2>
                            <div class="h-0.5 w-16 mx-auto mb-8" style="background: ${accent};"></div>
                            ${data.themeName ? `<div class="text-2xl font-bold mb-6" style="color: ${accent};">${data.themeName}</div>` : ''}
                            <div class="space-y-3 text-lg">
                                ${data.colors ? `<div><span class="opacity-60">Colors:</span> <span class="font-semibold">${data.colors}</span></div>` : ''}
                                ${data.dressCode ? `<div><span class="opacity-60">Dress Code:</span> <span class="font-semibold">${data.dressCode}</span></div>` : ''}
                            </div>
                            ${data.description ? `<p class="mt-8 text-gray-600 italic leading-relaxed">${data.description}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-center">
                            <div class="inline-block">
                                <div class="w-64 h-64 rounded-full flex items-center justify-center shadow-2xl mb-8" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%); border: 10px solid white;">
                                    <div>
                                        <div class="text-6xl mb-2">🎨</div>
                                        <div class="font-bold text-xl text-white">Shower Theme</div>
                                        ${data.themeName ? `<div class="text-sm font-semibold text-white mt-2">${data.themeName}</div>` : ''}
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white rounded-2xl p-6 shadow-xl space-y-4">
                                ${data.colors ? `<div><span class="font-semibold" style="color: ${accent};">Colors:</span> <span class="text-gray-700">${data.colors}</span></div>` : ''}
                                ${data.dressCode ? `<div><span class="font-semibold" style="color: ${accent};">Dress Code:</span> <span class="text-gray-700">${data.dressCode}</span></div>` : ''}
                                ${data.description ? `<div class="pt-4 border-t border-gray-200"><p class="text-gray-600 italic">${data.description}</p></div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'magazine':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <div class="border-t-4 border-b-4 py-4 mb-8" style="border-color: ${accent};">
                                <h2 class="text-4xl font-bold text-center uppercase tracking-wider" style="font-family: 'Georgia', serif;">Shower Theme</h2>
                            </div>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="border-l-4 pl-6" style="border-color: ${accent};">
                                    <div class="text-xs uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Georgia', serif;">Theme Name</div>
                                    <div class="font-bold text-2xl mb-6">${data.themeName || 'Classic Baby Shower'}</div>
                                    ${data.colors ? `
                                    <div class="mb-4">
                                        <div class="text-xs uppercase tracking-widest opacity-60 mb-1">Colors</div>
                                        <div class="font-semibold">${data.colors}</div>
                                    </div>` : ''}
                                    ${data.dressCode ? `
                                    <div>
                                        <div class="text-xs uppercase tracking-widest opacity-60 mb-1">Dress Code</div>
                                        <div class="font-semibold">${data.dressCode}</div>
                                    </div>` : ''}
                                </div>
                                <div class="flex items-center">
                                    ${data.description ? `<p class="text-lg leading-relaxed italic" style="font-family: 'Georgia', serif;">"${data.description}"</p>` : '<div class="text-7xl opacity-20">🎨</div>'}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-3xl font-bold text-center mb-8">Shower Theme</h2>
                            <div class="space-y-4">
                                ${data.themeName ? `
                                <div class="py-4 px-8 text-center font-bold text-2xl shadow-lg" style="background: ${accent}; color: white; clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%);">
                                    <div class="flex items-center justify-center gap-3">
                                        <span class="text-3xl">🎨</span>
                                        <span>${data.themeName}</span>
                                    </div>
                                </div>` : ''}
                                ${data.colors ? `
                                <div class="py-4 px-8 font-bold shadow-lg bg-white border-2 rounded-lg" style="border-color: ${accent};">
                                    <div class="flex items-center justify-center gap-3">
                                        <span class="text-2xl">🌈</span>
                                        <div class="text-left">
                                            <div class="text-xs opacity-60">Colors</div>
                                            <div>${data.colors}</div>
                                        </div>
                                    </div>
                                </div>` : ''}
                                ${data.dressCode ? `
                                <div class="py-4 px-8 font-bold shadow-lg bg-white border-2 rounded-lg" style="border-color: ${accent};">
                                    <div class="flex items-center justify-center gap-3">
                                        <span class="text-2xl">👔</span>
                                        <div class="text-left">
                                            <div class="text-xs opacity-60">Dress Code</div>
                                            <div>${data.dressCode}</div>
                                        </div>
                                    </div>
                                </div>` : ''}
                                ${data.description ? `
                                <div class="mt-6 p-6 bg-white rounded-xl shadow-lg text-center">
                                    <p class="italic text-gray-600">${data.description}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'banner':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center">
                                <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">${data.themeName || 'Shower Theme'}</h2>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                    ${data.colors ? `<div class="bg-white bg-opacity-70 rounded-lg p-3 sm:p-4"><div class="font-semibold mb-1 text-sm sm:text-base" style="color: ${accent};">Colors</div><div class="text-gray-700 text-sm sm:text-base">${data.colors}</div></div>` : ''}
                                    ${data.dressCode ? `<div class="bg-white bg-opacity-70 rounded-lg p-3 sm:p-4"><div class="font-semibold mb-1 text-sm sm:text-base" style="color: ${accent};">Dress Code</div><div class="text-gray-700 text-sm sm:text-base">${data.dressCode}</div></div>` : ''}
                                </div>
                                ${data.description ? `<p class="text-gray-700 italic text-sm sm:text-base">${data.description}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'sticker':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Shower Theme</h2>
                            <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
                                ${data.themeName ? `
                                <div class="transform -rotate-2 hover:rotate-0 transition-transform">
                                    <div class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg" style="background: ${accent}; color: white;">
                                        <div class="text-xl sm:text-2xl mb-1">🎨</div>
                                        <div class="font-bold text-xs sm:text-sm uppercase tracking-wider">Theme</div>
                                        <div class="font-semibold text-sm sm:text-base mt-1">${data.themeName}</div>
                                    </div>
                                </div>` : ''}
                                ${data.colors ? `
                                <div class="transform rotate-2 hover:rotate-0 transition-transform">
                                    <div class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg border-3" style="background: white; border: 3px solid ${accent};">
                                        <div class="text-xl sm:text-2xl mb-1">🌈</div>
                                        <div class="font-bold text-xs sm:text-sm uppercase tracking-wider" style="color: ${accent};">Colors</div>
                                        <div class="font-semibold text-sm sm:text-base mt-1">${data.colors}</div>
                                    </div>
                                </div>` : ''}
                                ${data.dressCode ? `
                                <div class="transform -rotate-1 hover:rotate-0 transition-transform">
                                    <div class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg border-3" style="background: white; border: 3px solid ${accent};">
                                        <div class="text-xl sm:text-2xl mb-1">👔</div>
                                        <div class="font-bold text-xs sm:text-sm uppercase tracking-wider" style="color: ${accent};">Dress Code</div>
                                        <div class="font-semibold text-sm sm:text-base mt-1">${data.dressCode}</div>
                                    </div>
                                </div>` : ''}
                            </div>
                            ${data.description ? `
                            <div class="mt-6 transform rotate-1 hover:rotate-0 transition-transform">
                                <div class="bg-white rounded-2xl shadow-xl p-4 sm:p-6 text-center border-3" style="border: 3px dashed ${accent};">
                                    <p class="italic text-gray-600 text-sm sm:text-base">${data.description}</p>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'confetti':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6 relative overflow-hidden" style="background: ${bg};">
                        <!-- Animated confetti -->
                        <div class="absolute inset-0 overflow-hidden pointer-events-none">
                            <div class="absolute top-8 left-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-bounce" style="background: ${accent}; animation-delay: 0s;"></div>
                            <div class="absolute top-12 left-20 w-2 h-2 rounded-full animate-bounce" style="background: #fbbf24; animation-delay: 0.2s;"></div>
                            <div class="absolute top-8 right-16 w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-bounce" style="background: ${accent}; animation-delay: 0.4s;"></div>
                            <div class="absolute top-16 right-4 w-2 h-2 rounded-full animate-bounce" style="background: #fcd34d; animation-delay: 0.6s;"></div>
                            <div class="absolute top-24 left-1/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-bounce" style="background: ${accent}; animation-delay: 0.8s;"></div>
                            <div class="absolute top-20 right-1/4 w-2 h-2 rounded-full animate-bounce" style="background: #fbbf24; animation-delay: 1s;"></div>
                        </div>

                        <div class="max-w-2xl mx-auto relative z-10">
                            <div class="text-center mb-6 sm:mb-8">
                                <div class="text-4xl sm:text-5xl mb-3">🎨</div>
                                <h2 class="text-2xl sm:text-3xl font-bold">Shower Theme</h2>
                            </div>

                            <div class="bg-white rounded-3xl shadow-2xl p-6 sm:p-8" style="border: 4px solid ${accent};">
                                ${data.themeName ? `
                                <div class="text-center mb-6">
                                    <div class="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg" style="background: ${accent}; color: white;">
                                        <div class="font-bold text-lg sm:text-xl">${data.themeName}</div>
                                    </div>
                                </div>` : ''}

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    ${data.colors ? `
                                    <div class="p-3 sm:p-4 rounded-xl text-center" style="background: ${accent}20;">
                                        <div class="text-2xl sm:text-3xl mb-2">🌈</div>
                                        <div class="text-xs opacity-60 mb-1">Colors</div>
                                        <div class="font-bold text-sm sm:text-base">${data.colors}</div>
                                    </div>` : ''}
                                    ${data.dressCode ? `
                                    <div class="p-3 sm:p-4 rounded-xl text-center" style="background: ${accent}20;">
                                        <div class="text-2xl sm:text-3xl mb-2">👔</div>
                                        <div class="text-xs opacity-60 mb-1">Dress Code</div>
                                        <div class="font-bold text-sm sm:text-base">${data.dressCode}</div>
                                    </div>` : ''}
                                </div>

                                ${data.description ? `
                                <div class="pt-4 border-t" style="border-color: ${accent}40;">
                                    <p class="italic text-gray-600 text-center text-sm sm:text-base">${data.description}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Shower Theme</h2>
                            <div class="relative">
                                <!-- Timeline line -->
                                <div class="absolute left-6 top-0 bottom-0 w-1" style="background: ${accent};"></div>

                                <div class="space-y-4 sm:space-y-6 relative">
                                    ${data.themeName ? `
                                    <div class="flex items-start gap-3 sm:gap-4">
                                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl z-10 shadow-lg flex-shrink-0" style="background: ${accent}; color: white;">🎨</div>
                                        <div class="flex-1 pt-1 sm:pt-2">
                                            <div class="text-xs opacity-60 mb-1">Theme Name</div>
                                            <div class="font-bold text-base sm:text-lg">${data.themeName}</div>
                                        </div>
                                    </div>` : ''}

                                    ${data.colors ? `
                                    <div class="flex items-start gap-3 sm:gap-4">
                                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl z-10 shadow-lg flex-shrink-0" style="background: ${accent}; color: white;">🌈</div>
                                        <div class="flex-1 pt-1 sm:pt-2">
                                            <div class="text-xs opacity-60 mb-1">Theme Colors</div>
                                            <div class="font-bold text-base sm:text-lg">${data.colors}</div>
                                        </div>
                                    </div>` : ''}

                                    ${data.dressCode ? `
                                    <div class="flex items-start gap-3 sm:gap-4">
                                        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl z-10 shadow-lg flex-shrink-0" style="background: ${accent}; color: white;">👔</div>
                                        <div class="flex-1 pt-1 sm:pt-2">
                                            <div class="text-xs opacity-60 mb-1">Dress Code</div>
                                            <div class="font-bold text-base sm:text-lg">${data.dressCode}</div>
                                        </div>
                                    </div>` : ''}
                                </div>
                            </div>

                            ${data.description ? `
                            <div class="mt-6 p-4 sm:p-6 rounded-xl bg-white shadow-lg">
                                <p class="italic text-gray-600 text-sm sm:text-base">${data.description}</p>
                            </div>` : ''}
                        </div>
                    </div>
                `;

            case 'polaroid':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white p-3 sm:p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                                <div class="aspect-square rounded mb-3 sm:mb-4 flex flex-col items-center justify-center p-4 sm:p-6" style="background: ${accent}20;">
                                    <div class="text-5xl sm:text-6xl mb-4">🎨</div>
                                    <h2 class="text-xl sm:text-2xl font-bold mb-2 text-center" style="font-family: 'Brush Script MT', cursive;">${data.themeName || 'Shower Theme'}</h2>
                                    <div class="h-1 w-12 sm:w-16 mb-4" style="background: ${accent};"></div>

                                    <div class="space-y-2 text-center w-full">
                                        ${data.colors ? `
                                        <div class="bg-white bg-opacity-70 rounded-lg p-2 sm:p-3">
                                            <div class="text-xs opacity-60">Colors</div>
                                            <div class="font-semibold text-sm sm:text-base">${data.colors}</div>
                                        </div>` : ''}
                                        ${data.dressCode ? `
                                        <div class="bg-white bg-opacity-70 rounded-lg p-2 sm:p-3">
                                            <div class="text-xs opacity-60">Dress Code</div>
                                            <div class="font-semibold text-sm sm:text-base">${data.dressCode}</div>
                                        </div>` : ''}
                                    </div>
                                </div>
                                ${data.description ? `
                                <div class="text-center py-3 sm:py-4">
                                    <p class="text-xs sm:text-sm italic" style="font-family: 'Brush Script MT', cursive; color: ${accent};">${data.description}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-xl shadow-lg p-8">
                                <div class="text-center mb-6">
                                    <div class="text-5xl mb-3">🎨</div>
                                    <h2 class="text-2xl font-bold mb-2">Shower Theme</h2>
                                </div>
                                ${data.themeName ? `<div class="mb-4"><span class="font-semibold" style="color: ${accent};">Theme:</span> <span class="text-gray-700">${data.themeName}</span></div>` : ''}
                                ${data.colors ? `<div class="mb-4"><span class="font-semibold" style="color: ${accent};">Colors:</span> <span class="text-gray-700">${data.colors}</span></div>` : ''}
                                ${data.dressCode ? `<div class="mb-4"><span class="font-semibold" style="color: ${accent};">Dress Code:</span> <span class="text-gray-700">${data.dressCode}</span></div>` : ''}
                                ${data.description ? `<div class="mt-6 pt-6 border-t border-gray-200"><p class="text-gray-600 italic">${data.description}</p></div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
