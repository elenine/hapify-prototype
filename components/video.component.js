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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#000000" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#000000'}">
                        <div class="max-w-4xl mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8 text-white">${data.title || 'Watch Our Story'}</h2>
                            <div class="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                                <div class="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                    <div class="text-center">
                                        <div class="text-6xl mb-4">🎥</div>
                                        <div class="text-white font-semibold mb-2">${data.videoTitle || 'Video Player'}</div>
                                        ${data.videoUrl ? `<div class="text-xs text-gray-400">URL: ${data.videoUrl}</div>` : ''}
                                    </div>
                                </div>
                                ${data.description ? `
                                <div class="p-6 bg-gray-800">
                                    <p class="text-gray-300 text-sm">${data.description}</p>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `
            };
