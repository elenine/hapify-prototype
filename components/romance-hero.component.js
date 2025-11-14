// Romance Hero Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['romance-hero'] = {
    name: '💕 Romantic Hero',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Partner 1 Name</label>
                <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="name1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Partner 2 Name</label>
                <input type="text" placeholder="Their Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="name2" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Romantic Subtitle</label>
                <input type="text" placeholder="Our Love Story" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Couple Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-rose-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="gradient">Gradient Background</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="modern">Modern Card</option>
                    <option value="classic">Classic Romance</option>
                    <option value="artistic">Artistic Flair</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="imageStyle" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="heart">Heart Shape</option>
                    <option value="polaroid">Polaroid</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Animation</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="animation" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="fade">Fade In</option>
                    <option value="slide">Slide Up</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'gradient';
        const primaryColor = style.bg || '#f43f5e';
        const secondaryColor = style.accent || '#ec4899';
        const textColor = style.text || '#ffffff';
        const imageStyle = style.imageStyle || 'circle';
        const animation = style.animation || 'none';

        // Image styling based on selection
        let imageClasses = '';
        let imageWrapperStyle = '';
        if (imageStyle === 'circle') {
            imageClasses = 'w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg';
        } else if (imageStyle === 'rounded') {
            imageClasses = 'w-40 h-40 rounded-2xl mx-auto mb-6 object-cover border-4 border-white shadow-lg';
        } else if (imageStyle === 'heart') {
            imageClasses = 'w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg';
            imageWrapperStyle = 'filter: drop-shadow(0 10px 30px rgba(244, 63, 94, 0.4));';
        } else if (imageStyle === 'polaroid') {
            imageClasses = 'w-48 h-56 object-cover';
            imageWrapperStyle = 'background: white; padding: 12px 12px 48px 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transform: rotate(-2deg);';
        }

        const imageHTML = data.image
            ? `<div style="${imageWrapperStyle}" class="inline-block"><img src="${data.image}" class="${imageClasses}"></div>`
            : '<div class="text-6xl mb-6">💕</div>';

        // Animation classes
        const animClass = animation === 'fade' ? 'animate-fade-in' : animation === 'slide' ? 'animate-slide-up' : '';

        // Layout variations
        if (layout === 'gradient') {
            return `
                <div class="text-center py-16 px-6" style="background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}); color: ${textColor}">
                    ${imageHTML}
                    <h1 class="text-4xl font-bold mb-2 ${animClass}">${data.name1 || 'Your Name'} & ${data.name2 || 'Their Name'}</h1>
                    <p class="text-xl opacity-90">${data.subtitle || 'Our Love Story'}</p>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="text-center py-20 px-6" style="background: #ffffff; color: #1f2937">
                    ${imageHTML}
                    <h1 class="text-5xl font-light mb-3" style="color: ${primaryColor}">${data.name1 || 'Your Name'} <span style="color: ${secondaryColor};">&</span> ${data.name2 || 'Their Name'}</h1>
                    <p class="text-lg text-gray-600 font-light tracking-wide">${data.subtitle || 'Our Love Story'}</p>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="text-center py-16 px-6 relative" style="background: linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)">
                    <div class="max-w-2xl mx-auto border-4 py-12 px-8 rounded-lg" style="border-color: ${primaryColor}; background: rgba(255,255,255,0.9);">
                        ${imageHTML}
                        <div style="color: ${primaryColor}; font-size: 3rem; font-weight: bold; margin-bottom: 0.5rem;">
                            ${data.name1 || 'Your Name'}
                        </div>
                        <div style="color: ${secondaryColor}; font-size: 2rem; margin-bottom: 0.5rem;">💕</div>
                        <div style="color: ${primaryColor}; font-size: 3rem; font-weight: bold; margin-bottom: 1rem;">
                            ${data.name2 || 'Their Name'}
                        </div>
                        <p class="text-lg" style="color: ${secondaryColor}; font-style: italic;">${data.subtitle || 'Our Love Story'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-20 px-6" style="background: #f8f9fa">
                    <div class="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-12 text-center" style="border-top: 6px solid ${primaryColor};">
                        ${imageHTML}
                        <h1 class="text-5xl font-bold mb-3" style="background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${data.name1 || 'Your Name'} & ${data.name2 || 'Their Name'}</h1>
                        <div class="w-24 h-1 mx-auto mb-4" style="background: linear-gradient(to right, ${primaryColor}, ${secondaryColor});"></div>
                        <p class="text-xl text-gray-600">${data.subtitle || 'Our Love Story'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'classic') {
            return `
                <div class="text-center py-16 px-6" style="background: linear-gradient(to bottom, ${primaryColor}10, ${secondaryColor}10);">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-6xl mb-6">💕</div>
                        ${data.image ? `<div class="mb-6"><img src="${data.image}" class="w-40 h-40 rounded-full mx-auto object-cover border-8 shadow-xl" style="border-color: ${primaryColor}"></div>` : ''}
                        <h1 class="text-4xl font-serif mb-4" style="color: ${primaryColor}; font-family: Georgia, serif;">
                            ${data.name1 || 'Your Name'}
                        </h1>
                        <div class="text-2xl mb-4" style="color: ${secondaryColor};">
                            ❤️ & ❤️
                        </div>
                        <h1 class="text-4xl font-serif mb-6" style="color: ${primaryColor}; font-family: Georgia, serif;">
                            ${data.name2 || 'Their Name'}
                        </h1>
                        <p class="text-xl italic" style="color: ${secondaryColor}; font-family: Georgia, serif;">"${data.subtitle || 'Our Love Story'}"</p>
                    </div>
                </div>
            `;
        } else if (layout === 'artistic') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor})">
                    <div class="absolute top-0 left-0 w-full h-full opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff'/%3E%3C/svg%3E');"></div>
                    <div class="relative z-10 text-center" style="color: ${textColor}">
                        ${imageHTML}
                        <h1 class="text-5xl font-bold mb-2 transform -rotate-2 inline-block px-6 py-2" style="background: rgba(255,255,255,0.2); border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                            ${data.name1 || 'Your Name'} <span class="text-6xl">💕</span> ${data.name2 || 'Their Name'}
                        </h1>
                        <p class="text-2xl mt-6 font-light tracking-wide">${data.subtitle || 'Our Love Story'}</p>
                    </div>
                </div>
            `;
        }
    }
};
