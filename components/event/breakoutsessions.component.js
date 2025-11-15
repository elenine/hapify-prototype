// Breakout Sessions Component for Event

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.breakoutsessions = {
    name: '📋 Breakout Sessions',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Breakout Sessions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" value="Breakout Sessions" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Choose from our diverse breakout sessions..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Session 1</h4>
                <input type="text" placeholder="Session Title" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data mb-2" data-field="session1title" oninput="updatePreview()">
                <input type="text" placeholder="Time & Location" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data mb-2" data-field="session1time" oninput="updatePreview()">
                <textarea placeholder="Description..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="session1desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Session 2</h4>
                <input type="text" placeholder="Session Title" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data mb-2" data-field="session2title" oninput="updatePreview()">
                <input type="text" placeholder="Time & Location" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data mb-2" data-field="session2time" oninput="updatePreview()">
                <textarea placeholder="Description..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="session2desc" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Session 3 (Optional)</h4>
                <input type="text" placeholder="Session Title" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data mb-2" data-field="session3title" oninput="updatePreview()">
                <input type="text" placeholder="Time & Location" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data mb-2" data-field="session3time" oninput="updatePreview()">
                <textarea placeholder="Description..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="session3desc" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#f0fdf4';
        const sessions = [];
        if (data.session1title) sessions.push({ title: data.session1title, time: data.session1time, desc: data.session1desc });
        if (data.session2title) sessions.push({ title: data.session2title, time: data.session2time, desc: data.session2desc });
        if (data.session3title) sessions.push({ title: data.session3title, time: data.session3time, desc: data.session3desc });

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">📋</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Breakout Sessions'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>
                    <div class="space-y-4">
                        ${sessions.map((s, i) => `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex gap-4">
                                    <div class="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">${i + 1}</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg mb-2 text-green-700">${s.title}</h3>
                                        ${s.time ? `<p class="text-sm text-gray-600 mb-2">⏰ ${s.time}</p>` : ''}
                                        ${s.desc ? `<p class="text-gray-700 text-sm">${s.desc}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};
