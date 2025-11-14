// Hero Header Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎓 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Graduate Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Text</label>
                <input type="text" placeholder="Graduation Ceremony" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Graduate Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photo</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Center</option>
                    <option value="modern">Modern Split</option>
                    <option value="minimal">Minimal Card</option>
                    <option value="bold">Bold Gradient</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="titleSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="spacing" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="normal" selected>Normal</option>
                    <option value="relaxed">Relaxed</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#6366f1';
        const text = style.text || '#ffffff';
        const accent = style.accent || '#fbbf24';
        const align = style.align || 'center';
        const spacing = style.spacing || 'normal';
        const titleSize = style.titleSize || 'medium';

        const spacingMap = {
            compact: 'py-8',
            normal: 'py-16',
            relaxed: 'py-24'
        };

        const titleSizeMap = {
            small: 'text-2xl',
            medium: 'text-3xl',
            large: 'text-4xl',
            xlarge: 'text-5xl'
        };

        const paddingClass = spacingMap[spacing];
        const titleClass = titleSizeMap[titleSize];

        switch(layout) {
            case 'modern':
                return `
                    <div class="${paddingClass} px-6" style="background: linear-gradient(135deg, ${bg} 0%, ${accent} 100%); color: ${text}">
                        <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                            <div class="flex-shrink-0">
                                ${data.image ? `<img src="${data.image}" class="w-40 h-40 rounded-2xl object-cover border-4 shadow-2xl" style="border-color: ${text}33">` : '<div class="text-8xl">🎓</div>'}
                            </div>
                            <div class="text-${align} flex-1">
                                <h1 class="${titleClass} font-bold mb-3">${data.title || 'Graduation Ceremony'}</h1>
                                <p class="text-2xl font-light opacity-90">${data.name || "Graduate Name"}</p>
                                <div class="mt-4 h-1 w-20 rounded" style="background: ${accent}; ${align === 'center' ? 'margin: 0 auto' : align === 'right' ? 'margin-left: auto' : ''}"></div>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="${paddingClass} px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-${align}">
                            ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4" style="border-color: ${accent}">` : '<div class="text-6xl mb-4">🎓</div>'}
                            <h1 class="${titleClass} font-bold mb-2">${data.title || 'Graduation Ceremony'}</h1>
                            <div class="h-0.5 w-16 my-4 rounded" style="background: ${accent}; ${align === 'center' ? 'margin-left: auto; margin-right: auto' : align === 'right' ? 'margin-left: auto; margin-right: 0' : 'margin-left: 0'}"></div>
                            <p class="text-xl opacity-90">${data.name || "Graduate Name"}</p>
                        </div>
                    </div>
                `;

            case 'bold':
                return `
                    <div class="${paddingClass} px-6 relative overflow-hidden" style="background: ${bg}; color: ${text}">
                        <div class="absolute inset-0 opacity-10">
                            <div class="absolute top-0 right-0 w-64 h-64 rounded-full" style="background: ${accent}"></div>
                            <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full" style="background: ${accent}"></div>
                        </div>
                        <div class="relative max-w-3xl mx-auto text-${align}">
                            ${data.image ? `<img src="${data.image}" class="w-40 h-40 rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} mb-6 object-cover border-8 shadow-2xl" style="border-color: ${accent}">` : '<div class="text-8xl mb-6">🎓</div>'}
                            <h1 class="${titleClass} font-black mb-4 tracking-tight" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.2)">${data.title || 'Graduation Ceremony'}</h1>
                            <div class="inline-block px-6 py-3 rounded-full text-xl font-semibold" style="background: ${accent}; color: ${bg}">
                                ${data.name || "Graduate Name"}
                            </div>
                        </div>
                    </div>
                `;

            case 'classic':
            default:
                return `
                    <div class="text-${align} ${paddingClass} px-6" style="background: ${bg}; color: ${text}">
                        ${data.image ? `<img src="${data.image}" class="w-32 h-32 rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} mb-6 object-cover border-4" style="border-color: ${accent}">` : '<div class="text-6xl mb-4">🎓</div>'}
                        <h1 class="${titleClass} font-bold mb-2">${data.title || 'Graduation Ceremony'}</h1>
                        <p class="text-xl opacity-90">${data.name || "Graduate Name"}</p>
                    </div>
                `;
        }
    }`
};
