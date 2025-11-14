// Tribute/Dedication Component for Graduation Ceremony

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.tribute = {
    name: '💝 Tribute',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Dedicated To" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Who is this dedicated to?</label>
                <input type="text" placeholder="My Parents, My Family, In Memory of..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="dedicatedTo" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tribute Message</label>
                <textarea placeholder="This achievement wouldn't have been possible without your unwavering support, love, and encouragement. Thank you for believing in me every step of the way." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Quote (Optional)</label>
                <textarea placeholder="Behind every successful person is a substantial amount of support from family and friends." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="quote" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo (Optional)</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data" data-field="photo" onchange="handleImageUpload(this)">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        return `
            <div class="py-12 px-6 text-center" style="background: ${style.bg || '#fdf2f8'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-5xl mb-4">💝</div>
                    <h2 class="text-2xl font-bold mb-8">${data.title || 'Dedicated To'}</h2>

                    <div class="bg-white rounded-2xl p-8 shadow-lg">
                        ${data.photo ? `
                            <div class="mb-6">
                                <img src="${data.photo}" alt="Tribute" class="w-32 h-32 rounded-full object-cover mx-auto border-4 border-indigo-100">
                            </div>
                        ` : ''}

                        ${data.dedicatedTo ? `
                            <div class="mb-6">
                                <div class="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-bold text-lg">
                                    ${data.dedicatedTo}
                                </div>
                            </div>
                        ` : ''}

                        ${data.message ? `
                            <div class="mb-6">
                                <p class="text-gray-700 text-lg leading-relaxed italic">
                                    "${data.message}"
                                </p>
                            </div>
                        ` : ''}

                        ${data.quote ? `
                            <div class="pt-6 border-t border-gray-200">
                                <div class="text-3xl text-indigo-200 mb-2">"</div>
                                <p class="text-gray-600 italic">${data.quote}</p>
                            </div>
                        ` : ''}

                        <div class="mt-8">
                            <div class="text-3xl">❤️</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
