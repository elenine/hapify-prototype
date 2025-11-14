// Special Notes/Instructions Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.message = {
    name: '📝 Important Notes',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Important Information" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon (Optional)</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="icon" oninput="updatePreview()">
                    <option value="">No Icon</option>
                    <option value="📝">📝 Notes</option>
                    <option value="ℹ️">ℹ️ Information</option>
                    <option value="⚠️">⚠️ Important</option>
                    <option value="🅿️">🅿️ Parking</option>
                    <option value="🍽️">🍽️ Food/Dietary</option>
                    <option value="👥">👥 Guests Welcome</option>
                    <option value="🎵">🎵 Entertainment</option>
                    <option value="📸">📸 Photos</option>
                    <option value="✈️">✈️ Travel Info</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Notes/Instructions</label>
                <textarea placeholder="Please let us know about any dietary restrictions when you RSVP.&#10;&#10;Feel free to bring stories and memories to share!&#10;&#10;Photos and videos are encouraged - we'll cherish these memories!" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="content" oninput="updatePreview()"></textarea>
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
                    <option value="callout">Callout - Alert Style</option>
                    <option value="minimal">Minimal - Simple Text</option>
                    <option value="bordered">Bordered - Framed</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
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
        const bg = style.bg || '#fffbeb';
        const accentColor = style.accentColor || '#8b5cf6';
        const cardColor = style.cardColor || '#ffffff';
        const shadow = style.shadow || 'md';
        const icon = data.icon || '';

        // Card Layout - Centered Box
        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="rounded-2xl p-8 shadow-${shadow}" style="background: ${cardColor}; border-left: 4px solid ${accentColor}">
                            <div class="text-center mb-4">
                                ${icon ? `<div class="text-5xl mb-3">${icon}</div>` : ''}
                                <h3 class="text-2xl font-bold" style="color: ${accentColor}">${data.title || 'Important Information'}</h3>
                            </div>
                            <div class="text-gray-700 leading-relaxed whitespace-pre-line text-center">${data.content || 'Add important notes or instructions here...'}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Banner Layout - Full Width
        if (layout === 'banner') {
            return `
                <div class="py-10 px-6" style="background: ${bg}; border-top: 3px solid ${accentColor}; border-bottom: 3px solid ${accentColor};">
                    <div class="max-w-3xl mx-auto">
                        <div class="flex items-start gap-4">
                            ${icon ? `<div class="text-5xl flex-shrink-0">${icon}</div>` : ''}
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4" style="color: ${accentColor}">${data.title || 'Important Information'}</h3>
                                <div class="text-gray-700 leading-relaxed whitespace-pre-line text-lg">${data.content || 'Add important notes or instructions here...'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Callout Layout - Alert Style
        if (layout === 'callout') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="rounded-xl p-6 shadow-${shadow}" style="background: ${accentColor}15; border: 2px solid ${accentColor}">
                            <div class="flex items-start gap-4">
                                ${icon ? `
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white">
                                        ${icon}
                                    </div>
                                ` : ''}
                                <div class="flex-1">
                                    <h3 class="text-xl font-bold mb-3" style="color: ${accentColor}">${data.title || 'Important Information'}</h3>
                                    <div class="text-gray-700 leading-relaxed whitespace-pre-line">${data.content || 'Add important notes or instructions here...'}</div>
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
                    <div class="max-w-xl mx-auto">
                        <div class="text-center mb-6">
                            ${icon ? `<div class="text-4xl mb-3">${icon}</div>` : ''}
                            <h3 class="text-2xl font-bold mb-2" style="color: ${accentColor}">${data.title || 'Important Information'}</h3>
                            <div class="w-16 h-1 mx-auto" style="background: ${accentColor}"></div>
                        </div>
                        <div class="text-gray-700 leading-relaxed whitespace-pre-line text-center">${data.content || 'Add important notes or instructions here...'}</div>
                    </div>
                </div>
            `;
        }

        // Bordered Layout - Framed
        if (layout === 'bordered') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="border-4 rounded-2xl p-8 shadow-${shadow}" style="border-color: ${accentColor}; background: ${cardColor}">
                            <div class="text-center">
                                ${icon ? `
                                    <div class="inline-block p-3 rounded-full mb-4" style="background: ${accentColor}15">
                                        <div class="text-4xl">${icon}</div>
                                    </div>
                                ` : ''}
                                <h3 class="text-2xl font-bold mb-6" style="color: ${accentColor}">${data.title || 'Important Information'}</h3>
                                <div class="w-24 h-1 mx-auto mb-6" style="background: ${accentColor}30"></div>
                                <div class="text-gray-700 leading-relaxed whitespace-pre-line">${data.content || 'Add important notes or instructions here...'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return '';
    }
};
