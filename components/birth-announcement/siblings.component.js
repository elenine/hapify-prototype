// Siblings Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.siblings = {
    name: '👨‍👩‍👧‍👦 Proud Siblings',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Big Brother/Sister" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="title" value="Proud Siblings" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="Meet the new big brother/sister(s)!" rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Sibling 1</h4>
                <input type="text" placeholder="Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling1name" oninput="updatePreview()">
                <input type="text" placeholder="Age (e.g., 3 years old)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling1age" oninput="updatePreview()">
                <textarea placeholder="Reaction or message..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling1reaction" oninput="updatePreview()"></textarea>
                <input type="file" accept="image/*" onchange="handleImageUpload(this)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="sibling1photo">
                <p class="text-xs text-gray-500 mt-1">Upload sibling photo</p>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Sibling 2 (Optional)</h4>
                <input type="text" placeholder="Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling2name" oninput="updatePreview()">
                <input type="text" placeholder="Age (e.g., 5 years old)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling2age" oninput="updatePreview()">
                <textarea placeholder="Reaction or message..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling2reaction" oninput="updatePreview()"></textarea>
                <input type="file" accept="image/*" onchange="handleImageUpload(this)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="sibling2photo">
                <p class="text-xs text-gray-500 mt-1">Upload sibling photo</p>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Sibling 3 (Optional)</h4>
                <input type="text" placeholder="Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling3name" oninput="updatePreview()">
                <input type="text" placeholder="Age (e.g., 7 years old)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling3age" oninput="updatePreview()">
                <textarea placeholder="Reaction or message..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data mb-2" data-field="sibling3reaction" oninput="updatePreview()"></textarea>
                <input type="file" accept="image/*" onchange="handleImageUpload(this)" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="sibling3photo">
                <p class="text-xs text-gray-500 mt-1">Upload sibling photo</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bg || '#f0fdfa';
        const cardBg = style.cardBg || '#ffffff';

        const siblings = [];
        if (data.sibling1name) {
            siblings.push({
                name: data.sibling1name,
                age: data.sibling1age,
                reaction: data.sibling1reaction,
                photo: data.sibling1photo
            });
        }
        if (data.sibling2name) {
            siblings.push({
                name: data.sibling2name,
                age: data.sibling2age,
                reaction: data.sibling2reaction,
                photo: data.sibling2photo
            });
        }
        if (data.sibling3name) {
            siblings.push({
                name: data.sibling3name,
                age: data.sibling3age,
                reaction: data.sibling3reaction,
                photo: data.sibling3photo
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-6xl mb-3">👨‍👩‍👧‍👦</div>
                        <h2 class="text-2xl font-bold mb-2">${data.title || 'Proud Siblings'}</h2>
                        ${data.intro ? `<p class="text-gray-600">${data.intro}</p>` : ''}
                    </div>

                    ${siblings.length > 0 ? `
                        <div class="grid md:grid-cols-${siblings.length === 1 ? '1' : siblings.length === 2 ? '2' : '3'} gap-6">
                            ${siblings.map(sibling => `
                                <div class="rounded-xl overflow-hidden shadow-lg" style="background: ${cardBg};">
                                    ${sibling.photo ? `
                                        <div class="w-full h-48 bg-gray-200 overflow-hidden">
                                            <img src="${sibling.photo}" alt="${sibling.name}" class="w-full h-full object-cover">
                                        </div>
                                    ` : `
                                        <div class="w-full h-48 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                                            <div class="text-6xl">👶</div>
                                        </div>
                                    `}
                                    <div class="p-6">
                                        <h3 class="font-bold text-xl mb-1 text-teal-700">${sibling.name}</h3>
                                        ${sibling.age ? `
                                            <p class="text-sm text-gray-600 mb-3">${sibling.age}</p>
                                        ` : ''}
                                        ${sibling.reaction ? `
                                            <div class="bg-teal-50 rounded-lg p-3 mt-3">
                                                <p class="text-sm text-gray-700 italic">"${sibling.reaction}"</p>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="text-center text-gray-500 py-8">Add sibling information to display here</p>
                    `}
                </div>
            </div>
        `;
    }
};
