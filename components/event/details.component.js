// Event Details Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.details = {
    name: '📋 Event Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <input type="text" placeholder="Conference, Workshop, Seminar..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="type" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Tell attendees about your event..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
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
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-6 text-center">Event Details</h2>
                <div class="space-y-4">
                    ${data.type ? `
                    <div class="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                        <div class="text-2xl">📋</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Type</div>
                            <div class="font-medium">${data.type}</div>
                        </div>
                    </div>` : ''}
                    ${data.date ? `
                    <div class="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                        <div class="text-2xl">📅</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Date</div>
                            <div class="font-medium">${new Date(data.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                        </div>
                    </div>` : ''}
                    ${data.time ? `
                    <div class="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                        <div class="text-2xl">🕐</div>
                        <div>
                            <div class="text-xs text-gray-500 mb-1">Time</div>
                            <div class="font-medium">${data.time}</div>
                        </div>
                    </div>` : ''}
                    ${data.description ? `
                    <div class="p-4 bg-green-50 rounded-lg">
                        <p class="text-gray-600 text-sm">${data.description}</p>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `
};
