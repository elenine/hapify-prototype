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
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Card Stack - Classic</option>
                    <option value="bubbles">Chat Bubbles - Modern</option>
                    <option value="timeline">Timeline View - Story</option>
                    <option value="grid">Grid Cards - Organized</option>
                    <option value="minimal">Minimal List - Clean</option>
                    <option value="polaroid">Polaroid Style - Fun</option>
                </select>
            </div>
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
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="cardSize" onchange="updatePreview()">
                    <option value="compact">Compact</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Avatar Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="avatarStyle" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rounded">Rounded Square</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md" selected>Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
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

        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#fef3c7';
        const cardBg = style.cardBg || '#ffffff';
        const textColor = style.text || '#1f2937';
        const accentColor = style.accent || globalStyles.primaryColor;
        const title = data.title || 'Birthday Wishes From Everyone';

        const cardSizes = {
            compact: 'p-4 text-sm',
            medium: 'p-6 text-base',
            large: 'p-8 text-lg'
        };
        const padding = cardSizes[style.cardSize] || cardSizes.medium;

        const avatarStyles = {
            circle: 'rounded-full',
            square: 'rounded-none',
            rounded: 'rounded-lg'
        };
        const avatarClass = avatarStyles[style.avatarStyle] || avatarStyles.circle;

        const shadows = {
            none: 'shadow-none',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl'
        };
        const shadowClass = shadows[style.shadow] || shadows.md;

        // Card Stack Layout
        if (layout === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-4">
                            ${wishes.length > 0 ? wishes.map(wish => `
                                <div class="${padding} rounded-xl ${shadowClass} border-l-4" style="background: ${cardBg}; border-color: ${accentColor}">
                                    <div class="flex items-start gap-3">
                                        <div class="w-10 h-10 ${avatarClass} flex items-center justify-center text-xl" style="background: ${accentColor}; color: white">
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

        // Chat Bubbles Layout
        if (layout === 'bubbles') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="space-y-6">
                            ${wishes.length > 0 ? wishes.map((wish, index) => `
                                <div class="flex items-start gap-3 ${index % 2 === 0 ? '' : 'flex-row-reverse'}">
                                    <div class="w-10 h-10 ${avatarClass} flex items-center justify-center text-xl flex-shrink-0" style="background: ${accentColor}; color: white">
                                        ${wish.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div class="${index % 2 === 0 ? '' : 'text-right'}">
                                        <p class="font-semibold text-sm mb-1">${wish.name}</p>
                                        <div class="${padding} rounded-2xl ${shadowClass} max-w-md" style="background: ${cardBg}; ${index % 2 === 0 ? 'border-bottom-left-radius: 4px' : 'border-bottom-right-radius: 4px'}">
                                            <p>${wish.message}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add wishes from friends in the editor</p>'}
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
                            <div class="absolute left-8 top-0 bottom-0 w-1" style="background: ${accentColor}"></div>
                            <div class="space-y-8">
                                ${wishes.length > 0 ? wishes.map(wish => `
                                    <div class="relative pl-20">
                                        <div class="absolute left-4 w-8 h-8 ${avatarClass} flex items-center justify-center text-sm font-bold" style="background: ${accentColor}; color: white">
                                            ${wish.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div class="${padding} rounded-lg ${shadowClass}" style="background: ${cardBg}">
                                            <p class="font-semibold mb-2">${wish.name}</p>
                                            <p class="text-gray-700">${wish.message}</p>
                                        </div>
                                    </div>
                                `).join('') : '<p class="text-center text-gray-500">Add wishes from friends in the editor</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Grid Cards Layout
        if (layout === 'grid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${wishes.length > 0 ? wishes.map(wish => `
                                <div class="${padding} rounded-xl ${shadowClass}" style="background: ${cardBg}">
                                    <div class="flex items-start gap-4">
                                        <div class="w-12 h-12 ${avatarClass} flex items-center justify-center text-xl" style="background: ${accentColor}; color: white">
                                            ${wish.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div class="flex-1">
                                            <p class="font-bold mb-2">${wish.name}</p>
                                            <p class="text-gray-700">${wish.message}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add wishes from friends in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal List Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-xl mx-auto">
                        <h3 class="text-2xl font-bold text-center mb-6">${title}</h3>
                        <div class="space-y-4">
                            ${wishes.length > 0 ? wishes.map(wish => `
                                <div class="border-b pb-4" style="border-color: ${accentColor}22">
                                    <div class="flex items-center gap-2 mb-2">
                                        <div class="w-6 h-6 ${avatarClass} flex items-center justify-center text-xs font-bold" style="background: ${accentColor}; color: white">
                                            ${wish.name.charAt(0).toUpperCase()}
                                        </div>
                                        <p class="font-semibold text-sm">${wish.name}</p>
                                    </div>
                                    <p class="text-sm text-gray-700 pl-8">${wish.message}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500">Add wishes from friends in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Polaroid Style Layout
        if (layout === 'polaroid') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <h3 class="text-3xl font-bold text-center mb-10">${title}</h3>
                        <div class="grid md:grid-cols-2 gap-8">
                            ${wishes.length > 0 ? wishes.map((wish, index) => `
                                <div class="${padding} ${shadowClass}" style="background: white; transform: rotate(${[-2, 2, -1, 1][index % 4]}deg); border: 8px solid white">
                                    <div class="mb-4 flex items-center justify-center">
                                        <div class="w-16 h-16 ${avatarClass} flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white">
                                            ${wish.name.charAt(0).toUpperCase()}
                                        </div>
                                    </div>
                                    <p class="font-bold text-center mb-2" style="color: ${accentColor}">${wish.name}</p>
                                    <p class="text-center text-sm text-gray-700">${wish.message}</p>
                                </div>
                            `).join('') : '<p class="text-center text-gray-500 col-span-2">Add wishes from friends in the editor</p>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                <div class="max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold text-center mb-8">${title}</h3>
                    <div class="space-y-4">
                        ${wishes.length > 0 ? wishes.map(wish => `
                            <div class="${padding} rounded-xl ${shadowClass} border-l-4" style="background: ${cardBg}; border-color: ${accentColor}">
                                <div class="flex items-start gap-3">
                                    <div class="w-10 h-10 ${avatarClass} flex items-center justify-center text-xl" style="background: ${accentColor}; color: white">
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
