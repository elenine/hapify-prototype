// Year in Review Section Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.yearReview = {
    name: '📅 Year in Review',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="title"
                    placeholder="Our 2025 in Review"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="intro"
                    rows="2"
                    placeholder="What a year it has been! Here are some highlights..."
                    oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Highlights (one per line, format: Month - Event)</label>
                <textarea
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 section-data"
                    data-field="highlights"
                    rows="10"
                    placeholder="January - Started a new job\nMarch - Took a family vacation to Hawaii\nJune - Graduated from college\nAugust - Moved to a new house\nOctober - Welcomed a new puppy"
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
                    value="#f0fdf4"
                    oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color"
                    class="w-full h-10 rounded-lg section-style"
                    data-style="textColor"
                    value="#14532d"
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
        const bgColor = style.bgColor || '#f0fdf4';
        const textColor = style.textColor || '#14532d';
        const textAlign = style.textAlign || 'left';
        const title = data.title || 'Year in Review';
        const intro = data.intro || '';
        const highlights = data.highlights ? data.highlights.split('\n').filter(h => h.trim()) : [];

        return `
            <div style="background: ${bgColor}; color: ${textColor}; padding: 48px 24px; text-align: ${textAlign};">
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 16px;">📅 ${title}</h2>
                    ${intro ? `<p style="margin-bottom: 24px; line-height: 1.6;">${intro}</p>` : ''}

                    ${highlights.length > 0 ? `
                        <div style="text-align: left;">
                            <div style="border-left: 4px solid ${textColor}; padding-left: 24px;">
                                ${highlights.map((highlight, index) => {
                                    const [month, ...eventParts] = highlight.split('-');
                                    const event = eventParts.join('-').trim();
                                    return `
                                        <div style="margin-bottom: 24px; position: relative;">
                                            <div style="position: absolute; left: -30px; width: 16px; height: 16px; background: ${textColor}; border-radius: 50%; border: 3px solid ${bgColor};"></div>
                                            <div style="font-weight: 700; font-size: 14px; opacity: 0.8; margin-bottom: 4px;">${month.trim()}</div>
                                            <div style="font-size: 16px;">${event || highlight}</div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
};
