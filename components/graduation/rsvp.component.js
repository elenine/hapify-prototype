// RSVP Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Let us know if you can attend the ceremony..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline (Optional)</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Email/Phone (Optional)</label>
                <input type="text" placeholder="rsvp@email.com or (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="contact" oninput="updatePreview()">
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
    render: (data, style) => {
        let deadlineText = '';
        if (data.deadline) {
            const deadlineDate = new Date(data.deadline);
            const formattedDate = deadlineDate.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
            deadlineText = `
                <div class="text-sm text-gray-600 mb-4">
                    Please respond by <strong>${formattedDate}</strong>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#eef2ff'}">
                <div class="max-w-md mx-auto">
                    <div class="text-5xl mb-4">✉️</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                    <p class="text-gray-600 mb-6">${data.message || "Let us know if you can attend the ceremony"}</p>
                    ${deadlineText}
                    <button class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition mb-4">
                        RSVP Now
                    </button>
                    ${data.contact ? `
                        <div class="text-sm text-gray-500 mt-4">
                            Or contact us at: <strong>${data.contact}</strong>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
