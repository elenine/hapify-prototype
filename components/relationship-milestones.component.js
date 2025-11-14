// Relationship Milestones Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['relationship-milestones'] = {
    name: '🎊 Relationship Milestones',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Milestones" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Our Milestones" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Milestones (Format: Date | Event | Icon, one per line)</label>
                <textarea placeholder="January 15, 2020 | First Met | 👋
March 20, 2020 | First Date | 💕
August 10, 2020 | Said 'I Love You' | 💖
December 25, 2020 | First Christmas | 🎄
February 14, 2021 | First Anniversary | 🎉" rows="10" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="milestones" oninput="updatePreview()"></textarea>
                <p class="text-xs text-gray-500 mt-1">Use emoji for icons (💕, 💍, 🎉, etc.)</p>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="displayStyle" onchange="updatePreview()">
                    <option value="timeline">Timeline</option>
                    <option value="cards">Cards</option>
                    <option value="badges">Badges</option>
                    <option value="roadmap">Roadmap</option>
                    <option value="zigzag">Zigzag Timeline</option>
                    <option value="story">Story Cards</option>
                    <option value="pins">Milestone Pins</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const milestones = (data.milestones || '').split('\n').filter(m => m.trim());
        const displayStyle = style.displayStyle || 'timeline';
        const bgColor = style.bg || '#fef2f2';
        const accentColor = style.accent || '#f43f5e';

        if (milestones.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    <div class="max-w-4xl mx-auto text-center">
                        <div class="text-5xl mb-4">🎊</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Milestones'}</h2>
                        <p class="text-gray-400 mt-4">Add your milestones...</p>
                    </div>
                </div>
            `;
        }

        let milestonesHTML = '';

        if (displayStyle === 'timeline') {
            milestonesHTML = milestones.map(milestone => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="flex gap-4 mb-6">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                ${icon}
                            </div>
                        </div>
                        <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            <div class="text-sm font-semibold mb-1" style="color: ${accentColor}">${date}</div>
                            <div class="text-lg font-bold text-gray-900">${event}</div>
                        </div>
                    </div>
                `;
            }).join('');
        } else if (displayStyle === 'cards') {
            milestonesHTML = milestones.map(milestone => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
                        <div class="text-4xl mb-3">${icon}</div>
                        <div class="text-sm font-semibold mb-2" style="color: ${accentColor}">${date}</div>
                        <div class="text-lg font-bold text-gray-900">${event}</div>
                    </div>
                `;
            }).join('');
            milestonesHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">${milestonesHTML}</div>`;
        } else if (displayStyle === 'badges') {
            milestonesHTML = milestones.map(milestone => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="inline-flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-md m-2">
                        <span class="text-2xl">${icon}</span>
                        <div>
                            <div class="text-xs font-semibold" style="color: ${accentColor}">${date}</div>
                            <div class="text-sm font-bold text-gray-900">${event}</div>
                        </div>
                    </div>
                `;
            }).join('');
            milestonesHTML = `<div class="text-center">${milestonesHTML}</div>`;
        } else if (displayStyle === 'roadmap') {
            milestonesHTML = milestones.map((milestone, i) => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="flex items-start gap-4 mb-8">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); box-shadow: 0 4px 12px ${accentColor}40;">
                                ${icon}
                            </div>
                            ${i < milestones.length - 1 ? `<div class="w-1 h-16 mx-auto mt-2" style="background: ${accentColor}40;"></div>` : ''}
                        </div>
                        <div class="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                            <div class="text-sm font-bold mb-2 tracking-wide" style="color: ${accentColor}">${date}</div>
                            <div class="text-xl font-bold text-gray-900">${event}</div>
                        </div>
                    </div>
                `;
            }).join('');
        } else if (displayStyle === 'zigzag') {
            milestonesHTML = `
                <div class="relative">
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" style="background: ${accentColor}"></div>
                    ${milestones.map((milestone, i) => {
                        const parts = milestone.split('|').map(p => p.trim());
                        const date = parts[0] || '';
                        const event = parts[1] || '';
                        const icon = parts[2] || '💫';
                        const isLeft = i % 2 === 0;

                        return `
                            <div class="relative flex items-center mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}">
                                <div class="flex-1 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}">
                                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                        <div class="text-3xl mb-2">${icon}</div>
                                        <div class="text-sm font-semibold mb-1" style="color: ${accentColor}">${date}</div>
                                        <div class="text-lg font-bold text-gray-900">${event}</div>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 w-4 h-4 rounded-full border-4 z-10" style="border-color: ${accentColor}; background: white;"></div>
                                <div class="flex-1"></div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else if (displayStyle === 'story') {
            milestonesHTML = milestones.map(milestone => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                        <div class="h-2" style="background: linear-gradient(to right, ${accentColor}, ${accentColor}dd);"></div>
                        <div class="p-6">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-14 h-14 rounded-full flex items-center justify-center text-3xl" style="background: ${accentColor}20;">
                                    ${icon}
                                </div>
                                <div class="flex-1">
                                    <div class="text-sm font-bold" style="color: ${accentColor}">${date}</div>
                                    <div class="text-xl font-bold text-gray-900">${event}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            milestonesHTML = `<div class="grid md:grid-cols-2 gap-6">${milestonesHTML}</div>`;
        } else if (displayStyle === 'pins') {
            milestonesHTML = milestones.map(milestone => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="text-center">
                        <div class="relative inline-block mb-4">
                            <div class="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${accentColor}20, ${accentColor}40); border: 4px solid ${accentColor};">
                                ${icon}
                            </div>
                        </div>
                        <div class="bg-white rounded-xl p-5 shadow-md">
                            <div class="text-xs font-bold mb-2" style="color: ${accentColor}">${date}</div>
                            <div class="text-base font-bold text-gray-900">${event}</div>
                        </div>
                    </div>
                `;
            }).join('');
            milestonesHTML = `<div class="grid md:grid-cols-3 gap-6">${milestonesHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">🎊</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Milestones'}</h2>
                    </div>
                    ${milestonesHTML}
                </div>
            </div>
        `;
    }
};
