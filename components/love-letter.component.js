// Love Letter Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['love-letter'] = {
    name: '💌 Love Letter',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">From</label>
                <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="from" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input type="text" placeholder="Their Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="to" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea placeholder="Write your heartfelt message..." rows="10" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Letter Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="letterStyle" onchange="updatePreview()">
                    <option value="classic" selected>Classic</option>
                    <option value="modern">Modern</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const letterStyles = {
            classic: 'bg-amber-50 border-2 border-amber-200 shadow-lg',
            modern: 'bg-white border-l-4 border-rose-500 shadow-md',
            elegant: 'bg-gradient-to-br from-pink-50 to-rose-50 border border-rose-200 shadow-xl'
        };
        const letterClass = letterStyles[style.letterStyle || 'classic'];

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                <div class="max-w-2xl mx-auto ${letterClass} rounded-lg p-8">
                    <div class="text-center text-5xl mb-6">💌</div>
                    <div class="text-right text-sm text-gray-600 mb-4">To: ${data.to || 'My Love'}</div>
                    <div class="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap mb-6">${data.message || 'Write your heartfelt message...'}</div>
                    <div class="text-right">
                        <div class="text-sm text-gray-600 mb-2">With all my love,</div>
                        <div class="font-semibold text-gray-900">${data.from || 'Your Name'}</div>
                    </div>
                </div>
            </div>
        `;
    }
};
