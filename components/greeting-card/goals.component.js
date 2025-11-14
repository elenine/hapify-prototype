// Goals & Resolutions Section Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.goals = {
    name: '🎯 New Year Goals',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="title"
                    placeholder="Looking Forward to 2026"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="intro"
                    rows="2"
                    placeholder="Here's what we're excited about in the new year..."
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Goals & Resolutions (one per line)</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="goals"
                    rows="8"
                    placeholder="✈️ Travel to at least 3 new places\n📚 Read 24 books\n🏃 Run a half marathon\n🎨 Learn watercolor painting\n🌱 Start a vegetable garden"
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
                    value="#ede9fe"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="textColor"
                    value="#4c1d95"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="textAlign" onchange="updatePreview()">
                    <option value="left">Left</option>
                    <option value="center" selected>Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const bgColor = style.bgColor || '#ede9fe';
        const textColor = style.textColor || '#4c1d95';
        const textAlign = style.textAlign || 'center';
        const title = data.title || 'New Year Goals';
        const intro = data.intro || '';
        const goals = data.goals ? data.goals.split('\n').filter(g => g.trim()) : [];

        return `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 48px 24px; text-align: ${textAlign};">
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 16px;">🎯 ${title}</h2>
                    ${intro ? `<p style="margin-bottom: 24px; line-height: 1.6;">${intro}</p>` : ''}

                    ${goals.length > 0 ? `
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; text-align: left;">
                            ${goals.map(goal => `
                                <div style="padding: 20px; background: rgba(255,255,255,0.7); border-radius: 12px; border: 2px solid rgba(76,29,149,0.2);">
                                    <div style="font-size: 16px; line-height: 1.5;">${goal}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
