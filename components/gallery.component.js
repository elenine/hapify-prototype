// Gallery Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
                name: '🖼️ Gallery',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Work" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Image Titles (one per line)</label>
                            <textarea placeholder="Project Alpha&#10;Project Beta&#10;Project Gamma&#10;Project Delta&#10;Project Epsilon&#10;Project Zeta" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="images" oninput="updatePreview()"></textarea>
                            <p class="text-xs text-gray-500 mt-1">Each line represents one image in the gallery</p>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Grid Layout</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="columns" onchange="updatePreview()">
                                <option value="2">2 Columns</option>
                                <option value="3" selected>3 Columns</option>
                                <option value="4">4 Columns</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const images = (data.images || '').split('\n').filter(i => i.trim());
                    const columns = style.columns || '3';
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Work'}</h2>
                            <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-${columns} gap-4">
                                ${images.map(image => `
                                    <div class="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition flex items-center justify-center">
                                        <div class="text-center p-4">
                                            <div class="text-4xl mb-2">🖼️</div>
                                            <div class="text-sm font-medium text-gray-700">${image.trim()}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            };
