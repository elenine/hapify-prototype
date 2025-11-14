// Future Dreams Component for Anniversary Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.futuredreams = {
    name: '🌟 Future Dreams',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Looking Forward" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Future Plans (one per line)</label>
                <textarea placeholder="Travel the world together&#10;Watch our children grow&#10;Grow old side by side&#10;Create more beautiful memories" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="dreams" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <input type="text" placeholder="Here's to many more years together!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="closing" oninput="updatePreview()">
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
                <div class="text-5xl mb-4">🌟</div>
                <h2 class="text-2xl font-bold mb-8">${data.title || 'Looking Forward'}</h2>
                <div class="space-y-3 mb-6">
                    ${data.dreams ? data.dreams.split('\n').filter(d => d.trim()).map(dream => `
                        <div class="bg-red-50 p-4 rounded-lg flex items-center gap-3">
                            <div class="text-red-600">✨</div>
                            <div class="text-left">${dream}</div>
                        </div>
                    `).join('') : '<p class="text-gray-500">Add your future dreams...</p>'}
                </div>
                ${data.closing ? `<p class="text-lg font-semibold text-red-600 mt-6">${data.closing}</p>` : ''}
            </div>
        </div>
    `
};
