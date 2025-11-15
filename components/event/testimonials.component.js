// Testimonials Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.testimonials = {
    name: '💬 Testimonials',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="What People Say" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Testimonials (format: "Quote" - Name, Title)</label>
                <textarea placeholder='"Best event ever!" - John Doe, Attendee&#10;"Highly recommend!" - Jane Smith, Speaker&#10;"Amazing experience" - Bob Johnson, Sponsor' rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="testimonials" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="cards">Cards - Individual boxes</option>
                    <option value="quotes">Quotes - Large typography</option>
                    <option value="minimal">Minimal - Simple list</option>
                    <option value="modern">Modern - Avatar style</option>
                    <option value="carousel">Carousel - Scrollable</option>
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
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        // Parse testimonials - format: "Quote" - Name, Title
        const testimonials = data.testimonials ? data.testimonials.split('\n').filter(t => t.trim()).map(t => {
            const match = t.match(/"([^"]+)"\s*-\s*([^,]+)(?:,\s*(.+))?/);
            if (match) {
                return {
                    quote: match[1],
                    name: match[2].trim(),
                    title: match[3] ? match[3].trim() : ''
                };
            }
            return { quote: t, name: '', title: '' };
        }) : [];

        const renderTestimonials = () => {
            switch (layoutStyle) {
                case 'cards':
                    return testimonials.map(test => `
                        <div class="p-6 ${shadowMap[shadow]} rounded-xl" style="background: ${cardBg};">
                            <div class="text-4xl mb-3" style="color: ${accentColor};">"</div>
                            <p class="text-gray-700 italic mb-4">${test.quote}</p>
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accentColor};">
                                    ${test.name ? test.name[0] : '?'}
                                </div>
                                <div>
                                    <div class="font-semibold">${test.name || 'Anonymous'}</div>
                                    ${test.title ? `<div class="text-xs text-gray-500">${test.title}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('');

                case 'quotes':
                    return testimonials.map(test => `
                        <div class="text-center p-6 ${shadowMap[shadow]} rounded-xl" style="background: ${cardBg};">
                            <div class="text-6xl mb-4" style="color: ${accentColor};">"</div>
                            <p class="text-xl font-light italic text-gray-700 mb-6">${test.quote}</p>
                            <div class="font-bold text-lg" style="color: ${accentColor};">${test.name || 'Anonymous'}</div>
                            ${test.title ? `<div class="text-sm text-gray-600">${test.title}</div>` : ''}
                        </div>
                    `).join('');

                case 'minimal':
                    return testimonials.map(test => `
                        <div class="py-4 border-b border-gray-200 last:border-0">
                            <p class="text-gray-700 italic mb-2">"${test.quote}"</p>
                            <div class="text-sm">
                                <span class="font-semibold" style="color: ${accentColor};">— ${test.name || 'Anonymous'}</span>
                                ${test.title ? `<span class="text-gray-500">, ${test.title}</span>` : ''}
                            </div>
                        </div>
                    `).join('');

                case 'modern':
                    return testimonials.map(test => `
                        <div class="relative p-6 ${shadowMap[shadow]} rounded-2xl overflow-hidden" style="background: ${cardBg};">
                            <div class="absolute top-0 right-0 text-8xl opacity-10" style="color: ${accentColor};">"</div>
                            <div class="relative z-10">
                                <p class="text-gray-700 mb-4">${test.quote}</p>
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: ${accentColor};">
                                        ${test.name ? test.name[0] : '?'}
                                    </div>
                                    <div>
                                        <div class="font-semibold text-sm">${test.name || 'Anonymous'}</div>
                                        ${test.title ? `<div class="text-xs text-gray-500">${test.title}</div>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('');

                case 'carousel':
                    return `
                        <div class="flex gap-6 overflow-x-auto pb-4 px-4" style="scroll-snap-type: x mandatory;">
                            ${testimonials.map(test => `
                                <div class="flex-shrink-0 w-80 p-6 ${shadowMap[shadow]} rounded-xl" style="scroll-snap-align: start; background: ${cardBg};">
                                    <div class="text-4xl mb-3" style="color: ${accentColor};">"</div>
                                    <p class="text-gray-700 italic mb-4">${test.quote}</p>
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accentColor};">
                                            ${test.name ? test.name[0] : '?'}
                                        </div>
                                        <div>
                                            <div class="font-semibold text-sm">${test.name || 'Anonymous'}</div>
                                            ${test.title ? `<div class="text-xs text-gray-500">${test.title}</div>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `;

                default:
                    return '<p class="text-center text-gray-500">Add testimonials</p>';
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'What People Say'}</h2>
                <div class="max-w-3xl mx-auto ${layoutStyle === 'carousel' ? '' : 'space-y-6'}">
                    ${testimonials.length > 0 ? renderTestimonials() : '<p class="text-center text-gray-500">Add testimonials (format: "Quote" - Name, Title)</p>'}
                </div>
            </div>
        `;
    }
};
