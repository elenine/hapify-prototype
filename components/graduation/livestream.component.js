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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card View</option>
                    <option value="banner">Modern Banner</option>
                    <option value="minimal">Minimal Info</option>
                    <option value="featured">Featured Stream</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#f0f9ff';
        const accent = style.accent || '#6366f1';

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

        switch(layout) {
            case 'banner':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
                                <div class="flex-1 p-8 text-white" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%)">
                                    <div class="text-6xl mb-4">📹</div>
                                    <h2 class="text-3xl font-bold mb-4">${data.title || 'Join Us Virtually'}</h2>
                                    <p class="text-sm opacity-90">${data.message || "Can't attend in person? Watch the ceremony live from anywhere in the world!"}</p>
                                    ${data.streamLink ? `
                                        <a href="${data.streamLink}" target="_blank" class="inline-block mt-6 px-8 py-3 bg-white rounded-lg font-semibold hover:shadow-lg transition" style="color: ${accent}">
                                            ${icon} Join Stream
                                        </a>
                                    ` : ''}
                                </div>
                                <div class="flex-1 bg-white p-8">
                                    <div class="space-y-6">
                                        <div class="inline-block px-4 py-2 rounded-full font-semibold text-sm" style="background: ${accent}15; color: ${accent}">
                                            ${icon} ${platformName}
                                        </div>
                                        ${data.startTime ? `
                                            <div>
                                                <div class="text-xs font-semibold mb-1" style="color: ${accent}">STREAM STARTS</div>
                                                <div class="text-2xl font-bold">${data.startTime}</div>
                                            </div>
                                        ` : ''}
                                        ${data.accessCode ? `
                                            <div class="p-4 rounded-lg" style="background: ${accent}10">
                                                <div class="text-xs font-semibold mb-1" style="color: ${accent}">ACCESS CODE</div>
                                                <div class="text-lg font-mono font-bold">${data.accessCode}</div>
                                            </div>
                                        ` : ''}
                                        ${data.instructions ? `
                                            <div class="pt-4 border-t">
                                                <div class="text-sm text-gray-600">${data.instructions}</div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-4xl mb-3">📹</div>
                                <h2 class="text-2xl font-bold mb-2">${data.title || 'Join Us Virtually'}</h2>
                                <p class="text-sm text-gray-600">${data.message || "Can't attend in person? Watch the ceremony live from anywhere in the world!"}</p>
                            </div>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                    <span class="text-2xl">${icon}</span>
                                    <div>
                                        <div class="text-xs mb-1" style="color: ${accent}">Platform</div>
                                        <div class="font-semibold">${platformName}</div>
                                    </div>
                                </div>
                                ${data.startTime ? `
                                    <div class="flex items-center gap-3 p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <span class="text-2xl">🕐</span>
                                        <div>
                                            <div class="text-xs mb-1" style="color: ${accent}">Start Time</div>
                                            <div class="font-semibold">${data.startTime}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.accessCode ? `
                                    <div class="flex items-center gap-3 p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <span class="text-2xl">🔑</span>
                                        <div>
                                            <div class="text-xs mb-1" style="color: ${accent}">Access Code</div>
                                            <div class="font-mono font-semibold">${data.accessCode}</div>
                                        </div>
                                    </div>
                                ` : ''}
                                ${data.streamLink ? `
                                    <div class="text-center pt-4">
                                        <a href="${data.streamLink}" target="_blank" class="inline-block px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition" style="background: ${accent}">
                                            Join Live Stream
                                        </a>
                                    </div>
                                ` : ''}
                                ${data.instructions ? `
                                    <div class="p-4 bg-white rounded-lg text-center">
                                        <p class="text-sm text-gray-600">${data.instructions}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'featured':
                return `
                    <div class="py-16 px-6 text-center relative overflow-hidden" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%); color: white">
                        <div class="max-w-3xl mx-auto relative z-10">
                            <div class="text-7xl mb-6">📹</div>
                            <h2 class="text-4xl font-black mb-4">${data.title || 'Join Us Virtually'}</h2>
                            <p class="text-lg mb-8 opacity-90">${data.message || "Can't attend in person? Watch the ceremony live from anywhere in the world!"}</p>

                            <div class="grid sm:grid-cols-${data.accessCode ? '3' : '2'} gap-4 mb-8">
                                <div class="p-6 bg-white bg-opacity-20 backdrop-blur rounded-xl">
                                    <div class="text-4xl mb-2">${icon}</div>
                                    <div class="text-xs mb-1 opacity-75">Platform</div>
                                    <div class="font-bold">${platformName}</div>
                                </div>
                                ${data.startTime ? `
                                    <div class="p-6 bg-white bg-opacity-20 backdrop-blur rounded-xl">
                                        <div class="text-4xl mb-2">🕐</div>
                                        <div class="text-xs mb-1 opacity-75">Starts At</div>
                                        <div class="font-bold text-lg">${data.startTime}</div>
                                    </div>
                                ` : ''}
                                ${data.accessCode ? `
                                    <div class="p-6 bg-white bg-opacity-20 backdrop-blur rounded-xl">
                                        <div class="text-4xl mb-2">🔑</div>
                                        <div class="text-xs mb-1 opacity-75">Access Code</div>
                                        <div class="font-mono font-bold">${data.accessCode}</div>
                                    </div>
                                ` : ''}
                            </div>

                            ${data.streamLink ? `
                                <a href="${data.streamLink}" target="_blank" class="inline-block px-12 py-4 bg-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition" style="color: ${accent}">
                                    ${icon} Join Live Stream Now
                                </a>
                            ` : ''}

                            ${data.instructions ? `
                                <div class="mt-8 p-4 bg-white bg-opacity-10 backdrop-blur rounded-xl max-w-lg mx-auto">
                                    <p class="text-sm">${data.instructions}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-5xl mb-4">📹</div>
                            <h2 class="text-2xl font-bold mb-4">${data.title || 'Join Us Virtually'}</h2>
                            <p class="text-gray-600 mb-8">${data.message || "Can't attend in person? Watch the ceremony live from anywhere in the world!"}</p>

                            <div class="bg-white rounded-xl p-8 shadow-lg">
                                <div class="inline-block px-6 py-3 rounded-full font-semibold mb-6" style="background: ${accent}15; color: ${accent}">
                                    ${icon} ${platformName}
                                </div>

                                ${data.startTime ? `
                                    <div class="mb-6">
                                        <div class="text-sm text-gray-500 mb-1">Stream Starts At</div>
                                        <div class="text-2xl font-bold" style="color: ${accent}">${data.startTime}</div>
                                    </div>
                                ` : ''}

                                ${data.accessCode ? `
                                    <div class="mb-6 p-4 rounded-lg" style="background: ${accent}10">
                                        <div class="text-sm mb-1" style="color: ${accent}">Meeting ID / Access Code</div>
                                        <div class="text-lg font-mono font-bold text-gray-800">${data.accessCode}</div>
                                    </div>
                                ` : ''}

                                ${data.streamLink ? `
                                    <a href="${data.streamLink}" target="_blank" class="inline-block text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition text-lg mb-6" style="background: ${accent}">
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
    }
};
