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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const members = data.members ? data.members.split('\n').filter(m => m.trim()) : [];
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Meet Our Team'}</h2>
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
                                ${members.length === 0 ? '<div class="text-center text-gray-500 text-sm">Add team members to display</div>' : ''}
                            </div>
                        </div>
                    `;
                }
            };
