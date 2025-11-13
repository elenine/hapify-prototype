// Message Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.message = {
    name: '💝 Personal Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">From (Your Name)</label>
                <input type="text" placeholder="Team Lead" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="from" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message Title (Optional)</label>
                <input type="text" placeholder="You Did It!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea rows="6" placeholder="Write your congratulations message..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Color</label>
                <input type="color" value="#d946ef" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-2xl mx-auto">
                <div class="border-l-4 pl-6 py-4" style="border-color: ${style.border || '#d946ef'}; color: ${style.text || '#1f2937'}">
                    ${data.title ? `<h3 class="text-2xl font-bold mb-4">${data.title}</h3>` : ''}
                    <p class="text-lg leading-relaxed mb-4 whitespace-pre-line">${data.message || 'Write your heartfelt congratulations message here...'}</p>
                    <p class="text-sm font-semibold" style="color: ${style.border || '#d946ef'}">— ${data.from || 'Your Name'}</p>
                </div>
            </div>
        </div>
    `
};
