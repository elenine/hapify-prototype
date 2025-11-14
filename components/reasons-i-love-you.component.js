// Reasons I Love You Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents['reasons-i-love-you'] = {
    name: '💖 Reasons I Love You',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Why I Love You" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" value="Why I Love You" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Reasons (one per line)</label>
                <textarea placeholder="Your smile brightens my day
Your kindness touches my heart
Your laughter is my favorite sound
Your love makes me complete" rows="10" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="reasons" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="grid">Grid Cards</option>
                    <option value="list">Simple List</option>
                    <option value="numbered">Numbered List</option>
                    <option value="hearts">Heart Bullets</option>
                    <option value="polaroid">Polaroid Style</option>
                    <option value="bubbles">Speech Bubbles</option>
                    <option value="timeline">Timeline View</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fff1f2" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#f43f5e" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="cardStyle" onchange="updatePreview()">
                    <option value="modern">Modern Shadow</option>
                    <option value="minimal">Minimal Border</option>
                    <option value="bold">Bold Colors</option>
                    <option value="soft">Soft Gradient</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const reasons = (data.reasons || '').split('\n').filter(r => r.trim());
        const layout = style.layout || 'grid';
        const bgColor = style.bg || '#fff1f2';
        const accentColor = style.accent || '#f43f5e';
        const cardStyle = style.cardStyle || 'modern';

        // Helper function to get card classes based on style
        const getCardClasses = (extraClasses = '') => {
            if (cardStyle === 'modern') {
                return `bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition ${extraClasses}`;
            } else if (cardStyle === 'minimal') {
                return `bg-white rounded-lg p-6 border-2 hover:border-${accentColor} transition ${extraClasses}`;
            } else if (cardStyle === 'bold') {
                return `rounded-xl p-6 shadow-lg transition ${extraClasses}`;
            } else if (cardStyle === 'soft') {
                return `rounded-2xl p-6 shadow-md transition ${extraClasses}`;
            }
        };

        let reasonsHTML = '';

        if (layout === 'grid') {
            reasonsHTML = reasons.map((reason, i) => {
                const bgStyle = cardStyle === 'bold'
                    ? `background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);`
                    : cardStyle === 'soft'
                    ? `background: linear-gradient(135deg, ${accentColor}10, ${accentColor}20);`
                    : '';
                const textColor = cardStyle === 'bold' ? 'color: white;' : 'color: #374151;';

                return `
                    <div class="${getCardClasses()}" style="${bgStyle}">
                        <div class="text-3xl mb-3">💝</div>
                        <p style="${textColor}">${reason.trim()}</p>
                    </div>
                `;
            }).join('');
            reasonsHTML = `<div class="grid md:grid-cols-2 gap-4">${reasonsHTML}</div>`;
        } else if (layout === 'numbered') {
            reasonsHTML = reasons.map((reason, i) => `
                <div class="flex gap-4 mb-4">
                    <div class="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                        ${i + 1}
                    </div>
                    <p class="text-gray-700 flex-1 pt-2">${reason.trim()}</p>
                </div>
            `).join('');
        } else if (layout === 'list') {
            reasonsHTML = reasons.map(reason => `
                <div class="flex gap-3 mb-3">
                    <span class="text-xl" style="color: ${accentColor};">❤️</span>
                    <p class="text-gray-700 flex-1">${reason.trim()}</p>
                </div>
            `).join('');
        } else if (layout === 'hearts') {
            reasonsHTML = reasons.map((reason, i) => {
                const hearts = ['💖', '💗', '💓', '💕', '💝', '❤️', '💘'];
                const heart = hearts[i % hearts.length];
                return `
                    <div class="bg-white rounded-2xl p-6 shadow-md mb-4 hover:shadow-lg transition">
                        <div class="flex items-start gap-4">
                            <div class="text-4xl">${heart}</div>
                            <p class="text-gray-700 flex-1 pt-2">${reason.trim()}</p>
                        </div>
                    </div>
                `;
            }).join('');
        } else if (layout === 'polaroid') {
            reasonsHTML = reasons.map((reason, i) => `
                <div class="inline-block m-2 transform hover:scale-105 transition" style="transform: rotate(${(i % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 1)}deg);">
                    <div class="bg-white p-3 shadow-xl" style="width: 200px;">
                        <div class="bg-gradient-to-br from-rose-100 to-pink-100 h-32 flex items-center justify-center mb-3 text-4xl">
                            💝
                        </div>
                        <p class="text-sm text-gray-700 text-center font-handwriting">${reason.trim()}</p>
                        <div class="h-8"></div>
                    </div>
                </div>
            `).join('');
            reasonsHTML = `<div class="text-center">${reasonsHTML}</div>`;
        } else if (layout === 'bubbles') {
            reasonsHTML = reasons.map((reason, i) => {
                const isLeft = i % 2 === 0;
                return `
                    <div class="flex ${isLeft ? 'justify-start' : 'justify-end'} mb-4">
                        <div class="max-w-xs rounded-2xl p-4 shadow-md ${isLeft ? 'rounded-tl-none' : 'rounded-tr-none'}" style="background: ${isLeft ? '#ffffff' : accentColor}; color: ${isLeft ? '#374151' : '#ffffff'};">
                            <div class="text-2xl mb-2">${isLeft ? '💕' : '💖'}</div>
                            <p>${reason.trim()}</p>
                        </div>
                    </div>
                `;
            }).join('');
        } else if (layout === 'timeline') {
            reasonsHTML = reasons.map((reason, i) => `
                <div class="flex gap-4 mb-6 relative">
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                            💝
                        </div>
                        ${i < reasons.length - 1 ? `<div class="w-1 flex-1 mt-2" style="background: ${accentColor}40;"></div>` : ''}
                    </div>
                    <div class="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition mb-2">
                        <p class="text-gray-700">${reason.trim()}</p>
                    </div>
                </div>
            `).join('');
        }

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-4">💖</div>
                        <h2 class="text-3xl font-bold text-gray-900">${data.title || 'Why I Love You'}</h2>
                    </div>
                    ${reasonsHTML}
                </div>
            </div>
        `;
    }
};
