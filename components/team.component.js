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
                                <option value="gradient">Gradient Cards</option>
                                <option value="badge">Badge Style</option>
                                <option value="floating">Floating Avatar</option>
                                <option value="stacked-cards">Stacked Cards</option>
                                <option value="circular-grid">Circular Avatar Grid</option>
                                <option value="timeline-view">Timeline View</option>
                                <option value="split-design">Split Alternating</option>
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
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-none">Sharp</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="sm">Subtle</option>
                                <option value="md">Medium</option>
                                <option value="lg">Bold</option>
                                <option value="xl">Extra Bold</option>
                                <option value="2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'cards';
                    const bgColor = style.bg || '#f9fafb';
                    const accentColor = style.accent || '#3b82f6';
                    const secondaryColor = style.secondary || '#10b981';
                    const shadow = style.shadow || 'md';
                    const shadowClass = `shadow-${shadow}`;
                    const radius = style.radius || 'rounded-lg';
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

                        case 'gradient':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${members.map((member, idx) => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            const isEven = idx % 2 === 0;
                                            const gradientColor = isEven ? `linear-gradient(135deg, ${accentColor}, ${secondaryColor})` : `linear-gradient(135deg, ${secondaryColor}, ${accentColor})`;
                                            return `
                                                <div class="${radius} ${shadowClass} overflow-hidden p-4 text-center hover:shadow-2xl transition" style="background: ${gradientColor};">
                                                    <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-3 bg-white bg-opacity-20">
                                                        👤
                                                    </div>
                                                    <div class="font-semibold text-sm text-white">${name || member}</div>
                                                    ${role ? `<div class="text-xs text-white opacity-90 mt-1">${role}</div>` : ''}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'badge':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${members.map((member, idx) => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            return `
                                                <div class="relative">
                                                    <div class="bg-white ${radius} ${shadowClass} p-4 text-center hover:shadow-2xl transition">
                                                        <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-3" style="background: ${accentColor}20; color: ${accentColor};">
                                                            👤
                                                        </div>
                                                        <div class="font-semibold text-sm">${name || member}</div>
                                                        ${role ? `<div class="text-xs text-gray-600 mt-1">${role}</div>` : ''}
                                                    </div>
                                                    <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${shadowClass}" style="background: linear-gradient(135deg, ${accentColor}, ${secondaryColor});">
                                                        ${idx + 1}
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${members.map((member, idx) => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            const isEven = idx % 2 === 0;
                                            const color = isEven ? accentColor : secondaryColor;
                                            return `
                                                <div class="relative">
                                                    <div class="bg-white ${radius} ${shadowClass} p-4 pl-20 hover:shadow-2xl transition">
                                                        <div class="font-semibold">${name || member}</div>
                                                        ${role ? `<div class="text-sm mt-1" style="color: ${color};">${role}</div>` : ''}
                                                    </div>
                                                    <div class="absolute -left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-3xl text-white ${shadowClass}" style="background: ${color};">
                                                        👤
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'stacked-cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto relative" style="min-height: ${members.length * 100}px;">
                                        ${members.map((member, idx) => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            const rotation = idx % 2 === 0 ? -2 : 2;
                                            const color = idx % 2 === 0 ? accentColor : secondaryColor;
                                            return `
                                                <div class="absolute left-0 right-0 bg-white ${radius} ${shadowClass} p-6 transform transition-all hover:scale-105 hover:z-10"
                                                     style="top: ${idx * 80}px; transform: rotate(${rotation}deg); border-top: 4px solid ${color};">
                                                    <div class="flex items-center gap-4">
                                                        <div class="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style="background: linear-gradient(135deg, ${color}, ${color}dd); color: white;">
                                                            👤
                                                        </div>
                                                        <div class="flex-1">
                                                            <div class="font-bold text-gray-800">${name || member}</div>
                                                            ${role ? `<div class="text-sm text-gray-600 mt-1">${role}</div>` : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;

                        case 'circular-grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="flex flex-wrap justify-center gap-6">
                                            ${members.map((member, idx) => {
                                                const [name, role] = member.split('-').map(s => s.trim());
                                                const color = idx % 2 === 0 ? accentColor : secondaryColor;
                                                return `
                                                    <div class="text-center">
                                                        <div class="relative inline-block mb-3">
                                                            <div class="w-20 h-20 rounded-full flex items-center justify-center text-4xl ${shadowClass}" style="background: linear-gradient(135deg, ${color}, ${color}dd); color: white;">
                                                                👤
                                                            </div>
                                                            <div class="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${shadowClass}" style="background: ${color}dd; color: white;">
                                                                ${idx + 1}
                                                            </div>
                                                        </div>
                                                        <div class="font-bold text-sm text-gray-800">${name || member}</div>
                                                        ${role ? `<div class="text-xs text-gray-600 mt-1">${role}</div>` : ''}
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'timeline-view':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="relative pl-12">
                                            <div class="absolute left-5 top-0 bottom-0 w-1 rounded-full" style="background: linear-gradient(to bottom, ${accentColor}, ${secondaryColor});"></div>
                                            <div class="space-y-8">
                                                ${members.map((member, idx) => {
                                                    const [name, role] = member.split('-').map(s => s.trim());
                                                    const color = idx % 2 === 0 ? accentColor : secondaryColor;
                                                    return `
                                                        <div class="relative">
                                                            <div class="absolute -left-[3.2rem] top-2 w-12 h-12 rounded-full border-4 border-white ${shadowClass} flex items-center justify-center text-xl" style="background: ${color}; color: white;">
                                                                👤
                                                            </div>
                                                            <div class="bg-white ${radius} ${shadowClass} p-5 ml-2 border-l-4" style="border-color: ${color};">
                                                                <div class="flex items-center justify-between mb-2">
                                                                    <div class="font-bold text-gray-800">${name || member}</div>
                                                                    <div class="text-xs px-2 py-1 rounded-full text-white font-semibold" style="background: ${color};">
                                                                        #${idx + 1}
                                                                    </div>
                                                                </div>
                                                                ${role ? `<div class="text-sm text-gray-600">${role}</div>` : ''}
                                                            </div>
                                                        </div>
                                                    `;
                                                }).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'split-design':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${members.map((member, idx) => {
                                            const [name, role] = member.split('-').map(s => s.trim());
                                            const isEven = idx % 2 === 0;
                                            const color = isEven ? accentColor : secondaryColor;
                                            return `
                                                <div class="flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-4">
                                                    <div class="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ${shadowClass}" style="background: linear-gradient(135deg, ${color}, ${color}dd); color: white;">
                                                        👤
                                                    </div>
                                                    <div class="flex-1 bg-white ${radius} ${shadowClass} p-4 ${isEven ? 'text-left' : 'text-right'}">
                                                        <div class="font-bold text-gray-800">${name || member}</div>
                                                        ${role ? `<div class="text-sm mt-1" style="color: ${color};">${role}</div>` : ''}
                                                        <div class="mt-2 text-xs text-gray-500">Team Member #${idx + 1}</div>
                                                    </div>
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
