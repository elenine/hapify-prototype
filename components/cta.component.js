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
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonBg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#2563eb';
                    const textColor = style.text || '#ffffff';
                    const buttonBg = style.buttonBg || '#ffffff';
                    const heading = data.heading || 'Ready to Work Together?';
                    const subtext = data.subtext || "Let's bring your ideas to life";
                    const button = data.button || 'Get Started';

                    // Calculate contrasting text color for button
                    const buttonTextColor = buttonBg === '#ffffff' ? '#2563eb' : '#ffffff';

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
