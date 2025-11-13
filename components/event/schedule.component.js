// Schedule Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.schedule = {
    name: '⏰ Schedule',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Title</label>
                <input type="text" placeholder="Event Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (one per line)</label>
                <textarea placeholder="9:00 AM - Registration&#10;10:00 AM - Opening Keynote&#10;12:00 PM - Lunch Break" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="items" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
            <div class="max-w-md mx-auto space-y-3">
                ${data.items ? data.items.split('\n').filter(item => item.trim()).map(item => `
                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                        <div class="text-xl">⏰</div>
                        <div class="text-sm">${item}</div>
                    </div>
                `).join('') : '<p class="text-center text-gray-500">Add schedule items</p>'}
            </div>
        </div>
    `
};
