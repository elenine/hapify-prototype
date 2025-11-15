// Gift Contribution Component for Retirement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.giftcontribution = {
    name: '🎁 Gift Contribution',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Retirement Gift Fund" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" value="Retirement Gift Fund" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Your presence is the greatest gift, but if you'd like to contribute to a retirement gift..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift Idea/Purpose</label>
                <input type="text" placeholder="Travel fund for dream vacation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="giftIdea" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contribution Link (Optional)</label>
                <input type="url" placeholder="https://www.paypal.me/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="contributionUrl" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                <input type="text" placeholder="PayPal, Venmo, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="platform" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Organizer Contact</label>
                <input type="text" placeholder="Contact Sarah at sarah@example.com for details" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="organizerContact" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Deadline (Optional)</label>
                <input type="text" placeholder="Please contribute by May 15th" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient Start</label>
                <input type="color" value="#ecfeff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgGradientStart" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient End</label>
                <input type="color" value="#cffafe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgGradientEnd" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#0891b2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgGradientStart = style.bgGradientStart || '#ecfeff';
        const bgGradientEnd = style.bgGradientEnd || '#cffafe';
        const cardBg = style.cardBg || '#ffffff';
        const buttonColor = style.buttonColor || '#0891b2';

        return `
            <div class="py-16 px-6" style="background: linear-gradient(to bottom right, ${bgGradientStart}, ${bgGradientEnd});">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-4">🎁</div>
                        <h2 class="text-3xl font-bold mb-2">${data.title || 'Retirement Gift Fund'}</h2>
                    </div>

                    <div class="p-8 rounded-2xl shadow-xl" style="background: ${cardBg};">
                        ${data.message ? `
                            <div class="mb-6">
                                <p class="text-gray-700 leading-relaxed">${data.message}</p>
                            </div>
                        ` : ''}

                        ${data.giftIdea ? `
                            <div class="mb-6 p-4 bg-cyan-50 rounded-lg">
                                <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span>✨</span>
                                    <span>Gift Purpose</span>
                                </h3>
                                <p class="text-gray-700">${data.giftIdea}</p>
                            </div>
                        ` : ''}

                        ${data.contributionUrl ? `
                            <div class="text-center mb-6">
                                <a href="${data.contributionUrl}" target="_blank" class="inline-block px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style="background: ${buttonColor};">
                                    💝 Contribute to Gift
                                </a>
                                ${data.platform ? `
                                    <p class="text-sm text-gray-500 mt-3">via ${data.platform}</p>
                                ` : ''}
                            </div>
                        ` : ''}

                        ${data.organizerContact ? `
                            <div class="mb-4 p-4 bg-gray-50 rounded-lg">
                                <p class="text-sm text-gray-700">
                                    <span class="font-medium">📧</span> ${data.organizerContact}
                                </p>
                            </div>
                        ` : ''}

                        ${data.deadline ? `
                            <div class="text-center">
                                <p class="text-sm text-gray-600 bg-yellow-50 rounded-lg py-2 px-4 inline-block">
                                    ⏰ ${data.deadline}
                                </p>
                            </div>
                        ` : ''}

                        <div class="text-center mt-6 pt-6 border-t">
                            <p class="text-sm text-gray-600">Thank you for celebrating this special milestone! 💙</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
