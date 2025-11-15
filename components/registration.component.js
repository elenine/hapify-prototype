// Registration CTA Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.registration = {
                name: '🎟️ Registration',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Headline</label>
                            <input type="text" placeholder="Register Now" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="headline" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea placeholder="Secure your spot today! Limited seats available." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                            <input type="text" placeholder="Register Now" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="buttonText" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Registration URL</label>
                            <input type="url" placeholder="https://eventbrite.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="url" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Price/Info</label>
                            <input type="text" placeholder="Early bird: $99 | Regular: $149" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="price" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="classic">Classic CTA</option>
                                <option value="card">Card Style</option>
                                <option value="split">Split View</option>
                                <option value="minimal">Minimal Clean</option>
                                <option value="gradient">Bold Gradient</option>
                                <option value="modern">Modern Badge</option>
                                <option value="floating">Floating Action</option>
                                <option value="banner">Full Banner</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonBg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Text Color</label>
                            <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonText" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-full">Full Rounded</option>
                                <option value="rounded-none">Sharp</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="shadow-md">Medium</option>
                                <option value="shadow-lg">Bold</option>
                                <option value="shadow-xl">Extra Bold</option>
                                <option value="shadow-2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'classic';
                    const bgColor = style.bg || '#14b8a6';
                    const textColor = style.text || '#ffffff';
                    const buttonBg = style.buttonBg || '#ffffff';
                    const buttonText = style.buttonText || '#14b8a6';
                    const headline = data.headline || 'Register Now';
                    const description = data.description || 'Secure your spot today! Limited seats available.';
                    const buttonLabel = data.buttonText || 'Register Now';
                    const url = data.url || '#';
                    const price = data.price || '';

                    switch(layout) {
                        case 'classic':
                            return `
                                <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="text-5xl mb-4">🎟️</div>
                                        <h2 class="text-3xl font-bold mb-4">${headline}</h2>
                                        <p class="text-lg mb-2 opacity-90">${description}</p>
                                        ${price ? `<p class="text-sm mb-6 opacity-80">${price}</p>` : '<div class="mb-6"></div>'}
                                        <a href="${url}" class="inline-block px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition" style="background: ${buttonBg}; color: ${buttonText}">
                                            ${buttonLabel}
                                        </a>
                                    </div>
                                </div>
                            `;

                        case 'card':
                            return `
                                <div class="py-12 px-6" style="background: #f9fafb">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4" style="border-top-color: ${bgColor}">
                                            <div class="p-8 text-center">
                                                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-lg" style="background: ${bgColor}">
                                                    <span class="text-4xl">🎟️</span>
                                                </div>
                                                <h2 class="text-2xl font-bold mb-3 text-gray-900">${headline}</h2>
                                                <p class="text-gray-600 mb-4">${description}</p>
                                                ${price ? `
                                                    <div class="inline-block px-4 py-2 rounded-lg mb-6 text-sm font-semibold" style="background: ${bgColor}20; color: ${bgColor}">
                                                        ${price}
                                                    </div>
                                                ` : '<div class="mb-6"></div>'}
                                                <a href="${url}" class="inline-block w-full px-8 py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition" style="background: ${bgColor}">
                                                    ${buttonLabel}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: #f9fafb">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                                            <div class="flex flex-col">
                                                <div class="p-8 text-center" style="background: linear-gradient(135deg, ${bgColor}, ${bgColor}dd)">
                                                    <div class="text-6xl mb-2">🎟️</div>
                                                    <h2 class="text-2xl font-bold" style="color: ${textColor}">${headline}</h2>
                                                </div>
                                                <div class="p-8">
                                                    <p class="text-gray-600 mb-4 text-center">${description}</p>
                                                    ${price ? `
                                                        <div class="text-center mb-4">
                                                            <span class="inline-block px-4 py-2 rounded-lg text-sm font-semibold" style="background: ${bgColor}15; color: ${bgColor}">
                                                                ${price}
                                                            </span>
                                                        </div>
                                                    ` : ''}
                                                    <a href="${url}" class="block w-full text-center px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition" style="background: ${bgColor}; color: ${textColor}">
                                                        ${buttonLabel}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: #ffffff">
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="inline-block p-4 rounded-full mb-4" style="background: ${bgColor}20">
                                            <span class="text-4xl">🎟️</span>
                                        </div>
                                        <h2 class="text-2xl font-bold mb-3" style="color: ${bgColor}">${headline}</h2>
                                        <p class="text-gray-600 mb-4">${description}</p>
                                        ${price ? `<p class="text-sm text-gray-500 mb-6">${price}</p>` : '<div class="mb-6"></div>'}
                                        <a href="${url}" class="inline-block px-10 py-3 rounded-full font-semibold border-2 hover:shadow-lg transition" style="border-color: ${bgColor}; color: ${bgColor}">
                                            ${buttonLabel} →
                                        </a>
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="py-16 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%); color: ${textColor}">
                                    <div class="absolute top-0 right-0 text-9xl opacity-10 -mt-8 -mr-8">🎟️</div>
                                    <div class="absolute bottom-0 left-0 text-9xl opacity-10 -mb-8 -ml-8">🎟️</div>
                                    <div class="max-w-md mx-auto text-center relative">
                                        <div class="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-medium mb-4">
                                            Limited Availability
                                        </div>
                                        <h2 class="text-3xl font-bold mb-4">${headline}</h2>
                                        <p class="text-lg mb-6 opacity-90">${description}</p>
                                        ${price ? `
                                            <div class="inline-block px-6 py-2 bg-white bg-opacity-20 rounded-full text-sm font-bold mb-6">
                                                ${price}
                                            </div>
                                        ` : '<div class="mb-6"></div>'}
                                        <a href="${url}" class="inline-block px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition transform hover:scale-105" style="background: ${buttonBg}; color: ${buttonText}">
                                            ${buttonLabel}
                                        </a>
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            const secondaryColor = style.secondary || '#10b981';
                            return `
                                <div class="py-12 px-6" style="background: #f9fafb;">
                                    <div class="max-w-md mx-auto">
                                        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                                            <div class="absolute inset-0" style="background: linear-gradient(135deg, ${bgColor}, ${secondaryColor});"></div>
                                            <div class="absolute inset-0 opacity-10">
                                                <div class="absolute top-0 right-0 text-9xl -mt-8 -mr-8">🎟️</div>
                                                <div class="absolute bottom-0 left-0 text-9xl -mb-8 -ml-8">🎟️</div>
                                            </div>
                                            <div class="relative p-8 text-center" style="color: ${textColor};">
                                                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-5 bg-white bg-opacity-20 backdrop-blur-sm shadow-lg">
                                                    <span class="text-4xl">🎟️</span>
                                                </div>
                                                <h2 class="text-3xl font-bold mb-4">${headline}</h2>
                                                <p class="text-lg mb-6 opacity-95">${description}</p>
                                                ${price ? `
                                                    <div class="inline-flex items-center gap-2 px-5 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
                                                        <span>💰</span>
                                                        <span>${price}</span>
                                                    </div>
                                                ` : '<div class="mb-6"></div>'}
                                                <a href="${url}" class="inline-block px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition transform hover:scale-105" style="background: ${buttonBg}; color: ${buttonText};">
                                                    ${buttonLabel} →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-12 px-6" style="background: linear-gradient(to bottom, ${bgColor}10, transparent);">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
                                            <div class="text-center">
                                                <div class="relative inline-block mb-5">
                                                    <div class="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg" style="background: linear-gradient(135deg, ${bgColor}, ${bgColor}dd); color: white;">
                                                        <span class="text-5xl">🎟️</span>
                                                    </div>
                                                    <div class="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg" style="background: ${bgColor}; color: white;">
                                                        ✨
                                                    </div>
                                                </div>
                                                <h2 class="text-3xl font-bold text-gray-900 mb-3">${headline}</h2>
                                                <p class="text-gray-600 mb-5">${description}</p>
                                                ${price ? `
                                                    <div class="inline-block mb-6">
                                                        <div class="px-6 py-3 rounded-xl border-2" style="border-color: ${bgColor}30; background: ${bgColor}10;">
                                                            <div class="text-xs font-bold text-gray-500 uppercase mb-1">Pricing</div>
                                                            <div class="text-sm font-bold" style="color: ${bgColor};">${price}</div>
                                                        </div>
                                                    </div>
                                                ` : '<div class="mb-6"></div>'}
                                                <a href="${url}" class="block w-full py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition" style="background: ${bgColor}; color: white;">
                                                    ${buttonLabel}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'banner':
                            return `
                                <div class="relative py-16 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bgColor}, ${bgColor}dd); color: ${textColor};">
                                    <div class="absolute inset-0 opacity-10">
                                        <div class="absolute top-0 left-0 w-64 h-64 rounded-full -mt-32 -ml-32" style="background: ${buttonBg};"></div>
                                        <div class="absolute bottom-0 right-0 w-64 h-64 rounded-full -mb-32 -mr-32" style="background: ${buttonBg};"></div>
                                    </div>
                                    <div class="max-w-md mx-auto relative">
                                        <div class="flex flex-col items-center text-center">
                                            <div class="text-7xl mb-5">🎟️</div>
                                            <div class="inline-block px-4 py-1.5 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                                                Don't Miss Out
                                            </div>
                                            <h2 class="text-4xl font-black mb-4 leading-tight">${headline}</h2>
                                            <p class="text-xl mb-6 opacity-95 max-w-sm">${description}</p>
                                            ${price ? `
                                                <div class="flex items-center gap-2 mb-6 px-6 py-3 bg-white bg-opacity-15 backdrop-blur-sm rounded-full">
                                                    <span class="text-2xl">💳</span>
                                                    <span class="text-lg font-bold">${price}</span>
                                                </div>
                                            ` : '<div class="mb-6"></div>'}
                                            <a href="${url}" class="inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105" style="background: ${buttonBg}; color: ${buttonText};">
                                                <span>${buttonLabel}</span>
                                                <span class="text-2xl">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="text-5xl mb-4">🎟️</div>
                                        <h2 class="text-3xl font-bold mb-4">${headline}</h2>
                                        <p class="text-lg mb-2 opacity-90">${description}</p>
                                        ${price ? `<p class="text-sm mb-6 opacity-80">${price}</p>` : '<div class="mb-6"></div>'}
                                        <a href="${url}" class="inline-block px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition" style="background: ${buttonBg}; color: ${buttonText}">
                                            ${buttonLabel}
                                        </a>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
