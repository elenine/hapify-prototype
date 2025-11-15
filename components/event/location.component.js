// Location Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.location = {
    name: '📍 Location',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="Convention Center" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="123 Main Street, City, State, ZIP" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions/Parking Info</label>
                <textarea placeholder="Parking available..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="directions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="cards">Cards - Separate boxes</option>
                    <option value="unified">Unified - Single card</option>
                    <option value="map-style">Map Style - Pin design</option>
                    <option value="list">List - Simple rows</option>
                    <option value="minimal">Minimal - Clean text</option>
                    <option value="modern">Modern - Gradient card</option>
                    <option value="elegant">Elegant - Spacious</option>
                    <option value="compact">Compact - Dense</option>
                    <option value="destination">Destination - Travel style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="iconStyle" onchange="updatePreview()">
                    <option value="emoji">Emoji Icons</option>
                    <option value="solid">Solid Colored</option>
                    <option value="outline">Outline Style</option>
                    <option value="none">No Icons</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Animation Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="animation" onchange="updatePreview()">
                    <option value="none">No Animation</option>
                    <option value="fade">Fade In</option>
                    <option value="slide">Slide Up</option>
                    <option value="zoom">Zoom In</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'cards';
        const bgColor = style.bg || '#f0fdf4';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accentColor || '#059669';
        const iconStyle = style.iconStyle || 'emoji';
        const shadow = style.shadow || 'none';
        const animation = style.animation || 'none';
        const borderRadius = style.borderRadius || 'medium';
        const spacing = style.spacing || 'normal';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        const borderRadiusMap = {
            none: '0px',
            small: '8px',
            medium: '16px',
            large: '24px',
            xl: '32px'
        };

        const spacingMap = {
            compact: { padding: 'py-8', gap: 'space-y-2' },
            normal: { padding: 'py-12', gap: 'space-y-4' },
            relaxed: { padding: 'py-16', gap: 'space-y-6' }
        };

        const animationMap = {
            none: '',
            fade: 'animation: fadeIn 0.6s ease-out;',
            slide: 'animation: slideUp 0.6s ease-out;',
            zoom: 'animation: zoomIn 0.6s ease-out;'
        };

        const radius = borderRadiusMap[borderRadius];
        const space = spacingMap[spacing];
        const animationCSS = animationMap[animation];

        const animations = `
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            </style>
        `;

        const getIcon = (emoji, label) => {
            switch (iconStyle) {
                case 'emoji':
                    return `<div class="text-2xl">${emoji}</div>`;
                case 'solid':
                    return `<div class="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg" style="background: ${accentColor};">${emoji}</div>`;
                case 'outline':
                    return `<div class="w-10 h-10 rounded-lg flex items-center justify-center text-lg border-2" style="color: ${accentColor}; border-color: ${accentColor};">${emoji}</div>`;
                case 'none':
                    return '';
                default:
                    return `<div class="text-2xl">${emoji}</div>`;
            }
        };

        const items = [
            { icon: '📍', label: 'Venue', value: data.venue },
            { icon: '🗺️', label: 'Address', value: data.address },
            { icon: '🚗', label: 'Directions', value: data.directions }
        ].filter(item => item.value);

        const renderItems = () => {
            switch (layoutStyle) {
                case 'cards':
                    return items.map(item => `
                        <div class="flex items-start gap-4 p-4 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 12px;">
                            ${getIcon(item.icon, item.label)}
                            <div>
                                <div class="text-xs font-semibold mb-1" style="color: ${accentColor};">${item.label}</div>
                                <div class="text-sm text-gray-700">${item.value}</div>
                            </div>
                        </div>
                    `).join('');

                case 'unified':
                    return `
                        <div class="p-6 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 16px;">
                            ${items.map(item => `
                                <div class="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                                    ${getIcon(item.icon, item.label)}
                                    <div class="flex-1">
                                        <div class="text-xs font-semibold mb-1" style="color: ${accentColor};">${item.label}</div>
                                        <div class="text-sm text-gray-700">${item.value}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'map-style':
                    return `
                        <div class="p-6 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 16px; border-left: 4px solid ${accentColor};">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl" style="background: ${accentColor};">
                                    📍
                                </div>
                                <div class="font-bold text-lg">${data.venue || 'Location'}</div>
                            </div>
                            ${data.address ? `
                                <div class="pl-15 mb-3">
                                    <div class="text-xs font-semibold mb-1 text-gray-500">ADDRESS</div>
                                    <div class="text-sm text-gray-700">${data.address}</div>
                                </div>
                            ` : ''}
                            ${data.directions ? `
                                <div class="pl-15">
                                    <div class="text-xs font-semibold mb-1 text-gray-500">HOW TO GET THERE</div>
                                    <div class="text-sm text-gray-700">${data.directions}</div>
                                </div>
                            ` : ''}
                        </div>
                    `;

                case 'list':
                    return items.map(item => `
                        <div class="flex items-center gap-4 py-3 border-b border-gray-200 last:border-0">
                            ${getIcon(item.icon, item.label)}
                            <div class="flex-1">
                                <span class="text-sm font-semibold" style="color: ${accentColor};">${item.label}:</span>
                                <span class="text-sm text-gray-700 ml-2">${item.value}</span>
                            </div>
                        </div>
                    `).join('');

                case 'minimal':
                    return items.map(item => `
                        <div class="text-center py-3" style="${animationCSS}">
                            <div class="text-xs font-semibold mb-2" style="color: ${accentColor};">${item.label.toUpperCase()}</div>
                            <div class="text-sm text-gray-700">${item.value}</div>
                        </div>
                    `).join('');

                case 'modern':
                    return `
                        <div class="p-8 ${shadowMap[shadow]}" style="background: linear-gradient(135deg, ${accentColor} 0%, ${cardBg} 100%); border-radius: ${radius}; ${animationCSS}">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
                                    📍
                                </div>
                                <h3 class="text-xl font-bold text-white">${data.venue || 'Venue'}</h3>
                            </div>
                            ${items.slice(1).map(item => `
                                <div class="mb-4 last:mb-0">
                                    <div class="text-xs font-semibold text-white/70 mb-1">${item.label.toUpperCase()}</div>
                                    <div class="text-sm text-white">${item.value}</div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'elegant':
                    return `
                        <div class="p-10 ${shadowMap[shadow]} text-center" style="background: ${cardBg}; border-radius: ${radius}; ${animationCSS}">
                            <div class="text-6xl mb-6">📍</div>
                            <h3 class="text-2xl font-bold mb-6" style="color: ${accentColor};">${data.venue || 'Venue'}</h3>
                            <div class="space-y-4">
                                ${items.slice(1).map(item => `
                                    <div class="border-t border-gray-100 pt-4">
                                        <div class="text-xs uppercase tracking-wider text-gray-500 mb-2">${item.label}</div>
                                        <div class="text-sm text-gray-700 leading-relaxed">${item.value}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;

                case 'compact':
                    return items.map(item => `
                        <div class="flex items-center gap-3 p-3 border-l-4 ${shadowMap[shadow]}" style="background: ${cardBg}; border-color: ${accentColor}; border-radius: ${radius}; ${animationCSS}">
                            <div class="text-xl">${item.icon}</div>
                            <div class="flex-1">
                                <span class="text-xs font-semibold mr-2" style="color: ${accentColor};">${item.label}:</span>
                                <span class="text-sm text-gray-700">${item.value}</span>
                            </div>
                        </div>
                    `).join('');

                case 'destination':
                    return `
                        <div class="relative overflow-hidden p-8 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: ${radius}; ${animationCSS}">
                            <div class="absolute top-0 right-0 text-8xl opacity-5">🗺️</div>
                            <div class="relative">
                                <div class="inline-block px-4 py-2 rounded-full mb-4 text-sm font-semibold" style="background: ${accentColor}; color: white;">
                                    📍 DESTINATION
                                </div>
                                <h3 class="text-2xl font-bold mb-6 text-gray-900">${data.venue || 'Venue Name'}</h3>
                                ${items.slice(1).map((item, index) => `
                                    <div class="flex gap-4 mb-4 last:mb-0 pb-4 last:pb-0 border-b border-gray-100 last:border-0">
                                        <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg" style="background: ${accentColor}20; color: ${accentColor};">
                                            ${item.icon}
                                        </div>
                                        <div class="flex-1">
                                            <div class="text-xs font-semibold text-gray-500 mb-1">${item.label.toUpperCase()}</div>
                                            <div class="text-sm text-gray-700">${item.value}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;

                default:
                    return items.map(item => `
                        <div class="flex items-start gap-4 p-4" style="background: ${cardBg}; border-radius: ${radius}; ${animationCSS}">
                            ${getIcon(item.icon, item.label)}
                            <div>
                                <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                <div class="text-sm">${item.value}</div>
                            </div>
                        </div>
                    `).join('');
            }
        };

        const needsUnifiedLayout = ['unified', 'map-style', 'modern', 'elegant', 'destination'].includes(layoutStyle);

        return `
            ${animations}
            <div class="${space.padding} px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">Location</h2>
                <div class="max-w-md mx-auto ${needsUnifiedLayout ? '' : space.gap}">
                    ${items.length > 0 ? renderItems() : '<p class="text-center text-gray-500">Add location details</p>'}
                </div>
            </div>
        `;
    }
};
