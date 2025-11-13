// Celebrant Info Component for Birthday Wishes

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebrant = {
    name: '🎉 Celebrant Info',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" placeholder="Sarah Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="fullname" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birthday Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="birthdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">About</label>
                <textarea placeholder="Tell us about the birthday person..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="about" oninput="updatePreview()"></textarea>
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
    render: (data, style) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold mb-6">About the Celebrant</h2>
                <div class="p-6 bg-pink-50 rounded-lg">
                    <div class="text-4xl mb-3">🎉</div>
                    <div class="font-bold text-lg mb-2">${data.fullname || 'Full Name'}</div>
                    ${data.birthdate ? `<div class="text-sm text-gray-600 mb-3">Born: ${new Date(data.birthdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>` : ''}
                    ${data.about ? `<p class="text-sm text-gray-600 leading-relaxed mt-4">${data.about}</p>` : ''}
                </div>
            </div>
        </div>
    `
};
