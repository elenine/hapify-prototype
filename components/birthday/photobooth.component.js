// Photo Booth Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photobooth = {
    name: '📸 Photo Booth',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Photo Booth" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                <input type="text" placeholder="Strike a pose and make memories!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="tagline" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="We'll have a professional photo booth with fun props!&#10;&#10;📸 Instant prints for you to take home&#10;🎭 Lots of fun props and accessories&#10;🎨 Customized photo frames&#10;📱 Digital copies via email" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hashtag (Optional)</label>
                <input type="text" placeholder="#PartyWith[Name]" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="hashtag" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f5f3ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="photoStyle" oninput="updatePreview()">
                    <option value="modern">Modern</option>
                    <option value="playful">Playful</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const photoStyle = style.photoStyle || 'modern';

        if (photoStyle === 'playful') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#f5f3ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl p-10 text-white shadow-2xl transform rotate-1">
                            <div class="text-center -rotate-1">
                                <div class="text-7xl mb-4 animate-bounce">📸</div>
                                <h2 class="text-5xl font-bold mb-4">${data.title || 'Photo Booth'}</h2>
                                ${data.tagline ? `<p class="text-2xl mb-8 font-medium">${data.tagline}</p>` : ''}
                                <div class="bg-white/20 backdrop-blur rounded-xl p-6 text-lg leading-relaxed whitespace-pre-line">
                                    ${data.description || 'Capture the memories!'}
                                </div>
                                ${data.hashtag ? `<div class="mt-6 text-3xl font-bold">${data.hashtag}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (photoStyle === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#f5f3ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-2xl p-12 shadow-xl border border-purple-200">
                            <div class="text-center mb-8">
                                <div class="text-6xl mb-4">📸</div>
                                <h2 class="text-4xl font-serif font-bold mb-3 text-gray-900">${data.title || 'Photo Booth'}</h2>
                                ${data.tagline ? `<p class="text-xl text-gray-600 italic">${data.tagline}</p>` : ''}
                            </div>
                            <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line text-center max-w-2xl mx-auto">
                                ${data.description || 'Capture the memories!'}
                            </div>
                            ${data.hashtag ? `<div class="mt-8 text-center text-2xl font-semibold text-purple-600">${data.hashtag}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f5f3ff'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-6xl mb-4">📸</div>
                        <h3 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Photo Booth'}</h3>
                        ${data.tagline ? `<p class="text-xl text-gray-600">${data.tagline}</p>` : ''}
                    </div>
                    <div class="bg-white rounded-xl p-8 shadow-md">
                        <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">${data.description || 'Capture the memories!'}</div>
                    </div>
                    ${data.hashtag ? `<div class="mt-6 text-center text-2xl font-bold text-pink-600">${data.hashtag}</div>` : ''}
                </div>
            </div>
        `;
    }
};
