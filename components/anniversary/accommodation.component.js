// Accommodation Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accommodation = {
    name: '🏨 Accommodation',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotel Name</label>
                <input type="text" placeholder="Grand Hotel & Suites" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="hotelname" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="123 Hotel Street&#10;City, State 12345" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input type="url" placeholder="https://hotel.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="website" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Group Code/Special Rate</label>
                <input type="text" placeholder="SMITH2025" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="code" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <textarea placeholder="Mention the anniversary celebration for special rates..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="info" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="modern">Modern</option>
                    <option value="compact">Compact</option>
                    <option value="detailed">Detailed</option>
                    <option value="elegant">Elegant</option>
                    <option value="minimal">Minimal</option>
                    <option value="feature">Feature Box</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#ef4444" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm" selected>Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg" selected>Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fef2f2';
        const accentColor = style.accentColor || '#ef4444';
        const cardBg = style.cardBg || '#ffffff';
        const shadow = style.shadow || 'sm';
        const borderRadius = style.borderRadius || 'lg';

        const shadowClasses = { none: '', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg' };
        const borderRadiusClasses = { sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="bg-white p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                            <div class="text-3xl mb-3 text-center">🏨</div>
                            ${data.hotelname ? `<h3 class="text-xl font-bold text-center mb-4">${data.hotelname}</h3>` : ''}
                            ${data.address ? `<p class="text-sm text-gray-600 mb-3 whitespace-pre-line">${data.address}</p>` : ''}
                            ${data.phone ? `<p class="text-sm text-gray-700 mb-2"><strong>📞</strong> <a href="tel:${data.phone}" class="hover:underline" style="color: ${accentColor}">${data.phone}</a></p>` : ''}
                            ${data.code ? `<div class="mt-4 p-3 ${borderRadiusClasses[borderRadius]}" style="background: ${bg}"><p class="text-sm"><strong>🎟️ Group Code:</strong> <span class="font-mono font-bold" style="color: ${accentColor}">${data.code}</span></p></div>` : ''}
                            ${data.info ? `<p class="text-sm text-gray-600 mt-3">${data.info}</p>` : ''}
                            ${data.website ? `<div class="text-center mt-4"><a href="${data.website}" target="_blank" class="inline-block px-6 py-2 ${borderRadiusClasses[borderRadius]} text-white text-sm transition hover:opacity-90" style="background: ${accentColor}">Book Now</a></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-2xl mx-auto">
                        <div class="grid md:grid-cols-3 gap-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]} overflow-hidden" style="background: ${cardBg}">
                            <div class="p-6 flex items-center justify-center" style="background: ${accentColor}">
                                <div class="text-center text-white">
                                    <div class="text-5xl mb-2">🏨</div>
                                    <p class="text-xs uppercase tracking-wider font-semibold">Hotel</p>
                                </div>
                            </div>
                            <div class="md:col-span-2 p-6">
                                ${data.hotelname ? `<h3 class="text-lg font-bold mb-3" style="color: ${accentColor}">${data.hotelname}</h3>` : ''}
                                ${data.address ? `<p class="text-xs text-gray-600 mb-2 whitespace-pre-line">${data.address}</p>` : ''}
                                ${data.phone ? `<p class="text-xs mb-2">📞 ${data.phone}</p>` : ''}
                                ${data.code ? `<div class="inline-block px-3 py-1 ${borderRadiusClasses[borderRadius]} mt-2" style="background: ${bg}"><span class="text-xs font-mono font-bold" style="color: ${accentColor}">${data.code}</span></div>` : ''}
                                ${data.website ? `<div class="mt-3"><a href="${data.website}" target="_blank" class="text-sm hover:underline" style="color: ${accentColor}">Book Now →</a></div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Other layouts with simplified implementations
        return `
            <div class="py-12 px-6" style="background: ${bg}">
                <div class="max-w-md mx-auto p-6 ${borderRadiusClasses[borderRadius]} ${shadowClasses[shadow]}" style="background: ${cardBg}">
                    <div class="text-3xl mb-3 text-center">🏨</div>
                    ${data.hotelname ? `<h3 class="text-xl font-bold text-center mb-4">${data.hotelname}</h3>` : ''}
                    ${data.address ? `<p class="text-sm text-gray-600 mb-3">${data.address}</p>` : ''}
                    ${data.phone ? `<p class="text-sm mb-2">📞 ${data.phone}</p>` : ''}
                    ${data.code ? `<p class="text-sm font-mono font-bold mt-3" style="color: ${accentColor}">Code: ${data.code}</p>` : ''}
                    ${data.website ? `<a href="${data.website}" target="_blank" class="inline-block mt-4 px-6 py-2 ${borderRadiusClasses[borderRadius]} text-white" style="background: ${accentColor}">Book Now</a>` : ''}
                </div>
            </div>
        `;
    }
};
