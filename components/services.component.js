// Services Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.services = {
                name: '⚙️ Services',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Our Services" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Services (one per line)</label>
                            <textarea placeholder="Web Development&#10;Mobile Apps&#10;Consulting&#10;Design Services" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="services" oninput="updatePreview()"></textarea>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const services = data.services ? data.services.split('\n').filter(s => s.trim()) : [];
                    return `
                        <div class="py-12 px-6" style="background: ${style.bg || '#eff6ff'}">
                            <h2 class="text-2xl font-bold text-center mb-8">${data.title || 'Our Services'}</h2>
                            <div class="max-w-md mx-auto space-y-3">
                                ${services.map(service => `
                                    <div class="flex items-center gap-3 p-4 bg-white rounded-lg">
                                        <div class="text-xl">✓</div>
                                        <div class="text-sm font-medium">${service}</div>
                                    </div>
                                `).join('')}
                                ${services.length === 0 ? '<div class="text-center text-gray-500 text-sm">Add services to display</div>' : ''}
                            </div>
                        </div>
                    `;
                }
            };
