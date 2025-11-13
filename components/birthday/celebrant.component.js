// Guest of Honor Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebrant = {
    name: '🎉 Guest of Honor',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload photo</div>
                    <input type="file" class="hidden section-data" data-field="photo" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Turning Age</label>
                <input type="text" placeholder="30" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="age" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fun Description</label>
                <textarea placeholder="Join us in celebrating our amazing friend who loves adventure, coffee, and making everyone laugh!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fun Facts (Optional)</label>
                <textarea placeholder="One fun fact per line:\n- Coffee addict ☕\n- Travel enthusiast 🌍\n- Dog lover 🐕" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="facts" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">Enter one fact per line (start with - or •)</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="cardStyle" oninput="updatePreview()">
                    <option value="card">Card Layout</option>
                    <option value="side-by-side">Side by Side</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const cardStyle = style.cardStyle || 'card';
        const facts = data.facts ? data.facts.split('\n').filter(f => f.trim()).map(f => f.trim()) : [];

        if (cardStyle === 'side-by-side') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fdf2f8'}">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">Meet the Guest of Honor</h2>
                        <div class="bg-white rounded-lg p-6 shadow-md">
                            <div class="flex flex-col md:flex-row gap-6 items-center">
                                ${data.photo ? `
                                    <img src="${data.photo}" class="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-pink-200">
                                ` : `
                                    <div class="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center text-5xl flex-shrink-0">🎂</div>
                                `}
                                <div class="flex-1 text-center md:text-left">
                                    <div class="text-2xl font-bold text-pink-600 mb-1">${data.name || 'Name'}</div>
                                    ${data.age ? `<div class="text-lg text-gray-600 mb-3">Turning ${data.age}! 🎉</div>` : ''}
                                    ${data.description ? `<p class="text-gray-600 leading-relaxed">${data.description}</p>` : ''}
                                    ${facts.length > 0 ? `
                                        <div class="mt-4 text-sm">
                                            <div class="font-semibold text-gray-700 mb-2">Fun Facts:</div>
                                            <ul class="space-y-1 text-gray-600">
                                                ${facts.map(fact => `<li>${fact}</li>`).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fdf2f8'}">
                <div class="max-w-md mx-auto text-center">
                    <h2 class="text-2xl font-bold mb-8">Meet the Guest of Honor</h2>
                    <div class="bg-white rounded-lg p-8 shadow-md">
                        ${data.photo ? `
                            <img src="${data.photo}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-200">
                        ` : `
                            <div class="w-32 h-32 rounded-full mx-auto mb-4 bg-pink-100 flex items-center justify-center text-5xl">🎂</div>
                        `}
                        <div class="text-2xl font-bold text-pink-600 mb-2">${data.name || 'Name'}</div>
                        ${data.age ? `<div class="text-lg text-gray-600 mb-4">Turning ${data.age}! 🎉</div>` : ''}
                        ${data.description ? `<p class="text-gray-600 leading-relaxed mt-4">${data.description}</p>` : ''}
                        ${facts.length > 0 ? `
                            <div class="mt-6 text-sm text-left">
                                <div class="font-semibold text-gray-700 mb-2 text-center">Fun Facts:</div>
                                <ul class="space-y-1 text-gray-600">
                                    ${facts.map(fact => `<li>${fact}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
