// Party Favors/Takeaways Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.favors = {
    name: '🎀 Party Favors',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Take Home a Little Magic" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Every guest gets a special treat!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Favors Description</label>
                <textarea placeholder="Each guest will receive:&#10;&#10;🎁 Personalized goodie bag&#10;🍬 Candy and treats&#10;🎈 Mini balloon&#10;📸 Photo from the party&#10;🎉 Special keepsake" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Note</label>
                <input type="text" placeholder="Don't forget to grab your favor bag before you leave!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="note" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf4ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="favorsStyle" oninput="updatePreview()">
                    <option value="gift">Gift Box Style</option>
                    <option value="list">List Style</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const favorsStyle = style.favorsStyle || 'gift';
        const items = (data.description || '').split('\n').filter(i => i.trim());

        if (favorsStyle === 'list') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fdf4ff'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-10">
                            <div class="text-6xl mb-4">🎀</div>
                            <h3 class="text-4xl font-bold text-gray-900 mb-3">${data.title || 'Take Home a Little Magic'}</h3>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="bg-white rounded-xl p-8 shadow-md">
                            <div class="space-y-3 text-lg">
                                ${items.map(item => `<div class="flex items-start gap-3 text-gray-700"><span class="text-pink-500 flex-shrink-0">✨</span><span>${item}</span></div>`).join('')}
                            </div>
                        </div>
                        ${data.note ? `<div class="mt-6 text-center bg-purple-50 rounded-lg p-4 text-purple-700 font-medium">${data.note}</div>` : ''}
                    </div>
                </div>
            `;
        }

        if (favorsStyle === 'elegant') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fdf4ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-2xl p-12 shadow-xl border-2 border-purple-200">
                            <div class="text-center mb-10">
                                <div class="text-6xl mb-4">🎀</div>
                                <h3 class="text-4xl font-serif font-bold text-gray-900 mb-3">${data.title || 'Take Home a Little Magic'}</h3>
                                ${data.subtitle ? `<p class="text-lg text-gray-600 italic">${data.subtitle}</p>` : ''}
                            </div>
                            <div class="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-10"></div>
                            <div class="grid md:grid-cols-2 gap-4 mb-8">
                                ${items.map(item => `
                                    <div class="bg-purple-50 rounded-lg p-4 text-center text-gray-700">
                                        ${item}
                                    </div>
                                `).join('')}
                            </div>
                            ${data.note ? `<div class="text-center text-purple-700 font-semibold border-t border-purple-200 pt-6">${data.note}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#fdf4ff'}">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
                        <div class="text-center mb-10">
                            <div class="text-8xl mb-6">🎀</div>
                            <h2 class="text-5xl font-bold mb-4">${data.title || 'Take Home a Little Magic'}</h2>
                            ${data.subtitle ? `<p class="text-2xl opacity-95">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="bg-white text-gray-900 rounded-2xl p-10">
                            <div class="grid md:grid-cols-2 gap-4 text-lg">
                                ${items.map(item => `
                                    <div class="flex items-start gap-3">
                                        <div class="text-2xl flex-shrink-0">🎁</div>
                                        <div>${item.replace(/^[^\w]+\s*/, '')}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ${data.note ? `<div class="text-center mt-8 text-2xl font-semibold bg-white/20 backdrop-blur rounded-lg py-4 px-6">${data.note}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
