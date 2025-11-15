// Quote Component - Shared across multiple greeting card templates
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quote = {
    name: '💭 Inspirational Quote',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Text</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="quote" rows="3" onchange="updatePreview()" placeholder="Enter an inspirational quote"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Author (Optional)</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="author" onchange="updatePreview()" placeholder="Author name">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic</option>
                    <option value="modern">Modern</option>
                    <option value="elegant">Elegant Box</option>
                    <option value="minimal">Minimal</option>
                    <option value="decorated">Decorated</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="bgColor" value="#f9fafb" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="quoteColor" value="#1f2937" onchange="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bgColor || '#f9fafb';
        const quoteColor = style.quoteColor || '#1f2937';
        const layout = style.layout || 'classic';
        const quote = data.quote || 'Every moment is a fresh beginning.';
        const author = data.author || '';

        if (layout === 'modern') {
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto border-l-4 pl-6" style="border-color: ${quoteColor};">
                        <div class="text-3xl mb-3">💭</div>
                        <blockquote class="text-xl italic mb-3" style="color: ${quoteColor};">"${quote}"</blockquote>
                        ${author ? `<p class="text-gray-600 font-medium">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto bg-white rounded-xl p-8 shadow-lg border-t-4" style="border-color: ${quoteColor};">
                        <div class="text-4xl mb-4 text-center">💭</div>
                        <blockquote class="text-lg italic text-center mb-4" style="color: ${quoteColor};">"${quote}"</blockquote>
                        ${author ? `<p class="text-gray-600 text-center">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <blockquote class="text-2xl font-light mb-4" style="color: ${quoteColor};">"${quote}"</blockquote>
                        ${author ? `<p class="text-gray-500 text-sm">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'decorated') {
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="text-6xl mb-2 opacity-30" style="color: ${quoteColor};">"</div>
                        <blockquote class="text-xl italic mb-2" style="color: ${quoteColor};">${quote}</blockquote>
                        <div class="text-6xl opacity-30" style="color: ${quoteColor};">"</div>
                        ${author ? `<p class="text-gray-600 mt-4">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        } else {
            // Classic layout
            return `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="text-4xl mb-4">💭</div>
                        <blockquote class="text-xl italic mb-3" style="color: ${quoteColor};">"${quote}"</blockquote>
                        ${author ? `<p class="text-gray-600">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        }
    }
};
