// Music Playlist Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.playlist = {
    name: '🎵 Music Playlist',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Party Playlist" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Get ready to dance!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Playlist Description/Link</label>
                <textarea placeholder="We'll be playing all your favorite hits!&#10;&#10;Check out our Spotify playlist:&#10;https://spotify.com/playlist/...&#10;&#10;Or listen on Apple Music:&#10;https://music.apple.com/..." rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Song Requests</label>
                <input type="text" placeholder="Have a song request? Let us know!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="requests" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Music Genre/Vibe</label>
                <input type="text" placeholder="Pop, Rock, Dance, 80s Classics" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="genre" oninput="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="playlistStyle" oninput="updatePreview()">
                    <option value="vibrant">Vibrant</option>
                    <option value="modern">Modern</option>
                    <option value="retro">Retro</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const playlistStyle = style.playlistStyle || 'vibrant';

        if (playlistStyle === 'retro') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#f5f3ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-3xl p-12 text-white shadow-2xl">
                            <div class="text-center mb-10">
                                <div class="text-8xl mb-6">🎵</div>
                                <h2 class="text-5xl font-bold mb-4 font-serif" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${data.title || 'Party Playlist'}</h2>
                                ${data.subtitle ? `<p class="text-2xl mb-8 opacity-95">${data.subtitle}</p>` : ''}
                                ${data.genre ? `<div class="inline-block bg-white/30 backdrop-blur px-8 py-3 rounded-full text-xl font-bold">${data.genre}</div>` : ''}
                            </div>
                            <div class="bg-white/20 backdrop-blur rounded-2xl p-8 text-lg leading-relaxed whitespace-pre-line">
                                ${data.description || 'Get ready to dance!'}
                            </div>
                            ${data.requests ? `<div class="text-center mt-8 text-2xl font-bold">🎤 ${data.requests}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (playlistStyle === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#f5f3ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">🎵</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Party Playlist'}</h2>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="bg-white rounded-2xl p-10 shadow-lg">
                            ${data.genre ? `
                                <div class="text-center mb-8">
                                    <div class="inline-flex flex-wrap gap-2 justify-center">
                                        ${data.genre.split(',').map(g => `<span class="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">${g.trim()}</span>`).join('')}
                                    </div>
                                </div>
                            ` : ''}
                            <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line text-center mb-8">${data.description || 'Get ready to dance!'}</div>
                            ${data.requests ? `
                                <div class="bg-purple-50 rounded-lg p-6 text-center">
                                    <div class="text-purple-700 font-semibold">🎤 ${data.requests}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#f5f3ff'}">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
                        <div class="text-center">
                            <div class="text-8xl mb-6 animate-pulse">🎵</div>
                            <h2 class="text-6xl font-black mb-6">${data.title || 'Party Playlist'}</h2>
                            ${data.subtitle ? `<p class="text-3xl mb-8 font-semibold">${data.subtitle}</p>` : ''}
                            ${data.genre ? `
                                <div class="mb-10">
                                    <div class="text-xl mb-4">🎧 Music Vibes:</div>
                                    <div class="text-3xl font-bold">${data.genre}</div>
                                </div>
                            ` : ''}
                            <div class="bg-white/10 backdrop-blur rounded-2xl p-8 text-xl leading-relaxed whitespace-pre-line">
                                ${data.description || 'Get ready to dance!'}
                            </div>
                            ${data.requests ? `<div class="mt-8 text-2xl font-bold bg-white/20 rounded-full py-4 px-8 inline-block">🎤 ${data.requests}</div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
