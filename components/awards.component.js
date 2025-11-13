// Awards Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.awards = {
                name: '🏆 Awards',
                allowMultiple: false,
                info: (sectionId) => `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Awards & Recognition" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div class="border-t pt-4 mt-4">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-medium text-gray-700">Awards</h4>
                                <button onclick="addDynamicItem('${sectionId}', 'awards', (id, num) => \`
                                    <div class='flex justify-between items-center mb-3'>
                                        <h5 class='font-medium text-gray-600'>Award \${num}</h5>
                                        <button onclick='removeDynamicItem(this)' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
                                    </div>
                                    <div class='space-y-3'>
                                        <input type='text' placeholder='Award Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-name-\${id}' oninput='updatePreview()'>
                                        <input type='text' placeholder='Year' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-year-\${id}' oninput='updatePreview()'>
                                        <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-desc-\${id}' oninput='updatePreview()'></textarea>
                                    </div>
                                \`); return false;" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Award</button>
                            </div>
                            <div data-items-container="awards"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const awards = [];
                    Object.keys(data).forEach(key => {
                        const match = key.match(/^award-name-(.+)$/);
                        if (match) {
                            const id = match[1];
                            awards.push({
                                name: data[`award-name-${id}`],
                                year: data[`award-year-${id}`],
                                desc: data[`award-desc-${id}`]
                            });
                        }
                    });

                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#fffbeb'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Awards & Recognition'}</h2>
                            <div class="max-w-4xl mx-auto space-y-6">
                                ${awards.map(award => `
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex items-start gap-4">
                                        <div class="text-5xl">🏆</div>
                                        <div class="flex-1">
                                            <div class="flex items-baseline gap-3 mb-2">
                                                <h3 class="text-lg font-bold">${award.name || 'Award'}</h3>
                                                <span class="text-sm text-amber-600 font-semibold">${award.year || ''}</span>
                                            </div>
                                            ${award.desc ? `<p class="text-sm text-gray-600">${award.desc}</p>` : ''}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            };
