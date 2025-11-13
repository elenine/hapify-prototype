// Future Plans Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.futureplans = {
    name: '🌅 Future Plans',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="What's Next" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Future Plans</label>
                <textarea placeholder="Travel plans, hobbies, spending time with family..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="plans" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto">
                <div class="text-5xl mb-4">🌅</div>
                <h2 class="text-2xl font-bold mb-6">${data.title || "What's Next"}</h2>
                <div class="p-6 bg-cyan-50 rounded-lg text-left">
                    <p class="text-gray-700 leading-relaxed">${data.plans || 'Share your exciting retirement plans...'}</p>
                </div>
            </div>
        </div>
    `
};
