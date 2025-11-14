// Holiday Wish Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.wish = {
    name: '⭐ Holiday Wish',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Title</label>
                <input type="text" placeholder="Warmest Wishes for the Season" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Message</label>
                <textarea placeholder="May this holiday season bring you joy, peace, and countless blessings. Wishing you and your family a wonderful celebration!" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="wish" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wish Icon</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-data" data-field="icon" onchange="updatePreview()">
                    <option value="⭐">⭐ Star</option>
                    <option value="🌟">🌟 Glowing Star</option>
                    <option value="✨">✨ Sparkles</option>
                    <option value="💫">💫 Dizzy Star</option>
                    <option value="🎄">🎄 Christmas Tree</option>
                    <option value="🎁">🎁 Gift</option>
                    <option value="❄️">❄️ Snowflake</option>
                    <option value="🕊️">🕊️ Dove</option>
                    <option value="🎊">🎊 Confetti</option>
                    <option value="💝">💝 Heart Gift</option>
                </select>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="classic">Classic Card</option>
                    <option value="modern">Modern Minimal</option>
                    <option value="festive">Festive Border</option>
                    <option value="elegant">Elegant Frame</option>
                    <option value="playful">Playful Rounded</option>
                    <option value="gradient">Gradient Background</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background Color</label>
                <input type="color" value="#ecfdf5" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border/Accent Color</label>
                <input type="color" value="#10b981" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="border" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="size" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Effect</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const cardStyle = style.cardStyle || 'classic';
        const bg = style.bg || '#ecfdf5';
        const border = style.border || '#10b981';
        const secondary = style.secondary || '#059669';
        const icon = data.icon || '⭐';
        const align = style.align || 'center';

        // Card sizes
        const sizes = {
            small: 'max-w-md',
            medium: 'max-w-xl',
            large: 'max-w-2xl'
        };
        const sizeClass = sizes[style.size] || 'max-w-xl';

        // Shadow effects
        const shadows = {
            none: 'shadow-none',
            small: 'shadow-sm',
            medium: 'shadow-lg',
            large: 'shadow-xl',
            xlarge: 'shadow-2xl'
        };
        const shadowClass = shadows[style.shadow] || 'shadow-lg';

        if (cardStyle === 'classic') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8 rounded-lg border-4 ${shadowClass}" style="background: ${bg}; border-color: ${border}; text-align: ${align};">
                        <div class="text-5xl mb-4">${icon}</div>
                        ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${border};">${data.title}</h3>` : ''}
                        <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${data.wish || 'Your holiday wish goes here...'}</p>
                    </div>
                </div>
            `;
        } else if (cardStyle === 'modern') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-10 ${shadowClass}" style="background: ${bg}; text-align: ${align}; border-left: 6px solid ${border};">
                        <div class="text-5xl mb-6">${icon}</div>
                        ${data.title ? `<h3 class="text-3xl font-light mb-6" style="color: ${border};">${data.title}</h3>` : ''}
                        <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${data.wish || 'Your holiday wish goes here...'}</p>
                    </div>
                </div>
            `;
        } else if (cardStyle === 'festive') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8 rounded-2xl border-4 ${shadowClass}" style="background: ${bg}; border-color: ${border}; text-align: ${align}; border-style: dashed;">
                        <div class="relative">
                            <div style="position: absolute; top: -20px; left: 10%; font-size: 1.5rem;">❄️</div>
                            <div style="position: absolute; top: -20px; right: 10%; font-size: 1.5rem;">❄️</div>
                            <div class="text-6xl mb-4">${icon}</div>
                            ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${border};">${data.title}</h3>` : ''}
                            <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${data.wish || 'Your holiday wish goes here...'}</p>
                            <div class="mt-6 flex justify-center gap-3 text-2xl">
                                <span>🎄</span><span>⭐</span><span>🎁</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (cardStyle === 'elegant') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto ${shadowClass}" style="background: white; text-align: ${align};">
                        <div class="p-10" style="border: 3px double ${border}; border-radius: 0.5rem;">
                            <div class="text-5xl mb-4">${icon}</div>
                            ${data.title ? `<h3 class="text-2xl font-serif mb-6" style="color: ${border};">${data.title}</h3>` : ''}
                            <div style="width: 80px; height: 2px; background: ${border}; margin: 0 auto 1.5rem;"></div>
                            <p class="text-lg leading-relaxed font-serif" style="color: ${globalStyles.textColor};">${data.wish || 'Your holiday wish goes here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (cardStyle === 'playful') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-8 ${shadowClass}" style="background: ${bg}; text-align: ${align}; border-radius: 2rem; border: 3px solid ${border}; transform: rotate(-1deg);">
                        <div style="transform: rotate(1deg);">
                            <div class="text-6xl mb-4">${icon}</div>
                            ${data.title ? `<h3 class="text-2xl font-bold mb-4" style="color: ${border};">${data.title}</h3>` : ''}
                            <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${data.wish || 'Your holiday wish goes here...'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (cardStyle === 'gradient') {
            return `
                <div class="py-12 px-6">
                    <div class="${sizeClass} mx-auto p-10 rounded-2xl ${shadowClass}" style="background: linear-gradient(135deg, ${border} 0%, ${secondary} 100%); text-align: ${align};">
                        <div class="text-6xl mb-6" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">${icon}</div>
                        ${data.title ? `<h3 class="text-3xl font-bold mb-6 text-white" style="text-shadow: 0 2px 4px rgba(0,0,0,0.2);">${data.title}</h3>` : ''}
                        <p class="text-lg leading-relaxed text-white" style="text-shadow: 0 1px 2px rgba(0,0,0,0.1);">${data.wish || 'Your holiday wish goes here...'}</p>
                    </div>
                </div>
            `;
        }
    }
};
