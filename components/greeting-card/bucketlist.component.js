// Bucket List Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.bucketlist = {
    name: '📝 Bucket List',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Goals for the Year Ahead" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bucket List Items</label>
                <p class="text-xs text-gray-500 mb-2">Add wishes and goals for the coming year</p>
                <div data-items-container="bucketlist" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'bucketlist')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Goal
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="checklist">Checklist - Classic</option>
                    <option value="cards">Card Grid - Modern</option>
                    <option value="numbered">Numbered List - Formal</option>
                    <option value="minimal">Minimal - Clean</option>
                    <option value="badges">Badge Style - Fun</option>
                    <option value="timeline">Timeline View - Inspiring</option>
                    <option value="colorwave">Color Wave - Rainbow gradient checkboxes</option>
                    <option value="progress">Progress Track - Completion indicator style</option>
                    <option value="pyramid">Pyramid Stack - Triangular arrangement</option>
                    <option value="neon">Neon Glow - Bright illuminated borders</option>
                    <option value="accordion">Accordion Fold - Expandable card look</option>
                    <option value="confetti">Confetti Burst - Scattered celebration style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f0f9ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Checkbox Color</label>
                <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="checkColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Item Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="itemSize" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Checkbox Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="checkboxStyle" onchange="updatePreview()">
                    <option value="square">Square</option>
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm" selected>Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const items = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="bucketlist"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const goalInput = item.querySelector('[data-field="goal"]');
                const goal = goalInput?.value || '';
                if (goal) items.push(goal);
            });
        }

        const layout = style.layout || 'checklist';
        const bgColor = style.bg || '#f0f9ff';
        const cardBg = style.cardBg || '#ffffff';
        const checkColor = style.checkColor || '#3b82f6';
        const textColor = style.text || '#1f2937';
        const title = data.title || 'Goals for the Year Ahead';

        const itemSizes = {
            compact: 'p-3 text-sm',
            medium: 'p-4 text-base',
            large: 'p-6 text-lg'
        };
        const padding = itemSizes[style.itemSize] || itemSizes.medium;

        const checkboxStyles = {
            square: 'rounded-none',
            circle: 'rounded-full',
            rounded: 'rounded-md'
        };
        const checkboxClass = checkboxStyles[style.checkboxStyle] || checkboxStyles.square;

        const shadows = {
            none: 'shadow-none',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg'
        };
        const shadowClass = shadows[style.shadow] || shadows.sm;

        // Checklist Layout
        if (layout === 'checklist') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-3">
                            ${items.length > 0 ? items.map(item => `
                                <div class="flex items-start gap-4 ${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                    <div class="flex-shrink-0 w-6 h-6 border-2 ${checkboxClass}" style="border-color: ${checkColor}"></div>
                                    <p class="flex-1">${item}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Card Grid Layout
        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            ${items.length > 0 ? items.map(item => `
                                <div class="${padding} rounded-xl ${shadowClass} border-t-4" style="background: ${cardBg}; border-color: ${checkColor}">
                                    <div class="flex items-start gap-3">
                                        <div class="w-5 h-5 border-2 ${checkboxClass} flex-shrink-0 mt-1" style="border-color: ${checkColor}"></div>
                                        <p class="flex-1">${item}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Numbered List Layout
        if (layout === 'numbered') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-4">
                            ${items.length > 0 ? items.map((item, index) => `
                                <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                    <div class="flex items-start gap-4">
                                        <div class="flex-shrink-0 w-8 h-8 ${checkboxClass} flex items-center justify-center font-bold text-white" style="background: ${checkColor}">
                                            ${index + 1}
                                        </div>
                                        <p class="flex-1 pt-1">${item}</p>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <h3 class="text-2xl font-bold text-center mb-6">${title}</h3>
                        <div class="space-y-3">
                            ${items.length > 0 ? items.map(item => `
                                <div class="flex items-start gap-3 pb-3 border-b" style="border-color: ${checkColor}22">
                                    <div class="w-4 h-4 border-2 ${checkboxClass} flex-shrink-0 mt-1" style="border-color: ${checkColor}"></div>
                                    <p class="flex-1 text-sm">${item}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Badge Style Layout
        if (layout === 'badges') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="flex flex-wrap justify-center gap-4">
                            ${items.length > 0 ? items.map(item => `
                                <div class="${padding} rounded-full ${shadowClass}" style="background: ${cardBg}; border: 2px solid ${checkColor}">
                                    <div class="flex items-center gap-2">
                                        <div class="w-4 h-4 ${checkboxClass}" style="background: ${checkColor}"></div>
                                        <span class="text-sm">${item}</span>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Timeline View Layout
        if (layout === 'timeline') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="relative">
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${checkColor}"></div>
                            <div class="space-y-6">
                                ${items.length > 0 ? items.map(item => `
                                    <div class="relative pl-20">
                                        <div class="absolute left-6 w-4 h-4 ${checkboxClass} border-2" style="border-color: ${checkColor}; background: ${bgColor}"></div>
                                        <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                            <p>${item}</p>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Color Wave Layout
        if (layout === 'colorwave') {
            const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-4">
                            ${items.length > 0 ? items.map((item, index) => {
                                const color = colors[index % colors.length];
                                return `
                                    <div class="flex items-start gap-4 ${padding} rounded-xl ${shadowClass}" style="background: linear-gradient(135deg, ${color}22, ${cardBg}); border-left: 5px solid ${color}">
                                        <div class="flex-shrink-0 w-7 h-7 border-3 ${checkboxClass}" style="border: 3px solid ${color}; background: ${cardBg}"></div>
                                        <p class="flex-1 font-medium">${item}</p>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Progress Track Layout
        if (layout === 'progress') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-5">
                            ${items.length > 0 ? items.map((item, index) => {
                                const progress = ((index + 1) / items.length) * 100;
                                return `
                                    <div class="${padding} rounded-xl ${shadowClass}" style="background: ${cardBg}; border: 2px solid ${checkColor}22">
                                        <div class="flex items-center gap-4 mb-3">
                                            <div class="flex-shrink-0 w-8 h-8 ${checkboxClass} border-2 flex items-center justify-center font-bold text-xs" style="border-color: ${checkColor}; color: ${checkColor}">
                                                ${index + 1}
                                            </div>
                                            <p class="flex-1">${item}</p>
                                        </div>
                                        <div class="w-full h-2 rounded-full overflow-hidden" style="background: ${bgColor}">
                                            <div class="h-full rounded-full transition-all" style="width: ${progress}%; background: ${checkColor}"></div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Pyramid Stack Layout
        if (layout === 'pyramid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="space-y-3">
                            ${items.length > 0 ? items.map((item, index) => {
                                const width = 100 - (index * 8);
                                return `
                                    <div class="flex justify-center">
                                        <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}; border: 2px solid ${checkColor}; width: ${width}%; min-width: 50%">
                                            <div class="flex items-center gap-3">
                                                <div class="w-6 h-6 border-2 ${checkboxClass}" style="border-color: ${checkColor}"></div>
                                                <p class="flex-1 text-center font-medium">${item}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Neon Glow Layout
        if (layout === 'neon') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-4">
                            ${items.length > 0 ? items.map(item => `
                                <div class="flex items-start gap-4 ${padding} rounded-xl" style="background: ${cardBg}; border: 3px solid ${checkColor}; box-shadow: 0 0 20px ${checkColor}44, inset 0 0 10px ${checkColor}11">
                                    <div class="flex-shrink-0 w-7 h-7 ${checkboxClass}" style="background: ${checkColor}; box-shadow: 0 0 10px ${checkColor}"></div>
                                    <p class="flex-1 font-semibold">${item}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Accordion Fold Layout
        if (layout === 'accordion') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-2">
                            ${items.length > 0 ? items.map((item, index) => `
                                <div class="overflow-hidden rounded-lg ${shadowClass}">
                                    <div class="${padding}" style="background: ${checkColor}">
                                        <div class="flex items-center gap-4">
                                            <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center text-white font-bold text-sm" style="border-color: white; background: transparent">
                                                ${index + 1}
                                            </div>
                                            <p class="flex-1 font-semibold text-white">${item}</p>
                                            <span class="text-white text-xl">✓</span>
                                        </div>
                                    </div>
                                    <div class="h-1" style="background: linear-gradient(90deg, ${checkColor}dd, ${cardBg})"></div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Confetti Burst Layout
        if (layout === 'confetti') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="flex flex-wrap gap-4">
                            ${items.length > 0 ? items.map((item, index) => {
                                const rotations = [-8, 5, -3, 7, -5, 4, -6, 3];
                                const rotation = rotations[index % rotations.length];
                                const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
                                const color = colors[index % colors.length];
                                return `
                                    <div class="flex-grow" style="flex-basis: calc(50% - 1rem); max-width: 100%; transform: rotate(${rotation}deg)">
                                        <div class="${padding} rounded-2xl ${shadowClass}" style="background: ${cardBg}; border: 3px dashed ${color}">
                                            <div class="flex items-start gap-3">
                                                <div class="w-5 h-5 rounded-full" style="background: ${color}"></div>
                                                <p class="flex-1 text-sm font-medium">${item}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<p class="text-center text-gray-500 w-full">Add bucket list items in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-2xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                    <div class="space-y-3">
                        ${items.length > 0 ? items.map(item => `
                            <div class="flex items-start gap-4 ${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                <div class="flex-shrink-0 w-6 h-6 border-2 ${checkboxClass}" style="border-color: ${checkColor}"></div>
                                <p class="flex-1">${item}</p>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500">Add bucket list items in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
