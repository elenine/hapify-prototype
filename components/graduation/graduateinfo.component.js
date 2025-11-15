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
                    <option value="minimal-modern">Minimal Modern</option>
                    <option value="split-info">Split Info</option>
                    <option value="gradient-card">Gradient Card</option>
                    <option value="certificate">Certificate Style</option>
                    <option value="stack-cards">Stack Cards</option>
                    <option value="ribbon">Ribbon Style</option>
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

            case 'minimal-modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-2xl mx-auto">
                            <div class="space-y-6">
                                ${data.degree ? `
                                    <div class="group">
                                        <div class="flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-105" style="background: ${accent}08">
                                            <div class="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style="background: ${accent}20">
                                                🎓
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Degree</div>
                                                <div class="font-bold text-lg">${data.degree}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.school ? `
                                    <div class="group">
                                        <div class="flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-105" style="background: ${accent}08">
                                            <div class="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style="background: ${accent}20">
                                                🏫
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">University</div>
                                                <div class="font-bold text-lg">${data.school}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.year ? `
                                    <div class="group">
                                        <div class="flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-105" style="background: ${accent}08">
                                            <div class="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style="background: ${accent}20">
                                                📅
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Class Of</div>
                                                <div class="font-bold text-lg">${data.year}</div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'split-info':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-4xl mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">Academic Credentials</h2>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                ${data.degree ? `
                                    <div class="text-center p-6 rounded-xl ${shadowMap[shadow]}" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%); color: white">
                                        <div class="text-4xl mb-3">🎓</div>
                                        <div class="text-xs font-semibold mb-2 opacity-90">DEGREE</div>
                                        <div class="font-bold">${data.degree}</div>
                                    </div>
                                ` : ''}
                                ${data.school ? `
                                    <div class="text-center p-6 rounded-xl ${shadowMap[shadow]}" style="background: ${accent}15; color: ${text}; border: 2px solid ${accent}">
                                        <div class="text-4xl mb-3">🏫</div>
                                        <div class="text-xs font-semibold mb-2" style="color: ${accent}">UNIVERSITY</div>
                                        <div class="font-bold">${data.school}</div>
                                    </div>
                                ` : ''}
                                ${data.year ? `
                                    <div class="text-center p-6 rounded-xl ${shadowMap[shadow]}" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%); color: white">
                                        <div class="text-4xl mb-3">📅</div>
                                        <div class="text-xs font-semibold mb-2 opacity-90">CLASS OF</div>
                                        <div class="font-bold text-xl">${data.year}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient-card':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-lg mx-auto">
                            <div class="rounded-3xl overflow-hidden ${shadowMap[shadow]}" style="background: linear-gradient(135deg, ${accent} 0%, ${bg} 100%)">
                                <div class="p-8 text-center" style="color: white">
                                    <div class="text-6xl mb-4">🎓</div>
                                    <h2 class="text-2xl font-bold mb-6">Graduate Profile</h2>
                                    <div class="space-y-4">
                                        ${data.degree ? `
                                            <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Degree</div>
                                                <div class="font-bold text-lg">${data.degree}</div>
                                            </div>
                                        ` : ''}
                                        ${data.school ? `
                                            <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">University</div>
                                                <div class="font-bold text-lg">${data.school}</div>
                                            </div>
                                        ` : ''}
                                        ${data.year ? `
                                            <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                                                <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-90">Class Of</div>
                                                <div class="font-bold text-2xl">${data.year}</div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'certificate':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-2xl mx-auto">
                            <div class="border-8 rounded-2xl p-8 ${shadowMap[shadow]} relative" style="border-color: ${accent}">
                                <div class="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 rounded-tl-xl" style="border-color: ${accent}"></div>
                                <div class="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 rounded-tr-xl" style="border-color: ${accent}"></div>
                                <div class="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 rounded-bl-xl" style="border-color: ${accent}"></div>
                                <div class="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 rounded-br-xl" style="border-color: ${accent}"></div>

                                <div class="text-center">
                                    <div class="text-5xl mb-4">🎓</div>
                                    <h2 class="text-2xl font-serif font-bold mb-6" style="color: ${accent}">Academic Achievement</h2>
                                    <div class="space-y-4">
                                        ${data.degree ? `
                                            <div class="border-t border-b py-4" style="border-color: ${accent}33">
                                                <div class="text-xs uppercase tracking-widest mb-2" style="color: ${accent}">Degree Earned</div>
                                                <div class="font-serif font-bold text-xl">${data.degree}</div>
                                            </div>
                                        ` : ''}
                                        ${data.school ? `
                                            <div class="border-t border-b py-4" style="border-color: ${accent}33">
                                                <div class="text-xs uppercase tracking-widest mb-2" style="color: ${accent}">Institution</div>
                                                <div class="font-serif font-bold text-xl">${data.school}</div>
                                            </div>
                                        ` : ''}
                                        ${data.year ? `
                                            <div class="mt-6">
                                                <div class="inline-block px-8 py-3 rounded-full font-bold text-xl" style="background: ${accent}; color: white">
                                                    ${data.year}
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'stack-cards':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-sm mx-auto">
                            <h2 class="text-2xl font-bold text-center mb-8">Graduate Info</h2>
                            <div class="space-y-4">
                                ${data.degree ? `
                                    <div class="transform hover:-translate-y-1 transition-transform">
                                        <div class="p-6 rounded-2xl ${shadowMap[shadow]}" style="background: ${accent}">
                                            <div class="flex items-center gap-4 text-white">
                                                <div class="text-4xl">🎓</div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-80">Degree</div>
                                                    <div class="font-bold text-lg">${data.degree}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.school ? `
                                    <div class="transform hover:-translate-y-1 transition-transform">
                                        <div class="p-6 rounded-2xl ${shadowMap[shadow]}" style="background: ${accent}dd">
                                            <div class="flex items-center gap-4 text-white">
                                                <div class="text-4xl">🏫</div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-80">University</div>
                                                    <div class="font-bold text-lg">${data.school}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.year ? `
                                    <div class="transform hover:-translate-y-1 transition-transform">
                                        <div class="p-6 rounded-2xl ${shadowMap[shadow]}" style="background: ${accent}bb">
                                            <div class="flex items-center gap-4 text-white">
                                                <div class="text-4xl">📅</div>
                                                <div class="flex-1">
                                                    <div class="text-xs font-bold uppercase tracking-wide mb-1 opacity-80">Class Of</div>
                                                    <div class="font-bold text-2xl">${data.year}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'ribbon':
                return `
                    <div class="py-12 px-6" style="background: ${bg}; color: ${text}">
                        <div class="max-w-2xl mx-auto">
                            <div class="relative text-center mb-8">
                                <div class="inline-block px-8 py-4 relative" style="background: ${accent}; color: white">
                                    <h2 class="text-2xl font-bold">Graduate Information</h2>
                                    <div class="absolute top-0 -left-4 w-0 h-0" style="border-top: 28px solid transparent; border-right: 16px solid ${accent}88; border-bottom: 28px solid transparent"></div>
                                    <div class="absolute top-0 -right-4 w-0 h-0" style="border-top: 28px solid transparent; border-left: 16px solid ${accent}88; border-bottom: 28px solid transparent"></div>
                                </div>
                            </div>
                            <div class="space-y-6">
                                ${data.degree ? `
                                    <div class="relative pl-8">
                                        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full" style="background: ${accent}"></div>
                                        <div class="p-4 rounded-r-xl ${shadowMap[shadow]}" style="background: ${accent}10; border-left: 4px solid ${accent}">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Degree Earned</div>
                                            <div class="font-bold text-lg">${data.degree}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.school ? `
                                    <div class="relative pl-8">
                                        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full" style="background: ${accent}"></div>
                                        <div class="p-4 rounded-r-xl ${shadowMap[shadow]}" style="background: ${accent}10; border-left: 4px solid ${accent}">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">University</div>
                                            <div class="font-bold text-lg">${data.school}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.year ? `
                                    <div class="relative pl-8">
                                        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full" style="background: ${accent}"></div>
                                        <div class="p-4 rounded-r-xl ${shadowMap[shadow]}" style="background: ${accent}10; border-left: 4px solid ${accent}">
                                            <div class="text-xs font-bold uppercase tracking-wide mb-1" style="color: ${accent}">Class Of</div>
                                            <div class="font-bold text-2xl">${data.year}</div>
                                        </div>
                                    </div>
                                ` : ''}
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
