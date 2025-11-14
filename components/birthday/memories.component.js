// Memories/Story Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memories = {
    name: '💭 Memories',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Special Memories" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="A journey through the years" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Memory/Story</label>
                <textarea placeholder="Share special memories, milestones, and favorite moments...&#10;&#10;From the first day we met to all the adventures we've shared, every moment has been special.&#10;&#10;This year marks another amazing chapter!" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Featured Photo (Optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📷</div>
                    <div class="text-sm text-gray-600">Click to upload a photo</div>
                    <input type="file" class="hidden section-data" data-field="photo" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="memoryStyle" oninput="updatePreview()">
                    <option value="centered">Centered</option>
                    <option value="card">Card Style</option>
                    <option value="timeline">Timeline Style</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const memoryStyle = style.memoryStyle || 'centered';
        const hasPhoto = data.photo && data.photo !== '';

        if (memoryStyle === 'timeline') {
            return `
                <div class="py-16 px-6" style="background: ${style.bg || '#fef3f2'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <div class="text-6xl mb-4">💭</div>
                            <h2 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Special Memories'}</h2>
                            ${data.subtitle ? `<p class="text-lg text-gray-600">${data.subtitle}</p>` : ''}
                        </div>
                        <div class="relative pl-8 border-l-4 border-pink-300">
                            <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-pink-500"></div>
                            ${hasPhoto ? `
                                <div class="mb-8">
                                    <img src="${data.photo}" alt="Memory" class="w-full rounded-xl shadow-lg" />
                                </div>
                            ` : ''}
                            <div class="bg-white rounded-xl p-8 shadow-md">
                                <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">${data.story || 'Share your memories here...'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (memoryStyle === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fef3f2'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                            ${hasPhoto ? `
                                <div class="h-64 overflow-hidden">
                                    <img src="${data.photo}" alt="Memory" class="w-full h-full object-cover" />
                                </div>
                            ` : ''}
                            <div class="p-10">
                                <div class="text-center mb-8">
                                    <div class="text-5xl mb-4">💭</div>
                                    <h3 class="text-3xl font-bold text-gray-900">${data.title || 'Special Memories'}</h3>
                                    ${data.subtitle ? `<p class="text-lg text-gray-600 mt-2">${data.subtitle}</p>` : ''}
                                </div>
                                <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">${data.story || 'Share your memories here...'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background: ${style.bg || '#fef3f2'}">
                <div class="max-w-3xl mx-auto text-center">
                    <div class="text-6xl mb-4">💭</div>
                    <h3 class="text-4xl font-bold mb-3" style="background: linear-gradient(to right, #ec4899, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title || 'Special Memories'}</h3>
                    ${data.subtitle ? `<p class="text-xl text-gray-600 mb-8">${data.subtitle}</p>` : ''}
                    ${hasPhoto ? `
                        <div class="mb-10">
                            <img src="${data.photo}" alt="Memory" class="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl" />
                        </div>
                    ` : ''}
                    <div class="bg-white rounded-xl p-8 shadow-md">
                        <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">${data.story || 'Share your memories here...'}</div>
                    </div>
                </div>
            </div>
        `;
    }
};
