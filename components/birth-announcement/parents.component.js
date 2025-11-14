// Parents Info Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.parents = {
    name: '👨‍👩‍👦 Parents Info',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mother's Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="mother" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Father's Name</label>
                <input type="text" placeholder="Michael Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="father" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Siblings (if any)</label>
                <input type="text" placeholder="Big brother Jake" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="siblings" oninput="updatePreview()">
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
            <h2 class="text-2xl font-bold text-center mb-8">Proud Parents</h2>
            <div class="max-w-md mx-auto text-center space-y-4">
                ${data.mother || data.father ? `
                <div class="p-4 bg-white rounded-lg">
                    <div class="text-3xl mb-2">👨‍👩‍👦</div>
                    ${data.mother ? `<div class="font-medium mb-1">${data.mother}</div>` : ''}
                    ${data.father ? `<div class="font-medium mb-1">${data.father}</div>` : ''}
                </div>` : ''}
                ${data.siblings ? `
                <div class="p-4 bg-white rounded-lg">
                    <div class="text-xs text-gray-500 mb-1">Siblings</div>
                    <div class="font-medium">${data.siblings}</div>
                </div>` : ''}
            </div>
        </div>
    `
};
