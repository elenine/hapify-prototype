// Graduate Info Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.graduateinfo = {
    name: '👨‍🎓 Graduate Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Degree/Program</label>
                <input type="text" placeholder="Bachelor of Science in Computer Science" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="degree" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">School/University</label>
                <input type="text" placeholder="State University" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="school" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                <input type="text" placeholder="2024" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="year" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="timeline">Timeline Style</option>
                    <option value="badge">Badge Style</option>
                    <option value="elegant">Elegant Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#6366f1';
        const text = style.text || '#1f2937';
        const shadow = style.shadow || 'md';

        const shadowMap = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };

        switch(layout) {
            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-2xl mx-auto">
                            <h2 class="text-2xl font-bold mb-8 text-center">Academic Journey</h2>
                            <div class="relative pl-8 border-l-4" style="border-color: ${accent}">
                                <div class="absolute -left-3 top-0 w-6 h-6 rounded-full" style="background: ${accent}"></div>
                                ${data.degree ? `
                                    <div class="mb-6 pb-6 border-b border-gray-200">
                                        <div class="text-sm font-semibold mb-1" style="color: ${accent}">Degree Earned</div>
                                        <div class="font-semibold text-lg">${data.degree}</div>
                                    </div>
                                ` : ''}
                                ${data.school ? `
                                    <div class="mb-6 pb-6 border-b border-gray-200">
                                        <div class="text-sm font-semibold mb-1" style="color: ${accent}">Institution</div>
                                        <div class="text-lg">${data.school}</div>
                                    </div>
                                ` : ''}
                                ${data.year ? `
                                    <div>
                                        <div class="text-sm font-semibold mb-1" style="color: ${accent}">Graduation Year</div>
                                        <div class="text-lg font-bold">Class of ${data.year}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'badge':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-3xl mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-8">Graduate Credentials</h2>
                            <div class="flex flex-wrap justify-center gap-4">
                                ${data.degree ? `
                                    <div class="px-6 py-4 rounded-full ${shadowMap[shadow]}" style="background: ${accent}; color: white">
                                        <div class="text-xs font-semibold mb-1">DEGREE</div>
                                        <div class="font-bold">${data.degree}</div>
                                    </div>
                                ` : ''}
                                ${data.school ? `
                                    <div class="px-6 py-4 rounded-full ${shadowMap[shadow]}" style="background: ${accent}15; color: ${text}; border: 2px solid ${accent}">
                                        <div class="text-xs font-semibold mb-1" style="color: ${accent}">SCHOOL</div>
                                        <div class="font-bold">${data.school}</div>
                                    </div>
                                ` : ''}
                                ${data.year ? `
                                    <div class="px-6 py-4 rounded-full ${shadowMap[shadow]}" style="background: ${accent}; color: white">
                                        <div class="text-xs font-semibold mb-1">CLASS OF</div>
                                        <div class="font-bold">${data.year}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-lg mx-auto">
                            <div class="border-4 rounded-2xl p-8 ${shadowMap[shadow]}" style="border-color: ${accent}">
                                <div class="text-center mb-8">
                                    <div class="inline-block p-4 rounded-full mb-4" style="background: ${accent}15">
                                        <div class="text-5xl">🎓</div>
                                    </div>
                                    <h2 class="text-2xl font-serif font-bold" style="color: ${accent}">Graduate Information</h2>
                                </div>
                                <div class="space-y-4">
                                    ${data.degree ? `
                                        <div class="text-center pb-4 border-b" style="border-color: ${accent}33">
                                            <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accent}">Degree</div>
                                            <div class="font-semibold text-lg">${data.degree}</div>
                                        </div>
                                    ` : ''}
                                    ${data.school ? `
                                        <div class="text-center pb-4 border-b" style="border-color: ${accent}33">
                                            <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accent}">University</div>
                                            <div class="font-semibold text-lg">${data.school}</div>
                                        </div>
                                    ` : ''}
                                    ${data.year ? `
                                        <div class="text-center">
                                            <div class="text-sm uppercase tracking-wide mb-2" style="color: ${accent}">Class</div>
                                            <div class="font-bold text-2xl" style="color: ${accent}">${data.year}</div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-6">Graduate Information</h2>
                            <div class="p-6 rounded-lg ${shadowMap[shadow]}" style="background: ${accent}15">
                                <div class="text-4xl mb-3">🎓</div>
                                ${data.degree ? `<div class="font-semibold text-lg mb-2">${data.degree}</div>` : ''}
                                ${data.school ? `<div class="mb-2" style="color: ${text}99">${data.school}</div>` : ''}
                                ${data.year ? `<div class="text-sm" style="color: ${text}80">Class of ${data.year}</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
        }
    }`
};
