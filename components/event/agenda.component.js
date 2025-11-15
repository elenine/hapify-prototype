// Agenda Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.agenda = {
    name: '📝 Agenda',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Agenda Title</label>
                <input type="text" placeholder="What to Expect" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Agenda Topics (one per line)</label>
                <textarea placeholder="Networking Session&#10;Keynote Presentation&#10;Q&A Panel" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="topics" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="checklist">Checklist - With checkmarks</option>
                    <option value="cards">Cards - Numbered boxes</option>
                    <option value="minimal">Minimal - Simple list</option>
                    <option value="numbered">Numbered - With circles</option>
                    <option value="modern">Modern - Icon based</option>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon/Marker Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="markerStyle" onchange="updatePreview()">
                    <option value="check">Checkmark</option>
                    <option value="bullet">Bullet Point</option>
                    <option value="star">Star</option>
                    <option value="arrow">Arrow</option>
                    <option value="number">Numbers</option>
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
        const layoutStyle = style.layoutStyle || 'checklist';
        const bgColor = style.bg || '#f0fdf4';
        const cardBg = style.cardBg || '#ffffff';
        const accentColor = style.accentColor || '#059669';
        const markerStyle = style.markerStyle || 'check';
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        const getMarker = (index) => {
            const markers = {
                check: '✓',
                bullet: '•',
                star: '⭐',
                arrow: '→',
                number: (index + 1).toString()
            };
            return markers[markerStyle] || markers.check;
        };

        const topics = data.topics ? data.topics.split('\n').filter(topic => topic.trim()) : [];

        const renderItems = () => {
            switch (layoutStyle) {
                case 'checklist':
                    return topics.map((topic, index) => `
                        <div class="flex items-start gap-3 mb-3">
                            <div class="mt-1 font-bold" style="color: ${accentColor};">${getMarker(index)}</div>
                            <div class="text-gray-700">${topic}</div>
                        </div>
                    `).join('');

                case 'cards':
                    return topics.map((topic, index) => `
                        <div class="p-4 mb-3 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 12px; border-left: 4px solid ${accentColor};">
                            <div class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style="background: ${accentColor};">
                                    ${index + 1}
                                </div>
                                <div class="flex-1 text-sm text-gray-700">${topic}</div>
                            </div>
                        </div>
                    `).join('');

                case 'minimal':
                    return topics.map((topic, index) => `
                        <div class="py-2 text-gray-700 border-b border-gray-200 last:border-0">
                            ${topic}
                        </div>
                    `).join('');

                case 'numbered':
                    return topics.map((topic, index) => `
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${shadowMap[shadow]}" style="background: ${accentColor};">
                                ${index + 1}
                            </div>
                            <div class="flex-1 pt-2 text-gray-700">${topic}</div>
                        </div>
                    `).join('');

                case 'modern':
                    return topics.map((topic, index) => `
                        <div class="mb-3">
                            <div class="flex items-center gap-3 p-4 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 12px;">
                                <div class="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold" style="background: ${accentColor};">
                                    ${getMarker(index)}
                                </div>
                                <div class="flex-1 text-sm text-gray-700">${topic}</div>
                            </div>
                        </div>
                    `).join('');

                default:
                    return topics.map(topic => `
                        <div class="flex items-start gap-3 mb-3">
                            <div class="text-green-600 mt-1">✓</div>
                            <div>${topic}</div>
                        </div>
                    `).join('');
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Agenda'}</h2>
                <div class="max-w-md mx-auto">
                    ${topics.length > 0 ? renderItems() : '<p class="text-center text-gray-500">Add agenda topics</p>'}
                </div>
            </div>
        `;
    }`
};
