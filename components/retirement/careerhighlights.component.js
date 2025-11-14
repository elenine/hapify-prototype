// Career Highlights Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.careerhighlights = {
    name: '⭐ Career Highlights',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Career Highlights" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accomplishments (one per line)</label>
                <textarea placeholder="Led major project initiatives&#10;Mentored countless team members&#10;Received excellence awards&#10;Built lasting partnerships" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="highlights" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Career Highlights'}</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.highlights ? data.highlights.split('\n').filter(h => h.trim()).map(highlight => `
                    <div class="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                        <div class="text-cyan-600 mt-1">⭐</div>
                        <div>${highlight}</div>
                    </div>
                `).join('') : '<p class="text-center text-gray-500">Add career highlights</p>'}
            </div>
        </div>
    `
};
