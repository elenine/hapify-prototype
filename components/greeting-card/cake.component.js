// Birthday Cake Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.cake = {
    name: '🎂 Birthday Cake',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cake Title</label>
                <input type="text" placeholder="Make a Wish!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cake Image (optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">🎂</div>
                    <div class="text-sm text-gray-600">Upload cake photo</div>
                    <input type="file" class="hidden section-data" data-field="cakeImage" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Time to blow out the candles and make your dreams come true!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Classic</option>
                    <option value="spotlight">Spotlight - Dramatic</option>
                    <option value="framed">Framed - Elegant</option>
                    <option value="animated">Animated - Fun</option>
                    <option value="split">Split Layout</option>
                    <option value="floating">Floating - Modern</option>
                    <option value="vintage">Vintage - Retro Bakery</option>
                    <option value="neon">Neon - Glowing Celebration</option>
                    <option value="party">Party - Festive Explosion</option>
                    <option value="tiered">Tiered - Multi-Layer</option>
                    <option value="bakery">Bakery - Display Case</option>
                    <option value="celebration">Celebration - Gift Box</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cake Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Add Decorations</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="decorations" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="candles">Candles</option>
                    <option value="confetti">Confetti</option>
                    <option value="sparkles">Sparkles</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#ffffff';
        const textColor = style.text || '#1f2937';
        const accentColor = style.accent || globalStyles.primaryColor;
        const title = data.title || 'Make a Wish!';
        const message = data.message || 'Time to blow out the candles!';

        const iconSizes = {
            small: 'text-7xl',
            medium: 'text-8xl',
            large: 'text-9xl',
            xlarge: 'text-[12rem]'
        };
        const iconSize = iconSizes[style.iconSize] || 'text-9xl';

        const cakeDisplay = data.cakeImage ?
            `<img src="${data.cakeImage}" class="w-64 h-64 rounded-2xl mx-auto object-cover shadow-xl">` :
            `<div class="${iconSize} mb-6">🎂</div>`;

        const decorations = {
            none: '',
            candles: '<div class="text-4xl mt-4">🕯️ 🕯️ 🕯️</div>',
            confetti: '<div class="text-3xl mt-4">🎊 🎉 🎊</div>',
            sparkles: '<div class="text-3xl mt-4">✨ ⭐ ✨</div>'
        };
        const decoration = decorations[style.decorations] || '';

        // Centered Layout
        if (layout === 'centered') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    ${cakeDisplay}
                    <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                    <p class="text-lg max-w-md mx-auto">${message}</p>
                    ${decoration}
                </div>
            `;
        }

        // Spotlight Layout
        if (layout === 'spotlight') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 flex items-center justify-center opacity-5">
                        <div class="text-[20rem]">🎂</div>
                    </div>
                    <div class="relative z-10 text-center">
                        ${cakeDisplay}
                        <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                        <p class="text-lg max-w-md mx-auto">${message}</p>
                        ${decoration}
                    </div>
                </div>
            `;
        }

        // Framed Layout
        if (layout === 'framed') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto border-4 rounded-2xl p-8 text-center" style="border-color: ${accentColor}; background: ${accentColor}11">
                        ${cakeDisplay}
                        <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                        <p class="text-lg">${message}</p>
                        ${decoration}
                    </div>
                </div>
            `;
        }

        // Animated Layout
        if (layout === 'animated') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="transform hover:scale-110 transition-transform duration-300">
                        ${cakeDisplay}
                    </div>
                    <h3 class="text-3xl font-bold mb-4 transform hover:scale-105 transition-transform" style="color: ${accentColor}">${title}</h3>
                    <p class="text-lg max-w-md mx-auto">${message}</p>
                    ${decoration}
                </div>
            `;
        }

        // Split Layout
        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                        <div class="md:w-1/2 text-center">
                            ${cakeDisplay}
                        </div>
                        <div class="md:w-1/2 text-center md:text-left">
                            <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                            <p class="text-lg">${message}</p>
                            ${decoration}
                        </div>
                    </div>
                </div>
            `;
        }

        // Floating Layout
        if (layout === 'floating') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto text-center p-8 rounded-2xl shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}22, ${accentColor}11)">
                        ${cakeDisplay}
                        <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                        <p class="text-lg">${message}</p>
                        ${decoration}
                    </div>
                </div>
            `;
        }

        // Vintage Layout - Retro Bakery
        if (layout === 'vintage') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #f4e4c1, #e8d7b0); color: ${textColor}">
                    <div class="max-w-2xl mx-auto border-8 border-double rounded-lg p-8 text-center shadow-2xl" style="border-color: ${accentColor}; background: rgba(255,255,255,0.7)">
                        <div class="mb-4 text-2xl font-serif italic" style="color: ${accentColor}">~ Est. 2024 ~</div>
                        ${cakeDisplay}
                        <div class="flex items-center justify-center gap-4 my-4">
                            <div style="width: 60px; height: 2px; background: ${accentColor}"></div>
                            <span class="text-2xl" style="color: ${accentColor}">❖</span>
                            <div style="width: 60px; height: 2px; background: ${accentColor}"></div>
                        </div>
                        <h3 class="text-3xl font-serif font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                        <p class="text-lg font-serif italic">${message}</p>
                        ${decoration}
                    </div>
                </div>
            `;
        }

        // Neon Layout - Glowing Celebration
        if (layout === 'neon') {
            return `
                <div class="py-12 px-6 text-center" style="background: #0a0a0a; color: #ffffff">
                    <div class="transform hover:scale-105 transition-transform">
                        <div style="filter: drop-shadow(0 0 20px ${accentColor}) drop-shadow(0 0 40px ${accentColor});">
                            ${cakeDisplay}
                        </div>
                    </div>
                    <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}; text-shadow: 0 0 10px ${accentColor}, 0 0 20px ${accentColor}, 0 0 30px ${accentColor}">${title}</h3>
                    <p class="text-lg max-w-md mx-auto" style="text-shadow: 0 0 5px ${accentColor}">${message}</p>
                    <div class="mt-6 flex justify-center gap-3">
                        <div class="w-4 h-4 rounded-full animate-pulse" style="background: ${accentColor}; box-shadow: 0 0 20px ${accentColor};"></div>
                        <div class="w-4 h-4 rounded-full animate-pulse" style="background: ${accentColor}; box-shadow: 0 0 20px ${accentColor}; animation-delay: 0.2s;"></div>
                        <div class="w-4 h-4 rounded-full animate-pulse" style="background: ${accentColor}; box-shadow: 0 0 20px ${accentColor}; animation-delay: 0.4s;"></div>
                    </div>
                </div>
            `;
        }

        // Party Layout - Festive Explosion
        if (layout === 'party') {
            return `
                <div class="py-12 px-6 relative overflow-hidden text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 pointer-events-none overflow-hidden">
                        ${[...Array(12)].map((_, i) => {
                            const emojis = ['🎊', '🎉', '🎈', '✨', '🎁'];
                            const emoji = emojis[i % 5];
                            const top = Math.random() * 100;
                            const left = Math.random() * 100;
                            const rotation = Math.random() * 360;
                            return `<div class="absolute text-3xl opacity-30" style="top: ${top}%; left: ${left}%; transform: rotate(${rotation}deg);">${emoji}</div>`;
                        }).join('')}
                    </div>
                    <div class="relative z-10">
                        ${cakeDisplay}
                        <h3 class="text-4xl font-black mb-4 uppercase tracking-wide" style="color: ${accentColor}">${title}</h3>
                        <p class="text-lg max-w-md mx-auto font-bold">${message}</p>
                        <div class="text-5xl mt-6">🎊 🎂 🎉</div>
                    </div>
                </div>
            `;
        }

        // Tiered Layout - Multi-Layer
        if (layout === 'tiered') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-md mx-auto">
                        <div class="relative inline-block">
                            <div class="absolute -inset-4 rounded-lg opacity-20" style="background: ${accentColor}"></div>
                            <div class="absolute -inset-2 rounded-lg opacity-30" style="background: ${accentColor}"></div>
                            <div class="relative">
                                ${cakeDisplay}
                            </div>
                        </div>
                        <div class="mt-6 p-6 rounded-xl" style="background: linear-gradient(135deg, ${accentColor}22, ${accentColor}11); border: 2px solid ${accentColor}">
                            <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                            <p class="text-lg">${message}</p>
                            ${decoration}
                        </div>
                    </div>
                </div>
            `;
        }

        // Bakery Layout - Display Case
        if (layout === 'bakery') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden" style="border: 3px solid ${accentColor}">
                            <div class="py-3 px-6 text-center font-bold uppercase tracking-wider text-white" style="background: ${accentColor}">
                                🎂 Specialty Cake 🎂
                            </div>
                            <div class="p-8 text-center">
                                ${cakeDisplay}
                                <h3 class="text-3xl font-bold mb-4 mt-6" style="color: ${accentColor}">${title}</h3>
                                <p class="text-lg mb-4">${message}</p>
                                ${decoration}
                                <div class="mt-6 pt-4 border-t-2 text-sm italic text-gray-500" style="border-color: ${accentColor}33">
                                    Baked fresh with love ♥
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Celebration Layout - Gift Box
        if (layout === 'celebration') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-lg mx-auto relative">
                        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl">🎁</div>
                        <div class="p-10 rounded-2xl shadow-2xl relative overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}22, ${accentColor}11); border: 3px solid ${accentColor}">
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-full opacity-20" style="background: ${accentColor}"></div>
                            <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-12 opacity-20" style="background: ${accentColor}"></div>
                            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center" style="background: ${accentColor}">
                                <span class="text-3xl">🎀</span>
                            </div>
                            <div class="relative z-10 mt-4">
                                ${cakeDisplay}
                                <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                                <p class="text-lg">${message}</p>
                                ${decoration}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                ${cakeDisplay}
                <h3 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${title}</h3>
                <p class="text-lg max-w-md mx-auto">${message}</p>
            </div>
        `;
    }
};
