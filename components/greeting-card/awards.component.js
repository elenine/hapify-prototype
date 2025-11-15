// Awards/Superlatives Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.awards = {
    name: '🏆 Awards',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Birthday Awards & Superlatives" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Awards</label>
                <p class="text-xs text-gray-500 mb-2">Add fun awards and superlatives</p>
                <div data-items-container="award" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'award')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Award
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid Cards - Classic</option>
                    <option value="ribbons">Ribbon Style - Elegant</option>
                    <option value="badges">Badge Layout - Fun</option>
                    <option value="certificates">Certificate Style - Formal</option>
                    <option value="minimal">Minimal List - Clean</option>
                    <option value="podium">Podium Style - Unique</option>
                    <option value="showcase">Showcase Display - Spotlight gallery</option>
                    <option value="gallery">Gallery Wall - Museum-style frames</option>
                    <option value="trophy">Trophy Case - Display cabinet style</option>
                    <option value="medallions">Medallion Circles - Round medal design</option>
                    <option value="banners">Victory Banners - Flag style display</option>
                    <option value="carousel">Award Carousel - Rotating showcase</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Award Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="awardColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="cardSize" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Trophy Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="icon" onchange="updatePreview()">
                    <option value="🏆">🏆 Trophy</option>
                    <option value="🥇">🥇 Gold Medal</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="🎖️">🎖️ Military Medal</option>
                    <option value="👑">👑 Crown</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const awards = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="award"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const awardInput = item.querySelector('[data-field="awardName"]');
                const descInput = item.querySelector('[data-field="description"]');
                const award = awardInput?.value || '';
                const desc = descInput?.value || '';
                if (award) awards.push({ award, desc });
            });
        }

        const layout = style.layout || 'grid';
        const bgColor = style.bg || '#fffbeb';
        const cardBg = style.cardBg || '#ffffff';
        const awardColor = style.awardColor || '#f59e0b';
        const textColor = style.text || '#1f2937';
        const title = data.title || 'Birthday Awards & Superlatives';
        const icon = style.icon || '🏆';

        const cardSizes = {
            compact: 'p-4 text-sm',
            medium: 'p-6 text-base',
            large: 'p-8 text-lg'
        };
        const padding = cardSizes[style.cardSize] || cardSizes.medium;

        const shadows = {
            none: 'shadow-none',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };
        const shadowClass = shadows[style.shadow] || shadows.lg;

        // Grid Cards Layout
        if (layout === 'grid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${awards.length > 0 ? awards.map((award) => `
                                <div class="${padding} rounded-2xl ${shadowClass} text-center" style="background: ${cardBg}">
                                    <div class="text-5xl mb-3" style="color: ${awardColor}">${icon}</div>
                                    <h4 class="font-bold text-lg mb-2">${award.award}</h4>
                                    ${award.desc ? `<p class="text-gray-600">${award.desc}</p>` : ''}
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Ribbon Style Layout
        if (layout === 'ribbons') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-6">
                            ${awards.length > 0 ? awards.map((award) => `
                                <div class="${padding} rounded-xl ${shadowClass} relative overflow-hidden" style="background: ${cardBg}">
                                    <div class="absolute top-0 left-0 w-16 h-full" style="background: ${awardColor}; clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%)"></div>
                                    <div class="pl-16">
                                        <div class="flex items-center gap-4">
                                            <div class="text-4xl">${icon}</div>
                                            <div class="flex-1">
                                                <h4 class="font-bold text-lg">${award.award}</h4>
                                                ${award.desc ? `<p class="text-gray-600 mt-1">${award.desc}</p>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Badge Layout
        if (layout === 'badges') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-6">
                            ${awards.length > 0 ? awards.map((award) => `
                                <div class="${padding} rounded-full ${shadowClass} text-center" style="background: ${cardBg}; border: 3px solid ${awardColor}; max-width: 200px">
                                    <div class="text-3xl mb-2">${icon}</div>
                                    <h4 class="font-bold text-sm">${award.award}</h4>
                                    ${award.desc ? `<p class="text-xs text-gray-600 mt-1">${award.desc}</p>` : ''}
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Certificate Style Layout
        if (layout === 'certificates') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-8">
                            ${awards.length > 0 ? awards.map((award) => `
                                <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}; border: 4px double ${awardColor}">
                                    <div class="text-center">
                                        <div class="text-6xl mb-4">${icon}</div>
                                        <div class="text-xs font-semibold text-gray-500 mb-2">AWARDED FOR</div>
                                        <h4 class="font-bold text-2xl mb-3" style="color: ${awardColor}">${award.award}</h4>
                                        ${award.desc ? `<p class="text-gray-700 italic">${award.desc}</p>` : ''}
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal List Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <h3 class="text-2xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-4">
                            ${awards.length > 0 ? awards.map((award) => `
                                <div class="flex items-start gap-3 pb-4 border-b" style="border-color: ${awardColor}22">
                                    <div class="text-2xl" style="color: ${awardColor}">${icon}</div>
                                    <div>
                                        <h4 class="font-bold">${award.award}</h4>
                                        ${award.desc ? `<p class="text-sm text-gray-600 mt-1">${award.desc}</p>` : ''}
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Podium Style Layout
        if (layout === 'podium') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid md:grid-cols-3 gap-6">
                            ${awards.length > 0 ? awards.map((award, index) => `
                                <div class="${padding} rounded-xl ${shadowClass} text-center" style="background: ${cardBg}; ${index === 0 ? 'transform: translateY(-10px)' : ''}">
                                    <div class="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl mb-3" style="background: ${awardColor}; color: white">
                                        ${index + 1}
                                    </div>
                                    <div class="text-4xl mb-3">${icon}</div>
                                    <h4 class="font-bold text-lg mb-2">${award.award}</h4>
                                    ${award.desc ? `<p class="text-sm text-gray-600">${award.desc}</p>` : ''}
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-3">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Showcase Display Layout
        if (layout === 'showcase') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bgColor}, ${cardBg}); color: ${textColor}">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid gap-8">
                            ${awards.length > 0 ? awards.map((award, index) => {
                                const isFeatured = index % 2 === 0;
                                if (isFeatured) {
                                    return `
                                        <div class="p-10 rounded-3xl ${shadowClass} text-center" style="background: linear-gradient(135deg, ${awardColor}, ${awardColor}dd); position: relative; overflow: hidden">
                                            <div class="absolute top-0 left-0 w-full h-full opacity-10" style="background: radial-gradient(circle at 50% 50%, white, transparent)"></div>
                                            <div class="relative z-10">
                                                <div class="text-7xl mb-4 text-white">${icon}</div>
                                                <h4 class="font-bold text-2xl mb-3 text-white">${award.award}</h4>
                                                ${award.desc ? `<p class="text-lg text-white opacity-90">${award.desc}</p>` : ''}
                                            </div>
                                        </div>
                                    `;
                                } else {
                                    return `
                                        <div class="${padding} rounded-2xl ${shadowClass}" style="background: ${cardBg}; border: 3px solid ${awardColor}">
                                            <div class="flex items-center gap-6">
                                                <div class="text-5xl" style="color: ${awardColor}">${icon}</div>
                                                <div class="flex-1">
                                                    <h4 class="font-bold text-xl mb-2">${award.award}</h4>
                                                    ${award.desc ? `<p class="text-gray-600">${award.desc}</p>` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }
                            }).join('') : '<p class="text-center text-gray-500">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Gallery Wall Layout
        if (layout === 'gallery') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-8">
                            ${awards.length > 0 ? awards.map((award) => `
                                <div class="p-8 rounded-lg ${shadowClass}" style="background: ${cardBg}; border: 8px solid ${awardColor}22; box-shadow: 0 0 0 2px ${awardColor}">
                                    <div class="text-center">
                                        <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-5xl mb-4 ${shadowClass}" style="background: linear-gradient(135deg, ${awardColor}, ${awardColor}cc)">
                                            <span class="text-white">${icon}</span>
                                        </div>
                                        <h4 class="font-bold text-xl mb-2" style="color: ${awardColor}">${award.award}</h4>
                                        ${award.desc ? `<p class="text-gray-600 italic">${award.desc}</p>` : ''}
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Trophy Case Layout
        if (layout === 'trophy') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="p-8 rounded-2xl ${shadowClass}" style="background: linear-gradient(135deg, ${cardBg}, ${bgColor}); border: 4px solid ${awardColor}44">
                            <div class="grid md:grid-cols-3 gap-6">
                                ${awards.length > 0 ? awards.map((award) => `
                                    <div class="relative">
                                        <div class="absolute inset-0 rounded-xl" style="background: ${awardColor}11"></div>
                                        <div class="relative ${padding} rounded-xl text-center">
                                            <div class="text-6xl mb-3" style="color: ${awardColor}">${icon}</div>
                                            <div class="h-1 w-16 mx-auto mb-3 rounded-full" style="background: ${awardColor}"></div>
                                            <h4 class="font-bold text-base mb-2">${award.award}</h4>
                                            ${award.desc ? `<p class="text-xs text-gray-600">${award.desc}</p>` : ''}
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center text-gray-500 col-span-3">Add awards in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Medallion Circles Layout
        if (layout === 'medallions') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-8">
                            ${awards.length > 0 ? awards.map((award) => `
                                <div class="relative">
                                    <div class="w-48 h-48 rounded-full ${shadowClass} p-8 text-center flex flex-col items-center justify-center" style="background: linear-gradient(135deg, ${awardColor}, ${awardColor}dd); border: 6px solid ${cardBg}; box-shadow: 0 0 0 3px ${awardColor}">
                                        <div class="text-5xl mb-2 text-white">${icon}</div>
                                        <h4 class="font-bold text-sm text-white mb-1">${award.award}</h4>
                                        ${award.desc ? `<p class="text-xs text-white opacity-90">${award.desc}</p>` : ''}
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Victory Banners Layout
        if (layout === 'banners') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-6">
                            ${awards.length > 0 ? awards.map((award) => `
                                <div class="relative overflow-hidden rounded-2xl ${shadowClass}" style="background: linear-gradient(90deg, ${awardColor}, ${awardColor}dd)">
                                    <div class="absolute top-0 right-0 w-32 h-full opacity-20" style="background: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22white%22/></svg>') no-repeat center; background-size: contain"></div>
                                    <div class="relative ${padding} flex items-center gap-6">
                                        <div class="text-6xl text-white">${icon}</div>
                                        <div class="flex-1">
                                            <h4 class="font-bold text-2xl text-white mb-2">${award.award}</h4>
                                            ${award.desc ? `<p class="text-white opacity-90">${award.desc}</p>` : ''}
                                        </div>
                                    </div>
                                    <div class="absolute bottom-0 right-0 w-0 h-0" style="border-left: 40px solid transparent; border-bottom: 40px solid ${bgColor}"></div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add awards in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Award Carousel Layout
        if (layout === 'carousel') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-5xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="overflow-x-auto pb-8">
                            <div class="flex gap-8 px-4" style="min-width: max-content">
                                ${awards.length > 0 ? awards.map((award, index) => {
                                    const rotations = [-3, 2, -2, 3, -3, 2];
                                    const rotation = rotations[index % rotations.length];
                                    return `
                                        <div style="width: 280px; transform: rotate(${rotation}deg)">
                                            <div class="${padding} rounded-3xl ${shadowClass} text-center" style="background: ${cardBg}; border: 4px solid ${awardColor}">
                                                <div class="text-6xl mb-4" style="color: ${awardColor}">${icon}</div>
                                                <h4 class="font-bold text-lg mb-2">${award.award}</h4>
                                                ${award.desc ? `<p class="text-sm text-gray-600">${award.desc}</p>` : ''}
                                            </div>
                                        </div>
                                    `;
                                }).join('') : '<p class="text-center text-gray-500">Add awards in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        ${awards.length > 0 ? awards.map((award) => `
                            <div class="${padding} rounded-2xl ${shadowClass} text-center" style="background: ${cardBg}">
                                <div class="text-5xl mb-3" style="color: ${awardColor}">${icon}</div>
                                <h4 class="font-bold text-lg mb-2">${award.award}</h4>
                                ${award.desc ? `<p class="text-gray-600">${award.desc}</p>` : ''}
                            </div>
                        `).join('') : '<p class="text-center text-gray-500 col-span-2">Add awards in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
