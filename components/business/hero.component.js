// Business Portfolio Hero Banner Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
                name: '💼 Hero Banner',
                allowMultiple: false,  // Only one hero section allowed
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Business/Company Name</label>
                            <input type="text" placeholder="Acme Solutions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tagline/Description</label>
                            <input type="text" placeholder="Innovative Solutions for Modern Challenges" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Industry/Focus Area</label>
                            <input type="text" placeholder="Technology & Consulting" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="industry" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Call-to-Action Button Text (Optional)</label>
                            <input type="text" placeholder="Get Started" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="cta" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Hero Image/Logo</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 cursor-pointer" onclick="this.querySelector('input').click()">
                                <div class="text-3xl mb-2">📸</div>
                                <div class="text-sm text-gray-600">Click to upload</div>
                                <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                            </div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered Classic</option>
                                <option value="modern">Modern Card</option>
                                <option value="split">Split View</option>
                                <option value="minimal">Minimal Clean</option>
                                <option value="bold">Bold Impact</option>
                                <option value="gradient">Gradient Overlay</option>
                                <option value="professional">Professional</option>
                                <option value="floating">Floating Card</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary/Accent Color</label>
                            <input type="color" value="#0891b2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Image Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="imageRadius" onchange="updatePreview()">
                                <option value="rounded-lg">Rounded</option>
                                <option value="rounded-full">Circle</option>
                                <option value="rounded-none">Square</option>
                                <option value="rounded-3xl">Extra Rounded</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Intensity</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="shadow-sm">Subtle</option>
                                <option value="shadow-md">Medium</option>
                                <option value="shadow-lg">Bold</option>
                                <option value="shadow-xl">Extra Bold</option>
                                <option value="shadow-2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#2563eb';
                    const accentColor = style.accent || '#0891b2';
                    const textColor = style.text || '#ffffff';
                    const imageRadius = style.imageRadius || 'rounded-lg';
                    const shadow = style.shadow || 'shadow-lg';
                    const imageSrc = data.image || '';
                    const name = data.name || 'Your Business Name';
                    const tagline = data.tagline || 'Delivering Excellence';
                    const industry = data.industry || 'Professional Services';
                    const cta = data.cta || '';

                    switch(layout) {
                        case 'centered':
                            return `
                                <div class="text-center py-20 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    ${imageSrc ? `<img src="${imageSrc}" class="w-32 h-32 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white ${shadow}">` : '<div class="text-7xl mb-6">💼</div>'}
                                    <h1 class="text-4xl font-bold mb-3 leading-tight">${name}</h1>
                                    <p class="text-xl opacity-90 mb-2">${tagline}</p>
                                    <div class="text-sm opacity-75 mb-6">${industry}</div>
                                    ${cta ? `<button class="px-6 py-3 bg-white rounded-lg font-semibold ${shadow} hover:shadow-xl transition" style="color: ${bgColor};">${cta}</button>` : ''}
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bgColor}15, ${accentColor}15);">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-3xl ${shadow} overflow-hidden border-t-4" style="border-top-color: ${bgColor}">
                                            <div class="p-8 text-center">
                                                ${imageSrc ? `<img src="${imageSrc}" class="w-28 h-28 ${imageRadius} mx-auto mb-5 object-cover ${shadow}">` : `<div class="inline-flex items-center justify-center w-28 h-28 rounded-2xl mb-5 ${shadow}" style="background: linear-gradient(135deg, ${bgColor}, ${accentColor})"><span class="text-6xl">💼</span></div>`}
                                                <h1 class="text-3xl font-bold text-gray-900 mb-3">${name}</h1>
                                                <p class="text-lg text-gray-600 mb-2">${tagline}</p>
                                                <div class="inline-block px-4 py-2 rounded-xl text-sm font-semibold mb-5" style="background: ${bgColor}20; color: ${bgColor}">
                                                    ${industry}
                                                </div>
                                                ${cta ? `<div><button class="px-6 py-3 rounded-lg font-semibold text-white ${shadow} hover:shadow-xl transition" style="background: ${bgColor};">${cta}</button></div>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto flex flex-col gap-6">
                                        <div class="flex-shrink-0 text-center">
                                            ${imageSrc ? `<img src="${imageSrc}" class="w-40 h-40 ${imageRadius} mx-auto object-cover border-4 border-white ${shadow}">` : `<div class="inline-flex items-center justify-center w-40 h-40 ${imageRadius} bg-white bg-opacity-20 ${shadow}"><span class="text-8xl">💼</span></div>`}
                                        </div>
                                        <div class="text-center">
                                            <h1 class="text-4xl font-bold mb-3">${name}</h1>
                                            <p class="text-xl opacity-90 mb-2">${tagline}</p>
                                            <div class="text-sm opacity-75 mb-5">${industry}</div>
                                            ${cta ? `<button class="px-6 py-3 bg-white rounded-lg font-semibold ${shadow} hover:shadow-xl transition" style="color: ${bgColor};">${cta}</button>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="text-center py-24 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="text-5xl mb-5">💼</div>
                                        <h1 class="text-5xl font-light mb-4 tracking-wide">${name}</h1>
                                        <div class="w-20 h-0.5 mx-auto mb-5" style="background: ${textColor}; opacity: 0.4;"></div>
                                        <p class="text-lg opacity-75 mb-2">${tagline}</p>
                                        <div class="text-sm opacity-60 mb-6">${industry}</div>
                                        ${cta ? `<button class="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg font-semibold hover:bg-opacity-30 transition">${cta}</button>` : ''}
                                    </div>
                                </div>
                            `;

                        case 'bold':
                            return `
                                <div class="relative py-24 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="absolute inset-0 opacity-10">
                                        <div class="absolute top-0 right-0 w-72 h-72 rounded-full" style="background: ${textColor}; transform: translate(50%, -50%);"></div>
                                        <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full" style="background: ${accentColor}; transform: translate(-50%, 50%);"></div>
                                    </div>
                                    <div class="relative text-center max-w-md mx-auto">
                                        ${imageSrc ? `<img src="${imageSrc}" class="w-32 h-32 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white shadow-2xl">` : '<div class="text-8xl mb-6">💼</div>'}
                                        <h1 class="text-5xl font-black mb-4 tracking-tight leading-tight">${name}</h1>
                                        <p class="text-2xl font-semibold opacity-90 mb-2">${tagline}</p>
                                        <div class="text-base opacity-75 mb-6">${industry}</div>
                                        ${cta ? `<button class="px-8 py-4 bg-white rounded-xl font-bold shadow-2xl hover:shadow-xl transition transform hover:scale-105" style="color: ${bgColor};">${cta}</button>` : ''}
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${accentColor} 100%); color: ${textColor}">
                                    ${imageSrc ? `
                                        <div class="absolute inset-0 opacity-20">
                                            <img src="${imageSrc}" class="w-full h-full object-cover">
                                        </div>
                                        <div class="absolute inset-0" style="background: linear-gradient(135deg, ${bgColor}cc 0%, ${accentColor}cc 100%);"></div>
                                    ` : `
                                        <div class="absolute top-0 right-0 text-9xl opacity-10 -mt-8 -mr-8">💼</div>
                                        <div class="absolute bottom-0 left-0 text-9xl opacity-10 -mb-8 -ml-8">💼</div>
                                    `}
                                    <div class="relative text-center max-w-md mx-auto">
                                        <div class="inline-block px-4 py-1.5 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-xs font-bold mb-5 uppercase tracking-wide">
                                            ${industry}
                                        </div>
                                        <h1 class="text-4xl font-bold mb-4 leading-tight">${name}</h1>
                                        <p class="text-xl opacity-95 mb-6">${tagline}</p>
                                        ${cta ? `<button class="px-6 py-3 bg-white rounded-lg font-semibold ${shadow} hover:shadow-xl transition" style="color: ${bgColor};">${cta}</button>` : ''}
                                    </div>
                                </div>
                            `;

                        case 'professional':
                            return `
                                <div class="py-16 px-6 bg-gray-50">
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="mb-6">
                                            ${imageSrc ? `<img src="${imageSrc}" class="w-24 h-24 ${imageRadius} mx-auto mb-4 object-cover border-3 ${shadow}" style="border-color: ${bgColor};">` : `<div class="inline-flex items-center justify-center w-24 h-24 rounded-xl ${shadow} mb-4" style="background: ${bgColor}; color: white;"><span class="text-5xl">💼</span></div>`}
                                            <div class="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style="background: ${bgColor}20; color: ${bgColor};">
                                                ${industry}
                                            </div>
                                            <h1 class="text-3xl font-bold text-gray-900 mb-2">${name}</h1>
                                            <p class="text-lg text-gray-600">${tagline}</p>
                                        </div>
                                        ${cta ? `<button class="px-6 py-3 rounded-lg font-semibold text-white ${shadow} hover:shadow-xl transition" style="background: ${bgColor};">${cta}</button>` : ''}
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-12 px-6" style="background: linear-gradient(to bottom, ${bgColor}10, transparent);">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-3xl ${shadow} p-8">
                                            <div class="flex flex-col items-center text-center">
                                                ${imageSrc ? `
                                                    <div class="relative mb-6">
                                                        <img src="${imageSrc}" class="w-28 h-28 ${imageRadius} object-cover ${shadow}">
                                                        <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm ${shadow}" style="background: ${accentColor}; color: white;">
                                                            ✨
                                                        </div>
                                                    </div>
                                                ` : `
                                                    <div class="relative mb-6">
                                                        <div class="w-28 h-28 rounded-2xl flex items-center justify-center ${shadow}" style="background: linear-gradient(135deg, ${bgColor}, ${accentColor})">
                                                            <span class="text-6xl">💼</span>
                                                        </div>
                                                        <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm ${shadow}" style="background: ${accentColor}; color: white;">
                                                            ✨
                                                        </div>
                                                    </div>
                                                `}
                                                <div class="mb-6">
                                                    <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style="background: ${bgColor}15; color: ${bgColor};">
                                                        ${industry}
                                                    </div>
                                                    <h1 class="text-3xl font-bold text-gray-900 mb-2">${name}</h1>
                                                    <p class="text-lg text-gray-600">${tagline}</p>
                                                </div>
                                                ${cta ? `<button class="px-6 py-3 rounded-lg font-semibold text-white ${shadow} hover:shadow-xl transition" style="background: ${bgColor};">${cta}</button>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="text-center py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    ${imageSrc ? `<img src="${imageSrc}" class="w-28 h-28 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white ${shadow}">` : '<div class="text-7xl mb-6">💼</div>'}
                                    <h1 class="text-4xl font-bold mb-3">${name}</h1>
                                    <p class="text-xl opacity-90 mb-2">${tagline}</p>
                                    <div class="text-sm opacity-75 mb-6">${industry}</div>
                                    ${cta ? `<button class="px-6 py-3 bg-white rounded-lg font-semibold ${shadow} hover:shadow-xl transition" style="color: ${bgColor};">${cta}</button>` : ''}
                                </div>
                            `;
                    }
                }
            };
