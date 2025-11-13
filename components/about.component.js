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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-6">${data.title || 'About Us'}</h2>
                            <p class="text-gray-600 leading-relaxed text-center">${data.description || 'Tell your business story here...'}</p>
                        </div>
                    </div>
                `
            };
