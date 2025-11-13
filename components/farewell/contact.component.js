// Stay In Touch Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
                name: '📞 Stay In Touch',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Stay In Touch" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea placeholder="Don't be a stranger! Here's how to reach me..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" placeholder="email@example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="email" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="phone" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                            <input type="url" placeholder="linkedin.com/in/username" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="linkedin" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#faf5ff'}">
                        <div class="max-w-md mx-auto text-center">
                            <div class="text-5xl mb-4">📞</div>
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Stay In Touch'}</h2>
                            <p class="text-gray-600 mb-6">${data.message || "Let's keep in touch!"}</p>
                            <div class="space-y-3">
                                ${data.email ? `
                                <div class="flex items-center justify-center gap-3 p-3 bg-white rounded-lg">
                                    <div class="text-xl">✉️</div>
                                    <a href="mailto:${data.email}" class="text-violet-600 hover:underline">${data.email}</a>
                                </div>` : ''}
                                ${data.phone ? `
                                <div class="flex items-center justify-center gap-3 p-3 bg-white rounded-lg">
                                    <div class="text-xl">📱</div>
                                    <a href="tel:${data.phone}" class="text-violet-600 hover:underline">${data.phone}</a>
                                </div>` : ''}
                                ${data.linkedin ? `
                                <div class="flex items-center justify-center gap-3 p-3 bg-white rounded-lg">
                                    <div class="text-xl">💼</div>
                                    <a href="${data.linkedin.startsWith('http') ? data.linkedin : 'https://' + data.linkedin}" target="_blank" class="text-violet-600 hover:underline">LinkedIn Profile</a>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `
            };
