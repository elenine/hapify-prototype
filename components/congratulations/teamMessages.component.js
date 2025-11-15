// Team Messages component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.teamMessages = {
    name: '👥 Team Messages',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="Messages from the Team" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message 1 - Name</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="name1" placeholder="Sarah Johnson" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message 1 - Text</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="message1" rows="2" placeholder="So proud of your achievement!" onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message 2 - Name</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="name2" placeholder="Michael Chen" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message 2 - Text</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="message2" rows="2" placeholder="You truly deserve this!" onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message 3 - Name</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="name3" placeholder="Emily Rodriguez" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message 3 - Text</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="message3" rows="2" placeholder="Congratulations on this milestone!" onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Message Cards</option>
                    <option value="bubbles">Speech Bubbles</option>
                    <option value="quotes">Quote Style</option>
                    <option value="grid">Grid Layout</option>
                    <option value="stacked">Stacked</option>
                    <option value="alternating">Alternating</option>
                    <option value="badges">Badge Style</option>
                    <option value="modern">Modern Blocks</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Avatar Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="avatarStyle" onchange="updatePreview()">
                    <option value="initials">Show Initials</option>
                    <option value="icon">Show Icon</option>
                    <option value="none">No Avatar</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const title = data.title || 'Messages from the Team';
        const name1 = data.name1 || '';
        const message1 = data.message1 || '';
        const name2 = data.name2 || '';
        const message2 = data.message2 || '';
        const name3 = data.name3 || '';
        const message3 = data.message3 || '';
        const layout = style.layout || 'cards';
        const avatarStyle = style.avatarStyle || 'initials';

        const messages = [
            { name: name1, message: message1 },
            { name: name2, message: message2 },
            { name: name3, message: message3 }
        ].filter(m => m.name && m.message);

        if (messages.length === 0) {
            return `<div class="p-6 text-center opacity-50" style="color: ${globalStyles.textColor};">
                <p>Add team messages to display here</p>
            </div>`;
        }

        const getInitials = (name) => {
            return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        };

        const avatarColors = [globalStyles.primaryColor, globalStyles.secondaryColor, globalStyles.primaryColor];

        if (layout === 'cards') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="space-y-6">
                            ${messages.map((m, idx) => `
                                <div class="bg-white rounded-2xl shadow-xl p-6">
                                    <div class="flex items-start gap-4">
                                        ${avatarStyle !== 'none' ? `
                                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: ${avatarColors[idx]};">
                                                ${avatarStyle === 'initials' ? getInitials(m.name) : '👤'}
                                            </div>
                                        ` : ''}
                                        <div class="flex-1">
                                            <p class="font-bold text-lg mb-2" style="color: ${globalStyles.primaryColor};">${m.name}</p>
                                            <p class="text-base leading-relaxed" style="color: ${globalStyles.textColor};">${m.message}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'bubbles') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="space-y-8">
                            ${messages.map((m, idx) => `
                                <div class="${idx % 2 === 0 ? 'text-left' : 'text-right'}">
                                    <div class="inline-block max-w-md">
                                        <div class="flex items-start gap-3 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}">
                                            ${avatarStyle !== 'none' ? `
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: ${avatarColors[idx]};">
                                                    ${avatarStyle === 'initials' ? getInitials(m.name) : '👤'}
                                                </div>
                                            ` : ''}
                                            <div>
                                                <p class="font-semibold text-sm mb-1" style="color: ${globalStyles.primaryColor};">${m.name}</p>
                                                <div class="rounded-2xl p-4 shadow-md" style="background: ${idx % 2 === 0 ? globalStyles.primaryColor + '20' : globalStyles.secondaryColor + '20'};">
                                                    <p class="text-base" style="color: ${globalStyles.textColor};">${m.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'quotes') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="space-y-8">
                            ${messages.map((m, idx) => `
                                <div class="relative pl-8">
                                    <div class="absolute left-0 top-0 text-5xl opacity-20" style="color: ${globalStyles.primaryColor};">❝</div>
                                    <p class="text-lg italic mb-3 leading-relaxed" style="color: ${globalStyles.textColor};">${m.message}</p>
                                    <div class="flex items-center gap-3">
                                        ${avatarStyle !== 'none' ? `
                                            <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: ${avatarColors[idx]};">
                                                ${avatarStyle === 'initials' ? getInitials(m.name) : '👤'}
                                            </div>
                                        ` : ''}
                                        <p class="font-semibold" style="color: ${globalStyles.secondaryColor};">— ${m.name}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'grid') {
            return `
                <div class="p-6">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="grid md:grid-cols-${messages.length === 2 ? '2' : '3'} gap-6">
                            ${messages.map((m, idx) => `
                                <div class="rounded-2xl p-6 shadow-lg text-center" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}15, ${globalStyles.secondaryColor}15);">
                                    ${avatarStyle !== 'none' ? `
                                        <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-xl font-bold mb-4" style="background: ${avatarColors[idx]};">
                                            ${avatarStyle === 'initials' ? getInitials(m.name) : '👤'}
                                        </div>
                                    ` : ''}
                                    <p class="font-bold text-lg mb-3" style="color: ${globalStyles.primaryColor};">${m.name}</p>
                                    <p class="text-base" style="color: ${globalStyles.textColor};">${m.message}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'stacked') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="relative">
                            ${messages.map((m, idx) => `
                                <div class="mb-4 ${idx > 0 ? '-mt-2' : ''} transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}">
                                    <div class="bg-white rounded-xl shadow-xl p-6 border-t-4" style="border-color: ${avatarColors[idx]};">
                                        <div class="flex items-center gap-3 mb-3">
                                            ${avatarStyle !== 'none' ? `
                                                <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style="background: ${avatarColors[idx]};">
                                                    ${avatarStyle === 'initials' ? getInitials(m.name) : '👤'}
                                                </div>
                                            ` : ''}
                                            <p class="font-bold text-lg" style="color: ${globalStyles.primaryColor};">${m.name}</p>
                                        </div>
                                        <p class="text-base" style="color: ${globalStyles.textColor};">${m.message}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'alternating') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="space-y-6">
                            ${messages.map((m, idx) => `
                                <div class="flex items-start gap-4 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}">
                                    ${avatarStyle !== 'none' ? `
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg" style="background: ${avatarColors[idx]};">
                                            ${avatarStyle === 'initials' ? getInitials(m.name) : '👤'}
                                        </div>
                                    ` : ''}
                                    <div class="flex-1 bg-white rounded-2xl shadow-md p-6">
                                        <p class="font-bold text-lg mb-2" style="color: ${globalStyles.primaryColor};">${m.name}</p>
                                        <p class="text-base" style="color: ${globalStyles.textColor};">${m.message}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'badges') {
            return `
                <div class="p-6" style="background: linear-gradient(to bottom, ${globalStyles.primaryColor}10, transparent, ${globalStyles.secondaryColor}10);">
                    <div class="max-w-3xl mx-auto py-8">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-6">
                            ${messages.map((m, idx) => `
                                <div class="text-center max-w-xs">
                                    <div class="relative inline-block mb-4">
                                        ${avatarStyle !== 'none' ? `
                                            <div class="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl" style="background: ${avatarColors[idx]};">
                                                ${avatarStyle === 'initials' ? getInitials(m.name) : '👤'}
                                            </div>
                                        ` : ''}
                                    </div>
                                    <p class="font-bold text-lg mb-2" style="color: ${globalStyles.primaryColor};">${m.name}</p>
                                    <p class="text-base" style="color: ${globalStyles.textColor};">${m.message}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold mb-8 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="space-y-1">
                            ${messages.map((m, idx) => `
                                <div class="p-6 rounded-xl" style="background: ${idx % 2 === 0 ? globalStyles.primaryColor + '15' : globalStyles.secondaryColor + '15'};">
                                    <div class="flex items-start gap-4">
                                        ${avatarStyle !== 'none' ? `
                                            <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold shadow-md" style="background: ${avatarColors[idx]};">
                                                ${avatarStyle === 'initials' ? getInitials(m.name) : '👤'}
                                            </div>
                                        ` : ''}
                                        <div class="flex-1">
                                            <p class="font-bold text-base mb-1" style="color: ${globalStyles.primaryColor};">${m.name}</p>
                                            <p class="text-base" style="color: ${globalStyles.textColor};">${m.message}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            <h3 class="text-2xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${title}</h3>
            ${messages.map(m => `
                <div class="mb-4">
                    <p class="font-semibold" style="color: ${globalStyles.primaryColor};">${m.name}</p>
                    <p style="color: ${globalStyles.textColor};">${m.message}</p>
                </div>
            `).join('')}
        </div>`;
    }
};
