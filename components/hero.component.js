// Hero Banner Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
                name: '💼 Hero Banner',
                allowMultiple: false,  // Only one hero section allowed
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                            <input type="text" placeholder="Your Business Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                            <input type="text" placeholder="Your business tagline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent section-data" data-field="tagline" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 cursor-pointer" onclick="this.querySelector('input').click()">
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
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered Classic</option>
                                <option value="left">Left Aligned</option>
                                <option value="split">Split View</option>
                                <option value="minimal">Minimal</option>
                                <option value="bold">Bold & Modern</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Image Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="imageRadius" onchange="updatePreview()">
                                <option value="rounded-lg">Rounded</option>
                                <option value="rounded-full">Circle</option>
                                <option value="rounded-none">Square</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#2563eb';
                    const textColor = style.text || '#ffffff';
                    const imageRadius = style.imageRadius || 'rounded-lg';
                    const imageSrc = data.image || '';
                    const name = data.name || 'Business Name';
                    const tagline = data.tagline || 'Your professional tagline';

                    switch(layout) {
                        case 'centered':
                            return `
                                <div class="text-center py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    ${imageSrc ? `<img src="${imageSrc}" class="w-24 h-24 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white shadow-lg">` : '<div class="text-6xl mb-6">💼</div>'}
                                    <h1 class="text-3xl font-bold mb-2">${name}</h1>
                                    <p class="text-lg opacity-90">${tagline}</p>
                                </div>
                            `;

                        case 'left':
                            return `
                                <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="max-w-md">
                                        ${imageSrc ? `<img src="${imageSrc}" class="w-20 h-20 ${imageRadius} mb-4 object-cover border-4 border-white shadow-lg">` : '<div class="text-5xl mb-4">💼</div>'}
                                        <h1 class="text-3xl font-bold mb-2">${name}</h1>
                                        <p class="text-lg opacity-90">${tagline}</p>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="flex flex-col items-center gap-6">
                                        <div class="flex-shrink-0">
                                            ${imageSrc ? `<img src="${imageSrc}" class="w-32 h-32 ${imageRadius} object-cover border-4 border-white shadow-xl">` : '<div class="w-32 h-32 bg-white bg-opacity-20 ${imageRadius} flex items-center justify-center text-6xl">💼</div>'}
                                        </div>
                                        <div class="text-center">
                                            <h1 class="text-3xl font-bold mb-2">${name}</h1>
                                            <p class="text-lg opacity-90">${tagline}</p>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="text-center py-20 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    <h1 class="text-4xl font-light mb-3">${name}</h1>
                                    <div class="w-16 h-0.5 mx-auto mb-3" style="background: ${textColor}; opacity: 0.5;"></div>
                                    <p class="text-base opacity-75">${tagline}</p>
                                </div>
                            `;

                        case 'bold':
                            return `
                                <div class="relative py-24 px-6 overflow-hidden" style="background: ${bgColor}; color: ${textColor}">
                                    <div class="absolute inset-0 opacity-10">
                                        <div class="absolute top-0 right-0 w-64 h-64 rounded-full" style="background: ${textColor}; transform: translate(50%, -50%);"></div>
                                        <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full" style="background: ${textColor}; transform: translate(-50%, 50%);"></div>
                                    </div>
                                    <div class="relative text-center">
                                        ${imageSrc ? `<img src="${imageSrc}" class="w-28 h-28 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white shadow-2xl">` : '<div class="text-7xl mb-6">💼</div>'}
                                        <h1 class="text-4xl font-black mb-3 tracking-tight">${name}</h1>
                                        <p class="text-xl font-medium opacity-90">${tagline}</p>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="text-center py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                                    ${imageSrc ? `<img src="${imageSrc}" class="w-24 h-24 ${imageRadius} mx-auto mb-6 object-cover border-4 border-white">` : '<div class="text-6xl mb-6">💼</div>'}
                                    <h1 class="text-3xl font-bold mb-2">${name}</h1>
                                    <p class="text-lg opacity-90">${tagline}</p>
                                </div>
                            `;
                    }
                }
            };
