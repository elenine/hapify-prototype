// Video Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.video = {
                name: '🎥 Video',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Watch Our Story" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Video Title</label>
                            <input type="text" placeholder="Company Introduction" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="videoTitle" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Video URL (YouTube, Vimeo, etc.)</label>
                            <input type="url" placeholder="https://youtube.com/watch?v=..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="videoUrl" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea placeholder="Video description..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="centered">Centered View</option>
                                <option value="widescreen">Widescreen</option>
                                <option value="featured">Featured Player</option>
                                <option value="minimal">Minimal</option>
                                <option value="card">Card Style</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#000000" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'centered';
                    const bgColor = style.bg || '#000000';
                    const accentColor = style.accent || '#3b82f6';
                    const title = data.title || 'Watch Our Story';
                    const videoTitle = data.videoTitle || 'Video Player';
                    const videoUrl = data.videoUrl || '';
                    const description = data.description || '';

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8 text-white">${title}</h2>`;

                    switch(layout) {
                        case 'centered':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="rounded-xl overflow-hidden shadow-2xl" style="background: ${accentColor}20;">
                                            <div class="aspect-video flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                <div class="text-center">
                                                    <div class="text-5xl mb-3">🎥</div>
                                                    <div class="text-white font-bold mb-2">${videoTitle}</div>
                                                    ${videoUrl ? `<div class="text-xs text-white opacity-75">Click to play</div>` : ''}
                                                </div>
                                            </div>
                                            ${description ? `
                                            <div class="p-5" style="background: ${accentColor}15;">
                                                <p class="text-white text-xs opacity-90">${description}</p>
                                            </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'widescreen':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="rounded-2xl overflow-hidden shadow-2xl" style="background: ${accentColor}20;">
                                            <div class="aspect-video flex items-center justify-center" style="background: linear-gradient(to right, ${accentColor}40, ${accentColor}60);">
                                                <div class="text-center">
                                                    <div class="text-6xl mb-4">▶️</div>
                                                    <div class="text-white font-bold text-lg mb-2">${videoTitle}</div>
                                                </div>
                                            </div>
                                            ${description ? `
                                            <div class="p-5 text-center" style="background: ${accentColor}10;">
                                                <p class="text-white text-sm opacity-90">${description}</p>
                                            </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'featured':
                            return `
                                <div class="py-12 px-6 text-white" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                                            <div class="aspect-video flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                <div class="text-center z-10">
                                                    <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-3" style="background: rgba(255,255,255,0.2);">
                                                        ▶️
                                                    </div>
                                                    <div class="font-bold text-lg mb-1">${videoTitle}</div>
                                                    ${description ? `<p class="text-xs opacity-90 px-6">${description}</p>` : ''}
                                                </div>
                                                <div class="absolute top-0 left-0 w-full h-full" style="background: radial-gradient(circle at center, transparent 30%, ${accentColor}40);"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="rounded-lg overflow-hidden border-2" style="border-color: ${accentColor};">
                                            <div class="aspect-video flex items-center justify-center bg-gray-900">
                                                <div class="text-center">
                                                    <div class="text-4xl mb-2" style="color: ${accentColor};">🎥</div>
                                                    <div class="text-white font-semibold text-sm">${videoTitle}</div>
                                                </div>
                                            </div>
                                        </div>
                                        ${description ? `
                                        <div class="mt-3 text-center">
                                            <p class="text-white text-xs opacity-75">${description}</p>
                                        </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        case 'card':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-2xl overflow-hidden shadow-2xl">
                                            <div class="aspect-video flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                                <div class="text-center">
                                                    <div class="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 text-white" style="background: ${accentColor};">
                                                        ▶️
                                                    </div>
                                                    <div class="font-bold" style="color: ${accentColor};">${videoTitle}</div>
                                                </div>
                                            </div>
                                            ${description ? `
                                            <div class="p-5">
                                                <p class="text-gray-700 text-sm text-center">${description}</p>
                                            </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="rounded-xl overflow-hidden shadow-2xl" style="background: ${accentColor}20;">
                                            <div class="aspect-video flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                                <div class="text-center">
                                                    <div class="text-5xl mb-3">🎥</div>
                                                    <div class="text-white font-bold">${videoTitle}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
