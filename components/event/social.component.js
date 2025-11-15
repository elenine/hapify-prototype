// Social Media Links Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.social = {
    name: '📱 Social Media',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" id="${sectionId}-title" value="Follow Us" placeholder="Follow Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea id="${sectionId}-description" placeholder="Stay connected and get the latest updates" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows="2"></textarea>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Hashtag</label>
                <input type="text" id="${sectionId}-hashtag" placeholder="#EventName2024" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                <input type="url" id="${sectionId}-facebook" placeholder="https://facebook.com/yourpage" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Twitter/X</label>
                <input type="url" id="${sectionId}-twitter" placeholder="https://twitter.com/yourhandle" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                <input type="url" id="${sectionId}-instagram" placeholder="https://instagram.com/yourprofile" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                <input type="url" id="${sectionId}-linkedin" placeholder="https://linkedin.com/company/yourcompany" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">YouTube</label>
                <input type="url" id="${sectionId}-youtube" placeholder="https://youtube.com/yourchannel" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">TikTok</label>
                <input type="url" id="${sectionId}-tiktok" placeholder="https://tiktok.com/@yourprofile" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="layoutStyle">
                    <option value="icons">Icons - Circular icon buttons</option>
                    <option value="cards">Cards - Card style with names</option>
                    <option value="minimal">Minimal - Simple icon row</option>
                    <option value="branded">Branded - Brand colored buttons</option>
                    <option value="modern">Modern - Large gradient buttons</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Size</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="iconSize">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="accentColor" value="#10b981" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" class="style-control w-full h-10 rounded-lg" data-style="bgColor" value="#f9fafb" />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow</label>
                <select class="style-control w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-style="shadow">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'icons';
        const iconSize = style.iconSize || 'medium';
        const accentColor = style.accentColor || '#10b981';
        const bgColor = style.bgColor || '#f9fafb';
        const shadow = style.shadow || 'md';

        const title = data.title || 'Follow Us';
        const description = data.description || '';
        const hashtag = data.hashtag || '';

        const shadowMap = {
            none: '',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };

        const iconSizeMap = {
            small: { button: 'w-10 h-10 text-lg', card: 'w-12 h-12 text-xl' },
            medium: { button: 'w-12 h-12 text-xl', card: 'w-14 h-14 text-2xl' },
            large: { button: 'w-14 h-14 text-2xl', card: 'w-16 h-16 text-3xl' },
            xlarge: { button: 'w-16 h-16 text-3xl', card: 'w-20 h-20 text-4xl' }
        };

        const sizes = iconSizeMap[iconSize];

        // Social media platforms with brand colors
        const platforms = [
            { key: 'facebook', name: 'Facebook', icon: '📘', color: '#1877f2', url: data.facebook },
            { key: 'twitter', name: 'Twitter', icon: '🐦', color: '#1da1f2', url: data.twitter },
            { key: 'instagram', name: 'Instagram', icon: '📷', color: '#e4405f', url: data.instagram },
            { key: 'linkedin', name: 'LinkedIn', icon: '💼', color: '#0077b5', url: data.linkedin },
            { key: 'youtube', name: 'YouTube', icon: '▶️', color: '#ff0000', url: data.youtube },
            { key: 'tiktok', name: 'TikTok', icon: '🎵', color: '#000000', url: data.tiktok }
        ].filter(platform => platform.url);

        if (platforms.length === 0) {
            return `
                <div class="py-12 px-6 text-center" style="background: ${bgColor};">
                    <p class="text-gray-500">Add social media links to display them here</p>
                </div>
            `;
        }

        let platformsHTML = '';

        switch (layoutStyle) {
            case 'icons':
                platformsHTML = `
                    <div class="flex flex-wrap justify-center gap-4">
                        ${platforms.map(platform => `
                            <a href="${platform.url}" target="_blank" rel="noopener noreferrer"
                               class="${sizes.button} rounded-full flex items-center justify-center transition transform hover:scale-110 ${shadowMap[shadow]}"
                               style="background: ${accentColor}; color: white;">
                                <span>${platform.icon}</span>
                            </a>
                        `).join('')}
                    </div>
                `;
                break;

            case 'cards':
                platformsHTML = `
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        ${platforms.map(platform => `
                            <a href="${platform.url}" target="_blank" rel="noopener noreferrer"
                               class="p-4 rounded-lg ${shadowMap[shadow]} transition transform hover:scale-105 text-center"
                               style="background: white; border: 2px solid ${accentColor}20;">
                                <div class="${sizes.card} mx-auto rounded-full flex items-center justify-center mb-2"
                                     style="background: ${accentColor}15; color: ${accentColor};">
                                    ${platform.icon}
                                </div>
                                <div class="text-sm font-medium text-gray-700">${platform.name}</div>
                            </a>
                        `).join('')}
                    </div>
                `;
                break;

            case 'minimal':
                platformsHTML = `
                    <div class="flex flex-wrap justify-center gap-6">
                        ${platforms.map(platform => `
                            <a href="${platform.url}" target="_blank" rel="noopener noreferrer"
                               class="text-3xl transition transform hover:scale-125"
                               style="color: ${accentColor};">
                                ${platform.icon}
                            </a>
                        `).join('')}
                    </div>
                `;
                break;

            case 'branded':
                platformsHTML = `
                    <div class="flex flex-wrap justify-center gap-4">
                        ${platforms.map(platform => `
                            <a href="${platform.url}" target="_blank" rel="noopener noreferrer"
                               class="${sizes.button} rounded-full flex items-center justify-center transition transform hover:scale-110 ${shadowMap[shadow]}"
                               style="background: ${platform.color}; color: white;">
                                <span>${platform.icon}</span>
                            </a>
                        `).join('')}
                    </div>
                `;
                break;

            case 'modern':
                platformsHTML = `
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        ${platforms.map(platform => `
                            <a href="${platform.url}" target="_blank" rel="noopener noreferrer"
                               class="p-6 rounded-xl ${shadowMap[shadow]} transition transform hover:scale-105 text-center"
                               style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                <div class="text-4xl mb-2">${platform.icon}</div>
                                <div class="text-sm font-semibold" style="color: ${accentColor};">${platform.name}</div>
                            </a>
                        `).join('')}
                    </div>
                `;
                break;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-4xl mx-auto text-center">
                    <h3 class="text-2xl font-bold mb-3 text-gray-900">${title}</h3>
                    ${description ? `<p class="text-gray-600 mb-8">${description}</p>` : '<div class="mb-8"></div>'}
                    ${platformsHTML}
                    ${hashtag ? `<div class="mt-8"><span class="inline-block px-4 py-2 rounded-full text-sm font-semibold" style="background: ${accentColor}20; color: ${accentColor};">${hashtag}</span></div>` : ''}
                </div>
            </div>
        `;
    }
};
