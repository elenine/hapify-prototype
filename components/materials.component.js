// Conference Materials Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.materials = {
    name: '📚 Conference Materials',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Conference Materials & Resources" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" value="Conference Materials & Resources" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Access all your conference materials in one place..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Resource 1</h4>
                <input type="text" placeholder="Conference Program Guide" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="resource1name" oninput="updatePreview()">
                <input type="url" placeholder="Download link URL" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="resource1url" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Resource 2</h4>
                <input type="text" placeholder="Speaker Presentations" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="resource2name" oninput="updatePreview()">
                <input type="url" placeholder="Download link URL" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="resource2url" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Resource 3 (Optional)</h4>
                <input type="text" placeholder="Mobile App" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="resource3name" oninput="updatePreview()">
                <input type="url" placeholder="Download link URL" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="resource3url" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Resource 4 (Optional)</h4>
                <input type="text" placeholder="Attendee List" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="resource4name" oninput="updatePreview()">
                <input type="url" placeholder="Download link URL" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="resource4url" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Access Information</label>
                <textarea placeholder="Materials will be available throughout the conference and for 30 days after..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="accessInfo" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#dbeafe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#dbeafe';

        const resources = [];
        if (data.resource1name && data.resource1url) {
            resources.push({ name: data.resource1name, url: data.resource1url });
        }
        if (data.resource2name && data.resource2url) {
            resources.push({ name: data.resource2name, url: data.resource2url });
        }
        if (data.resource3name && data.resource3url) {
            resources.push({ name: data.resource3name, url: data.resource3url });
        }
        if (data.resource4name && data.resource4url) {
            resources.push({ name: data.resource4name, url: data.resource4url });
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">📚</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Conference Materials & Resources'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${resources.length > 0 ? `
                        <div class="space-y-3 mb-6">
                            ${resources.map((resource, index) => `
                                <a href="${resource.url}" target="_blank" class="block bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition group">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-xl flex-shrink-0">
                                                ${index === 0 ? '📄' : index === 1 ? '📊' : index === 2 ? '📱' : '👥'}
                                            </div>
                                            <div>
                                                <h3 class="font-semibold text-gray-900 group-hover:text-teal-600 transition">${resource.name}</h3>
                                                <p class="text-xs text-gray-500">Click to download/access</p>
                                            </div>
                                        </div>
                                        <div class="text-teal-600 text-xl group-hover:translate-x-1 transition">→</div>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="text-center text-gray-500 py-8">Conference materials will be added here</p>
                    `}

                    ${data.accessInfo ? `
                        <div class="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                            <div class="flex items-start gap-3">
                                <div class="text-xl">ℹ️</div>
                                <div>
                                    <h3 class="font-semibold text-gray-900 mb-1">Access Information</h3>
                                    <p class="text-gray-700 text-sm">${data.accessInfo}</p>
                                </div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
