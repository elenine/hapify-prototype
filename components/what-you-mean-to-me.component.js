// What You Mean to Me Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['what-you-mean-to-me'] = {
    name: '🌹 What You Mean to Me',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="What You Mean to Me" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="What You Mean to Me" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Heartfelt Message</label>
                <textarea placeholder="You are my everything. You bring light to my darkest days and joy to every moment we share. With you, I've found my home, my peace, and my forever..." rows="12" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Signature (optional)</label>
                <input type="text" placeholder="Forever yours, [Your Name]" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="signature" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fae8ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="messageStyle" onchange="updatePreview()">
                    <option value="letter" selected>Love Letter</option>
                    <option value="quote">Quote Style</option>
                    <option value="centered">Centered Text</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const messageStyle = style.messageStyle || 'letter';
        const align = style.align || 'center';

        let content = '';
        if (messageStyle === 'letter') {
            content = `
                <div class="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto" style="text-align: ${align}">
                    <div class="text-5xl mb-6">🌹</div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">${data.title || 'What You Mean to Me'}</h2>
                    <div class="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-wrap" style="font-family: 'Georgia', serif;">
                        ${data.message || 'Share your heartfelt message here...'}
                    </div>
                    ${data.signature ? `<p class="text-gray-600 italic mt-8">${data.signature}</p>` : ''}
                </div>
            `;
        } else if (messageStyle === 'quote') {
            content = `
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-6xl mb-4">❝</div>
                    <blockquote class="text-2xl md:text-3xl font-serif italic text-gray-800 leading-relaxed mb-6">
                        ${data.message || 'Share your heartfelt message here...'}
                    </blockquote>
                    <div class="text-5xl mb-4">❞</div>
                    ${data.signature ? `<p class="text-xl text-gray-600 mt-6">— ${data.signature}</p>` : ''}
                </div>
            `;
        } else {
            content = `
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-5xl mb-6">🌹</div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-8">${data.title || 'What You Mean to Me'}</h2>
                    <p class="text-xl text-gray-700 leading-relaxed whitespace-pre-wrap">
                        ${data.message || 'Share your heartfelt message here...'}
                    </p>
                    ${data.signature ? `<p class="text-gray-600 italic mt-8">${data.signature}</p>` : ''}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#fae8ff'}">
                ${content}
            </div>
        `;
    }
};
