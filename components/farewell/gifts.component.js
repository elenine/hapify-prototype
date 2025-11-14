// Gift/Contribution Preferences Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.gifts = {
    name: '🎁 Gift Preferences',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Gift Information" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Main Message</label>
                <textarea placeholder="Your presence is the best gift, but if you'd like to contribute..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Gift/Contribution Link (Optional)</label>
                <input type="url" placeholder="https://..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="registryLink" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Link Description (Optional)</label>
                <input type="text" placeholder="Group gift contribution, Memory book, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="registryName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Alternative Options (Optional)</label>
                <textarea placeholder="• Donations to [Charity Name]&#10;• Written memories & well wishes&#10;• Group video messages welcome" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="alternatives" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">One option per line</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const alternatives = data.alternatives ? data.alternatives.split('\n').filter(alt => alt.trim()) : [];

        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#f9fafb'}">
                <div class="max-w-lg mx-auto">
                    <div class="text-5xl mb-4">🎁</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Gift Information'}</h2>
                    <p class="text-gray-600 mb-6">${data.message || "Your presence is the best gift, but if you'd like to contribute..."}</p>

                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        ${data.registryLink ? `
                            <div class="mb-6">
                                <div class="text-sm text-gray-500 mb-3">Contribution Link</div>
                                <a href="${data.registryLink}" target="_blank" class="inline-block bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition">
                                    ${data.registryName || 'View Contribution Options'}
                                </a>
                            </div>
                        ` : ''}

                        ${alternatives.length > 0 ? `
                            <div class="${data.registryLink ? 'pt-6 border-t border-gray-200' : ''}">
                                <div class="text-sm font-semibold text-gray-700 mb-3">Other Options</div>
                                <ul class="space-y-2 text-left text-sm text-gray-600 max-w-xs mx-auto">
                                    ${alternatives.map(alt => `<li>${alt}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
