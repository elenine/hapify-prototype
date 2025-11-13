// Registration CTA Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.registration = {
                name: '🎟️ Registration',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Headline</label>
                            <input type="text" placeholder="Register Now" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="headline" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea placeholder="Secure your spot today! Limited seats available." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                            <input type="text" placeholder="Register Now" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="buttonText" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Registration URL</label>
                            <input type="url" placeholder="https://eventbrite.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="url" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Price/Info</label>
                            <input type="text" placeholder="Early bird: $99 | Regular: $149" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="price" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonBg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Text Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonText" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-16 px-6 text-center" style="background: ${style.bg || '#3b82f6'}; color: ${style.text || '#ffffff'}">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">🎟️</div>
                            <h2 class="text-3xl font-bold mb-4">${data.headline || 'Register Now'}</h2>
                            <p class="text-lg mb-2 opacity-90">${data.description || 'Secure your spot today! Limited seats available.'}</p>
                            ${data.price ? `<p class="text-sm mb-6 opacity-80">${data.price}</p>` : '<div class="mb-6"></div>'}
                            <a href="${data.url || '#'}" class="inline-block px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition" style="background: ${style.buttonBg || '#ffffff'}; color: ${style.buttonText || '#3b82f6'}">
                                ${data.buttonText || 'Register Now'}
                            </a>
                        </div>
                    </div>
                `
            };
