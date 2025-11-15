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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Style</option>
                    <option value="bubbles">Speech Bubbles</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="grid">Grid Layout</option>
                    <option value="elegant">Elegant Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#ecfeff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        const testimonials = data.testimonials ? data.testimonials.split('\n').filter(t => t.trim()).map(testimonial => {
            const parts = testimonial.split('|').map(p => p.trim());
            return {
                name: parts[0] || '',
                role: parts[1] || '',
                message: parts[2] || ''
            };
        }) : [];

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Appreciation'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${testimonials.length > 0 ? testimonials.map(testimonial => `
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <div class="flex items-start gap-3 mb-3">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style="background: ${accentColor};">
                                            ${testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div class="font-bold">${testimonial.name}</div>
                                            <div class="text-sm" style="color: ${accentColor};">${testimonial.role}</div>
                                        </div>
                                    </div>
                                    <p class="italic opacity-90">"${testimonial.message}"</p>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add testimonials</p>'}
                        </div>
                    </div>
                `;

            case 'bubbles':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Appreciation'}</h2>
                        <div class="max-w-md mx-auto space-y-8">
                            ${testimonials.length > 0 ? testimonials.map((testimonial, index) => {
                                const isLeft = index % 2 === 0;
                                return `
                                    <div class="flex ${isLeft ? 'justify-start' : 'justify-end'}">
                                        <div class="max-w-[85%]">
                                            <div class="p-5 rounded-2xl shadow-md ${isLeft ? 'rounded-tl-none' : 'rounded-tr-none'}" style="background: ${isLeft ? 'white' : accentColor + '20'};">
                                                <p class="text-sm italic mb-3">"${testimonial.message}"</p>
                                                <div class="flex items-center gap-2">
                                                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background: ${accentColor};">
                                                        ${testimonial.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div class="text-xs font-bold">${testimonial.name}</div>
                                                        <div class="text-xs opacity-70">${testimonial.role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center opacity-50">Add testimonials</p>'}
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-light mb-2">${data.title || 'Words of Appreciation'}</h2>
                            <div class="w-16 h-0.5 mx-auto mb-8" style="background: ${accentColor};"></div>
                            <div class="space-y-6 text-left">
                                ${testimonials.length > 0 ? testimonials.map(testimonial => `
                                    <div class="pb-6 border-b" style="border-color: ${accentColor}20;">
                                        <p class="italic mb-3">"${testimonial.message}"</p>
                                        <div class="text-sm">
                                            <span class="font-bold">${testimonial.name}</span>
                                            <span class="opacity-60"> — ${testimonial.role}</span>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add testimonials</p>'}
                            </div>
                        </div>
                    </div>
                `;

            case 'grid':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Appreciation'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${testimonials.length > 0 ? testimonials.map(testimonial => `
                                <div class="p-5 rounded-xl shadow-md" style="background: linear-gradient(135deg, white 0%, ${accentColor}10 100%);">
                                    <div class="flex items-center gap-3 mb-3">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accentColor};">
                                            ${testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div class="font-bold text-sm">${testimonial.name}</div>
                                            <div class="text-xs opacity-70">${testimonial.role}</div>
                                        </div>
                                    </div>
                                    <p class="text-sm italic">"${testimonial.message}"</p>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add testimonials</p>'}
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-8">
                                <div class="flex justify-center gap-1 mb-4">
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                    <div class="w-2 h-2 rounded-full" style="background: ${accentColor};"></div>
                                </div>
                                <h2 class="text-2xl font-serif">${data.title || 'Words of Appreciation'}</h2>
                                <div class="w-24 h-0.5 mx-auto mt-3" style="background: ${accentColor};"></div>
                            </div>
                            <div class="space-y-8 text-left">
                                ${testimonials.length > 0 ? testimonials.map(testimonial => `
                                    <div class="bg-white p-6 rounded-xl shadow-lg">
                                        <div class="text-3xl opacity-20 mb-2" style="color: ${accentColor};">"</div>
                                        <p class="font-serif italic mb-4">${testimonial.message}</p>
                                        <div class="flex items-center gap-3 pt-3 border-t" style="border-color: ${accentColor}20;">
                                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: ${accentColor};">
                                                ${testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div class="font-bold text-sm">${testimonial.name}</div>
                                                <div class="text-xs" style="color: ${accentColor};">${testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center opacity-50">Add testimonials</p>'}
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Words of Appreciation'}</h2>
                        <div class="max-w-md mx-auto space-y-6">
                            ${testimonials.length > 0 ? testimonials.map(testimonial => `
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <div class="flex items-start gap-3 mb-3">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style="background: ${accentColor};">
                                            ${testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div class="font-bold">${testimonial.name}</div>
                                            <div class="text-sm" style="color: ${accentColor};">${testimonial.role}</div>
                                        </div>
                                    </div>
                                    <p class="italic opacity-90">"${testimonial.message}"</p>
                                </div>
                            `).join('') : '<p class="text-center opacity-50">Add testimonials</p>'}
                        </div>
                    </div>
                `;
        }
    }
};
