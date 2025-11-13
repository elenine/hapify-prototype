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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Progress Bar Color</label>
                            <input type="color" value="#2563eb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="barColor" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const skills = (data.skills || '').split('\n').filter(s => s.trim());
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Expertise'}</h2>
                            <div class="max-w-2xl mx-auto space-y-6">
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
                                                    <div class="h-2.5 rounded-full" style="width: ${percentage}%; background: ${style.barColor || '#2563eb'}"></div>
                                                </div>
                                            </div>
                                        `;
                                    } else {
                                        return `
                                            <div class="flex items-center gap-3">
                                                <div class="w-2 h-2 rounded-full" style="background: ${style.barColor || '#2563eb'}"></div>
                                                <span class="font-medium text-sm">${skill.trim()}</span>
                                            </div>
                                        `;
                                    }
                                }).join('')}
                            </div>
                        </div>
                    `;
                }
            };
