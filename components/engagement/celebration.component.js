// Celebration Event Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebration = {
    name: '🎉 Celebration Event',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                <input type="text" placeholder="Engagement Party" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                <input type="text" placeholder="Venue name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea placeholder="Full address..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
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
            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Engagement Party'}</h2>
            <div class="max-w-md mx-auto space-y-4">
                ${data.date ? `
                <div class="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
                    <div class="text-2xl">📅</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Date</div>
                        <div class="font-medium">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                    </div>
                </div>` : ''}
                ${data.time ? `
                <div class="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
                    <div class="text-2xl">🕐</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Time</div>
                        <div class="font-medium">${data.time}</div>
                    </div>
                </div>` : ''}
                ${data.venue ? `
                <div class="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
                    <div class="text-2xl">🏛️</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Venue</div>
                        <div class="font-medium">${data.venue}</div>
                    </div>
                </div>` : ''}
                ${data.address ? `
                <div class="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
                    <div class="text-2xl">📍</div>
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Address</div>
                        <div class="text-sm">${data.address}</div>
                    </div>
                </div>` : ''}
            </div>
        </div>
    `
};
