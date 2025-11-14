// Games & Activities Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.games = {
    name: '🎮 Games & Activities',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Fun & Games" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Get ready for some amazing activities!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Activities List</label>
                <textarea placeholder="🎪 Magic Show&#10;🎨 Face Painting&#10;🎯 Games & Challenges&#10;🎵 Music & Dancing&#10;🏆 Prize Competitions&#10;🎪 Bouncy Castle" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="activities" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <input type="text" placeholder="Suitable for all ages!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="info" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="displayStyle" oninput="updatePreview()">
                    <option value="list">List View</option>
                    <option value="grid">Grid View</option>
                    <option value="featured">Featured Style</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const displayStyle = style.displayStyle || 'list';
        const activities = (data.activities || '').split('\n').filter(a => a.trim());

        if (displayStyle === 'grid') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fef3c7'}">
                    <div class="max-w-5xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">🎮</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Fun & Games'}</h2>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            ${activities.map(activity => `
                                <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center">
                                    <div class="text-3xl mb-2">${activity.includes('🎪') || activity.includes('🎨') || activity.includes('🎯') || activity.includes('🎵') || activity.includes('🏆') || activity.includes('🎮') ? activity.split(' ')[0] : '🎉'}</div>
                                    <div class="font-semibold text-gray-900">${activity.replace(/^[^\w]+\s*/, '')}</div>
                                </div>
                            `).join('')}
                        </div>
                        ${data.info ? `<div class="text-center text-gray-700 font-medium text-lg">${data.info}</div>` : ''}
                    </div>
                </div>
            `;
        }

        if (displayStyle === 'featured') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fef3c7'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-10 text-white shadow-2xl">
                            <div class="text-center mb-8">
                                <div class="text-6xl mb-4">🎮</div>
                                <h2 class="text-4xl font-bold mb-3">${data.title || 'Fun & Games'}</h2>
                                ${data.subtitle ? `<p class="text-xl opacity-90">${data.subtitle}</p>` : ''}
                            </div>
                            <div class="space-y-3 text-xl">
                                ${activities.map(activity => `<div class="text-center">✨ ${activity}</div>`).join('')}
                            </div>
                            ${data.info ? `<div class="text-center mt-8 text-xl font-semibold">${data.info}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}">
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-5xl mb-4">🎮</div>
                    <h3 class="text-3xl font-bold mb-2 text-gray-900">${data.title || 'Fun & Games'}</h3>
                    ${data.subtitle ? `<p class="text-lg text-gray-600 mb-8">${data.subtitle}</p>` : ''}
                    <div class="bg-white rounded-xl p-8 shadow-md">
                        <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line text-left">${data.activities || 'Activities coming soon...'}</div>
                    </div>
                    ${data.info ? `<div class="mt-6 text-pink-600 font-medium text-lg">${data.info}</div>` : ''}
                </div>
            </div>
        `;
    }
};
