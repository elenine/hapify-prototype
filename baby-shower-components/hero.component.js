// Hero Header Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🍼 Hero Header',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parent's Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent section-data" data-field="parent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Text</label>
                <input type="text" placeholder="Baby Shower Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="classic">Classic - Centered</option>
                    <option value="modern">Modern - Split Design</option>
                    <option value="minimal">Minimal - Simple & Clean</option>
                    <option value="elegant">Elegant - With Border</option>
                    <option value="playful">Playful - Colorful Card</option>
                    <option value="polaroid">Polaroid - Photo Frame Style</option>
                    <option value="badge">Badge - Circular Sticker</option>
                    <option value="geometric">Geometric - Bold Shapes</option>
                    <option value="wave">Wave - Fluid Background</option>
                    <option value="confetti">Confetti - Festive Style</option>
                    <option value="stacked">Stacked - Card Layout</option>
                    <option value="ribbon">Ribbon - Banner Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fbbf24" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="align" oninput="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="titleSize" oninput="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="imageShape" oninput="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="hexagon">Hexagon</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Image Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="imageSize" oninput="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'classic';
        const bg = style.bg || '#fbbf24';
        const text = style.text || '#ffffff';
        const accent = style.accent || '#f59e0b';
        const align = style.align || 'center';
        const titleSize = style.titleSize || 'medium';
        const imageShape = style.imageShape || 'circle';
        const imageSize = style.imageSize || 'medium';

        const titleSizes = {
            small: 'text-xl sm:text-2xl',
            medium: 'text-2xl sm:text-3xl',
            large: 'text-3xl sm:text-4xl',
            xlarge: 'text-4xl sm:text-5xl'
        };

        const imageSizes = {
            small: 'w-20 h-20 sm:w-24 sm:h-24',
            medium: 'w-28 h-28 sm:w-32 sm:h-32',
            large: 'w-36 h-36 sm:w-40 sm:h-40'
        };

        const imageShapes = {
            circle: 'rounded-full',
            square: 'rounded-none',
            rounded: 'rounded-2xl',
            hexagon: ''
        };

        const getImageElement = (customClass = '') => {
            const sizeClass = imageSizes[imageSize];
            const shapeClass = imageShapes[imageShape];

            if (imageShape === 'hexagon') {
                return data.image
                    ? `<div class="${sizeClass} ${customClass}"><img src="${data.image}" class="w-full h-full object-cover" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); border: 4px solid ${accent};"></div>`
                    : `<div class="${sizeClass} ${customClass} flex items-center justify-center text-5xl" style="background: ${accent}; color: ${text}; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">🍼</div>`;
            }

            return data.image
                ? `<img src="${data.image}" class="${sizeClass} ${shapeClass} ${customClass} object-cover border-4" style="border-color: ${accent};">`
                : `<div class="text-5xl sm:text-6xl ${customClass}">🍼</div>`;
        };

        switch(layout) {
            case 'modern':
                return `
                    <div class="py-8 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-4xl mx-auto">
                            <div class="flex flex-col gap-6 sm:gap-8 items-center">
                                <div class="text-${align} w-full" style="color: ${text};">
                                    <h1 class="${titleSizes[titleSize]} font-bold mb-3 sm:mb-4">${data.title || 'Baby Shower'}</h1>
                                    <p class="text-lg sm:text-xl mb-2">Celebrating</p>
                                    <p class="text-xl sm:text-2xl font-semibold" style="color: ${accent};">${data.parent || "Parent's Name"}</p>
                                </div>
                                <div class="flex justify-center w-full">
                                    ${getImageElement()}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-${align}" style="color: ${text};">
                            <div class="mb-6 flex justify-${align}">
                                ${getImageElement()}
                            </div>
                            <h1 class="${titleSizes[titleSize]} font-light mb-3" style="letter-spacing: 0.05em;">${data.title || 'Baby Shower'}</h1>
                            <div class="h-1 w-12 sm:w-16 mb-4" style="background: ${accent}; margin-${align === 'center' ? '0 auto' : align === 'right' ? '0 0 0 auto' : '0'};"></div>
                            <p class="text-base sm:text-lg opacity-90">${data.parent || "Parent's Name"}</p>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="border-4 rounded-2xl p-6 sm:p-8 text-${align}" style="border-color: ${accent}; color: ${text};">
                                <div class="mb-6 flex justify-${align}">
                                    ${getImageElement()}
                                </div>
                                <div class="mb-4 flex justify-${align}" style="color: ${accent};">
                                    <svg class="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                    </svg>
                                </div>
                                <h1 class="${titleSizes[titleSize]} font-serif font-bold mb-3">${data.title || 'Baby Shower'}</h1>
                                <p class="text-lg sm:text-xl font-light">for ${data.parent || "Parent's Name"}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'playful':
                return `
                    <div class="py-10 sm:py-12 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto">
                            <div class="rounded-3xl p-6 sm:p-8 shadow-2xl text-${align}" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%); color: ${text};">
                                <div class="mb-6 flex justify-${align}">
                                    ${getImageElement('shadow-lg')}
                                </div>
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                                    <h1 class="${titleSizes[titleSize]} font-bold mb-3">${data.title || 'Baby Shower'}</h1>
                                    <p class="text-lg sm:text-2xl font-semibold">Celebrating ${data.parent || "Parent's Name"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'polaroid':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-sm mx-auto">
                            <div class="bg-white p-3 sm:p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform">
                                <div class="aspect-square bg-gray-100 mb-3 sm:mb-4 flex items-center justify-center overflow-hidden" style="background: ${accent}20;">
                                    ${data.image ? `<img src="${data.image}" class="w-full h-full object-cover">` : '<div class="text-6xl sm:text-8xl">🍼</div>'}
                                </div>
                                <div class="text-center py-3 sm:py-4" style="color: ${accent};">
                                    <h1 class="${titleSizes[titleSize]} font-handwriting mb-2" style="font-family: 'Brush Script MT', cursive; color: #1f2937;">${data.title || 'Baby Shower'}</h1>
                                    <p class="text-base sm:text-lg font-semibold">${data.parent || "Parent's Name"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="relative inline-block">
                                <div class="w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center shadow-2xl" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%); border: 6px sm:border-8 solid white;">
                                    <div class="text-center px-4" style="color: ${text};">
                                        <div class="mb-3 flex justify-center">
                                            ${getImageElement('mb-0')}
                                        </div>
                                        <h1 class="text-lg sm:text-xl font-bold mb-1">${data.title || 'Baby Shower'}</h1>
                                        <p class="text-xs sm:text-sm font-semibold">${data.parent || "Parent's Name"}</p>
                                    </div>
                                </div>
                                <div class="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg" style="background: ${text}; color: ${accent};">
                                    <span class="text-2xl sm:text-3xl">✨</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'geometric':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden" style="background: ${bg};">
                        <div class="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20" style="background: ${accent}; transform: rotate(45deg) translate(-50%, -50%);"></div>
                        <div class="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 opacity-20 rounded-full" style="background: ${accent}; transform: translate(30%, 30%);"></div>
                        <div class="max-w-2xl mx-auto text-${align} relative z-10">
                            <div class="mb-6 flex justify-${align}">
                                ${getImageElement()}
                            </div>
                            <h1 class="${titleSizes[titleSize]} font-black mb-3 uppercase tracking-wider" style="color: ${text}; text-shadow: 3px 3px 0px ${accent};">
                                ${data.title || 'Baby Shower'}
                            </h1>
                            <div class="inline-block px-4 sm:px-6 py-2 sm:py-3 font-bold text-base sm:text-lg rounded-lg" style="background: ${accent}; color: ${text};">
                                ${data.parent || "Parent's Name"}
                            </div>
                        </div>
                    </div>
                `;

            case 'wave':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden" style="background: ${bg};">
                        <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="opacity: 0.3;">
                            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="${accent}"/>
                        </svg>
                        <div class="max-w-2xl mx-auto text-${align} relative z-10" style="color: ${text};">
                            <div class="mb-6 flex justify-${align}">
                                ${getImageElement('shadow-xl')}
                            </div>
                            <h1 class="${titleSizes[titleSize]} font-bold mb-3">${data.title || 'Baby Shower'}</h1>
                            <p class="text-lg sm:text-xl opacity-95">Celebrating ${data.parent || "Parent's Name"}</p>
                        </div>
                    </div>
                `;

            case 'confetti':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden" style="background: ${bg};">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="absolute top-4 left-4 w-3 h-3 rounded-full animate-bounce" style="background: ${accent}; animation-delay: 0s;"></div>
                            <div class="absolute top-12 left-20 w-2 h-2 rounded-full animate-bounce" style="background: ${text}; animation-delay: 0.2s;"></div>
                            <div class="absolute top-8 right-16 w-3 h-3 rounded-full animate-bounce" style="background: ${accent}; animation-delay: 0.4s;"></div>
                            <div class="absolute top-16 right-4 w-2 h-2 rounded-full animate-bounce" style="background: ${text}; animation-delay: 0.6s;"></div>
                            <div class="absolute top-24 left-1/3 w-3 h-3 rounded-full animate-bounce" style="background: ${accent}; animation-delay: 0.8s;"></div>
                            <div class="absolute top-20 right-1/4 w-2 h-2 rounded-full animate-bounce" style="background: ${text}; animation-delay: 1s;"></div>
                        </div>
                        <div class="max-w-2xl mx-auto text-${align} relative z-10" style="color: ${text};">
                            <div class="mb-6 flex justify-${align}">
                                ${getImageElement('shadow-2xl')}
                            </div>
                            <h1 class="${titleSizes[titleSize]} font-bold mb-3">${data.title || 'Baby Shower'}</h1>
                            <div class="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg" style="background: ${accent}; color: ${text};">
                                ${data.parent || "Parent's Name"}
                            </div>
                        </div>
                    </div>
                `;

            case 'stacked':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg};">
                        <div class="max-w-lg mx-auto space-y-4 sm:space-y-6">
                            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-lg transform rotate-1">
                                <div class="flex justify-center mb-4">
                                    ${getImageElement()}
                                </div>
                                <h1 class="${titleSizes[titleSize]} font-bold text-center mb-2" style="color: ${accent};">${data.title || 'Baby Shower'}</h1>
                                <p class="text-center text-base sm:text-lg text-gray-700">for ${data.parent || "Parent's Name"}</p>
                            </div>
                            <div class="bg-white bg-opacity-50 rounded-3xl p-4 sm:p-6 shadow-md transform -rotate-1 -mt-2"></div>
                            <div class="bg-white bg-opacity-30 rounded-3xl p-3 sm:p-4 shadow-sm transform rotate-1 -mt-2"></div>
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-12 sm:py-16 px-4 sm:px-6 relative" style="background: ${bg};">
                        <div class="max-w-2xl mx-auto text-${align} relative" style="color: ${text};">
                            <div class="mb-6 flex justify-${align}">
                                ${getImageElement('shadow-xl')}
                            </div>
                            <div class="relative inline-block">
                                <div class="absolute -left-4 sm:-left-6 top-0 bottom-0 w-4 sm:w-6" style="background: ${accent}; clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%, 30% 50%);"></div>
                                <div class="absolute -right-4 sm:-right-6 top-0 bottom-0 w-4 sm:w-6" style="background: ${accent}; clip-path: polygon(100% 0, 0 10%, 0 90%, 100% 100%, 70% 50%);"></div>
                                <div class="px-8 sm:px-12 py-4 sm:py-6" style="background: ${accent};">
                                    <h1 class="${titleSizes[titleSize]} font-bold mb-2">${data.title || 'Baby Shower'}</h1>
                                    <p class="text-base sm:text-lg font-semibold">Celebrating ${data.parent || "Parent's Name"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'classic':
            default:
                return `
                    <div class="text-${align} py-12 sm:py-16 px-4 sm:px-6" style="background: ${bg}; color: ${text};">
                        <div class="max-w-2xl mx-auto">
                            <div class="mb-6 flex justify-${align}">
                                ${getImageElement()}
                            </div>
                            <h1 class="${titleSizes[titleSize]} font-bold mb-2">${data.title || 'Baby Shower'}</h1>
                            <p class="text-lg sm:text-xl">Celebrating ${data.parent || "Parent's Name"}</p>
                        </div>
                    </div>
                `;
        }
    }
};
