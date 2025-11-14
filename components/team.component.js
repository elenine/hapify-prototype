// Team Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.team = {
                name: '👥 Team',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Meet Our Team" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Team Members (Name - Role, one per line)</label>
                            <textarea placeholder="John Smith - CEO&#10;Jane Doe - Lead Designer&#10;Mike Johnson - Developer" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="members" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Card Grid</option>
                                <option value="list">List View</option>
                                <option value="minimal">Minimal</option>
                                <option value="modern">Modern Cards</option>
                                <option value="compact">Compact</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'cards';
                    const bgColor = style.bg || '#f9fafb';
                    const accentColor = style.accent || '#3b82f6';
                    const title = data.title || 'Meet Our Team';
                    const members = data.members ? data.members.split('\n').filter(m => m.trim()) : [];

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    if (members.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                ${headerHtml}
                                <div class="text-center text-gray-500 text-sm">Add team members to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${members.map(member => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            return `
                                                <div class="bg-white p-4 rounded-lg shadow-md text-center">
                                                    <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-3" style="background: ${accentColor}20; color: ${accentColor};">
                                                        👤
                                                    </div>
                                                    <div class="font-semibold text-sm">${name || member}</div>
                                                    ${role ? `<div class="text-xs text-gray-600 mt-1">${role}</div>` : ''}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'list':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${members.map(member => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            return `
                                                <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0" style="background: ${accentColor}; color: white;">
                                                        👤
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="font-semibold text-sm">${name || member}</div>
                                                        ${role ? `<div class="text-xs text-gray-600">${role}</div>` : ''}
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-2">
                                        ${members.map(member => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            return `
                                                <div class="flex items-center justify-between border-b border-gray-200 pb-2">
                                                    <div>
                                                        <div class="font-semibold text-sm">${name || member}</div>
                                                        ${role ? `<div class="text-xs text-gray-500">${role}</div>` : ''}
                                                    </div>
                                                    <div class="text-xl">👤</div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${members.map(member => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            return `
                                                <div class="bg-white rounded-xl p-5 shadow-lg border-l-4" style="border-color: ${accentColor};">
                                                    <div class="flex items-center gap-4">
                                                        <div class="w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-white" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}cc);">
                                                            👤
                                                        </div>
                                                        <div class="flex-1">
                                                            <div class="font-bold">${name || member}</div>
                                                            ${role ? `<div class="text-sm mt-1" style="color: ${accentColor};">${role}</div>` : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'compact':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="bg-white rounded-xl p-6 shadow-lg">
                                            <div class="space-y-4">
                                                ${members.map(member => {
                                                    const [name, role] = member.split('-').map(s => s.trim());
                                                    return `
                                                        <div class="flex items-center gap-3">
                                                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-lg" style="background: ${accentColor}20; color: ${accentColor};">
                                                                👤
                                                            </div>
                                                            <div class="flex-1">
                                                                <div class="font-semibold text-sm">${name || member}</div>
                                                                ${role ? `<div class="text-xs text-gray-500">${role}</div>` : ''}
                                                            </div>
                                                        </div>
                                                    `;
                                                }).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${members.map(member => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            return `
                                                <div class="p-4 bg-white rounded-lg text-center">
                                                    <div class="text-3xl mb-2">👤</div>
                                                    <div class="font-semibold">${name || member}</div>
                                                    ${role ? `<div class="text-sm text-gray-600">${role}</div>` : ''}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
