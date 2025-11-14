// Vow Renewal Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.vowrenewal = {
    name: '💍 Vow Renewal',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Renewing Our Vows" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ceremony Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Message</label>
                <textarea placeholder="Join us as we renew our commitment..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Simple</option>
                    <option value="elegant">Elegant - Decorative</option>
                    <option value="card">Card - Boxed</option>
                    <option value="split">Split - Two Tone</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const accentColor = style.accentColor || '#dc2626';
        const bg = style.bg || '#ffffff';

        if (layout === 'centered') {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg}">
                    <div class="max-w-md mx-auto">
                        <div class="text-5xl mb-4">💍</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Vow Renewal'}</h2>
                        ${data.time ? `<p class="text-lg mb-4" style="color: ${accentColor}">Ceremony at ${data.time}</p>` : ''}
                        ${data.message ? `<p class="text-gray-600 px-4">${data.message}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${bg}">
                    <div class="max-w-xl mx-auto text-center border-t-2 border-b-2 py-12" style="border-color: ${accentColor}33">
                        <div class="text-xs uppercase tracking-widest text-gray-400 mb-4">Special Ceremony</div>
                        <div class="flex items-center justify-center gap-4 mb-6">
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                            <div class="text-5xl">💍</div>
                            <div class="h-px flex-1" style="background: ${accentColor}33"></div>
                        </div>
                        <h2 class="text-3xl font-light mb-6 tracking-wide">${data.title || 'Vow Renewal'}</h2>
                        ${data.time ? `<p class="text-lg mb-6 font-light" style="color: ${accentColor}">${data.time}</p>` : ''}
                        ${data.message ? `<p class="text-gray-600 font-light leading-relaxed">${data.message}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg}">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center" style="border-top: 4px solid ${accentColor}">
                        <div class="text-6xl mb-4">💍</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Vow Renewal'}</h2>
                        ${data.time ? `<div class="mb-4 p-3 bg-gray-50 rounded-lg"><span class="font-semibold" style="color: ${accentColor}">Time:</span> ${data.time}</div>` : ''}
                        ${data.message ? `<p class="text-gray-600 mt-4">${data.message}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (layout === 'split') {
            return `
                <div class="grid md:grid-cols-2 gap-0">
                    <div class="py-16 px-6 flex items-center justify-center" style="background: ${accentColor}">
                        <div class="text-center text-white">
                            <div class="text-7xl mb-4">💍</div>
                            <h2 class="text-3xl font-bold">${data.title || 'Vow Renewal'}</h2>
                        </div>
                    </div>
                    <div class="py-16 px-6 flex items-center justify-center" style="background: ${bg}">
                        <div class="text-center">
                            ${data.time ? `<p class="text-xl mb-4 font-semibold" style="color: ${accentColor}">${data.time}</p>` : ''}
                            ${data.message ? `<p class="text-gray-700">${data.message}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${bg}">
                <div class="max-w-md mx-auto">
                    <div class="text-5xl mb-4">💍</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Vow Renewal'}</h2>
                    ${data.time ? `<p class="text-lg text-gray-700 mb-4">Ceremony at ${data.time}</p>` : ''}
                    ${data.message ? `<p class="text-gray-600 px-4">${data.message}</p>` : ''}
                </div>
            </div>
        `;
    }
};
