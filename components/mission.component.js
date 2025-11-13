// Mission/Vision Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.mission = {
    name: '🎯 Mission/Vision',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Mission & Vision" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" value="Our Mission & Vision" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mission Title</label>
                <input type="text" placeholder="Our Mission" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="missionTitle" value="Our Mission" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                <textarea placeholder="Describe your company's mission..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="mission" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Vision Title</label>
                <input type="text" placeholder="Our Vision" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="visionTitle" value="Our Vision" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Vision Statement</label>
                <textarea placeholder="Describe your company's vision..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="vision" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Values Title</label>
                <input type="text" placeholder="Our Values" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="valuesTitle" value="Our Values" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Values (one per line)</label>
                <textarea placeholder="Innovation\nIntegrity\nExcellence\nCollaboration" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="values" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const values = (data.values || '').split('\n').filter(v => v.trim());

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0f9ff'}; color: ${style.text || '#1f2937'};">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold mb-12 text-center">${data.title || 'Our Mission & Vision'}</h2>
                    <div class="grid md:grid-cols-2 gap-8 mb-12">
                        <div class="bg-white rounded-lg p-6 shadow-sm">
                            <div class="text-3xl mb-3">🎯</div>
                            <h3 class="text-2xl font-bold mb-3" style="color: ${style.accent || '#2563eb'};">${data.missionTitle || 'Our Mission'}</h3>
                            <p class="text-gray-600">${data.mission || 'Our mission statement goes here...'}</p>
                        </div>
                        <div class="bg-white rounded-lg p-6 shadow-sm">
                            <div class="text-3xl mb-3">🔭</div>
                            <h3 class="text-2xl font-bold mb-3" style="color: ${style.accent || '#2563eb'};">${data.visionTitle || 'Our Vision'}</h3>
                            <p class="text-gray-600">${data.vision || 'Our vision statement goes here...'}</p>
                        </div>
                    </div>
                    ${values.length > 0 ? `
                        <div class="bg-white rounded-lg p-6 shadow-sm">
                            <h3 class="text-2xl font-bold mb-4 text-center" style="color: ${style.accent || '#2563eb'};">${data.valuesTitle || 'Our Values'}</h3>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                ${values.map(value => `
                                    <div class="text-center">
                                        <div class="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white" style="background: ${style.accent || '#2563eb'};">
                                            ✓
                                        </div>
                                        <div class="font-medium text-sm">${value.trim()}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
