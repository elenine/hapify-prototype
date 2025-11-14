// Wishes Board/Guestbook Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.guestbook = {
    name: '✍️ Wishes Board',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Birthday Wishes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Share your birthday wishes and messages" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                <textarea placeholder="We'd love to collect your birthday wishes!&#10;&#10;You can:&#10;• Write a message in our physical guestbook at the party&#10;• Send your wishes via email to wishes@party.com&#10;• Post on social media with #BirthdayName2024" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact/Submit Method</label>
                <input type="text" placeholder="Email: wishes@party.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="contact" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="guestbookStyle" oninput="updatePreview()">
                    <option value="elegant">Elegant</option>
                    <option value="modern">Modern</option>
                    <option value="playful">Playful</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const guestbookStyle = style.guestbookStyle || 'elegant';

        if (guestbookStyle === 'playful') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fef2f2'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-12 text-white shadow-2xl">
                            <div class="text-center mb-10">
                                <div class="text-7xl mb-4">✍️</div>
                                <h2 class="text-5xl font-bold mb-4">${data.title || 'Birthday Wishes'}</h2>
                                ${data.subtitle ? `<p class="text-2xl opacity-95">${data.subtitle}</p>` : ''}
                            </div>
                            <div class="bg-white text-gray-900 rounded-2xl p-8">
                                <div class="text-lg leading-relaxed whitespace-pre-line mb-6">${data.instructions || 'Share your birthday wishes!'}</div>
                                ${data.contact ? `<div class="text-center"><div class="inline-block bg-pink-100 text-pink-700 px-6 py-3 rounded-lg font-semibold">${data.contact}</div></div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (guestbookStyle === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fef2f2'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">✍️</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Birthday Wishes'}</h2>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="bg-white rounded-2xl p-10 shadow-lg border-2 border-pink-200">
                            <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-8">${data.instructions || 'Share your birthday wishes!'}</div>
                            ${data.contact ? `
                                <div class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 text-center">
                                    <div class="text-sm font-bold text-pink-700 uppercase mb-2">Submit Your Wishes</div>
                                    <div class="text-gray-900 font-semibold">${data.contact}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#fef2f2'}">
                <div class="max-w-3xl mx-auto">
                    <div class="bg-white rounded-2xl p-12 shadow-xl border border-rose-200">
                        <div class="text-center mb-10">
                            <div class="text-6xl mb-4">✍️</div>
                            <h3 class="text-4xl font-serif font-bold text-gray-900 mb-3">${data.title || 'Birthday Wishes'}</h3>
                            ${data.subtitle ? `<p class="text-lg text-gray-600 italic">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="h-1 w-32 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
                        <div class="text-gray-700 leading-relaxed whitespace-pre-line text-center mb-8">${data.instructions || 'Share your birthday wishes!'}</div>
                        ${data.contact ? `
                            <div class="border-t border-rose-200 pt-6 text-center">
                                <div class="text-pink-700 font-semibold">${data.contact}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
