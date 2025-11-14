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
                    <option value="card">Centered Card</option>
                    <option value="side-by-side">Side by Side</option>
                    <option value="spotlight">Spotlight</option>
                    <option value="polaroid">Polaroid Style</option>
                    <option value="modern">Modern Split</option>
                    <option value="minimal">Minimal Profile</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const cardStyle = style.cardStyle || 'card';
        const bgColor = style.bg || '#fdf2f8';
        const facts = data.facts ? data.facts.split('\n').filter(f => f.trim()).map(f => f.trim()) : [];

        // Side by Side
        if (cardStyle === 'side-by-side') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
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

        // Spotlight
        if (cardStyle === 'spotlight') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${bgColor} 0%, #fce7f3 100%);">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-5xl mb-4">🌟</div>
                        <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Guest of Honor</h2>
                        <div class="relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-30"></div>
                            <div class="relative bg-white rounded-2xl p-8 shadow-2xl">
                                ${data.photo ? `
                                    <img src="${data.photo}" class="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-pink-300 shadow-lg">
                                ` : `
                                    <div class="w-40 h-40 rounded-full mx-auto mb-6 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-6xl">🎂</div>
                                `}
                                <div class="text-3xl font-bold text-pink-600 mb-2">${data.name || 'Name'}</div>
                                ${data.age ? `<div class="text-xl text-gray-600 mb-4">Turning ${data.age}! 🎉</div>` : ''}
                                ${data.description ? `<p class="text-gray-700 leading-relaxed mt-6">${data.description}</p>` : ''}
                                ${facts.length > 0 ? `
                                    <div class="mt-6 p-4 bg-pink-50 rounded-lg">
                                        <div class="font-semibold text-gray-800 mb-3">✨ Fun Facts</div>
                                        <ul class="space-y-2 text-gray-600 text-sm">
                                            ${facts.map(fact => `<li>${fact}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Polaroid Style
        if (cardStyle === 'polaroid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold text-center mb-8">📸 Guest of Honor</h2>
                        <div class="bg-white p-6 shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                            ${data.photo ? `
                                <img src="${data.photo}" class="w-full aspect-square object-cover mb-4">
                            ` : `
                                <div class="w-full aspect-square bg-pink-100 flex items-center justify-center text-8xl mb-4">🎂</div>
                            `}
                            <div class="text-center px-2 py-4">
                                <div class="text-2xl font-bold text-gray-800 mb-1">${data.name || 'Name'}</div>
                                ${data.age ? `<div class="text-lg text-pink-600 mb-3">🎉 ${data.age} Years 🎉</div>` : ''}
                                ${data.description ? `<p class="text-gray-600 text-sm leading-relaxed mt-3">${data.description}</p>` : ''}
                                ${facts.length > 0 ? `
                                    <div class="mt-4 text-xs text-left bg-gray-50 p-3 rounded">
                                        ${facts.map(fact => `<div class="py-1">${fact}</div>`).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modern Split
        if (cardStyle === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-xl">
                            <div class="bg-gradient-to-br from-pink-500 to-purple-600 p-12 flex items-center justify-center">
                                ${data.photo ? `
                                    <img src="${data.photo}" class="w-56 h-56 rounded-2xl object-cover shadow-2xl border-4 border-white">
                                ` : `
                                    <div class="w-56 h-56 rounded-2xl bg-white bg-opacity-20 flex items-center justify-center text-8xl">🎂</div>
                                `}
                            </div>
                            <div class="p-10 flex flex-col justify-center">
                                <div class="text-xs font-semibold text-pink-600 uppercase tracking-wide mb-2">Guest of Honor</div>
                                <div class="text-3xl font-bold text-gray-900 mb-2">${data.name || 'Name'}</div>
                                ${data.age ? `<div class="text-xl text-pink-600 mb-4">Celebrating ${data.age} Years! 🎉</div>` : ''}
                                ${data.description ? `<p class="text-gray-600 leading-relaxed mb-4">${data.description}</p>` : ''}
                                ${facts.length > 0 ? `
                                    <div class="mt-4">
                                        <div class="font-semibold text-gray-800 mb-2 text-sm">About ${data.name?.split(' ')[0] || 'them'}:</div>
                                        <ul class="space-y-1 text-sm text-gray-600">
                                            ${facts.map(fact => `<li class="flex items-start gap-2"><span class="text-pink-500">•</span><span>${fact.replace(/^[-•]\s*/, '')}</span></li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Profile
        if (cardStyle === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor}">
                    <div class="max-w-lg mx-auto text-center">
                        ${data.photo ? `
                            <img src="${data.photo}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-2 border-pink-300">
                        ` : `
                            <div class="w-32 h-32 rounded-full mx-auto mb-6 bg-pink-200 flex items-center justify-center text-5xl">🎂</div>
                        `}
                        <div class="text-3xl font-bold text-gray-900 mb-1">${data.name || 'Name'}</div>
                        ${data.age ? `<div class="text-lg text-pink-600 mb-6">Turning ${data.age}</div>` : ''}
                        <div class="w-16 h-1 bg-pink-300 mx-auto mb-6"></div>
                        ${data.description ? `<p class="text-gray-600 leading-relaxed mb-6 max-w-md mx-auto">${data.description}</p>` : ''}
                        ${facts.length > 0 ? `
                            <div class="flex flex-wrap gap-2 justify-center mt-6">
                                ${facts.map(fact => `<span class="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">${fact.replace(/^[-•]\s*/, '')}</span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // Centered Card (default)
        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
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
