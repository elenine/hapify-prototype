// Surprise Party Instructions Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.surprise = {
    name: '🤫 Surprise Party',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Shh... It's a Surprise!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Alert Message</label>
                <input type="text" placeholder="Please keep this party a SECRET!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="alert" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                <textarea placeholder="🤫 DO NOT tell [Name] about this party!&#10;&#10;📞 Do not discuss on social media&#10;⏰ Please arrive by 2:45 PM (party starts at 3 PM)&#10;🚗 Park on the side street to avoid suspicion&#10;🔇 Turn your phone to silent mode&#10;&#10;When [Name] arrives, everyone yell 'SURPRISE!'" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="instructions" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Contact for Questions</label>
                <input type="text" placeholder="Contact Sarah: (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="contact" oninput="updatePreview()">
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Alert Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="surpriseStyle" oninput="updatePreview()">
                    <option value="urgent">Urgent Alert</option>
                    <option value="friendly">Friendly Reminder</option>
                    <option value="playful">Playful</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const surpriseStyle = style.surpriseStyle || 'urgent';

        if (surpriseStyle === 'playful') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fef3c7'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-12 text-white shadow-2xl transform -rotate-1">
                            <div class="rotate-1 text-center">
                                <div class="text-8xl mb-6 animate-pulse">🤫</div>
                                <h2 class="text-5xl font-black mb-4">${data.title || "Shh... It's a Surprise!"}</h2>
                                <div class="bg-white text-orange-900 rounded-2xl p-8 mb-8">
                                    <div class="text-3xl font-bold mb-6">${data.alert || 'Please keep this party a SECRET!'}</div>
                                    <div class="text-left text-lg leading-relaxed whitespace-pre-line">${data.instructions || 'Surprise party instructions...'}</div>
                                </div>
                                ${data.contact ? `<div class="text-2xl font-semibold">${data.contact}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (surpriseStyle === 'friendly') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}">
                    <div class="max-w-3xl mx-auto">
                        <div class="bg-white rounded-2xl p-10 shadow-lg border-2 border-amber-300">
                            <div class="text-center mb-8">
                                <div class="text-6xl mb-4">🤫</div>
                                <h3 class="text-4xl font-bold text-gray-900 mb-3">${data.title || "Shh... It's a Surprise!"}</h3>
                                <div class="inline-block bg-amber-100 border-2 border-amber-400 rounded-lg px-6 py-3">
                                    <p class="text-xl font-semibold text-amber-800">${data.alert || 'Please keep this party a SECRET!'}</p>
                                </div>
                            </div>
                            <div class="bg-amber-50 rounded-xl p-8 mb-6">
                                <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">${data.instructions || 'Surprise party instructions...'}</div>
                            </div>
                            ${data.contact ? `<div class="text-center text-gray-700 font-medium">${data.contact}</div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}">
                <div class="max-w-3xl mx-auto">
                    <div class="bg-red-50 border-4 border-red-500 rounded-2xl p-10 shadow-xl">
                        <div class="text-center mb-8">
                            <div class="text-7xl mb-4">🤫</div>
                            <h3 class="text-4xl font-black text-red-600 mb-4">${data.title || "Shh... It's a Surprise!"}</h3>
                            <div class="bg-red-600 text-white rounded-lg px-8 py-4 inline-block">
                                <p class="text-2xl font-bold uppercase">${data.alert || 'Keep This SECRET!'}</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl p-8 border-2 border-red-200">
                            <div class="text-gray-800 text-lg leading-relaxed whitespace-pre-line font-medium">${data.instructions || 'Surprise party instructions...'}</div>
                        </div>
                        ${data.contact ? `<div class="text-center mt-6 text-red-700 font-bold text-lg">${data.contact}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
