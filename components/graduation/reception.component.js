// Reception Details Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.reception = {
    name: '🍾 Reception Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Reception & Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Join us for a reception following the ceremony to celebrate this special milestone!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="University Student Center, Grand Ballroom" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="location" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input type="text" placeholder="Immediately following ceremony, 1:00 PM - 4:00 PM" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="time" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Food & Beverages</label>
                <textarea placeholder="Light refreshments, hors d'oeuvres, and beverages will be served." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="food" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Entertainment/Activities (Optional)</label>
                <textarea placeholder="• Photo booth with props&#10;• Live music&#10;• Award presentations" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="activities" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code (Optional)</label>
                <input type="text" placeholder="Casual" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="dresscode" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const activities = data.activities ? data.activities.split('\n').filter(a => a.trim()) : [];

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fffbeb'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🍾</div>
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Reception & Celebration'}</h2>
                        ${data.description ? `<p class="text-gray-600">${data.description}</p>` : ''}
                    </div>

                    <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-amber-200">
                        <div class="space-y-6">
                            ${data.location ? `
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl">
                                        📍
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</div>
                                        <div class="text-gray-900 font-semibold text-lg">${data.location}</div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.time ? `
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl">
                                        🕐
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Time</div>
                                        <div class="text-gray-900 font-semibold">${data.time}</div>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.food ? `
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl">
                                        🍽️
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Food & Beverages</div>
                                        <div class="text-gray-700">${data.food}</div>
                                    </div>
                                </div>
                            ` : ''}

                            ${activities.length > 0 ? `
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl">
                                        🎉
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-2">Activities</div>
                                        <ul class="space-y-1 text-gray-700">
                                            ${activities.map(activity => `<li>${activity}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            ` : ''}

                            ${data.dresscode ? `
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl">
                                        👔
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Dress Code</div>
                                        <div class="text-gray-900 font-semibold">${data.dresscode}</div>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
