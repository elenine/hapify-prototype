// Career/Journey Timeline Component for Farewell Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.timeline = {
    name: '📜 Journey Timeline',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Their Journey With Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="A look back at the incredible journey we've shared together..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-data" data-field="intro" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Events</label>
                <div class="text-xs text-gray-500 mb-2">Format: Year/Date | Milestone Title | Description (one per line)</div>
                <textarea placeholder="2015 | Joined the Team | Started as a Junior Developer&#10;2017 | First Major Project | Led the redesign initiative&#10;2019 | Promotion | Became Senior Team Lead&#10;2021 | Innovation Award | Received company-wide recognition&#10;2024 | New Adventures | Moving on to exciting opportunities" rows="7" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 font-mono text-sm section-data" data-field="events" oninput="updatePreview()"></textarea>
                <div class="text-xs text-gray-500 mt-1">Use | to separate date, title, and description</div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Timeline Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="timelineStyle" onchange="updatePreview()">
                    <option value="vertical">Vertical Timeline</option>
                    <option value="cards">Timeline Cards</option>
                    <option value="zigzag">Zigzag - Alternating</option>
                    <option value="modern">Modern - Clean Lines</option>
                    <option value="roadmap">Roadmap - Horizontal</option>
                    <option value="dotted">Dotted - Minimal</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fefce8" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#8b5cf6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accentColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Line Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="lineStyle" onchange="updatePreview()">
                    <option value="solid">Solid Line</option>
                    <option value="dashed">Dashed Line</option>
                    <option value="dotted">Dotted Line</option>
                    <option value="thick">Thick Line</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Shadow</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="shadow" onchange="updatePreview()">
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="borderRadius" onchange="updatePreview()">
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 section-style" data-style="dateStyle" onchange="updatePreview()">
                    <option value="badge">Badge</option>
                    <option value="circle">Circle</option>
                    <option value="simple">Simple Text</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const timelineStyle = style.timelineStyle || 'vertical';
        const events = data.events ? data.events.split('\n').filter(item => item.trim()) : [];

        const parsedEvents = events.map(item => {
            const parts = item.split('|');
            if (parts.length >= 3) {
                return {
                    date: parts[0].trim(),
                    title: parts[1].trim(),
                    description: parts[2].trim()
                };
            } else if (parts.length === 2) {
                return {
                    date: parts[0].trim(),
                    title: parts[1].trim(),
                    description: ''
                };
            }
            return {
                date: '',
                title: item.trim(),
                description: ''
            };
        });

        if (timelineStyle === 'cards') {
            return `
                <div class="py-12 px-6" style="background: ${style.bg || '#fefce8'}">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-5xl mb-3">📜</div>
                            <h2 class="text-2xl font-bold">${data.title || 'Their Journey With Us'}</h2>
                            ${data.intro ? `<p class="text-gray-600 mt-2">${data.intro}</p>` : ''}
                        </div>
                        <div class="grid sm:grid-cols-2 gap-5">
                            ${parsedEvents.map((event, index) => `
                                <div class="bg-white rounded-xl p-6 shadow-sm border-l-4 border-violet-500">
                                    <div class="flex items-center gap-3 mb-3">
                                        <div class="w-10 h-10 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold flex-shrink-0">
                                            ${index + 1}
                                        </div>
                                        ${event.date ? `<div class="text-sm font-semibold text-violet-600">${event.date}</div>` : ''}
                                    </div>
                                    <h3 class="font-bold text-lg text-gray-900 mb-2">${event.title}</h3>
                                    ${event.description ? `<p class="text-gray-600 text-sm">${event.description}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#fefce8'}">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-10">
                        <div class="text-5xl mb-3">📜</div>
                        <h2 class="text-2xl font-bold">${data.title || 'Their Journey With Us'}</h2>
                        ${data.intro ? `<p class="text-gray-600 mt-2">${data.intro}</p>` : ''}
                    </div>
                    <div class="relative">
                        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-violet-300"></div>
                        <div class="space-y-8">
                            ${parsedEvents.map((event, index) => `
                                <div class="relative flex gap-6 items-start">
                                    <div class="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg">
                                        ${index + 1}
                                    </div>
                                    <div class="flex-1 bg-white rounded-xl p-6 shadow-sm">
                                        ${event.date ? `<div class="text-sm font-bold text-violet-600 mb-2">${event.date}</div>` : ''}
                                        <h3 class="font-bold text-xl text-gray-900 mb-2">${event.title}</h3>
                                        ${event.description ? `<p class="text-gray-600">${event.description}</p>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
