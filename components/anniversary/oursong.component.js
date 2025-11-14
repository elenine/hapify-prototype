// Our Song Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.oursong = {
    name: '🎵 Our Song',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Special Song" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Song Name</label>
                <input type="text" placeholder="Perfect - Ed Sheeran" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="songname" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Artist</label>
                <input type="text" placeholder="Ed Sheeran" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="artist" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Why This Song?</label>
                <textarea placeholder="This was playing when we first danced together..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Spotify/YouTube Link (optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="link" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-6">${data.title || 'Our Special Song'}</h2>
                <div class="bg-red-50 p-8 rounded-lg">
                    <div class="text-5xl mb-4">🎵</div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${data.songname || 'Song Name'}</h3>
                    ${data.artist ? `<p class="text-gray-600 mb-4">by ${data.artist}</p>` : ''}
                    ${data.story ? `<p class="text-gray-700 mt-4 italic">"${data.story}"</p>` : ''}
                    ${data.link ? `
                        <a href="${data.link}" target="_blank" class="inline-block mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
                            🎧 Listen Now
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `
};
