// Holiday Photo Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photo = {
    name: '🎄 Holiday Photo',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photo</div>
                    <input type="file" class="hidden section-data" data-field="photo" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption (Optional)</label>
                <input type="text" placeholder="Holiday memories..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="caption" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple - Centered Photo</option>
                    <option value="framed">Framed - With Border</option>
                    <option value="polaroid">Polaroid - Instant Photo Style</option>
                    <option value="floating">Floating - With Shadow</option>
                    <option value="tilted">Tilted - Rotated Angle</option>
                    <option value="collage">Collage - Multi-frame Style</option>
                    <option value="scrapbook">Scrapbook - Memory Book</option>
                    <option value="film">Film Strip - Camera Roll</option>
                    <option value="magazine">Magazine - Editorial Layout</option>
                    <option value="canvas">Canvas - Gallery Style</option>
                    <option value="stamp">Stamp - Postage Style</option>
                    <option value="torn">Torn Edge - Artistic</option>
                    <option value="snowframe">Snow Frame - Snowy Border</option>
                    <option value="ornamentframe">Ornament Frame - Christmas Decoration</option>
                    <option value="giftphoto">Gift Wrap - Present Style</option>
                    <option value="wreathframe">Wreath Frame - Holiday Circle</option>
                    <option value="iceframe">Ice Frame - Frozen Border</option>
                    <option value="lightsframe">Lights Frame - Holiday Lights</option>
                    <option value="treephoto">Tree Photo - Christmas Tree Frame</option>
                    <option value="stockingphoto">Stocking Photo - Hung on Mantel</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="size" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="full">Full Width</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="shape" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Frame Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="frameColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f3f4f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Filter Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="filter" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="grayscale">Black & White</option>
                    <option value="sepia">Sepia/Vintage</option>
                    <option value="warm">Warm Tone</option>
                    <option value="cool">Cool Tone</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Caption Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="captionStyle" onchange="updatePreview()">
                    <option value="simple">Simple</option>
                    <option value="italic">Italic</option>
                    <option value="handwritten">Handwritten Style</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        if (!data.photo) return '';

        const layout = style.layout || 'simple';
        const bgColor = style.bgColor || '#f3f4f6';
        const frameColor = style.frameColor || '#ffffff';

        const sizes = {
            small: 'max-w-xs',
            medium: 'max-w-md',
            large: 'max-w-2xl',
            full: 'w-full'
        };
        const sizeClass = sizes[style.size] || 'max-w-md';

        const shapes = {
            rounded: 'rounded-lg',
            circle: 'rounded-full',
            square: 'rounded-none'
        };
        const shapeClass = shapes[style.shape] || 'rounded-lg';

        const filters = {
            none: '',
            grayscale: 'filter: grayscale(100%);',
            sepia: 'filter: sepia(80%);',
            warm: 'filter: saturate(1.2) hue-rotate(-10deg);',
            cool: 'filter: saturate(1.2) hue-rotate(10deg);'
        };
        const filterStyle = filters[style.filter] || '';

        const captionStyles = {
            simple: 'text-sm',
            italic: 'text-sm italic',
            handwritten: 'text-base italic font-serif',
            bold: 'text-sm font-bold'
        };
        const captionClass = captionStyles[style.captionStyle] || 'text-sm italic';

        const caption = data.caption ? `<p class="mt-4 ${captionClass}" style="color: ${globalStyles.textColor}">${data.caption}</p>` : '';

        // Simple Layout
        if (layout === 'simple') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <img src="${data.photo}" class="${shapeClass} w-full h-auto shadow-lg object-cover" style="${filterStyle}" alt="Holiday photo">
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Framed Layout
        if (layout === 'framed') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="p-4 ${shapeClass}" style="background: ${frameColor}; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Polaroid Layout
        if (layout === 'polaroid') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="p-4 pb-16 bg-white shadow-2xl" style="box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                            <img src="${data.photo}" class="w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            ${data.caption ? `<p class="mt-4 text-center text-sm font-handwriting" style="color: ${globalStyles.textColor}">${data.caption}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Floating Layout
        if (layout === 'floating') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="transform hover:scale-105 transition-transform duration-300">
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}; box-shadow: 0 20px 60px rgba(0,0,0,0.3);" alt="Birthday photo">
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Tilted Layout
        if (layout === 'tilted') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div class="p-3 bg-white ${shapeClass}" style="box-shadow: 0 15px 40px rgba(0,0,0,0.2);">
                                <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            </div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Collage Layout
        if (layout === 'collage') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative">
                            <div class="absolute inset-0 transform translate-x-2 translate-y-2 ${shapeClass} opacity-30" style="background: ${globalStyles.primaryColor}"></div>
                            <div class="absolute inset-0 transform -translate-x-2 -translate-y-2 ${shapeClass} opacity-30" style="background: ${globalStyles.secondaryColor}"></div>
                            <div class="relative p-2 bg-white ${shapeClass} shadow-xl">
                                <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            </div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Scrapbook Layout - Memory Book
        if (layout === 'scrapbook') {
            return `
                <div class="py-8 px-6" style="background: linear-gradient(135deg, #f5e6d3 0%, #e8d4ba 100%);">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative inline-block">
                            <div class="absolute -inset-2 bg-yellow-100 transform rotate-1 rounded"></div>
                            <div class="absolute -inset-1 bg-pink-100 transform -rotate-2 rounded"></div>
                            <div class="relative bg-white p-2 shadow-xl" style="border: 1px dashed #ccc;">
                                <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            </div>
                            <div class="absolute top-2 right-2 text-4xl transform rotate-12">📌</div>
                            <div class="absolute -bottom-6 -left-6 text-3xl transform -rotate-12">🎨</div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Film Strip Layout - Camera Roll
        if (layout === 'film') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="bg-black p-4 rounded shadow-2xl">
                            <div class="relative">
                                <div class="absolute -left-2 top-0 bottom-0 w-6 flex flex-col justify-around">
                                    ${[...Array(8)].map(() => '<div class="w-4 h-3 bg-gray-800 border border-gray-700"></div>').join('')}
                                </div>
                                <div class="absolute -right-2 top-0 bottom-0 w-6 flex flex-col justify-around">
                                    ${[...Array(8)].map(() => '<div class="w-4 h-3 bg-gray-800 border border-gray-700"></div>').join('')}
                                </div>
                                <img src="${data.photo}" class="w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            </div>
                            ${data.caption ? `<p class="mt-4 text-white text-sm font-mono">${data.caption}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Magazine Layout - Editorial Layout
        if (layout === 'magazine') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto">
                        <div class="relative overflow-hidden shadow-2xl" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);">
                            <img src="${data.photo}" class="w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            ${data.caption ? `
                                <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-6">
                                    <p class="text-white text-lg font-bold uppercase tracking-wide">${data.caption}</p>
                                    <div class="mt-2 h-1 w-20 bg-pink-500"></div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Canvas Layout - Gallery Style
        if (layout === 'canvas') {
            return `
                <div class="py-8 px-6" style="background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative inline-block">
                            <div class="absolute -inset-8 bg-gradient-to-br from-amber-900 to-amber-700 shadow-2xl"></div>
                            <div class="absolute -inset-6 bg-gradient-to-br from-amber-800 to-amber-600"></div>
                            <div class="relative">
                                <div class="p-6 bg-white">
                                    <img src="${data.photo}" class="w-full h-auto object-cover" style="${filterStyle}; border: 2px solid #f0f0f0;" alt="Birthday photo">
                                </div>
                            </div>
                        </div>
                        ${data.caption ? `<p class="mt-6 text-white text-sm italic">${data.caption}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Stamp Layout - Postage Style
        if (layout === 'stamp') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="inline-block p-6 bg-white shadow-xl relative" style="background: radial-gradient(circle at 0 0, transparent 8px, white 8px, white 12px, transparent 12px) -12px -12px / 24px 24px, radial-gradient(circle at 100% 0, transparent 8px, white 8px, white 12px, transparent 12px) 12px -12px / 24px 24px, radial-gradient(circle at 0 100%, transparent 8px, white 8px, white 12px, transparent 12px) -12px 12px / 24px 24px, radial-gradient(circle at 100% 100%, transparent 8px, white 8px, white 12px, transparent 12px) 12px 12px / 24px 24px, white;">
                            <div class="border-4 border-dashed" style="border-color: ${globalStyles.primaryColor}; padding: 8px;">
                                <img src="${data.photo}" class="w-full h-auto object-cover" style="${filterStyle}" alt="Birthday photo">
                            </div>
                            ${data.caption ? `
                                <div class="mt-4 text-center">
                                    <p class="text-sm font-bold uppercase tracking-wide" style="color: ${globalStyles.primaryColor}">${data.caption}</p>
                                    <div class="mt-2 flex justify-center gap-1">
                                        <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.primaryColor}"></div>
                                        <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.primaryColor}"></div>
                                        <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.primaryColor}"></div>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        // Torn Edge Layout - Artistic
        if (layout === 'torn') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative inline-block shadow-2xl" style="clip-path: polygon(0% 3%, 2% 0%, 5% 2%, 8% 0%, 12% 1%, 15% 0%, 18% 2%, 22% 0%, 25% 1%, 28% 0%, 32% 2%, 35% 0%, 38% 1%, 42% 0%, 45% 2%, 48% 0%, 52% 1%, 55% 0%, 58% 2%, 62% 0%, 65% 1%, 68% 0%, 72% 2%, 75% 0%, 78% 1%, 82% 0%, 85% 2%, 88% 0%, 92% 1%, 95% 0%, 98% 2%, 100% 0%, 100% 97%, 98% 100%, 95% 98%, 92% 100%, 88% 99%, 85% 100%, 82% 98%, 78% 100%, 75% 99%, 72% 100%, 68% 98%, 65% 100%, 62% 99%, 58% 100%, 55% 98%, 52% 100%, 48% 99%, 45% 100%, 42% 98%, 38% 100%, 35% 99%, 32% 100%, 28% 98%, 25% 100%, 22% 99%, 18% 100%, 15% 98%, 12% 100%, 8% 99%, 5% 100%, 2% 98%, 0% 100%);">
                            <img src="${data.photo}" class="w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Snow Frame Layout - Snowy Border
        if (layout === 'snowframe') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #dbeafe 0%, #eff6ff 100%);">
                    <div class="${sizeClass} mx-auto text-center relative">
                        <div class="absolute -inset-4 bg-white rounded-lg shadow-2xl" style="border: 8px solid #e0f2fe;">
                            <div class="absolute -top-2 left-0 right-0 flex justify-around text-2xl text-blue-200">
                                <span>❄️</span><span>❄️</span><span>❄️</span><span>❄️</span><span>❄️</span>
                            </div>
                            <div class="absolute -bottom-2 left-0 right-0 flex justify-around text-2xl text-blue-200">
                                <span>❄️</span><span>❄️</span><span>❄️</span><span>❄️</span><span>❄️</span>
                            </div>
                        </div>
                        <div class="relative p-6">
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Ornament Frame Layout - Christmas Decoration
        if (layout === 'ornamentframe') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center relative">
                        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                        <div class="relative inline-block">
                            <div class="p-6 rounded-full shadow-2xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}30 0%, ${globalStyles.secondaryColor}30 100%); border: 6px solid ${globalStyles.primaryColor};">
                                <img src="${data.photo}" class="rounded-full w-full h-auto object-cover aspect-square" style="${filterStyle}" alt="Holiday photo">
                            </div>
                            <div class="absolute top-2 right-2 text-3xl">✨</div>
                            <div class="absolute bottom-2 left-2 text-3xl">✨</div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Gift Wrap Layout - Present Style
        if (layout === 'giftphoto') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative bg-gradient-to-br from-red-500 to-red-700 p-6 rounded-lg shadow-2xl">
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                            <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-12 bg-gradient-to-b from-yellow-400 to-yellow-500"></div>
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div class="w-20 h-16 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full" style="clip-path: ellipse(50% 50%);"></div>
                            </div>
                            <div class="relative z-10">
                                <div class="bg-white p-2 rounded-lg">
                                    <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                                </div>
                            </div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Wreath Frame Layout - Holiday Circle
        if (layout === 'wreathframe') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative inline-block">
                            <div class="relative rounded-full p-8 shadow-2xl" style="background: #059669; border: 12px solid #047857;">
                                <div class="absolute top-0 left-1/4 text-2xl">🔴</div>
                                <div class="absolute top-0 right-1/4 text-2xl">🎀</div>
                                <div class="absolute top-1/4 right-0 text-2xl">🔵</div>
                                <div class="absolute bottom-1/4 right-0 text-2xl">🟡</div>
                                <div class="absolute bottom-0 right-1/4 text-2xl">🔴</div>
                                <div class="absolute bottom-0 left-1/4 text-2xl">🌟</div>
                                <div class="absolute bottom-1/4 left-0 text-2xl">🟢</div>
                                <div class="absolute top-1/4 left-0 text-2xl">❄️</div>
                                <img src="${data.photo}" class="rounded-full w-full h-auto object-cover aspect-square" style="${filterStyle}; border: 6px solid white;" alt="Holiday photo">
                            </div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Ice Frame Layout - Frozen Border
        if (layout === 'iceframe') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #0ea5e9 0%, #38bdf8 100%);">
                    <div class="${sizeClass} mx-auto text-center relative">
                        <div class="absolute -top-6 left-0 right-0 flex justify-around text-5xl text-cyan-100 opacity-80">
                            <span class="transform rotate-180">💧</span>
                            <span class="transform rotate-180">💧</span>
                            <span class="transform rotate-180">💧</span>
                        </div>
                        <div class="relative p-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-2xl" style="border: 6px solid rgba(165, 243, 252, 0.7);">
                            <div class="absolute -top-4 left-1/4 text-3xl">❄️</div>
                            <div class="absolute -top-4 right-1/4 text-3xl">❄️</div>
                            <div class="absolute -bottom-4 left-1/3 text-3xl">❄️</div>
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Lights Frame Layout - Holiday Lights
        if (layout === 'lightsframe') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="${sizeClass} mx-auto text-center relative">
                        <div class="absolute -top-6 left-0 right-0 flex justify-around text-3xl">
                            <span style="color: #dc2626;">🔴</span>
                            <span style="color: #d97706;">🟡</span>
                            <span style="color: #3b82f6;">🔵</span>
                            <span style="color: #059669;">🟢</span>
                            <span style="color: #dc2626;">🔴</span>
                        </div>
                        <div class="absolute -top-4 left-0 right-0 h-2 rounded" style="background: linear-gradient(to right, #047857 0%, #059669 100%);"></div>
                        <div class="relative p-6 bg-white rounded-lg shadow-2xl" style="border: 4px solid #059669;">
                            <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                        </div>
                        <div class="absolute -bottom-6 left-0 right-0 flex justify-around text-3xl">
                            <span style="color: #3b82f6;">🔵</span>
                            <span style="color: #dc2626;">🔴</span>
                            <span style="color: #d97706;">🟡</span>
                            <span style="color: #059669;">🟢</span>
                            <span style="color: #3b82f6;">🔵</span>
                        </div>
                        <div class="absolute -bottom-4 left-0 right-0 h-2 rounded" style="background: linear-gradient(to right, #059669 0%, #047857 100%);"></div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Tree Photo Layout - Christmas Tree Frame
        if (layout === 'treephoto') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #1e3a8a 0%, #1e40af 100%);">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="relative inline-block">
                            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl">⭐</div>
                            <div class="relative" style="background: linear-gradient(to bottom, transparent 0%, #059669 100%); clip-path: polygon(50% 0%, 5% 100%, 95% 100%); padding: 60px 30px 40px;">
                                <div class="bg-white p-2 rounded-lg">
                                    <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                                </div>
                                <div class="absolute top-10 left-5 text-2xl">🔴</div>
                                <div class="absolute top-20 right-8 text-2xl">🟡</div>
                                <div class="absolute top-32 left-12 text-2xl">🔵</div>
                            </div>
                            <div class="w-20 h-12 mx-auto" style="background: #8b4513;"></div>
                        </div>
                        ${caption}
                    </div>
                </div>
            `;
        }

        // Stocking Photo Layout - Hung on Mantel
        if (layout === 'stockingphoto') {
            return `
                <div class="py-12 px-6" style="background: linear-gradient(to bottom, #1f2937 0%, #374151 100%);">
                    <div class="${sizeClass} mx-auto text-center">
                        <div class="mb-8 flex justify-around items-end">
                            <div class="text-4xl transform rotate-12">🧦</div>
                            <div class="text-4xl transform -rotate-6">🧦</div>
                        </div>
                        <div class="bg-gradient-to-b from-amber-900 to-amber-950 rounded-t-2xl p-6 border-t-8 border-amber-800">
                            <div class="bg-white p-3 rounded-lg">
                                <img src="${data.photo}" class="${shapeClass} w-full h-auto object-cover" style="${filterStyle}" alt="Holiday photo">
                            </div>
                            ${caption ? `<p class="mt-4 text-white ${captionClass}">${data.caption}</p>` : ''}
                        </div>
                        <div class="relative h-20 bg-gradient-to-b from-orange-600 to-red-700 rounded-b-2xl overflow-hidden">
                            <div class="absolute inset-0 flex justify-around items-center">
                                <div class="animate-pulse text-4xl">🔥</div>
                                <div class="animate-pulse text-5xl" style="animation-delay: 0.3s;">🔥</div>
                                <div class="animate-pulse text-4xl" style="animation-delay: 0.6s;">🔥</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-8 px-6" style="background: ${bgColor}">
                <div class="${sizeClass} mx-auto text-center">
                    <img src="${data.photo}" class="${shapeClass} w-full h-auto shadow-lg object-cover" style="${filterStyle}" alt="Holiday photo">
                    ${caption}
                </div>
            </div>
        `;
    }
};
