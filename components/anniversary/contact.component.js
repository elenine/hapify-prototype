// Contact Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Information',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Get In Touch" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                <input type="text" placeholder="Event Coordinator" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="anniversary@email.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <textarea placeholder="For questions about the celebration..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="info" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Contact Information'}</h2>
                ${data.info ? `<p class="text-center text-gray-600 mb-6">${data.info}</p>` : ''}
                <div class="space-y-4">
                    ${data.name ? `
                    <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                        <div class="text-2xl">👤</div>
                        <div>
                            <div class="text-xs text-gray-500">Contact Person</div>
                            <div class="font-medium">${data.name}</div>
                        </div>
                    </div>` : ''}
                    ${data.phone ? `
                    <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                        <div class="text-2xl">📞</div>
                        <div>
                            <div class="text-xs text-gray-500">Phone</div>
                            <a href="tel:${data.phone}" class="font-medium text-red-600 hover:underline">${data.phone}</a>
                        </div>
                    </div>` : ''}
                    ${data.email ? `
                    <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                        <div class="text-2xl">📧</div>
                        <div>
                            <div class="text-xs text-gray-500">Email</div>
                            <a href="mailto:${data.email}" class="font-medium text-red-600 hover:underline">${data.email}</a>
                        </div>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `
};
