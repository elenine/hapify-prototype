// Love Stats Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-stats'] = {
    name: '📊 Love Stats',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Love in Numbers" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Our Love in Numbers" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Stats (Format: Number | Label | Icon, one per line)</label>
                <textarea placeholder="365 | Days Together | 📅
1000+ | Text Messages | 💬
50 | Dates | 💑
100% | Love Percentage | 💯
3 | Countries Visited | ✈️
Infinite | Hugs & Kisses | 💕" rows="10" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="stats" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Use emoji for icons or leave blank for default heart</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards" selected>Cards</option>
                    <option value="minimal">Minimal</option>
                    <option value="bold">Bold Numbers</option>
                    <option value="circles">Circles</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const stats = (data.stats || '').split('\n').filter(s => s.trim());
        const layout = style.layout || 'cards';

        let statsHTML = '';

        if (layout === 'cards') {
            statsHTML = stats.map(stat => {
                const parts = stat.split('|').map(p => p.trim());
                const number = parts[0] || '0';
                const label = parts[1] || 'Stat';
                const icon = parts[2] || '💕';

                return `
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition text-center">
                        <div class="text-4xl mb-3">${icon}</div>
                        <div class="text-4xl font-bold text-rose-600 mb-2">${number}</div>
                        <div class="text-gray-700 font-medium">${label}</div>
                    </div>
                `;
            }).join('');
            statsHTML = `<div class="grid grid-cols-2 md:grid-cols-3 gap-6">${statsHTML}</div>`;
        } else if (layout === 'minimal') {
            statsHTML = stats.map(stat => {
                const parts = stat.split('|').map(p => p.trim());
                const number = parts[0] || '0';
                const label = parts[1] || 'Stat';
                const icon = parts[2] || '💕';

                return `
                    <div class="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
                        <span class="text-3xl">${icon}</span>
                        <div class="flex-1">
                            <div class="text-2xl font-bold text-gray-900">${number}</div>
                            <div class="text-gray-600">${label}</div>
                        </div>
                    </div>
                `;
            }).join('');
            statsHTML = `<div class="bg-white rounded-xl overflow-hidden shadow-lg">${statsHTML}</div>`;
        } else if (layout === 'bold') {
            statsHTML = stats.map(stat => {
                const parts = stat.split('|').map(p => p.trim());
                const number = parts[0] || '0';
                const label = parts[1] || 'Stat';
                const icon = parts[2] || '💕';

                return `
                    <div class="text-center">
                        <div class="text-2xl mb-2">${icon}</div>
                        <div class="text-5xl md:text-6xl font-black bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">${number}</div>
                        <div class="text-gray-700 text-lg font-medium">${label}</div>
                    </div>
                `;
            }).join('');
            statsHTML = `<div class="grid grid-cols-2 md:grid-cols-3 gap-8">${statsHTML}</div>`;
        } else if (layout === 'circles') {
            statsHTML = stats.map(stat => {
                const parts = stat.split('|').map(p => p.trim());
                const number = parts[0] || '0';
                const label = parts[1] || 'Stat';
                const icon = parts[2] || '💕';

                return `
                    <div class="flex flex-col items-center">
                        <div class="w-32 h-32 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex flex-col items-center justify-center text-white shadow-xl mb-3">
                            <div class="text-2xl mb-1">${icon}</div>
                            <div class="text-2xl font-bold">${number}</div>
                        </div>
                        <div class="text-gray-700 font-medium text-center">${label}</div>
                    </div>
                `;
            }).join('');
            statsHTML = `<div class="grid grid-cols-2 md:grid-cols-3 gap-8">${statsHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">📊</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Love in Numbers'}</h2>
                    </div>
                    ${statsHTML || '<p class="text-center text-gray-400">Add your love stats...</p>'}
                </div>
            </div>
        `;
    }
};
