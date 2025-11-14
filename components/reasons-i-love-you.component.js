// Reasons I Love You Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['reasons-i-love-you'] = {
    name: '💖 Reasons I Love You',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Why I Love You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Why I Love You" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Reasons (one per line)</label>
                <textarea placeholder="Your smile brightens my day
Your kindness touches my heart
Your laughter is my favorite sound
Your love makes me complete" rows="10" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="reasons" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff1f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="list">Simple List</option>
                    <option value="grid" selected>Grid Layout</option>
                    <option value="numbered">Numbered List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const reasons = (data.reasons || '').split('\n').filter(r => r.trim());
        const layout = style.layout || 'grid';

        let reasonsHTML = '';
        if (layout === 'grid') {
            reasonsHTML = reasons.map((reason, i) => `
                <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <div class="text-3xl mb-3">💝</div>
                    <p class="text-gray-700">${reason.trim()}</p>
                </div>
            `).join('');
            reasonsHTML = `<div class="grid md:grid-cols-2 gap-4">${reasonsHTML}</div>`;
        } else if (layout === 'numbered') {
            reasonsHTML = reasons.map((reason, i) => `
                <div class="flex gap-4 mb-4">
                    <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                        ${i + 1}
                    </div>
                    <p class="text-gray-700 flex-1 pt-2">${reason.trim()}</p>
                </div>
            `).join('');
        } else {
            reasonsHTML = reasons.map(reason => `
                <div class="flex gap-3 mb-3">
                    <span class="text-rose-500 text-xl">❤️</span>
                    <p class="text-gray-700 flex-1">${reason.trim()}</p>
                </div>
            `).join('');
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fff1f2'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">💖</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Why I Love You'}</h2>
                    </div>
                    ${reasonsHTML}
                </div>
            </div>
        `;
    }
};
