// Accessibility Component for Event

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.accessibility = {
    name: '♿ Accessibility',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Accessibility Information" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" value="Accessibility Information" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="We are committed to making this event accessible to everyone..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wheelchair Access</label>
                <textarea placeholder="✓ Wheelchair ramps at all entrances&#10;✓ Accessible restrooms&#10;✓ Elevator access to all floors" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="wheelchairAccess" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Hearing Assistance</label>
                <textarea placeholder="ASL interpreters available upon request&#10;Closed captioning for presentations" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="hearing" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Visual Assistance</label>
                <textarea placeholder="Large print materials available&#10;Service animals welcome" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="visual" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dietary Accommodations</label>
                <textarea placeholder="Gluten-free, vegetarian, and allergen-free options available&#10;Please notify us of special needs when RSVPing" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="dietary" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact for Needs</label>
                <input type="text" placeholder="accessibility@event.com or (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="contact" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#f0f9ff';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">♿</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Accessibility Information'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    <div class="space-y-4">
                        ${data.wheelchairAccess ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3 mb-3">
                                    <div class="text-2xl">♿</div>
                                    <h3 class="font-semibold text-lg text-green-700">Wheelchair Access</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap pl-9">${data.wheelchairAccess}</div>
                            </div>
                        ` : ''}

                        ${data.hearing ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3 mb-3">
                                    <div class="text-2xl">👂</div>
                                    <h3 class="font-semibold text-lg text-green-700">Hearing Assistance</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap pl-9">${data.hearing}</div>
                            </div>
                        ` : ''}

                        ${data.visual ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3 mb-3">
                                    <div class="text-2xl">👁️</div>
                                    <h3 class="font-semibold text-lg text-green-700">Visual Assistance</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap pl-9">${data.visual}</div>
                            </div>
                        ` : ''}

                        ${data.dietary ? `
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <div class="flex items-start gap-3 mb-3">
                                    <div class="text-2xl">🍽️</div>
                                    <h3 class="font-semibold text-lg text-green-700">Dietary Accommodations</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap pl-9">${data.dietary}</div>
                            </div>
                        ` : ''}

                        ${data.contact ? `
                            <div class="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
                                <div class="flex items-start gap-3">
                                    <div class="text-xl">📞</div>
                                    <div>
                                        <h4 class="font-semibold text-gray-900 mb-1">Need Additional Accommodations?</h4>
                                        <p class="text-sm text-gray-700">Contact us: ${data.contact}</p>
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
