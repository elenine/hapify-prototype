// Achievements Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.achievements = {
    name: '🏆 Achievements',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Awards & Achievements" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievements (one per line)</label>
                <textarea placeholder="Dean's List&#10;Honor Society Member&#10;Research Excellence Award&#10;Outstanding Student Award" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="achievements" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Achievements & Awards'}</h2>
            <div class="max-w-md mx-auto space-y-3">
                ${data.achievements ? data.achievements.split('\n').filter(a => a.trim()).map(achievement => `
                    <div class="flex items-start gap-3 p-4 bg-white rounded-lg">
                        <div class="text-indigo-600 mt-1">🏆</div>
                        <div>${achievement}</div>
                    </div>
                `).join('') : '<p class="text-center text-gray-500">Add achievements</p>'}
            </div>
        </div>
    `
};
