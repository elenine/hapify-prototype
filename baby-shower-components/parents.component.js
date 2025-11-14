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
                    <option value="polaroid">Polaroid - Photo Frame</option>
                    <option value="magazine">Magazine - Editorial Style</option>
                    <option value="badge">Badge - Circular Design</option>
                    <option value="storybook">Storybook - Narrative Style</option>
                    <option value="hearts">Hearts - Romantic Theme</option>
                    <option value="scrapbook">Scrapbook - Memory Style</option>
                    <option value="elegant">Elegant - Sophisticated</option>
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
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="photoShape" onchange="updatePreview()">
                    <option value="circle" selected>Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="square">Square</option>
                    <option value="heart">Heart</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="photoSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
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
        const photoShape = style.photoShape || 'circle';
        const photoSize = style.photoSize || 'medium';

        const photoSizes = {
            small: 'w-32 h-32 sm:w-36 sm:h-36',
            medium: 'w-40 h-40 sm:w-48 sm:h-48',
            large: 'w-48 h-48 sm:w-56 sm:h-56'
        };

        const photoShapes = {
            circle: 'rounded-full',
            rounded: 'rounded-3xl',
            square: 'rounded-none',
            heart: 'rounded-full'
        };

        const getPhotoElement = () => {
            const sizeClass = photoSizes[photoSize];
            const shapeClass = photoShapes[photoShape];

            if (data.photo) {
                return `<img src="${data.photo}" class="${sizeClass} ${shapeClass} object-cover shadow-lg" alt="Parents">`;
            }
            return `<div class="${sizeClass} ${shapeClass} flex items-center justify-center text-4xl sm:text-6xl shadow-lg" style="background: ${accent}20;">👨‍👩‍👧</div>`;
        };

        switch(layout) {
            case 'split':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-4xl mx-auto">
                            <div class="flex flex-col gap-6 sm:gap-8 items-center">
                                <div class="flex justify-center w-full">
                                    ${getPhotoElement()}
                                </div>
                                <div class="text-${align} w-full" style="color: ${textColor};">
                                    <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">${data.title || 'Meet the Parents-to-Be'}</h2>
                                    ${data.names ? `<h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style="color: ${accent};">${data.names}</h3>` : ''}
                                    ${data.message ? `<p class="text-sm sm:text-base leading-relaxed">${data.message}</p>` : '<p class="opacity-60 text-sm sm:text-base">Share your story here...</p>'}
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

            case 'polaroid':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-lg mx-auto">
                            <div class="bg-white p-5 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                                <div class="aspect-square bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
                                    ${data.photo ? `<img src="${data.photo}" class="w-full h-full object-cover" alt="Parents">` : `<div class="text-7xl">👨‍👩‍👧</div>`}
                                </div>
                                <div class="text-center py-4">
                                    <h2 class="text-xl font-bold mb-2" style="color: ${textColor}; font-family: 'Brush Script MT', cursive;">${data.title || 'Meet the Parents-to-Be'}</h2>
                                    ${data.names ? `<h3 class="text-lg font-semibold mb-3" style="color: ${accent};">${data.names}</h3>` : ''}
                                    ${data.message ? `<p class="text-sm leading-relaxed" style="color: ${textColor};">${data.message}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'magazine':
                return `
                    <div class="py-12 px-6" style="background: ${bg};">
                        <div class="max-w-4xl mx-auto">
                            <div class="grid md:grid-cols-5 gap-8">
                                <div class="md:col-span-2">
                                    ${data.photo
                                        ? `<img src="${data.photo}" class="w-full h-auto object-cover shadow-2xl" alt="Parents">`
                                        : `<div class="w-full aspect-[3/4] flex items-center justify-center text-8xl shadow-2xl" style="background: ${accent}20;">👨‍👩‍👧</div>`
                                    }
                                </div>
                                <div class="md:col-span-3 flex flex-col justify-center">
                                    <div class="border-l-4 pl-6" style="border-color: ${accent};">
                                        <div class="text-xs uppercase tracking-widest opacity-60 mb-2" style="font-family: 'Georgia', serif;">Featured</div>
                                        <h2 class="text-4xl font-bold mb-4" style="color: ${textColor}; font-family: 'Georgia', serif; line-height: 1.2;">${data.title || 'Meet the Parents-to-Be'}</h2>
                                        ${data.names ? `<h3 class="text-2xl font-semibold mb-6" style="color: ${accent};">${data.names}</h3>` : ''}
                                        ${data.message ? `<p class="text-lg leading-relaxed" style="color: ${textColor};">${data.message}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-16 px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto text-center">
                            <h2 class="text-3xl font-bold mb-8" style="color: ${textColor};">${data.title || 'Meet the Parents-to-Be'}</h2>
                            <div class="relative inline-block">
                                <div class="w-80 h-80 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%); border: 12px solid white;">
                                    <div class="text-center">
                                        ${data.photo
                                            ? `<img src="${data.photo}" class="w-48 h-48 rounded-full object-cover mb-4 mx-auto border-4" style="border-color: white;" alt="Parents">`
                                            : '<div class="text-8xl mb-4">👨‍👩‍👧</div>'
                                        }
                                        ${data.names ? `<h3 class="text-xl font-bold" style="color: ${textColor};">${data.names}</h3>` : ''}
                                    </div>
                                </div>
                                <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-xl" style="border: 3px solid ${accent};">
                                    <span class="font-bold text-lg" style="color: ${accent};">Parents-to-Be</span>
                                </div>
                            </div>
                            ${data.message ? `<p class="mt-12 text-lg leading-relaxed max-w-2xl mx-auto" style="color: ${textColor};">${data.message}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'storybook':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <div class="relative p-6 sm:p-8 rounded-3xl shadow-2xl" style="background: linear-gradient(135deg, ${accent}15 0%, white 100%); border: 4px solid ${accent}40;">
                                <div class="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12" style="color: ${accent}; opacity: 0.2;">
                                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                                </div>
                                <div class="text-center mb-6">
                                    ${getPhotoElement()}
                                </div>
                                <div class="relative z-10 text-center" style="color: ${textColor};">
                                    <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style="font-family: 'Georgia', serif;">${data.title || 'Meet the Parents-to-Be'}</h2>
                                    ${data.names ? `<h3 class="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style="color: ${accent};">${data.names}</h3>` : ''}
                                    ${data.message ? `<p class="text-sm sm:text-base leading-relaxed italic" style="font-family: 'Georgia', serif;">${data.message}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'hearts':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6 relative overflow-hidden" style="background: ${bg};">
                        <div class="absolute inset-0 overflow-hidden pointer-events-none">
                            <div class="absolute top-8 left-4 sm:left-8 text-xl sm:text-3xl opacity-20 animate-pulse" style="color: ${accent};">❤️</div>
                            <div class="absolute top-16 right-8 sm:right-16 text-lg sm:text-2xl opacity-20 animate-pulse" style="color: ${accent}; animation-delay: 0.5s;">💕</div>
                            <div class="absolute bottom-16 left-12 sm:left-24 text-xl sm:text-3xl opacity-20 animate-pulse" style="color: ${accent}; animation-delay: 1s;">💝</div>
                            <div class="absolute bottom-8 right-4 sm:right-12 text-lg sm:text-2xl opacity-20 animate-pulse" style="color: ${accent}; animation-delay: 1.5s;">💗</div>
                        </div>
                        <div class="max-w-2xl mx-auto text-center relative z-10">
                            <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8" style="color: ${textColor};">${data.title || 'Meet the Parents-to-Be'}</h2>
                            <div class="inline-block p-2 sm:p-3 rounded-full mb-6" style="background: ${accent}30;">
                                ${getPhotoElement()}
                            </div>
                            ${data.names ? `
                            <div class="mb-6">
                                <span class="text-2xl sm:text-3xl" style="color: ${accent};">❤️</span>
                                <h3 class="inline-block mx-4 text-lg sm:text-xl font-semibold" style="color: ${accent};">${data.names}</h3>
                                <span class="text-2xl sm:text-3xl" style="color: ${accent};">❤️</span>
                            </div>` : ''}
                            ${data.message ? `<p class="text-sm sm:text-base leading-relaxed max-w-lg mx-auto" style="color: ${textColor};">${data.message}</p>` : ''}
                        </div>
                    </div>
                `;

            case 'scrapbook':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="relative">
                                <!-- Tape effect -->
                                <div class="absolute -top-3 left-8 sm:left-12 w-16 sm:w-20 h-6 sm:h-8 opacity-30 rotate-12" style="background: ${accent};"></div>
                                <div class="absolute -top-3 right-8 sm:right-12 w-16 sm:w-20 h-6 sm:h-8 opacity-30 -rotate-12" style="background: ${accent};"></div>

                                <div class="bg-white p-6 sm:p-8 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                                    <div class="text-center">
                                        <h2 class="text-xl sm:text-2xl font-bold mb-4" style="color: ${textColor}; font-family: 'Comic Sans MS', cursive;">${data.title || 'Meet the Parents-to-Be'}</h2>
                                        <div class="inline-block mb-4 border-4 border-dashed p-2" style="border-color: ${accent};">
                                            ${getPhotoElement()}
                                        </div>
                                        ${data.names ? `<h3 class="text-lg sm:text-xl font-semibold mb-4" style="color: ${accent}; font-family: 'Comic Sans MS', cursive;">${data.names}</h3>` : ''}
                                        ${data.message ? `<p class="text-sm sm:text-base leading-relaxed" style="color: ${textColor}; font-family: 'Comic Sans MS', cursive;">${data.message}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-3xl mx-auto">
                            <div class="border-4 rounded-none p-8 sm:p-12 text-center" style="border-color: ${accent};">
                                <div class="mb-6 flex justify-center" style="color: ${accent};">
                                    <svg class="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                    </svg>
                                </div>
                                <h2 class="text-2xl sm:text-3xl font-serif font-bold mb-6" style="color: ${textColor}; letter-spacing: 0.1em;">${data.title || 'Meet the Parents-to-Be'}</h2>
                                <div class="mb-6 flex justify-center">
                                    <div class="border-4 p-2" style="border-color: ${accent};">
                                        ${getPhotoElement()}
                                    </div>
                                </div>
                                ${data.names ? `<h3 class="text-xl sm:text-2xl font-serif font-semibold mb-6" style="color: ${accent}; letter-spacing: 0.05em;">${data.names}</h3>` : ''}
                                ${data.message ? `<p class="text-sm sm:text-base leading-relaxed font-serif max-w-xl mx-auto" style="color: ${textColor};">${data.message}</p>` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-${align}" style="color: ${textColor};">
                            <h2 class="text-xl sm:text-2xl font-bold mb-4">${data.title || 'Meet the Parents-to-Be'}</h2>
                            <div class="mb-6 flex justify-${align}">
                                ${getPhotoElement()}
                            </div>
                            ${data.names ? `<h3 class="text-lg sm:text-xl font-semibold mb-4" style="color: ${accent};">${data.names}</h3>` : ''}
                            ${data.message ? `<p class="text-sm sm:text-base leading-relaxed">${data.message}</p>` : '<p class="opacity-60 text-sm sm:text-base">Share your story here...</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
