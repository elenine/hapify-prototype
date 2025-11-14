// Thank You Messages Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['thank-you-messages'] = {
    name: '🙏 Thank You Messages',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Thank You For..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Thank You For..." oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Opening Message</label>
                <textarea placeholder="I'm grateful for everything you do..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="opening" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Messages (one per line)</label>
                <textarea placeholder="Thank you for your patience
Thank you for making me laugh
Thank you for believing in me
Thank you for your kindness
Thank you for being my rock
Thank you for your unconditional love
Thank you for the little things
Thank you for understanding me
Thank you for supporting my dreams
Thank you for being you" rows="15" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="thanks" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <input type="text" placeholder="Forever grateful 💕" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="closing" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="messageStyle" onchange="updatePreview()">
                    <option value="hearts" selected>With Hearts</option>
                    <option value="cards">Thank You Cards</option>
                    <option value="ribbons">Ribbon Style</option>
                    <option value="simple">Simple List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const thanks = (data.thanks || '').split('\n').filter(t => t.trim());
        const messageStyle = style.messageStyle || 'hearts';

        let thanksHTML = '';

        if (messageStyle === 'hearts') {
            thanksHTML = thanks.map(thank => {
                return `
                    <div class="flex items-start gap-3 mb-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                            💚
                        </div>
                        <p class="flex-1 text-gray-700 text-lg pt-1">${thank.trim()}</p>
                    </div>
                `;
            }).join('');
            thanksHTML = `<div class="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-lg">${thanksHTML}</div>`;
        } else if (messageStyle === 'cards') {
            thanksHTML = thanks.map(thank => {
                return `
                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                        <div class="text-4xl mb-3 text-center">🙏</div>
                        <p class="text-gray-700 text-center font-medium">${thank.trim()}</p>
                    </div>
                `;
            }).join('');
            thanksHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${thanksHTML}</div>`;
        } else if (messageStyle === 'ribbons') {
            thanksHTML = thanks.map((thank, i) => {
                const colors = ['from-teal-500 to-cyan-500', 'from-cyan-500 to-blue-500', 'from-blue-500 to-indigo-500'];
                const color = colors[i % colors.length];

                return `
                    <div class="relative mb-6">
                        <div class="bg-gradient-to-r ${color} text-white rounded-r-full py-4 px-8 shadow-lg">
                            <p class="font-medium">${thank.trim()}</p>
                        </div>
                        <div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${color}"></div>
                    </div>
                `;
            }).join('');
        } else {
            thanksHTML = thanks.map(thank => {
                return `
                    <div class="flex items-start gap-3 mb-3">
                        <span class="text-teal-500 text-xl mt-1">✓</span>
                        <p class="flex-1 text-gray-700 text-lg">${thank.trim()}</p>
                    </div>
                `;
            }).join('');
            thanksHTML = `<div class="bg-white/50 rounded-xl p-8">${thanksHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f0fdfa'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-6xl mb-4">🙏</div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">${data.title || 'Thank You For...'}</h2>
                        ${data.opening ? `<p class="text-lg text-gray-600 italic">${data.opening}</p>` : ''}
                    </div>
                    ${thanksHTML || '<p class="text-center text-gray-400">Add your thank you messages...</p>'}
                    ${data.closing ? `
                        <div class="text-center mt-10">
                            <p class="text-2xl font-semibold text-gray-800">${data.closing}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
