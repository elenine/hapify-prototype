// Speakers Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.speakers = {
                name: '🎤 Speakers',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Featured Speakers" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Speakers (Name - Title/Company, one per line)</label>
                            <textarea placeholder="Dr. Jane Smith - AI Research Lead, Tech Corp&#10;John Doe - VP of Engineering, StartUp Inc&#10;Sarah Wilson - Industry Expert" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="speakers" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const speakers = data.speakers ? data.speakers.split('\n').filter(s => s.trim()) : [];
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Featured Speakers'}</h2>
                            <div class="max-w-md mx-auto space-y-4">
                                ${speakers.map(speaker => {
                                    const [name, title] = speaker.split('-').map(s => s.trim());
                                    return `
                                        <div class="p-4 bg-gray-50 rounded-lg text-center border border-gray-200">
                                            <div class="text-4xl mb-2">🎤</div>
                                            <div class="font-bold text-lg">${name || speaker}</div>
                                            ${title ? `<div class="text-sm text-gray-600 mt-1">${title}</div>` : ''}
                                        </div>
                                    `;
                                }).join('')}
                                ${speakers.length === 0 ? '<div class="text-center text-gray-500 text-sm">Add speakers to display</div>' : ''}
                            </div>
                        </div>
                    `;
                }
            };
