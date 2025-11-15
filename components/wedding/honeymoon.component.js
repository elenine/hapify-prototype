// Honeymoon Fund Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.honeymoon = {
    name: '🌴 Honeymoon Fund',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Honeymoon Fund" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Honeymoon Fund" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Help us make memories that last a lifetime!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <input type="text" placeholder="e.g., Bali, Indonesia" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="destination" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Personal Message</label>
                <textarea placeholder="Your presence at our wedding is the greatest gift we could ask for! However, if you wish to honor us with a gift, we'd be grateful for contributions to our honeymoon fund..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fund Link/Platform</label>
                <input type="url" placeholder="https://www.honeyfund.com/your-fund" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="fundLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                <input type="text" placeholder="HoneyFund, Zola, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="platformName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Trip Highlights</label>
                <textarea placeholder="Share what you're planning for your honeymoon (optional)..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="highlights" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient Start</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgGradientStart" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient End</label>
                <input type="color" value="#fed7aa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgGradientEnd" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#ea580c" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgGradientStart = style.bgGradientStart || '#fef3c7';
        const bgGradientEnd = style.bgGradientEnd || '#fed7aa';
        const cardBg = style.cardBg || '#ffffff';
        const buttonColor = style.buttonColor || '#ea580c';

        return `
            <div class="py-16 px-6" style="background: linear-gradient(to bottom right, ${bgGradientStart}, ${bgGradientEnd});">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-4">🌴</div>
                        <h2 class="text-3xl font-bold mb-2">${data.title || 'Honeymoon Fund'}</h2>
                        ${data.subtitle ? `<p class="text-lg text-gray-700 italic">${data.subtitle}</p>` : ''}
                    </div>

                    <div class="p-8 rounded-2xl shadow-xl" style="background: ${cardBg}">
                        ${data.destination ? `
                            <div class="text-center mb-6">
                                <div class="text-4xl mb-2">✈️</div>
                                <h3 class="text-2xl font-semibold text-purple-700">Destination: ${data.destination}</h3>
                            </div>
                        ` : ''}

                        ${data.message ? `
                            <div class="mb-6">
                                <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">${data.message}</p>
                            </div>
                        ` : ''}

                        ${data.highlights ? `
                            <div class="mb-6 p-4 bg-orange-50 rounded-lg">
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span>🗺️</span>
                                    <span>Our Honeymoon Plans</span>
                                </h4>
                                <p class="text-gray-700 text-sm whitespace-pre-wrap">${data.highlights}</p>
                            </div>
                        ` : ''}

                        ${data.fundLink ? `
                            <div class="text-center mt-8">
                                <a href="${data.fundLink}" target="_blank" class="inline-block px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style="background: ${buttonColor}">
                                    🎁 Contribute to Our Honeymoon
                                </a>
                                ${data.platformName ? `
                                    <p class="text-sm text-gray-500 mt-3">via ${data.platformName}</p>
                                ` : ''}
                            </div>
                        ` : `
                            <div class="text-center text-gray-500 py-8">
                                <p>Add fund link to display contribution button</p>
                            </div>
                        `}
                    </div>

                    <div class="text-center mt-6">
                        <p class="text-sm text-gray-600">Thank you for helping us create unforgettable memories! 💕</p>
                    </div>
                </div>
            </div>
        `;
    }
};
