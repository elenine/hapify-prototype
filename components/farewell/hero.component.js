// Hero Header Component for Farewell Party

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
                name: '👋 Hero Header',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Person's Name</label>
                            <input type="text" placeholder="Jane Doe" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Title Text</label>
                            <input type="text" placeholder="Farewell Party" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Person's Photo</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-violet-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="classic">Classic - Centered</option>
                                <option value="split">Split - Image Left</option>
                                <option value="overlay">Overlay - Image Background</option>
                                <option value="minimal">Minimal - Clean Simple</option>
                                <option value="card">Card - Boxed Design</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent/Gradient Color</label>
                            <input type="color" value="#7c3aed" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentBg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="align" onchange="updatePreview()">
                                <option value="center">Center</option>
                                <option value="left">Left</option>
                                <option value="right">Right</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Image Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="imageStyle" onchange="updatePreview()">
                                <option value="circle">Circle</option>
                                <option value="rounded">Rounded Square</option>
                                <option value="square">Square</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Add Shadow Effect</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="none">None</option>
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'classic';
                    const bg = style.bg || '#8b5cf6';
                    const accentBg = style.accentBg || '#7c3aed';
                    const textColor = style.text || '#ffffff';
                    const align = style.align || 'center';
                    const imageStyle = style.imageStyle || 'circle';
                    const shadow = style.shadow || 'none';

                    const shadowClass = shadow !== 'none' ? `shadow-${shadow}` : '';
                    const imageRoundClass = imageStyle === 'circle' ? 'rounded-full' : imageStyle === 'rounded' ? 'rounded-2xl' : '';
                    const alignClass = align === 'center' ? 'text-center mx-auto' : align === 'left' ? 'text-left' : 'text-right ml-auto';

                    // Classic Layout - Centered
                    if (layout === 'classic') {
                        return `
                            <div class="py-16 px-6 ${alignClass}" style="background: linear-gradient(135deg, ${bg}, ${accentBg}); color: ${textColor}">
                                ${data.image ? `<img src="${data.image}" class="w-32 h-32 ${imageRoundClass} ${alignClass} mb-6 object-cover border-4 ${shadowClass}" style="border-color: ${textColor}">` : '<div class="text-6xl mb-4">👋</div>'}
                                <h1 class="text-4xl font-bold mb-3">${data.title || 'Farewell Party'}</h1>
                                <p class="text-2xl font-semibold opacity-90">${data.name || "Person's Name"}</p>
                            </div>
                        `;
                    }

                    // Split Layout - Image on Left
                    if (layout === 'split') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                                <div class="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
                                    <div class="flex-shrink-0">
                                        ${data.image ? `<img src="${data.image}" class="w-40 h-40 ${imageRoundClass} object-cover border-4 ${shadowClass}" style="border-color: ${textColor}">` : '<div class="text-7xl">👋</div>'}
                                    </div>
                                    <div class="flex-1">
                                        <h1 class="text-3xl font-bold mb-2">${data.title || 'Farewell Party'}</h1>
                                        <p class="text-xl font-semibold opacity-90">${data.name || "Person's Name"}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    // Overlay Layout - Image Background
                    if (layout === 'overlay') {
                        return `
                            <div class="relative py-20 px-6 overflow-hidden" style="background: linear-gradient(135deg, ${bg}, ${accentBg});">
                                ${data.image ? `
                                    <div class="absolute inset-0 opacity-20">
                                        <img src="${data.image}" class="w-full h-full object-cover">
                                    </div>
                                ` : ''}
                                <div class="relative z-10 ${alignClass}">
                                    <div class="text-6xl mb-4">👋</div>
                                    <h1 class="text-4xl font-bold mb-3 ${shadowClass}" style="color: ${textColor}; text-shadow: 2px 2px 4px rgba(0,0,0,0.3)">${data.title || 'Farewell Party'}</h1>
                                    <p class="text-2xl font-semibold ${shadowClass}" style="color: ${textColor}; text-shadow: 2px 2px 4px rgba(0,0,0,0.3)">${data.name || "Person's Name"}</p>
                                </div>
                            </div>
                        `;
                    }

                    // Minimal Layout - Clean and Simple
                    if (layout === 'minimal') {
                        return `
                            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor}">
                                <div class="max-w-xl mx-auto ${alignClass}">
                                    ${data.image ? `<img src="${data.image}" class="w-24 h-24 ${imageRoundClass} ${alignClass} mb-4 object-cover ${shadowClass}">` : '<div class="text-5xl mb-3">👋</div>'}
                                    <h1 class="text-3xl font-bold mb-1">${data.title || 'Farewell Party'}</h1>
                                    <p class="text-xl opacity-80">${data.name || "Person's Name"}</p>
                                    <div class="mt-4 pt-4" style="border-top: 2px solid ${textColor}; opacity: 0.3; max-width: 100px; ${align === 'center' ? 'margin-left: auto; margin-right: auto;' : align === 'right' ? 'margin-left: auto;' : ''}"></div>
                                </div>
                            </div>
                        `;
                    }

                    // Card Layout - Boxed Design
                    if (layout === 'card') {
                        return `
                            <div class="py-12 px-6" style="background: linear-gradient(135deg, ${bg}, ${accentBg});">
                                <div class="max-w-md mx-auto bg-white rounded-3xl overflow-hidden ${shadowClass}" style="box-shadow: 0 20px 60px rgba(0,0,0,0.3)">
                                    ${data.image ? `
                                        <div class="h-48 overflow-hidden">
                                            <img src="${data.image}" class="w-full h-full object-cover">
                                        </div>
                                    ` : '<div class="h-32 flex items-center justify-center text-6xl" style="background: ${accentBg}">👋</div>'}
                                    <div class="p-8 ${alignClass}" style="color: #1f2937">
                                        <h1 class="text-3xl font-bold mb-2">${data.title || 'Farewell Party'}</h1>
                                        <p class="text-xl font-semibold opacity-70">${data.name || "Person's Name"}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    return '';
                }

            };
