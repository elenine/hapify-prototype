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
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef2f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Display Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="displayStyle" onchange="updatePreview()">
                    <option value="timeline" selected>Timeline</option>
                    <option value="cards">Cards</option>
                    <option value="badges">Badges</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const milestones = (data.milestones || '').split('\n').filter(m => m.trim());
        const displayStyle = style.displayStyle || 'timeline';

        let milestonesHTML = '';

        if (displayStyle === 'timeline') {
            milestonesHTML = milestones.map((milestone, i) => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="flex gap-4 mb-6">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                                ${icon}
                            </div>
                        </div>
                        <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            <div class="text-sm text-rose-600 font-semibold mb-1">${date}</div>
                            <div class="text-lg font-bold text-gray-900">${event}</div>
                        </div>
                    </div>
                `;
            }).join('');
        } else if (displayStyle === 'cards') {
            milestonesHTML = milestones.map((milestone, i) => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
                        <div class="text-4xl mb-3">${icon}</div>
                        <div class="text-sm text-rose-600 font-semibold mb-2">${date}</div>
                        <div class="text-lg font-bold text-gray-900">${event}</div>
                    </div>
                `;
            }).join('');
            milestonesHTML = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">${milestonesHTML}</div>`;
        } else {
            milestonesHTML = milestones.map((milestone, i) => {
                const parts = milestone.split('|').map(p => p.trim());
                const date = parts[0] || '';
                const event = parts[1] || '';
                const icon = parts[2] || '💫';

                return `
                    <div class="inline-flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-md m-2">
                        <span class="text-2xl">${icon}</span>
                        <div>
                            <div class="text-xs text-rose-600 font-semibold">${date}</div>
                            <div class="text-sm font-bold text-gray-900">${event}</div>
                        </div>
                    </div>
                `;
            }).join('');
            milestonesHTML = `<div class="text-center">${milestonesHTML}</div>`;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef2f2'}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">🎊</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Our Milestones'}</h2>
                    </div>
                    ${milestonesHTML || '<p class="text-center text-gray-400">Add your milestones...</p>'}
                </div>
            </div>
        `;
    }
};
