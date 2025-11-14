// Family Traditions Section Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.traditions = {
    name: '🎀 Family Traditions',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="title"
                    placeholder="Our Holiday Traditions"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="intro"
                    rows="2"
                    placeholder="Here are some of our cherished family traditions..."
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Traditions (one per line)</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="traditions"
                    rows="8"
                    placeholder="🎄 Decorating the tree on December 1st\n🍪 Baking cookies together on Christmas Eve\n📖 Reading 'Twas the Night Before Christmas\n🎁 Opening one gift on Christmas Eve\n🎅 Leaving milk and cookies for Santa"
                    oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="bgColor"
                    value="#fef2f2"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="textColor"
                    value="#7f1d1d"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left" selected>Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#fef2f2';
        const textColor = style.textColor || '#7f1d1d';
        const textAlign = style.textAlign || 'left';
        const title = data.title || 'Our Holiday Traditions';
        const intro = data.intro || '';
        const traditions = data.traditions ? data.traditions.split('\n').filter(t => t.trim()) : [];

        return `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 48px 24px; text-align: ${textAlign};">
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 16px;">🎀 ${title}</h2>
                    ${intro ? `<p style="margin-bottom: 24px; line-height: 1.6;">${intro}</p>` : ''}

                    ${traditions.length > 0 ? `
                        <div style="text-align: left;">
                            <ul style="list-style: none; padding: 0; line-height: 2;">
                                ${traditions.map(tradition => `
                                    <li style="padding: 12px; margin-bottom: 8px; background: rgba(255,255,255,0.5); border-radius: 8px;">
                                        ${tradition}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
