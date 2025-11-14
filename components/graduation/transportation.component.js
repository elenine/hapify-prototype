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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="list">List View</option>
                    <option value="cards">Card Grid</option>
                    <option value="modern">Modern Icons</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'list';
        const bg = style.bg || '#f9fafb';
        const accent = style.accent || '#6366f1';

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-5xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">🚗</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Transportation & Parking'}</h2>
                            </div>

                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                ${data.parking ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">🅿️</div>
                                        <h3 class="font-bold text-lg mb-2" style="color: ${accent}">Parking</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">${data.parking.replace(/\n/g, '<br>')}</p>
                                    </div>
                                ` : ''}

                                ${data.publicTransit ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">🚇</div>
                                        <h3 class="font-bold text-lg mb-2" style="color: ${accent}">Public Transit</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed whitespace-pre-line">${data.publicTransit}</p>
                                    </div>
                                ` : ''}

                                ${data.shuttle ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">🚐</div>
                                        <h3 class="font-bold text-lg mb-2" style="color: ${accent}">Shuttle Service</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">${data.shuttle}</p>
                                    </div>
                                ` : ''}

                                ${data.rideshare ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-4xl mb-3">🚕</div>
                                        <h3 class="font-bold text-lg mb-2" style="color: ${accent}">Ride Share</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">${data.rideshare}</p>
                                    </div>
                                ` : ''}

                                ${data.notes ? `
                                    <div class="bg-white rounded-xl p-6 shadow-md col-span-full" style="border: 2px solid ${accent}20">
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl flex-shrink-0">ℹ️</div>
                                            <div class="flex-1">
                                                <h3 class="font-bold text-sm mb-2" style="color: ${accent}">Important Notes</h3>
                                                <p class="text-gray-700 text-sm leading-relaxed">${data.notes}</p>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">🚗</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Transportation & Parking'}</h2>
                            </div>

                            <div class="space-y-4">
                                ${data.parking ? `
                                    <div class="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl" style="background: ${accent}">
                                            🅿️
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg mb-2 text-gray-900">Parking</h3>
                                            <p class="text-gray-700 leading-relaxed">${data.parking.replace(/\n/g, '<br>')}</p>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.publicTransit ? `
                                    <div class="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl" style="background: ${accent}">
                                            🚇
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg mb-2 text-gray-900">Public Transportation</h3>
                                            <p class="text-gray-700 leading-relaxed whitespace-pre-line">${data.publicTransit}</p>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.shuttle ? `
                                    <div class="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl" style="background: ${accent}">
                                            🚐
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg mb-2 text-gray-900">Shuttle Service</h3>
                                            <p class="text-gray-700 leading-relaxed">${data.shuttle}</p>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.rideshare ? `
                                    <div class="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl" style="background: ${accent}">
                                            🚕
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg mb-2 text-gray-900">Ride Share Drop-off</h3>
                                            <p class="text-gray-700 leading-relaxed">${data.rideshare}</p>
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.notes ? `
                                    <div class="rounded-xl p-4" style="background: ${accent}15">
                                        <div class="flex items-start gap-3">
                                            <div class="text-2xl flex-shrink-0">ℹ️</div>
                                            <div class="flex-1">
                                                <h3 class="font-bold text-sm mb-1" style="color: ${accent}">Important Notes</h3>
                                                <p class="text-gray-700 text-sm leading-relaxed">${data.notes}</p>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-4xl mb-3">🚗</div>
                                <h2 class="text-2xl font-bold" style="color: ${accent}">${data.title || 'Transportation & Parking'}</h2>
                            </div>

                            <div class="space-y-4">
                                ${data.parking ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <h3 class="font-bold mb-2" style="color: ${accent}">🅿️ Parking</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">${data.parking.replace(/\n/g, '<br>')}</p>
                                    </div>
                                ` : ''}

                                ${data.publicTransit ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <h3 class="font-bold mb-2" style="color: ${accent}">🚇 Public Transit</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed whitespace-pre-line">${data.publicTransit}</p>
                                    </div>
                                ` : ''}

                                ${data.shuttle ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <h3 class="font-bold mb-2" style="color: ${accent}">🚐 Shuttle</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">${data.shuttle}</p>
                                    </div>
                                ` : ''}

                                ${data.rideshare ? `
                                    <div class="p-4 bg-white rounded-lg border-l-4" style="border-color: ${accent}">
                                        <h3 class="font-bold mb-2" style="color: ${accent}">🚕 Ride Share</h3>
                                        <p class="text-gray-700 text-sm leading-relaxed">${data.rideshare}</p>
                                    </div>
                                ` : ''}

                                ${data.notes ? `
                                    <div class="p-4 rounded-lg" style="background: ${accent}10; border: 1px solid ${accent}40">
                                        <p class="text-gray-700 text-sm leading-relaxed"><strong>ℹ️ Note:</strong> ${data.notes}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;

            case 'list':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">🚗</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Transportation & Parking'}</h2>
                            </div>

                            <div class="space-y-6">
                                ${data.parking ? `
                                    <div class="bg-white rounded-xl p-6 shadow-sm border-l-4" style="border-color: ${accent}">
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
                                    <div class="bg-white rounded-xl p-6 shadow-sm border-l-4" style="border-color: ${accent}">
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
                                    <div class="bg-white rounded-xl p-6 shadow-sm border-l-4" style="border-color: ${accent}">
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
                                    <div class="bg-white rounded-xl p-6 shadow-sm border-l-4" style="border-color: ${accent}">
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
                                    <div class="rounded-xl p-6" style="background: ${accent}15; border: 2px solid ${accent}30">
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
    }
};
