// Contact Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
                name: '📞 Contact',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Get In Touch" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" placeholder="contact@business.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="email" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input type="tel" placeholder="+1 234 567 8900" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="phone" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <textarea placeholder="Business address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#eff6ff'}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Get In Touch'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${data.email ? `
                            <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                                <div class="text-2xl">📧</div>
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">Email</div>
                                    <div class="font-medium text-sm">${data.email}</div>
                                </div>
                            </div>` : ''}
                            ${data.phone ? `
                            <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                                <div class="text-2xl">📞</div>
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">Phone</div>
                                    <div class="font-medium text-sm">${data.phone}</div>
                                </div>
                            </div>` : ''}
                            ${data.address ? `
                            <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                                <div class="text-2xl">📍</div>
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">Address</div>
                                    <div class="font-medium text-sm">${data.address}</div>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                `
            };
