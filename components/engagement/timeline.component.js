// Timeline Component for Engagement Announcement
// Display relationship milestones and important dates

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📅 Relationship Timeline',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Our Journey Together" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Key moments in our relationship" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>

            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-3">
                    <label class="block text-sm font-medium text-gray-700">Timeline Events</label>
                    <button type="button" onclick="addTimelineEvent('${sectionId}')" class="px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-medium hover:bg-rose-700 transition">
                        + Add Event
                    </button>
                </div>
                <div id="timeline-events-${sectionId}" class="space-y-3">
                    <!-- Timeline events will be added here -->
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="timelineStyle" onchange="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="cards">Event Cards</option>
                    <option value="minimal">Minimal List</option>
                    <option value="zigzag">Zigzag Timeline</option>
                    <option value="modern">Modern Dots</option>
                    <option value="illustrated">Illustrated Journey</option>
                    <option value="elegant">Elegant Milestones</option>
                    <option value="compact">Compact Timeline</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Line Color</label>
                <input type="color" value="#fda4af" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="lineColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const timelineStyle = style.timelineStyle || 'vertical';
        const bg = style.bg || '#ffffff';
        const accent = style.accent || '#e11d48';
        const lineColor = style.lineColor || '#fda4af';
        const textColor = style.textColor || '#1f2937';
        const events = [];

        // Collect timeline events from dynamic inputs
        let i = 0;
        while (data[`event${i}Date`] || data[`event${i}Title`]) {
            if (data[`event${i}Date`] && data[`event${i}Title`]) {
                events.push({
                    date: data[`event${i}Date`],
                    title: data[`event${i}Title`],
                    description: data[`event${i}Description`] || ''
                });
            }
            i++;
        }

        const renderVerticalTimeline = () => {
            return events.map((event, index) => `
                <div class="flex gap-4 relative ${index < events.length - 1 ? 'pb-8' : ''}">
                    ${index < events.length - 1 ? `<div class="absolute left-4 top-8 bottom-0 w-0.5" style="background: ${lineColor};"></div>` : ''}
                    <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold z-10" style="background: ${accent};">
                        ${index + 1}
                    </div>
                    <div class="flex-1 pt-1">
                        <div class="text-xs font-semibold mb-1" style="color: ${accent};">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                        <div class="font-bold mb-1" style="color: ${textColor};">${event.title}</div>
                        ${event.description ? `<p class="text-sm text-gray-600">${event.description}</p>` : ''}
                    </div>
                </div>
            `).join('');
        };

        const renderCardTimeline = () => {
            return events.map(event => `
                <div class="p-4 rounded-lg border shadow-sm" style="background: ${accent}10; border-color: ${lineColor};">
                    <div class="text-xs font-semibold mb-2" style="color: ${accent};">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                    <div class="font-bold mb-1" style="color: ${textColor};">${event.title}</div>
                    ${event.description ? `<p class="text-sm text-gray-600">${event.description}</p>` : ''}
                </div>
            `).join('');
        };

        const renderMinimalTimeline = () => {
            return events.map((event, index) => `
                <div class="flex justify-between items-start py-3 ${index < events.length - 1 ? 'border-b' : ''}" style="border-color: ${lineColor};">
                    <div class="flex-1">
                        <div class="font-medium" style="color: ${textColor};">${event.title}</div>
                        ${event.description ? `<p class="text-sm text-gray-600 mt-1">${event.description}</p>` : ''}
                    </div>
                    <div class="text-sm font-medium ml-4" style="color: ${accent};">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short'})}</div>
                </div>
            `).join('');
        };

        const renderZigzagTimeline = () => {
            return events.map((event, index) => {
                const isLeft = index % 2 === 0;
                return `
                    <div class="relative ${index < events.length - 1 ? 'pb-12' : ''}">
                        ${index < events.length - 1 ? `<div class="absolute left-1/2 top-10 bottom-0 w-0.5 transform -translate-x-1/2" style="background: ${lineColor};"></div>` : ''}
                        <div class="flex items-center ${isLeft ? '' : 'flex-row-reverse'}">
                            <div class="flex-1 ${isLeft ? 'pr-8 text-right' : 'pl-8'}">
                                <div class="inline-block p-4 bg-white rounded-lg shadow-md border" style="border-color: ${lineColor};">
                                    <div class="text-xs font-semibold mb-2" style="color: ${accent};">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                                    <div class="font-bold mb-1" style="color: ${textColor};">${event.title}</div>
                                    ${event.description ? `<p class="text-sm text-gray-600">${event.description}</p>` : ''}
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg" style="background: ${accent};">
                                ${index + 1}
                            </div>
                            <div class="flex-1"></div>
                        </div>
                    </div>
                `;
            }).join('');
        };

        const renderModernTimeline = () => {
            return events.map((event, index) => `
                <div class="flex gap-6 relative ${index < events.length - 1 ? 'pb-10' : ''}">
                    ${index < events.length - 1 ? `<div class="absolute left-6 top-14 bottom-0 w-1 rounded-full" style="background: linear-gradient(180deg, ${lineColor} 0%, ${lineColor}40 100%);"></div>` : ''}
                    <div class="flex-shrink-0 relative z-10">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl" style="background: ${accent};">
                            <span class="text-lg">📅</span>
                        </div>
                    </div>
                    <div class="flex-1 pt-2">
                        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3 text-white" style="background: ${accent};">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                        <div class="p-4 bg-white rounded-xl shadow-lg border" style="border-color: ${lineColor};">
                            <div class="font-bold text-lg mb-2" style="color: ${textColor};">${event.title}</div>
                            ${event.description ? `<p class="text-sm text-gray-600 leading-relaxed">${event.description}</p>` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        };

        const renderIllustratedTimeline = () => {
            const icons = ['💕', '💑', '💐', '💍', '💝', '🎉', '✨', '💖'];
            return events.map((event, index) => `
                <div class="relative ${index < events.length - 1 ? 'pb-12' : ''}">
                    ${index < events.length - 1 ? `<div class="absolute left-1/2 top-24 bottom-0 w-1 transform -translate-x-1/2" style="background: linear-gradient(180deg, ${lineColor} 0%, ${lineColor}30 100%);"></div>` : ''}
                    <div class="flex flex-col items-center text-center relative z-10">
                        <div class="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl mb-4" style="background: ${accent};">
                            <span class="text-4xl">${icons[index % icons.length]}</span>
                        </div>
                        <div class="inline-block px-5 py-2 rounded-full text-sm font-bold text-white mb-3 shadow-md" style="background: ${accent};">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                        <div class="max-w-md p-6 bg-white rounded-2xl shadow-xl border-2" style="border-color: ${lineColor};">
                            <div class="font-bold text-xl mb-3" style="color: ${textColor};">${event.title}</div>
                            ${event.description ? `<p class="text-sm text-gray-600 leading-relaxed">${event.description}</p>` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        };

        const renderElegantTimeline = () => {
            return events.map((event, index) => `
                <div class="relative ${index < events.length - 1 ? 'pb-16' : ''}">
                    <div class="flex items-center gap-6 mb-4">
                        <div class="flex-shrink-0 text-right" style="width: 150px;">
                            <div class="text-sm font-bold mb-1" style="color: ${accent};">${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric'})}</div>
                            <div class="text-xs text-gray-600">${new Date(event.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}</div>
                        </div>
                        <div class="flex-shrink-0 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10" style="background: ${accent};"></div>
                        <div class="flex-1 h-px" style="background: ${lineColor};"></div>
                    </div>
                    <div class="ml-44">
                        <div class="p-6 rounded-lg border-l-4 shadow-md" style="background: white; border-left-color: ${accent};">
                            <div class="font-bold text-lg mb-2" style="color: ${textColor}; font-family: 'Georgia', serif;">${event.title}</div>
                            ${event.description ? `<p class="text-sm text-gray-600 leading-relaxed italic">${event.description}</p>` : ''}
                        </div>
                    </div>
                    ${index < events.length - 1 ? `<div class="absolute left-44 top-20 bottom-0 w-px" style="background: ${lineColor}; margin-left: -2px;"></div>` : ''}
                </div>
            `).join('');
        };

        const renderCompactTimeline = () => {
            return events.map((event, index) => `
                <div class="flex items-center gap-3 py-2 ${index < events.length - 1 ? 'border-b' : ''}" style="border-color: ${lineColor}30;">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md" style="background: ${accent};">
                        ${index + 1}
                    </div>
                    <div class="flex-shrink-0 text-xs font-semibold" style="color: ${accent}; width: 100px;">
                        ${new Date(event.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short'})}
                    </div>
                    <div class="flex-1">
                        <div class="font-semibold text-sm" style="color: ${textColor};">${event.title}</div>
                        ${event.description ? `<p class="text-xs text-gray-600 mt-1 line-clamp-1">${event.description}</p>` : ''}
                    </div>
                </div>
            `).join('');
        };

        let timelineHtml = '';
        if (events.length > 0) {
            switch(timelineStyle) {
                case 'cards':
                    timelineHtml = `<div class="space-y-4">${renderCardTimeline()}</div>`;
                    break;
                case 'minimal':
                    timelineHtml = renderMinimalTimeline();
                    break;
                case 'zigzag':
                    timelineHtml = renderZigzagTimeline();
                    break;
                case 'modern':
                    timelineHtml = renderModernTimeline();
                    break;
                case 'illustrated':
                    timelineHtml = renderIllustratedTimeline();
                    break;
                case 'elegant':
                    timelineHtml = renderElegantTimeline();
                    break;
                case 'compact':
                    timelineHtml = `<div class="space-y-1">${renderCompactTimeline()}</div>`;
                    break;
                case 'vertical':
                default:
                    timelineHtml = renderVerticalTimeline();
                    break;
            }
        } else {
            timelineHtml = `
                <div class="text-center py-8 text-gray-500">
                    <div class="text-4xl mb-2">📅</div>
                    <p>Add timeline events to display your journey together</p>
                </div>
            `;
        }

        const maxWidth = timelineStyle === 'zigzag' ? 'max-w-3xl' : 'max-w-md';

        return `
            <div class="py-12 px-6" style="background: ${bg}; color: ${textColor};">
                <div class="${maxWidth} mx-auto">
                    <div class="text-center text-4xl mb-4">📅</div>
                    <h2 class="text-2xl font-bold mb-2 text-center">${data.title || 'Our Journey Together'}</h2>
                    ${data.subtitle ? `<p class="text-center text-gray-600 mb-8">${data.subtitle}</p>` : '<div class="mb-8"></div>'}
                    ${timelineHtml}
                </div>
            </div>
        `;
    }
};

// Helper function to add timeline event
window.addTimelineEvent = function(sectionId) {
    const container = document.getElementById(`timeline-events-${sectionId}`);
    const eventCount = container.children.length;

    const eventHtml = `
        <div class="p-4 border border-gray-200 rounded-lg bg-gray-50" data-event-index="${eventCount}">
            <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-semibold text-gray-700">Event ${eventCount + 1}</span>
                <button type="button" onclick="this.closest('[data-event-index]').remove(); updatePreview();" class="text-red-600 hover:text-red-800 text-sm">Remove</button>
            </div>
            <div class="space-y-3">
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Date</label>
                    <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="event${eventCount}Date" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Event Title</label>
                    <input type="text" placeholder="First Date" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="event${eventCount}Title" oninput="updatePreview()">
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Description (Optional)</label>
                    <textarea placeholder="Where we met..." rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm section-data" data-field="event${eventCount}Description" oninput="updatePreview()"></textarea>
                </div>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', eventHtml);
    updatePreview();
};
