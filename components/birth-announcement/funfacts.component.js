// Fun Facts Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.funfacts = {
    name: '🎈 Fun Facts',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Favorite Song</label>
                <input type="text" placeholder="Twinkle Twinkle Little Star" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="favoriteSong" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sleeps Best When</label>
                <input type="text" placeholder="Being rocked gently" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="sleepsBest" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Makes Us Smile When</label>
                <input type="text" placeholder="She coos and gurgles" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="makesSmile" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Looks Like</label>
                <input type="text" placeholder="Dad's eyes, Mom's nose" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="looksLike" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Personality</label>
                <input type="text" placeholder="Calm and curious" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="personality" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nickname</label>
                <input type="text" placeholder="Little Sunshine" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="nickname" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#f0fdfa'}">
            <div class="max-w-md mx-auto">
                <div class="text-center text-4xl mb-4">🎈</div>
                <h2 class="text-2xl font-bold text-center mb-6">Fun Facts About Me</h2>
                <div class="grid grid-cols-1 gap-3">
                    ${data.favoriteSong ? `
                    <div class="p-4 bg-white rounded-lg">
                        <div class="flex items-start gap-3">
                            <span class="text-xl">🎵</span>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Favorite Song</div>
                                <div class="text-sm font-medium">${data.favoriteSong}</div>
                            </div>
                        </div>
                    </div>` : ''}
                    ${data.sleepsBest ? `
                    <div class="p-4 bg-white rounded-lg">
                        <div class="flex items-start gap-3">
                            <span class="text-xl">😴</span>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Sleeps Best When</div>
                                <div class="text-sm font-medium">${data.sleepsBest}</div>
                            </div>
                        </div>
                    </div>` : ''}
                    ${data.makesSmile ? `
                    <div class="p-4 bg-white rounded-lg">
                        <div class="flex items-start gap-3">
                            <span class="text-xl">😊</span>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Makes Us Smile When</div>
                                <div class="text-sm font-medium">${data.makesSmile}</div>
                            </div>
                        </div>
                    </div>` : ''}
                    ${data.looksLike ? `
                    <div class="p-4 bg-white rounded-lg">
                        <div class="flex items-start gap-3">
                            <span class="text-xl">👀</span>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Looks Like</div>
                                <div class="text-sm font-medium">${data.looksLike}</div>
                            </div>
                        </div>
                    </div>` : ''}
                    ${data.personality ? `
                    <div class="p-4 bg-white rounded-lg">
                        <div class="flex items-start gap-3">
                            <span class="text-xl">✨</span>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Personality</div>
                                <div class="text-sm font-medium">${data.personality}</div>
                            </div>
                        </div>
                    </div>` : ''}
                    ${data.nickname ? `
                    <div class="p-4 bg-white rounded-lg">
                        <div class="flex items-start gap-3">
                            <span class="text-xl">💝</span>
                            <div>
                                <div class="text-xs text-gray-500 mb-1">Nickname</div>
                                <div class="text-sm font-medium">${data.nickname}</div>
                            </div>
                        </div>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `
};
