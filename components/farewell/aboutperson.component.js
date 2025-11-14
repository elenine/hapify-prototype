// About Person Component for Farewell Party

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.aboutperson = {
                name: '👤 About Person',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="About Jane" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Position/Role</label>
                            <input type="text" placeholder="Senior Developer" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="position" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Time at Organization</label>
                            <input type="text" placeholder="5 years" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="duration" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Biography</label>
                            <textarea placeholder="Share about their contributions, personality, and impact..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="bio" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="card">Card - Highlighted Box</option>
                                <option value="timeline">Timeline - Badge Style</option>
                                <option value="modern">Modern - Split Design</option>
                                <option value="simple">Simple - Clean Text</option>
                                <option value="elegant">Elegant - Bordered</option>
                                <option value="profile">Profile - Centered Badge</option>
                                <option value="minimal">Minimal - Compact View</option>
                                <option value="gradient">Gradient - Colorful Background</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="align" onchange="updatePreview()">
                                <option value="center">Center</option>
                                <option value="left">Left</option>
                            </select>
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
                                <option value="none">Sharp Corners</option>
                                <option value="sm">Small Rounded</option>
                                <option value="md">Medium Rounded</option>
                                <option value="lg">Large Rounded</option>
                                <option value="xl">Extra Rounded</option>
                                <option value="full">Pill Shape</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Badge Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="badgeStyle" onchange="updatePreview()">
                                <option value="filled">Filled</option>
                                <option value="outlined">Outlined</option>
                                <option value="subtle">Subtle</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="fontSize" onchange="updatePreview()">
                                <option value="small">Small</option>
                                <option value="normal">Normal</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'card';
                    const bg = style.bg || '#ffffff';
                    const accentColor = style.accentColor || '#8b5cf6';
                    const textColor = style.textColor || '#1f2937';
                    const align = style.align || 'center';
                    const shadow = style.shadow || 'md';
                    const borderRadius = style.borderRadius || 'md';
                    const badgeStyle = style.badgeStyle || 'filled';
                    const fontSize = style.fontSize || 'normal';

                    const alignClass = align === 'center' ? 'text-center' : 'text-left';
                    const shadowClass = shadow !== 'none' ? `shadow-${shadow}` : '';

                    const roundedClass = borderRadius === 'none' ? '' :
                                        borderRadius === 'sm' ? 'rounded-lg' :
                                        borderRadius === 'lg' ? 'rounded-2xl' :
                                        borderRadius === 'xl' ? 'rounded-3xl' :
                                        borderRadius === 'full' ? 'rounded-full' : 'rounded-xl';

                    const getBadgeClasses = () => {
                        if (badgeStyle === 'filled') return `bg-${accentColor} text-white`;
                        if (badgeStyle === 'outlined') return `border-2 bg-transparent`;
                        return `bg-opacity-20`;
                    };

                    const fontSizeClass = fontSize === 'small' ? 'text-sm' : fontSize === 'large' ? 'text-lg' : 'text-base';

                    // Card Layout - Highlighted Box
                    if (layout === 'card') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                                <div class="max-w-md mx-auto">
                                    <h2 class="text-2xl font-bold ${alignClass} mb-6">${data.title || 'About'}</h2>
                                    <div class="p-6 rounded-2xl shadow-${shadow}" style="background: ${accentColor}15; border-left: 4px solid ${accentColor}">
                                        ${data.position ? `<div class="${alignClass} mb-3"><span class="inline-block px-4 py-2 rounded-full font-semibold text-sm" style="background: ${accentColor}; color: white">${data.position}</span></div>` : ''}
                                        ${data.duration ? `<div class="${alignClass} text-sm opacity-70 mb-4">⏱️ ${data.duration}</div>` : ''}
                                        ${data.bio ? `<p class="leading-relaxed mt-4 ${alignClass}">${data.bio}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Timeline Layout - Badge Style
                    if (layout === 'timeline') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                                <div class="max-w-md mx-auto">
                                    <h2 class="text-2xl font-bold ${alignClass} mb-8">${data.title || 'About'}</h2>
                                    <div class="relative pl-8 border-l-4" style="border-color: ${accentColor}">
                                        <div class="absolute w-4 h-4 rounded-full -left-2.5 top-0" style="background: ${accentColor}"></div>
                                        ${data.position ? `
                                            <div class="mb-6">
                                                <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Role</div>
                                                <div class="font-bold text-lg">${data.position}</div>
                                            </div>
                                        ` : ''}
                                        ${data.duration ? `
                                            <div class="mb-6">
                                                <div class="text-xs uppercase tracking-wide opacity-60 mb-1">Duration</div>
                                                <div class="font-semibold">${data.duration}</div>
                                            </div>
                                        ` : ''}
                                        ${data.bio ? `
                                            <div>
                                                <div class="text-xs uppercase tracking-wide opacity-60 mb-2">About</div>
                                                <p class="leading-relaxed">${data.bio}</p>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Modern Layout - Split Design
                    if (layout === 'modern') {
                        return `
                            <div class="py-12 px-6" style="background: linear-gradient(to bottom, ${bg}, ${accentColor}10); color: ${textColor}">
                                <div class="max-w-2xl mx-auto">
                                    <h2 class="text-3xl font-bold ${alignClass} mb-8">${data.title || 'About'}</h2>
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div class="space-y-4">
                                            ${data.position ? `
                                                <div class="p-4 bg-white rounded-xl shadow-${shadow}">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Position</div>
                                                    <div class="font-bold text-lg">${data.position}</div>
                                                </div>
                                            ` : ''}
                                            ${data.duration ? `
                                                <div class="p-4 bg-white rounded-xl shadow-${shadow}">
                                                    <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accentColor}">Duration</div>
                                                    <div class="font-semibold">${data.duration}</div>
                                                </div>
                                            ` : ''}
                                        </div>
                                        ${data.bio ? `
                                            <div class="p-6 bg-white rounded-xl shadow-${shadow}">
                                                <p class="leading-relaxed text-sm">${data.bio}</p>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Simple Layout - Clean Text
                    if (layout === 'simple') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                                <div class="max-w-xl mx-auto ${alignClass}">
                                    <h2 class="text-2xl font-bold mb-2">${data.title || 'About'}</h2>
                                    <div class="w-16 h-1 mb-6" style="background: ${accentColor}; ${align === 'center' ? 'margin-left: auto; margin-right: auto;' : ''}"></div>
                                    ${data.position ? `<div class="text-xl font-semibold mb-2" style="color: ${accentColor}">${data.position}</div>` : ''}
                                    ${data.duration ? `<div class="text-sm opacity-70 mb-4">${data.duration}</div>` : ''}
                                    ${data.bio ? `<p class="leading-relaxed mt-6">${data.bio}</p>` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Elegant Layout - Bordered
                    if (layout === 'elegant') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                                <div class="max-w-lg mx-auto border-4 rounded-2xl p-8 shadow-${shadow}" style="border-color: ${accentColor}">
                                    <div class="text-center mb-6">
                                        <div class="inline-block p-3 rounded-full mb-4" style="background: ${accentColor}15">
                                            <div class="text-3xl">👤</div>
                                        </div>
                                        <h2 class="text-2xl font-bold">${data.title || 'About'}</h2>
                                    </div>
                                    ${data.position ? `
                                        <div class="text-center mb-3">
                                            <span class="inline-block px-6 py-2 rounded-full text-white font-semibold" style="background: ${accentColor}">${data.position}</span>
                                        </div>
                                    ` : ''}
                                    ${data.duration ? `<div class="text-center text-sm opacity-70 mb-4">${data.duration}</div>` : ''}
                                    ${data.bio ? `
                                        <div class="mt-6 pt-6 border-t" style="border-color: ${accentColor}30">
                                            <p class="leading-relaxed text-center">${data.bio}</p>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Profile Layout - Centered Badge
                    if (layout === 'profile') {
                        const badgeClasses = badgeStyle === 'filled' ? `text-white` : badgeStyle === 'outlined' ? `border-2 bg-transparent` : '';
                        const badgeBg = badgeStyle === 'filled' ? accentColor : badgeStyle === 'outlined' ? 'transparent' : `${accentColor}20`;
                        const badgeBorder = badgeStyle === 'outlined' ? `border-color: ${accentColor};` : '';

                        return `
                            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                                <div class="max-w-md mx-auto ${alignClass}">
                                    <div class="inline-block p-4 mb-6 ${roundedClass} ${shadowClass}" style="background: ${accentColor}10">
                                        <div class="text-5xl mb-2">👤</div>
                                    </div>
                                    <h2 class="text-3xl font-bold mb-4">${data.title || 'About'}</h2>
                                    ${data.position ? `
                                        <div class="mb-4">
                                            <span class="inline-block px-6 py-3 ${roundedClass} font-bold ${fontSizeClass} ${badgeClasses}" style="background: ${badgeBg}; ${badgeBorder} color: ${badgeStyle === 'outlined' ? accentColor : 'white'}">${data.position}</span>
                                        </div>
                                    ` : ''}
                                    ${data.duration ? `
                                        <div class="flex items-center gap-2 justify-center mb-6">
                                            <div class="w-2 h-2 rounded-full" style="background: ${accentColor}"></div>
                                            <span class="text-sm font-semibold ${fontSizeClass}">${data.duration}</span>
                                            <div class="w-2 h-2 rounded-full" style="background: ${accentColor}"></div>
                                        </div>
                                    ` : ''}
                                    ${data.bio ? `<p class="leading-relaxed mt-4 ${fontSizeClass} max-w-lg mx-auto">${data.bio}</p>` : ''}
                                </div>
                            </div>
                        `;
                    }

                    // Minimal Layout - Compact View
                    if (layout === 'minimal') {
                        return `
                            <div class="py-8 px-6" style="background: ${bg}; color: ${textColor}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="flex items-start gap-6 ${alignClass === 'text-center' ? 'flex-col items-center' : ''}">
                                        <div class="flex-shrink-0">
                                            <div class="w-16 h-16 ${roundedClass} flex items-center justify-center text-3xl ${shadowClass}" style="background: ${accentColor}15">
                                                👤
                                            </div>
                                        </div>
                                        <div class="flex-1">
                                            <h2 class="text-xl font-bold mb-2 ${alignClass}">${data.title || 'About'}</h2>
                                            ${data.position ? `<div class="mb-2 ${alignClass}"><span class="text-sm font-bold px-3 py-1 ${roundedClass} ${fontSizeClass}" style="background: ${accentColor}; color: white">${data.position}</span></div>` : ''}
                                            ${data.duration ? `<div class="${alignClass} text-xs opacity-60 mb-3 ${fontSizeClass}">⏱️ ${data.duration}</div>` : ''}
                                            ${data.bio ? `<p class="leading-relaxed text-sm ${fontSizeClass} ${alignClass}">${data.bio}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Gradient Layout - Colorful Background
                    if (layout === 'gradient') {
                        return `
                            <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}, ${bg}); color: ${textColor}">
                                <div class="max-w-2xl mx-auto">
                                    <div class="bg-white bg-opacity-95 ${roundedClass} p-8 ${shadowClass}">
                                        <div class="${alignClass}">
                                            <div class="inline-flex items-center gap-3 mb-6 p-3 ${roundedClass}" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}10)">
                                                <div class="text-3xl">👤</div>
                                                <h2 class="text-2xl font-bold" style="color: ${accentColor}">${data.title || 'About'}</h2>
                                            </div>
                                        </div>
                                        ${data.position ? `
                                            <div class="${alignClass} mb-4">
                                                <div class="inline-block relative">
                                                    <div class="absolute inset-0 ${roundedClass}" style="background: linear-gradient(135deg, ${accentColor}, ${bg}); opacity: 0.2;"></div>
                                                    <span class="relative inline-block px-6 py-3 ${roundedClass} font-bold ${fontSizeClass}" style="color: ${accentColor}">${data.position}</span>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${data.duration ? `
                                            <div class="${alignClass} mb-6">
                                                <span class="inline-flex items-center gap-2 px-4 py-2 ${roundedClass} ${fontSizeClass}" style="background: ${accentColor}10; color: ${accentColor}">
                                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                                                    ${data.duration}
                                                </span>
                                            </div>
                                        ` : ''}
                                        ${data.bio ? `
                                            <div class="mt-6 pt-6 border-t ${alignClass}" style="border-color: ${accentColor}20">
                                                <p class="leading-relaxed ${fontSizeClass}" style="color: ${textColor}">${data.bio}</p>
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
