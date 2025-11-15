// Team Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.team = {
    name: '👥 Team/Organizers',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Team" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Team Members (format: Name | Role | Bio, one per line)</label>
                <textarea placeholder="Sarah Johnson | Event Director | Leading our team with 10+ years experience&#10;Mike Chen | Technical Lead | Expert in event technology&#10;Emma Davis | Marketing Manager | Creative marketing professional" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="members" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="grid">Grid - Profile cards</option>
                    <option value="cards">Cards - Detailed boxes</option>
                    <option value="minimal">Minimal - Simple list</option>
                    <option value="modern">Modern - Avatar emphasis</option>
                    <option value="compact">Compact - Name & role</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Avatar Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="avatarStyle" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="square">Square</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">No Shadow</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'grid';
        const bgColor = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#f9fafb';
        const accentColor = style.accentColor || '#059669';
        const avatarStyle = style.avatarStyle || 'circle';
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        const avatarMap = {
            circle: 'rounded-full',
            rounded: 'rounded-2xl',
            square: 'rounded-none'
        };

        // Parse team members - format: Name | Role | Bio
        const members = data.members ? data.members.split('\n').filter(m => m.trim()).map(m => {
            const parts = m.split('|').map(p => p.trim());
            return {
                name: parts[0] || 'Team Member',
                role: parts[1] || 'Role',
                bio: parts[2] || ''
            };
        }) : [];

        const renderMembers = () => {
            switch (layoutStyle) {
                case 'grid':
                    return `
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            ${members.map(member => `
                                <div class="text-center p-4 ${shadowMap[shadow]} rounded-xl" style="background: ${cardBg};">
                                    <div class="w-20 h-20 ${avatarMap[avatarStyle]} mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold" style="background: ${accentColor};">
                                        ${member.name[0]}
                                    </div>
                                    <div class="font-semibold mb-1">${member.name}</div>
                                    <div class="text-xs mb-2" style="color: ${accentColor};">${member.role}</div>
                                    ${member.bio ? `<div class="text-xs text-gray-600 leading-relaxed">${member.bio}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'cards':
                    return members.map(member => `
                        <div class="flex gap-4 p-6 ${shadowMap[shadow]} rounded-xl mb-4" style="background: ${cardBg};">
                            <div class="w-16 h-16 ${avatarMap[avatarStyle]} flex-shrink-0 flex items-center justify-center text-white text-xl font-bold" style="background: ${accentColor};">
                                ${member.name[0]}
                            </div>
                            <div class="flex-1">
                                <div class="font-bold text-lg">${member.name}</div>
                                <div class="text-sm mb-2" style="color: ${accentColor};">${member.role}</div>
                                ${member.bio ? `<div class="text-sm text-gray-600 leading-relaxed">${member.bio}</div>` : ''}
                            </div>
                        </div>
                    `).join('');

                case 'minimal':
                    return members.map(member => `
                        <div class="text-center py-4 border-b border-gray-200 last:border-0">
                            <div class="font-semibold">${member.name}</div>
                            <div class="text-sm text-gray-600">${member.role}</div>
                        </div>
                    `).join('');

                case 'modern':
                    return `
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            ${members.map(member => `
                                <div class="p-6 ${shadowMap[shadow]} rounded-2xl relative overflow-hidden" style="background: ${cardBg};">
                                    <div class="absolute top-0 right-0 w-24 h-24 rounded-full -mr-12 -mt-12" style="background: ${accentColor}20;"></div>
                                    <div class="relative z-10 flex items-center gap-4">
                                        <div class="w-16 h-16 ${avatarMap[avatarStyle]} flex-shrink-0 flex items-center justify-center text-white text-xl font-bold ${shadowMap[shadow]}" style="background: ${accentColor};">
                                            ${member.name[0]}
                                        </div>
                                        <div>
                                            <div class="font-bold">${member.name}</div>
                                            <div class="text-sm" style="color: ${accentColor};">${member.role}</div>
                                        </div>
                                    </div>
                                    ${member.bio ? `<div class="mt-4 text-sm text-gray-600">${member.bio}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'compact':
                    return `
                        <div class="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
                            ${members.map(member => `
                                <div class="flex items-center gap-3 ${shadowMap[shadow]} px-6 py-3 rounded-full" style="background: ${cardBg};">
                                    <div class="w-10 h-10 ${avatarMap[avatarStyle]} flex items-center justify-center text-white text-sm font-bold" style="background: ${accentColor};">
                                        ${member.name[0]}
                                    </div>
                                    <div>
                                        <div class="font-semibold text-sm">${member.name}</div>
                                        <div class="text-xs text-gray-600">${member.role}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                default:
                    return '<p class="text-center text-gray-500">Add team members</p>';
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Team'}</h2>
                <div class="${layoutStyle === 'cards' || layoutStyle === 'minimal' ? 'max-w-2xl mx-auto' : ''}">
                    ${members.length > 0 ? renderMembers() : '<p class="text-center text-gray-500">Add team members (format: Name | Role | Bio)</p>'}
                </div>
            </div>
        `;
    }
};
