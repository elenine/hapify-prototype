// Our Favorites Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['our-favorites'] = {
    name: '⭐ Our Favorites',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Things We Love" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Things We Love" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Favorite Categories (Format: Category | Item | Icon, one per line)</label>
                <textarea placeholder="Movie | The Notebook | 🎬
Song | Perfect by Ed Sheeran | 🎵
Food | Italian Pasta | 🍝
Place | The Beach | 🏖️
Activity | Cooking Together | 👨‍🍳
Season | Autumn | 🍂
Color | Sunset Orange | 🧡
Memory | Our First Kiss | 💋
Time of Day | Sunset | 🌅
Hobby | Dancing | 💃" rows="15" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="favorites" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Add emoji icons for visual appeal</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="displayStyle" onchange="updatePreview()">
                    <option value="badges" selected>Badge Pills</option>
                    <option value="cards">Card Grid</option>
                    <option value="list">List View</option>
                    <option value="tiles">Colorful Tiles</option>
                    <option value="bubbles">Bubble Tags</option>
                    <option value="boxes">Category Boxes</option>
                    <option value="stars">Star Ratings</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const favorites = (data.favorites || '').split('\n').filter(f => f.trim());
        const displayStyle = style.displayStyle || 'badges';
        const accentColor = style.accent || '#f59e0b';

        let favoritesHTML = '';

        if (displayStyle === 'badges') {
            favoritesHTML = favorites.map(favorite => {
                const parts = favorite.split('|').map(p => p.trim());
                const category = parts[0] || '';
                const item = parts[1] || '';
                const icon = parts[2] || '⭐';

                return `
                    <div class="inline-flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-md hover:shadow-lg transition m-2">
                        <span class="text-2xl">${icon}</span>
                        <div class="text-left">
                            <div class="text-xs uppercase font-semibold" style="color: ${accentColor}">${category}</div>
                            <div class="text-sm font-bold text-gray-900">${item}</div>
                        </div>
                    </div>
                `;
            }).join('');
            favoritesHTML = `<div class="text-center">${favoritesHTML}</div>`;
        } else if (displayStyle === 'cards') {
            favoritesHTML = favorites.map(favorite => {
                const parts = favorite.split('|').map(p => p.trim());
                const category = parts[0] || '';
                const item = parts[1] || '';
                const icon = parts[2] || '⭐';

                return `
                    <div class="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition text-center">
                        <div class="text-5xl mb-3">${icon}</div>
                        <div class="text-xs uppercase font-semibold mb-1" style="color: ${accentColor}">${category}</div>
                        <div class="text-lg font-bold text-gray-900">${item}</div>
                    </div>
                `;
            }).join('');
            favoritesHTML = `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">${favoritesHTML}</div>`;
        } else if (displayStyle === 'list') {
            favoritesHTML = favorites.map(favorite => {
                const parts = favorite.split('|').map(p => p.trim());
                const category = parts[0] || '';
                const item = parts[1] || '';
                const icon = parts[2] || '⭐';

                return `
                    <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                        <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-3xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                            ${icon}
                        </div>
                        <div class="flex-1">
                            <div class="text-xs uppercase font-semibold" style="color: ${accentColor}">${category}</div>
                            <div class="text-lg font-bold text-gray-900">${item}</div>
                        </div>
                    </div>
                `;
            }).join('');
            favoritesHTML = `<div class="grid md:grid-cols-2 gap-4">${favoritesHTML}</div>`;
        } else if (displayStyle === 'tiles') {
            favoritesHTML = favorites.map((favorite, i) => {
                const parts = favorite.split('|').map(p => p.trim());
                const category = parts[0] || '';
                const item = parts[1] || '';
                const icon = parts[2] || '⭐';

                return `
                    <div class="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                        <div class="absolute inset-0 opacity-90" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);"></div>
                        <div class="relative z-10 p-6 text-center text-white">
                            <div class="text-5xl mb-3">${icon}</div>
                            <div class="text-xs uppercase font-bold mb-2 opacity-90">${category}</div>
                            <div class="text-lg font-bold">${item}</div>
                        </div>
                    </div>
                `;
            }).join('');
            favoritesHTML = `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">${favoritesHTML}</div>`;
        } else if (displayStyle === 'bubbles') {
            favoritesHTML = favorites.map((favorite, i) => {
                const parts = favorite.split('|').map(p => p.trim());
                const category = parts[0] || '';
                const item = parts[1] || '';
                const icon = parts[2] || '⭐';

                return `
                    <div class="inline-block m-2">
                        <div class="rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition text-white" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                            <div class="flex items-center gap-2">
                                <span class="text-2xl">${icon}</span>
                                <div>
                                    <div class="text-xs uppercase font-bold opacity-90">${category}</div>
                                    <div class="text-sm font-bold">${item}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            favoritesHTML = `<div class="text-center">${favoritesHTML}</div>`;
        } else if (displayStyle === 'boxes') {
            favoritesHTML = favorites.map(favorite => {
                const parts = favorite.split('|').map(p => p.trim());
                const category = parts[0] || '';
                const item = parts[1] || '';
                const icon = parts[2] || '⭐';

                return `
                    <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition" style="border-top: 4px solid ${accentColor};">
                        <div class="flex items-center gap-4 mb-3">
                            <div class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}20;">
                                ${icon}
                            </div>
                            <div class="text-xs uppercase font-bold tracking-wider" style="color: ${accentColor}">${category}</div>
                        </div>
                        <div class="text-xl font-bold text-gray-900">${item}</div>
                    </div>
                `;
            }).join('');
            favoritesHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${favoritesHTML}</div>`;
        } else if (displayStyle === 'stars') {
            favoritesHTML = favorites.map(favorite => {
                const parts = favorite.split('|').map(p => p.trim());
                const category = parts[0] || '';
                const item = parts[1] || '';
                const icon = parts[2] || '⭐';

                return `
                    <div class="text-center">
                        <div class="relative inline-block mb-4">
                            <div class="w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40); border: 4px solid ${accentColor};">
                                ${icon}
                            </div>
                        </div>
                        <div class="bg-white rounded-xl p-4 shadow-md">
                            <div class="text-xs uppercase font-bold mb-1" style="color: ${accentColor}">${category}</div>
                            <div class="text-base font-bold text-gray-900">${item}</div>
                        </div>
                    </div>
                `;
            }).join('');
            favoritesHTML = `<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">${favoritesHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">⭐</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Things We Love'}</h2>
                    </div>
                    ${favoritesHTML || '<p class="text-center text-gray-400">Add your favorite things...</p>'}
                </div>
            </div>
        `;
    }
};
