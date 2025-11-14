// Couple Details Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.couple = {
    name: '👫 Couple Details',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Relationship Length</label>
                <input type="text" placeholder="Together for 3 years" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="duration" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fun Facts</label>
                <textarea placeholder="Share fun facts about your relationship..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="facts" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">About Us</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.duration ? `
                <div class="p-4 bg-rose-50 rounded-lg text-center">
                    <div class="text-3xl mb-2">👫</div>
                    <div class="font-medium">${data.duration}</div>
                </div>` : ''}
                ${data.facts ? `
                <div class="p-4 bg-rose-50 rounded-lg">
                    <div class="text-xs text-gray-500 mb-2">Fun Facts</div>
                    <p class="text-gray-700">${data.facts}</p>
                </div>` : ''}
            </div>
        </div>
    `
};
