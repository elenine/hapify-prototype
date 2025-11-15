// Signature Component - Shared across multiple greeting card templates
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.signature = {
    name: '✍️ Signature',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="closing" onchange="updatePreview()" placeholder="With love and best wishes">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="name" onchange="updatePreview()" placeholder="Your Name">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" onchange="updatePreview()">
                    <option value="standard">Standard Classic</option>
                    <option value="handwritten">Handwritten Script</option>
                    <option value="formal">Formal Elegant</option>
                    <option value="modern">Modern Badge</option>
                    <option value="elegant">Elegant Flourish</option>
                    <option value="stamp">Signature Stamp</option>
                    <option value="card">Card Style</option>
                    <option value="minimalist">Minimalist Simple</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="bgColor" value="#ffffff" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="textColor" value="#1f2937" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" class="w-full h-10 rounded-lg section-style" data-style="accentColor" value="#10b981" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="align" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bgColor || '#ffffff';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#10b981';
        const align = style.align || 'center';
        const layout = style.layout || 'standard';
        const closing = data.closing || 'With love';
        const name = data.name || 'Your Friend';

        const layouts = {
            standard: `
                <div class="p-8" style="background-color: ${bgColor}; text-align: ${align};">
                    <div class="max-w-lg mx-auto">
                        <p class="text-lg text-gray-700 mb-2">${closing},</p>
                        <p class="text-xl font-semibold" style="color: ${textColor};">${name}</p>
                    </div>
                </div>
            `,
            handwritten: `
                <div class="p-8" style="background-color: ${bgColor}; text-align: ${align};">
                    <div class="max-w-lg mx-auto">
                        <p class="text-xl font-serif italic mb-3" style="color: ${textColor};">${closing},</p>
                        <p class="text-2xl font-serif italic" style="color: ${textColor};">${name}</p>
                    </div>
                </div>
            `,
            formal: `
                <div class="p-8" style="background-color: ${bgColor}; text-align: ${align};">
                    <div class="max-w-lg mx-auto border-t-2 pt-6" style="border-color: ${accentColor};">
                        <p class="text-base uppercase tracking-wide text-gray-600 mb-2">${closing}</p>
                        <p class="text-2xl font-bold" style="color: ${textColor};">${name}</p>
                    </div>
                </div>
            `,
            modern: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto" style="text-align: ${align};">
                        <div class="inline-block px-6 py-4 rounded-xl shadow-lg" style="background-color: ${accentColor}10; border: 2px solid ${accentColor};">
                            <p class="text-sm mb-1 opacity-70" style="color: ${textColor};">${closing}</p>
                            <p class="text-xl font-bold" style="color: ${textColor};">${name}</p>
                        </div>
                    </div>
                </div>
            `,
            elegant: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="inline-block">
                            <div class="w-16 h-1 mx-auto mb-4" style="background: linear-gradient(to right, transparent, ${accentColor}, transparent);"></div>
                            <p class="text-lg italic text-gray-600 mb-2">${closing}</p>
                            <p class="text-2xl font-serif" style="color: ${textColor};">${name}</p>
                            <div class="w-16 h-1 mx-auto mt-4" style="background: linear-gradient(to right, transparent, ${accentColor}, transparent);"></div>
                        </div>
                    </div>
                </div>
            `,
            stamp: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto" style="text-align: ${align};">
                        <div class="inline-block p-6 rounded-lg border-4 border-double shadow-md" style="border-color: ${accentColor}; background-color: ${accentColor}05;">
                            <div class="text-center">
                                <p class="text-xs uppercase tracking-widest mb-2" style="color: ${accentColor};">${closing}</p>
                                <p class="text-xl font-bold" style="color: ${textColor};">${name}</p>
                                <div class="text-2xl mt-2">✍️</div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            card: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-sm mx-auto bg-white rounded-xl p-6 shadow-xl border-l-4" style="border-color: ${accentColor}; text-align: ${align};">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background-color: ${accentColor};">
                                <span class="text-xl">✍️</span>
                            </div>
                            <div class="flex-1">
                                <p class="text-sm text-gray-600">${closing}</p>
                            </div>
                        </div>
                        <p class="text-xl font-bold" style="color: ${textColor};">${name}</p>
                    </div>
                </div>
            `,
            minimalist: `
                <div class="p-8" style="background-color: ${bgColor};">
                    <div class="max-w-lg mx-auto" style="text-align: ${align};">
                        <p class="text-sm text-gray-500 mb-1">${closing}</p>
                        <p class="text-2xl font-light" style="color: ${textColor};">${name}</p>
                        <div class="w-12 h-px mt-2" style="background-color: ${accentColor};"></div>
                    </div>
                </div>
            `
        };

        return layouts[layout] || layouts.standard;
    }
};
