// Sponsors Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.sponsors = {
    name: '🤝 Event Sponsors',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Sponsors" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" value="Our Sponsors" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Thank You Message</label>
                <textarea placeholder="Thank you to our generous sponsors who make this event possible..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Platinum Sponsor</h4>
                <input type="text" placeholder="Company Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="platinum" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Gold Sponsors</h4>
                <input type="text" placeholder="Sponsor 1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="gold1" oninput="updatePreview()">
                <input type="text" placeholder="Sponsor 2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="gold2" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Silver Sponsors</h4>
                <input type="text" placeholder="Sponsor 1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="silver1" oninput="updatePreview()">
                <input type="text" placeholder="Sponsor 2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="silver2" oninput="updatePreview()">
                <input type="text" placeholder="Sponsor 3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="silver3" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Become a Sponsor</h4>
                <input type="url" placeholder="Sponsorship info URL (optional)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="sponsorUrl" oninput="updatePreview()">
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
        const bgColor = style.bg || '#f9fafb';

        const goldSponsors = [data.gold1, data.gold2].filter(Boolean);
        const silverSponsors = [data.silver1, data.silver2, data.silver3].filter(Boolean);

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <div class="text-5xl mb-3">🤝</div>
                        <h2 class="text-2xl font-bold mb-3">${data.title || 'Our Sponsors'}</h2>
                        ${data.message ? `<p class="text-gray-600">${data.message}</p>` : ''}
                    </div>

                    ${data.platinum ? `
                        <div class="mb-12 text-center">
                            <div class="inline-block px-3 py-1 bg-gradient-to-r from-gray-400 to-gray-300 text-white text-xs font-bold rounded-full mb-3">
                                PLATINUM
                            </div>
                            <div class="bg-white rounded-2xl shadow-lg p-8 inline-block">
                                <div class="text-2xl font-bold text-gray-900">${data.platinum}</div>
                            </div>
                        </div>
                    ` : ''}

                    ${goldSponsors.length > 0 ? `
                        <div class="mb-10 text-center">
                            <div class="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white text-xs font-bold rounded-full mb-4">
                                GOLD
                            </div>
                            <div class="flex justify-center gap-6 flex-wrap">
                                ${goldSponsors.map(sponsor => `
                                    <div class="bg-white rounded-xl shadow-md p-6 min-w-[200px]">
                                        <div class="text-xl font-semibold text-gray-900">${sponsor}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${silverSponsors.length > 0 ? `
                        <div class="mb-8 text-center">
                            <div class="inline-block px-3 py-1 bg-gradient-to-r from-gray-500 to-gray-400 text-white text-xs font-bold rounded-full mb-4">
                                SILVER
                            </div>
                            <div class="flex justify-center gap-4 flex-wrap">
                                ${silverSponsors.map(sponsor => `
                                    <div class="bg-white rounded-lg shadow-sm p-4 min-w-[150px]">
                                        <div class="text-base font-medium text-gray-900">${sponsor}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${data.sponsorUrl ? `
                        <div class="text-center mt-10">
                            <a href="${data.sponsorUrl}" target="_blank" class="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition">
                                Become a Sponsor
                            </a>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
