// Call to Action Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.cta = {
                name: '🎯 Call to Action',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                            <input type="text" placeholder="Ready to Work Together?" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="heading" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Subtext</label>
                            <input type="text" placeholder="Let's bring your ideas to life" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtext" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                            <input type="text" placeholder="Get Started" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="button" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered</option>
                                <option value="minimal">Minimal</option>
                                <option value="bold">Bold & Vibrant</option>
                                <option value="boxed">Boxed</option>
                                <option value="gradient">Gradient</option>
                                <option value="split">Split Layout</option>
                                <option value="badge">Badge Style</option>
                                <option value="floating">Floating Card</option>
                                <option value="ribbon">Ribbon Banner</option>
                                <option value="modern-stack">Modern Stacked</option>
                                <option value="neon-glow">Neon Glow</option>
                                <option value="dual-action">Dual Action</option>
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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-full">Pill</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="sm">Subtle</option>
                                <option value="md">Medium</option>
                                <option value="lg">Bold</option>
                                <option value="xl">Extra Bold</option>
                                <option value="2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#14b8a6';
                    const secondaryColor = style.secondary || '#10b981';
                    const textColor = style.text || '#ffffff';
                    const buttonBg = style.buttonBg || '#ffffff';
                    const shadow = style.shadow || 'lg';
                    const shadowClass = `shadow-${shadow}`;
                    const radius = style.radius || 'rounded-lg';
                    const heading = data.heading || 'Ready to Work Together?';
                    const subtext = data.subtext || "Let's bring your ideas to life";
                    const button = data.button || 'Get Started';

                    // Calculate contrasting text color for button
                    const buttonTextColor = buttonBg === '#ffffff' ? '#14b8a6' : '#ffffff';

                    switch(layout) {
                        case 'centered':
                            return `
                                <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <h2 class="text-2xl font-bold mb-3">${heading}</h2>
                                        <p class="text-lg opacity-90 mb-6">${subtext}</p>
                                        <button class="px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition" style="background: ${buttonBg}; color: ${buttonTextColor};">
                                            ${button}
                                        </button>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <h2 class="text-3xl font-light mb-2">${heading}</h2>
                                        <div class="w-16 h-0.5 mx-auto mb-4" style="background: ${textColor}; opacity: 0.5;"></div>
                                        <p class="text-base opacity-75 mb-6">${subtext}</p>
                                        <button class="px-6 py-2 rounded-full font-medium border-2 transition" style="border-color: ${buttonBg}; color: ${buttonBg};">
                                            ${button} →
                                        </button>
                                    </div>
                                </div>
                            `;

                        case 'bold':
                            return `
                                <div class="relative py-20 px-6 text-center overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="absolute inset-0 opacity-10">
                                        <div class="absolute top-0 right-0 w-64 h-64 rounded-full" style="background: ${textColor}; transform: translate(50%, -50%);"></div>
                                        <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full" style="background: ${textColor}; transform: translate(-50%, 50%);"></div>
                                    </div>
                                    <div class="relative max-w-md mx-auto">
                                        <h2 class="text-3xl font-black mb-4 tracking-tight">${heading}</h2>
                                        <p class="text-xl font-medium opacity-90 mb-8">${subtext}</p>
                                        <button class="px-10 py-4 rounded-xl font-bold shadow-2xl hover:scale-105 transition transform" style="background: ${buttonBg}; color: ${buttonTextColor};">
                                            ${button} ⚡
                                        </button>
                                    </div>
                                </div>
                            `;

                        case 'boxed':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4" style="border-color: ${bgColor};">
                                        <div class="text-4xl mb-4">🎯</div>
                                        <h2 class="text-2xl font-bold mb-3 text-gray-900">${heading}</h2>
                                        <p class="text-gray-600 mb-6">${subtext}</p>
                                        <button class="px-8 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition" style="background: ${bgColor};">
                                            ${button}
                                        </button>
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${bgColor}, ${bgColor}dd); color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="inline-block px-4 py-2 rounded-full mb-4" style="background: rgba(255,255,255,0.2);">
                                            <span class="text-sm font-medium">Limited Time Offer</span>
                                        </div>
                                        <h2 class="text-3xl font-bold mb-3">${heading}</h2>
                                        <p class="text-lg opacity-90 mb-8">${subtext}</p>
                                        <button class="px-10 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition transform" style="background: ${buttonBg}; color: ${buttonTextColor};">
                                            ${button}
                                        </button>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bgColor}, ${secondaryColor}); color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white ${radius} ${shadowClass} overflow-hidden">
                                            <div class="p-6" style="background: linear-gradient(to right, ${bgColor}20, ${secondaryColor}20);">
                                                <h2 class="text-2xl font-bold mb-2 text-gray-900">${heading}</h2>
                                                <p class="text-gray-600 mb-6">${subtext}</p>
                                                <button class="w-full py-3 px-6 ${radius} font-bold text-white ${shadowClass} hover:shadow-2xl transition" style="background: linear-gradient(135deg, ${bgColor}, ${secondaryColor});">
                                                    ${button} →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'badge':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="relative">
                                            <div class="bg-white ${radius} ${shadowClass} p-8 text-center">
                                                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                                    <div class="px-6 py-2 ${radius} ${shadowClass} text-white font-bold text-sm" style="background: linear-gradient(135deg, ${bgColor}, ${secondaryColor});">
                                                        Special Offer
                                                    </div>
                                                </div>
                                                <div class="mt-4">
                                                    <h2 class="text-2xl font-bold mb-3 text-gray-900">${heading}</h2>
                                                    <p class="text-gray-600 mb-6">${subtext}</p>
                                                    <button class="px-8 py-3 ${radius} font-bold text-white ${shadowClass} hover:shadow-2xl transition" style="background: ${bgColor};">
                                                        ${button}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="mb-6">
                                            <div class="inline-block w-16 h-16 ${radius} ${shadowClass} flex items-center justify-center text-3xl mb-4" style="background: ${secondaryColor};">
                                                🎯
                                            </div>
                                        </div>
                                        <h2 class="text-3xl font-bold mb-3">${heading}</h2>
                                        <p class="text-lg opacity-90 mb-8">${subtext}</p>
                                        <div class="relative inline-block">
                                            <button class="px-8 py-3 ${radius} font-bold ${shadowClass} hover:shadow-2xl transition transform hover:-translate-y-1" style="background: ${buttonBg}; color: ${buttonTextColor};">
                                                ${button}
                                            </button>
                                            <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xl ${shadowClass}" style="background: ${secondaryColor};">
                                                →
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'ribbon':
                            return `
                                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="absolute top-0 right-0 w-32 h-32 transform translate-x-12 -translate-y-12 rotate-45 opacity-20" style="background: ${secondaryColor};"></div>
                                    <div class="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-8 translate-y-8 rotate-45 opacity-20" style="background: ${secondaryColor};"></div>
                                    <div class="max-w-md mx-auto text-center relative z-10">
                                        <div class="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4 ${shadowClass}" style="background: ${secondaryColor};">
                                            LIMITED OFFER
                                        </div>
                                        <h2 class="text-2xl font-bold mb-3">${heading}</h2>
                                        <p class="text-base opacity-90 mb-6">${subtext}</p>
                                        <button class="px-8 py-3 ${radius} font-bold ${shadowClass} hover:shadow-2xl transition" style="background: ${buttonBg}; color: ${buttonTextColor};">
                                            ${button} →
                                        </button>
                                    </div>
                                </div>
                            `;

                        case 'modern-stack':
                            return `
                                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bgColor}, ${secondaryColor}); color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="space-y-4">
                                            <div class="bg-white bg-opacity-10 backdrop-blur-sm ${radius} p-6 ${shadowClass} transform -rotate-1">
                                                <h2 class="text-2xl font-bold mb-2">${heading}</h2>
                                                <p class="text-sm opacity-90">${subtext}</p>
                                            </div>
                                            <div class="bg-white bg-opacity-20 backdrop-blur-sm ${radius} p-5 ${shadowClass} transform rotate-1">
                                                <button class="w-full py-3 ${radius} font-bold ${shadowClass} hover:shadow-2xl transition" style="background: ${buttonBg}; color: ${buttonTextColor};">
                                                    ${button}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'neon-glow':
                            return `
                                <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <div class="relative inline-block mb-6">
                                            <h2 class="text-3xl font-bold" style="text-shadow: 0 0 20px ${secondaryColor}, 0 0 40px ${secondaryColor}60;">${heading}</h2>
                                        </div>
                                        <p class="text-lg opacity-90 mb-8">${subtext}</p>
                                        <button class="px-8 py-3 ${radius} font-bold transition transform hover:scale-105" style="background: ${buttonBg}; color: ${buttonTextColor}; box-shadow: 0 0 20px ${buttonBg}80, 0 0 40px ${buttonBg}40;">
                                            ${button}
                                        </button>
                                    </div>
                                </div>
                            `;

                        case 'dual-action':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto text-center">
                                        <h2 class="text-2xl font-bold mb-2">${heading}</h2>
                                        <p class="text-base opacity-90 mb-6">${subtext}</p>
                                        <div class="flex gap-3 justify-center">
                                            <button class="flex-1 px-6 py-3 ${radius} font-bold ${shadowClass} hover:shadow-2xl transition" style="background: ${buttonBg}; color: ${buttonTextColor};">
                                                ${button}
                                            </button>
                                            <button class="flex-1 px-6 py-3 ${radius} font-bold border-2 hover:bg-white hover:bg-opacity-10 transition" style="border-color: ${buttonBg}; color: ${buttonBg};">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md mx-auto">
                                        <h2 class="text-2xl font-bold mb-3">${heading}</h2>
                                        <p class="text-lg opacity-90 mb-6">${subtext}</p>
                                        <button class="px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition" style="background: ${buttonBg}; color: ${buttonTextColor};">
                                            ${button}
                                        </button>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
