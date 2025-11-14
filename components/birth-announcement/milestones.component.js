// Milestones Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.milestones = {
    name: '🎯 First Milestones',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Baby's First Milestones" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 1</label>
                <input type="text" placeholder="First smile at 2 weeks" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="milestone1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 2</label>
                <input type="text" placeholder="First giggle at 1 month" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="milestone2" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 3</label>
                <input type="text" placeholder="Held head up at 6 weeks" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="milestone3" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestone 4</label>
                <input type="text" placeholder="Sleeping through the night" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="milestone4" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#f0fdfa'}">
            <div class="max-w-md mx-auto">
                <div class="text-center text-4xl mb-4">🎯</div>
                <h2 class="text-2xl font-bold text-center mb-6">${data.title || "Baby's First Milestones"}</h2>
                <div class="space-y-3">
                    ${data.milestone1 ? `
                    <div class="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <span class="text-xl">⭐</span>
                        <span class="text-gray-700">${data.milestone1}</span>
                    </div>` : ''}
                    ${data.milestone2 ? `
                    <div class="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <span class="text-xl">⭐</span>
                        <span class="text-gray-700">${data.milestone2}</span>
                    </div>` : ''}
                    ${data.milestone3 ? `
                    <div class="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <span class="text-xl">⭐</span>
                        <span class="text-gray-700">${data.milestone3}</span>
                    </div>` : ''}
                    ${data.milestone4 ? `
                    <div class="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <span class="text-xl">⭐</span>
                        <span class="text-gray-700">${data.milestone4}</span>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `
};
