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
                    <option value="floating">Floating Hearts</option>
                    <option value="vintage">Vintage Postcard</option>
                    <option value="neon">Neon Glow</option>
                    <option value="polaroid">Polaroid Collage</option>
                    <option value="magazine">Magazine Cover</option>
                    <option value="watercolor">Watercolor Art</option>
                    <option value="geometric">Geometric Pattern</option>
                    <option value="storybook">Storybook Page</option>
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
        } else if (layout === 'floating') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(180deg, ${primaryColor}15, ${secondaryColor}15);">
                    <!-- Floating hearts animation -->
                    <div class="absolute top-4 left-4 text-4xl opacity-30 animate-pulse">💕</div>
                    <div class="absolute top-16 right-8 text-3xl opacity-20 animate-bounce">💖</div>
                    <div class="absolute bottom-20 left-12 text-5xl opacity-25 animate-pulse">💗</div>
                    <div class="absolute bottom-8 right-4 text-3xl opacity-30 animate-bounce">💝</div>
                    <div class="absolute top-1/3 right-16 text-2xl opacity-20 animate-pulse">💓</div>
                    <div class="relative z-10 text-center">
                        ${imageHTML}
                        <h1 class="text-4xl font-bold mb-3 animate-fade-in" style="color: ${primaryColor};">
                            ${data.name1 || 'Your Name'}
                        </h1>
                        <div class="text-5xl my-4 animate-pulse">💕</div>
                        <h1 class="text-4xl font-bold mb-4 animate-fade-in" style="color: ${secondaryColor};">
                            ${data.name2 || 'Their Name'}
                        </h1>
                        <p class="text-xl text-gray-700 italic">${data.subtitle || 'Our Love Story'}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'vintage') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(to bottom, #f5e6d3, #e8d4b8);">
                    <div class="max-w-md mx-auto relative">
                        <div class="bg-white p-8 rounded-lg shadow-2xl" style="border: 8px solid #8b7355; box-shadow: 0 20px 60px rgba(0,0,0,0.4);">
                            <!-- Vintage stamp effect -->
                            <div class="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold transform rotate-12" style="border: 3px dashed ${primaryColor}; color: ${primaryColor};">
                                <div class="text-center">
                                    <div class="text-2xl">💕</div>
                                    <div class="text-xs">LOVE</div>
                                </div>
                            </div>
                            <div class="text-center">
                                ${imageHTML}
                                <div class="my-4" style="border-bottom: 2px solid ${primaryColor}40; padding-bottom: 8px;">
                                    <h1 class="text-3xl font-serif mb-1" style="color: ${primaryColor}; font-family: Georgia, serif;">
                                        ${data.name1 || 'Your Name'}
                                    </h1>
                                    <div class="text-xl" style="color: ${secondaryColor};">❤️</div>
                                    <h1 class="text-3xl font-serif mt-1" style="color: ${primaryColor}; font-family: Georgia, serif;">
                                        ${data.name2 || 'Their Name'}
                                    </h1>
                                </div>
                                <p class="text-base italic mt-4" style="color: #6b5d52; font-family: Georgia, serif;">${data.subtitle || 'Our Love Story'}</p>
                            </div>
                        </div>
                        <!-- Vintage corner decorations -->
                        <div class="absolute -top-2 -left-2 w-8 h-8" style="border-top: 4px solid #8b7355; border-left: 4px solid #8b7355;"></div>
                        <div class="absolute -top-2 -right-2 w-8 h-8" style="border-top: 4px solid #8b7355; border-right: 4px solid #8b7355;"></div>
                        <div class="absolute -bottom-2 -left-2 w-8 h-8" style="border-bottom: 4px solid #8b7355; border-left: 4px solid #8b7355;"></div>
                        <div class="absolute -bottom-2 -right-2 w-8 h-8" style="border-bottom: 4px solid #8b7355; border-right: 4px solid #8b7355;"></div>
                    </div>
                </div>
            `;
        } else if (layout === 'neon') {
            return `
                <div class="py-20 px-6" style="background: #0a0a0a;">
                    <div class="text-center">
                        ${imageHTML}
                        <div class="mb-6">
                            <h1 class="text-5xl font-bold mb-2" style="color: ${primaryColor}; text-shadow: 0 0 10px ${primaryColor}, 0 0 20px ${primaryColor}, 0 0 30px ${primaryColor}, 0 0 40px ${primaryColor};">
                                ${data.name1 || 'Your Name'}
                            </h1>
                            <div class="text-6xl my-4" style="filter: drop-shadow(0 0 20px ${secondaryColor});">💕</div>
                            <h1 class="text-5xl font-bold mb-4" style="color: ${secondaryColor}; text-shadow: 0 0 10px ${secondaryColor}, 0 0 20px ${secondaryColor}, 0 0 30px ${secondaryColor}, 0 0 40px ${secondaryColor};">
                                ${data.name2 || 'Their Name'}
                            </h1>
                        </div>
                        <p class="text-2xl font-light" style="color: #ffffff; text-shadow: 0 0 5px ${primaryColor};">
                            ${data.subtitle || 'Our Love Story'}
                        </p>
                    </div>
                </div>
            `;
        } else if (layout === 'polaroid') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${primaryColor}10, ${secondaryColor}10);">
                    <div class="max-w-md mx-auto space-y-4">
                        <!-- Polaroid 1 -->
                        <div class="inline-block transform -rotate-3 ml-4">
                            <div class="bg-white p-3 shadow-2xl" style="width: 200px;">
                                <div class="h-48 flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-100 mb-3">
                                    ${data.image ? `<img src="${data.image}" class="w-full h-full object-cover">` : '<div class="text-6xl">💕</div>'}
                                </div>
                                <p class="text-center text-lg font-handwriting" style="color: ${primaryColor}; font-family: 'Comic Sans MS', cursive;">
                                    ${data.name1 || 'Your Name'}
                                </p>
                            </div>
                        </div>
                        <!-- Polaroid 2 -->
                        <div class="inline-block transform rotate-2 ml-8">
                            <div class="bg-white p-3 shadow-2xl" style="width: 200px;">
                                <div class="h-48 flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-100 mb-3 text-6xl">
                                    💝
                                </div>
                                <p class="text-center text-lg font-handwriting" style="color: ${secondaryColor}; font-family: 'Comic Sans MS', cursive;">
                                    ${data.name2 || 'Their Name'}
                                </p>
                            </div>
                        </div>
                        <!-- Message polaroid -->
                        <div class="block transform -rotate-1 mx-auto" style="width: fit-content;">
                            <div class="bg-white p-3 shadow-2xl" style="width: 280px;">
                                <div class="h-32 flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50 mb-3">
                                    <p class="text-center text-xl font-handwriting px-4" style="color: ${primaryColor}; font-family: 'Comic Sans MS', cursive;">
                                        ${data.subtitle || 'Our Love Story'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'magazine') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});">
                    <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
                        <!-- Magazine header -->
                        <div class="py-3 px-6 text-center" style="background: ${primaryColor}; color: white;">
                            <div class="text-xs tracking-widest font-bold">ROMANCE MAGAZINE</div>
                        </div>
                        <div class="p-8 text-center">
                            ${imageHTML}
                            <div class="my-6">
                                <div class="text-xs tracking-widest mb-2" style="color: ${primaryColor}; opacity: 0.7;">FEATURING</div>
                                <h1 class="text-6xl font-black mb-2" style="color: ${primaryColor}; line-height: 1; letter-spacing: -2px;">
                                    ${data.name1 || 'YOUR NAME'}
                                </h1>
                                <div class="flex items-center justify-center gap-3 my-4">
                                    <div class="h-px flex-1" style="background: ${secondaryColor};"></div>
                                    <div class="text-3xl">💕</div>
                                    <div class="h-px flex-1" style="background: ${secondaryColor};"></div>
                                </div>
                                <h1 class="text-6xl font-black mb-4" style="color: ${secondaryColor}; line-height: 1; letter-spacing: -2px;">
                                    ${data.name2 || 'THEIR NAME'}
                                </h1>
                            </div>
                            <div class="mt-6 pt-4 border-t-2" style="border-color: ${primaryColor}40;">
                                <p class="text-xl font-light tracking-wide" style="color: #374151;">
                                    ${data.subtitle || 'Our Love Story'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'watercolor') {
            return `
                <div class="py-20 px-6" style="background: linear-gradient(135deg, ${primaryColor}08, ${secondaryColor}08);">
                    <div class="max-w-2xl mx-auto text-center relative">
                        <!-- Watercolor splash effect -->
                        <div class="absolute inset-0 opacity-20" style="background: radial-gradient(circle at 30% 50%, ${primaryColor}60 0%, transparent 50%), radial-gradient(circle at 70% 50%, ${secondaryColor}60 0%, transparent 50%); filter: blur(40px);"></div>
                        <div class="relative z-10">
                            ${imageHTML}
                            <div class="inline-block px-8 py-4 mb-4 relative">
                                <div class="absolute inset-0 opacity-30 blur-xl" style="background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});"></div>
                                <h1 class="relative text-5xl font-bold" style="color: ${primaryColor}; font-family: 'Brush Script MT', cursive;">
                                    ${data.name1 || 'Your Name'}
                                </h1>
                            </div>
                            <div class="text-5xl my-6">💕</div>
                            <div class="inline-block px-8 py-4 mb-6 relative">
                                <div class="absolute inset-0 opacity-30 blur-xl" style="background: linear-gradient(135deg, ${secondaryColor}, ${primaryColor});"></div>
                                <h1 class="relative text-5xl font-bold" style="color: ${secondaryColor}; font-family: 'Brush Script MT', cursive;">
                                    ${data.name2 || 'Their Name'}
                                </h1>
                            </div>
                            <p class="text-2xl italic text-gray-700 mt-8">
                                ${data.subtitle || 'Our Love Story'}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'geometric') {
            return `
                <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});">
                    <!-- Geometric patterns -->
                    <div class="absolute top-0 left-0 w-full h-full opacity-10">
                        <div class="absolute top-4 left-4 w-20 h-20 border-4 border-white transform rotate-45"></div>
                        <div class="absolute top-16 right-8 w-16 h-16 border-4 border-white rounded-full"></div>
                        <div class="absolute bottom-12 left-12 w-24 h-24 border-4 border-white transform rotate-12"></div>
                        <div class="absolute bottom-20 right-16 w-20 h-20 border-4 border-white" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
                    </div>
                    <div class="relative z-10 text-center" style="color: ${textColor};">
                        <div class="inline-block p-6 mb-6" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);">
                            ${imageHTML}
                        </div>
                        <div class="max-w-lg mx-auto p-8" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);">
                            <h1 class="text-4xl font-bold mb-4">
                                ${data.name1 || 'Your Name'} <span class="text-5xl">💕</span> ${data.name2 || 'Their Name'}
                            </h1>
                            <div class="w-32 h-1 mx-auto mb-4" style="background: rgba(255,255,255,0.5);"></div>
                            <p class="text-xl font-light">${data.subtitle || 'Our Love Story'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'storybook') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(to bottom, #fef8f3, #fcf0e8);">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-lg shadow-2xl p-10" style="border: 6px solid ${primaryColor}40;">
                            <div class="text-center mb-8">
                                <div class="text-sm font-bold tracking-widest mb-3" style="color: ${primaryColor};">
                                    ～ A LOVE STORY ～
                                </div>
                                <div class="text-6xl mb-4">📖</div>
                                ${imageHTML}
                            </div>
                            <div class="text-center space-y-6">
                                <div class="relative inline-block">
                                    <div class="absolute -top-8 -left-4 text-6xl opacity-30" style="color: ${primaryColor}; font-family: Georgia, serif;">"</div>
                                    <h1 class="text-4xl font-serif px-8" style="color: ${primaryColor}; font-family: Georgia, serif;">
                                        ${data.name1 || 'Your Name'}
                                    </h1>
                                </div>
                                <div class="flex items-center justify-center gap-4">
                                    <div class="w-16 h-px" style="background: ${secondaryColor};"></div>
                                    <div class="text-3xl">💕</div>
                                    <div class="w-16 h-px" style="background: ${secondaryColor};"></div>
                                </div>
                                <div class="relative inline-block">
                                    <h1 class="text-4xl font-serif px-8" style="color: ${secondaryColor}; font-family: Georgia, serif;">
                                        ${data.name2 || 'Their Name'}
                                    </h1>
                                    <div class="absolute -bottom-8 -right-4 text-6xl opacity-30" style="color: ${secondaryColor}; font-family: Georgia, serif;">"</div>
                                </div>
                            </div>
                            <div class="mt-12 text-center">
                                <p class="text-xl italic leading-relaxed" style="color: #6b5d52; font-family: Georgia, serif;">
                                    ${data.subtitle || 'Our Love Story'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
