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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="modern">Modern Card</option>
                    <option value="vinyl">Vinyl Record</option>
                    <option value="musicplayer">Music Player</option>
                    <option value="notes">Musical Notes</option>
                    <option value="elegant">Elegant Frame</option>
                </select>
            </div>
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
    render: (data, style) => {
        const layout = style.layout || 'modern';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#f43f5e';

        const songName = data.songName || 'Song Title';
        const artist = data.artist || 'Artist Name';
        const story = data.story || '';
        const url = data.url || '';

        const button = url ? `
            <a href="${url}" target="_blank" class="inline-block px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition" style="background: ${accentColor}">
                ▶ Listen Now
            </a>
        ` : '';

        if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold mb-8 text-gray-900">${data.title || 'Our Special Song'}</h2>
                        <div class="rounded-2xl p-10 shadow-xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}10)">
                            <div class="text-6xl mb-6">🎵</div>
                            <h3 class="text-2xl font-bold mb-2" style="color: ${accentColor}">${songName}</h3>
                            <p class="text-lg text-gray-700 mb-6">${artist}</p>
                            ${story ? `<p class="text-gray-800 leading-relaxed mb-6">${story}</p>` : ''}
                            ${button}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'vinyl') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">${data.title || 'Our Special Song'}</h2>
                        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
                            <div class="flex items-center gap-8">
                                <div class="flex-shrink-0">
                                    <div class="w-48 h-48 rounded-full relative overflow-hidden" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd)">
                                        <div class="absolute inset-8 bg-white rounded-full"></div>
                                        <div class="absolute inset-20 rounded-full" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd)"></div>
                                        <div class="absolute inset-0 flex items-center justify-center text-6xl">🎵</div>
                                    </div>
                                </div>
                                <div class="flex-1 text-white">
                                    <h3 class="text-3xl font-bold mb-2">${songName}</h3>
                                    <p class="text-xl mb-4" style="color: ${accentColor}">${artist}</p>
                                    ${story ? `<p class="text-gray-300 leading-relaxed mb-6">${story}</p>` : ''}
                                    ${button}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'musicplayer') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">${data.title || 'Our Special Song'}</h2>
                        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div class="h-48 flex items-center justify-center text-8xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd)">
                                🎵
                            </div>
                            <div class="p-8">
                                <h3 class="text-2xl font-bold mb-1 text-gray-900">${songName}</h3>
                                <p class="text-lg mb-6" style="color: ${accentColor}">${artist}</p>
                                ${story ? `<p class="text-gray-700 leading-relaxed mb-6">${story}</p>` : ''}
                                <div class="flex items-center justify-center gap-4">
                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl" style="background: ${accentColor}">▶</div>
                                </div>
                                ${url ? `<div class="mt-6 text-center">${button}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'notes') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto text-center relative">
                        <div class="absolute inset-0 flex items-center justify-center opacity-5 text-9xl pointer-events-none">
                            🎵 🎶 🎵 🎶 🎵
                        </div>
                        <div class="relative z-10">
                            <h2 class="text-3xl font-bold mb-8 text-gray-900">${data.title || 'Our Special Song'}</h2>
                            <div class="bg-white rounded-2xl p-10 shadow-xl border-4" style="border-color: ${accentColor}40">
                                <div class="flex items-center justify-center gap-4 mb-6">
                                    <span class="text-4xl">🎵</span>
                                    <span class="text-5xl" style="color: ${accentColor}">🎶</span>
                                    <span class="text-4xl">🎵</span>
                                </div>
                                <h3 class="text-3xl font-bold mb-2" style="color: ${accentColor}">${songName}</h3>
                                <p class="text-xl text-gray-700 mb-6">${artist}</p>
                                ${story ? `<p class="text-gray-800 leading-relaxed mb-6">${story}</p>` : ''}
                                ${button}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">${data.title || 'Our Special Song'}</h2>
                        <div class="bg-white rounded-lg p-10 shadow-2xl relative" style="border: 3px solid ${accentColor}; font-family: Georgia, serif;">
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-white border-3" style="border: 3px solid ${accentColor}">
                                🎵
                            </div>
                            <div class="text-center pt-4">
                                <div class="mb-4">
                                    <div class="inline-block w-20 h-1" style="background: ${accentColor}"></div>
                                </div>
                                <h3 class="text-3xl font-bold mb-2 italic" style="color: ${accentColor}">${songName}</h3>
                                <p class="text-xl text-gray-700 mb-6">${artist}</p>
                                <div class="mb-4">
                                    <div class="inline-block w-20 h-1" style="background: ${accentColor}"></div>
                                </div>
                                ${story ? `<p class="text-gray-800 leading-relaxed mb-6 text-lg">${story}</p>` : ''}
                                ${button}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};
