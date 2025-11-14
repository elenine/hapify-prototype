// Live Stream Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.livestream = {
    name: '📹 Live Stream',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Join Us Online" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Can't make it in person? Watch the party live!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="platform" oninput="updatePreview()">
                    <option value="">Select Platform...</option>
                    <option value="zoom">Zoom</option>
                    <option value="youtube">YouTube Live</option>
                    <option value="facebook">Facebook Live</option>
                    <option value="instagram">Instagram Live</option>
                    <option value="teams">Microsoft Teams</option>
                    <option value="meet">Google Meet</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Stream Link/Meeting ID</label>
                <input type="text" placeholder="https://zoom.us/j/123456789 or Meeting ID: 123-456-789" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="link" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Password (if required)</label>
                <input type="text" placeholder="Party2024" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="password" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Stream Start Time</label>
                <input type="text" placeholder="3:00 PM EST" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Instructions</label>
                <textarea placeholder="The stream will start 5 minutes before the party begins.&#10;&#10;Please mute your microphone when joining." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="streamStyle" oninput="updatePreview()">
                    <option value="modern">Modern</option>
                    <option value="detailed">Detailed</option>
                    <option value="compact">Compact</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const streamStyle = style.streamStyle || 'modern';
        const platformEmojis = {
            zoom: '💻',
            youtube: '▶️',
            facebook: '👍',
            instagram: '📷',
            teams: '💼',
            meet: '🎥',
            other: '📹'
        };
        const platformIcon = platformEmojis[data.platform] || '📹';

        if (streamStyle === 'detailed') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#eff6ff'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">${platformIcon}</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Join Us Online'}</h2>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-white rounded-xl p-8 shadow-md">
                                <h4 class="text-xl font-bold mb-4 text-gray-900">Stream Details</h4>
                                <div class="space-y-3">
                                    ${data.platform ? `<div><span class="font-semibold text-gray-900">Platform:</span> <span class="text-gray-700">${data.platform.charAt(0).toUpperCase() + data.platform.slice(1)}</span></div>` : ''}
                                    ${data.time ? `<div><span class="font-semibold text-gray-900">Time:</span> <span class="text-gray-700">${data.time}</span></div>` : ''}
                                    ${data.link ? `<div class="pt-3 border-t border-gray-200"><div class="font-semibold text-gray-900 mb-2">Link/ID:</div><div class="bg-blue-50 p-3 rounded font-mono text-sm break-all text-blue-700">${data.link}</div></div>` : ''}
                                    ${data.password ? `<div><span class="font-semibold text-gray-900">Password:</span> <span class="bg-yellow-100 px-2 py-1 rounded font-mono text-sm">${data.password}</span></div>` : ''}
                                </div>
                            </div>
                            ${data.instructions ? `
                                <div class="bg-blue-50 rounded-xl p-8">
                                    <h4 class="text-xl font-bold mb-4 text-gray-900">Instructions</h4>
                                    <div class="text-gray-700 whitespace-pre-line leading-relaxed">${data.instructions}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        if (streamStyle === 'compact') {
            return `
                <div class="py-8 px-6" style="background: ${style.bg || '#eff6ff'}; border-top: 3px solid #3b82f6; border-bottom: 3px solid #3b82f6;">
                    <div class="max-w-4xl mx-auto">
                        <div class="flex items-center gap-6">
                            <div class="text-5xl flex-shrink-0">${platformIcon}</div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">${data.title || 'Join Us Online'}</h3>
                                <div class="space-y-1 text-gray-700">
                                    ${data.platform ? `<div><strong>Platform:</strong> ${data.platform.charAt(0).toUpperCase() + data.platform.slice(1)}</div>` : ''}
                                    ${data.time ? `<div><strong>Time:</strong> ${data.time}</div>` : ''}
                                    ${data.link ? `<div class="mt-2"><strong>Link:</strong> <code class="bg-blue-100 px-2 py-1 rounded text-sm">${data.link}</code></div>` : ''}
                                    ${data.password ? `<div><strong>Password:</strong> <code class="bg-yellow-100 px-2 py-1 rounded text-sm">${data.password}</code></div>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#eff6ff'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-7xl mb-4">${platformIcon}</div>
                        <h3 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Join Us Online'}</h3>
                        ${data.subtitle ? `<p class="text-xl text-gray-600">${data.subtitle}</p>` : ''}
                    </div>
                    <div class="bg-white rounded-2xl p-10 shadow-lg">
                        <div class="space-y-6">
                            ${data.platform ? `<div class="text-center"><span class="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-bold text-lg">${data.platform.charAt(0).toUpperCase() + data.platform.slice(1)}</span></div>` : ''}
                            ${data.time ? `<div class="text-center text-2xl font-semibold text-gray-900">⏰ ${data.time}</div>` : ''}
                            ${data.link ? `
                                <div class="bg-blue-50 rounded-lg p-6">
                                    <div class="text-sm font-bold text-gray-900 mb-2 text-center">JOIN LINK / MEETING ID</div>
                                    <div class="bg-white p-4 rounded font-mono text-center break-all text-blue-700 font-semibold">${data.link}</div>
                                </div>
                            ` : ''}
                            ${data.password ? `
                                <div class="text-center">
                                    <span class="text-gray-900 font-semibold">Password: </span>
                                    <span class="bg-yellow-100 px-4 py-2 rounded font-mono text-lg font-bold">${data.password}</span>
                                </div>
                            ` : ''}
                            ${data.instructions ? `<div class="pt-6 border-t border-gray-200 text-gray-700 whitespace-pre-line text-center">${data.instructions}</div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
