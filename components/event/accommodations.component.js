// Accommodations Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accommodations = {
    name: '🏨 Accommodations',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Where to Stay"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="accommodationsTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="We've reserved room blocks at nearby hotels..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="accommodationsIntro" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotel 1 Name</label>
                <input type="text" placeholder="e.g., Grand Hotel Downtown"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="hotel1Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotel 1 Details</label>
                <textarea placeholder="Distance, booking code, contact..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="hotel1Details" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotel 1 Link</label>
                <input type="url" placeholder="https://..."
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="hotel1Link" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotel 2 Name</label>
                <input type="text" placeholder="e.g., Riverside Inn"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="hotel2Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotel 2 Details</label>
                <textarea placeholder="Distance, booking code, contact..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="hotel2Details" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hotel 2 Link</label>
                <input type="url" placeholder="https://..."
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="hotel2Link" onkeyup="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="cardStyle" onchange="updatePreview()">
                    <option value="elevated">Elevated Cards</option>
                    <option value="bordered">Bordered Cards</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fef3c7';
        const cardStyle = style.cardStyle || 'elevated';
        const title = data.accommodationsTitle || 'Accommodations';

        const hotels = [];
        if (data.hotel1Name) {
            hotels.push({
                name: data.hotel1Name,
                details: data.hotel1Details,
                link: data.hotel1Link
            });
        }
        if (data.hotel2Name) {
            hotels.push({
                name: data.hotel2Name,
                details: data.hotel2Details,
                link: data.hotel2Link
            });
        }

        if (hotels.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    ${data.accommodationsIntro ? `<p class="text-gray-700 mb-6 max-w-2xl mx-auto">${data.accommodationsIntro}</p>` : ''}
                    <p class="text-gray-500">No hotels added yet</p>
                </div>
            `;
        }

        const cardClasses = {
            elevated: 'bg-white p-6 rounded-xl shadow-lg',
            bordered: 'bg-white p-6 rounded-xl border-2 border-gray-200',
            minimal: 'bg-white/50 p-6 rounded-lg'
        };

        const hotelsHtml = hotels.map(hotel => `
            <div class="${cardClasses[cardStyle]}">
                <h3 class="text-xl font-bold mb-3" style="color: ${globalStyles.primaryColor || '#059669'};">🏨 ${hotel.name}</h3>
                ${hotel.details ? `<p class="text-gray-700 mb-4">${hotel.details}</p>` : ''}
                ${hotel.link ? `
                    <a href="${hotel.link}" target="_blank"
                       class="inline-block px-6 py-2 rounded-lg font-semibold text-white"
                       style="background-color: ${globalStyles.primaryColor || '#059669'};">
                        View & Book
                    </a>
                ` : ''}
            </div>
        `).join('');

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.accommodationsIntro ? `<p class="text-gray-700 mb-12 text-center max-w-2xl mx-auto">${data.accommodationsIntro}</p>` : ''}
                <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    ${hotelsHtml}
                </div>
            </div>
        `;
    }
};
