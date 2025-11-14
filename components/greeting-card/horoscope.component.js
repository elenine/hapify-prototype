// Horoscope/Zodiac Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.horoscope = {
    name: '♈ Horoscope',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Your Birthday Horoscope" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Zodiac Sign</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="zodiacSign" onchange="updatePreview()">
                    <option value="">Select sign...</option>
                    <option value="♈ Aries">♈ Aries (Mar 21 - Apr 19)</option>
                    <option value="♉ Taurus">♉ Taurus (Apr 20 - May 20)</option>
                    <option value="♊ Gemini">♊ Gemini (May 21 - Jun 20)</option>
                    <option value="♋ Cancer">♋ Cancer (Jun 21 - Jul 22)</option>
                    <option value="♌ Leo">♌ Leo (Jul 23 - Aug 22)</option>
                    <option value="♍ Virgo">♍ Virgo (Aug 23 - Sep 22)</option>
                    <option value="♎ Libra">♎ Libra (Sep 23 - Oct 22)</option>
                    <option value="♏ Scorpio">♏ Scorpio (Oct 23 - Nov 21)</option>
                    <option value="♐ Sagittarius">♐ Sagittarius (Nov 22 - Dec 21)</option>
                    <option value="♑ Capricorn">♑ Capricorn (Dec 22 - Jan 19)</option>
                    <option value="♒ Aquarius">♒ Aquarius (Jan 20 - Feb 18)</option>
                    <option value="♓ Pisces">♓ Pisces (Feb 19 - Mar 20)</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birthday Message</label>
                <textarea placeholder="This year brings new opportunities and adventures..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Lucky Number</label>
                <input type="text" placeholder="7" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="luckyNumber" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Lucky Color</label>
                <input type="text" placeholder="Blue" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="luckyColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ede9fe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ede9fe'}; color: ${style.text || '#1f2937'}">
            <div class="max-w-2xl mx-auto">
                <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Your Birthday Horoscope'}</h3>
                <div class="bg-white rounded-2xl shadow-xl p-8" style="background: ${style.cardBg || '#ffffff'}">
                    ${data.zodiacSign ? `
                        <div class="text-center mb-6">
                            <div class="text-6xl mb-3" style="color: ${style.accent || '#8b5cf6'}">${data.zodiacSign.split(' ')[0]}</div>
                            <h4 class="text-2xl font-bold">${data.zodiacSign}</h4>
                        </div>
                    ` : ''}
                    ${data.message ? `
                        <p class="text-lg leading-relaxed mb-6 text-center">${data.message}</p>
                    ` : ''}
                    <div class="grid grid-cols-2 gap-6 mt-6">
                        ${data.luckyNumber ? `
                            <div class="text-center p-4 rounded-lg" style="background: ${style.bg || '#ede9fe'}">
                                <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY NUMBER</div>
                                <div class="text-3xl font-bold" style="color: ${style.accent || '#8b5cf6'}">${data.luckyNumber}</div>
                            </div>
                        ` : ''}
                        ${data.luckyColor ? `
                            <div class="text-center p-4 rounded-lg" style="background: ${style.bg || '#ede9fe'}">
                                <div class="text-sm font-semibold text-gray-500 mb-2">LUCKY COLOR</div>
                                <div class="text-xl font-bold" style="color: ${style.accent || '#8b5cf6'}">${data.luckyColor}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `
};
