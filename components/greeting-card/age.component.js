// Age/Milestone Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.age = {
    name: '🎯 Age Milestone',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <input type="number" placeholder="25" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="age" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone Title</label>
                <input type="text" placeholder="A Quarter Century!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="milestoneTitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="25 looks amazing on you!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="giant">Giant Number - Bold</option>
                    <option value="circle">Circle Badge - Modern</option>
                    <option value="banner">Banner Style - Elegant</option>
                    <option value="spotlight">Spotlight - Dramatic</option>
                    <option value="minimal">Minimal - Clean</option>
                    <option value="decorative">Decorative - Festive</option>
                    <option value="neon">Neon Sign - Glowing</option>
                    <option value="vintage">Vintage Stamp - Classic</option>
                    <option value="confetti">Confetti Burst - Party</option>
                    <option value="geometric">Geometric Frame - Modern</option>
                    <option value="marquee">Marquee Lights - Theater</option>
                    <option value="celebration">Celebration Box - Gift</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Age Number Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="ageColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="numberSize" onchange="updatePreview()">
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                    <option value="xlarge">Extra Large</option>
                    <option value="mega">Mega</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Add Effects</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="effects" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="shadow">Shadow</option>
                    <option value="glow">Glow</option>
                    <option value="gradient">Gradient</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'giant';
        const bgColor = style.bg || '#fef3c7';
        const ageColor = style.ageColor || '#f59e0b';
        const textColor = style.text || '#1f2937';
        const age = data.age || '25';
        const title = data.milestoneTitle || 'A Special Milestone';
        const message = data.message || 'Another year of amazing memories!';

        const numberSizes = {
            medium: 'text-7xl',
            large: 'text-8xl',
            xlarge: 'text-9xl',
            mega: 'text-[12rem]'
        };
        const numberSize = numberSizes[style.numberSize] || 'text-8xl';

        const effects = {
            none: '',
            shadow: 'text-shadow: 4px 4px 8px rgba(0,0,0,0.3);',
            glow: `text-shadow: 0 0 20px ${ageColor}, 0 0 40px ${ageColor};`,
            gradient: `background: linear-gradient(135deg, ${ageColor}, ${globalStyles.secondaryColor}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;`
        };
        const effectStyle = effects[style.effects] || '';

        // Giant Number Layout
        if (layout === 'giant') {
            return `
                <div class="py-16 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="${numberSize} font-black mb-6" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                    <h3 class="text-3xl font-bold mb-4">${title}</h3>
                    <p class="text-lg max-w-md mx-auto leading-relaxed">${message}</p>
                </div>
            `;
        }

        // Circle Badge Layout
        if (layout === 'circle') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="inline-flex items-center justify-center w-64 h-64 rounded-full border-8 mb-6" style="border-color: ${ageColor}; background: linear-gradient(135deg, ${ageColor}22, ${ageColor}11)">
                        <div class="${numberSize} font-black" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">${title}</h3>
                    <p class="text-lg max-w-md mx-auto">${message}</p>
                </div>
            `;
        }

        // Banner Style Layout
        if (layout === 'banner') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <div class="relative py-8 px-12 rounded-2xl" style="background: linear-gradient(135deg, ${ageColor}33, ${ageColor}22)">
                            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 ${numberSize} font-black px-8 py-2 rounded-full shadow-xl" style="background: ${ageColor}; color: white;">${age}</div>
                            <div class="text-center mt-12">
                                <h3 class="text-2xl font-bold mb-4">${title}</h3>
                                <p class="text-lg leading-relaxed">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Spotlight Layout
        if (layout === 'spotlight') {
            return `
                <div class="py-16 px-6 relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 flex items-center justify-center opacity-10">
                        <div class="text-[20rem] font-black" style="color: ${ageColor}">${age}</div>
                    </div>
                    <div class="relative z-10 text-center">
                        <div class="${numberSize} font-black mb-6 inline-block px-8 py-4 rounded-xl" style="background: ${ageColor}; color: white; ${effectStyle}">${age}</div>
                        <h3 class="text-3xl font-bold mb-4">${title}</h3>
                        <p class="text-lg max-w-md mx-auto">${message}</p>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <div class="flex items-center justify-center gap-8 mb-6">
                            <div class="h-1 flex-1 rounded" style="background: ${ageColor}"></div>
                            <div class="${numberSize} font-bold" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                            <div class="h-1 flex-1 rounded" style="background: ${ageColor}"></div>
                        </div>
                        <h3 class="text-2xl font-semibold mb-4">${title}</h3>
                        <p class="text-base max-w-md mx-auto">${message}</p>
                    </div>
                </div>
            `;
        }

        // Decorative Layout
        if (layout === 'decorative') {
            return `
                <div class="py-12 px-6 text-center relative" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute top-8 left-8 text-6xl opacity-20" style="color: ${ageColor}">★</div>
                    <div class="absolute top-8 right-8 text-6xl opacity-20" style="color: ${ageColor}">★</div>
                    <div class="absolute bottom-8 left-8 text-6xl opacity-20" style="color: ${ageColor}">★</div>
                    <div class="absolute bottom-8 right-8 text-6xl opacity-20" style="color: ${ageColor}">★</div>
                    <div class="relative z-10">
                        <div class="flex items-center justify-center gap-4 mb-6">
                            <span class="text-4xl" style="color: ${ageColor}">✨</span>
                            <div class="${numberSize} font-black" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                            <span class="text-4xl" style="color: ${ageColor}">✨</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">${title}</h3>
                        <p class="text-lg max-w-md mx-auto">${message}</p>
                        <div class="mt-6 text-4xl">🎉 🎊 🎈</div>
                    </div>
                </div>
            `;
        }

        // Neon Sign Layout
        if (layout === 'neon') {
            return `
                <div class="py-16 px-6 text-center" style="background: #0a0a0a; color: #ffffff">
                    <div class="${numberSize} font-black mb-6" style="color: ${ageColor}; text-shadow: 0 0 10px ${ageColor}, 0 0 20px ${ageColor}, 0 0 30px ${ageColor}, 0 0 40px ${ageColor}, 0 0 70px ${ageColor};">${age}</div>
                    <h3 class="text-3xl font-bold mb-4" style="color: ${ageColor}; text-shadow: 0 0 10px ${ageColor};">${title}</h3>
                    <p class="text-lg max-w-md mx-auto" style="text-shadow: 0 0 5px ${ageColor};">${message}</p>
                    <div class="mt-8 flex justify-center gap-3">
                        <div class="w-3 h-3 rounded-full" style="background: ${ageColor}; box-shadow: 0 0 15px ${ageColor};"></div>
                        <div class="w-3 h-3 rounded-full" style="background: ${ageColor}; box-shadow: 0 0 15px ${ageColor};"></div>
                        <div class="w-3 h-3 rounded-full" style="background: ${ageColor}; box-shadow: 0 0 15px ${ageColor};"></div>
                    </div>
                </div>
            `;
        }

        // Vintage Stamp Layout
        if (layout === 'vintage') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="relative p-8 border-8 border-double rounded-lg shadow-2xl" style="border-color: ${ageColor}; background: linear-gradient(to bottom, #f4e4c1, #e8d7b0);">
                            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full shadow-lg" style="background: ${ageColor}; color: white;">
                                <span class="text-sm font-bold uppercase tracking-wider">Milestone</span>
                            </div>
                            <div class="mt-4">
                                <div class="${numberSize} font-black font-serif mb-4" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                                <div class="flex items-center justify-center gap-4 mb-4">
                                    <span style="color: ${ageColor}">❖</span>
                                    <h3 class="text-2xl font-serif italic font-bold">${title}</h3>
                                    <span style="color: ${ageColor}">❖</span>
                                </div>
                                <p class="text-base font-serif italic leading-relaxed">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Confetti Burst Layout
        if (layout === 'confetti') {
            return `
                <div class="py-16 px-6 text-center relative overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                    <div class="absolute inset-0 pointer-events-none overflow-hidden">
                        ${[...Array(15)].map((_, i) => {
                            const shapes = ['circle', 'square', 'rect'];
                            const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
                            const shape = shapes[i % 3];
                            const color = colors[i % 5];
                            const top = Math.random() * 100;
                            const left = Math.random() * 100;
                            const rotation = Math.random() * 360;

                            if (shape === 'circle') {
                                return `<div class="absolute" style="top: ${top}%; left: ${left}%; width: 12px; height: 12px; background: ${color}; border-radius: 50%; transform: rotate(${rotation}deg);"></div>`;
                            } else if (shape === 'square') {
                                return `<div class="absolute" style="top: ${top}%; left: ${left}%; width: 10px; height: 10px; background: ${color}; transform: rotate(${rotation}deg);"></div>`;
                            } else {
                                return `<div class="absolute" style="top: ${top}%; left: ${left}%; width: 8px; height: 20px; background: ${color}; transform: rotate(${rotation}deg);"></div>`;
                            }
                        }).join('')}
                    </div>
                    <div class="relative z-10">
                        <div class="${numberSize} font-black mb-6 transform hover:scale-110 transition-transform duration-300" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                        <h3 class="text-3xl font-bold mb-4">${title}</h3>
                        <p class="text-lg max-w-md mx-auto leading-relaxed">${message}</p>
                        <div class="mt-6 text-5xl">🎊 🎉 🎈</div>
                    </div>
                </div>
            `;
        }

        // Geometric Frame Layout
        if (layout === 'geometric') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto relative">
                        <div class="absolute -inset-4 border-4 transform rotate-3 opacity-20 rounded-2xl" style="border-color: ${ageColor};"></div>
                        <div class="absolute -inset-4 border-4 transform -rotate-3 opacity-20 rounded-2xl" style="border-color: ${ageColor};"></div>
                        <div class="relative p-12 border-4 rounded-2xl" style="border-color: ${ageColor}; background: linear-gradient(135deg, ${ageColor}11, ${ageColor}22);">
                            <div class="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 rounded-tl-2xl" style="border-color: ${ageColor};"></div>
                            <div class="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 rounded-tr-2xl" style="border-color: ${ageColor};"></div>
                            <div class="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 rounded-bl-2xl" style="border-color: ${ageColor};"></div>
                            <div class="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 rounded-br-2xl" style="border-color: ${ageColor};"></div>
                            <div class="${numberSize} font-black mb-6" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                            <h3 class="text-2xl font-bold mb-4 uppercase tracking-wide">${title}</h3>
                            <p class="text-lg max-w-md mx-auto">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Marquee Lights Layout
        if (layout === 'marquee') {
            return `
                <div class="py-12 px-6 text-center" style="background: #2c1810; color: #ffffff">
                    <div class="max-w-3xl mx-auto relative p-12 rounded-2xl" style="background: linear-gradient(135deg, #1a1a1a, #2d2d2d); box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
                        <div class="absolute -inset-1 rounded-2xl opacity-50" style="background: repeating-linear-gradient(0deg, ${ageColor}, ${ageColor} 10px, transparent 10px, transparent 20px);"></div>
                        <div class="relative z-10">
                            <div class="flex items-center justify-center gap-4 mb-8">
                                ${[...Array(5)].map((_, i) => `<div class="w-4 h-4 rounded-full animate-pulse" style="background: ${ageColor}; box-shadow: 0 0 20px ${ageColor}; animation-delay: ${i * 0.2}s;"></div>`).join('')}
                            </div>
                            <div class="${numberSize} font-black mb-6" style="color: ${ageColor}; text-shadow: 0 0 20px ${ageColor}, 0 0 40px ${ageColor};">${age}</div>
                            <h3 class="text-3xl font-bold mb-4 tracking-wider uppercase">${title}</h3>
                            <p class="text-lg max-w-md mx-auto">${message}</p>
                            <div class="flex items-center justify-center gap-4 mt-8">
                                ${[...Array(5)].map((_, i) => `<div class="w-4 h-4 rounded-full animate-pulse" style="background: ${ageColor}; box-shadow: 0 0 20px ${ageColor}; animation-delay: ${i * 0.2 + 0.1}s;"></div>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Celebration Box Layout
        if (layout === 'celebration') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-lg mx-auto">
                        <div class="relative">
                            <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 text-6xl">🎁</div>
                            <div class="p-10 rounded-2xl shadow-2xl relative overflow-hidden" style="background: linear-gradient(135deg, ${ageColor}22, ${ageColor}11); border: 3px solid ${ageColor};">
                                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-full opacity-30" style="background: ${ageColor};"></div>
                                <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-16 opacity-30" style="background: ${ageColor};"></div>
                                <div class="relative z-10 mt-6">
                                    <div class="${numberSize} font-black mb-6" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                                    <h3 class="text-2xl font-bold mb-4">${title}</h3>
                                    <p class="text-lg max-w-md mx-auto leading-relaxed">${message}</p>
                                    <div class="mt-6 flex justify-center gap-3">
                                        <span class="text-3xl">🎈</span>
                                        <span class="text-3xl">🎊</span>
                                        <span class="text-3xl">🎉</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor}">
                <div class="${numberSize} font-bold mb-4" style="color: ${ageColor}; ${effectStyle}">${age}</div>
                <h3 class="text-2xl font-bold mb-3">${title}</h3>
                <p class="text-lg max-w-md mx-auto">${message}</p>
            </div>
        `;
    }
};
