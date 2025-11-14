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
                    <option value="minimal">Minimal - Simple</option>
                    <option value="elegant">Elegant - Bordered</option>
                    <option value="modern">Modern - Gradient</option>
                    <option value="compact">Compact - Dense</option>
                    <option value="split">Split - Two Columns</option>
                    <option value="badge">Badge - Label Style</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                    <option value="2xl">Huge</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="rounded-lg">Normal</option>
                    <option value="rounded-xl">Large</option>
                    <option value="rounded-2xl">Extra Large</option>
                    <option value="rounded-3xl">Huge</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="textSize" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="base">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#f5f3ff';
        const accentColor = style.accentColor || '#8b5cf6';
        const shadow = style.shadow || 'sm';
        const borderRadius = style.borderRadius || 'rounded-xl';
        const textSize = style.textSize || 'base';

        const textSizeClass = textSize === 'sm' ? 'text-sm' : textSize === 'lg' ? 'text-lg' : 'text-base';
        const shadowClass = shadow === 'none' ? '' : `shadow-${shadow}`;

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

        // Card Layout
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-5xl mb-4">${icon}</div>
                        <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>

                        <div class="bg-white ${borderRadius} p-8 ${shadowClass} max-w-lg mx-auto">
                            ${data.type ? `
                                <div class="mb-4">
                                    <div class="inline-block px-6 py-2 rounded-full font-semibold text-lg mb-3" style="background: ${accentColor}15; color: ${accentColor}">
                                        ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </div>
                                    ${description ? `<p class="text-gray-600 ${textSizeClass}">${description}</p>` : ''}
                                </div>
                            ` : ''}

                            ${data.theme ? `
                                <div class="mt-6 pt-6 border-t border-gray-200">
                                    <div class="text-sm font-semibold text-gray-700 mb-2">🎨 Theme</div>
                                    <div class="text-gray-800 font-medium ${textSizeClass}">${data.theme}</div>
                                </div>
                            ` : ''}

                            ${data.details ? `
                                <div class="mt-6 pt-6 border-t border-gray-200">
                                    <div class="${textSizeClass} text-gray-600 leading-relaxed">
                                        ${data.details}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Banner Layout
        if (layout === 'banner') {
            return `
                <div class="py-10 px-6" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90); color: white;">
                    <div class="max-w-4xl mx-auto">
                        <div class="flex items-center gap-6">
                            <div class="text-6xl flex-shrink-0">${icon}</div>
                            <div class="flex-1">
                                <h2 class="text-3xl font-bold mb-2">${data.title || 'Dress Code'}</h2>
                                ${data.type ? `
                                    <div class="text-2xl font-semibold mb-2">
                                        ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </div>
                                    ${description ? `<p class="opacity-90 ${textSizeClass}">${description}</p>` : ''}
                                ` : ''}
                                ${data.theme ? `<div class="mt-2 text-lg">🎨 ${data.theme}</div>` : ''}
                                ${data.details ? `<p class="mt-3 opacity-90 ${textSizeClass}">${data.details}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="text-5xl mb-4">${icon}</div>
                        <h2 class="text-3xl font-bold mb-3">${data.title || 'Dress Code'}</h2>
                        <div class="w-16 h-1 mx-auto mb-6" style="background: ${accentColor}"></div>
                        ${data.type ? `
                            <div class="mb-6">
                                <div class="text-xl font-bold mb-2" style="color: ${accentColor}">
                                    ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </div>
                                ${description ? `<p class="text-gray-600 ${textSizeClass}">${description}</p>` : ''}
                            </div>
                        ` : ''}
                        ${data.theme ? `<div class="text-gray-700 ${textSizeClass} mb-4">🎨 ${data.theme}</div>` : ''}
                        ${data.details ? `<p class="text-gray-600 ${textSizeClass} leading-relaxed">${data.details}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Elegant Layout
        if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-4 ${borderRadius} p-10 bg-white ${shadowClass}" style="border-color: ${accentColor}">
                            <div class="text-center">
                                <div class="inline-block p-3 rounded-full mb-4" style="background: ${accentColor}15">
                                    <div class="text-4xl">${icon}</div>
                                </div>
                                <h2 class="text-3xl font-bold mb-4" style="color: ${accentColor}">${data.title || 'Dress Code'}</h2>
                                <div class="w-24 h-1 mx-auto mb-6" style="background: ${accentColor}30"></div>
                                ${data.type ? `
                                    <div class="mb-6 ${borderRadius} p-5" style="background: ${accentColor}10">
                                        <div class="text-xl font-bold mb-2" style="color: ${accentColor}">
                                            ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                        </div>
                                        ${description ? `<p class="text-gray-700 ${textSizeClass}">${description}</p>` : ''}
                                    </div>
                                ` : ''}
                                ${data.theme ? `
                                    <div class="mb-4">
                                        <div class="text-sm font-semibold mb-1" style="color: ${accentColor}">Theme</div>
                                        <div class="text-gray-800 ${textSizeClass}">${data.theme}</div>
                                    </div>
                                ` : ''}
                                ${data.details ? `<p class="text-gray-600 ${textSizeClass} leading-relaxed">${data.details}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Layout - Gradient
        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${accentColor}10, ${bg})">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white ${borderRadius} ${shadowClass} overflow-hidden">
                            <div class="p-8 text-center" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}90); color: white">
                                <div class="text-6xl mb-3">${icon}</div>
                                <h2 class="text-3xl font-bold">${data.title || 'Dress Code'}</h2>
                            </div>
                            <div class="p-8">
                                ${data.type ? `
                                    <div class="${borderRadius} p-5 mb-5" style="background: ${accentColor}10">
                                        <div class="text-center">
                                            <div class="text-2xl font-bold mb-2" style="color: ${accentColor}">
                                                ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                            </div>
                                            ${description ? `<p class="text-gray-700 ${textSizeClass}">${description}</p>` : ''}
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.theme ? `
                                    <div class="mb-5">
                                        <div class="flex items-center gap-2 justify-center">
                                            <span class="text-2xl">🎨</span>
                                            <span class="font-semibold ${textSizeClass}" style="color: ${accentColor}">Theme:</span>
                                            <span class="text-gray-800 ${textSizeClass}">${data.theme}</span>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.details ? `<p class="text-gray-600 ${textSizeClass} leading-relaxed text-center">${data.details}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Compact Layout
        if (layout === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto">
                        <div class="${borderRadius} p-5 ${shadowClass} bg-white">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="text-4xl">${icon}</div>
                                <div>
                                    <h2 class="text-xl font-bold">${data.title || 'Dress Code'}</h2>
                                    ${data.type ? `
                                        <div class="font-semibold ${textSizeClass}" style="color: ${accentColor}">
                                            ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                            ${description ? `<p class="text-gray-600 ${textSizeClass} mb-3">${description}</p>` : ''}
                            ${data.theme ? `<div class="text-gray-700 ${textSizeClass} mb-2">🎨 ${data.theme}</div>` : ''}
                            ${data.details ? `<p class="text-gray-600 ${textSizeClass}">${data.details}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Split Layout
        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-3xl font-bold text-center mb-10">${data.title || 'Dress Code'}</h2>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="${borderRadius} p-8 text-center ${shadowClass}" style="background: ${accentColor}15">
                                <div class="text-6xl mb-4">${icon}</div>
                                ${data.type ? `
                                    <div class="text-2xl font-bold mb-3" style="color: ${accentColor}">
                                        ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </div>
                                ` : ''}
                                ${description ? `<p class="text-gray-700 ${textSizeClass}">${description}</p>` : ''}
                            </div>
                            <div class="space-y-4">
                                ${data.theme ? `
                                    <div class="${borderRadius} p-5 ${shadowClass} bg-white">
                                        <div class="text-sm font-semibold mb-1" style="color: ${accentColor}">Theme</div>
                                        <div class="text-gray-800 ${textSizeClass}">${data.theme}</div>
                                    </div>
                                ` : ''}
                                ${data.details ? `
                                    <div class="${borderRadius} p-5 ${shadowClass} bg-white">
                                        <div class="text-sm font-semibold mb-2" style="color: ${accentColor}">Details</div>
                                        <div class="text-gray-700 ${textSizeClass}">${data.details}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Badge Layout
        if (layout === 'badge') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-5xl mb-4">${icon}</div>
                        <h2 class="text-2xl font-bold mb-6">${data.title || 'Dress Code'}</h2>
                        ${data.type ? `
                            <div class="inline-block px-12 py-6 ${borderRadius} ${shadowClass} mb-6" style="background: ${accentColor}; color: white">
                                <div class="text-3xl font-bold mb-2">
                                    ${data.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </div>
                                ${description ? `<p class="opacity-90">${description}</p>` : ''}
                            </div>
                        ` : ''}
                        <div class="max-w-lg mx-auto space-y-4">
                            ${data.theme ? `
                                <div class="${borderRadius} p-4 ${shadowClass} bg-white">
                                    <span class="font-semibold ${textSizeClass}" style="color: ${accentColor}">🎨 Theme:</span>
                                    <span class="text-gray-800 ${textSizeClass} ml-2">${data.theme}</span>
                                </div>
                            ` : ''}
                            ${data.details ? `
                                <div class="${borderRadius} p-4 ${shadowClass} bg-white">
                                    <p class="text-gray-700 ${textSizeClass}">${data.details}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return '';
    }
};
