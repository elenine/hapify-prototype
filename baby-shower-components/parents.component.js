// Parents/About Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.parents = {
    name: '👨‍👩‍👧 About the Parents',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Meet the Parents-to-Be" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parent Names</label>
                <input type="text" placeholder="Sarah & John" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="names" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">About Message</label>
                <textarea rows="4" placeholder="We're so excited to welcome our little one! Join us as we celebrate this special journey..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Upload</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="photo" onchange="handleImageUpload(this)">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered - Classic</option>
                    <option value="split">Split - Photo & Text</option>
                    <option value="card">Card - Boxed Style</option>
                    <option value="modern">Modern - Gradient</option>
                    <option value="minimal">Minimal - Clean</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'centered';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#fbbf24';
        const textColor = style.textColor || '#1f2937';
        const align = style.align || 'center';

        const photoElement = data.photo
            ? `<img src="${data.photo}" class="w-48 h-48 object-cover rounded-full shadow-lg" alt="Parents">`
            : '<div class="w-48 h-48 rounded-full flex items-center justify-center text-6xl" style="background: ' + accent + '20;">👨‍👩‍👧</div>';

        switch(layout) {
            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-4xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-8 items-center">
                                <div class="flex justify-center">
                                    ${photoElement}
                                </div>
                                <div class="text-${align}" style="color: ${textColor};">
                                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Meet the Parents-to-Be'}</h2>
                                    ${data.names ? `<h3 class="text-xl font-semibold mb-4" style="color: ${accent};">${data.names}</h3>` : ''}
                                    ${data.message ? `<p class="leading-relaxed">${data.message}</p>` : '<p class="opacity-60">Share your story here...</p>'}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-2xl shadow-xl p-8 text-${align}" style="border-top: 4px solid ${accent};">
                                <h2 class="text-2xl font-bold mb-6" style="color: ${textColor};">${data.title || 'Meet the Parents-to-Be'}</h2>
                                <div class="mb-6 flex justify-${align}">
                                    ${photoElement}
                                </div>
                                ${data.names ? `<h3 class="text-xl font-semibold mb-4" style="color: ${accent};">${data.names}</h3>` : ''}
                                ${data.message ? `<p class="leading-relaxed" style="color: ${textColor};">${data.message}</p>` : '<p class="opacity-60">Share your story here...</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="rounded-3xl p-8 shadow-2xl text-${align}" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%);">
                                <h2 class="text-2xl font-bold mb-6 text-white">${data.title || 'Meet the Parents-to-Be'}</h2>
                                <div class="mb-6 flex justify-${align}">
                                    <div class="bg-white p-2 rounded-full">
                                        ${photoElement}
                                    </div>
                                </div>
                                <div class="bg-white bg-opacity-90 rounded-2xl p-6">
                                    ${data.names ? `<h3 class="text-xl font-semibold mb-4" style="color: ${accent};">${data.names}</h3>` : ''}
                                    ${data.message ? `<p class="leading-relaxed" style="color: ${textColor};">${data.message}</p>` : '<p class="opacity-60">Share your story here...</p>'}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-${align}" style="color: ${textColor};">
                            <h2 class="text-3xl font-light mb-3" style="letter-spacing: 0.05em;">${data.title || 'Meet the Parents-to-Be'}</h2>
                            <div class="h-1 w-16 mb-6" style="background: ${accent}; margin-${align === 'center' ? '0 auto' : '0'};"></div>
                            <div class="mb-6 flex justify-${align}">
                                ${photoElement}
                            </div>
                            ${data.names ? `<h3 class="text-xl font-semibold mb-4" style="color: ${accent};">${data.names}</h3>` : ''}
                            ${data.message ? `<p class="text-lg leading-relaxed opacity-75">${data.message}</p>` : '<p class="opacity-60">Share your story here...</p>'}
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-${align}" style="color: ${textColor};">
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Meet the Parents-to-Be'}</h2>
                            <div class="mb-6 flex justify-${align}">
                                ${photoElement}
                            </div>
                            ${data.names ? `<h3 class="text-xl font-semibold mb-4" style="color: ${accent};">${data.names}</h3>` : ''}
                            ${data.message ? `<p class="leading-relaxed">${data.message}</p>` : '<p class="opacity-60">Share your story here...</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
