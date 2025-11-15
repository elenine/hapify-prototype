// Weather Component for Event

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.weather = {
    name: '🌤️ Weather & What to Bring',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Weather & What to Bring" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" value="Weather & What to Bring" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Season/Month</label>
                <input type="text" placeholder="Late September" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="season" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Expected Weather</label>
                <textarea placeholder="Expect mild temperatures around 70°F (21°C)&#10;Possible light rain in the evening" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="expectedWeather" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">What to Bring</label>
                <textarea placeholder="• Light jacket or sweater&#10;• Umbrella (just in case)&#10;• Sunglasses&#10;• Comfortable walking shoes" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="whatToBring" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Backup Plan (for outdoor events)</label>
                <textarea placeholder="In case of rain, the event will move to the indoor pavilion" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="backupPlan" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Attire Recommendation</label>
                <input type="text" placeholder="Smart casual - dress for outdoor activities" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="attire" oninput="updatePreview()">
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
    render: (data, style) => {
        const bgColor = style.bg || '#fffbeb';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🌤️</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Weather & What to Bring'}</h2>
                        ${data.season ? `<p class="text-gray-600">Event taking place in ${data.season}</p>` : ''}
                    </div>

                    <div class="space-y-6">
                        ${data.expectedWeather ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3 mb-3">
                                    <div class="text-2xl">☀️</div>
                                    <h3 class="font-semibold text-lg text-amber-700">Expected Weather</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap pl-9">${data.expectedWeather}</div>
                            </div>
                        ` : ''}

                        ${data.whatToBring ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3 mb-3">
                                    <div class="text-2xl">🎒</div>
                                    <h3 class="font-semibold text-lg text-amber-700">What to Bring</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap pl-9">${data.whatToBring}</div>
                            </div>
                        ` : ''}

                        ${data.attire ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl">👔</div>
                                    <div>
                                        <h3 class="font-semibold text-lg text-amber-700 mb-1">Recommended Attire</h3>
                                        <p class="text-gray-700">${data.attire}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.backupPlan ? `
                            <div class="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-500">
                                <div class="flex items-start gap-3">
                                    <div class="text-xl">⛱️</div>
                                    <div>
                                        <h4 class="font-semibold text-gray-900 mb-1">Backup Plan</h4>
                                        <p class="text-sm text-gray-700">${data.backupPlan}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
