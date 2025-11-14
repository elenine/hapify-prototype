// Activities Component for Birthday Wishes
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.activities = {
    name: '🎮 Activities & Games',
    allowMultiple: false,

    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                       data-field="title"
                       placeholder="e.g., Fun Activities, Games & Entertainment"
                       value="Fun & Games"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Activities/Games</label>
                <p class="text-xs text-gray-500 mb-2">Enter one activity per line</p>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="activities"
                          rows="6"
                          placeholder="Treasure Hunt&#10;Face Painting&#10;Bounce House&#10;Musical Chairs&#10;Piñata&#10;Magic Show"
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Entertainment Details</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="entertainment"
                          rows="3"
                          placeholder="e.g., DJ, Magician, Clown, Live Band, etc."
                          onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Note</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data"
                          data-field="note"
                          rows="2"
                          placeholder="Any special instructions or notes about activities..."
                          onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,

    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="bgColor"
                       value="#f0fdf4"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="textColor"
                       value="#1f2937"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color"
                       class="w-full h-10 px-2 border border-gray-300 rounded-lg section-style"
                       data-style="accentColor"
                       value="#10b981"
                       onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="layoutStyle"
                        onchange="updatePreview()">
                    <option value="list">List View</option>
                    <option value="grid" selected>Grid View</option>
                    <option value="cards">Card View</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Padding</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                        data-style="padding"
                        onchange="updatePreview()">
                    <option value="py-8">Small</option>
                    <option value="py-12" selected>Medium</option>
                    <option value="py-16">Large</option>
                </select>
            </div>
        </div>
    `,

    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#f0fdf4';
        const textColor = style.textColor || '#1f2937';
        const accentColor = style.accentColor || '#10b981';
        const padding = style.padding || 'py-12';
        const layoutStyle = style.layoutStyle || 'grid';

        if (!data.activities && !data.entertainment) {
            return '';
        }

        const activities = data.activities ? data.activities.split('\n').filter(a => a.trim()) : [];

        const getActivityEmoji = (index) => {
            const emojis = ['🎯', '🎨', '🎪', '🎭', '🎰', '🎲', '🎳', '🎸', '🎹', '🎺'];
            return emojis[index % emojis.length];
        };

        let activitiesHtml = '';
        if (layoutStyle === 'list') {
            activitiesHtml = `
                <div class="space-y-3">
                    ${activities.map((activity, index) => `
                        <div class="flex items-center gap-3 bg-white bg-opacity-70 rounded-lg p-3">
                            <span class="text-2xl">${getActivityEmoji(index)}</span>
                            <span class="text-lg">${activity}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (layoutStyle === 'grid') {
            activitiesHtml = `
                <div class="grid sm:grid-cols-2 gap-4">
                    ${activities.map((activity, index) => `
                        <div class="text-center bg-white bg-opacity-70 rounded-lg p-4">
                            <div class="text-3xl mb-2">${getActivityEmoji(index)}</div>
                            <div class="font-medium">${activity}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else { // cards
            activitiesHtml = `
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${activities.map((activity, index) => `
                        <div class="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
                            <div class="text-4xl mb-3">${getActivityEmoji(index)}</div>
                            <h4 class="font-semibold">${activity}</h4>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="${padding} px-4" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-3">🎮</div>
                        <h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">
                            ${data.title || 'Fun & Games'}
                        </h2>
                    </div>

                    ${activities.length > 0 ? activitiesHtml : ''}

                    ${data.entertainment ? `
                        <div class="mt-8 bg-white bg-opacity-70 rounded-lg p-6 text-center">
                            <h3 class="font-bold text-xl mb-3" style="color: ${accentColor};">
                                🎭 Entertainment
                            </h3>
                            <p class="text-lg whitespace-pre-line">${data.entertainment}</p>
                        </div>
                    ` : ''}

                    ${data.note ? `
                        <div class="mt-6 text-center">
                            <p class="text-sm italic" style="color: ${accentColor};">
                                💡 ${data.note}
                            </p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
