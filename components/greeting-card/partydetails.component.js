// Party Details Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.partydetails = {
    name: '🎪 Party Details',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Join the Celebration!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                <input type="text" placeholder="Saturday, March 15th at 7:00 PM" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="datetime" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="123 Party Street, Fun City" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="location" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Details</label>
                <input type="text" placeholder="RSVP by March 1st" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="rsvp" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact Info</label>
                <input type="text" placeholder="Call or text: (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="contact" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Info (optional)</label>
                <textarea placeholder="Dress code, parking info, etc." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="additionalInfo" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="iconColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}; color: ${style.text || '#1f2937'}">
            <div class="max-w-2xl mx-auto">
                <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Join the Celebration!'}</h3>
                <div class="bg-white rounded-2xl shadow-lg p-8" style="background: ${style.cardBg || '#ffffff'}">
                    <div class="space-y-6">
                        ${data.datetime ? `
                            <div class="flex items-start gap-4">
                                <div class="text-3xl" style="color: ${style.iconColor || '#f59e0b'}">📅</div>
                                <div>
                                    <div class="font-semibold text-sm text-gray-500 mb-1">WHEN</div>
                                    <div class="text-lg">${data.datetime}</div>
                                </div>
                            </div>
                        ` : ''}
                        ${data.location ? `
                            <div class="flex items-start gap-4">
                                <div class="text-3xl" style="color: ${style.iconColor || '#f59e0b'}">📍</div>
                                <div>
                                    <div class="font-semibold text-sm text-gray-500 mb-1">WHERE</div>
                                    <div class="text-lg">${data.location}</div>
                                </div>
                            </div>
                        ` : ''}
                        ${data.rsvp ? `
                            <div class="flex items-start gap-4">
                                <div class="text-3xl" style="color: ${style.iconColor || '#f59e0b'}">✉️</div>
                                <div>
                                    <div class="font-semibold text-sm text-gray-500 mb-1">RSVP</div>
                                    <div class="text-lg">${data.rsvp}</div>
                                </div>
                            </div>
                        ` : ''}
                        ${data.contact ? `
                            <div class="flex items-start gap-4">
                                <div class="text-3xl" style="color: ${style.iconColor || '#f59e0b'}">📞</div>
                                <div>
                                    <div class="font-semibold text-sm text-gray-500 mb-1">CONTACT</div>
                                    <div class="text-lg">${data.contact}</div>
                                </div>
                            </div>
                        ` : ''}
                        ${data.additionalInfo ? `
                            <div class="flex items-start gap-4">
                                <div class="text-3xl" style="color: ${style.iconColor || '#f59e0b'}">ℹ️</div>
                                <div>
                                    <div class="font-semibold text-sm text-gray-500 mb-1">ADDITIONAL INFO</div>
                                    <div class="text-lg">${data.additionalInfo}</div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `
};
