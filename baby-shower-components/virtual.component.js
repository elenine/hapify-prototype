// Virtual Attendance Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.virtual = {
    name: '💻 Virtual Attendance',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Join Us Virtually" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                <input type="text" placeholder="Zoom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="platform" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Meeting Link</label>
                <input type="url" placeholder="https://zoom.us/j/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="link" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Meeting ID</label>
                <input type="text" placeholder="123 456 789" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="meetingId" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Passcode</label>
                <input type="text" placeholder="babyshower2024" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="passcode" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Instructions</label>
                <textarea rows="2" placeholder="Link will be activated 15 minutes before the event starts" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#eff6ff'}">
            <div class="max-w-2xl mx-auto">
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <div class="text-center mb-6">
                        <div class="text-5xl mb-3">💻</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Join Us Virtually'}</h2>
                    </div>

                    ${data.platform ? `<div class="mb-4 text-center"><span class="inline-block px-4 py-2 rounded-lg text-sm font-semibold" style="background: ${globalStyles.primaryColor || '#f59e0b'}; color: white;">Platform: ${data.platform}</span></div>` : ''}

                    <div class="space-y-4">
                        ${data.link ? `
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="text-sm font-semibold text-gray-600 mb-2">Meeting Link</div>
                                <div class="text-blue-600 break-all text-sm">${data.link}</div>
                            </div>
                        ` : ''}

                        ${data.meetingId ? `
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="text-sm font-semibold text-gray-600 mb-1">Meeting ID</div>
                                <div class="text-gray-800 font-mono">${data.meetingId}</div>
                            </div>
                        ` : ''}

                        ${data.passcode ? `
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="text-sm font-semibold text-gray-600 mb-1">Passcode</div>
                                <div class="text-gray-800 font-mono">${data.passcode}</div>
                            </div>
                        ` : ''}

                        ${data.instructions ? `
                            <div class="mt-6 pt-6 border-t border-gray-200">
                                <p class="text-sm text-gray-600 italic">${data.instructions}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `
};
