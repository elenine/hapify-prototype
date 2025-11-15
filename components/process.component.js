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
                                <button onclick="addDynamicItem('${sectionId}', 'steps'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Step</button>
                            </div>
                            <div data-items-container="steps"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="vertical">Vertical Timeline</option>
                                <option value="cards">Card Grid</option>
                                <option value="horizontal">Horizontal Steps</option>
                                <option value="numbered">Numbered List</option>
                                <option value="modern">Modern Timeline</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'vertical';
                    const bgColor = style.bg || '#f0f9ff';
                    const accentColor = style.accent || '#3b82f6';
                    const title = data.title || 'Our Process';

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

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    if (steps.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                ${headerHtml}
                                <div class="text-center text-gray-500 text-sm">Add process steps to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'vertical':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${steps.map((step, idx) => `
                                            <div class="flex gap-4">
                                                <div class="flex flex-col items-center">
                                                    <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white" style="background: ${accentColor};">${idx + 1}</div>
                                                    ${idx < steps.length - 1 ? `<div class="w-0.5 flex-1 my-2" style="background: ${accentColor}40;"></div>` : ''}
                                                </div>
                                                <div class="flex-1 pb-6">
                                                    <h3 class="text-base font-bold mb-2">${step.title || 'Step'}</h3>
                                                    ${step.desc ? `<p class="text-xs text-gray-600">${step.desc}</p>` : ''}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-3">
                                        ${steps.map((step, idx) => `
                                            <div class="bg-white rounded-xl p-4 shadow-md border-t-4" style="border-color: ${accentColor};">
                                                <div class="flex items-center gap-2 mb-2">
                                                    <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style="background: ${accentColor};">${idx + 1}</div>
                                                    <h3 class="text-sm font-bold">${step.title || 'Step'}</h3>
                                                </div>
                                                ${step.desc ? `<p class="text-xs text-gray-600">${step.desc}</p>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'horizontal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="flex items-center justify-between mb-6">
                                            ${steps.map((_, idx) => `
                                                <div class="flex-1 flex items-center">
                                                    <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style="background: ${accentColor};">${idx + 1}</div>
                                                    ${idx < steps.length - 1 ? `<div class="flex-1 h-0.5 mx-2" style="background: ${accentColor}40;"></div>` : ''}
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="space-y-4">
                                            ${steps.map((step, idx) => `
                                                <div class="bg-white rounded-xl p-4 shadow-sm border-l-4" style="border-color: ${accentColor};">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <span class="font-bold text-xs" style="color: ${accentColor};">Step ${idx + 1}:</span>
                                                        <h3 class="text-sm font-bold">${step.title || 'Step'}</h3>
                                                    </div>
                                                    ${step.desc ? `<p class="text-xs text-gray-600">${step.desc}</p>` : ''}
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'numbered':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${steps.map((step, idx) => `
                                            <div class="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style="background: ${accentColor};">
                                                    ${idx + 1}
                                                </div>
                                                <div class="flex-1">
                                                    <h3 class="text-sm font-bold mb-1">${step.title || 'Step'}</h3>
                                                    ${step.desc ? `<p class="text-xs text-gray-600">${step.desc}</p>` : ''}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'modern':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${steps.map((step, idx) => `
                                            <div class="relative">
                                                <div class="rounded-2xl p-5 shadow-lg" style="background: linear-gradient(135deg, ${accentColor}15, ${accentColor}25);">
                                                    <div class="flex items-start gap-4">
                                                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-md" style="background: ${accentColor};">
                                                            ${idx + 1}
                                                        </div>
                                                        <div class="flex-1">
                                                            <h3 class="text-base font-bold mb-2" style="color: ${accentColor};">${step.title || 'Step'}</h3>
                                                            ${step.desc ? `<p class="text-xs text-gray-700">${step.desc}</p>` : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                                ${idx < steps.length - 1 ? `
                                                    <div class="flex justify-center my-2">
                                                        <div class="w-0.5 h-4" style="background: ${accentColor}40;"></div>
                                                    </div>
                                                ` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${steps.map((step, idx) => `
                                            <div class="flex gap-4">
                                                <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style="background: ${accentColor};">${idx + 1}</div>
                                                <div class="flex-1">
                                                    <h3 class="text-base font-bold mb-2">${step.title || 'Step'}</h3>
                                                    ${step.desc ? `<p class="text-xs text-gray-600">${step.desc}</p>` : ''}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
