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
                    <option value="ribbon">Ribbon - Banner Style</option>
                    <option value="badge">Badge - Circular Gift</option>
                    <option value="split">Split - Gift Box Design</option>
                    <option value="present">Present - Wrapped Gift</option>
                    <option value="wishlist">Wishlist - List Style</option>
                    <option value="floating">Floating - Elevated Card</option>
                    <option value="bow">Bow - Ribbon Accent</option>
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

            case 'ribbon':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="py-6 px-8 text-center font-bold text-3xl shadow-xl mb-6" style="background: ${buttonColor}; color: white; clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%);">
                                <div class="flex items-center justify-center gap-4">
                                    <span class="text-5xl">🎁</span>
                                    <span>${data.title || 'Baby Registry'}</span>
                                </div>
                            </div>
                            <div class="bg-white rounded-2xl shadow-xl p-8 text-center">
                                <p class="text-lg mb-6" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                                ${data.link ? `
                                <a href="${data.link}" target="_blank" class="inline-block px-10 py-4 rounded-lg font-bold text-white shadow-lg hover:shadow-xl transition border-2" style="background: ${accent}; border-color: ${buttonColor};">
                                    View Our Registry
                                </a>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-center">
                            <div class="inline-block mb-8">
                                <div class="w-72 h-72 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${buttonColor} 0%, ${accent} 100%); border: 12px solid white;">
                                    <div>
                                        <div class="text-8xl mb-3">🎁</div>
                                        <h2 class="text-2xl font-bold text-white">${data.title || 'Baby Registry'}</h2>
                                    </div>
                                </div>
                            </div>
                            <p class="text-lg mb-8 max-w-md mx-auto" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                            ${data.link ? `
                            <a href="${data.link}" target="_blank" class="inline-block px-10 py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl transition" style="background: ${buttonColor};">
                                View Registry
                            </a>` : ''}
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-4xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                                <div class="text-center md:text-right">
                                    <div class="text-7xl sm:text-9xl mb-4 opacity-90">🎁</div>
                                    <div class="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold" style="background: ${accent}30; color: ${buttonColor};">
                                        Gift Registry Available
                                    </div>
                                </div>
                                <div>
                                    <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style="color: ${textColor};">${data.title || 'Baby Registry'}</h2>
                                    <div class="h-1 w-12 sm:w-16 mb-3 sm:mb-4" style="background: ${accent};"></div>
                                    <p class="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                                    ${data.link ? `
                                    <a href="${data.link}" target="_blank" class="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-white shadow-lg hover:shadow-xl transition text-sm sm:text-base" style="background: ${buttonColor};">
                                        View Registry →
                                    </a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'present':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="relative">
                                <!-- Gift wrapping effect -->
                                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-full" style="background: ${accent}; opacity: 0.3;"></div>
                                <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-16 sm:h-20" style="background: ${accent}; opacity: 0.3;"></div>

                                <!-- Present box -->
                                <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center" style="border: 3px solid ${accent};">
                                    <!-- Bow on top -->
                                    <div class="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg" style="background: ${buttonColor}; color: white;">
                                        <span class="text-2xl sm:text-3xl">🎀</span>
                                    </div>

                                    <div class="pt-6 sm:pt-8">
                                        <div class="text-4xl sm:text-5xl mb-4">🎁</div>
                                        <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style="color: ${textColor};">${data.title || 'Baby Registry'}</h2>
                                        <p class="mb-6 opacity-75 text-sm sm:text-base" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                                        ${data.link ? `
                                        <a href="${data.link}" target="_blank" class="inline-block px-6 sm:px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition text-sm sm:text-base" style="background: ${buttonColor};">
                                            Unwrap Registry
                                        </a>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'wishlist':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                                <div class="text-center mb-6">
                                    <div class="text-4xl sm:text-5xl mb-3">🎁</div>
                                    <h2 class="text-xl sm:text-2xl font-bold" style="color: ${textColor};">${data.title || 'Baby Registry'}</h2>
                                </div>

                                <div class="space-y-3 sm:space-y-4 mb-6">
                                    <div class="flex items-center gap-3 p-3 rounded-lg" style="background: ${accent}10;">
                                        <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background: ${accent}; color: white;">
                                            <span class="text-base sm:text-lg">✓</span>
                                        </div>
                                        <div class="text-sm sm:text-base" style="color: ${textColor};">Easy online shopping</div>
                                    </div>
                                    <div class="flex items-center gap-3 p-3 rounded-lg" style="background: ${accent}10;">
                                        <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background: ${accent}; color: white;">
                                            <span class="text-base sm:text-lg">✓</span>
                                        </div>
                                        <div class="text-sm sm:text-base" style="color: ${textColor};">Items we love & need</div>
                                    </div>
                                    <div class="flex items-center gap-3 p-3 rounded-lg" style="background: ${accent}10;">
                                        <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background: ${accent}; color: white;">
                                            <span class="text-base sm:text-lg">✓</span>
                                        </div>
                                        <div class="text-sm sm:text-base" style="color: ${textColor};">Convenient delivery</div>
                                    </div>
                                </div>

                                <p class="text-center mb-6 opacity-75 text-sm sm:text-base" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>

                                ${data.link ? `
                                <div class="text-center">
                                    <a href="${data.link}" target="_blank" class="inline-block px-6 sm:px-8 py-3 rounded-lg font-bold text-white shadow-lg hover:shadow-xl transition text-sm sm:text-base" style="background: ${buttonColor};">
                                        View Wishlist
                                    </a>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'floating':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="relative">
                                <!-- Floating shadow layers -->
                                <div class="absolute inset-0 rounded-2xl transform translate-y-2 opacity-30" style="background: ${accent};"></div>
                                <div class="absolute inset-0 rounded-2xl transform translate-y-4 opacity-15" style="background: ${accent};"></div>

                                <div class="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center transform hover:-translate-y-2 transition-transform">
                                    <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center text-4xl sm:text-5xl shadow-lg" style="background: linear-gradient(135deg, ${accent}, ${buttonColor});">
                                        🎁
                                    </div>
                                    <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style="color: ${textColor};">${data.title || 'Baby Registry'}</h2>
                                    <p class="mb-6 opacity-75 text-sm sm:text-base" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>
                                    ${data.link ? `
                                    <a href="${data.link}" target="_blank" class="inline-block w-full px-8 py-3 sm:py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl transition text-sm sm:text-base" style="background: ${buttonColor};">
                                        Explore Our Registry
                                    </a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'bow':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto">
                            <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <!-- Ribbon across top -->
                                <div class="h-16 sm:h-20 flex items-center justify-center" style="background: linear-gradient(135deg, ${accent}, ${buttonColor});">
                                    <div class="text-3xl sm:text-4xl">🎀</div>
                                </div>

                                <!-- Vertical ribbon effect -->
                                <div class="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 bottom-0" style="background: linear-gradient(180deg, ${accent}, ${buttonColor}); opacity: 0.3;"></div>

                                <div class="relative z-10 p-6 sm:p-8 text-center">
                                    <div class="text-4xl sm:text-5xl mb-4">🎁</div>
                                    <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style="color: ${textColor};">${data.title || 'Baby Registry'}</h2>
                                    <p class="mb-6 opacity-75 text-sm sm:text-base" style="color: ${textColor};">${data.message || 'Your presence is the best gift!'}</p>

                                    ${data.link ? `
                                    <a href="${data.link}" target="_blank" class="inline-block px-6 sm:px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition text-sm sm:text-base" style="background: linear-gradient(135deg, ${buttonColor}, ${accent});">
                                        View Registry
                                    </a>` : ''}
                                </div>
                            </div>
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
