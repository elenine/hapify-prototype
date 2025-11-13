// Features Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.features = {
                name: '✨ Features',
                allowMultiple: false,
                info: (sectionId) => `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Why Choose Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div class="border-t pt-4 mt-4">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-medium text-gray-700">Features</h4>
                                <button onclick="addDynamicItem('${sectionId}', 'features', (id, num) => \`
                                    <div class='flex justify-between items-center mb-3'>
                                        <h5 class='font-medium text-gray-600'>Feature \${num}</h5>
                                        <button onclick='removeDynamicItem(this)' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
                                    </div>
                                    <div class='space-y-3'>
                                        <input type='text' placeholder='Icon (emoji)' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-icon-\${id}' oninput='updatePreview()'>
                                        <input type='text' placeholder='Feature Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-title-\${id}' oninput='updatePreview()'>
                                        <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='feature-desc-\${id}' oninput='updatePreview()'></textarea>
                                    </div>
                                \`); return false;" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Feature</button>
                            </div>
                            <div data-items-container="features"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                                <option value="bordered">Bordered</option>
                                <option value="shadow" selected>Shadow</option>
                                <option value="filled">Filled</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const features = [];
                    Object.keys(data).forEach(key => {
                        const match = key.match(/^feature-icon-(.+)$/);
                        if (match) {
                            const id = match[1];
                            features.push({
                                icon: data[`feature-icon-${id}`],
                                title: data[`feature-title-${id}`],
                                desc: data[`feature-desc-${id}`]
                            });
                        }
                    });

                    const cardStyle = style.cardStyle || 'shadow';
                    const cardClasses = {
                        bordered: 'border-2 border-gray-200',
                        shadow: 'shadow-md hover:shadow-lg',
                        filled: 'bg-blue-50 border border-blue-100'
                    };

                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Why Choose Us'}</h2>
                            <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                                ${features.map(feature => `
                                    <div class="bg-white rounded-xl p-6 ${cardClasses[cardStyle]} transition">
                                        <div class="text-4xl mb-3">${feature.icon || '✨'}</div>
                                        <h3 class="text-lg font-bold mb-2">${feature.title}</h3>
                                        ${feature.desc ? `<p class="text-sm text-gray-600">${feature.desc}</p>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            };
