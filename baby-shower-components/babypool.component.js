// Baby Pool Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.babypool = {
    name: '🎯 Baby Pool',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Baby Pool" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" value="Baby Pool" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Make your predictions! Closest guesses win a prize!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Pool Categories</label>
                <textarea placeholder="• Birth Date\n• Time of Birth\n• Weight\n• Length\n• Hair Color\n• Eye Color" rows="7" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="categories" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">List the categories guests can make predictions for</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">How to Participate</label>
                <textarea placeholder="Fill out a prediction card at the shower or submit online..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="howTo" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Prize Information</label>
                <input type="text" placeholder="Winner receives a $50 gift card!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="prize" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Online Pool Link (Optional)</label>
                <input type="url" placeholder="https://babypool.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="poolLink" oninput="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#fffbeb';
        const cardBg = style.cardBg || '#ffffff';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-3">🎯</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Baby Pool'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    <div class="p-8 rounded-2xl shadow-lg" style="background: ${cardBg};">
                        ${data.categories ? `
                            <div class="mb-6">
                                <h3 class="font-bold text-lg mb-4 text-amber-700 flex items-center gap-2">
                                    <span>📝</span>
                                    <span>Prediction Categories</span>
                                </h3>
                                <div class="bg-amber-50 rounded-lg p-5">
                                    <div class="text-gray-700 whitespace-pre-wrap">${data.categories}</div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.howTo ? `
                            <div class="mb-6">
                                <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span>👉</span>
                                    <span>How to Participate</span>
                                </h3>
                                <p class="text-gray-700">${data.howTo}</p>
                            </div>
                        ` : ''}

                        ${data.prize ? `
                            <div class="mb-6 p-4 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg border-2 border-amber-300">
                                <div class="flex items-center gap-3">
                                    <div class="text-3xl">🏆</div>
                                    <div>
                                        <h3 class="font-bold text-gray-900 mb-1">Prize</h3>
                                        <p class="text-gray-700">${data.prize}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.poolLink ? `
                            <div class="text-center">
                                <a href="${data.poolLink}" target="_blank" class="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition shadow-md">
                                    🎲 Make Your Predictions Online
                                </a>
                            </div>
                        ` : ''}

                        ${!data.categories && !data.howTo && !data.prize && !data.poolLink ? `
                            <p class="text-center text-gray-500 py-8">Add baby pool details to display here</p>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
