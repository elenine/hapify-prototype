// Process Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.process = {
                name: '🔄 Process',
                allowMultiple: false,
                info: (sectionId) => `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Process" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div class="border-t pt-4 mt-4">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-medium text-gray-700">Steps</h4>
                                <button onclick="addDynamicItem('${sectionId}', 'steps', (id, num) => \`
                                    <div class='flex justify-between items-center mb-3'>
                                        <h5 class='font-medium text-gray-600'>Step \${num}</h5>
                                        <button onclick='removeDynamicItem(this)' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
                                    </div>
                                    <div class='space-y-3'>
                                        <input type='text' placeholder='Step Title' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='step-title-\${id}' oninput='updatePreview()'>
                                        <textarea placeholder='Step description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='step-desc-\${id}' oninput='updatePreview()'></textarea>
                                    </div>
                                \`); return false;" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Step</button>
                            </div>
                            <div data-items-container="steps"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="vertical" selected>Vertical Timeline</option>
                                <option value="cards">Cards</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const steps = [];
                    Object.keys(data).forEach(key => {
                        const match = key.match(/^step-title-(.+)$/);
                        if (match) {
                            const id = match[1];
                            steps.push({
                                title: data[`step-title-${id}`],
                                desc: data[`step-desc-${id}`]
                            });
                        }
                    });

                    const layout = style.layout || 'vertical';

                    if (layout === 'vertical') {
                        return `
                            <div class="py-12 px-6" style="background: ${style.bg || '#f0f9ff'}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Process'}</h2>
                                <div class="max-w-3xl mx-auto space-y-6">
                                    ${steps.map((step, idx) => `
                                        <div class="flex gap-4">
                                            <div class="flex flex-col items-center">
                                                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">${idx + 1}</div>
                                                ${idx < steps.length - 1 ? '<div class="w-0.5 flex-1 bg-blue-300 my-2"></div>' : ''}
                                            </div>
                                            <div class="flex-1 pb-6">
                                                <h3 class="text-lg font-bold mb-2">${step.title}</h3>
                                                ${step.desc ? `<p class="text-sm text-gray-600">${step.desc}</p>` : ''}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    } else {
                        return `
                            <div class="py-12 px-6" style="background: ${style.bg || '#f0f9ff'}">
                                <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Process'}</h2>
                                <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                                    ${steps.map((step, idx) => `
                                        <div class="bg-white rounded-xl p-6 shadow-md">
                                            <div class="flex items-center gap-3 mb-3">
                                                <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">${idx + 1}</div>
                                                <h3 class="text-lg font-bold">${step.title}</h3>
                                            </div>
                                            ${step.desc ? `<p class="text-sm text-gray-600">${step.desc}</p>` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }
                }
            };
