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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Upload Portfolio Images</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 cursor-pointer">
                                <div class="text-3xl mb-2">🖼️</div>
                                <div class="text-sm text-gray-600">Click to upload multiple images</div>
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
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Work'}</h2>
                        <div class="max-w-md mx-auto text-center">
                            <div class="text-5xl mb-4">📁</div>
                            <p class="text-gray-500 text-sm">Portfolio items will appear here</p>
                        </div>
                    </div>
                `
            };
