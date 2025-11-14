// Social Media Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.socialmedia = {
    name: '📱 Social Media',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Share the Fun, Join the Celebration Online"
                       value="Share the Fun"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="description"
                          rows="2"
                          placeholder="Share your photos and memories with us!"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Hashtag</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="hashtag"
                       placeholder="e.g., #SarahsBigDay, #BobTurns30"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Hashtags (Optional)</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="additionalHashtags"
                       placeholder="e.g., #BirthdayParty #Celebration2025"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instagram Handle</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="instagram"
                       placeholder="@username"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Facebook Page/Event</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="facebook"
                       placeholder="@pagename or event link"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Twitter/X Handle</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="twitter"
                       placeholder="@username"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">TikTok Handle</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="tiktok"
                       placeholder="@username"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Call to Action</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="callToAction"
                          rows="2"
                          placeholder="e.g., Tag us in your photos! Share your favorite moments!"
                          onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="bgColor"
                       value="#fce7f3"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="textColor"
                       value="#1f2937"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="accentColor"
                       value="#ec4899"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="centered" selected>Centered</option>
                    <option value="cards">Social Cards</option>
                    <option value="badges">Badge Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="padding"
                        onchange="updatePreview()">
                    <option value="py-8">Small</option>
                    <option value="py-12" selected>Medium</option>
                    <option value="py-16">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#fce7f3';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#ec4899';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'centered';

        if (!data.hashtag && !data.instagram && !data.facebook && !data.twitter && !data.tiktok) {
            return '';
        }

        const socials = [
            { platform: 'Instagram', icon: '📸', value: data.instagram, color: '#E1306C' },
            { platform: 'Facebook', icon: '👥', value: data.facebook, color: '#1877F2' },
            { platform: 'Twitter', icon: '🐦', value: data.twitter, color: '#1DA1F2' },
            { platform: 'TikTok', icon: '🎬', value: data.tiktok, color: '#000000' }
        ].filter(social => social.value);

        let contentHtml = '';

        if (layoutStyle === 'centered') {
            contentHtml = `
                ${data.hashtag ? `
                    <div class="mb-8 text-center">
                        <div class="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
                            <span class="text-3xl font-bold" style="color: ${accentColor};">
                                ${data.hashtag}
                            </span>
                        </div>
                        ${data.additionalHashtags ? `
                            <p class="mt-3 text-sm">${data.additionalHashtags}</p>
                        ` : ''}
                    </div>
                ` : ''}

                ${socials.length > 0 ? `
                    <div class="flex flex-wrap justify-center gap-4 mb-6">
                        ${socials.map(social => `
                            <div class="bg-white rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition">
                                <span class="text-2xl mr-2">${social.icon}</span>
                                <span class="font-semibold">${social.value}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${data.callToAction ? `
                    <div class="text-center bg-white bg-opacity-70 rounded-lg p-5">
                        <p class="text-lg font-medium" style="color: ${accentColor};">
                            ${data.callToAction}
                        </p>
                    </div>
                ` : ''}
            `;
        } else if (layoutStyle === 'cards') {
            contentHtml = `
                ${data.hashtag ? `
                    <div class="mb-6 text-center">
                        <div class="inline-block bg-white rounded-lg px-6 py-3 shadow-md">
                            <span class="text-2xl font-bold" style="color: ${accentColor};">
                                ${data.hashtag}
                            </span>
                        </div>
                    </div>
                ` : ''}

                ${socials.length > 0 ? `
                    <div class="grid sm:grid-cols-2 gap-4 mb-6">
                        ${socials.map(social => `
                            <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition text-center">
                                <div class="text-4xl mb-2">${social.icon}</div>
                                <h3 class="font-bold mb-1" style="color: ${accentColor};">
                                    ${social.platform}
                                </h3>
                                <p class="font-semibold">${social.value}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${data.callToAction ? `
                    <div class="text-center bg-white rounded-lg p-4">
                        <p class="font-medium">${data.callToAction}</p>
                    </div>
                ` : ''}
            `;
        } else { // badges
            contentHtml = `
                <div class="text-center space-y-6">
                    ${data.hashtag ? `
                        <div>
                            <div class="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
                                <span class="text-xl">#️⃣</span>
                                <span class="font-bold text-xl" style="color: ${accentColor};">
                                    ${data.hashtag}
                                </span>
                            </div>
                        </div>
                    ` : ''}

                    ${socials.length > 0 ? `
                        <div class="flex flex-wrap justify-center gap-3">
                            ${socials.map(social => `
                                <div class="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm hover:shadow-md transition">
                                    <span class="text-xl">${social.icon}</span>
                                    <span class="font-semibold text-sm">${social.value}</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    ${data.callToAction ? `
                        <div class="bg-white bg-opacity-70 rounded-lg p-4 max-w-md mx-auto">
                            <p class="text-sm font-medium">${data.callToAction}</p>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">📱</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Share the Fun'}
                        </h2>
                        ${data.description ? `
                            <p class="text-lg mt-3">${data.description}</p>
                        ` : ''}
                    </div>

                    ${contentHtml}
                </div>
            </div>
        `;
    }
};
