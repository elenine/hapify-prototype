// Group Wishes Component for Birthday Greeting Card

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.groupwishes = {
    name: '👥 Group Wishes',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Birthday Wishes From Everyone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wishes from Friends & Family</label>
                <p class="text-xs text-gray-500 mb-2">Add messages from different people</p>
                <div data-items-container="groupwish" class="space-y-2">
                    <!-- Dynamic items will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'groupwish')" class="mt-3 w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-pink-600 font-medium hover:border-pink-400 hover:bg-pink-50 transition">
                    + Add Wish
                </button>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const wishes = [];
        const container = document.querySelector(`[data-field="title"]`)?.closest('.section-item')?.querySelector('[data-items-container="groupwish"]');
        if (container) {
            container.querySelectorAll('.dynamic-item').forEach(item => {
                const nameInput = item.querySelector('[data-field="name"]');
                const messageInput = item.querySelector('[data-field="message"]');
                const name = nameInput?.value || '';
                const message = messageInput?.value || '';
                if (name && message) {
                    wishes.push({ name, message });
                }
            });
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fef3c7'}; color: ${style.text || '#1f2937'}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-8">${data.title || 'Birthday Wishes From Everyone'}</h3>
                    <div class="space-y-4">
                        ${wishes.length > 0 ? wishes.map(wish => `
                            <div class="p-6 rounded-xl shadow-md border-l-4" style="background: ${style.cardBg || '#ffffff'}; border-color: ${globalStyles.primaryColor}">
                                <div class="flex items-start gap-3">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl" style="background: ${globalStyles.primaryColor}; color: white">
                                        ${wish.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-semibold mb-1">${wish.name}</p>
                                        <p class="text-gray-700">${wish.message}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500">Add wishes from friends in the editor</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
