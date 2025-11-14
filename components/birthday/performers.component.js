// Special Guests/Performers Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.performers = {
    name: '⭐ Special Guests',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Special Guests & Performers" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Get ready to be amazed!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Performers/Guests List</label>
                <textarea placeholder="🎪 Amazing Magic Show - by Mr. Wizard&#10;🎤 Live Music - The Party Band&#10;🎨 Face Painting Artist&#10;🤡 Balloon Artist - Benny the Clown&#10;🎭 Special Guest: Mickey Mouse!" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="performers" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
                <input type="text" placeholder="Don't miss the magic show at 3 PM!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="info" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fefce8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="performerStyle" oninput="updatePreview()">
                    <option value="spotlight">Spotlight</option>
                    <option value="grid">Grid View</option>
                    <option value="list">Simple List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const performerStyle = style.performerStyle || 'spotlight';
        const performers = (data.performers || '').split('\n').filter(p => p.trim());

        if (performerStyle === 'grid') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fefce8'}">
                    <div class="max-w-5xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">⭐</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Special Guests & Performers'}</h2>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="grid md:grid-cols-2 gap-6 mb-8">
                            ${performers.map((performer, index) => `
                                <div class="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                    <div class="flex items-start gap-4">
                                        <div class="text-4xl flex-shrink-0">${performer.includes('🎪') || performer.includes('🎤') || performer.includes('🎨') || performer.includes('🤡') || performer.includes('🎭') ? performer.split(' ')[0] : '⭐'}</div>
                                        <div class="flex-1">
                                            <div class="font-bold text-gray-900">${performer.replace(/^[^\w]+\s*/, '')}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        ${data.info ? `<div class="text-center text-lg font-semibold text-amber-700">${data.info}</div>` : ''}
                    </div>
                </div>
            `;
        }

        if (performerStyle === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fefce8'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">⭐</div>
                            <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Special Guests & Performers'}</h3>
                            ${data.subtitle ? `<p class="text-lg text-gray-600 mt-2">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="bg-white rounded-xl p-8 shadow-md">
                            <div class="space-y-4">
                                ${performers.map(performer => `<div class="text-gray-700 text-lg border-l-4 border-yellow-500 pl-4">✨ ${performer}</div>`).join('')}
                            </div>
                        </div>
                        ${data.info ? `<div class="mt-6 text-center text-amber-700 font-medium">${data.info}</div>` : ''}
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#fefce8'}">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl p-12 text-white shadow-2xl">
                        <div class="text-center mb-10">
                            <div class="text-7xl mb-4">⭐</div>
                            <h2 class="text-5xl font-bold mb-4">${data.title || 'Special Guests & Performers'}</h2>
                            ${data.subtitle ? `<p class="text-2xl mb-8 opacity-95">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="bg-white/20 backdrop-blur rounded-2xl p-8">
                            <div class="space-y-4 text-xl">
                                ${performers.map(performer => `<div class="text-center">🌟 ${performer}</div>`).join('')}
                            </div>
                        </div>
                        ${data.info ? `<div class="text-center mt-8 text-2xl font-bold">${data.info}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
