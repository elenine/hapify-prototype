// Birth Visiting Hours Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.visiting = {
    name: '🏥 Visiting Hours',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="Hospital/Home" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="location" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Visiting Hours</label>
                <textarea placeholder="Daily 2PM - 6PM" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="hours" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                <textarea placeholder="Please call ahead..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">Visiting Information</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.location ? `
                <div class="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                    <div class="text-2xl">🏥</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Location</div>
                        <div class="font-medium">${data.location}</div>
                    </div>
                </div>` : ''}
                ${data.hours ? `
                <div class="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                    <div class="text-2xl">🕐</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Hours</div>
                        <div class="text-sm">${data.hours}</div>
                    </div>
                </div>` : ''}
                ${data.instructions ? `
                <div class="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                    <div class="text-2xl">ℹ️</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Instructions</div>
                        <div class="text-sm">${data.instructions}</div>
                    </div>
                </div>` : ''}
            </div>
        </div>
    `
};
