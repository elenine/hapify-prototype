// Transportation & Parking Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.transportation = {
    name: '🚗 Transportation & Parking',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Getting Here"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="transportTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parking Information</label>
                <textarea placeholder="Free parking available in the lot..." rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="parkingInfo" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Public Transport</label>
                <textarea placeholder="Bus routes, metro stations..." rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="publicTransport" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ride Share Info</label>
                <textarea placeholder="Uber/Lyft drop-off location..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="rideShare" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea placeholder="Valet service, accessibility..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="transportNotes" onkeyup="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#e0f2fe"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="layoutStyle" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="list">List</option>
                    <option value="simple">Simple</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#e0f2fe';
        const layoutStyle = style.layoutStyle || 'cards';
        const title = data.transportTitle || 'Transportation & Parking';

        const items = [];
        if (data.parkingInfo) items.push({ icon: '🅿️', title: 'Parking', content: data.parkingInfo });
        if (data.publicTransport) items.push({ icon: '🚇', title: 'Public Transport', content: data.publicTransport });
        if (data.rideShare) items.push({ icon: '🚕', title: 'Ride Share', content: data.rideShare });
        if (data.transportNotes) items.push({ icon: 'ℹ️', title: 'Additional Info', content: data.transportNotes });

        if (items.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-gray-500">No transportation information added yet</p>
                </div>
            `;
        }

        let itemsHtml = '';
        if (layoutStyle === 'cards') {
            itemsHtml = `
                <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    ${items.map(item => `
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <div class="text-3xl mb-3">${item.icon}</div>
                            <h3 class="text-xl font-bold mb-2" style="color: ${globalStyles.primaryColor || '#059669'};">${item.title}</h3>
                            <p class="text-gray-700">${item.content}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'list') {
            itemsHtml = `
                <div class="max-w-3xl mx-auto space-y-4">
                    ${items.map(item => `
                        <div class="bg-white p-6 rounded-lg shadow-md flex gap-4">
                            <div class="text-3xl">${item.icon}</div>
                            <div>
                                <h3 class="text-lg font-bold mb-2" style="color: ${globalStyles.primaryColor || '#059669'};">${item.title}</h3>
                                <p class="text-gray-700">${item.content}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            itemsHtml = `
                <div class="max-w-3xl mx-auto space-y-6">
                    ${items.map(item => `
                        <div class="text-center">
                            <div class="text-2xl mb-2">${item.icon} <span class="font-bold" style="color: ${globalStyles.primaryColor || '#059669'};">${item.title}</span></div>
                            <p class="text-gray-700">${item.content}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-12 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${itemsHtml}
            </div>
        `;
    }
};
