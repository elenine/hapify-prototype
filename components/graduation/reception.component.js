// Reception Details Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.reception = {
    name: '🍾 Reception Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Reception & Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Join us for a reception following the ceremony to celebrate this special milestone!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="University Student Center, Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="location" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input type="text" placeholder="Immediately following ceremony, 1:00 PM - 4:00 PM" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Food & Beverages</label>
                <textarea placeholder="Light refreshments, hors d'oeuvres, and beverages will be served." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="food" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Entertainment/Activities (Optional)</label>
                <textarea placeholder="• Photo booth with props&#10;• Live music&#10;• Award presentations" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="activities" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code (Optional)</label>
                <input type="text" placeholder="Casual" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="dresscode" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="iconlist">Icon List</option>
                    <option value="cards">Card Grid</option>
                    <option value="modern">Modern Split</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'iconlist';
        const bg = style.bg || '#fffbeb';
        const accent = style.accent || '#f59e0b';
        const activities = data.activities ? data.activities.split('\n').filter(a => a.trim()) : [];

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-5xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">🍾</div>
                                <h2 class="text-2xl font-bold mb-4">${data.title || 'Reception & Celebration'}</h2>
                                ${data.description ? `<p class="text-gray-600">${data.description}</p>` : ''}
                            </div>

                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                ${data.location ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">📍</div>
                                        <div class="text-xs mb-2 font-semibold" style="color: ${accent}">LOCATION</div>
                                        <div class="text-gray-900 font-medium">${data.location}</div>
                                    </div>
                                ` : ''}
                                ${data.time ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">🕐</div>
                                        <div class="text-xs mb-2 font-semibold" style="color: ${accent}">TIME</div>
                                        <div class="text-gray-900 font-medium">${data.time}</div>
                                    </div>
                                ` : ''}
                                ${data.food ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">🍽️</div>
                                        <div class="text-xs mb-2 font-semibold" style="color: ${accent}">FOOD & BEVERAGES</div>
                                        <div class="text-gray-700 text-sm">${data.food}</div>
                                    </div>
                                ` : ''}
                                ${activities.length > 0 ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">🎉</div>
                                        <div class="text-xs mb-2 font-semibold" style="color: ${accent}">ACTIVITIES</div>
                                        <ul class="space-y-1 text-gray-700 text-sm">
                                            ${activities.map(activity => `<li>${activity}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                                ${data.dresscode ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">👔</div>
                                        <div class="text-xs mb-2 font-semibold" style="color: ${accent}">DRESS CODE</div>
                                        <div class="text-gray-900 font-medium">${data.dresscode}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%); color: white">
                        <div class="max-w-4xl mx-auto">
                            <div class="text-center mb-10">
                                <div class="text-6xl mb-4">🍾</div>
                                <h2 class="text-4xl font-black mb-4">${data.title || 'Reception & Celebration'}</h2>
                                ${data.description ? `<p class="text-lg opacity-90">${data.description}</p>` : ''}
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                ${data.location ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="text-3xl">📍</span>
                                            <span class="text-xs font-semibold opacity-75">LOCATION</span>
                                        </div>
                                        <div class="font-semibold text-lg">${data.location}</div>
                                    </div>
                                ` : ''}
                                ${data.time ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="text-3xl">🕐</span>
                                            <span class="text-xs font-semibold opacity-75">TIME</span>
                                        </div>
                                        <div class="font-semibold">${data.time}</div>
                                    </div>
                                ` : ''}
                                ${data.food ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="text-3xl">🍽️</span>
                                            <span class="text-xs font-semibold opacity-75">FOOD & BEVERAGES</span>
                                        </div>
                                        <div class="text-sm">${data.food}</div>
                                    </div>
                                ` : ''}
                                ${activities.length > 0 ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="text-3xl">🎉</span>
                                            <span class="text-xs font-semibold opacity-75">ACTIVITIES</span>
                                        </div>
                                        <ul class="space-y-1 text-sm">
                                            ${activities.map(activity => `<li>${activity}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                                ${data.dresscode ? `
                                    <div class="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-2">
                                            <span class="text-3xl">👔</span>
                                            <span class="text-xs font-semibold opacity-75">DRESS CODE</span>
                                        </div>
                                        <div class="font-semibold">${data.dresscode}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-4xl mb-3">🍾</div>
                                <h2 class="text-2xl font-bold mb-4" style="color: ${accent}">${data.title || 'Reception & Celebration'}</h2>
                                ${data.description ? `<p class="text-gray-600 text-sm">${data.description}</p>` : ''}
                            </div>

                            <div class="space-y-4">
                                ${data.location ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Location</div>
                                        <div class="font-medium">${data.location}</div>
                                    </div>
                                ` : ''}
                                ${data.time ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Time</div>
                                        <div class="font-medium">${data.time}</div>
                                    </div>
                                ` : ''}
                                ${data.food ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Food & Beverages</div>
                                        <div class="text-sm text-gray-700">${data.food}</div>
                                    </div>
                                ` : ''}
                                ${activities.length > 0 ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-2" style="color: ${accent}">Activities</div>
                                        <ul class="space-y-1 text-sm text-gray-700">
                                            ${activities.map(activity => `<li>${activity}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                                ${data.dresscode ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <div class="text-xs mb-1" style="color: ${accent}">Dress Code</div>
                                        <div class="font-medium">${data.dresscode}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'iconlist':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">🍾</div>
                                <h2 class="text-2xl font-bold mb-4">${data.title || 'Reception & Celebration'}</h2>
                                ${data.description ? `<p class="text-gray-600">${data.description}</p>` : ''}
                            </div>

                            <div class="bg-white rounded-2xl p-8 shadow-lg" style="border: 2px solid ${accent}20">
                                <div class="space-y-6">
                                    ${data.location ? `
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style="background: ${accent}">
                                                📍
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Location</div>
                                                <div class="text-gray-900 font-semibold text-lg">${data.location}</div>
                                            </div>
                                        </div>
                                    ` : ''}

                                    ${data.time ? `
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style="background: ${accent}">
                                                🕐
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Time</div>
                                                <div class="text-gray-900 font-semibold">${data.time}</div>
                                            </div>
                                        </div>
                                    ` : ''}

                                    ${data.food ? `
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style="background: ${accent}">
                                                🍽️
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Food & Beverages</div>
                                                <div class="text-gray-700">${data.food}</div>
                                            </div>
                                        </div>
                                    ` : ''}

                                    ${activities.length > 0 ? `
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style="background: ${accent}">
                                                🎉
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-2" style="color: ${accent}">Activities</div>
                                                <ul class="space-y-1 text-gray-700">
                                                    ${activities.map(activity => `<li>${activity}</li>`).join('')}
                                                </ul>
                                            </div>
                                        </div>
                                    ` : ''}

                                    ${data.dresscode ? `
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style="background: ${accent}">
                                                👔
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-xs uppercase tracking-wide mb-1" style="color: ${accent}">Dress Code</div>
                                                <div class="text-gray-900 font-semibold">${data.dresscode}</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
