// Event Details Section Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.event = {
    name: '🎉 Holiday Event',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="eventTitle"
                    placeholder="Annual Holiday Party"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="eventDate"
                    placeholder="December 25, 2025"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="eventTime"
                    placeholder="7:00 PM - 11:00 PM"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="location"
                    placeholder="123 Main St, City, State"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="description"
                    rows="3"
                    placeholder="Join us for food, drinks, and celebration!"
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Info (optional)</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="rsvp"
                    placeholder="RSVP by Dec 15 to email@example.com"
                    oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="bgColor"
                    value="#dbeafe"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="textColor"
                    value="#1e3a8a"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#dbeafe';
        const textColor = style.textColor || '#1e3a8a';
        const textAlign = style.textAlign || 'center';
        const eventTitle = data.eventTitle || 'Holiday Event';
        const eventDate = data.eventDate || '';
        const eventTime = data.eventTime || '';
        const location = data.location || '';
        const description = data.description || '';
        const rsvp = data.rsvp || '';

        return `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 48px 24px; text-align: ${textAlign};">
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 32px; font-weight: bold; margin-bottom: 24px;">🎉 ${eventTitle}</h2>

                    ${eventDate ? `
                        <div style="margin-bottom: 16px;">
                            <div style="font-weight: 600; margin-bottom: 4px;">📅 Date</div>
                            <div>${eventDate}</div>
                        </div>
                    ` : ''}

                    ${eventTime ? `
                        <div style="margin-bottom: 16px;">
                            <div style="font-weight: 600; margin-bottom: 4px;">🕐 Time</div>
                            <div>${eventTime}</div>
                        </div>
                    ` : ''}

                    ${location ? `
                        <div style="margin-bottom: 16px;">
                            <div style="font-weight: 600; margin-bottom: 4px;">📍 Location</div>
                            <div>${location}</div>
                        </div>
                    ` : ''}

                    ${description ? `
                        <p style="margin-top: 24px; margin-bottom: 24px; line-height: 1.6;">${description}</p>
                    ` : ''}

                    ${rsvp ? `
                        <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.5); border-radius: 8px;">
                            <strong>✉️ ${rsvp}</strong>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
