// Travel Information Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.travel = {
    name: '✈️ Travel Information',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Travel & Directions" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Travel & Directions" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Brief introduction about getting to the venue..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">✈️ Airport Information</h4>
                <div class="space-y-3">
                    <input type="text" placeholder="Nearest Airport Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="airportName" oninput="updatePreview()">
                    <input type="text" placeholder="Airport Code (e.g., LAX)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="airportCode" oninput="updatePreview()">
                    <input type="text" placeholder="Distance to venue" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="airportDistance" oninput="updatePreview()">
                </div>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🚗 Driving Directions</h4>
                <textarea placeholder="Detailed driving directions from major highways or landmarks..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="drivingDirections" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🅿️ Parking Details</h4>
                <textarea placeholder="Where to park, fees, valet information..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="parking" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">🚌 Shuttle Service</h4>
                <textarea placeholder="Shuttle information between hotel and venue..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="shuttle" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">📱 Additional Tips</h4>
                <textarea placeholder="GPS coordinates, ride-share pickup points, or other helpful tips..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="additionalTips" oninput="updatePreview()"></textarea>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const sections = [];

        if (data.airportName || data.airportCode) {
            const airportText = data.airportCode
                ? `${data.airportName} (${data.airportCode})`
                : data.airportName;
            sections.push({
                icon: '✈️',
                title: 'Nearest Airport',
                content: [
                    airportText,
                    data.airportDistance ? `Distance: ${data.airportDistance}` : ''
                ].filter(Boolean).join('\n')
            });
        }

        if (data.drivingDirections) {
            sections.push({
                icon: '🚗',
                title: 'Driving Directions',
                content: data.drivingDirections
            });
        }

        if (data.parking) {
            sections.push({
                icon: '🅿️',
                title: 'Parking',
                content: data.parking
            });
        }

        if (data.shuttle) {
            sections.push({
                icon: '🚌',
                title: 'Shuttle Service',
                content: data.shuttle
            });
        }

        if (data.additionalTips) {
            sections.push({
                icon: '📱',
                title: 'Additional Tips',
                content: data.additionalTips
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#eff6ff'}">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">✈️</div>
                        <h2 class="text-2xl font-bold mb-3">${data.title || 'Travel & Directions'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${sections.length > 0 ? `
                        <div class="space-y-4">
                            ${sections.map(section => `
                                <div class="p-6 rounded-lg shadow-md" style="background: ${style.cardBg || '#ffffff'}">
                                    <div class="flex items-start gap-3">
                                        <div class="text-3xl flex-shrink-0">${section.icon}</div>
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg mb-2 text-purple-700">${section.title}</h3>
                                            <p class="text-gray-700 whitespace-pre-wrap">${section.content}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="text-center text-gray-500">Add travel information to display here</p>
                    `}
                </div>
            </div>
        `;
    }
};
