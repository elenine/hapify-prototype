// New Home Details Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.homedetails = {
    name: '🏡 New Home Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
                <textarea placeholder="123 Main Street, City, State ZIP" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Home Description</label>
                <textarea placeholder="Beautiful 3-bedroom home in quiet neighborhood..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
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
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold mb-6">Our New Home</h2>
                <div class="p-6 bg-orange-50 rounded-lg">
                    <div class="text-4xl mb-3">🏡</div>
                    ${data.address ? `<div class="font-medium text-lg mb-3">${data.address}</div>` : ''}
                    ${data.description ? `<p class="text-gray-700 text-sm">${data.description}</p>` : ''}
                </div>
            </div>
        </div>
    `
};
