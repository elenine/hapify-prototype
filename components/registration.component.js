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
