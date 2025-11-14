// Balloons Celebration Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.balloons = {
    name: '🎈 Balloons',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Let's Celebrate!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Celebration Message</label>
                <textarea placeholder="Here's to another year of joy, laughter, and unforgettable moments!" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fce7f3" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#fce7f3'}; color: ${style.text || '#1f2937'}">
            <div class="text-7xl mb-4">🎈🎉🎊🎈</div>
            <h3 class="text-2xl font-bold mb-4">${data.title || "Let's Celebrate!"}</h3>
            <p class="text-lg max-w-2xl mx-auto leading-relaxed">${data.message || "Here's to another year of joy, laughter, and unforgettable moments!"}</p>
            <div class="text-7xl mt-6">🎈🎊🎉🎈</div>
        </div>
    `
};
