// Portfolio Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.portfolio = {
                name: '📁 Portfolio',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Work" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle (Optional)</label>
                            <input type="text" placeholder="Check out our latest projects" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Project 1 Title</label>
                            <input type="text" placeholder="Project Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="project1" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Project 2 Title</label>
                            <input type="text" placeholder="Project Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="project2" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Project 3 Title</label>
                            <input type="text" placeholder="Project Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="project3" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="grid">Grid View</option>
                                <option value="list">List View</option>
                                <option value="cards">Card Style</option>
                                <option value="minimal">Minimal</option>
                                <option value="featured">Featured + Grid</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'grid';
                    const bgColor = style.bg || '#ffffff';
                    const accentColor = style.accent || '#3b82f6';
                    const title = data.title || 'Our Work';
                    const subtitle = data.subtitle || '';
                    const project1 = data.project1 || 'Project 1';
                    const project2 = data.project2 || 'Project 2';
                    const project3 = data.project3 || 'Project 3';

                    const headerHtml = `
                        <h2 class="text-2xl font-bold text-center mb-2">${title}</h2>
                        ${subtitle ? `<p class="text-gray-500 text-center mb-8">${subtitle}</p>` : '<div class="mb-8"></div>'}
                    `;

                    switch(layout) {
                        case 'grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        <div class="aspect-square rounded-lg flex items-center justify-center text-4xl shadow-md" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                            📁
                                        </div>
                                        <div class="aspect-square rounded-lg flex items-center justify-center text-4xl shadow-md" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                            📁
                                        </div>
                                        <div class="aspect-square rounded-lg flex items-center justify-center text-4xl shadow-md col-span-2" style="background: linear-gradient(135deg, ${accentColor}25, ${accentColor}45);">
                                            📁
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'list':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        <div class="flex items-center gap-4 p-4 rounded-lg shadow-sm border border-gray-200">
                                            <div class="w-16 h-16 rounded-lg flex items-center justify-center text-2xl flex-shrink-0" style="background: ${accentColor}; color: white;">
                                                📁
                                            </div>
                                            <div class="flex-1">
                                                <h3 class="font-semibold">${project1}</h3>
                                                <p class="text-sm text-gray-500">Portfolio item</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-4 p-4 rounded-lg shadow-sm border border-gray-200">
                                            <div class="w-16 h-16 rounded-lg flex items-center justify-center text-2xl flex-shrink-0" style="background: ${accentColor}; color: white;">
                                                📁
                                            </div>
                                            <div class="flex-1">
                                                <h3 class="font-semibold">${project2}</h3>
                                                <p class="text-sm text-gray-500">Portfolio item</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-4 p-4 rounded-lg shadow-sm border border-gray-200">
                                            <div class="w-16 h-16 rounded-lg flex items-center justify-center text-2xl flex-shrink-0" style="background: ${accentColor}; color: white;">
                                                📁
                                            </div>
                                            <div class="flex-1">
                                                <h3 class="font-semibold">${project3}</h3>
                                                <p class="text-sm text-gray-500">Portfolio item</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-4" style="border-color: ${accentColor};">
                                            <div class="h-32 flex items-center justify-center text-5xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                📁
                                            </div>
                                            <div class="p-4">
                                                <h3 class="font-bold text-lg">${project1}</h3>
                                                <p class="text-sm text-gray-500 mt-1">Featured project</p>
                                            </div>
                                        </div>
                                        <div class="bg-white rounded-xl shadow-lg overflow-hidden border-l-4" style="border-color: ${accentColor};">
                                            <div class="h-32 flex items-center justify-center text-5xl" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                📁
                                            </div>
                                            <div class="p-4">
                                                <h3 class="font-bold text-lg">${project2}</h3>
                                                <p class="text-sm text-gray-500 mt-1">Featured project</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        <div class="border-b border-gray-200 pb-3">
                                            <div class="flex items-center justify-between">
                                                <h3 class="font-semibold">${project1}</h3>
                                                <span class="text-2xl">📁</span>
                                            </div>
                                        </div>
                                        <div class="border-b border-gray-200 pb-3">
                                            <div class="flex items-center justify-between">
                                                <h3 class="font-semibold">${project2}</h3>
                                                <span class="text-2xl">📁</span>
                                            </div>
                                        </div>
                                        <div class="border-b border-gray-200 pb-3">
                                            <div class="flex items-center justify-between">
                                                <h3 class="font-semibold">${project3}</h3>
                                                <span class="text-2xl">📁</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'featured':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        <div class="relative rounded-xl overflow-hidden shadow-xl">
                                            <div class="h-48 flex items-center justify-center text-6xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                📁
                                            </div>
                                            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                                <h3 class="font-bold text-lg text-white">${project1}</h3>
                                                <p class="text-sm text-white text-opacity-90">Featured Project</p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div class="aspect-square rounded-lg flex flex-col items-center justify-center text-3xl shadow-md p-3" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                <span>📁</span>
                                                <span class="text-xs mt-2 font-semibold text-center">${project2}</span>
                                            </div>
                                            <div class="aspect-square rounded-lg flex flex-col items-center justify-center text-3xl shadow-md p-3" style="background: linear-gradient(135deg, ${accentColor}25, ${accentColor}45);">
                                                <span>📁</span>
                                                <span class="text-xs mt-2 font-semibold text-center">${project3}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="text-5xl mb-4">📁</div>
                                        <p class="text-gray-500 text-sm">Portfolio items will appear here</p>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
