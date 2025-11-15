// Timeline Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['timeline'] = {
    name: '⏰ Relationship Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestones</label>
                <div data-items-container="timeline">
                    <!-- Dynamic milestone items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'timeline')" class="mt-3 w-full py-2 px-4 border-2 border-dashed border-rose-300 rounded-lg text-rose-600 hover:bg-rose-50 transition">
                    + Add Milestone
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="zigzag">Zigzag Path</option>
                    <option value="cards">Timeline Cards</option>
                    <option value="dots">Dot Connection</option>
                    <option value="modern">Modern Blocks</option>
                    <option value="romantic">Romantic Hearts</option>
                    <option value="roadmap">Love Roadmap</option>
                    <option value="storybook">Storybook Pages</option>
                    <option value="polaroid-timeline">Polaroid Timeline</option>
                    <option value="metro">Metro Line</option>
                    <option value="ribbon-flow">Ribbon Flow</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="iconStyle" onchange="updatePreview()">
                    <option value="dots">Dots</option>
                    <option value="hearts">Hearts</option>
                    <option value="numbers">Numbers</option>
                    <option value="stars">Stars</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const milestones = [];
        const container = document.querySelector(`[data-type="timeline"] [data-items-container="timeline"]`);
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const date = item.querySelector('[data-field="date"]')?.value || '';
                const title = item.querySelector('[data-field="title"]')?.value || '';
                const description = item.querySelector('[data-field="description"]')?.value || '';
                if (date || title) {
                    milestones.push({ date, title, description });
                }
            });
        }

        const layout = style.layout || 'vertical';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accentColor || '#f43f5e';
        const iconStyle = style.iconStyle || 'dots';

        // Helper to get icon based on style
        const getIcon = (index) => {
            if (iconStyle === 'hearts') return '💕';
            if (iconStyle === 'numbers') return index + 1;
            if (iconStyle === 'stars') return '⭐';
            return '•';
        };

        if (milestones.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">${data.title || 'Our Journey Together'}</h2>
                    <div class="max-w-3xl mx-auto text-center py-8 text-gray-500">
                        <p>Add milestones to show your journey together</p>
                    </div>
                </div>
            `;
        }

        let timelineHTML = '';

        if (layout === 'vertical') {
            timelineHTML = milestones.map((milestone, index) => `
                <div class="relative pl-8 pb-8 ${index === milestones.length - 1 ? '' : 'border-l-2'}" style="border-color: ${accentColor}">
                    <div class="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background: ${accentColor}">${getIcon(index)}</div>
                    <div class="bg-rose-50 rounded-lg p-6">
                        <div class="text-sm font-semibold mb-2" style="color: ${accentColor}">${milestone.date}</div>
                        <h3 class="text-xl font-bold mb-2 text-gray-900">${milestone.title}</h3>
                        <p class="text-gray-700">${milestone.description}</p>
                    </div>
                </div>
            `).join('');
        } else if (layout === 'zigzag') {
            timelineHTML = milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return `
                    <div class="flex items-center mb-8 ${isLeft ? '' : 'flex-row-reverse'}">
                        <div class="flex-1 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}">
                            <div class="bg-white rounded-xl p-6 shadow-lg border-t-4" style="border-color: ${accentColor};">
                                <div class="text-sm font-semibold mb-2" style="color: ${accentColor}">${milestone.date}</div>
                                <h3 class="text-xl font-bold mb-2 text-gray-900">${milestone.title}</h3>
                                <p class="text-gray-700">${milestone.description}</p>
                            </div>
                        </div>
                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                            ${getIcon(index)}
                        </div>
                        <div class="flex-1"></div>
                    </div>
                `;
            }).join('');
        } else if (layout === 'cards') {
            timelineHTML = milestones.map((milestone, index) => `
                <div class="mb-6">
                    <div class="bg-gradient-to-r from-white to-rose-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                        <div class="flex items-start gap-4">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); box-shadow: 0 4px 12px ${accentColor}40;">
                                ${getIcon(index)}
                            </div>
                            <div class="flex-1">
                                <div class="text-sm font-bold mb-2 tracking-wide" style="color: ${accentColor}">${milestone.date}</div>
                                <h3 class="text-2xl font-bold mb-3 text-gray-900">${milestone.title}</h3>
                                <p class="text-gray-700 leading-relaxed">${milestone.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        } else if (layout === 'dots') {
            timelineHTML = `
                <div class="relative">
                    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5" style="background: ${accentColor}40;"></div>
                    ${milestones.map((milestone, index) => `
                        <div class="relative flex items-center mb-12">
                            <div class="flex-1 ${index % 2 === 0 ? 'pr-12 text-right' : 'order-3 pl-12 text-left'}">
                                <div class="inline-block bg-white rounded-xl p-6 shadow-lg">
                                    <div class="text-sm font-semibold mb-2" style="color: ${accentColor}">${milestone.date}</div>
                                    <h3 class="text-xl font-bold mb-2 text-gray-900">${milestone.title}</h3>
                                    <p class="text-gray-600">${milestone.description}</p>
                                </div>
                            </div>
                            <div class="w-6 h-6 rounded-full border-4 border-white z-10 flex-shrink-0 ${index % 2 === 0 ? 'order-2' : 'order-2'}" style="background: ${accentColor}; box-shadow: 0 0 0 4px ${accentColor}40;"></div>
                            <div class="flex-1"></div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'modern') {
            timelineHTML = milestones.map((milestone, index) => `
                <div class="mb-8 transform hover:scale-105 transition">
                    <div class="rounded-2xl overflow-hidden shadow-xl">
                        <div class="h-3" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                        <div class="bg-white p-8">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-14 h-14 rounded-lg flex items-center justify-center text-white text-xl font-bold" style="background: ${accentColor};">
                                    ${getIcon(index)}
                                </div>
                                <div class="text-lg font-bold" style="color: ${accentColor}">${milestone.date}</div>
                            </div>
                            <h3 class="text-2xl font-bold mb-3 text-gray-900">${milestone.title}</h3>
                            <p class="text-gray-700 leading-relaxed">${milestone.description}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        } else if (layout === 'romantic') {
            timelineHTML = milestones.map((milestone, index) => `
                <div class="mb-8 relative">
                    <div class="flex items-start gap-6">
                        <div class="relative">
                            <div class="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40);">
                                ${iconStyle === 'hearts' ? '💕' : '💝'}
                            </div>
                            ${index < milestones.length - 1 ? `<div class="absolute left-1/2 top-20 w-1 h-8 transform -translate-x-1/2" style="background: ${accentColor}30;"></div>` : ''}
                        </div>
                        <div class="flex-1 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 shadow-md">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-2xl">💕</span>
                                <div class="text-sm font-bold" style="color: ${accentColor}">${milestone.date}</div>
                            </div>
                            <h3 class="text-xl font-bold mb-2" style="color: ${accentColor}">${milestone.title}</h3>
                            <p class="text-gray-700">${milestone.description}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        } else if (layout === 'roadmap') {
            timelineHTML = `
                <div class="relative">
                    <!-- Road path -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-24 h-full" style="background: repeating-linear-gradient(to bottom, ${accentColor}40 0px, ${accentColor}40 20px, transparent 20px, transparent 40px); border-left: 3px solid ${accentColor}; border-right: 3px solid ${accentColor};"></div>
                    ${milestones.map((milestone, index) => `
                        <div class="relative mb-16 ${index % 2 === 0 ? 'text-right pr-32' : 'text-left pl-32'}">
                            <div class="inline-block bg-white rounded-2xl p-6 shadow-xl max-w-md">
                                <div class="flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style="background: ${accentColor};">
                                        🚗
                                    </div>
                                    <div class="text-sm font-bold" style="color: ${accentColor}">${milestone.date}</div>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-gray-900">${milestone.title}</h3>
                                <p class="text-gray-700">${milestone.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'storybook') {
            timelineHTML = milestones.map((milestone, index) => `
                <div class="mb-12">
                    <div class="bg-white rounded-lg shadow-2xl overflow-hidden" style="border: 8px solid ${accentColor}20;">
                        <div class="grid md:grid-cols-2">
                            <div class="p-8 flex items-center justify-center" style="background: linear-gradient(135deg, ${accentColor}10, ${accentColor}20);">
                                <div class="text-center">
                                    <div class="text-6xl mb-4">📖</div>
                                    <div class="text-sm font-bold tracking-widest mb-2" style="color: ${accentColor};">CHAPTER ${index + 1}</div>
                                    <div class="text-lg font-bold" style="color: ${accentColor}">${milestone.date}</div>
                                </div>
                            </div>
                            <div class="p-8">
                                <h3 class="text-2xl font-serif font-bold mb-4" style="color: ${accentColor}; font-family: Georgia, serif;">
                                    ${milestone.title}
                                </h3>
                                <p class="text-gray-700 leading-relaxed" style="font-family: Georgia, serif;">
                                    ${milestone.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        } else if (layout === 'polaroid-timeline') {
            timelineHTML = milestones.map((milestone, index) => {
                const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 2);
                return `
                    <div class="mb-8 transform hover:scale-105 transition" style="transform: rotate(${rotation}deg);">
                        <div class="bg-white p-4 shadow-2xl inline-block">
                            <div class="h-48 flex items-center justify-center mb-3" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}10);">
                                <div class="text-center">
                                    <div class="text-5xl mb-2">💕</div>
                                    <div class="text-sm font-bold" style="color: ${accentColor}">${milestone.date}</div>
                                </div>
                            </div>
                            <div class="text-center" style="font-family: 'Comic Sans MS', cursive;">
                                <h3 class="text-lg font-bold mb-2" style="color: ${accentColor};">${milestone.title}</h3>
                                <p class="text-sm text-gray-700">${milestone.description.substring(0, 60)}${milestone.description.length > 60 ? '...' : ''}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            timelineHTML = `<div class="flex flex-wrap justify-center gap-6">${timelineHTML}</div>`;
        } else if (layout === 'metro') {
            timelineHTML = `
                <div class="relative">
                    <!-- Metro line -->
                    <div class="absolute left-12 top-0 w-2 h-full rounded-full" style="background: linear-gradient(to bottom, ${accentColor}, ${accentColor}dd);"></div>
                    ${milestones.map((milestone, index) => `
                        <div class="relative flex items-start gap-6 mb-8">
                            <div class="relative z-10">
                                <div class="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl" style="background: ${accentColor}; border: 6px solid white;">
                                    ${index + 1}
                                </div>
                            </div>
                            <div class="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition" style="margin-top: 16px;">
                                <div class="flex items-center gap-2 mb-3">
                                    <div class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: ${accentColor};">
                                        ${milestone.date}
                                    </div>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-gray-900">${milestone.title}</h3>
                                <p class="text-gray-700">${milestone.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'ribbon-flow') {
            timelineHTML = milestones.map((milestone, index) => `
                <div class="relative mb-12 ${index % 2 === 0 ? 'ml-0' : 'ml-8'}">
                    <div class="relative inline-block w-full max-w-lg">
                        <!-- Ribbon -->
                        <div class="py-4 px-6 relative" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); color: white; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                            <div class="flex items-center gap-4">
                                <div class="text-3xl">💕</div>
                                <div>
                                    <div class="text-sm font-bold opacity-90">${milestone.date}</div>
                                    <h3 class="text-xl font-bold">${milestone.title}</h3>
                                </div>
                            </div>
                            <!-- Ribbon tail -->
                            <div class="absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} top-1/2 transform -translate-y-1/2 w-0 h-0" style="border-style: solid; border-width: 20px ${index % 2 === 0 ? '0 20px 20px' : '20px 20px 0'}; border-color: ${index % 2 === 0 ? `transparent transparent ${accentColor}dd transparent` : `${accentColor}dd transparent transparent transparent`};"></div>
                        </div>
                        <div class="bg-white rounded-b-xl p-6 shadow-lg">
                            <p class="text-gray-700">${milestone.description}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="text-center mb-12">
                    <div class="text-5xl mb-4">⏰</div>
                    <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Journey Together'}</h2>
                </div>
                <div class="max-w-3xl mx-auto">
                    ${timelineHTML}
                </div>
            </div>
        `;
    }
};
