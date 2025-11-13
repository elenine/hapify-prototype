// Birth Stats Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.stats = {
    name: '📊 Baby Stats',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birth Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birth Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                <input type="text" placeholder="7 lbs 8 oz" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="weight" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Length</label>
                <input type="text" placeholder="20 inches" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="length" oninput="updatePreview()">
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
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-6 text-center">Baby's First Stats</h2>
                <div class="space-y-3">
                    ${data.date ? `
                    <div class="p-4 bg-teal-50 rounded-lg">
                        <div class="text-xs text-gray-500 mb-1">Born</div>
                        <div class="font-bold">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                    </div>` : ''}
                    ${data.time ? `
                    <div class="p-4 bg-teal-50 rounded-lg">
                        <div class="text-xs text-gray-500 mb-1">Time</div>
                        <div class="font-bold">${data.time}</div>
                    </div>` : ''}
                    <div class="grid grid-cols-2 gap-3">
                        ${data.weight ? `
                        <div class="p-4 bg-teal-50 rounded-lg">
                            <div class="text-xs text-gray-500 mb-1">Weight</div>
                            <div class="font-medium">${data.weight}</div>
                        </div>` : ''}
                        ${data.length ? `
                        <div class="p-4 bg-teal-50 rounded-lg">
                            <div class="text-xs text-gray-500 mb-1">Length</div>
                            <div class="font-medium">${data.length}</div>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `
};
