// Future Dreams Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['future-dreams'] = {
    name: '🌟 Future Dreams',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Dreams Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dream 1</label>
                <input type="text" placeholder="Travel the world" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dream1" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dream 2</label>
                <input type="text" placeholder="Build our dream home" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dream2" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dream 3</label>
                <input type="text" placeholder="Start a family" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dream3" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dream 4</label>
                <input type="text" placeholder="Grow old together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="dream4" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Closing Message</label>
                <textarea placeholder="Here's to our future together..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient Start</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgStart" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Gradient End</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bgEnd" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const dreams = [data.dream1, data.dream2, data.dream3, data.dream4].filter(d => d && d.trim());

        return `
            <div class="py-16 px-6 text-white" style="background: linear-gradient(135deg, ${style.bgStart || '#f43f5e'}, ${style.bgEnd || '#ec4899'})">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl font-bold mb-12">${data.title || 'Our Dreams Together'}</h2>
                    ${dreams.length > 0 ? `
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            ${dreams.map((dream, index) => `
                                <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-30 transition">
                                    <div class="text-5xl mb-4">🌟</div>
                                    <p class="text-xl font-semibold">${dream}</p>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    ${data.message ? `
                        <div class="text-2xl font-light italic mt-8">
                            "${data.message}"
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
