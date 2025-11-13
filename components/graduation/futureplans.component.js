// Future Plans Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.futureplans = {
    name: '🚀 Future Plans',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="What's Next" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Future Plans</label>
                <textarea placeholder="Describe your plans after graduation..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="plans" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#eef2ff'}">
            <div class="max-w-md mx-auto">
                <div class="text-center mb-6">
                    <div class="text-5xl mb-3">🚀</div>
                    <h2 class="text-2xl font-bold">${data.title || "What's Next"}</h2>
                </div>
                <div class="p-6 bg-white rounded-lg">
                    <p class="text-gray-700 leading-relaxed">${data.plans || 'Share your exciting plans for the future...'}</p>
                </div>
            </div>
        </div>
    `
};
