// CPE/CE Credits Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.certificates = {
    name: '📜 CPE/CE Credits',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Continuing Education Credits" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" value="Continuing Education Credits" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Credits Available</label>
                <input type="text" placeholder="Up to 12 CPE/CE credits" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="credits" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accreditation Body</label>
                <input type="text" placeholder="Accredited by NASBA, AMA, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="accreditation" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Eligibility Requirements</label>
                <textarea placeholder="To receive credits, attendees must:\n• Attend full sessions\n• Complete evaluation forms\n• Sign in/out for each session" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="requirements" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Certificate Distribution</label>
                <textarea placeholder="Certificates will be emailed within 2 weeks of the conference..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="distribution" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Questions Contact</label>
                <input type="email" placeholder="credits@conference.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="contact" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ede9fe" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#ede9fe';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-5xl mb-3">📜</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Continuing Education Credits'}</h2>
                    </div>

                    <div class="bg-white rounded-xl p-8 shadow-lg">
                        ${data.credits ? `
                            <div class="text-center mb-6 p-4 bg-teal-50 rounded-lg">
                                <div class="text-3xl font-bold text-teal-700 mb-1">${data.credits}</div>
                                <div class="text-sm text-gray-600">Available for Attendees</div>
                            </div>
                        ` : ''}

                        ${data.accreditation ? `
                            <div class="mb-6">
                                <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span>✓</span>
                                    <span>Accreditation</span>
                                </h3>
                                <p class="text-gray-700">${data.accreditation}</p>
                            </div>
                        ` : ''}

                        ${data.requirements ? `
                            <div class="mb-6">
                                <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span>📋</span>
                                    <span>Requirements</span>
                                </h3>
                                <div class="text-gray-700 text-sm whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">${data.requirements}</div>
                            </div>
                        ` : ''}

                        ${data.distribution ? `
                            <div class="mb-6">
                                <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span>📧</span>
                                    <span>Certificate Distribution</span>
                                </h3>
                                <p class="text-gray-700 text-sm">${data.distribution}</p>
                            </div>
                        ` : ''}

                        ${data.contact ? `
                            <div class="text-center pt-6 border-t">
                                <p class="text-sm text-gray-600 mb-2">Questions about CE credits?</p>
                                <a href="mailto:${data.contact}" class="text-teal-600 font-medium hover:underline">${data.contact}</a>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
