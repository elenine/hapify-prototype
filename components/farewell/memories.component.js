// Memories Together Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.memories = {
                name: '💭 Memories Together',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Memories Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shared Memories (one per line)</label>
                            <textarea placeholder="Office pranks and inside jokes&#10;Late-night project sessions&#10;Team lunches and celebrations&#10;Memorable conference trips" rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="memories" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => `
                    <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                        <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Memories Together'}</h2>
                        <div class="max-w-md mx-auto space-y-4">
                            ${data.memories ? data.memories.split('\n').filter(m => m.trim()).map(memory => `
                                <div class="p-4 bg-violet-50 rounded-lg">
                                    <div class="flex items-start gap-3">
                                        <div class="text-violet-600 text-xl">💭</div>
                                        <p class="text-gray-700">${memory}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add shared memories</p>'}
                        </div>
                    </div>
                `
            };
