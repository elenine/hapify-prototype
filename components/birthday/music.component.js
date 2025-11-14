// Music/Playlist Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.music = {
    name: '🎵 Music & Playlist',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Party Playlist, Music Vibes"
                       value="Party Playlist"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Music Theme Description</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="description"
                          rows="2"
                          placeholder="Describe the music vibe (e.g., Mix of 80s hits and modern pop)"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">DJ/Entertainment</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="dj"
                       placeholder="e.g., DJ Mike, Live Band, Spotify Playlist"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Featured Songs/Artists</label>
                <p class="text-xs text-gray-500 mb-2">Enter one song or artist per line</p>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="songs"
                          rows="6"
                          placeholder="Happy - Pharrell Williams&#10;Uptown Funk - Bruno Mars&#10;Shake It Off - Taylor Swift&#10;Dancing Queen - ABBA"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Song Requests</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="requests"
                          rows="2"
                          placeholder="Have a song request? Let us know!"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Playlist Link (Optional)</label>
                <input type="url"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="playlistLink"
                       placeholder="https://open.spotify.com/playlist/..."
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="notes"
                          rows="2"
                          placeholder="e.g., Dance floor will be open all night!"
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
                       value="#f5f3ff"
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
                       value="#8b5cf6"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="playlist" selected>Playlist View</option>
                    <option value="grid">Grid View</option>
                    <option value="compact">Compact</option>
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
        const bgColor = style.bgColor || '#f5f3ff';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#8b5cf6';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'playlist';

        if (!data.description && !data.songs && !data.dj) {
            return '';
        }

        const songs = data.songs ? data.songs.split('\n').filter(s => s.trim()) : [];

        let contentHtml = '';

        if (layoutStyle === 'playlist') {
            contentHtml = `
                ${data.description || data.dj ? `
                    <div class="mb-6 text-center bg-white bg-opacity-70 rounded-lg p-5">
                        ${data.description ? `<p class="text-lg mb-3">${data.description}</p>` : ''}
                        ${data.dj ? `
                            <div class="flex items-center justify-center gap-2 text-sm">
                                <span class="text-xl">🎧</span>
                                <span class="font-semibold" style="color: ${accentColor};">Brought to you by:</span>
                                <span>${data.dj}</span>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}

                ${songs.length > 0 ? `
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="p-4" style="background-color: ${accentColor}; color: white;">
                            <h3 class="font-bold text-lg flex items-center gap-2">
                                <span>🎵</span> Featured Tracks
                            </h3>
                        </div>
                        <div class="divide-y">
                            ${songs.map((song, index) => `
                                <div class="p-4 hover:bg-gray-50 transition flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                                         style="background-color: ${accentColor};">
                                        ${index + 1}
                                    </div>
                                    <span class="flex-1">${song}</span>
                                    <span class="text-xl">🎶</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${data.playlistLink ? `
                    <div class="mt-6 text-center">
                        <a href="${data.playlistLink}" target="_blank"
                           class="inline-block px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
                           style="background-color: ${accentColor};">
                            🎧 Listen to Full Playlist
                        </a>
                    </div>
                ` : ''}

                ${data.requests ? `
                    <div class="mt-6 text-center bg-white bg-opacity-70 rounded-lg p-4">
                        <p class="italic">💡 ${data.requests}</p>
                    </div>
                ` : ''}
            `;
        } else if (layoutStyle === 'grid') {
            contentHtml = `
                ${data.description || data.dj ? `
                    <div class="mb-6 text-center">
                        ${data.description ? `<p class="text-lg mb-2">${data.description}</p>` : ''}
                        ${data.dj ? `<p class="text-sm">🎧 <strong>${data.dj}</strong></p>` : ''}
                    </div>
                ` : ''}

                ${songs.length > 0 ? `
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        ${songs.map(song => `
                            <div class="bg-white rounded-lg p-4 text-center hover:shadow-md transition">
                                <div class="text-3xl mb-2">🎵</div>
                                <p class="text-sm font-medium">${song}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${data.playlistLink ? `
                    <div class="mt-6 text-center">
                        <a href="${data.playlistLink}" target="_blank"
                           class="inline-block px-5 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition"
                           style="background-color: ${accentColor};">
                            🎧 Full Playlist
                        </a>
                    </div>
                ` : ''}
            `;
        } else { // compact
            contentHtml = `
                <div class="bg-white rounded-lg p-6 max-w-2xl mx-auto">
                    ${data.description ? `<p class="text-center mb-4">${data.description}</p>` : ''}
                    ${data.dj ? `
                        <div class="text-center mb-4 pb-4 border-b">
                            <span class="text-2xl mr-2">🎧</span>
                            <span class="font-semibold" style="color: ${accentColor};">${data.dj}</span>
                        </div>
                    ` : ''}
                    ${songs.length > 0 ? `
                        <div class="space-y-2">
                            ${songs.map(song => `
                                <div class="flex items-center gap-2">
                                    <span class="text-pink-500">♪</span>
                                    <span class="text-sm">${song}</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    ${data.playlistLink ? `
                        <div class="mt-4 pt-4 border-t text-center">
                            <a href="${data.playlistLink}" target="_blank"
                               class="text-sm font-semibold hover:opacity-70"
                               style="color: ${accentColor};">
                                🎧 Listen to Full Playlist →
                            </a>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">🎵</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Party Playlist'}
                        </h2>
                    </div>

                    ${contentHtml}

                    ${data.notes ? `
                        <div class="mt-6 text-center">
                            <p class="text-sm italic">${data.notes}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
