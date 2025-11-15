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
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="list">List View</option>
                                <option value="grid">Grid Cards</option>
                                <option value="minimal">Minimal</option>
                                <option value="numbered">Numbered List</option>
                                <option value="icons">Icon Cards</option>
                                <option value="gradient-cards">Gradient Cards</option>
                                <option value="stacked">Stacked Overlapping</option>
                                <option value="timeline">Timeline View</option>
                                <option value="floating">Floating Pills</option>
                                <option value="modern-split">Modern Split Cards</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#eff6ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#3b82f6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'list';
                    const bgColor = style.bg || '#eff6ff';
                    const accentColor = style.accent || '#3b82f6';
                    const title = data.title || 'Our Services';
                    const services = data.services ? data.services.split('\n').filter(s => s.trim()) : [];

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    if (services.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                ${headerHtml}
                                <div class="text-center text-gray-500 text-sm">Add services to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'list':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${services.map(service => `
                                            <div class="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                                                <div class="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style="background: ${accentColor};">✓</div>
                                                <div class="text-sm font-medium">${service}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${services.map(service => `
                                            <div class="bg-white rounded-xl p-4 shadow-md text-center border-t-4" style="border-color: ${accentColor};">
                                                <div class="text-2xl mb-2">⚙️</div>
                                                <div class="text-sm font-semibold">${service}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-2">
                                        ${services.map(service => `
                                            <div class="flex items-center justify-between border-b border-gray-200 pb-2">
                                                <div class="text-sm font-medium">${service}</div>
                                                <div class="text-lg" style="color: ${accentColor};">⚙️</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'numbered':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${services.map((service, index) => `
                                            <div class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                                                <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: ${accentColor};">
                                                    ${index + 1}
                                                </div>
                                                <div class="flex-1">
                                                    <div class="text-sm font-medium">${service}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'icons':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${services.map(service => `
                                            <div class="bg-white rounded-xl p-5 shadow-lg">
                                                <div class="flex items-center gap-4">
                                                    <div class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl text-white" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}cc);">
                                                        ⚙️
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="font-semibold">${service}</div>
                                                        <div class="text-xs text-gray-500 mt-1">Professional service</div>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'gradient-cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${services.map((service, index) => {
                                            const gradients = [
                                                `linear-gradient(135deg, ${accentColor}20, ${accentColor}40)`,
                                                `linear-gradient(135deg, ${accentColor}30, ${accentColor}50)`,
                                                `linear-gradient(135deg, ${accentColor}25, ${accentColor}45)`,
                                                `linear-gradient(135deg, ${accentColor}35, ${accentColor}55)`
                                            ];
                                            return `
                                            <div class="relative rounded-2xl p-6 shadow-lg overflow-hidden" style="background: ${gradients[index % gradients.length]};">
                                                <div class="absolute top-0 right-0 text-6xl opacity-10 -mt-2 -mr-2">⚙️</div>
                                                <div class="relative">
                                                    <div class="flex items-center gap-3 mb-2">
                                                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-lg" style="background: ${accentColor}; color: white;">
                                                            ✓
                                                        </div>
                                                        <div class="flex-1 font-bold text-gray-800">${service}</div>
                                                    </div>
                                                    <p class="text-xs text-gray-600 ml-13">Expert ${service.toLowerCase()} solutions</p>
                                                </div>
                                            </div>
                                        `}).join('')}
                                    </div>
                                </div>
                            `;

                        case 'stacked':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto relative" style="padding-top: ${services.length * 20}px;">
                                        ${services.map((service, index) => `
                                            <div class="absolute left-0 right-0 bg-white rounded-2xl p-5 shadow-xl border-2"
                                                 style="top: ${index * 60}px; border-color: ${accentColor}30; transform: rotate(${index % 2 === 0 ? -1 : 1}deg);">
                                                <div class="flex items-center justify-between">
                                                    <div>
                                                        <div class="font-bold text-gray-800">${service}</div>
                                                        <div class="text-xs text-gray-500 mt-1">Service #${index + 1}</div>
                                                    </div>
                                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style="background: ${accentColor}20;">
                                                        ⚙️
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                        <div style="padding-bottom: ${services.length * 60}px;"></div>
                                    </div>
                                </div>
                            `;

                        case 'timeline':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="relative pl-10">
                                            <div class="absolute left-4 top-0 bottom-0 w-1 rounded-full" style="background: linear-gradient(to bottom, ${accentColor}, ${accentColor}50);"></div>
                                            <div class="space-y-6">
                                                ${services.map((service, index) => `
                                                    <div class="relative">
                                                        <div class="absolute left-[-2.5rem] top-2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-sm font-bold" style="background: ${accentColor}; color: white;">
                                                            ${index + 1}
                                                        </div>
                                                        <div class="bg-white rounded-xl p-5 shadow-md ml-2 border-l-4" style="border-color: ${accentColor};">
                                                            <div class="flex items-center gap-3">
                                                                <div class="flex-1">
                                                                    <div class="font-bold text-gray-800 mb-1">${service}</div>
                                                                    <div class="text-xs text-gray-500">Professional service offering</div>
                                                                </div>
                                                                <div class="text-2xl">⚙️</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto">
                                        <div class="flex flex-wrap gap-3 justify-center">
                                            ${services.map((service, index) => {
                                                const sizes = ['text-sm px-5 py-3', 'text-base px-6 py-4', 'text-xs px-4 py-2'];
                                                const shadows = ['shadow-md', 'shadow-lg', 'shadow-xl'];
                                                return `
                                                <div class="rounded-full ${sizes[index % 3]} ${shadows[index % 3]} font-semibold transition-transform hover:scale-105"
                                                     style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd); color: white;">
                                                    ⚙️ ${service}
                                                </div>
                                            `}).join('')}
                                        </div>
                                        <div class="mt-8 text-center">
                                            <p class="text-xs text-gray-500">✨ All services professionally delivered</p>
                                        </div>
                                    </div>
                                </div>
                            `;

                        case 'modern-split':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${services.map((service, index) => {
                                            const isEven = index % 2 === 0;
                                            return `
                                            <div class="flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-3">
                                                <div class="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}cc); color: white;">
                                                    ⚙️
                                                </div>
                                                <div class="flex-1 bg-white rounded-xl p-4 shadow-md ${isEven ? 'text-left' : 'text-right'}">
                                                    <div class="font-bold text-gray-800">${service}</div>
                                                    <div class="text-xs text-gray-500 mt-1">Professional service</div>
                                                </div>
                                            </div>
                                        `}).join('')}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${services.map(service => `
                                            <div class="flex items-center gap-3 p-4 bg-white rounded-lg">
                                                <div class="text-xl">✓</div>
                                                <div class="text-sm font-medium">${service}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
