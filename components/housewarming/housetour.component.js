// House Tour Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.housetour = {
    name: '🚪 House Tour',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tour Schedule</label>
                <input type="text" placeholder="Tours starting at 2 PM" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="schedule" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tour Details</label>
                <textarea placeholder="Feel free to explore all rooms..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
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
                <div class="text-5xl mb-4">🚪</div>
                <h2 class="text-2xl font-bold mb-4">House Tour</h2>
                ${data.schedule ? `<p class="text-lg text-gray-700 mb-4">${data.schedule}</p>` : ''}
                ${data.details ? `<div class="p-4 bg-orange-50 rounded-lg"><p class="text-gray-600 text-sm">${data.details}</p></div>` : ''}
            </div>
        </div>
    `
};
