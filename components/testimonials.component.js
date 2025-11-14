// Testimonials Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.testimonials = {
                name: '💬 Testimonials',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="What Clients Say" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Testimonial</label>
                            <textarea placeholder="Add a client testimonial..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="testimonial" oninput="updatePreview()"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                            <input type="text" placeholder="Client Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="client" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Client Role/Company (Optional)</label>
                            <input type="text" placeholder="CEO, Company Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="role" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="card">Card Style</option>
                                <option value="quote">Quote Style</option>
                                <option value="minimal">Minimal</option>
                                <option value="modern">Modern Bubble</option>
                                <option value="boxed">Boxed</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'card';
                    const bgColor = style.bg || '#ffffff';
                    const accentColor = style.accent || '#3b82f6';
                    const title = data.title || 'What Clients Say';
                    const testimonial = data.testimonial || 'Add a client testimonial...';
                    const client = data.client || 'Client Name';
                    const role = data.role || '';

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    switch(layout) {
                        case 'card':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="p-6 bg-white rounded-xl shadow-lg border-l-4" style="border-color: ${accentColor};">
                                            <div class="text-4xl mb-3" style="color: ${accentColor};">💬</div>
                                            <p class="text-gray-700 italic mb-4">"${testimonial}"</p>
                                            <div class="border-t pt-3">
                                                <div class="font-semibold text-sm">${client}</div>
                                                ${role ? `<div class="text-xs text-gray-500 mt-1">${role}</div>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'quote':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto text-center">
                                        <div class="text-5xl mb-4" style="color: ${accentColor};">"</div>
                                        <p class="text-lg text-gray-700 italic mb-6">${testimonial}</p>
                                        <div class="w-12 h-0.5 mx-auto mb-4" style="background: ${accentColor};"></div>
                                        <div class="font-semibold">${client}</div>
                                        ${role ? `<div class="text-sm text-gray-500 mt-1">${role}</div>` : ''}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="border-l-2 pl-4 py-2" style="border-color: ${accentColor};">
                                            <p class="text-gray-700 italic mb-3">"${testimonial}"</p>
                                            <div class="text-sm">
                                                <span class="font-semibold">${client}</span>
                                                ${role ? `<span class="text-gray-500"> • ${role}</span>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="relative">
                                            <div class="p-6 rounded-2xl shadow-xl" style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}25);">
                                                <div class="flex items-start gap-3 mb-4">
                                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white flex-shrink-0" style="background: ${accentColor};">
                                                        💬
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="font-semibold text-sm">${client}</div>
                                                        ${role ? `<div class="text-xs text-gray-500">${role}</div>` : ''}
                                                    </div>
                                                </div>
                                                <p class="text-gray-700 text-sm leading-relaxed">"${testimonial}"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'boxed':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="border-2 rounded-xl p-6 text-center" style="border-color: ${accentColor};">
                                            <div class="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl text-white mb-4" style="background: ${accentColor};">
                                                💬
                                            </div>
                                            <p class="text-gray-700 italic mb-4">"${testimonial}"</p>
                                            <div class="pt-3 border-t">
                                                <div class="font-bold" style="color: ${accentColor};">${client}</div>
                                                ${role ? `<div class="text-sm text-gray-500 mt-1">${role}</div>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="p-6 bg-blue-50 rounded-lg">
                                            <div class="text-3xl mb-3 text-center">💬</div>
                                            <p class="text-gray-700 italic text-center mb-4">"${testimonial}"</p>
                                            <div class="text-center font-semibold text-sm">- ${client}</div>
                                        </div>
                                    </div>
                                </div>
                            `;
                    }
                }
            };
