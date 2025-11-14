// Map & Directions Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.map = {
    name: '🗺️ Map & Directions',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., How to Get There, Directions"
                       value="How to Get There"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Venue Address</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="address"
                          rows="3"
                          placeholder="123 Party Street, Birthday City, ST 12345"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions from Highway/Main Road</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="fromHighway"
                          rows="3"
                          placeholder="From I-95, take exit 42..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions from City Center</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="fromCity"
                          rows="3"
                          placeholder="From downtown, head north on Main Street..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Public Transportation</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="publicTransport"
                          rows="2"
                          placeholder="Bus line 24, Metro station nearby..."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Landmark/Reference Point</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="landmark"
                       placeholder="e.g., Next to City Park, Across from Starbucks"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Google Maps Link (Optional)</label>
                <input type="url"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="mapLink"
                       placeholder="https://maps.google.com/..."
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="notes"
                          rows="2"
                          placeholder="Gate code, entrance instructions, etc."
                          onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="bgColor"
                       value="#ecfdf5"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="textColor"
                       value="#1f2937"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="accentColor"
                       value="#10b981"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="detailed" selected>Detailed</option>
                    <option value="compact">Compact</option>
                    <option value="card">Card Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="padding"
                        onchange="updatePreview()">
                    <option value="py-8">Small</option>
                    <option value="py-12" selected>Medium</option>
                    <option value="py-16">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#ecfdf5';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#10b981';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'detailed';

        if (!data.address && !data.fromHighway && !data.fromCity) {
            return '';
        }

        let contentHtml = '';

        if (layoutStyle === 'detailed') {
            contentHtml = `
                ${data.address ? `
                    <div class="mb-6 text-center bg-white rounded-lg p-5">
                        <div class="text-2xl mb-2">📍</div>
                        <h3 class="font-bold text-lg mb-2" style="color: ${accentColor};">Address</h3>
                        <p class="text-lg whitespace-pre-line">${data.address}</p>
                        ${data.landmark ? `<p class="text-sm text-gray-600 mt-2">🏛️ ${data.landmark}</p>` : ''}
                    </div>
                ` : ''}

                <div class="space-y-4">
                    ${data.fromHighway ? `
                        <div class="bg-white bg-opacity-70 rounded-lg p-4">
                            <h3 class="font-bold mb-2 flex items-center gap-2" style="color: ${accentColor};">
                                <span>🛣️</span> From Highway/Main Road
                            </h3>
                            <p class="whitespace-pre-line">${data.fromHighway}</p>
                        </div>
                    ` : ''}

                    ${data.fromCity ? `
                        <div class="bg-white bg-opacity-70 rounded-lg p-4">
                            <h3 class="font-bold mb-2 flex items-center gap-2" style="color: ${accentColor};">
                                <span>🏙️</span> From City Center
                            </h3>
                            <p class="whitespace-pre-line">${data.fromCity}</p>
                        </div>
                    ` : ''}

                    ${data.publicTransport ? `
                        <div class="bg-white bg-opacity-70 rounded-lg p-4">
                            <h3 class="font-bold mb-2 flex items-center gap-2" style="color: ${accentColor};">
                                <span>🚌</span> Public Transportation
                            </h3>
                            <p class="whitespace-pre-line">${data.publicTransport}</p>
                        </div>
                    ` : ''}
                </div>

                ${data.mapLink ? `
                    <div class="mt-6 text-center">
                        <a href="${data.mapLink}" target="_blank"
                           class="inline-block px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
                           style="background-color: ${accentColor};">
                            🗺️ Open in Google Maps
                        </a>
                    </div>
                ` : ''}

                ${data.notes ? `
                    <div class="mt-6 text-center bg-white bg-opacity-70 rounded-lg p-4">
                        <p class="text-sm italic">💡 ${data.notes}</p>
                    </div>
                ` : ''}
            `;
        } else if (layoutStyle === 'compact') {
            const directions = [
                data.fromHighway && { icon: '🛣️', label: 'From Highway', text: data.fromHighway },
                data.fromCity && { icon: '🏙️', label: 'From City', text: data.fromCity },
                data.publicTransport && { icon: '🚌', label: 'Public Transport', text: data.publicTransport }
            ].filter(Boolean);

            contentHtml = `
                ${data.address ? `
                    <div class="text-center mb-6">
                        <div class="text-3xl mb-2">📍</div>
                        <p class="text-lg font-semibold whitespace-pre-line">${data.address}</p>
                        ${data.landmark ? `<p class="text-sm text-gray-600 mt-1">🏛️ ${data.landmark}</p>` : ''}
                    </div>
                ` : ''}

                <div class="grid sm:grid-cols-2 gap-4">
                    ${directions.map(dir => `
                        <div class="bg-white rounded-lg p-4">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-xl">${dir.icon}</span>
                                <span class="font-semibold text-sm" style="color: ${accentColor};">${dir.label}</span>
                            </div>
                            <p class="text-sm">${dir.text}</p>
                        </div>
                    `).join('')}
                </div>

                ${data.mapLink ? `
                    <div class="mt-4 text-center">
                        <a href="${data.mapLink}" target="_blank"
                           class="inline-block px-5 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition"
                           style="background-color: ${accentColor};">
                            🗺️ Open Map
                        </a>
                    </div>
                ` : ''}
            `;
        } else { // card
            contentHtml = `
                <div class="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                    ${data.address ? `
                        <div class="text-center mb-6 pb-6 border-b">
                            <div class="text-4xl mb-3">📍</div>
                            <h3 class="font-bold text-xl mb-2" style="color: ${accentColor};">Venue Location</h3>
                            <p class="text-lg whitespace-pre-line">${data.address}</p>
                            ${data.landmark ? `<p class="text-sm text-gray-600 mt-2">🏛️ ${data.landmark}</p>` : ''}
                        </div>
                    ` : ''}

                    ${data.fromHighway || data.fromCity || data.publicTransport ? `
                        <div class="space-y-3">
                            <h4 class="font-bold text-center mb-3" style="color: ${accentColor};">How to Get Here</h4>
                            ${data.fromHighway ? `<p class="text-sm"><strong>🛣️ From Highway:</strong> ${data.fromHighway}</p>` : ''}
                            ${data.fromCity ? `<p class="text-sm"><strong>🏙️ From City:</strong> ${data.fromCity}</p>` : ''}
                            ${data.publicTransport ? `<p class="text-sm"><strong>🚌 Public Transport:</strong> ${data.publicTransport}</p>` : ''}
                        </div>
                    ` : ''}

                    ${data.mapLink ? `
                        <div class="mt-6 text-center pt-6 border-t">
                            <a href="${data.mapLink}" target="_blank"
                               class="inline-block px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
                               style="background-color: ${accentColor};">
                                🗺️ View on Google Maps
                            </a>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">🗺️</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'How to Get There'}
                        </h2>
                    </div>

                    ${contentHtml}
                </div>
            </div>
        `;
    }
};
