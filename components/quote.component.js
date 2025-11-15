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
                    <option value="classic">Classic Center</option>
                    <option value="modern">Modern Side</option>
                    <option value="elegant">Elegant Box</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="decorated">Decorated Marks</option>
                    <option value="bubble">Speech Bubble</option>
                    <option value="bordered">Decorative Border</option>
                    <option value="spotlight">Spotlight Focus</option>
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
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="accentColor" value="#8b5cf6" onchange="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bgColor || '#f9fafb';
        const quoteColor = style.quoteColor || '#1f2937';
        const accentColor = style.accentColor || '#8b5cf6';
        const layout = style.layout || 'classic';
        const quote = data.quote || 'Every moment is a fresh beginning.';
        const author = data.author || '';

        const layouts = {
            classic: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="text-4xl mb-4">💭</div>
                        <blockquote class="text-xl italic mb-3" style="color: ${quoteColor};">"${quote}"</blockquote>
                        ${author ? `<p class="text-gray-600">— ${author}</p>` : ''}
                    </div>
                </div>
            `,
            modern: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto border-l-4 pl-6" style="border-color: ${accentColor};">
                        <div class="text-3xl mb-3" style="color: ${accentColor};">💭</div>
                        <blockquote class="text-xl italic mb-3" style="color: ${quoteColor};">"${quote}"</blockquote>
                        ${author ? `<p class="text-gray-600 font-medium">— ${author}</p>` : ''}
                    </div>
                </div>
            `,
            elegant: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto bg-white rounded-xl p-8 shadow-lg border-t-4" style="border-color: ${accentColor};">
                        <div class="text-4xl mb-4 text-center" style="color: ${accentColor};">💭</div>
                        <blockquote class="text-lg italic text-center mb-4" style="color: ${quoteColor};">"${quote}"</blockquote>
                        ${author ? `<p class="text-gray-600 text-center">— ${author}</p>` : ''}
                    </div>
                </div>
            `,
            minimal: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <blockquote class="text-2xl font-light mb-4" style="color: ${quoteColor};">"${quote}"</blockquote>
                        ${author ? `<p class="text-gray-500 text-sm">— ${author}</p>` : ''}
                    </div>
                </div>
            `,
            decorated: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="text-6xl mb-2 opacity-30" style="color: ${accentColor};">"</div>
                        <blockquote class="text-xl italic mb-2" style="color: ${quoteColor};">${quote}</blockquote>
                        <div class="text-6xl opacity-30" style="color: ${accentColor};">"</div>
                        ${author ? `<p class="text-gray-600 mt-4">— ${author}</p>` : ''}
                    </div>
                </div>
            `,
            bubble: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="relative bg-white rounded-3xl p-8 shadow-xl" style="border: 3px solid ${accentColor};">
                            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full" style="background-color: ${accentColor};">
                                <span class="text-2xl">💭</span>
                            </div>
                            <div class="pt-4 text-center">
                                <blockquote class="text-lg italic mb-3" style="color: ${quoteColor};">"${quote}"</blockquote>
                                ${author ? `<p class="font-medium" style="color: ${accentColor};">— ${author}</p>` : ''}
                            </div>
                            <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45" style="background-color: ${accentColor};"></div>
                        </div>
                    </div>
                </div>
            `,
            bordered: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto relative">
                        <div class="absolute -top-2 -left-2 text-3xl" style="color: ${accentColor};">💭</div>
                        <div class="absolute -top-2 -right-2 text-3xl" style="color: ${accentColor};">💭</div>
                        <div class="absolute -bottom-2 -left-2 text-3xl" style="color: ${accentColor};">💭</div>
                        <div class="absolute -bottom-2 -right-2 text-3xl" style="color: ${accentColor};">💭</div>
                        <div class="border-4 rounded-2xl p-8 text-center" style="border-color: ${accentColor};">
                            <blockquote class="text-xl italic mb-3" style="color: ${quoteColor};">"${quote}"</blockquote>
                            ${author ? `<div class="w-16 h-1 mx-auto my-4" style="background-color: ${accentColor};"></div><p class="text-gray-600">— ${author}</p>` : ''}
                        </div>
                    </div>
                </div>
            `,
            spotlight: `
                <div class="p-8 relative overflow-hidden" style="background-color: ${bgColor};">
                    <div class="absolute inset-0 flex items-center justify-center opacity-5">
                        <div class="text-[15rem]" style="color: ${accentColor};">💭</div>
                    </div>
                    <div class="max-w-lg mx-auto relative z-10">
                        <div class="bg-white bg-opacity-90 rounded-2xl p-8 shadow-2xl">
                            <div class="text-center">
                                <div class="inline-block mb-6 p-4 rounded-full" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}10);">
                                    <span class="text-4xl">💭</span>
                                </div>
                                <blockquote class="text-xl italic leading-relaxed mb-4" style="color: ${quoteColor};">"${quote}"</blockquote>
                                ${author ? `<p class="font-semibold" style="color: ${accentColor};">— ${author}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `
        };

        return layouts[layout] || layouts.classic;
    }
};
