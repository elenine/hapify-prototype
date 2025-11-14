// Party Theme Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.theme = {
    name: '🎨 Party Theme',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Party Theme" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Name</label>
                <input type="text" placeholder="Magical Unicorn Adventure" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="themeName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="icon" oninput="updatePreview()">
                    <option value="🦄">🦄 Unicorn</option>
                    <option value="🏴‍☠️">🏴‍☠️ Pirate</option>
                    <option value="👸">👸 Princess</option>
                    <option value="🦸">🦸 Superhero</option>
                    <option value="🎪">🎪 Circus</option>
                    <option value="🌈">🌈 Rainbow</option>
                    <option value="🚀">🚀 Space</option>
                    <option value="🦖">🦖 Dinosaur</option>
                    <option value="🧚">🧚 Fairy</option>
                    <option value="🎬">🎬 Hollywood</option>
                    <option value="🏖️">🏖️ Beach</option>
                    <option value="🌸">🌸 Garden</option>
                    <option value="🎮">🎮 Gaming</option>
                    <option value="🎨">🎨 Art</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme Description</label>
                <textarea placeholder="Join us for a magical journey to a land of unicorns and rainbows!&#10;&#10;Come dressed in your favorite rainbow colors or unicorn costume!" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Color Scheme</label>
                <input type="text" placeholder="Purple, Pink & Gold" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="colors" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Costume/Dress Suggestion (Optional)</label>
                <input type="text" placeholder="Feel free to come in costume!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="costume" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="themeStyle" oninput="updatePreview()">
                    <option value="festive">Festive</option>
                    <option value="elegant">Elegant</option>
                    <option value="playful">Playful</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const themeStyle = style.themeStyle || 'festive';
        const icon = data.icon || '🎨';

        if (themeStyle === 'playful') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#faf5ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 rounded-3xl p-12 shadow-2xl transform -rotate-1">
                            <div class="bg-white/90 backdrop-blur rounded-2xl p-10 rotate-1">
                                <div class="text-center">
                                    <div class="text-8xl mb-6 animate-bounce">${icon}</div>
                                    <div class="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2">${data.title || 'Party Theme'}</div>
                                    <h2 class="text-5xl font-black mb-6" style="background: linear-gradient(to right, #ec4899, #f43f5e, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.themeName || 'Amazing Party'}</h2>
                                    <div class="text-gray-700 text-xl leading-relaxed whitespace-pre-line mb-6">${data.description || 'Get ready for an unforgettable celebration!'}</div>
                                    ${data.colors ? `<div class="inline-block bg-pink-100 px-6 py-3 rounded-full mb-4"><span class="font-bold text-pink-700">Colors:</span> ${data.colors}</div>` : ''}
                                    ${data.costume ? `<div class="mt-4 text-lg text-purple-700 font-semibold">✨ ${data.costume}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (themeStyle === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#faf5ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-2xl shadow-xl p-12 border-2 border-purple-200">
                            <div class="text-center">
                                <div class="text-7xl mb-6">${icon}</div>
                                <div class="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-3">${data.title || 'Party Theme'}</div>
                                <h2 class="text-5xl font-serif font-bold mb-6 text-gray-900">${data.themeName || 'Amazing Party'}</h2>
                                <div class="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
                                <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line max-w-2xl mx-auto mb-8">${data.description || 'Get ready for an unforgettable celebration!'}</div>
                                ${data.colors ? `<div class="mb-6"><span class="font-semibold text-gray-900">Theme Colors:</span> <span class="text-purple-600">${data.colors}</span></div>` : ''}
                                ${data.costume ? `<div class="bg-purple-50 rounded-lg p-4 text-purple-800">${data.costume}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#faf5ff'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-7xl mb-4">${icon}</div>
                        <div class="text-sm font-bold text-purple-600 uppercase tracking-wide mb-2">${data.title || 'Party Theme'}</div>
                        <h2 class="text-5xl font-bold mb-6" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.themeName || 'Amazing Party'}</h2>
                    </div>
                    <div class="bg-white rounded-xl p-10 shadow-lg">
                        <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line text-center mb-8">${data.description || 'Get ready for an unforgettable celebration!'}</div>
                        <div class="flex flex-wrap justify-center gap-6">
                            ${data.colors ? `
                                <div class="bg-purple-50 rounded-lg px-6 py-3">
                                    <div class="text-xs font-bold text-purple-600 uppercase mb-1">Theme Colors</div>
                                    <div class="text-gray-900 font-semibold">${data.colors}</div>
                                </div>
                            ` : ''}
                            ${data.costume ? `
                                <div class="bg-pink-50 rounded-lg px-6 py-3">
                                    <div class="text-xs font-bold text-pink-600 uppercase mb-1">Dress Code</div>
                                    <div class="text-gray-900 font-semibold">${data.costume}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
