// Memory Lane Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memorylane = {
    name: '🛤️ Memory Lane',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Memory Lane" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memorable Stories (one per line)</label>
                <textarea placeholder="The time you saved the day...&#10;Your legendary presentations&#10;Coffee break conversations&#10;Team building moments" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="stories" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ecfeff'}">
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memory Lane'}</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.stories ? data.stories.split('\n').filter(s => s.trim()).map(story => `
                    <div class="p-4 bg-white rounded-lg shadow-sm">
                        <div class="flex items-start gap-3">
                            <div class="text-cyan-600 text-xl">💭</div>
                            <p class="text-gray-700">${story}</p>
                        </div>
                    </div>
                `).join('') : '<p class="text-center text-gray-500">Add memorable stories</p>'}
            </div>
        </div>
    `
};
