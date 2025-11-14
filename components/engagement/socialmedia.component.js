// Social Media Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.socialmedia = {
    name: '📱 Social Media',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Share the Love" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hashtag</label>
                <div class="relative">
                    <span class="absolute left-3 top-2.5 text-gray-500">#</span>
                    <input type="text" placeholder="SmithEngagement2024" class="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="hashtag" oninput="updatePreview()">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Share your photos and memories using our hashtag!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instagram Handle (Optional)</label>
                <div class="relative">
                    <span class="absolute left-3 top-2.5 text-gray-500">@</span>
                    <input type="text" placeholder="couplehandle" class="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="instagram" oninput="updatePreview()">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Center</option>
                    <option value="bold">Bold Hashtag</option>
                    <option value="modern">Modern Social</option>
                    <option value="gradient">Gradient Banner</option>
                    <option value="phone">Phone Mockup</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bg = style.bg || '#fdf2f8';
        const accent = style.accent || '#e11d48';
        const cardBg = style.cardBg || '#ffffff';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'bold') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-6xl mb-6">📱</div>
                        <h2 class="text-4xl font-bold mb-6">${data.title || 'Share the Love'}</h2>
                        ${data.message ? `<p class="text-lg text-gray-600 mb-8 max-w-xl mx-auto">${data.message}</p>` : ''}

                        ${data.hashtag ? `
                            <div class="mb-8 p-10 rounded-3xl shadow-2xl" style="background: ${cardBg}; border: 4px solid ${accent}30;">
                                <div class="text-5xl font-black mb-3" style="color: ${accent};">#${data.hashtag}</div>
                                <p class="text-gray-600">Tag your photos with this hashtag!</p>
                            </div>
                        ` : ''}

                        ${data.instagram ? `
                            <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg" style="background: ${cardBg};">
                                <span class="text-3xl">📸</span>
                                <span class="text-gray-700">Follow:</span>
                                <a href="https://instagram.com/${data.instagram}" target="_blank" class="font-bold hover:opacity-80 transition text-xl" style="color: ${accent};">@${data.instagram}</a>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="text-center mb-8">
                            <div class="inline-block p-4 rounded-full shadow-xl mb-4" style="background: ${accent};">
                                <span class="text-5xl">📱</span>
                            </div>
                            <h2 class="text-3xl font-bold">${data.title || 'Share the Love'}</h2>
                        </div>

                        ${data.message ? `<p class="text-center text-gray-600 mb-8">${data.message}</p>` : ''}

                        <div class="space-y-4">
                            ${data.hashtag ? `
                                <div class="p-6 rounded-xl shadow-lg" style="background: ${cardBg};">
                                    <div class="flex items-center gap-4">
                                        <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl" style="background: ${accent}20;">
                                            #
                                        </div>
                                        <div class="flex-1 text-left">
                                            <div class="text-sm text-gray-600 mb-1">Use Our Hashtag</div>
                                            <div class="text-xl font-bold" style="color: ${accent};">#${data.hashtag}</div>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.instagram ? `
                                <div class="p-6 rounded-xl shadow-lg" style="background: ${cardBg};">
                                    <div class="flex items-center gap-4">
                                        <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl" style="background: ${accent}20;">
                                            📸
                                        </div>
                                        <div class="flex-1 text-left">
                                            <div class="text-sm text-gray-600 mb-1">Follow Us</div>
                                            <a href="https://instagram.com/${data.instagram}" target="_blank" class="text-xl font-bold hover:opacity-80 transition" style="color: ${accent};">@${data.instagram}</a>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'gradient') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-3xl mx-auto">
                        <div class="p-12 rounded-3xl shadow-2xl text-center text-white" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}60 100%);">
                            <div class="text-6xl mb-6">📱</div>
                            <h2 class="text-4xl font-bold mb-6">${data.title || 'Share the Love'}</h2>
                            ${data.message ? `<p class="text-xl mb-10 opacity-90 max-w-xl mx-auto">${data.message}</p>` : ''}

                            ${data.hashtag ? `
                                <div class="inline-block px-10 py-6 bg-white rounded-2xl shadow-xl mb-6" style="color: ${accent};">
                                    <div class="text-4xl font-black">#${data.hashtag}</div>
                                </div>
                            ` : ''}

                            ${data.instagram ? `
                                <div class="mt-8">
                                    <div class="text-sm mb-2 opacity-90">Follow us on Instagram</div>
                                    <a href="https://instagram.com/${data.instagram}" target="_blank" class="inline-block px-8 py-3 bg-white rounded-full font-bold text-xl hover:shadow-xl transition" style="color: ${accent};">@${data.instagram}</a>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'phone') {
            return `
                <div class="py-16 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-lg mx-auto text-center">
                        <h2 class="text-3xl font-bold mb-4">${data.title || 'Share the Love'}</h2>
                        ${data.message ? `<p class="text-gray-600 mb-8">${data.message}</p>` : ''}

                        <div class="inline-block p-8 rounded-3xl shadow-2xl" style="background: ${cardBg};">
                            <div class="relative inline-block p-6 rounded-2xl border-8 shadow-xl" style="border-color: ${textColor}20; background: ${accent}10;">
                                <div class="text-5xl mb-4">📱</div>
                                ${data.hashtag ? `
                                    <div class="mb-4">
                                        <div class="text-3xl font-bold" style="color: ${accent};">#${data.hashtag}</div>
                                    </div>
                                ` : ''}
                                ${data.instagram ? `
                                    <div class="text-lg font-semibold" style="color: ${accent};">@${data.instagram}</div>
                                ` : ''}
                            </div>
                            <div class="mt-6 text-sm text-gray-600">
                                Share your moments with us!
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Simple Center (default)
            return `
                <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                    <div class="max-w-md mx-auto text-center">
                        <div class="text-5xl mb-4">📱</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Share the Love'}</h2>
                        ${data.message ? `<p class="text-gray-600 mb-6">${data.message}</p>` : ''}

                        ${data.hashtag ? `
                            <div class="mb-6 p-6 rounded-xl border-2 shadow-lg" style="background: ${cardBg}; border-color: ${accent}40;">
                                <div class="text-3xl font-bold mb-2" style="color: ${accent};">#${data.hashtag}</div>
                                <p class="text-sm text-gray-600">Use this hashtag when sharing photos!</p>
                            </div>
                        ` : ''}

                        ${data.instagram ? `
                            <div class="flex items-center justify-center gap-2 text-gray-700">
                                <span class="text-2xl">📸</span>
                                <span>Follow us:</span>
                                <a href="https://instagram.com/${data.instagram}" target="_blank" class="font-semibold hover:opacity-80 transition" style="color: ${accent};">@${data.instagram}</a>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    }
};
