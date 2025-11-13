// Celebration Party Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebrationparty = {
    name: '🥳 Celebration Party',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Title</label>
                <input type="text" placeholder="Graduation Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Date & Time</label>
                <input type="text" placeholder="Following the ceremony" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="datetime" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <textarea placeholder="Party venue details..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="location" oninput="updatePreview()"></textarea>
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
            <div class="max-w-md mx-auto text-center">
                <div class="text-5xl mb-4">🥳</div>
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Celebration Party'}</h2>
                ${data.datetime ? `<p class="text-gray-700 mb-3">${data.datetime}</p>` : ''}
                ${data.location ? `<div class="p-4 bg-white rounded-lg"><p class="text-gray-600 text-sm">${data.location}</p></div>` : ''}
            </div>
        </div>
    `
};
