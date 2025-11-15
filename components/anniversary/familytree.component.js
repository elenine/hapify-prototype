// Family Tree Component for Anniversary

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.familytree = {
    name: '🌳 Our Family',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Family" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="title" value="Our Family" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Our family has grown over the years..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Children</h4>
                <textarea placeholder="• Sarah (28) - Doctor&#10;• Michael (25) - Engineer&#10;• Emma (22) - Teacher" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="children" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Grandchildren</h4>
                <textarea placeholder="• Olivia (5)&#10;• Ethan (3)&#10;• Ava (1)" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="grandchildren" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Family Story</h4>
                <textarea placeholder="From the two of us to a family of..." rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="familyStory" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Family Photo</h4>
                <input type="file" accept="image/*" onchange="handleImageUpload(this)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data" data-field="familyPhoto">
                <p class="text-xs text-gray-500 mt-1">Upload a family photo</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff1f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const bgColor = style.bg || '#fff1f2';
        const cardBg = style.cardBg || '#ffffff';

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-3">🌳</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Our Family'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${data.familyPhoto ? `
                        <div class="mb-8">
                            <div class="rounded-2xl overflow-hidden shadow-xl">
                                <img src="${data.familyPhoto}" alt="Family" class="w-full h-auto">
                            </div>
                        </div>
                    ` : ''}

                    <div class="space-y-6">
                        ${data.children ? `
                            <div class="p-6 rounded-xl shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="text-3xl">👨‍👩‍👧‍👦</div>
                                    <h3 class="font-bold text-xl text-red-700">Our Children</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap">${data.children}</div>
                            </div>
                        ` : ''}

                        ${data.grandchildren ? `
                            <div class="p-6 rounded-xl shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="text-3xl">👶</div>
                                    <h3 class="font-bold text-xl text-red-700">Our Grandchildren</h3>
                                </div>
                                <div class="text-gray-700 whitespace-pre-wrap">${data.grandchildren}</div>
                            </div>
                        ` : ''}

                        ${data.familyStory ? `
                            <div class="p-6 rounded-xl shadow-md" style="background: ${cardBg};">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="text-3xl">❤️</div>
                                    <h3 class="font-bold text-xl text-red-700">Our Family Story</h3>
                                </div>
                                <p class="text-gray-700 leading-relaxed">${data.familyStory}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};
