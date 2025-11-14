// Future Plans Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.future = {
    name: '🌟 Future Plans',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Future Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wedding Date (if set)</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="weddingdate" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Share your future plans and dreams..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => `
        <div class="py-12 px-6 text-center" style="background: ${style.bg || '#fdf2f8'}">
            <div class="max-w-md mx-auto">
                <div class="text-5xl mb-4">🌟</div>
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Our Future Together'}</h2>
                ${data.weddingdate ? `<div class="mb-4 p-4 bg-white rounded-lg"><div class="text-xs text-gray-500 mb-1">Save the Date</div><div class="font-bold text-rose-600">${new Date(data.weddingdate).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div></div>` : ''}
                <p class="text-gray-700 leading-relaxed">${data.message || 'We are excited to start this new chapter together and look forward to celebrating with you!'}</p>
            </div>
        </div>
    `
};
