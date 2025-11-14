// Love Map Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-map'] = {
    name: '🗺️ Love Map',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Places of Our Heart" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Places of Our Heart" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Every place holds a special memory of us..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Places (Format: Location | Memory | Icon, one per line)</label>
                <textarea placeholder="Coffee Shop on 5th Ave | Where we first met | ☕
Central Park | Our first kiss under the oak tree | 🌳
Italian Restaurant | First date, you had the pasta | 🍝
The Beach | Sunset walks and promises | 🏖️
Mountain Cabin | Weekend getaway, fireplace talks | ⛰️
Home Sweet Home | Where our love grows every day | 🏡" rows="12" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="places" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Use emoji for icons or they'll default to a heart</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfdf5" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Map Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="mapStyle" onchange="updatePreview()">
                    <option value="pins" selected>Map Pins</option>
                    <option value="list">Location List</option>
                    <option value="postcards">Postcard Style</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const places = (data.places || '').split('\n').filter(p => p.trim());
        const mapStyle = style.mapStyle || 'pins';

        let placesHTML = '';

        if (mapStyle === 'pins') {
            placesHTML = places.map((place, i) => {
                const parts = place.split('|').map(p => p.trim());
                const location = parts[0] || '';
                const memory = parts[1] || '';
                const icon = parts[2] || '📍';

                return `
                    <div class="relative group">
                        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                            <div class="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                                ${icon}
                            </div>
                            <div class="ml-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">${location}</h3>
                                <p class="text-gray-600">${memory}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            placesHTML = `<div class="grid md:grid-cols-2 gap-8">${placesHTML}</div>`;
        } else if (mapStyle === 'list') {
            placesHTML = places.map((place, i) => {
                const parts = place.split('|').map(p => p.trim());
                const location = parts[0] || '';
                const memory = parts[1] || '';
                const icon = parts[2] || '📍';

                return `
                    <div class="flex gap-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                        <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-3xl">
                            ${icon}
                        </div>
                        <div class="flex-1">
                            <h3 class="text-lg font-bold text-gray-900 mb-1">${location}</h3>
                            <p class="text-gray-600">${memory}</p>
                        </div>
                    </div>
                `;
            }).join('');
            placesHTML = `<div class="space-y-4">${placesHTML}</div>`;
        } else {
            placesHTML = places.map((place, i) => {
                const parts = place.split('|').map(p => p.trim());
                const location = parts[0] || '';
                const memory = parts[1] || '';
                const icon = parts[2] || '📍';

                return `
                    <div class="bg-white rounded-lg overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
                        <div class="bg-gradient-to-br from-emerald-500 to-teal-500 p-6 text-center">
                            <div class="text-6xl mb-2">${icon}</div>
                            <div class="text-white text-lg font-bold">${location}</div>
                        </div>
                        <div class="p-5 border-t-4 border-dashed border-gray-300">
                            <p class="text-gray-700 text-center italic">${memory}</p>
                        </div>
                    </div>
                `;
            }).join('');
            placesHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${placesHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ecfdf5'}">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">🗺️</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-3">${data.title || 'Places of Our Heart'}</h2>
                        ${data.description ? `<p class="text-lg text-gray-600">${data.description}</p>` : ''}
                    </div>
                    ${placesHTML || '<p class="text-center text-gray-400">Add your special places...</p>'}
                </div>
            </div>
        `;
    }
};
