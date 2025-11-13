// Photo Gallery Component for Retirement Celebration

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gallery = {
                name: '📸 Photo Gallery',
                allowMultiple: true,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Title</label>
                            <input type="text" placeholder="Photo Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Description</label>
                            <textarea placeholder="A collection of memorable moments throughout the years..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-400 cursor-pointer">
                                <div class="text-3xl mb-2">📸</div>
                                <div class="text-sm text-gray-600">Click to upload photos</div>
                            </div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-4">${data.title || 'Photo Gallery'}</h2>
                            ${data.description ? `<p class="text-center text-gray-600 mb-6">${data.description}</p>` : ''}
                            <div class="grid grid-cols-2 gap-4">
                                <div class="aspect-square bg-cyan-100 rounded-lg flex items-center justify-center">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square bg-cyan-100 rounded-lg flex items-center justify-center">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square bg-cyan-100 rounded-lg flex items-center justify-center">
                                    <span class="text-4xl">📷</span>
                                </div>
                                <div class="aspect-square bg-cyan-100 rounded-lg flex items-center justify-center">
                                    <span class="text-4xl">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            };
