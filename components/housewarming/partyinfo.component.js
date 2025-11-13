// Party Info Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.partyinfo = {
    name: '🎉 Party Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
                <textarea placeholder="Casual attire, food and drinks provided..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 section-data" data-field="notes" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff7ed" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fff7ed'}">
            <h2 class="text-2xl font-bold text-center mb-8">Party Details</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.date ? `
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">📅</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Date</div>
                        <div class="font-medium">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                    </div>
                </div>` : ''}
                ${data.time ? `
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div class="text-2xl">🕐</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Time</div>
                        <div class="font-medium">${data.time}</div>
                    </div>
                </div>` : ''}
                ${data.notes ? `
                <div class="p-4 bg-white rounded-lg">
                    <p class="text-sm text-gray-700">${data.notes}</p>
                </div>` : ''}
            </div>
        </div>
    `
};
