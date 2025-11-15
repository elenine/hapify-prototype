// Photo Challenge Component for Birthday

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.photochallenge = {
    name: '📸 Photo Challenge',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Challenge Title</label>
                <input type="text" placeholder="Birthday Photo Scavenger Hunt" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" value="Photo Challenge" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Join our photo scavenger hunt and win prizes!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Challenge Instructions</label>
                <textarea placeholder="• Find the birthday guest doing something silly&#10;• Capture the best cake moment&#10;• Take a group selfie with 5+ people&#10;• Find something pink&#10;• Capture the funniest dance move" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="challenges" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Social Hashtag</label>
                <input type="text" placeholder="#SarahsBirthdayChallenge" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="hashtag" oninput="updatePreview()">
                <p class="text-xs text-gray-500 mt-1">Guests will use this hashtag to share their photos</p>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Submission Method</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="submissionMethod" onchange="updatePreview()">
                    <option value="social">Post on social media with hashtag</option>
                    <option value="link">Submit via link/form</option>
                    <option value="both">Both options available</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Submission Link (Optional)</label>
                <input type="url" placeholder="https://forms.google.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="submissionLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Prize Information</label>
                <input type="text" placeholder="Best photo wins a $25 gift card!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="prize" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                <input type="text" placeholder="Submit by end of party or by Sunday 11:59 PM" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bg || '#fef2f2';
        const cardBg = style.cardBg || '#ffffff';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-3">📸</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Photo Challenge'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${data.challenges ? `
                        <div class="p-8 rounded-2xl shadow-lg mb-6" style="background: ${cardBg};">
                            <h3 class="font-bold text-lg mb-4 text-pink-700 flex items-center gap-2">
                                <span>🎯</span>
                                <span>Challenge List</span>
                            </h3>
                            <div class="text-gray-700 whitespace-pre-wrap">${data.challenges}</div>
                        </div>
                    ` : ''}

                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                        ${data.hashtag ? `
                            <div class="p-6 rounded-xl shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="text-2xl">📱</div>
                                    <h3 class="font-semibold text-gray-900">Social Hashtag</h3>
                                </div>
                                <p class="text-2xl font-bold text-pink-600">${data.hashtag}</p>
                            </div>
                        ` : ''}

                        ${data.prize ? `
                            <div class="p-6 rounded-xl shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="text-2xl">🏆</div>
                                    <h3 class="font-semibold text-gray-900">Prize</h3>
                                </div>
                                <p class="text-gray-700 font-medium">${data.prize}</p>
                            </div>
                        ` : ''}
                    </div>

                    ${data.deadline ? `
                        <div class="bg-pink-50 rounded-lg p-4 mb-6 border-l-4 border-pink-500">
                            <div class="flex items-start gap-3">
                                <div class="text-xl">⏰</div>
                                <div>
                                    <h4 class="font-semibold text-gray-900 mb-1">Deadline</h4>
                                    <p class="text-sm text-gray-700">${data.deadline}</p>
                                </div>
                            </div>
                        </div>
                    ` : ''}

                    ${data.submissionLink ? `
                        <div class="text-center">
                            <a href="${data.submissionLink}" target="_blank" class="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-pink-700 transition shadow-lg">
                                📤 Submit Your Photos
                            </a>
                        </div>
                    ` : data.submissionMethod === 'social' && data.hashtag ? `
                        <div class="text-center p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                            <p class="text-gray-700">
                                Post your photos on social media with <span class="font-bold text-pink-600">${data.hashtag}</span>
                            </p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
