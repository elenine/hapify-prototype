// Dress Code Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.dresscode = {
    name: '👔 Dress Code',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Dress Code" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code Type</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="type" oninput="updatePreview()">
                    <option value="">Select dress code...</option>
                    <option value="casual">Casual</option>
                    <option value="smart-casual">Smart Casual</option>
                    <option value="cocktail">Cocktail Attire</option>
                    <option value="semi-formal">Semi-Formal</option>
                    <option value="formal">Formal / Black Tie</option>
                    <option value="business">Business Attire</option>
                    <option value="custom">Custom (specify below)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme/Color Scheme (Optional)</label>
                <input type="text" placeholder="e.g., Purple & Gold, Elegant Evening, Vintage Style" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="theme" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea placeholder="Feel free to dress up! We'll be taking lots of photos. Comfortable shoes recommended for dancing!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card - Centered Box</option>
                    <option value="banner">Banner - Full Width</option>
                    <option value="split">Split - Icon & Content</option>
                    <option value="minimal">Minimal - Simple Text</option>
                    <option value="badge">Badge - Large Emphasis</option>
                    <option value="gradient">Gradient - Color Card</option>
                    <option value="elegant">Elegant - Bordered Frame</option>
                    <option value="modern">Modern - Geometric</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f5f3ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#f5f3ff';
        const accentColor = style.accentColor || '#8b5cf6';
        const cardColor = style.cardColor || '#ffffff';
        const shadow = style.shadow || 'md';

        const dressCodeIcons = {
            'casual': '👕',
            'smart-casual': '👔',
            'cocktail': '🥂',
            'semi-formal': '👗',
            'formal': '🤵',
            'business': '💼',
            'custom': '👚'
        };

        const dressCodeDescriptions = {
            'casual': 'Come as you are! Relaxed and comfortable.',
            'smart-casual': 'Dress to impress, but keep it comfortable.',
            'cocktail': 'Elegant cocktail dresses and suits.',
            'semi-formal': 'Dressy but not quite formal - think party chic!',
            'formal': 'Evening gowns and tuxedos. Time to go all out!',
            'business': 'Professional business attire.',
            'custom': ''
        };

        const icon = data.type ? dressCodeIcons[data.type] || '👔' : '👔';
        const description = data.type ? dressCodeDescriptions[data.type] || '' : '';
        const typeLabel = data.type ? data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Please Select';

        // Card Layout - Centered Box (Original)
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-5xl mb-4">${icon}</div>
                        <h2 class="text-2xl font-bold mb-6" style="color: ${accentColor}">${data.title || 'Dress Code'}</h2>

                        <div class="rounded-xl p-8 shadow-${shadow} max-w-lg mx-auto" style="background: ${cardColor}">
                            ${data.type ? `
                                <div class="mb-4">
                                    <div class="inline-block px-6 py-2 rounded-full font-semibold text-lg mb-3" style="background: ${accentColor}20; color: ${accentColor}">
                                        ${typeLabel}
                                    </div>
                                    ${description ? `<p class="text-gray-600 text-sm">${description}</p>` : ''}
                                </div>
                            ` : ''}

                            ${data.theme ? `
                                <div class="mt-6 pt-6 border-t border-gray-200">
                                    <div class="text-sm font-semibold text-gray-700 mb-2">🎨 Theme</div>
                                    <div class="text-gray-800 font-medium">${data.theme}</div>
                                </div>
                            ` : ''}

                            ${data.details ? `
                                <div class="mt-6 pt-6 border-t border-gray-200">
                                    <div class="text-sm text-gray-600 leading-relaxed">
                                        ${data.details}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Banner Layout - Full Width
        if (layout === 'banner') {
            return `
                <div class="py-10 px-6" style="background: ${bg}; border-top: 4px solid ${accentColor}; border-bottom: 4px solid ${accentColor};">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-6">
                            <div class="text-4xl mb-3">${icon}</div>
                            <h2 class="text-3xl font-bold" style="color: ${accentColor}">${data.title || 'Dress Code'}</h2>
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="rounded-lg p-6 shadow-${shadow}" style="background: ${cardColor}">
                                <div class="font-bold text-lg mb-2" style="color: ${accentColor}">Attire</div>
                                <div class="text-xl font-semibold mb-2">${typeLabel}</div>
                                ${description ? `<p class="text-gray-600 text-sm">${description}</p>` : ''}
                            </div>
                            ${data.theme || data.details ? `
                                <div class="rounded-lg p-6 shadow-${shadow}" style="background: ${cardColor}">
                                    ${data.theme ? `<div class="mb-4"><div class="font-bold text-sm mb-1" style="color: ${accentColor}">🎨 Theme</div><div class="text-gray-800">${data.theme}</div></div>` : ''}
                                    ${data.details ? `<div class="text-sm text-gray-600">${data.details}</div>` : ''}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Split Layout - Icon & Content
        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <div class="rounded-2xl overflow-hidden shadow-${shadow}" style="background: ${cardColor}">
                            <div class="flex flex-col md:flex-row">
                                <div class="md:w-1/3 p-8 flex items-center justify-center" style="background: ${accentColor}">
                                    <div class="text-center text-white">
                                        <div class="text-6xl mb-4">${icon}</div>
                                        <div class="text-2xl font-bold">${data.title || 'Dress Code'}</div>
                                    </div>
                                </div>
                                <div class="md:w-2/3 p-8">
                                    <div class="mb-4">
                                        <div class="text-sm font-semibold mb-2" style="color: ${accentColor}">ATTIRE</div>
                                        <div class="text-2xl font-bold mb-2">${typeLabel}</div>
                                        ${description ? `<p class="text-gray-600">${description}</p>` : ''}
                                    </div>
                                    ${data.theme ? `<div class="mb-4 pt-4 border-t border-gray-200"><div class="text-sm font-semibold mb-1" style="color: ${accentColor}">🎨 THEME</div><div class="text-gray-800">${data.theme}</div></div>` : ''}
                                    ${data.details ? `<div class="pt-4 border-t border-gray-200"><div class="text-sm text-gray-600">${data.details}</div></div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout - Simple Text
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="text-5xl mb-4">${icon}</div>
                        <h2 class="text-3xl font-bold mb-3" style="color: ${accentColor}">${data.title || 'Dress Code'}</h2>
                        <div class="w-20 h-1 mx-auto mb-6" style="background: ${accentColor}"></div>
                        <div class="text-2xl font-semibold mb-2">${typeLabel}</div>
                        ${description ? `<p class="text-gray-600 mb-6">${description}</p>` : ''}
                        ${data.theme ? `<div class="mt-6 text-lg"><span style="color: ${accentColor}">🎨</span> ${data.theme}</div>` : ''}
                        ${data.details ? `<div class="mt-6 text-gray-600 text-sm leading-relaxed">${data.details}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Badge Layout - Large Emphasis
        if (layout === 'badge') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-2xl font-bold mb-8" style="color: ${accentColor}">${data.title || 'Dress Code'}</h2>
                        <div class="inline-block rounded-3xl p-10 shadow-${shadow}" style="background: ${cardColor}; border: 3px solid ${accentColor}">
                            <div class="text-7xl mb-6">${icon}</div>
                            <div class="text-3xl font-bold mb-4" style="color: ${accentColor}">${typeLabel}</div>
                            ${description ? `<p class="text-gray-600 max-w-xs mx-auto">${description}</p>` : ''}
                        </div>
                        ${data.theme || data.details ? `
                            <div class="mt-8 max-w-lg mx-auto rounded-xl p-6 shadow-${shadow}" style="background: ${cardColor}">
                                ${data.theme ? `<div class="mb-4"><span class="text-2xl">🎨</span> <span class="font-semibold">${data.theme}</span></div>` : ''}
                                ${data.details ? `<div class="text-sm text-gray-600">${data.details}</div>` : ''}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Gradient Layout - Color Card
        if (layout === 'gradient') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="rounded-3xl overflow-hidden shadow-${shadow}">
                            <div class="p-10 text-center text-white" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd)">
                                <div class="text-6xl mb-4">${icon}</div>
                                <h2 class="text-3xl font-bold mb-2">${data.title || 'Dress Code'}</h2>
                                <div class="text-2xl font-semibold">${typeLabel}</div>
                            </div>
                            <div class="p-8" style="background: ${cardColor}">
                                ${description ? `<p class="text-gray-700 mb-6 text-center">${description}</p>` : ''}
                                ${data.theme ? `
                                    <div class="mb-4 pb-4 border-b border-gray-200">
                                        <div class="text-sm font-semibold mb-2" style="color: ${accentColor}">🎨 THEME</div>
                                        <div class="font-medium">${data.theme}</div>
                                    </div>
                                ` : ''}
                                ${data.details ? `<div class="text-sm text-gray-600 leading-relaxed">${data.details}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Layout - Bordered Frame
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-4 rounded-2xl p-10 shadow-${shadow}" style="border-color: ${accentColor}; background: ${cardColor}">
                            <div class="border-2 border-dashed rounded-xl p-8" style="border-color: ${accentColor}50">
                                <div class="text-center">
                                    <div class="text-6xl mb-4">${icon}</div>
                                    <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor}">${data.title || 'Dress Code'}</h2>
                                    <div class="inline-block px-8 py-3 rounded-full mb-4" style="background: ${accentColor}15; border: 2px solid ${accentColor}">
                                        <div class="text-xl font-bold" style="color: ${accentColor}">${typeLabel}</div>
                                    </div>
                                    ${description ? `<p class="text-gray-600 mb-6">${description}</p>` : ''}
                                    ${data.theme ? `
                                        <div class="mt-6 pt-6 border-t-2" style="border-color: ${accentColor}30">
                                            <div class="text-2xl mb-2">🎨</div>
                                            <div class="font-semibold">${data.theme}</div>
                                        </div>
                                    ` : ''}
                                    ${data.details ? `<div class="mt-6 text-sm text-gray-600 leading-relaxed">${data.details}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout - Geometric
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative">
                            <!-- Geometric decorations -->
                            <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style="background: ${accentColor}"></div>
                            <div class="absolute -bottom-4 -left-4 w-32 h-32 opacity-10" style="background: ${accentColor}; transform: rotate(45deg)"></div>

                            <div class="relative rounded-2xl p-8 shadow-${shadow}" style="background: ${cardColor}">
                                <div class="flex items-center gap-6 mb-6">
                                    <div class="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg transform -rotate-6" style="background: ${accentColor}; color: white">
                                        ${icon}
                                    </div>
                                    <div class="flex-1">
                                        <h2 class="text-2xl font-bold mb-1" style="color: ${accentColor}">${data.title || 'Dress Code'}</h2>
                                        <div class="text-xl font-semibold">${typeLabel}</div>
                                    </div>
                                </div>
                                ${description ? `<p class="text-gray-600 mb-6 pl-2 border-l-4" style="border-color: ${accentColor}">${description}</p>` : ''}
                                ${data.theme || data.details ? `
                                    <div class="mt-6 pt-6 border-t border-gray-200">
                                        ${data.theme ? `<div class="mb-4 flex items-center gap-3"><span class="text-2xl">🎨</span><span class="font-semibold">${data.theme}</span></div>` : ''}
                                        ${data.details ? `<div class="text-sm text-gray-600 leading-relaxed">${data.details}</div>` : ''}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return '';
    }
};
