// Birthday Wish Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wish = {
    name: '🌟 Birthday Wish',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Title</label>
                <input type="text" placeholder="May All Your Wishes Come True" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Message</label>
                <textarea placeholder="Here's to another year of wonderful adventures, beautiful memories, and endless happiness!" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-data" data-field="wish" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="bordered">Bordered Card - Classic</option>
                    <option value="shadow">Shadow Card - Modern</option>
                    <option value="ribbon">Ribbon Style - Decorative</option>
                    <option value="star">Star Burst - Festive</option>
                    <option value="minimal">Minimal - Clean</option>
                    <option value="fancy">Fancy - Ornate</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background Color</label>
                <input type="color" value="#fef3c7" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border/Accent Color</label>
                <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="size" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="full">Full Width</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon/Emoji</label>
                <input type="text" placeholder="🌟" value="🌟" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="icon" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Corner Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 section-style" data-style="corners" onchange="updatePreview()">
                    <option value="rounded">Rounded</option>
                    <option value="sharp">Sharp</option>
                    <option value="pill">Pill Shape</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'bordered';
        const bgColor = style.bg || '#fef3c7';
        const borderColor = style.border || '#f59e0b';
        const textColor = style.textColor || globalStyles.textColor;
        const icon = style.icon || '🌟';

        const sizes = {
            small: 'max-w-sm',
            medium: 'max-w-xl',
            large: 'max-w-2xl',
            full: 'max-w-full'
        };
        const sizeClass = sizes[style.size] || 'max-w-xl';

        const corners = {
            rounded: 'rounded-lg',
            sharp: 'rounded-none',
            pill: 'rounded-full'
        };
        const cornerClass = corners[style.corners] || 'rounded-lg';

        const title = data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${textColor}">${data.title}</h3>` : '';
        const wish = data.wish || 'Your birthday wish goes here...';

        // Bordered Card Layout
        if (layout === 'bordered') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8 ${cornerClass} border-4" style="background: ${bgColor}; border-color: ${borderColor}">
                        <div class="text-center">
                            <div class="text-4xl mb-4">${icon}</div>
                            ${title}
                            <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Shadow Card Layout
        if (layout === 'shadow') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8 ${cornerClass} shadow-2xl" style="background: ${bgColor}">
                        <div class="text-center">
                            <div class="inline-block p-4 ${cornerClass} mb-4" style="background: ${borderColor}22">
                                <span class="text-4xl">${icon}</span>
                            </div>
                            ${title}
                            <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Ribbon Style Layout
        if (layout === 'ribbon') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 ${cornerClass} shadow-lg z-10" style="background: ${borderColor}">
                            <span class="text-3xl">${icon}</span>
                        </div>
                        <div class="p-8 pt-12 ${cornerClass} border-2" style="background: ${bgColor}; border-color: ${borderColor}">
                            <div class="text-center">
                                ${title}
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Star Burst Layout
        if (layout === 'star') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto relative overflow-hidden p-8 ${cornerClass}" style="background: ${bgColor}">
                        <div class="absolute inset-0 opacity-10 pointer-events-none">
                            <div class="absolute top-0 left-0 text-6xl" style="color: ${borderColor}">${icon}</div>
                            <div class="absolute top-0 right-0 text-6xl" style="color: ${borderColor}">${icon}</div>
                            <div class="absolute bottom-0 left-0 text-6xl" style="color: ${borderColor}">${icon}</div>
                            <div class="absolute bottom-0 right-0 text-6xl" style="color: ${borderColor}">${icon}</div>
                        </div>
                        <div class="relative z-10 text-center">
                            <div class="text-5xl mb-4">${icon}</div>
                            ${title}
                            <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            <div class="mt-4 flex justify-center gap-2">
                                <span class="text-2xl" style="color: ${borderColor}">${icon}</span>
                                <span class="text-2xl" style="color: ${borderColor}">${icon}</span>
                                <span class="text-2xl" style="color: ${borderColor}">${icon}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Layout
        if (layout === 'minimal') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8">
                        <div class="text-center">
                            <div class="text-3xl mb-6">${icon}</div>
                            ${title}
                            <div class="border-t border-b py-6 my-4" style="border-color: ${borderColor}">
                                <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Fancy/Ornate Layout
        if (layout === 'fancy') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto relative">
                        <div class="absolute -inset-2 ${cornerClass} opacity-20" style="background: ${borderColor}"></div>
                        <div class="relative p-10 ${cornerClass}" style="background: ${bgColor}; border: 3px double ${borderColor}">
                            <div class="text-center">
                                <div class="flex items-center justify-center gap-3 mb-4">
                                    <span class="text-2xl" style="color: ${borderColor}">✦</span>
                                    <span class="text-4xl">${icon}</span>
                                    <span class="text-2xl" style="color: ${borderColor}">✦</span>
                                </div>
                                ${title}
                                <div class="my-4">
                                    <div class="inline-block w-16 h-1" style="background: ${borderColor}"></div>
                                </div>
                                <p class="text-lg leading-relaxed font-serif italic" style="color: ${textColor}">${wish}</p>
                                <div class="mt-4">
                                    <div class="inline-block w-16 h-1" style="background: ${borderColor}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default
        return `
            <div class="py-12 px-6">
                <div class="${sizeClass} mx-auto p-8 ${cornerClass} border-4" style="background: ${bgColor}; border-color: ${borderColor}">
                    <div class="text-center">
                        <div class="text-4xl mb-4">${icon}</div>
                        ${title}
                        <p class="text-lg leading-relaxed" style="color: ${textColor}">${wish}</p>
                    </div>
                </div>
            </div>
        `;
    }
};
