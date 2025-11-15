// Contact Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.contact = {
    name: '📞 Contact Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                <input type="text" placeholder="Event Coordinator" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="person" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="contact@event.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="email" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="phone" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="cards">Cards - Individual boxes</option>
                    <option value="unified">Unified - Single card</option>
                    <option value="modern">Modern - Icon emphasis</option>
                    <option value="minimal">Minimal - Simple list</option>
                    <option value="buttons">Buttons - Call to action</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="iconStyle" onchange="updatePreview()">
                    <option value="emoji">Emoji</option>
                    <option value="solid">Solid Circle</option>
                    <option value="outline">Outline Circle</option>
                    <option value="none">No Icons</option>
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
        const layoutStyle = style.layoutStyle || 'cards';
        const bgColor = style.bg || '#f0fdf4';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accentColor || '#059669';
        const iconStyle = style.iconStyle || 'emoji';
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        const getIcon = (emoji, type) => {
            switch (iconStyle) {
                case 'emoji':
                    return `<div class="text-2xl">${emoji}</div>`;
                case 'solid':
                    return `<div class="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg" style="background: ${accentColor};">${emoji}</div>`;
                case 'outline':
                    return `<div class="w-12 h-12 rounded-full flex items-center justify-center text-lg border-2" style="color: ${accentColor}; border-color: ${accentColor};">${emoji}</div>`;
                case 'none':
                    return '';
                default:
                    return `<div class="text-2xl">${emoji}</div>`;
            }
        };

        const items = [
            { icon: '👤', label: 'Contact Person', value: data.person, type: 'person' },
            { icon: '📧', label: 'Email', value: data.email, type: 'email' },
            { icon: '📞', label: 'Phone', value: data.phone, type: 'phone' }
        ].filter(item => item.value);

        const renderContent = () => {
            switch (layoutStyle) {
                case 'cards':
                    return items.map(item => `
                        <div class="flex items-center gap-4 p-4 ${shadowMap[shadow]} rounded-lg" style="background: ${cardBg};">
                            ${getIcon(item.icon, item.type)}
                            <div>
                                <div class="text-xs text-gray-500 mb-1">${item.label}</div>
                                <div class="font-medium text-sm">${item.value}</div>
                            </div>
                        </div>
                    `).join('');

                case 'unified':
                    return `
                        <div class="p-6 ${shadowMap[shadow]} rounded-2xl" style="background: ${cardBg};">
                            ${items.map((item, index) => `
                                <div class="flex items-center gap-4 py-3 ${index < items.length - 1 ? 'border-b border-gray-100' : ''}">
                                    ${getIcon(item.icon, item.type)}
                                    <div>
                                        <div class="text-xs font-semibold mb-1" style="color: ${accentColor};">${item.label}</div>
                                        <div class="text-sm text-gray-700">${item.value}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                case 'modern':
                    return items.map(item => `
                        <div class="text-center p-6 ${shadowMap[shadow]} rounded-xl" style="background: ${cardBg};">
                            <div class="flex justify-center mb-3">${getIcon(item.icon, item.type)}</div>
                            <div class="text-xs font-semibold mb-2" style="color: ${accentColor};">${item.label}</div>
                            <div class="text-sm font-medium">${item.value}</div>
                        </div>
                    `).join('');

                case 'minimal':
                    return items.map(item => `
                        <div class="text-center py-3">
                            <div class="text-xs font-semibold mb-2" style="color: ${accentColor};">${item.label}</div>
                            <div class="text-sm text-gray-700">${item.value}</div>
                        </div>
                    `).join('');

                case 'buttons':
                    return items.map(item => {
                        const href = item.type === 'email' ? `mailto:${item.value}` : item.type === 'phone' ? `tel:${item.value}` : '#';
                        return `
                            <a href="${href}" class="block text-center p-4 ${shadowMap[shadow]} rounded-lg font-semibold transition hover:opacity-90" style="background: ${accentColor}; color: white;">
                                <div class="flex items-center justify-center gap-3">
                                    <span class="text-xl">${item.icon}</span>
                                    <span>${item.label}: ${item.value}</span>
                                </div>
                            </a>
                        `;
                    }).join('');

                default:
                    return items.map(item => `
                        <div class="flex items-center gap-4 p-4 bg-white rounded-lg">
                            <div class="text-2xl">${item.icon}</div>
                            <div class="text-sm">${item.value}</div>
                        </div>
                    `).join('');
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">Contact Us</h2>
                <div class="max-w-md mx-auto ${layoutStyle === 'unified' ? '' : 'space-y-4'}">
                    ${items.length > 0 ? renderContent() : '<p class="text-center text-gray-500">Add contact information</p>'}
                </div>
            </div>
        `;
    }
};
