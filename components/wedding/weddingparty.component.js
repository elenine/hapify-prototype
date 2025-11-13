// Wedding Party Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.weddingparty = {
    name: '👥 Wedding Party',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Our Wedding Party" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Our Wedding Party" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Maid of Honor</h4>
                <div class="space-y-3">
                    <input type="text" placeholder="Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="moh" oninput="updatePreview()">
                    <textarea placeholder="Relationship/Description" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="mohDesc" oninput="updatePreview()"></textarea>
                </div>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Best Man</h4>
                <div class="space-y-3">
                    <input type="text" placeholder="Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bestman" oninput="updatePreview()">
                    <textarea placeholder="Relationship/Description" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bestmanDesc" oninput="updatePreview()"></textarea>
                </div>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Bridesmaids</h4>
                <textarea placeholder="Enter names, one per line" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="bridesmaids" oninput="updatePreview()"></textarea>
            </div>

            <div class="border-t pt-4">
                <h4 class="font-medium text-gray-900 mb-3">Groomsmen</h4>
                <textarea placeholder="Enter names, one per line" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="groomsmen" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fdf4ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" oninput="updatePreview()">
                    <option value="grid">Grid</option>
                    <option value="list">List</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const bridesmaids = data.bridesmaids ? data.bridesmaids.split('\n').filter(n => n.trim()) : [];
        const groomsmen = data.groomsmen ? data.groomsmen.split('\n').filter(n => n.trim()) : [];
        const layout = style.layout || 'grid';

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fdf4ff'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-3">👥</div>
                        <h2 class="text-3xl font-bold">${data.title || 'Our Wedding Party'}</h2>
                    </div>

                    <div class="${layout === 'grid' ? 'grid md:grid-cols-2 gap-8' : 'space-y-8'}">
                        ${data.moh || data.bestman ? `
                            <div class="${layout === 'grid' ? '' : 'text-center'}">
                                ${data.moh ? `
                                    <div class="mb-8">
                                        <h3 class="text-xl font-bold text-pink-600 mb-2">Maid of Honor</h3>
                                        <p class="font-semibold text-lg">${data.moh}</p>
                                        ${data.mohDesc ? `<p class="text-gray-600 text-sm mt-1">${data.mohDesc}</p>` : ''}
                                    </div>
                                ` : ''}

                                ${bridesmaids.length > 0 ? `
                                    <div>
                                        <h3 class="text-lg font-bold text-pink-500 mb-3">Bridesmaids</h3>
                                        <div class="space-y-2">
                                            ${bridesmaids.map(name => `
                                                <p class="text-gray-700">${name.trim()}</p>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>

                            <div class="${layout === 'grid' ? '' : 'text-center'}">
                                ${data.bestman ? `
                                    <div class="mb-8">
                                        <h3 class="text-xl font-bold text-blue-600 mb-2">Best Man</h3>
                                        <p class="font-semibold text-lg">${data.bestman}</p>
                                        ${data.bestmanDesc ? `<p class="text-gray-600 text-sm mt-1">${data.bestmanDesc}</p>` : ''}
                                    </div>
                                ` : ''}

                                ${groomsmen.length > 0 ? `
                                    <div>
                                        <h3 class="text-lg font-bold text-blue-500 mb-3">Groomsmen</h3>
                                        <div class="space-y-2">
                                            ${groomsmen.map(name => `
                                                <p class="text-gray-700">${name.trim()}</p>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        ` : '<p class="text-center text-gray-500 col-span-2">Add wedding party members to display them here</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
