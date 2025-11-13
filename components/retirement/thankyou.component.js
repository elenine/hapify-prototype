// Thank You Component for Retirement Celebration

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.thankyou = {
                name: '🙏 Thank You',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                            <textarea placeholder="Thank you for being part of this journey..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Closing Note</label>
                            <input type="text" placeholder="With gratitude," class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="closing" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ecfeff'}">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">🙏</div>
                            <h2 class="text-2xl font-bold mb-6">Thank You</h2>
                            <p class="text-gray-700 text-lg mb-6">${data.message || 'Thank you for celebrating this milestone and being part of this journey.'}</p>
                            ${data.closing ? `<p class="text-gray-600 italic">${data.closing}</p>` : ''}
                        </div>
                    </div>
                `
            };
