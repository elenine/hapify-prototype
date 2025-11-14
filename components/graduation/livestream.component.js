// Live Stream Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.livestream = {
    name: '📹 Virtual Attendance',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Join Us Virtually" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Message</label>
                <textarea placeholder="Can't attend in person? Watch the ceremony live from anywhere in the world!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Streaming Platform</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="platform" oninput="updatePreview()">
                    <option value="zoom">Zoom</option>
                    <option value="youtube">YouTube Live</option>
                    <option value="facebook">Facebook Live</option>
                    <option value="teams">Microsoft Teams</option>
                    <option value="custom">Custom Platform</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Stream Link</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="streamLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Stream Start Time</label>
                <input type="time" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="startTime" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Meeting ID/Access Code (Optional)</label>
                <input type="text" placeholder="Meeting ID or access code" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="accessCode" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Instructions (Optional)</label>
                <textarea placeholder="The stream will begin 15 minutes before the ceremony. Please test your connection in advance." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const platformIcons = {
            'zoom': '💻',
            'youtube': '📺',
            'facebook': '📱',
            'teams': '👥',
            'custom': '🌐'
        };

        const platformNames = {
            'zoom': 'Zoom',
            'youtube': 'YouTube Live',
            'facebook': 'Facebook Live',
            'teams': 'Microsoft Teams',
            'custom': 'Live Stream'
        };

        const icon = platformIcons[data.platform] || '📹';
        const platformName = platformNames[data.platform] || 'Live Stream';

        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#f0f9ff'}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-5xl mb-4">📹</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Join Us Virtually'}</h2>
                    <p class="text-gray-600 mb-8">${data.message || "Can't attend in person? Watch the ceremony live from anywhere in the world!"}</p>

                    <div class="bg-white rounded-xl p-8 shadow-lg">
                        <div class="inline-block px-6 py-3 bg-indigo-100 text-indigo-700 rounded-full font-semibold mb-6">
                            ${icon} ${platformName}
                        </div>

                        ${data.startTime ? `
                            <div class="mb-6">
                                <div class="text-sm text-gray-500 mb-1">Stream Starts At</div>
                                <div class="text-2xl font-bold text-indigo-600">${data.startTime}</div>
                            </div>
                        ` : ''}

                        ${data.accessCode ? `
                            <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                                <div class="text-sm text-gray-500 mb-1">Meeting ID / Access Code</div>
                                <div class="text-lg font-mono font-bold text-gray-800">${data.accessCode}</div>
                            </div>
                        ` : ''}

                        ${data.streamLink ? `
                            <a href="${data.streamLink}" target="_blank" class="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition text-lg mb-6">
                                ${icon} Join Live Stream
                            </a>
                        ` : ''}

                        ${data.instructions ? `
                            <div class="mt-6 pt-6 border-t border-gray-200">
                                <div class="text-sm text-gray-600 leading-relaxed">
                                    ${data.instructions}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
