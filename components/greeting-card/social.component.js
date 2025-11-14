// Social Media Links Section Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.social = {
    name: '📱 Social Media',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="title"
                    placeholder="Connect With Us"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message (optional)</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="message"
                    rows="2"
                    placeholder="Follow us on social media!"
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="facebook"
                    placeholder="https://facebook.com/username or @username"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="instagram"
                    placeholder="https://instagram.com/username or @username"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Twitter/X</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="twitter"
                    placeholder="https://twitter.com/username or @username"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">YouTube</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="youtube"
                    placeholder="https://youtube.com/@username"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">TikTok</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="tiktok"
                    placeholder="https://tiktok.com/@username or @username"
                    oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="bgColor"
                    value="#f9fafb"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="textColor"
                    value="#111827"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#f9fafb';
        const textColor = style.textColor || '#111827';
        const textAlign = style.textAlign || 'center';
        const title = data.title || 'Connect With Us';
        const message = data.message || '';

        const socialLinks = [
            { name: 'Facebook', icon: '📘', field: 'facebook', baseUrl: 'https://facebook.com/' },
            { name: 'Instagram', icon: '📷', field: 'instagram', baseUrl: 'https://instagram.com/' },
            { name: 'Twitter', icon: '🐦', field: 'twitter', baseUrl: 'https://twitter.com/' },
            { name: 'LinkedIn', icon: '💼', field: 'linkedin', baseUrl: 'https://linkedin.com/in/' },
            { name: 'YouTube', icon: '📺', field: 'youtube', baseUrl: 'https://youtube.com/' },
            { name: 'TikTok', icon: '🎵', field: 'tiktok', baseUrl: 'https://tiktok.com/' }
        ];

        const activeSocials = socialLinks.filter(social => data[social.field]);

        return `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 48px 24px; text-align: ${textAlign};">
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 16px;">📱 ${title}</h2>
                    ${message ? `<p style="margin-bottom: 32px; line-height: 1.6;">${message}</p>` : ''}

                    ${activeSocials.length > 0 ? `
                        <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
                            ${activeSocials.map(social => {
                                const value = data[social.field];
                                const url = value.startsWith('http') ? value :
                                           value.startsWith('@') ? social.baseUrl + value.substring(1) :
                                           social.baseUrl + value;

                                return `
                                    <a href="${url}" target="_blank" style="display: flex; align-items: center; gap: 8px; padding: 12px 20px; background: rgba(255,255,255,0.8); border-radius: 50px; text-decoration: none; color: ${textColor}; border: 2px solid rgba(0,0,0,0.1); transition: all 0.3s;">
                                        <span style="font-size: 20px;">${social.icon}</span>
                                        <span style="font-weight: 600;">${social.name}</span>
                                    </a>
                                `;
                            }).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
