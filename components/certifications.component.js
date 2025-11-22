// Certifications Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.certifications = {
    name: '🎓 Certifications',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Certifications & Licenses" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Our professional certifications and credentials..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div class="border-t pt-4 mt-4">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-medium text-gray-700">Certifications</h4>
                    <button onclick="addDynamicItem('${sectionId}', 'certifications'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Certification</button>
                </div>
                <div data-items-container="certifications"></div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="badges">Badge Style</option>
                    <option value="list">Simple List</option>
                    <option value="grid">Grid View</option>
                    <option value="timeline">Timeline</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fefce8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#eab308" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#fefce8';
        const accentColor = style.accent || '#eab308';
        const title = data.title || 'Certifications & Licenses';
        const description = data.description || '';

        const certifications = [];
        Object.keys(data).forEach(key => {
            const match = key.match(/^cert-name-(.+)$/);
            if (match) {
                const id = match[1];
                certifications.push({
                    name: data[`cert-name-${id}`],
                    org: data[`cert-org-${id}`],
                    year: data[`cert-year-${id}`]
                });
            }
        });

        const headerHtml = `
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold mb-2">${title}</h2>
                ${description ? `<p class="text-sm text-gray-600">${description}</p>` : ''}
            </div>
        `;

        if (certifications.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    ${headerHtml}
                    <div class="text-center text-gray-500 text-sm">Add certifications to display</div>
                </div>
            `;
        }

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${certifications.map(cert => `
                                <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition border-t-4" style="border-color: ${accentColor};">
                                    <div class="flex items-start gap-3">
                                        <div class="text-3xl">🎓</div>
                                        <div class="flex-1">
                                            <h3 class="text-sm font-bold mb-1">${cert.name || 'Certification'}</h3>
                                            ${cert.org ? `<p class="text-xs text-gray-600 mb-1">${cert.org}</p>` : ''}
                                            ${cert.year ? `<p class="text-xs font-semibold" style="color: ${accentColor};">${cert.year}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'badges':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto grid grid-cols-2 gap-3">
                            ${certifications.map(cert => `
                                <div class="bg-white rounded-xl p-4 shadow-md text-center border-b-4" style="border-color: ${accentColor};">
                                    <div class="text-4xl mb-2">🎓</div>
                                    <h3 class="text-xs font-bold mb-1">${cert.name || 'Certification'}</h3>
                                    ${cert.org ? `<p class="text-xs text-gray-600 mb-1">${cert.org}</p>` : ''}
                                    ${cert.year ? `<p class="text-xs font-semibold" style="color: ${accentColor};">${cert.year}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'list':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-2">
                            ${certifications.map(cert => `
                                <div class="border-l-4 pl-4 py-2" style="border-color: ${accentColor};">
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="text-xl">🎓</span>
                                        <h3 class="text-sm font-bold">${cert.name || 'Certification'}</h3>
                                    </div>
                                    <div class="pl-7">
                                        ${cert.org ? `<p class="text-xs text-gray-600">${cert.org}</p>` : ''}
                                        ${cert.year ? `<p class="text-xs font-semibold" style="color: ${accentColor};">${cert.year}</p>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'grid':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                            ${certifications.map(cert => `
                                <div class="bg-white rounded-lg p-4 shadow-sm text-center">
                                    <div class="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-xl text-white" style="background: ${accentColor};">
                                        🎓
                                    </div>
                                    <h3 class="text-xs font-bold mb-1">${cert.name || 'Certification'}</h3>
                                    ${cert.org ? `<p class="text-xs text-gray-600 mb-1">${cert.org}</p>` : ''}
                                    ${cert.year ? `<p class="text-xs font-semibold" style="color: ${accentColor};">${cert.year}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${certifications.map((cert, idx) => `
                                <div class="flex gap-4">
                                    <div class="flex flex-col items-center">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white flex-shrink-0" style="background: ${accentColor};">
                                            🎓
                                        </div>
                                        ${idx < certifications.length - 1 ? `<div class="w-0.5 flex-1 my-2" style="background: ${accentColor}40;"></div>` : ''}
                                    </div>
                                    <div class="flex-1 pb-6">
                                        <div class="bg-white rounded-lg p-4 shadow-sm">
                                            ${cert.year ? `<div class="text-xs font-bold mb-1" style="color: ${accentColor};">${cert.year}</div>` : ''}
                                            <h3 class="text-sm font-bold mb-1">${cert.name || 'Certification'}</h3>
                                            ${cert.org ? `<p class="text-xs text-gray-600">${cert.org}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${certifications.map(cert => `
                                <div class="bg-white rounded-lg p-4 shadow-md">
                                    <h3 class="text-sm font-bold mb-1">${cert.name || 'Certification'}</h3>
                                    ${cert.org ? `<p class="text-xs text-gray-600 mb-1">${cert.org}</p>` : ''}
                                    ${cert.year ? `<p class="text-xs font-semibold" style="color: ${accentColor};">${cert.year}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
        }
    }
};
