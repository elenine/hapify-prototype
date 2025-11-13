// Special Notes/Instructions Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.message = {
    name: '📝 Important Notes',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Important Information" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon (Optional)</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="icon" oninput="updatePreview()">
                    <option value="">No Icon</option>
                    <option value="📝">📝 Notes</option>
                    <option value="ℹ️">ℹ️ Information</option>
                    <option value="⚠️">⚠️ Important</option>
                    <option value="🅿️">🅿️ Parking</option>
                    <option value="🍽️">🍽️ Food/Dietary</option>
                    <option value="👶">👶 Kids Welcome</option>
                    <option value="🎵">🎵 Entertainment</option>
                    <option value="📸">📸 Photos</option>
                    <option value="🎉">🎉 Party Info</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Notes/Instructions</label>
                <textarea placeholder="Please let us know about any dietary restrictions when you RSVP.&#10;&#10;Kids are welcome! We'll have activities for all ages.&#10;&#10;Feel free to bring your camera - we love photos!" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="content" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="noteStyle" oninput="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="banner">Banner Style</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const noteStyle = style.noteStyle || 'card';
        const icon = data.icon || '';

        if (noteStyle === 'banner') {
            return `
                <div class="py-8 px-6" style="background: ${style.bg || '#fffbeb'}; border-top: 3px solid #f59e0b; border-bottom: 3px solid #f59e0b;">
                    <div class="max-w-3xl mx-auto">
                        <div class="flex items-start gap-4">
                            ${icon ? `<div class="text-4xl flex-shrink-0">${icon}</div>` : ''}
                            <div class="flex-1">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">${data.title || 'Important Information'}</h3>
                                <div class="text-gray-700 leading-relaxed whitespace-pre-line">${data.content || 'Add important notes or instructions here...'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fffbeb'}">
                <div class="max-w-2xl mx-auto">
                    <div class="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
                        <div class="text-center mb-4">
                            ${icon ? `<div class="text-5xl mb-2">${icon}</div>` : ''}
                            <h3 class="text-2xl font-bold text-gray-900">${data.title || 'Important Information'}</h3>
                        </div>
                        <div class="text-gray-700 leading-relaxed whitespace-pre-line text-center">${data.content || 'Add important notes or instructions here...'}</div>
                    </div>
                </div>
            </div>
        `;
    }
};
