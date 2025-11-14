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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card</option>
                    <option value="split">Split Layout</option>
                    <option value="featured">Featured</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf2f8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#fdf2f8';
        const accent = style.accent || '#6366f1';

        switch(layout) {
            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-5xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">💝</div>
                                <h2 class="text-3xl font-bold">${data.title || 'Dedicated To'}</h2>
                            </div>
                            <div class="grid md:grid-cols-2 gap-8 items-center">
                                <div class="text-center">
                                    ${data.photo ? `
                                        <img src="${data.photo}" alt="Tribute" class="w-48 h-48 rounded-full object-cover mx-auto shadow-xl border-4" style="border-color: ${accent}">
                                    ` : `
                                        <div class="w-48 h-48 rounded-full mx-auto flex items-center justify-center text-6xl" style="background: ${accent}15">
                                            💝
                                        </div>
                                    `}
                                    ${data.dedicatedTo ? `
                                        <div class="mt-6">
                                            <div class="inline-block px-6 py-3 text-white rounded-full font-bold text-lg" style="background: ${accent}">
                                                ${data.dedicatedTo}
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="bg-white rounded-2xl p-8 shadow-lg">
                                    ${data.message ? `
                                        <div class="mb-6">
                                            <p class="text-gray-700 text-lg leading-relaxed italic">
                                                "${data.message}"
                                            </p>
                                        </div>
                                    ` : ''}
                                    ${data.quote ? `
                                        <div class="pt-6 border-t border-gray-200">
                                            <div class="text-3xl mb-2" style="color: ${accent}40">"</div>
                                            <p class="text-gray-600 italic">${data.quote}</p>
                                        </div>
                                    ` : ''}
                                    <div class="mt-6 text-3xl">❤️</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'featured':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%); color: white">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-6xl mb-6">💝</div>
                            <h2 class="text-4xl font-black mb-8">${data.title || 'Dedicated To'}</h2>

                            ${data.photo ? `
                                <div class="mb-8">
                                    <img src="${data.photo}" alt="Tribute" class="w-40 h-40 rounded-full object-cover mx-auto shadow-2xl border-4 border-white">
                                </div>
                            ` : ''}

                            ${data.dedicatedTo ? `
                                <div class="mb-8">
                                    <div class="inline-block px-8 py-4 bg-white rounded-full font-bold text-xl shadow-xl" style="color: ${accent}">
                                        ${data.dedicatedTo}
                                    </div>
                                </div>
                            ` : ''}

                            ${data.message ? `
                                <div class="mb-8 bg-white bg-opacity-10 backdrop-blur rounded-2xl p-8">
                                    <p class="text-xl leading-relaxed italic">
                                        "${data.message}"
                                    </p>
                                </div>
                            ` : ''}

                            ${data.quote ? `
                                <div class="text-sm opacity-90 italic max-w-xl mx-auto">
                                    "${data.quote}"
                                </div>
                            ` : ''}

                            <div class="mt-8 text-4xl">❤️</div>
                        </div>
                    </div>
                `;

            case 'minimal':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-2xl mx-auto">
                            <div class="text-center mb-8">
                                <div class="text-4xl mb-3">💝</div>
                                <h2 class="text-2xl font-bold">${data.title || 'Dedicated To'}</h2>
                            </div>

                            <div class="border-l-4 pl-8 py-6 bg-white rounded-r-xl" style="border-color: ${accent}">
                                ${data.photo ? `
                                    <div class="mb-6">
                                        <img src="${data.photo}" alt="Tribute" class="w-24 h-24 rounded-full object-cover border-2" style="border-color: ${accent}">
                                    </div>
                                ` : ''}

                                ${data.dedicatedTo ? `
                                    <div class="mb-6">
                                        <div class="font-bold text-xl" style="color: ${accent}">
                                            ${data.dedicatedTo}
                                        </div>
                                    </div>
                                ` : ''}

                                ${data.message ? `
                                    <div class="mb-6">
                                        <p class="text-gray-700 leading-relaxed">
                                            ${data.message}
                                        </p>
                                    </div>
                                ` : ''}

                                ${data.quote ? `
                                    <div class="pt-4 border-t border-gray-200">
                                        <p class="text-gray-600 text-sm italic">"${data.quote}"</p>
                                    </div>
                                ` : ''}

                                <div class="mt-4 text-2xl">❤️</div>
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-5xl mb-4">💝</div>
                            <h2 class="text-2xl font-bold mb-8">${data.title || 'Dedicated To'}</h2>

                            <div class="bg-white rounded-2xl p-8 shadow-lg">
                                ${data.photo ? `
                                    <div class="mb-6">
                                        <img src="${data.photo}" alt="Tribute" class="w-32 h-32 rounded-full object-cover mx-auto border-4" style="border-color: ${accent}20">
                                    </div>
                                ` : ''}

                                ${data.dedicatedTo ? `
                                    <div class="mb-6">
                                        <div class="inline-block px-6 py-3 text-white rounded-full font-bold text-lg" style="background: ${accent}">
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
                                        <div class="text-3xl mb-2" style="color: ${accent}40">"</div>
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
    }
};
