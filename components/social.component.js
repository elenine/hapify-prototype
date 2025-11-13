// Social Media Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.social = {
                name: '🔗 Social Media',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Follow Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                            <input type="url" placeholder="https://facebook.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="facebook" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                            <input type="url" placeholder="https://instagram.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="instagram" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                            <input type="url" placeholder="https://linkedin.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="linkedin" oninput="updatePreview()">
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
                    <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-6">${data.title || 'Follow Us'}</h2>
                            <div class="flex justify-center gap-4">
                                ${data.facebook ? `<a href="${data.facebook}" class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">f</a>` : ''}
                                ${data.instagram ? `<a href="${data.instagram}" class="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">📷</a>` : ''}
                                ${data.linkedin ? `<a href="${data.linkedin}" class="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl">in</a>` : ''}
                            </div>
                            ${!data.facebook && !data.instagram && !data.linkedin ? '<p class="text-gray-500 text-sm">Add social media links</p>' : ''}
                        </div>
                    </div>
                `
            };
