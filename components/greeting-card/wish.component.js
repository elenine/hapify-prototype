// Holiday Wish Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wish = {
    name: '⭐ Holiday Wish',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Title</label>
                <input type="text" placeholder="May Your Holidays Sparkle" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Message</label>
                <textarea placeholder="Wishing you peace, joy, and all the magic of the holiday season!" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="wish" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="bordered">Bordered Card - Classic</option>
                    <option value="shadow">Shadow Card - Modern</option>
                    <option value="ribbon">Ribbon Style - Decorative</option>
                    <option value="star">Star Burst - Festive</option>
                    <option value="minimal">Minimal - Clean</option>
                    <option value="fancy">Fancy - Ornate</option>
                    <option value="sparkle">Sparkle - Glittery Effect</option>
                    <option value="badge">Badge - Award Style</option>
                    <option value="scroll">Scroll - Ancient Paper</option>
                    <option value="neon">Neon Sign - Bright Glow</option>
                    <option value="floating">Floating Card - 3D Shadow</option>
                    <option value="torn">Torn Paper - Artistic Edge</option>
                    <option value="snowstar">Snow Star - Winter Wish</option>
                    <option value="bell">Bell - Christmas Chime</option>
                    <option value="stocking">Stocking - Festive Sock</option>
                    <option value="mistletoe">Mistletoe - Kiss & Wish</option>
                    <option value="garland">Garland - Festive Frame</option>
                    <option value="lantern">Lantern - Glowing Light</option>
                    <option value="sleigh">Sleigh - Santa's Ride</option>
                    <option value="candy">Candy Cane - Sweet Wishes</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border/Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="size" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected">Medium</option>
                    <option value="large">Large</option>
                    <option value="full">Full Width</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon/Emoji</label>
                <input type="text" placeholder="⭐" value="⭐" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="icon" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Corner Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="corners" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="sharp">Sharp</option>
                    <option value="pill">Pill Shape</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'bordered';
        const bgColor = style.bg || '#fef3c7';
        const borderColor = style.border || '#f59e0b';
        const textColor = style.textColor || globalStyles.textColor;
        const icon = style.icon || '🌟';

        const sizes = {
            small: 'max-w-sm',
            medium: 'max-w-xl',
            large: 'max-w-2xl',
            full: 'max-w-full'
        };
        const sizeClass = sizes[style.size] || 'max-w-xl';

        const corners = {
            rounded: 'rounded-lg',
            sharp: 'rounded-none',
            pill: 'rounded-full'
        };
        const cornerClass = corners[style.corners] || 'rounded-lg';

        const title = data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${textColor}">${data.title}</h3>` : '';
        const wish = data.wish || 'Your holiday wish goes here...';

        // Bordered Card Layout
        if (layout === 'bordered') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8 ${cornerClass} border-4" style="background: ${bgColor}; border-color: ${borderColor}">
                        <div class="text-center">
                            <div class="text-4xl mb-4">${icon}</div>
                            ${title}
                            <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Shadow Card Layout
        if (layout === 'shadow') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8 ${cornerClass} shadow-2xl" style="background: ${bgColor}">
                        <div class="text-center">
                            <div class="inline-block p-4 ${cornerClass} mb-4" style="background: ${borderColor}22">
                                <span class="text-4xl">${icon}</span>
                            </div>
                            ${title}
                            <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Ribbon Style Layout
        if (layout === 'ribbon') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 ${cornerClass} shadow-lg z-10" style="background: ${borderColor}">
                            <span class="text-3xl">${icon}</span>
                        </div>
                        <div class="p-8 pt-12 ${cornerClass} border-2" style="background: ${bgColor}; border-color: ${borderColor}">
                            <div class="text-center">
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Star Burst Layout
        if (layout === 'star') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto relative overflow-hidden p-8 ${cornerClass}" style="background: ${bgColor}">
                        <div class="absolute inset-0 opacity-10 pointer-events-none">
                            <div class="absolute top-0 left-0 text-6xl" style="color: ${borderColor}">${icon}</div>
                            <div class="absolute top-0 right-0 text-6xl" style="color: ${borderColor}">${icon}</div>
                            <div class="absolute bottom-0 left-0 text-6xl" style="color: ${borderColor}">${icon}</div>
                            <div class="absolute bottom-0 right-0 text-6xl" style="color: ${borderColor}">${icon}</div>
                        </div>
                        <div class="relative z-10 text-center">
                            <div class="text-5xl mb-4">${icon}</div>
                            ${title}
                            <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            <div class="mt-4 flex justify-center gap-2">
                                <span class="text-2xl" style="color: ${borderColor}">${icon}</span>
                                <span class="text-2xl" style="color: ${borderColor}">${icon}</span>
                                <span class="text-2xl" style="color: ${borderColor}">${icon}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8">
                        <div class="text-center">
                            <div class="text-3xl mb-6">${icon}</div>
                            ${title}
                            <div class="border-t border-b py-6 my-4" style="border-color: ${borderColor}">
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Fancy/Ornate Layout
        if (layout === 'fancy') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -inset-2 ${cornerClass} opacity-20" style="background: ${borderColor}"></div>
                        <div class="relative p-10 ${cornerClass}" style="background: ${bgColor}; border: 3px double ${borderColor}">
                            <div class="text-center">
                                <div class="flex items-center justify-center gap-3 mb-4">
                                    <span class="text-2xl" style="color: ${borderColor}">✦</span>
                                    <span class="text-4xl">${icon}</span>
                                    <span class="text-2xl" style="color: ${borderColor}">✦</span>
                                </div>
                                ${title}
                                <div class="my-4">
                                    <div class="inline-block w-16 h-1" style="background: ${borderColor}"></div>
                                </div>
                                <p class="text-lg leading-relaxed font-serif italic" style="color: ${textColor}">${wish}</p>
                                <div class="mt-4">
                                    <div class="inline-block w-16 h-1" style="background: ${borderColor}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Sparkle Layout - Glittery Effect
        if (layout === 'sparkle') {
            return `
                <div class="py-12 px-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${bgColor} 0%, ${borderColor}22 100%);">
                    <div class="${sizeClass} mx-auto p-8 ${cornerClass} relative" style="background: ${bgColor}; box-shadow: 0 0 30px ${borderColor}88;">
                        <div class="absolute top-2 right-2 text-yellow-400 text-2xl animate-pulse">✨</div>
                        <div class="absolute top-6 left-4 text-yellow-300 text-xl animate-pulse" style="animation-delay: 0.3s;">✨</div>
                        <div class="absolute bottom-4 right-8 text-yellow-400 text-xl animate-pulse" style="animation-delay: 0.6s;">✨</div>
                        <div class="text-center relative z-10">
                            <div class="text-5xl mb-4 filter drop-shadow-lg">${icon}</div>
                            ${title}
                            <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            <div class="mt-6 flex justify-center gap-2">
                                <span class="text-2xl" style="color: ${borderColor}">✨</span>
                                <span class="text-3xl" style="color: ${borderColor}">${icon}</span>
                                <span class="text-2xl" style="color: ${borderColor}">✨</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Badge Layout - Award Style
        if (layout === 'badge') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                            <div class="relative">
                                <div class="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${borderColor} 0%, ${borderColor}cc 100%);">
                                    <span class="text-3xl">${icon}</span>
                                </div>
                                <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-12" style="background: ${borderColor}; clip-path: polygon(50% 0%, 0% 0%, 50% 100%);"></div>
                                <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 translate-x-2 w-8 h-12" style="background: ${borderColor}dd; clip-path: polygon(50% 0%, 100% 0%, 50% 100%);"></div>
                            </div>
                        </div>
                        <div class="pt-16 pb-8 px-8 ${cornerClass} shadow-xl" style="background: ${bgColor}; border: 3px solid ${borderColor};">
                            <div class="text-center">
                                ${title}
                                <p class="text-lg leading-relaxed mt-4" style="color: ${textColor}">${wish}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Scroll Layout - Ancient Paper
        if (layout === 'scroll') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="p-8 relative" style="background: linear-gradient(to bottom, #f4e4c1 0%, #e8d7b0 50%, #f4e4c1 100%); border-radius: 0; box-shadow: inset 0 0 20px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.3);">
                            <div class="absolute top-0 left-0 right-0 h-8 rounded-t-full" style="background: linear-gradient(to bottom, #8b6f47 0%, #a0826d 100%);"></div>
                            <div class="absolute bottom-0 left-0 right-0 h-8 rounded-b-full" style="background: linear-gradient(to top, #8b6f47 0%, #a0826d 100%);"></div>
                            <div class="relative z-10 py-4">
                                <div class="text-center">
                                    <div class="text-4xl mb-4">${icon}</div>
                                    ${title}
                                    <div class="my-4">
                                        <div class="inline-block w-24 h-1" style="background: ${borderColor};"></div>
                                    </div>
                                    <p class="text-lg leading-relaxed font-serif italic" style="color: #3e2723;">${wish}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Neon Sign Layout - Bright Glow
        if (layout === 'neon') {
            return `
                <div class="py-12 px-6" style="background: #1a1a1a;">
                    <div class="${sizeClass} mx-auto p-8 ${cornerClass} relative" style="background: #0a0a0a; border: 2px solid ${borderColor};">
                        <div class="text-center">
                            <div class="text-5xl mb-4" style="filter: drop-shadow(0 0 10px ${borderColor}) drop-shadow(0 0 20px ${borderColor});">${icon}</div>
                            ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${borderColor}; text-shadow: 0 0 10px ${borderColor}, 0 0 20px ${borderColor}, 0 0 30px ${borderColor};">${data.title}</h3>` : ''}
                            <p class="text-lg leading-relaxed" style="color: #ffffff; text-shadow: 0 0 5px ${borderColor};">${wish}</p>
                            <div class="mt-6">
                                <div class="inline-block h-1 w-32" style="background: ${borderColor}; box-shadow: 0 0 10px ${borderColor}, 0 0 20px ${borderColor};"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Floating Card Layout - 3D Shadow
        if (layout === 'floating') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute inset-0 transform translate-y-4 ${cornerClass}" style="background: ${borderColor}44; filter: blur(10px);"></div>
                        <div class="relative p-8 ${cornerClass} transform hover:-translate-y-2 transition-transform duration-300" style="background: ${bgColor}; border: 2px solid ${borderColor}; box-shadow: 0 20px 50px rgba(0,0,0,0.2);">
                            <div class="text-center">
                                <div class="text-4xl mb-4 inline-block p-3 rounded-full" style="background: ${borderColor}22;">${icon}</div>
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Torn Paper Layout - Artistic Edge
        if (layout === 'torn') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="p-8 relative" style="background: linear-gradient(135deg, #fff9e6 0%, #fff3d6 100%); box-shadow: 0 10px 30px rgba(0,0,0,0.2); clip-path: polygon(0% 2%, 3% 0%, 7% 2%, 10% 0%, 14% 1%, 18% 0%, 22% 2%, 26% 0%, 30% 1%, 34% 0%, 38% 2%, 42% 0%, 46% 1%, 50% 0%, 54% 2%, 58% 0%, 62% 1%, 66% 0%, 70% 2%, 74% 0%, 78% 1%, 82% 0%, 86% 2%, 90% 0%, 94% 1%, 97% 0%, 100% 2%, 100% 98%, 97% 100%, 93% 98%, 90% 100%, 86% 99%, 82% 100%, 78% 98%, 74% 100%, 70% 99%, 66% 100%, 62% 98%, 58% 100%, 54% 99%, 50% 100%, 46% 98%, 42% 100%, 38% 99%, 34% 100%, 30% 98%, 26% 100%, 22% 99%, 18% 100%, 14% 98%, 10% 100%, 6% 99%, 3% 100%, 0% 98%);">
                            <div class="text-center">
                                <div class="text-4xl mb-4">${icon}</div>
                                ${title}
                                <p class="text-lg leading-relaxed font-serif" style="color: ${textColor}">${wish}</p>
                                <div class="mt-6 flex justify-center gap-2">
                                    <div class="w-2 h-2 rounded-full" style="background: ${borderColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${borderColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${borderColor};"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Snow Star Layout - Winter Wish
        if (layout === 'snowstar') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #dbeafe 0%, #eff6ff 100%);">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl" style="filter: drop-shadow(0 0 10px #3b82f6);">⭐</div>
                        <div class="relative p-10 ${cornerClass} shadow-2xl" style="background: white; border: 4px solid #3b82f6;">
                            <div class="absolute inset-0 overflow-hidden ${cornerClass}">
                                <div class="absolute top-2 left-2 text-blue-200">❄️</div>
                                <div class="absolute top-2 right-2 text-blue-200">❄️</div>
                                <div class="absolute bottom-2 left-2 text-blue-200">❄️</div>
                                <div class="absolute bottom-2 right-2 text-blue-200">❄️</div>
                            </div>
                            <div class="text-center relative z-10">
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                                <div class="mt-4 text-3xl">✨❄️✨</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Bell Layout - Christmas Chime
        if (layout === 'bell') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 text-7xl animate-swing" style="transform-origin: top center;">🔔</div>
                        <div class="relative p-10 pt-16 ${cornerClass} shadow-2xl" style="background: linear-gradient(to bottom, #fef3c7 0%, #fed7aa 100%); border: 4px solid #d97706;">
                            <div class="text-center">
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                                <div class="mt-6 text-2xl">🎄 Ring in the joy! 🎄</div>
                            </div>
                        </div>
                        <style>
                            @keyframes swing {
                                0%, 100% { transform: translateX(-50%) rotate(-5deg); }
                                50% { transform: translateX(-50%) rotate(5deg); }
                            }
                            .animate-swing { animation: swing 2s ease-in-out infinite; }
                        </style>
                    </div>
                </div>
            `;
        }

        // Stocking Layout - Festive Sock
        if (layout === 'stocking') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #1e3a8a 0%, #1e40af 100%);">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="relative p-8 ${cornerClass} shadow-2xl" style="background: white; border: 6px solid #dc2626; border-top-width: 20px;">
                            <div class="absolute -top-8 right-8 text-4xl transform rotate-12">🧦</div>
                            <div class="absolute -top-2 left-4 text-3xl">🎁</div>
                            <div class="absolute -top-2 right-1/3 text-2xl">🍬</div>
                            <div class="text-center">
                                <div class="mb-4 text-4xl">${icon}</div>
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                                <div class="mt-6 flex justify-center gap-2 text-2xl">
                                    <span>🎄</span><span>🎅</span><span>🎄</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Mistletoe Layout - Kiss & Wish
        if (layout === 'mistletoe') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                            <div class="text-center">
                                <div class="text-5xl">🌿</div>
                                <div class="text-xs text-green-700 font-semibold">Mistletoe</div>
                            </div>
                        </div>
                        <div class="relative p-10 pt-16 ${cornerClass} shadow-2xl" style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); border: 4px dashed #059669;">
                            <div class="text-center">
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                                <div class="mt-6 text-3xl">💋❤️💋</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Garland Layout - Festive Frame
        if (layout === 'garland') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-4 left-0 right-0 flex justify-around text-3xl z-10">
                            <span style="color: #dc2626;">🔴</span>
                            <span style="color: #d97706;">🟡</span>
                            <span style="color: #3b82f6;">🔵</span>
                            <span style="color: #059669;">🟢</span>
                            <span style="color: #dc2626;">🔴</span>
                        </div>
                        <div class="absolute -top-2 left-0 right-0 h-4" style="background: linear-gradient(to right, #059669 0%, #047857 100%); border-radius: 2px;"></div>
                        <div class="relative p-10 pt-12 ${cornerClass} shadow-2xl" style="background: white; border: 4px solid #059669;">
                            <div class="text-center">
                                <div class="text-4xl mb-4">${icon}</div>
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            </div>
                        </div>
                        <div class="absolute -bottom-4 left-0 right-0 flex justify-around text-3xl z-10">
                            <span style="color: #3b82f6;">🔵</span>
                            <span style="color: #dc2626;">🔴</span>
                            <span style="color: #d97706;">🟡</span>
                            <span style="color: #059669;">🟢</span>
                            <span style="color: #3b82f6;">🔵</span>
                        </div>
                        <div class="absolute -bottom-2 left-0 right-0 h-4" style="background: linear-gradient(to right, #047857 0%, #059669 100%); border-radius: 2px;"></div>
                    </div>
                </div>
            `;
        }

        // Lantern Layout - Glowing Light
        if (layout === 'lantern') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #1e1e1e 0%, #2d2d2d 100%);">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 text-6xl">🏮</div>
                        <div class="absolute inset-0 blur-3xl opacity-30" style="background: radial-gradient(circle, #fbbf24 0%, transparent 70%);"></div>
                        <div class="relative p-10 ${cornerClass} shadow-2xl" style="background: rgba(251, 191, 36, 0.1); border: 2px solid #fbbf24; backdrop-filter: blur(10px);">
                            <div class="text-center">
                                ${title ? title.replace(textColor, '#fbbf24') : ''}
                                <p class="text-lg leading-relaxed" style="color: #ffffff; text-shadow: 0 0 10px #fbbf24;">${wish}</p>
                                <div class="mt-6 text-3xl">✨🕯️✨</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Sleigh Layout - Santa's Ride
        if (layout === 'sleigh') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #1e3a8a 0%, #3b82f6 100%);">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-8 right-8 text-6xl animate-float">🛷</div>
                        <div class="relative p-10 ${cornerClass} shadow-2xl" style="background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); border: 4px solid #dc2626;">
                            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                            <div class="text-center">
                                <div class="text-4xl mb-4">🎅</div>
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                                <div class="mt-6 text-2xl">🦌 Ho Ho Ho! 🦌</div>
                            </div>
                        </div>
                        <style>
                            @keyframes float {
                                0%, 100% { transform: translateY(0) translateX(0); }
                                50% { transform: translateY(-10px) translateX(10px); }
                            }
                            .animate-float { animation: float 3s ease-in-out infinite; }
                        </style>
                    </div>
                </div>
            `;
        }

        // Candy Cane Layout - Sweet Wishes
        if (layout === 'candy') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #fee2e2 0%, #fef2f2 100%);">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-6 -left-6 text-6xl transform rotate-45">🍬</div>
                        <div class="absolute -top-6 -right-6 text-6xl transform -rotate-45">🍬</div>
                        <div class="relative p-10 ${cornerClass} shadow-2xl overflow-hidden" style="background: white; border: 8px solid transparent; background-image: linear-gradient(white, white), repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 20px, white 20px, white 40px); background-origin: border-box; background-clip: padding-box, border-box;">
                            <div class="text-center">
                                <div class="text-4xl mb-4">${icon}</div>
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                                <div class="mt-6 text-3xl">🍭🎄🍭</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6">
                <div class="${sizeClass} mx-auto p-8 ${cornerClass} border-4" style="background: ${bgColor}; border-color: ${borderColor}">
                    <div class="text-center">
                        <div class="text-4xl mb-4">${icon}</div>
                        ${title}
                        <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                    </div>
                </div>
            </div>
        `;
    }
};
