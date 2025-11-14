// First Times Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['first-times'] = {
    name: '🌟 First Times',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Memorable Firsts" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Our Memorable Firsts" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Times (Format: Event | Description, one per line)</label>
                <textarea placeholder="First Meeting | The day our eyes first met at the coffee shop
First Date | Dinner and a movie, nervous but magical
First Kiss | Under the stars in the park
First 'I Love You' | Whispered on a rainy Sunday morning
First Trip Together | Weekend getaway to the mountains
First Dance | Swaying in your living room to our favorite song" rows="12" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="firsts" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="displayStyle" onchange="updatePreview()">
                    <option value="scrapbook" selected>Scrapbook Style</option>
                    <option value="timeline">Timeline</option>
                    <option value="cards">Card Grid</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const firsts = (data.firsts || '').split('\n').filter(f => f.trim());
        const displayStyle = style.displayStyle || 'scrapbook';

        let firstsHTML = '';

        if (displayStyle === 'scrapbook') {
            firstsHTML = firsts.map((first, i) => {
                const parts = first.split('|').map(p => p.trim());
                const event = parts[0] || '';
                const description = parts[1] || '';
                const rotate = i % 2 === 0 ? '-rotate-1' : 'rotate-1';

                return `
                    <div class="transform ${rotate} hover:rotate-0 transition-transform duration-300">
                        <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl">
                            <div class="flex items-start gap-3 mb-3">
                                <span class="text-3xl">🌟</span>
                                <h3 class="text-xl font-bold text-rose-600 flex-1">${event}</h3>
                            </div>
                            <p class="text-gray-700 ml-12">${description}</p>
                        </div>
                    </div>
                `;
            }).join('');
            firstsHTML = `<div class="grid md:grid-cols-2 gap-6">${firstsHTML}</div>`;
        } else if (displayStyle === 'timeline') {
            firstsHTML = firsts.map((first, i) => {
                const parts = first.split('|').map(p => p.trim());
                const event = parts[0] || '';
                const description = parts[1] || '';

                return `
                    <div class="flex gap-4 mb-6 last:mb-0">
                        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            ${i + 1}
                        </div>
                        <div class="flex-1 bg-white rounded-lg p-5 shadow-md">
                            <h3 class="text-lg font-bold text-gray-900 mb-2">${event}</h3>
                            <p class="text-gray-600">${description}</p>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            firstsHTML = firsts.map((first, i) => {
                const parts = first.split('|').map(p => p.trim());
                const event = parts[0] || '';
                const description = parts[1] || '';

                return `
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                        <div class="text-4xl mb-3 text-center">✨</div>
                        <h3 class="text-xl font-bold text-rose-600 mb-3 text-center">${event}</h3>
                        <p class="text-gray-700 text-center">${description}</p>
                    </div>
                `;
            }).join('');
            firstsHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${firstsHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fffbeb'}">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">🌟</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Memorable Firsts'}</h2>
                    </div>
                    ${firstsHTML || '<p class="text-center text-gray-400">Add your memorable firsts...</p>'}
                </div>
            </div>
        `;
    }
};
