// Guestbook Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.guestbook = {
    name: '✍️ Guestbook',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Leave Us a Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Share your congratulations and well wishes!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Form Link (Optional)</label>
                <input type="url" placeholder="https://forms.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="formLink" oninput="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Link to your guestbook form (Google Forms, Typeform, etc.)</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Center</option>
                    <option value="elegant">Elegant Card</option>
                    <option value="modern">Modern CTA</option>
                    <option value="book">Book Style</option>
                    <option value="banner">Banner Call-to-Action</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#e11d48';
        const cardBg = style.cardBg || '#fdf2f8';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="p-10 rounded-3xl shadow-2xl" style="background: ${cardBg};">
                            <div class="text-center mb-8">
                                <div class="inline-block p-4 rounded-full shadow-xl mb-4" style="background: ${accent};">
                                    <span class="text-5xl">✍️</span>
                                </div>
                                <h2 class="text-3xl font-bold mb-4">${data.title || 'Leave Us a Message'}</h2>
                                ${data.description ? `<p class="text-gray-600 leading-relaxed">${data.description}</p>` : ''}
                            </div>

                            ${data.formLink ? `
                                <a href="${data.formLink}" target="_blank" class="block w-full px-8 py-4 rounded-xl font-bold text-center hover:opacity-90 transition shadow-lg text-white text-lg" style="background: ${accent};">
                                    📝 Sign Our Guestbook
                                </a>
                            ` : `
                                <div class="p-8 rounded-xl border-2 border-dashed text-center" style="border-color: ${accent}30;">
                                    <div class="text-4xl mb-2">💌</div>
                                    <p class="text-sm text-gray-500">Guestbook form will be linked here</p>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-2xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="text-center md:text-left">
                                <div class="inline-block text-6xl mb-4">✍️</div>
                                <h2 class="text-3xl font-bold mb-4">${data.title || 'Leave Us a Message'}</h2>
                                ${data.description ? `<p class="text-gray-600 leading-relaxed">${data.description}</p>` : ''}
                            </div>
                            <div class="text-center">
                                ${data.formLink ? `
                                    <div class="p-8 rounded-2xl shadow-xl" style="background: ${cardBg};">
                                        <div class="text-4xl mb-4">💌</div>
                                        <a href="${data.formLink}" target="_blank" class="inline-block px-8 py-4 rounded-lg font-bold hover:opacity-90 transition text-white shadow-lg text-lg" style="background: ${accent};">
                                            Sign Now
                                        </a>
                                    </div>
                                ` : `
                                    <div class="p-8 rounded-2xl shadow-lg" style="background: ${cardBg};">
                                        <div class="text-4xl mb-2">💌</div>
                                        <p class="text-sm text-gray-500">Form link coming soon</p>
                                    </div>
                                `}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'book') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <div class="text-5xl mb-4">✍️</div>
                        <h2 class="text-3xl font-bold mb-8">${data.title || 'Leave Us a Message'}</h2>

                        <div class="relative inline-block">
                            <div class="p-12 rounded-lg shadow-2xl border-4 border-double" style="background: ${cardBg}; border-color: ${accent};">
                                <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full shadow-lg text-white font-bold" style="background: ${accent};">
                                    Our Guestbook
                                </div>
                                <div class="text-5xl mb-6 mt-4">📖</div>
                                ${data.description ? `<p class="text-gray-600 mb-8 leading-relaxed">${data.description}</p>` : ''}
                                ${data.formLink ? `
                                    <a href="${data.formLink}" target="_blank" class="inline-block px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-white shadow-md" style="background: ${accent};">
                                        ✍️ Write a Message
                                    </a>
                                ` : `
                                    <p class="text-sm text-gray-500">Form link coming soon</p>
                                `}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-3xl mx-auto">
                        <div class="p-12 rounded-3xl shadow-2xl text-center text-white" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}80 100%);">
                            <div class="text-6xl mb-6">✍️</div>
                            <h2 class="text-4xl font-bold mb-6">${data.title || 'Leave Us a Message'}</h2>
                            ${data.description ? `<p class="text-xl mb-10 opacity-90 max-w-xl mx-auto">${data.description}</p>` : ''}

                            ${data.formLink ? `
                                <a href="${data.formLink}" target="_blank" class="inline-block px-10 py-4 bg-white rounded-full font-bold hover:shadow-2xl transition text-xl" style="color: ${accent};">
                                    📝 Sign Our Guestbook
                                </a>
                            ` : `
                                <div class="inline-block px-10 py-4 bg-white rounded-full opacity-75" style="color: ${accent};">
                                    <span class="font-semibold">Form link coming soon</span>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Simple Center (default)
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="text-5xl mb-4">✍️</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Leave Us a Message'}</h2>
                        ${data.description ? `<p class="text-gray-600 mb-8">${data.description}</p>` : ''}

                        <div class="p-8 rounded-lg border-2 border-dashed shadow-md" style="background: ${cardBg}; border-color: ${accent}40;">
                            ${data.formLink ? `
                                <a href="${data.formLink}" target="_blank" class="inline-block px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-white" style="background: ${accent};">
                                    📝 Sign Our Guestbook
                                </a>
                            ` : `
                                <div class="text-gray-500">
                                    <div class="text-3xl mb-2">💌</div>
                                    <p class="text-sm">Guestbook form will be linked here</p>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
