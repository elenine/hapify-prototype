// Quote Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quote = {
    name: '💭 Inspirational Quote',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote</label>
                <textarea rows="4" placeholder="Success is not final, failure is not fatal..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="quote" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input type="text" placeholder="Winston Churchill" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="author" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f3e8ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#581c87" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#a855f7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-16 px-6" style="background: ${style.bg || '#f3e8ff'}; color: ${style.text || '#581c87'}">
            <div class="max-w-3xl mx-auto text-center">
                <div class="text-6xl mb-6" style="color: ${style.accent || '#a855f7'}; opacity: 0.5;">"</div>
                <blockquote class="text-2xl font-serif italic mb-6 leading-relaxed">
                    ${data.quote || 'Add an inspirational quote here...'}
                </blockquote>
                <div class="text-lg font-semibold" style="color: ${style.accent || '#a855f7'}">
                    — ${data.author || 'Author Name'}
                </div>
            </div>
        </div>
    `
};
