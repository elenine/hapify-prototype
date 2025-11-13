// Games Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.games = {
    name: '🎮 Games',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Shower Games" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Games List (one per line)</label>
                <textarea placeholder="Baby Bingo&#10;Guess the Baby Food&#10;Diaper Raffle" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="games" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fffbeb'}">
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Shower Games'}</h2>
            <div class="max-w-md mx-auto">
                ${data.games ? data.games.split('\n').filter(game => game.trim()).map(game => `
                    <div class="flex items-start gap-3 mb-3">
                        <div class="text-amber-600 mt-1">🎮</div>
                        <div>${game}</div>
                    </div>
                `).join('') : '<p class="text-center text-gray-500">Add games for your shower</p>'}
            </div>
        </div>
    `
};
