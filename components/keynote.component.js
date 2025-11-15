// Keynote Speaker Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.keynote = {
    name: '🎙️ Keynote Speaker',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Speaker Name</label>
                <input type="text" placeholder="Dr. Jane Smith" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title/Position</label>
                <input type="text" placeholder="Chief Technology Officer, TechCorp" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Keynote Topic</label>
                <input type="text" placeholder="The Future of Digital Transformation" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="topic" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea placeholder="Speaker biography and credentials..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="bio" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time & Date</label>
                <input type="text" placeholder="Day 1, 9:00 AM - 10:00 AM" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#0d9488" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#f0fdfa';
        const accentColor = style.accent || '#0d9488';

        return `
            <div class="py-16 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style="background: ${accentColor}20; color: ${accentColor};">
                            Featured Keynote
                        </div>
                        <h2 class="text-3xl font-bold mb-2">Keynote Speaker</h2>
                    </div>

                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div class="p-8">
                            <div class="flex flex-col md:flex-row gap-6 items-start">
                                <div class="w-32 h-32 rounded-full flex-shrink-0 flex items-center justify-center text-5xl" style="background: linear-gradient(135deg, ${accentColor}30, ${accentColor}50);">
                                    🎙️
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold mb-2">${data.name || 'Speaker Name'}</h3>
                                    ${data.title ? `<p class="text-gray-600 mb-4">${data.title}</p>` : ''}
                                    ${data.topic ? `
                                        <div class="mb-4 p-4 rounded-lg" style="background: ${accentColor}10;">
                                            <p class="font-semibold mb-1" style="color: ${accentColor};">Keynote Topic:</p>
                                            <p class="text-gray-900">${data.topic}</p>
                                        </div>
                                    ` : ''}
                                    ${data.bio ? `<p class="text-gray-700 text-sm mb-4">${data.bio}</p>` : ''}
                                    ${data.time ? `
                                        <div class="flex items-center gap-2 text-sm">
                                            <span class="text-2xl">⏰</span>
                                            <span class="font-medium">${data.time}</span>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
