// Sponsors Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.sponsors = {
    name: '🤝 Sponsors',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Sponsors" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sponsor Names (one per line)</label>
                <textarea placeholder="Company A&#10;Company B&#10;Company C" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="sponsors" oninput="updatePreview()"></textarea>
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
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}">
            <h2 class="text-2xl font-bold mb-8">${data.title || 'Our Sponsors'}</h2>
            <div class="max-w-md mx-auto">
                ${data.sponsors ? data.sponsors.split('\n').filter(s => s.trim()).map(sponsor => `
                    <div class="inline-block px-6 py-3 bg-green-50 rounded-lg m-2 font-medium">${sponsor}</div>
                `).join('') : '<p class="text-gray-500">Add sponsor names</p>'}
            </div>
        </div>
    `
};
