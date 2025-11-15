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
                                <option value="masonry">Masonry Layout</option>
                                <option value="carousel-preview">Carousel Preview</option>
                                <option value="polaroid">Polaroid Stack</option>
                                <option value="magazine">Magazine Style</option>
                                <option value="gallery-grid">Gallery Grid</option>
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

                        case 'masonry':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="grid grid-cols-2 gap-3">
                                            <div class="space-y-3">
                                                <div class="rounded-2xl overflow-hidden shadow-lg" style="height: 180px; background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                    <div class="h-full flex flex-col items-center justify-center p-4">
                                                        <div class="text-5xl mb-2">📁</div>
                                                        <div class="text-xs font-bold text-center text-gray-800">${project1}</div>
                                                    </div>
                                                </div>
                                                <div class="rounded-2xl overflow-hidden shadow-lg" style="height: 140px; background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                    <div class="h-full flex flex-col items-center justify-center p-3">
                                                        <div class="text-4xl mb-1">📁</div>
                                                        <div class="text-xs font-bold text-center text-gray-800">${project3}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="space-y-3 pt-6">
                                                <div class="rounded-2xl overflow-hidden shadow-lg" style="height: 140px; background: linear-gradient(135deg, ${accentColor}25, ${accentColor}45);">
                                                    <div class="h-full flex flex-col items-center justify-center p-3">
                                                        <div class="text-4xl mb-1">📁</div>
                                                        <div class="text-xs font-bold text-center text-gray-800">${project2}</div>
                                                    </div>
                                                </div>
                                                <div class="rounded-2xl overflow-hidden shadow-lg" style="height: 120px; background: linear-gradient(135deg, ${accentColor}35, ${accentColor}55);">
                                                    <div class="h-full flex items-center justify-center text-3xl">
                                                        📁
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'carousel-preview':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="relative">
                                            <div class="rounded-3xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                <div class="h-56 flex items-center justify-center text-7xl">
                                                    📁
                                                </div>
                                                <div class="bg-white p-5">
                                                    <h3 class="font-bold text-lg text-gray-800 mb-1">${project1}</h3>
                                                    <p class="text-sm text-gray-500">Featured portfolio project</p>
                                                </div>
                                            </div>
                                            <div class="flex gap-3 mt-4 overflow-x-auto pb-2">
                                                <div class="flex-shrink-0 w-24 h-24 rounded-xl shadow-md flex flex-col items-center justify-center p-2 text-center" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                    <span class="text-2xl">📁</span>
                                                    <span class="text-xs font-semibold mt-1">${project2}</span>
                                                </div>
                                                <div class="flex-shrink-0 w-24 h-24 rounded-xl shadow-md flex flex-col items-center justify-center p-2 text-center" style="background: linear-gradient(135deg, ${accentColor}25, ${accentColor}45);">
                                                    <span class="text-2xl">📁</span>
                                                    <span class="text-xs font-semibold mt-1">${project3}</span>
                                                </div>
                                                <div class="flex-shrink-0 w-24 h-24 rounded-xl shadow-md flex items-center justify-center text-2xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                    📁
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'polaroid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto relative" style="min-height: 400px;">
                                        <div class="absolute left-8 top-0 bg-white rounded-lg shadow-2xl overflow-hidden transform -rotate-3" style="width: 220px;">
                                            <div class="h-44 flex items-center justify-center text-6xl" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                📁
                                            </div>
                                            <div class="p-4 bg-white">
                                                <p class="text-sm font-bold text-gray-800 text-center">${project1}</p>
                                            </div>
                                        </div>
                                        <div class="absolute left-16 top-12 bg-white rounded-lg shadow-2xl overflow-hidden transform rotate-2" style="width: 220px;">
                                            <div class="h-44 flex items-center justify-center text-6xl" style="background: linear-gradient(135deg, ${accentColor}25, ${accentColor}45);">
                                                📁
                                            </div>
                                            <div class="p-4 bg-white">
                                                <p class="text-sm font-bold text-gray-800 text-center">${project2}</p>
                                            </div>
                                        </div>
                                        <div class="absolute left-10 top-24 bg-white rounded-lg shadow-2xl overflow-hidden transform -rotate-1" style="width: 220px;">
                                            <div class="h-44 flex items-center justify-center text-6xl" style="background: linear-gradient(135deg, ${accentColor}35, ${accentColor}55);">
                                                📁
                                            </div>
                                            <div class="p-4 bg-white">
                                                <p class="text-sm font-bold text-gray-800 text-center">${project3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'magazine':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        <div class="grid grid-cols-3 gap-2">
                                            <div class="col-span-2 rounded-xl overflow-hidden shadow-lg" style="height: 200px; background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                <div class="h-full flex flex-col justify-end p-4">
                                                    <div class="text-5xl mb-2">📁</div>
                                                    <h3 class="font-bold text-white text-lg">${project1}</h3>
                                                    <p class="text-xs text-white opacity-90">Main Feature</p>
                                                </div>
                                            </div>
                                            <div class="rounded-xl overflow-hidden shadow-lg" style="height: 200px; background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                <div class="h-full flex flex-col items-center justify-center p-2">
                                                    <div class="text-3xl mb-2">📁</div>
                                                    <p class="text-xs font-bold text-center">${project2}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-3">
                                            <div class="rounded-xl p-4 shadow-md border-l-4" style="border-color: ${accentColor}; background: white;">
                                                <div class="text-3xl mb-2">📁</div>
                                                <h4 class="font-bold text-sm text-gray-800">${project3}</h4>
                                                <p class="text-xs text-gray-500 mt-1">Recent work</p>
                                            </div>
                                            <div class="rounded-xl flex items-center justify-center text-4xl shadow-md" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                📁
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'gallery-grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor};">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="grid grid-cols-3 gap-2">
                                            <div class="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg relative">
                                                <div class="absolute inset-0 flex items-center justify-center text-7xl" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                    📁
                                                </div>
                                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent p-3">
                                                    <h3 class="font-bold text-white">${project1}</h3>
                                                </div>
                                            </div>
                                            <div class="aspect-square rounded-xl overflow-hidden shadow-md flex flex-col items-center justify-center p-2" style="background: linear-gradient(135deg, ${accentColor}25, ${accentColor}45);">
                                                <span class="text-3xl">📁</span>
                                                <span class="text-xs font-semibold text-center mt-1">${project2}</span>
                                            </div>
                                            <div class="aspect-square rounded-xl overflow-hidden shadow-md flex flex-col items-center justify-center p-2" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                <span class="text-3xl">📁</span>
                                                <span class="text-xs font-semibold text-center mt-1">${project3}</span>
                                            </div>
                                            <div class="col-span-3 rounded-xl p-4 shadow-md flex items-center gap-3" style="background: white; border-top: 3px solid ${accentColor};">
                                                <div class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}20;">
                                                    📁
                                                </div>
                                                <div class="flex-1">
                                                    <h4 class="font-bold text-sm text-gray-800">More Projects</h4>
                                                    <p class="text-xs text-gray-500">View all work</p>
                                                </div>
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
