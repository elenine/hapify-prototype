// Speakers Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.speakers = {
    name: '🎤 Speakers',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Speaker Name</label>
                <input type="text" placeholder="John Doe" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title/Role</label>
                <input type="text" placeholder="CEO & Founder" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea placeholder="Short speaker bio..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="bio" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="card-centered">Card - Centered</option>
                    <option value="card-horizontal">Card - Horizontal</option>
                    <option value="minimal">Minimal - Simple</option>
                    <option value="modern">Modern - Gradient</option>
                    <option value="profile">Profile - Large avatar</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Avatar Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="avatarStyle" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="hexagon">Hexagon</option>
                </select>
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
        const layoutStyle = style.layoutStyle || 'card-centered';
        const bgColor = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#f9fafb';
        const accentColor = style.accentColor || '#059669';
        const avatarStyle = style.avatarStyle || 'circle';
        const shadow = style.shadow || 'none';

        const shadowMap = {
            none: '',
            small: 'shadow-sm',
            medium: 'shadow-md',
            large: 'shadow-lg'
        };

        const getAvatarClass = () => {
            switch (avatarStyle) {
                case 'circle':
                    return 'rounded-full';
                case 'rounded':
                    return 'rounded-2xl';
                case 'hexagon':
                    return 'rounded-3xl';
                default:
                    return 'rounded-full';
            }
        };

        const renderContent = () => {
            switch (layoutStyle) {
                case 'card-centered':
                    return `
                        <div class="max-w-md mx-auto">
                            <div class="p-8 text-center ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 16px;">
                                <div class="w-24 h-24 ${getAvatarClass()} mx-auto mb-4 flex items-center justify-center text-3xl" style="background: ${accentColor}20;">🎤</div>
                                <div class="font-bold text-lg mb-1">${data.name || 'Speaker Name'}</div>
                                <div class="text-sm mb-3" style="color: ${accentColor};">${data.title || 'Title & Role'}</div>
                                ${data.bio ? `<p class="text-sm text-gray-600 leading-relaxed">${data.bio}</p>` : ''}
                            </div>
                        </div>
                    `;

                case 'card-horizontal':
                    return `
                        <div class="max-w-lg mx-auto">
                            <div class="flex gap-6 p-6 ${shadowMap[shadow]}" style="background: ${cardBg}; border-radius: 16px;">
                                <div class="w-20 h-20 ${getAvatarClass()} flex-shrink-0 flex items-center justify-center text-3xl" style="background: ${accentColor}20;">🎤</div>
                                <div class="flex-1">
                                    <div class="font-bold text-lg mb-1">${data.name || 'Speaker Name'}</div>
                                    <div class="text-sm mb-2" style="color: ${accentColor};">${data.title || 'Title & Role'}</div>
                                    ${data.bio ? `<p class="text-sm text-gray-600 leading-relaxed">${data.bio}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    `;

                case 'minimal':
                    return `
                        <div class="max-w-md mx-auto text-center">
                            <div class="w-16 h-16 ${getAvatarClass()} mx-auto mb-3 flex items-center justify-center text-2xl" style="background: ${accentColor}20;">🎤</div>
                            <div class="font-bold text-xl mb-1">${data.name || 'Speaker Name'}</div>
                            <div class="text-sm mb-3" style="color: ${accentColor};">${data.title || 'Title & Role'}</div>
                            ${data.bio ? `<p class="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">${data.bio}</p>` : ''}
                        </div>
                    `;

                case 'modern':
                    return `
                        <div class="max-w-md mx-auto">
                            <div class="p-8 text-center ${shadowMap[shadow]} relative overflow-hidden" style="background: linear-gradient(135deg, ${cardBg} 0%, ${accentColor}10 100%); border-radius: 20px;">
                                <div class="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" style="background: ${accentColor}20;"></div>
                                <div class="relative z-10">
                                    <div class="w-28 h-28 ${getAvatarClass()} mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg" style="background: white;">🎤</div>
                                    <div class="font-bold text-xl mb-1">${data.name || 'Speaker Name'}</div>
                                    <div class="text-sm font-semibold mb-3" style="color: ${accentColor};">${data.title || 'Title & Role'}</div>
                                    ${data.bio ? `<p class="text-sm text-gray-700 leading-relaxed">${data.bio}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    `;

                case 'profile':
                    return `
                        <div class="max-w-sm mx-auto text-center">
                            <div class="w-32 h-32 ${getAvatarClass()} mx-auto mb-4 flex items-center justify-center text-5xl ${shadowMap[shadow]} border-4" style="background: ${accentColor}20; border-color: ${accentColor};">🎤</div>
                            <div class="font-bold text-2xl mb-2">${data.name || 'Speaker Name'}</div>
                            <div class="px-4 py-1 rounded-full text-sm font-semibold text-white mb-4 inline-block" style="background: ${accentColor};">${data.title || 'Title & Role'}</div>
                            ${data.bio ? `<p class="text-sm text-gray-600 leading-relaxed mt-4">${data.bio}</p>` : ''}
                        </div>
                    `;

                default:
                    return `
                        <div class="max-w-md mx-auto text-center">
                            <div class="w-24 h-24 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center text-3xl">🎤</div>
                            <div class="font-bold text-lg mb-1">${data.name || 'Speaker Name'}</div>
                            <div class="text-sm text-green-600 mb-3">${data.title || 'Title'}</div>
                            ${data.bio ? `<p class="text-sm text-gray-600 leading-relaxed">${data.bio}</p>` : ''}
                        </div>
                    `;
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <h2 class="text-2xl font-bold text-center mb-8">Featured Speakers</h2>
                ${renderContent()}
            </div>
        `;
    }`
};
