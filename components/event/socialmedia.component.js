// Social Media Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.socialmedia = {
    name: '📱 Social Media',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Share Your Memories"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="socialTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Share your photos and memories using our hashtag..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="socialMessage" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hashtag</label>
                <input type="text" placeholder="e.g., #SarahsBirthdayBash"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="hashtag" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instagram Handle (Optional)</label>
                <input type="text" placeholder="@username"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="instagram" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Twitter/X Handle (Optional)</label>
                <input type="text" placeholder="@username"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="twitter" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Facebook Page (Optional)</label>
                <input type="text" placeholder="Page name or URL"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="facebook" onkeyup="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f3e8ff"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hashtag Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="hashtagStyle" onchange="updatePreview()">
                    <option value="large">Large & Bold</option>
                    <option value="medium">Medium</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#f3e8ff';
        const hashtagStyle = style.hashtagStyle || 'large';
        const title = data.socialTitle || 'Share Your Memories';

        const hashtagClasses = {
            large: 'text-5xl font-black',
            medium: 'text-3xl font-bold',
            elegant: 'text-4xl font-serif italic'
        };

        const socialLinks = [];
        if (data.instagram) socialLinks.push({ platform: 'Instagram', handle: data.instagram, icon: '📸' });
        if (data.twitter) socialLinks.push({ platform: 'Twitter/X', handle: data.twitter, icon: '🐦' });
        if (data.facebook) socialLinks.push({ platform: 'Facebook', handle: data.facebook, icon: '👤' });

        return `
            <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.socialMessage ? `<p class="text-gray-700 mb-8 max-w-2xl mx-auto">${data.socialMessage}</p>` : ''}

                ${data.hashtag ? `
                    <div class="${hashtagClasses[hashtagStyle]} mb-8" style="color: ${globalStyles.primaryColor || '#059669'};">
                        ${data.hashtag}
                    </div>
                ` : '<p class="text-gray-500 mb-8">No hashtag set</p>'}

                ${socialLinks.length > 0 ? `
                    <div class="flex flex-wrap gap-4 justify-center mt-8">
                        ${socialLinks.map(link => `
                            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
                                <span class="text-2xl mr-2">${link.icon}</span>
                                <span class="font-semibold">${link.handle}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }
};
