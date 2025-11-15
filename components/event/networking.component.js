// Networking Component for Event

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.networking = {
    name: '🤝 Networking',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Networking Opportunities" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" value="Networking Opportunities" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Connect with fellow attendees..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Networking Activities</label>
                <textarea placeholder="• Welcome reception\n• Lunch networking\n• Evening social\n• Speed networking sessions" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="activities" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Online Networking Platform (Optional)</label>
                <input type="url" placeholder="https://networking-app.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="platformUrl" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                <input type="text" placeholder="Event App, Slack, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="platformName" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ecfdf5" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#ecfdf5';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🤝</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Networking Opportunities'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>
                    ${data.activities ? `
                        <div class="bg-white rounded-xl p-6 shadow-md mb-6">
                            <h3 class="font-semibold text-lg mb-3 text-green-700">Networking Activities</h3>
                            <div class="text-gray-700 whitespace-pre-wrap">${data.activities}</div>
                        </div>
                    ` : ''}
                    ${data.platformUrl ? `
                        <div class="text-center">
                            <a href="${data.platformUrl}" target="_blank" class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
                                🌐 Join Networking Platform
                            </a>
                            ${data.platformName ? `<p class="text-sm text-gray-500 mt-2">${data.platformName}</p>` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
