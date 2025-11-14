// Venue Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.venue = {
    name: '📍 Venue Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Location & Venue" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                <input type="text" placeholder="The Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="venuename" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea placeholder="123 Celebration Ave&#10;City, State 12345" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link (optional)</label>
                <input type="url" placeholder="https://maps.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="maplink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Info</label>
                <textarea placeholder="Free parking available..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="modern">Modern Split</option>
                    <option value="minimal">Minimal</option>
                    <option value="map">Map Focus</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="compact">Compact Info</option>
                    <option value="detailed">Detailed View</option>
                    <option value="floating">Floating Card</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#f87171" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Font Weight</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="fontWeight" onchange="updatePreview()">
                    <option value="light">Light</option>
                    <option value="normal">Normal</option>
                    <option value="medium">Medium</option>
                    <option value="semibold" selected>Semi Bold</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm" selected>Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                    <option value="full">Full</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="loose">Loose</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="iconSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid" selected>Solid</option>
                    <option value="outline">Outline</option>
                    <option value="gradient">Gradient</option>
                    <option value="ghost">Ghost</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hover Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="hoverEffect" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="lift" selected>Lift</option>
                    <option value="grow">Grow</option>
                    <option value="glow">Glow</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#ef4444';
        const secondaryColor = style.secondaryColor || '#f87171';
        const cardBg = style.cardBg || '#fef2f2';
        const fontWeight = style.fontWeight || 'semibold';
        const shadow = style.shadow || 'sm';
        const borderRadius = style.borderRadius || 'lg';
        const spacing = style.spacing || 'normal';
        const iconSize = style.iconSize || 'medium';
        const buttonStyle = style.buttonStyle || 'solid';
        const hoverEffect = style.hoverEffect || 'lift';

        const fontWeightClasses = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        };

        const shadowClasses = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };

        const borderRadiusClasses = {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full'
        };

        const spacingClasses = {
            compact: 'py-8 px-6',
            normal: 'py-12 px-6',
            relaxed: 'py-16 px-6',
            loose: 'py-20 px-6'
        };

        const iconSizeClasses = {
            small: 'text-2xl',
            medium: 'text-4xl',
            large: 'text-5xl',
            xlarge: 'text-6xl'
        };

        const hoverEffectClasses = {
            none: '',
            lift: 'transition hover:-translate-y-1',
            grow: 'transition hover:scale-105',
            glow: 'transition hover:shadow-2xl'
        };

        const mapButton = () => {
            if (!data.maplink) return '';

            if (buttonStyle === 'solid') {
                return `<a href="${data.maplink}" target="_blank"
                           class="inline-block px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]}
                                  text-white transition"
                           style="background: ${accentColor}">
                    🗺️ Open in Maps
                </a>`;
            } else if (buttonStyle === 'outline') {
                return `<a href="${data.maplink}" target="_blank"
                           class="inline-block px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]}
                                  bg-transparent transition"
                           style="color: ${accentColor}; border: 2px solid ${accentColor}">
                    🗺️ Open in Maps
                </a>`;
            } else if (buttonStyle === 'gradient') {
                return `<a href="${data.maplink}" target="_blank"
                           class="inline-block px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]}
                                  text-white transition"
                           style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                    🗺️ Open in Maps
                </a>`;
            } else {
                return `<a href="${data.maplink}" target="_blank"
                           class="inline-block px-6 py-3 ${borderRadiusClasses[borderRadius]} ${fontWeightClasses[fontWeight]} transition"
                           style="color: ${accentColor}; background: ${accentColor}11">
                    🗺️ Open in Maps
                </a>`;
            }
        };

        // Classic Card Layout
        if (layout === 'classic') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Venue Details'}</h2>
                        <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}">
                            <div class="text-center ${iconSizeClasses[iconSize]} mb-4">📍</div>
                            ${data.venuename ? `<h3 class="text-xl ${fontWeightClasses[fontWeight]} text-center mb-4">${data.venuename}</h3>` : ''}
                            ${data.address ? `<p class="text-gray-700 text-center mb-4 whitespace-pre-line">${data.address}</p>` : ''}
                            ${data.parking ? `
                                <div class="mt-4 p-3 ${borderRadiusClasses[borderRadius]}"
                                     style="background: ${bg}; border-left: 3px solid ${accentColor}">
                                    <p class="text-sm text-gray-600"><strong>🅿️ Parking:</strong> ${data.parking}</p>
                                </div>
                            ` : ''}
                            ${data.maplink ? `<div class="text-center mt-6">${mapButton()}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Split Layout
        if (layout === 'modern') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Venue Details'}</h2>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} flex items-center justify-center"
                                 style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                <div class="text-center text-white">
                                    <div class="${iconSizeClasses[iconSize]} mb-3">📍</div>
                                    <p class="text-sm uppercase tracking-wider ${fontWeightClasses[fontWeight]}">Find Us Here</p>
                                </div>
                            </div>
                            <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                 style="background: ${cardBg}">
                                ${data.venuename ? `<h3 class="text-xl ${fontWeightClasses[fontWeight]} mb-3" style="color: ${accentColor}">${data.venuename}</h3>` : ''}
                                ${data.address ? `<p class="text-gray-700 mb-3 text-sm whitespace-pre-line">${data.address}</p>` : ''}
                                ${data.parking ? `<p class="text-xs text-gray-600 mb-3"><strong>🅿️</strong> ${data.parking}</p>` : ''}
                                ${data.maplink ? `<div class="mt-4">${mapButton()}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="${iconSizeClasses[iconSize]} mb-4">📍</div>
                        <h2 class="text-xl ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">
                            ${data.title || 'Venue Details'}
                        </h2>
                        <div class="h-1 w-16 mx-auto mb-6 ${borderRadiusClasses[borderRadius]}"
                             style="background: linear-gradient(90deg, ${accentColor}, ${secondaryColor})"></div>
                        ${data.venuename ? `<h3 class="text-lg ${fontWeightClasses[fontWeight]} mb-3">${data.venuename}</h3>` : ''}
                        ${data.address ? `<p class="text-gray-600 mb-4 text-sm whitespace-pre-line">${data.address}</p>` : ''}
                        ${data.parking ? `<p class="text-xs text-gray-500 mb-4">🅿️ ${data.parking}</p>` : ''}
                        ${data.maplink ? `<div class="mt-6">${mapButton()}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Map Focus Layout
        if (layout === 'map') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-2xl ${fontWeightClasses[fontWeight]} text-center mb-8">${data.title || 'Venue Details'}</h2>
                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}">
                            <div class="relative p-12 mb-6 ${borderRadiusClasses[borderRadius]}"
                                 style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="text-white text-center">
                                        <div class="${iconSizeClasses[iconSize]} mb-2">🗺️</div>
                                        <p class="text-sm ${fontWeightClasses[fontWeight]} uppercase tracking-wider">Location</p>
                                    </div>
                                </div>
                            </div>
                            ${data.venuename ? `<h3 class="text-xl ${fontWeightClasses[fontWeight]} text-center mb-3">${data.venuename}</h3>` : ''}
                            ${data.address ? `<p class="text-gray-700 text-center mb-4 text-sm whitespace-pre-line">${data.address}</p>` : ''}
                            ${data.parking ? `
                                <div class="p-3 ${borderRadiusClasses[borderRadius]} mb-4 text-center"
                                     style="background: ${bg}">
                                    <p class="text-sm text-gray-600">🅿️ ${data.parking}</p>
                                </div>
                            ` : ''}
                            ${data.maplink ? `<div class="text-center">${mapButton()}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Elegant Frame Layout
        if (layout === 'elegant') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="relative p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}; border: 3px double ${accentColor}">
                            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}"
                                 style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                <div class="flex items-center gap-2 text-white">
                                    <span class="text-2xl">📍</span>
                                    <span class="${fontWeightClasses[fontWeight]} text-sm uppercase tracking-wider">
                                        ${data.title || 'Venue'}
                                    </span>
                                </div>
                            </div>

                            <div class="mt-4 text-center">
                                ${data.venuename ? `<h3 class="text-2xl ${fontWeightClasses[fontWeight]} mb-4" style="color: ${accentColor}">${data.venuename}</h3>` : ''}
                                ${data.address ? `<p class="text-gray-700 mb-6 whitespace-pre-line">${data.address}</p>` : ''}
                                ${data.parking ? `
                                    <div class="p-4 ${borderRadiusClasses[borderRadius]} mb-4"
                                         style="background: ${bg}; border: 2px dashed ${accentColor}33">
                                        <p class="text-sm text-gray-600"><strong>🅿️ Parking Information:</strong><br>${data.parking}</p>
                                    </div>
                                ` : ''}
                                ${data.maplink ? `<div>${mapButton()}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Compact Info Layout
        if (layout === 'compact') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                             style="background: ${cardBg}; border-left: 4px solid ${accentColor}">
                            <div class="flex items-start gap-4">
                                <div class="${iconSizeClasses[iconSize]}" style="color: ${accentColor}">📍</div>
                                <div class="flex-1">
                                    <h2 class="text-lg ${fontWeightClasses[fontWeight]} mb-2" style="color: ${accentColor}">
                                        ${data.title || 'Venue Details'}
                                    </h2>
                                    ${data.venuename ? `<h3 class="text-base ${fontWeightClasses[fontWeight]} mb-2">${data.venuename}</h3>` : ''}
                                    ${data.address ? `<p class="text-sm text-gray-700 mb-2 whitespace-pre-line">${data.address}</p>` : ''}
                                    ${data.parking ? `<p class="text-xs text-gray-600 mb-3">🅿️ ${data.parking}</p>` : ''}
                                    ${data.maplink ? `<div>${mapButton()}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Detailed View Layout
        if (layout === 'detailed') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="inline-block p-4 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} mb-4"
                                 style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor})">
                                <div class="${iconSizeClasses[iconSize]} text-white">📍</div>
                            </div>
                            <h2 class="text-2xl ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">
                                ${data.title || 'Venue Details'}
                            </h2>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                 style="background: ${cardBg}">
                                <h4 class="text-sm uppercase tracking-wider mb-3 ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">
                                    Venue Name
                                </h4>
                                <p class="text-gray-700 ${fontWeightClasses[fontWeight]}">${data.venuename || 'Not specified'}</p>
                            </div>

                            <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                 style="background: ${cardBg}">
                                <h4 class="text-sm uppercase tracking-wider mb-3 ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">
                                    Address
                                </h4>
                                <p class="text-gray-700 text-sm whitespace-pre-line">${data.address || 'Not specified'}</p>
                            </div>

                            ${data.parking ? `
                                <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]}"
                                     style="background: ${cardBg}">
                                    <h4 class="text-sm uppercase tracking-wider mb-3 ${fontWeightClasses[fontWeight]}" style="color: ${accentColor}">
                                        🅿️ Parking
                                    </h4>
                                    <p class="text-gray-700 text-sm">${data.parking}</p>
                                </div>
                            ` : ''}

                            ${data.maplink ? `
                                <div class="p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]} flex items-center justify-center"
                                     style="background: ${cardBg}">
                                    ${mapButton()}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Floating Card Layout
        if (layout === 'floating') {
            return `
                <div class="${spacingClasses[spacing]}" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="inline-flex items-center gap-3 mb-8">
                            <div class="w-12 h-1 ${borderRadiusClasses[borderRadius]}" style="background: ${accentColor}"></div>
                            <div class="text-3xl">📍</div>
                            <div class="w-12 h-1 ${borderRadiusClasses[borderRadius]}" style="background: ${secondaryColor}"></div>
                        </div>

                        <div class="p-8 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} ${hoverEffectClasses[hoverEffect]} relative"
                             style="background: ${cardBg}">
                            <h2 class="text-xl ${fontWeightClasses[fontWeight]} mb-6" style="color: ${accentColor}">
                                ${data.title || 'Venue Details'}
                            </h2>

                            ${data.venuename ? `
                                <div class="mb-4 pb-4 border-b" style="border-color: ${accentColor}22">
                                    <h3 class="text-lg ${fontWeightClasses[fontWeight]}">${data.venuename}</h3>
                                </div>
                            ` : ''}

                            ${data.address ? `
                                <div class="mb-4 pb-4 border-b" style="border-color: ${accentColor}22">
                                    <p class="text-sm text-gray-700 whitespace-pre-line">${data.address}</p>
                                </div>
                            ` : ''}

                            ${data.parking ? `
                                <div class="mb-4 p-3 ${borderRadiusClasses[borderRadius]}"
                                     style="background: ${bg}">
                                    <p class="text-xs text-gray-600">🅿️ ${data.parking}</p>
                                </div>
                            ` : ''}

                            ${data.maplink ? `<div>${mapButton()}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default to classic
        return '';
    }
};
