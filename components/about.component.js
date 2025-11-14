// About Us Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.about = {
                name: 'ℹ️ About Us',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="About Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea placeholder="Tell your business story..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered</option>
                                <option value="left">Left Aligned</option>
                                <option value="card">Card Style</option>
                                <option value="split">Split with Icon</option>
                                <option value="boxed">Boxed Content</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#ffffff';
                    const textColor = style.textColor || '#1f2937';
                    const accentColor = style.accent || '#3b82f6';
                    const title = data.title || 'About Us';
                    const description = data.description || 'Tell your business story here...';

                    switch(layout) {
                        case 'centered':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    <div class="max-w-md mx-auto">
                                        <h2 class="text-2xl font-bold text-center mb-6">${title}</h2>
                                        <p class="text-gray-600 leading-relaxed text-center">${description}</p>
                                    </div>
                                </div>
                            `;

                        case 'left':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    <div class="max-w-md">
                                        <h2 class="text-2xl font-bold mb-4">${title}</h2>
                                        <div class="w-16 h-1 mb-4" style="background: ${accentColor};"></div>
                                        <p class="text-gray-600 leading-relaxed">${description}</p>
                                    </div>
                                </div>
                            `;

                        case 'card':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border-t-4" style="border-color: ${accentColor};">
                                        <div class="text-center mb-4">
                                            <div class="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white text-xl mb-3" style="background: ${accentColor};">
                                                ℹ️
                                            </div>
                                            <h2 class="text-2xl font-bold" style="color: ${textColor};">${title}</h2>
                                        </div>
                                        <p class="text-gray-600 leading-relaxed text-center">${description}</p>
                                    </div>
                                </div>
                            `;

                        case 'split':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto">
                                        <div class="flex gap-4 items-start">
                                            <div class="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-2xl text-white shadow-lg" style="background: ${accentColor};">
                                                ℹ️
                                            </div>
                                            <div class="flex-1">
                                                <h2 class="text-2xl font-bold mb-3" style="color: ${textColor};">${title}</h2>
                                                <p class="text-gray-600 leading-relaxed">${description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'boxed':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    <div class="max-w-md mx-auto border-2 rounded-xl p-8" style="border-color: ${accentColor};">
                                        <h2 class="text-2xl font-bold text-center mb-2" style="color: ${accentColor};">${title}</h2>
                                        <div class="w-12 h-0.5 mx-auto mb-6" style="background: ${accentColor};"></div>
                                        <p class="text-gray-600 leading-relaxed text-center">${description}</p>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                                    <div class="max-w-md mx-auto">
                                        <h2 class="text-2xl font-bold text-center mb-6">${title}</h2>
                                        <p class="text-gray-600 leading-relaxed text-center">${description}</p>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
