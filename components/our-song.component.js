// Our Song Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['our-song'] = {
    name: '🎵 Our Song',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Special Song" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Song Name</label>
                <input type="text" placeholder="Song title" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="songName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Artist</label>
                <input type="text" placeholder="Artist name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="artist" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Why This Song?</label>
                <textarea placeholder="Tell the story behind this song..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spotify/YouTube URL (optional)</label>
                <input type="text" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="url" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-8 text-gray-900">${data.title || 'Our Special Song'}</h2>
                <div class="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-10 shadow-xl">
                    <div class="text-6xl mb-6">🎵</div>
                    <h3 class="text-2xl font-bold mb-2" style="color: ${style.accentColor || '#f43f5e'}">${data.songName || 'Song Title'}</h3>
                    <p class="text-lg text-gray-700 mb-6">${data.artist || 'Artist Name'}</p>
                    ${data.story ? `<p class="text-gray-800 leading-relaxed mb-6">${data.story}</p>` : ''}
                    ${data.url ? `
                        <a href="${data.url}" target="_blank" class="inline-block px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition" style="background: ${style.accentColor || '#f43f5e'}">
                            ▶ Listen Now
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `
};
