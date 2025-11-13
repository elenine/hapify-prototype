// Contact Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                <input type="text" placeholder="Event Coordinator" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="person" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="contact@event.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}">
            <h2 class="text-2xl font-bold text-center mb-8">Contact Us</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.person ? `
                <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">👤</div>
                    <div class="font-medium">${data.person}</div>
                </div>` : ''}
                ${data.email ? `
                <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">📧</div>
                    <div class="text-sm">${data.email}</div>
                </div>` : ''}
                ${data.phone ? `
                <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">📞</div>
                    <div class="text-sm">${data.phone}</div>
                </div>` : ''}
            </div>
        </div>
    `
};
