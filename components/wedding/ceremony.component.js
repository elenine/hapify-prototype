// Ceremony Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.ceremony = {
    name: '💒 Ceremony Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Our Ceremony" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Our Ceremony" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ceremony Type</label>
                <input type="text" placeholder="e.g., Traditional Christian, Hindu, Civil, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="ceremonyType" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Officiant Name</label>
                <input type="text" placeholder="Rev. John Smith" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="officiantName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Officiant Title/Role</label>
                <input type="text" placeholder="Senior Pastor" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="officiantTitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Traditions</label>
                <textarea placeholder="Describe any special traditions or rituals during the ceremony..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="traditions" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Readings</label>
                <textarea placeholder="List any readings, scriptures, or poems to be shared..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="readings" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
                <textarea placeholder="Any additional information guests should know about the ceremony..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="notes" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="align" oninput="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const align = style.align || 'center';
        const textAlign = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
        const mxAuto = align === 'center' ? 'mx-auto' : '';

        const sections = [];

        if (data.ceremonyType) {
            sections.push({
                icon: '📜',
                label: 'Ceremony Type',
                content: data.ceremonyType
            });
        }

        if (data.officiantName || data.officiantTitle) {
            const officiantText = data.officiantTitle
                ? `${data.officiantName}, ${data.officiantTitle}`
                : data.officiantName;
            sections.push({
                icon: '✨',
                label: 'Officiated By',
                content: officiantText
            });
        }

        if (data.traditions) {
            sections.push({
                icon: '🕊️',
                label: 'Special Traditions',
                content: data.traditions
            });
        }

        if (data.readings) {
            sections.push({
                icon: '📖',
                label: 'Readings',
                content: data.readings
            });
        }

        if (data.notes) {
            sections.push({
                icon: '💡',
                label: 'Please Note',
                content: data.notes
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef3f2'}">
                <div class="max-w-2xl ${mxAuto}">
                    <div class="${textAlign} mb-8">
                        <div class="text-5xl mb-3">💒</div>
                        <h2 class="text-2xl font-bold mb-3">${data.title || 'Our Ceremony'}</h2>
                    </div>

                    ${sections.length > 0 ? `
                        <div class="space-y-6">
                            ${sections.map(section => `
                                <div class="${textAlign} bg-white/70 backdrop-blur rounded-lg p-6 shadow-sm">
                                    <div class="text-3xl mb-2">${section.icon}</div>
                                    <h3 class="font-semibold text-lg text-purple-700 mb-2">${section.label}</h3>
                                    <p class="text-gray-700 whitespace-pre-wrap">${section.content}</p>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="${textAlign} text-gray-500">Add ceremony details to display here</p>
                    `}
                </div>
            </div>
        `;
    }
};
