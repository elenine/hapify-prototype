// Call to Action Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.cta = {
                name: '🎯 Call to Action',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                            <input type="text" placeholder="Ready to Work Together?" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="heading" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Subtext</label>
                            <input type="text" placeholder="Let's bring your ideas to life" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtext" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                            <input type="text" placeholder="Get Started" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="button" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-16 px-6 text-center" style="background: ${style.bg || '#2563eb'}; color: ${style.text || '#ffffff'}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-3">${data.heading || 'Ready to Work Together?'}</h2>
                            <p class="text-lg opacity-90 mb-6">${data.subtext || "Let's bring your ideas to life"}</p>
                            <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                ${data.button || 'Get Started'}
                            </button>
                        </div>
                    </div>
                `
            };
