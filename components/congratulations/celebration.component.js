// Celebration Component for Congratulations Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebration = {
    name: '🎊 Celebration Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                <input type="text" placeholder="Celebration Party" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="date" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                <input type="text" placeholder="Grand Ballroom, City Hotel" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="venue" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea rows="2" placeholder="123 Main Street, City, State 12345" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="address" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea rows="3" placeholder="Dress code, parking info, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#d946ef" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        let formattedDate = '';
        if (data.date) {
            formattedDate = new Date(data.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        let formattedTime = '';
        if (data.time) {
            const [hours, minutes] = data.time.split(':');
            const hour = parseInt(hours);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const displayHour = hour % 12 || 12;
            formattedTime = `${displayHour}:${minutes} ${ampm}`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#faf5ff'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-4">🎊</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${style.accent || '#d946ef'}">${data.title || 'Celebration Party'}</h2>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-8 space-y-6">
                        ${data.date ? `
                            <div class="flex items-start gap-4">
                                <div class="text-3xl" style="color: ${style.accent || '#d946ef'}">📅</div>
                                <div>
                                    <div class="font-semibold text-gray-500 text-sm">Date</div>
                                    <div class="text-lg">${formattedDate}</div>
                                </div>
                            </div>
                        ` : ''}
                        ${data.time ? `
                            <div class="flex items-start gap-4">
                                <div class="text-3xl" style="color: ${style.accent || '#d946ef'}">🕐</div>
                                <div>
                                    <div class="font-semibold text-gray-500 text-sm">Time</div>
                                    <div class="text-lg">${formattedTime}</div>
                                </div>
                            </div>
                        ` : ''}
                        ${data.venue ? `
                            <div class="flex items-start gap-4">
                                <div class="text-3xl" style="color: ${style.accent || '#d946ef'}">📍</div>
                                <div>
                                    <div class="font-semibold text-gray-500 text-sm">Venue</div>
                                    <div class="text-lg">${data.venue}</div>
                                    ${data.address ? `<div class="text-sm text-gray-600 mt-1">${data.address}</div>` : ''}
                                </div>
                            </div>
                        ` : ''}
                        ${data.details ? `
                            <div class="flex items-start gap-4 pt-4 border-t">
                                <div class="text-3xl" style="color: ${style.accent || '#d946ef'}">ℹ️</div>
                                <div>
                                    <div class="font-semibold text-gray-500 text-sm">Additional Details</div>
                                    <div class="text-sm text-gray-700 mt-1 whitespace-pre-line">${data.details}</div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
