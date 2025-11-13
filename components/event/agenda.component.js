// Agenda Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.agenda = {
    name: '📝 Agenda',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Agenda Title</label>
                <input type="text" placeholder="What to Expect" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Agenda Topics (one per line)</label>
                <textarea placeholder="Networking Session&#10;Keynote Presentation&#10;Q&A Panel" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="topics" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#f0fdf4'}">
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Agenda'}</h2>
            <div class="max-w-md mx-auto">
                ${data.topics ? data.topics.split('\n').filter(topic => topic.trim()).map(topic => `
                    <div class="flex items-start gap-3 mb-3">
                        <div class="text-green-600 mt-1">✓</div>
                        <div>${topic}</div>
                    </div>
                `).join('') : '<p class="text-center text-gray-500">Add agenda topics</p>'}
            </div>
        </div>
    `
};
