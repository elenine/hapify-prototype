// Activities Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.activities = {
    name: '🎮 Activities & Entertainment',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Activities & Entertainment"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="activitiesTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Activity 1</label>
                <input type="text" placeholder="e.g., Live Music Performance"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="activity1" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Activity 1 Description</label>
                <textarea placeholder="Description..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="activity1Desc" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Activity 2</label>
                <input type="text" placeholder="e.g., Photo Booth"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="activity2" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Activity 2 Description</label>
                <textarea placeholder="Description..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="activity2Desc" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Activity 3</label>
                <input type="text" placeholder="e.g., Games & Contests"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="activity3" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Activity 3 Description</label>
                <textarea placeholder="Description..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="activity3Desc" onkeyup="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fce7f3"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="layout" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="list">List</option>
                    <option value="grid">Grid</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fce7f3';
        const layout = style.layout || 'cards';
        const title = data.activitiesTitle || 'Activities & Entertainment';

        const activities = [];
        if (data.activity1) activities.push({ name: data.activity1, desc: data.activity1Desc });
        if (data.activity2) activities.push({ name: data.activity2, desc: data.activity2Desc });
        if (data.activity3) activities.push({ name: data.activity3, desc: data.activity3Desc });

        if (activities.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    <p class="text-gray-500">No activities added yet</p>
                </div>
            `;
        }

        let activitiesHtml = '';
        if (layout === 'cards') {
            activitiesHtml = `
                <div class="grid md:grid-cols-${activities.length > 2 ? 3 : activities.length} gap-6 max-w-5xl mx-auto">
                    ${activities.map(activity => `
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="text-xl font-bold mb-3" style="color: ${globalStyles.primaryColor || '#059669'};">${activity.name}</h3>
                            ${activity.desc ? `<p class="text-gray-600">${activity.desc}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layout === 'list') {
            activitiesHtml = `
                <div class="max-w-3xl mx-auto space-y-6">
                    ${activities.map(activity => `
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <h3 class="text-xl font-bold mb-2" style="color: ${globalStyles.primaryColor || '#059669'};">✓ ${activity.name}</h3>
                            ${activity.desc ? `<p class="text-gray-600">${activity.desc}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            activitiesHtml = `
                <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    ${activities.map(activity => `
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="text-xl font-bold mb-3" style="color: ${globalStyles.primaryColor || '#059669'};">${activity.name}</h3>
                            ${activity.desc ? `<p class="text-gray-600">${activity.desc}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-12 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${activitiesHtml}
            </div>
        `;
    }
};
