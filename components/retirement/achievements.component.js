// Achievements & Awards Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.achievements = {
    name: '🏆 Achievements & Awards',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Awards & Recognition" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievements (one per line)</label>
                <textarea placeholder="Employee of the Year 2020&#10;Leadership Excellence Award&#10;Innovation Award&#10;30 Years Service Award" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="achievements" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Awards & Recognition'}</h2>
            <div class="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
                ${data.achievements ? data.achievements.split('\n').filter(a => a.trim()).map(achievement => `
                    <div class="flex items-start gap-3 p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                        <div class="text-3xl">🏆</div>
                        <div class="flex-1">
                            <p class="font-semibold text-gray-900">${achievement}</p>
                        </div>
                    </div>
                `).join('') : '<p class="col-span-2 text-center text-gray-500">Add achievements</p>'}
            </div>
        </div>
    `
};
