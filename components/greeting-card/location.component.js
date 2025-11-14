// Location/Map Section Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.location = {
    name: '📍 Location & Map',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="title"
                    placeholder="Find Us Here"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location Name</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="locationName"
                    placeholder="The Smith Residence"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="address"
                    rows="3"
                    placeholder="123 Main Street\nCity, State 12345\nUSA"
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Map URL (Google Maps link)</label>
                <input type="url"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="mapUrl"
                    placeholder="https://maps.google.com/..."
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Directions/Notes</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="directions"
                    rows="3"
                    placeholder="Parking available in the driveway. Ring the doorbell at the side entrance."
                    oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="bgColor"
                    value="#ecfccb"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="textColor"
                    value="#365314"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#ecfccb';
        const textColor = style.textColor || '#365314';
        const textAlign = style.textAlign || 'center';
        const title = data.title || 'Find Us Here';
        const locationName = data.locationName || '';
        const address = data.address || '';
        const mapUrl = data.mapUrl || '';
        const directions = data.directions || '';

        return `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 48px 24px; text-align: ${textAlign};">
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 16px;">📍 ${title}</h2>

                    ${locationName ? `
                        <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">${locationName}</h3>
                    ` : ''}

                    ${address ? `
                        <div style="margin-bottom: 24px; white-space: pre-line; line-height: 1.6;">
                            ${address}
                        </div>
                    ` : ''}

                    ${mapUrl ? `
                        <div style="margin-bottom: 24px;">
                            <a href="${mapUrl}" target="_blank" style="display: inline-block; padding: 12px 24px; background: ${textColor}; color: ${bgColor}; text-decoration: none; border-radius: 8px; font-weight: 600;">
                                🗺️ Open in Maps
                            </a>
                        </div>
                    ` : ''}

                    ${directions ? `
                        <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.5); border-radius: 8px; text-align: left;">
                            <div style="font-weight: 600; margin-bottom: 8px;">📝 Directions & Notes</div>
                            <div style="white-space: pre-line; line-height: 1.6; opacity: 0.9;">${directions}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
