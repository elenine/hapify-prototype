// Skills & Expertise Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.skills = {
                name: '🎓 Skills & Expertise',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Expertise" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Skills (one per line with optional percentage)</label>
                            <textarea placeholder="Web Development - 95%&#10;Mobile Apps - 90%&#10;UI/UX Design - 85%&#10;Cloud Services - 80%" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="skills" oninput="updatePreview()"></textarea>
                            <p class="text-xs text-gray-500 mt-1">Format: Skill Name - Percentage (or just Skill Name)</p>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="bars">Progress Bars</option>
                                <option value="circles">Circular Progress</option>
                                <option value="badges">Badge Style</option>
                                <option value="cards">Card Style</option>
                                <option value="minimal">Minimal List</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'bars';
                    const bgColor = style.bg || '#f9fafb';
                    const accentColor = style.accent || '#2563eb';
                    const title = data.title || 'Our Expertise';
                    const skills = (data.skills || '').split('\n').filter(s => s.trim());

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    if (skills.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                ${headerHtml}
                                <div class="text-center text-gray-500 text-sm">Add skills to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'bars':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${skills.map(skill => {
                                            const match = skill.match(/(.+?)\s*-\s*(\d+)%?/);
                                            if (match) {
                                                const [, name, percentage] = match;
                                                return `
                                                    <div>
                                                        <div class="flex justify-between mb-2">
                                                            <span class="font-medium text-sm">${name.trim()}</span>
                                                            <span class="text-sm font-semibold" style="color: ${accentColor};">${percentage}%</span>
                                                        </div>
                                                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                                                            <div class="h-2.5 rounded-full transition-all duration-500" style="width: ${percentage}%; background: ${accentColor};"></div>
                                                        </div>
                                                    </div>
                                                `;
                                            } else {
                                                return `
                                                    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                                                        <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                                        <span class="font-medium text-sm">${skill.trim()}</span>
                                                    </div>
                                                `;
                                            }
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'circles':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-6">
                                        ${skills.map(skill => {
                                            const match = skill.match(/(.+?)\s*-\s*(\d+)%?/);
                                            const name = match ? match[1].trim() : skill.trim();
                                            const percentage = match ? match[2] : '100';
                                            return `
                                                <div class="text-center">
                                                    <div class="relative w-24 h-24 mx-auto mb-3">
                                                        <svg class="w-24 h-24 transform -rotate-90">
                                                            <circle cx="48" cy="48" r="40" fill="none" stroke="#e5e7eb" stroke-width="8"></circle>
                                                            <circle cx="48" cy="48" r="40" fill="none" stroke="${accentColor}" stroke-width="8"
                                                                    stroke-dasharray="${2 * Math.PI * 40}"
                                                                    stroke-dashoffset="${2 * Math.PI * 40 * (1 - percentage / 100)}"
                                                                    stroke-linecap="round"></circle>
                                                        </svg>
                                                        <div class="absolute inset-0 flex items-center justify-center">
                                                            <span class="text-lg font-bold" style="color: ${accentColor};">${percentage}%</span>
                                                        </div>
                                                    </div>
                                                    <div class="font-semibold text-sm">${name}</div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'badges':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto flex flex-wrap justify-center gap-3">
                                        ${skills.map(skill => {
                                            const match = skill.match(/(.+?)\s*-\s*(\d+)%?/);
                                            const name = match ? match[1].trim() : skill.trim();
                                            const percentage = match ? ` • ${match[2]}%` : '';
                                            return `
                                                <div class="px-4 py-2 rounded-full font-medium text-sm shadow-md text-white" style="background: ${accentColor};">
                                                    ${name}${percentage}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${skills.map(skill => {
                                            const match = skill.match(/(.+?)\s*-\s*(\d+)%?/);
                                            const name = match ? match[1].trim() : skill.trim();
                                            const percentage = match ? match[2] : null;
                                            return `
                                                <div class="bg-white rounded-xl p-4 shadow-md text-center border-t-4" style="border-color: ${accentColor};">
                                                    <div class="text-2xl mb-2">🎓</div>
                                                    <div class="font-semibold text-sm mb-1">${name}</div>
                                                    ${percentage ? `<div class="text-xs font-bold" style="color: ${accentColor};">${percentage}%</div>` : ''}
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
                                        ${skills.map(skill => {
                                            const match = skill.match(/(.+?)\s*-\s*(\d+)%?/);
                                            const name = match ? match[1].trim() : skill.trim();
                                            const percentage = match ? match[2] : null;
                                            return `
                                                <div class="flex items-center justify-between border-b border-gray-200 pb-2">
                                                    <div class="flex items-center gap-2">
                                                        <div class="w-1.5 h-1.5 rounded-full" style="background: ${accentColor};"></div>
                                                        <span class="font-medium text-sm">${name}</span>
                                                    </div>
                                                    ${percentage ? `<span class="text-sm font-semibold" style="color: ${accentColor};">${percentage}%</span>` : ''}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${skills.map(skill => {
                                            const match = skill.match(/(.+?)\s*-\s*(\d+)%?/);
                                            if (match) {
                                                const [, name, percentage] = match;
                                                return `
                                                    <div>
                                                        <div class="flex justify-between mb-2">
                                                            <span class="font-medium text-sm">${name.trim()}</span>
                                                            <span class="text-sm text-gray-600">${percentage}%</span>
                                                        </div>
                                                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                                                            <div class="h-2.5 rounded-full" style="width: ${percentage}%; background: ${accentColor}"></div>
                                                        </div>
                                                    </div>
                                                `;
                                            } else {
                                                return `
                                                    <div class="flex items-center gap-3">
                                                        <div class="w-2 h-2 rounded-full" style="background: ${accentColor}"></div>
                                                        <span class="font-medium text-sm">${skill.trim()}</span>
                                                    </div>
                                                `;
                                            }
                                        }).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
