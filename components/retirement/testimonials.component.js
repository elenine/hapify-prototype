// Testimonials/Tributes Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.testimonials = {
    name: '💬 Testimonials & Tributes',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Words of Appreciation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Testimonials (format: Name | Role | Message - one per line)</label>
                <textarea placeholder="John Smith | CEO | Your leadership inspired us all&#10;Jane Doe | Colleague | Will miss your guidance&#10;Team Alpha | Development Team | Thank you for mentoring us" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="testimonials" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Format: Name | Role | Message</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const testimonials = data.testimonials ? data.testimonials.split('\n').filter(t => t.trim()).map(testimonial => {
            const parts = testimonial.split('|').map(p => p.trim());
            return {
                name: parts[0] || '',
                role: parts[1] || '',
                message: parts[2] || ''
            };
        }) : [];

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ecfeff'}">
                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Appreciation'}</h2>
                <div class="max-w-2xl mx-auto space-y-6">
                    ${testimonials.length > 0 ? testimonials.map(testimonial => `
                        <div class="bg-white p-6 rounded-lg shadow-sm">
                            <div class="flex items-start gap-3 mb-3">
                                <div class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold text-lg flex-shrink-0">
                                    ${testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div class="font-bold text-gray-900">${testimonial.name}</div>
                                    <div class="text-sm text-cyan-600">${testimonial.role}</div>
                                </div>
                            </div>
                            <p class="text-gray-700 italic">"${testimonial.message}"</p>
                        </div>
                    `).join('') : '<p class="text-center text-gray-500">Add testimonials</p>'}
                </div>
            </div>
        `;
    }
};
