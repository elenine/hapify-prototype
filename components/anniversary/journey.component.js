// Journey Together Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.journey = {
    name: '🛤️ Journey Together',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Journey Highlights (one per line)</label>
                <textarea placeholder="First met in college&#10;Got engaged in Paris&#10;Welcomed our first child&#10;Built our dream home" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="highlights" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Journey'}</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.highlights ? data.highlights.split('\n').filter(h => h.trim()).map(highlight => `
                    <div class="flex items-start gap-3 p-4 bg-white rounded-lg">
                        <div class="text-red-600 mt-1">❤️</div>
                        <div>${highlight}</div>
                    </div>
                `).join('') : '<p class="text-center text-gray-500">Add journey highlights</p>'}
            </div>
        </div>
    `
};
