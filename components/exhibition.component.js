// Exhibition Hall Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.exhibition = {
    name: '🏬 Exhibition Hall',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Exhibition Hall" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" value="Exhibition Hall" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Explore cutting-edge solutions from leading vendors..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="Main Hall, Level 2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="location" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Opening Hours</label>
                <textarea placeholder="Day 1: 10:00 AM - 6:00 PM\nDay 2: 9:00 AM - 5:00 PM" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="hours" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Number of Exhibitors</label>
                <input type="text" placeholder="50+ exhibitors" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="exhibitors" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Features</label>
                <textarea placeholder="• Product demonstrations\n• Interactive booths\n• Prize drawings" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="features" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#fef3c7';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🏬</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Exhibition Hall'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    <div class="bg-white rounded-xl p-8 shadow-lg">
                        <div class="grid md:grid-cols-2 gap-6">
                            ${data.location ? `
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl">📍</div>
                                    <div>
                                        <h3 class="font-semibold text-gray-900 mb-1">Location</h3>
                                        <p class="text-gray-700">${data.location}</p>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.hours ? `
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl">🕐</div>
                                    <div>
                                        <h3 class="font-semibold text-gray-900 mb-1">Hours</h3>
                                        <p class="text-gray-700 text-sm whitespace-pre-wrap">${data.hours}</p>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.exhibitors ? `
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl">🏢</div>
                                    <div>
                                        <h3 class="font-semibold text-gray-900 mb-1">Exhibitors</h3>
                                        <p class="text-gray-700">${data.exhibitors}</p>
                                    </div>
                                </div>
                            ` : ''}
                        </div>

                        ${data.features ? `
                            <div class="mt-6 pt-6 border-t">
                                <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <span>✨</span>
                                    <span>Special Features</span>
                                </h3>
                                <div class="text-gray-700 text-sm whitespace-pre-wrap">${data.features}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
