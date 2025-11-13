// Speakers Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.speakers = {
    name: '🎤 Speakers',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Speaker Name</label>
                <input type="text" placeholder="John Doe" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title/Role</label>
                <input type="text" placeholder="CEO & Founder" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea placeholder="Short speaker bio..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="bio" oninput="updatePreview()"></textarea>
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
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <h2 class="text-2xl font-bold text-center mb-8">Featured Speakers</h2>
            <div class="max-w-md mx-auto text-center">
                <div class="w-24 h-24 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center text-3xl">🎤</div>
                <div class="font-bold text-lg mb-1">${data.name || 'Speaker Name'}</div>
                <div class="text-sm text-green-600 mb-3">${data.title || 'Title'}</div>
                ${data.bio ? `<p class="text-sm text-gray-600 leading-relaxed">${data.bio}</p>` : ''}
            </div>
        </div>
    `
};
