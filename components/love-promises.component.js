// Love Promises Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-promises'] = {
    name: '💍 Love Promises',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="My Promises to You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="My Promises to You" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Opening Message</label>
                <textarea placeholder="I promise to love you unconditionally, today and always..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Promises (one per line)</label>
                <textarea placeholder="I promise to always support your dreams
I promise to be your best friend
I promise to make you laugh every day
I promise to love you more with each passing day
I promise to grow old with you" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="promises" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="elegant" selected>Elegant Cards</option>
                    <option value="simple">Simple List</option>
                    <option value="hearts">With Hearts</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const promises = (data.promises || '').split('\n').filter(p => p.trim());
        const cardStyle = style.cardStyle || 'elegant';

        let promisesHTML = '';
        if (cardStyle === 'elegant') {
            promisesHTML = promises.map((promise, i) => `
                <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">💍</span>
                        <p class="text-gray-700 flex-1">${promise.trim()}</p>
                    </div>
                </div>
            `).join('');
            promisesHTML = `<div class="grid gap-4">${promisesHTML}</div>`;
        } else if (cardStyle === 'hearts') {
            promisesHTML = promises.map((promise, i) => `
                <div class="flex items-start gap-4 mb-4 bg-white/50 rounded-lg p-4">
                    <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 text-white rounded-full flex items-center justify-center text-lg">
                        ❤️
                    </div>
                    <p class="text-gray-700 flex-1 pt-1">${promise.trim()}</p>
                </div>
            `).join('');
        } else {
            promisesHTML = promises.map((promise, i) => `
                <div class="flex items-start gap-3 mb-3">
                    <span class="text-rose-500 text-lg mt-1">✓</span>
                    <p class="text-gray-700 text-lg flex-1">${promise.trim()}</p>
                </div>
            `).join('');
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">💍</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'My Promises to You'}</h2>
                        ${data.message ? `<p class="text-lg text-gray-600 italic">${data.message}</p>` : ''}
                    </div>
                    ${promisesHTML}
                </div>
            </div>
        `;
    }
};
