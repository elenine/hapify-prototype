// Quote component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.quote = {
    name: '💭 Quote',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Text</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="quote" rows="3" placeholder="Success is not final, failure is not fatal: it is the courage to continue that counts." onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Author (Optional)</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="author" placeholder="Winston Churchill" onchange="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Quote</option>
                    <option value="modern">Modern</option>
                    <option value="elegant">Elegant</option>
                    <option value="bold">Bold</option>
                    <option value="minimal">Minimal</option>
                    <option value="bordered">Bordered</option>
                    <option value="gradient-bg">Gradient Background</option>
                    <option value="callout">Callout</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Quote Marks</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="quoteMarks" onchange="updatePreview()">
                    <option value="true">Show</option>
                    <option value="false">Hide</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const quote = data.quote || 'Success is not final, failure is not fatal: it is the courage to continue that counts.';
        const author = data.author || '';
        const layout = style.layout || 'classic';
        const showMarks = style.quoteMarks !== 'false';

        if (layout === 'classic') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto text-center py-8">
                        ${showMarks ? `<div class="text-6xl mb-4 opacity-30" style="color: ${globalStyles.primaryColor};">"</div>` : ''}
                        <p class="text-2xl italic leading-relaxed mb-6" style="color: ${globalStyles.textColor};">${quote}</p>
                        ${author ? `<p class="text-lg font-semibold" style="color: ${globalStyles.secondaryColor};">— ${author}</p>` : ''}
                        ${showMarks ? `<div class="text-6xl mt-4 opacity-30" style="color: ${globalStyles.primaryColor};">"</div>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
                        <div class="relative">
                            ${showMarks ? `<div class="absolute -top-6 -left-4 text-8xl opacity-20" style="color: ${globalStyles.primaryColor};">"</div>` : ''}
                            <p class="text-xl leading-relaxed italic relative z-10" style="color: ${globalStyles.textColor};">${quote}</p>
                            ${author ? `<p class="text-base font-semibold mt-6 text-right" style="color: ${globalStyles.primaryColor};">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto text-center py-12">
                        <div class="h-1 w-24 mx-auto mb-8" style="background: ${globalStyles.primaryColor};"></div>
                        <p class="text-2xl font-light italic leading-relaxed mb-6" style="color: ${globalStyles.textColor};">${showMarks ? `"${quote}"` : quote}</p>
                        ${author ? `<p class="text-sm uppercase tracking-widest font-semibold" style="color: ${globalStyles.secondaryColor};">${author}</p>` : ''}
                        <div class="h-1 w-24 mx-auto mt-8" style="background: ${globalStyles.primaryColor};"></div>
                    </div>
                </div>
            `;
        } else if (layout === 'bold') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto rounded-3xl p-12 text-center" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                        <p class="text-3xl font-bold leading-relaxed text-white mb-6">${showMarks ? `"${quote}"` : quote}</p>
                        ${author ? `<p class="text-xl font-semibold text-white opacity-90">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto py-8">
                        <div class="border-l-4 pl-6" style="border-color: ${globalStyles.primaryColor};">
                            <p class="text-lg italic leading-relaxed mb-4" style="color: ${globalStyles.textColor};">${showMarks ? `"${quote}"` : quote}</p>
                            ${author ? `<p class="text-sm font-medium" style="color: ${globalStyles.secondaryColor};">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'bordered') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto border-4 rounded-2xl p-10 text-center" style="border-color: ${globalStyles.primaryColor};">
                        <div class="border-2 border-dashed p-8" style="border-color: ${globalStyles.secondaryColor};">
                            ${showMarks ? `<div class="text-5xl mb-4 opacity-40" style="color: ${globalStyles.primaryColor};">❝</div>` : ''}
                            <p class="text-xl italic leading-relaxed mb-4" style="color: ${globalStyles.textColor};">${quote}</p>
                            ${author ? `<p class="text-base font-semibold" style="color: ${globalStyles.primaryColor};">— ${author}</p>` : ''}
                            ${showMarks ? `<div class="text-5xl mt-4 opacity-40" style="color: ${globalStyles.primaryColor};">❞</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'gradient-bg') {
            return `
                <div class="p-6" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}15, ${globalStyles.secondaryColor}15);">
                    <div class="max-w-2xl mx-auto py-12 text-center">
                        <p class="text-2xl italic leading-relaxed mb-6" style="color: ${globalStyles.textColor};">${showMarks ? `"${quote}"` : quote}</p>
                        ${author ? `<p class="text-lg font-semibold" style="color: ${globalStyles.primaryColor};">— ${author}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'callout') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto">
                        <div class="rounded-2xl shadow-lg overflow-hidden">
                            <div class="h-2" style="background: linear-gradient(to right, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                            <div class="p-8 bg-white">
                                <p class="text-lg italic leading-relaxed mb-4" style="color: ${globalStyles.textColor};">${showMarks ? `"${quote}"` : quote}</p>
                                ${author ? `<p class="text-base font-semibold" style="color: ${globalStyles.primaryColor};">— ${author}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            <p class="text-lg italic mb-3" style="color: ${globalStyles.textColor};">${showMarks ? `"${quote}"` : quote}</p>
            ${author ? `<p class="text-sm font-semibold" style="color: ${globalStyles.primaryColor};">— ${author}</p>` : ''}
        </div>`;
    }
};
