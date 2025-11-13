// Agenda/Schedule Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.agenda = {
                name: '📅 Agenda',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Event Schedule" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Schedule Items (Time - Session Title, one per line)</label>
                            <textarea placeholder="09:00 AM - Registration & Coffee&#10;10:00 AM - Opening Keynote&#10;11:00 AM - Breakout Sessions&#10;12:30 PM - Lunch Break&#10;02:00 PM - Panel Discussion&#10;04:00 PM - Closing Remarks" rows="8" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="schedule" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#f9fafb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const scheduleItems = data.schedule ? data.schedule.split('\n').filter(s => s.trim()) : [];
                    const accentColor = style.accent || '#3b82f6';
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Event Schedule'}</h2>
                            <div class="max-w-md mx-auto space-y-3">
                                ${scheduleItems.map(item => {
                                    const [time, session] = item.split('-').map(s => s.trim());
                                    return `
                                        <div class="flex gap-4 p-3 bg-white rounded-lg border-l-4" style="border-left-color: ${accentColor}">
                                            <div class="flex-shrink-0 font-semibold text-sm" style="color: ${accentColor}; min-width: 80px;">
                                                ${time || item}
                                            </div>
                                            <div class="flex-1 text-sm">
                                                ${session || ''}
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                                ${scheduleItems.length === 0 ? '<div class="text-center text-gray-500 text-sm">Add schedule items to display</div>' : ''}
                            </div>
                        </div>
                    `;
                }
            };
