// Transportation & Parking Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.transportation = {
    name: '🚗 Transportation & Parking',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Transportation & Parking" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information</label>
                <textarea placeholder="Free parking available in Lots A, B, and C. Handicapped parking in Lot A near main entrance." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Public Transportation</label>
                <textarea placeholder="Metro: Take the Blue Line to University Station (10 min walk)&#10;Bus: Routes 12, 45, 67 stop at Main Gate" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="publicTransit" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shuttle Service (Optional)</label>
                <textarea placeholder="Complimentary shuttle service from nearby hotels. Runs every 30 minutes starting at 8:00 AM." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="shuttle" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ride Share Drop-off Location (Optional)</label>
                <input type="text" placeholder="Main entrance circle drive" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="rideshare" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea placeholder="Please arrive 30 minutes early to allow time for parking and seating." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="notes" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">🚗</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Transportation & Parking'}</h2>
                    </div>

                    <div class="space-y-6">
                        ${data.parking ? `
                            <div class="bg-white rounded-xl p-6 shadow-sm border-l-4 border-indigo-500">
                                <div class="flex items-start gap-3">
                                    <div class="text-3xl flex-shrink-0">🅿️</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg mb-2 text-gray-900">Parking</h3>
                                        <p class="text-gray-700 leading-relaxed">${data.parking.replace(/\n/g, '<br>')}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.publicTransit ? `
                            <div class="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
                                <div class="flex items-start gap-3">
                                    <div class="text-3xl flex-shrink-0">🚇</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg mb-2 text-gray-900">Public Transportation</h3>
                                        <p class="text-gray-700 leading-relaxed whitespace-pre-line">${data.publicTransit}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.shuttle ? `
                            <div class="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
                                <div class="flex items-start gap-3">
                                    <div class="text-3xl flex-shrink-0">🚐</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg mb-2 text-gray-900">Shuttle Service</h3>
                                        <p class="text-gray-700 leading-relaxed">${data.shuttle}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.rideshare ? `
                            <div class="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
                                <div class="flex items-start gap-3">
                                    <div class="text-3xl flex-shrink-0">🚕</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg mb-2 text-gray-900">Ride Share Drop-off</h3>
                                        <p class="text-gray-700 leading-relaxed">${data.rideshare}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${data.notes ? `
                            <div class="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                                <div class="flex items-start gap-3">
                                    <div class="text-2xl flex-shrink-0">ℹ️</div>
                                    <div class="flex-1">
                                        <h3 class="font-bold text-sm mb-1 text-gray-900">Important Notes</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">${data.notes}</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
