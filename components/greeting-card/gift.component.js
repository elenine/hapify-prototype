// Gift Section Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gift = {
    name: '🎁 Gift Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Title</label>
                <input type="text" placeholder="A Special Gift for You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Image (optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">🎁</div>
                    <div class="text-sm text-gray-600">Upload gift photo</div>
                    <input type="file" class="hidden section-data" data-field="giftImage" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Description</label>
                <textarea placeholder="May this gift bring joy to your special day!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="wrapped">Wrapped Gift - Classic</option>
                    <option value="opened">Opened Box - Surprise</option>
                    <option value="elegant">Elegant - Bow & Ribbon</option>
                    <option value="modern">Modern - Clean</option>
                    <option value="festive">Festive - Colorful</option>
                    <option value="minimal">Minimal - Simple</option>
                    <option value="luxury">Luxury - Premium Gold</option>
                    <option value="sparkle">Sparkle - Glittery Effect</option>
                    <option value="stack">Stack - Multiple Gifts</option>
                    <option value="unwrap">Unwrap - Opening Moment</option>
                    <option value="ribbon-burst">Ribbon Burst - Explosion</option>
                    <option value="vintage">Vintage - Retro Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'wrapped';
        const bgColor = style.bg || '#f0fdf4';
        const borderColor = style.border || '#10b981';
        const textColor = style.text || '#1f2937';
        const title = data.title || 'A Special Gift for You';
        const description = data.description || 'May this gift bring joy to your special day!';

        const iconSizes = {
            medium: 'text-7xl',
            large: 'text-8xl',
            xlarge: 'text-9xl'
        };
        const iconSize = iconSizes[style.iconSize] || 'text-8xl';

        const giftDisplay = data.giftImage ?
            `<img src="${data.giftImage}" class="w-48 h-48 rounded-xl mx-auto object-cover shadow-lg">` :
            `<div class="${iconSize} mb-6">🎁</div>`;

        if (layout === 'wrapped') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto border-4 rounded-2xl p-8 text-center" style="border-color: ${borderColor}">
                        ${giftDisplay}
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg leading-relaxed">${description}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'opened') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-6xl mb-4">🎁✨</div>
                        ${giftDisplay}
                        <h3 class="text-2xl font-bold mb-4" style="color: ${borderColor}">${title}</h3>
                        <p class="text-lg leading-relaxed">${description}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto p-8 rounded-2xl shadow-xl text-center" style="background: linear-gradient(135deg, ${borderColor}22, ${borderColor}11)">
                        <div class="text-4xl mb-4">🎀</div>
                        ${giftDisplay}
                        <h3 class="text-2xl font-serif italic mb-4">${title}</h3>
                        <p class="text-base leading-relaxed">${description}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
                        <div class="md:w-1/2 text-center">
                            ${giftDisplay}
                        </div>
                        <div class="md:w-1/2">
                            <h3 class="text-2xl font-bold mb-4" style="color: ${borderColor}">${title}</h3>
                            <p class="text-lg">${description}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'festive') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 opacity-10 text-9xl flex items-center justify-center">🎁</div>
                    <div class="relative z-10 text-center">
                        <div class="text-4xl mb-4">🎉🎊🎈</div>
                        ${giftDisplay}
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg max-w-xl mx-auto">${description}</p>
                        <div class="text-4xl mt-4">✨🎁✨</div>
                    </div>
                </div>
            `;
        }

        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">🎁</div>
                        <h3 class="text-xl font-semibold mb-3">${title}</h3>
                        <p class="text-base">${description}</p>
                    </div>
                </div>
            `;
        }

        if (layout === 'luxury') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #ffd700">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);"></div>
                    <div class="relative z-10 max-w-2xl mx-auto text-center">
                        <div class="mb-4 flex justify-center gap-2 text-3xl">
                            <span class="animate-pulse">✨</span>
                            <span class="animate-pulse" style="animation-delay: 0.5s">⭐</span>
                            <span class="animate-pulse" style="animation-delay: 1s">✨</span>
                        </div>
                        <div class="border-4 border-yellow-500 rounded-2xl p-8 shadow-2xl" style="background: rgba(255, 215, 0, 0.05); box-shadow: 0 0 40px rgba(255, 215, 0, 0.3)">
                            ${giftDisplay}
                            <h3 class="text-3xl font-bold mb-4 font-serif" style="text-shadow: 0 0 20px rgba(255, 215, 0, 0.5)">${title}</h3>
                            <p class="text-lg leading-relaxed text-yellow-100">${description}</p>
                        </div>
                        <div class="mt-4 flex justify-center gap-2 text-3xl">
                            <span class="animate-pulse">✨</span>
                            <span class="animate-pulse" style="animation-delay: 0.5s">⭐</span>
                            <span class="animate-pulse" style="animation-delay: 1s">✨</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'sparkle') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    ${[...Array(30)].map((_, i) => {
                        const sparkles = ['✨', '⭐', '💫', '🌟'];
                        const sparkle = sparkles[i % sparkles.length];
                        const top = Math.random() * 100;
                        const left = Math.random() * 100;
                        const size = ['text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 3)];
                        const delay = Math.random() * 3;
                        return `<div class="absolute ${size} animate-pulse" style="top: ${top}%; left: ${left}%; animation-delay: ${delay}s; opacity: 0.6">${sparkle}</div>`;
                    }).join('')}
                    <div class="relative z-10 max-w-2xl mx-auto text-center">
                        <div class="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform" style="box-shadow: 0 0 60px rgba(236, 72, 153, 0.4)">
                            ${giftDisplay}
                            <h3 class="text-3xl font-bold mb-4" style="background: linear-gradient(135deg, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent">${title}</h3>
                            <p class="text-lg leading-relaxed" style="color: ${textColor}">${description}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'stack') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="relative inline-block mb-8">
                            <div class="absolute top-4 left-4 text-6xl opacity-40 transform -rotate-12" style="color: ${borderColor}">🎁</div>
                            <div class="absolute top-2 right-4 text-7xl opacity-50 transform rotate-6" style="color: ${borderColor}">🎁</div>
                            <div class="relative z-10 text-8xl" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1))">${data.giftImage ? `<img src="${data.giftImage}" class="w-56 h-56 rounded-xl mx-auto object-cover shadow-xl">` : '🎁'}</div>
                        </div>
                        <div class="bg-white bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border-2" style="border-color: ${borderColor}">
                            <h3 class="text-2xl font-bold mb-4">${title}</h3>
                            <p class="text-lg leading-relaxed">${description}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'unwrap') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative mb-8">
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl opacity-80 animate-bounce" style="color: ${borderColor}">🎀</div>
                            <div class="text-center pt-12">
                                <div class="relative inline-block">
                                    <div class="absolute -top-4 -left-4 w-16 h-2 transform -rotate-45" style="background: ${borderColor}; opacity: 0.6"></div>
                                    <div class="absolute -top-4 -right-4 w-16 h-2 transform rotate-45" style="background: ${borderColor}; opacity: 0.6"></div>
                                    <div class="border-4 border-dashed rounded-2xl p-8" style="border-color: ${borderColor}">
                                        ${giftDisplay}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center bg-gradient-to-r from-transparent via-white to-transparent bg-opacity-30 rounded-xl p-6">
                            <div class="text-4xl mb-4">🎉 ✨ 🎊</div>
                            <h3 class="text-2xl font-bold mb-4">${title}</h3>
                            <p class="text-lg leading-relaxed">${description}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'ribbon-burst') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 flex items-center justify-center">
                        ${[...Array(12)].map((_, i) => {
                            const angle = (i * 30) * (Math.PI / 180);
                            const length = 120;
                            const x = Math.cos(angle) * length;
                            const y = Math.sin(angle) * length;
                            return `<div class="absolute w-2 h-32 transform origin-center" style="background: linear-gradient(to bottom, ${borderColor}, transparent); left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(${i * 30}deg); opacity: 0.3"></div>`;
                        }).join('')}
                    </div>
                    <div class="relative z-10 max-w-2xl mx-auto text-center">
                        <div class="inline-block bg-white rounded-full p-4 shadow-2xl mb-6">
                            ${giftDisplay}
                        </div>
                        <div class="flex justify-center gap-3 text-5xl mb-4">
                            <span style="color: ${borderColor}">🎀</span>
                            <span style="color: ${borderColor}">🎀</span>
                            <span style="color: ${borderColor}">🎀</span>
                        </div>
                        <div class="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                            <h3 class="text-2xl font-bold mb-4" style="color: ${borderColor}">${title}</h3>
                            <p class="text-lg leading-relaxed">${description}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'vintage') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, #f5f3e8 0%, #e8e4d0 100%); color: #3e2723">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-8 border-double p-8 rounded-lg" style="border-color: #8d6e63; background: rgba(255,255,255,0.6)">
                            <div class="text-center mb-6">
                                <div class="flex justify-center gap-2 text-3xl mb-4" style="color: #8d6e63">
                                    <span>❖</span>
                                    <span>✦</span>
                                    <span>❖</span>
                                </div>
                                ${giftDisplay}
                                <div class="flex justify-center gap-2 text-3xl mt-4" style="color: #8d6e63">
                                    <span>❖</span>
                                    <span>✦</span>
                                    <span>❖</span>
                                </div>
                            </div>
                            <div class="text-center border-t-2 border-b-2 py-4" style="border-color: #8d6e63">
                                <h3 class="text-2xl font-serif italic mb-4" style="letter-spacing: 0.05em">${title}</h3>
                                <p class="text-base leading-relaxed font-serif" style="color: #5d4037">${description}</p>
                            </div>
                            <div class="mt-4 text-center text-sm font-serif italic" style="color: #8d6e63">
                                A Special Token of Appreciation
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-2xl mx-auto border-4 rounded-2xl p-8 text-center" style="border-color: ${borderColor}">
                    ${giftDisplay}
                    <h3 class="text-2xl font-bold mb-4">${title}</h3>
                    <p class="text-lg leading-relaxed">${description}</p>
                </div>
            </div>
        `;
    }
};
