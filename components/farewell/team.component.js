// Team/Colleagues Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.team = {
    name: '👥 Team & Colleagues',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Meet the Amazing Team" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="The wonderful colleagues who made every day special..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Team Members</label>
                <div class="text-xs text-gray-500 mb-2">Format: Name | Role/Title (one per line)</div>
                <textarea placeholder="Sarah Johnson | Marketing Director&#10;Michael Chen | Senior Developer&#10;Emily Rodriguez | Creative Lead&#10;David Park | Operations Manager&#10;Lisa Thompson | HR Specialist" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 font-mono text-sm section-data" data-field="members" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">Use | to separate name and role</div>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="grid">Grid View</option>
                    <option value="list">List View</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'grid';
        const members = data.members ? data.members.split('\n').filter(item => item.trim()) : [];

        const parsedMembers = members.map(item => {
            const parts = item.split('|');
            if (parts.length >= 2) {
                return {
                    name: parts[0].trim(),
                    role: parts[1].trim()
                };
            }
            return {
                name: item.trim(),
                role: ''
            };
        });

        if (layout === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">👥</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Meet the Amazing Team'}</h2>
                            ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                        </div>
                        <div class="space-y-3">
                            ${parsedMembers.map((member, index) => `
                                <div class="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                        ${member.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div class="flex-1">
                                        <div class="font-semibold text-gray-900">${member.name}</div>
                                        ${member.role ? `<div class="text-sm text-gray-600">${member.role}</div>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">👥</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Meet the Amazing Team'}</h2>
                        ${data.description ? `<p class="text-gray-600 mt-2">${data.description}</p>` : ''}
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        ${parsedMembers.map((member, index) => `
                            <div class="bg-white rounded-xl p-5 shadow-sm text-center hover:shadow-md transition">
                                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3">
                                    ${member.name.charAt(0).toUpperCase()}
                                </div>
                                <div class="font-semibold text-gray-900 text-sm mb-1">${member.name}</div>
                                ${member.role ? `<div class="text-xs text-gray-600">${member.role}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
