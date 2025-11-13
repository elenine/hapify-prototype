// Contact Info Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="graduate@email.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" placeholder="(555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <textarea placeholder="RSVP or other contact information..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="info" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#eef2ff'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold text-center mb-8">Contact Information</h2>
                <div class="space-y-4">
                    ${data.email ? `
                    <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                        <div class="text-2xl">📧</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Email</div>
                            <div class="font-medium">${data.email}</div>
                        </div>
                    </div>` : ''}
                    ${data.phone ? `
                    <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                        <div class="text-2xl">📞</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Phone</div>
                            <div class="font-medium">${data.phone}</div>
                        </div>
                    </div>` : ''}
                    ${data.info ? `
                    <div class="p-4 bg-white rounded-lg text-center">
                        <p class="text-sm text-gray-600">${data.info}</p>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `
};
