// Social Media Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.social = {
                name: '🔗 Social Media',
                allowMultiple: false,
                info: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Follow Us" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                            <input type="url" placeholder="https://facebook.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="facebook" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                            <input type="url" placeholder="https://instagram.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="instagram" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                            <input type="url" placeholder="https://linkedin.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="linkedin" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
                            <input type="url" placeholder="https://twitter.com/..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="twitter" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="circles">Circle Icons</option>
                                <option value="squares">Square Icons</option>
                                <option value="minimal">Minimal</option>
                                <option value="cards">Card Style</option>
                                <option value="buttons">Button Style</option>
                                <option value="gradient">Gradient Badges</option>
                                <option value="floating">Floating Icons</option>
                                <option value="badges">Badge Style</option>
                                <option value="stacked">Stacked Cards</option>
                                <option value="wave">Wave Pattern</option>
                                <option value="pills">Pill Buttons</option>
                                <option value="neon">Neon Style</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-full">Circle</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Shadow Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="shadow" onchange="updatePreview()">
                                <option value="sm">Subtle</option>
                                <option value="md">Medium</option>
                                <option value="lg">Bold</option>
                                <option value="xl">Extra Bold</option>
                                <option value="2xl">Dramatic</option>
                            </select>
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'circles';
                    const bgColor = style.bg || '#ffffff';
                    const shadow = style.shadow || 'md';
                    const shadowClass = `shadow-${shadow}`;
                    const radius = style.radius || 'rounded-lg';
                    const title = data.title || 'Follow Us';
                    const facebook = data.facebook || '';
                    const instagram = data.instagram || '';
                    const linkedin = data.linkedin || '';
                    const twitter = data.twitter || '';

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-6">${title}</h2>`;
                    const hasLinks = facebook || instagram || linkedin || twitter;

                    const socialLinks = [
                        { url: facebook, icon: 'f', color: '#1877F2', name: 'Facebook' },
                        { url: instagram, icon: '📷', color: '#E4405F', name: 'Instagram' },
                        { url: linkedin, icon: 'in', color: '#0A66C2', name: 'LinkedIn' },
                        { url: twitter, icon: '𝕏', color: '#000000', name: 'Twitter' }
                    ].filter(link => link.url);

                    switch(layout) {
                        case 'circles':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex justify-center gap-4 flex-wrap">
                                            ${socialLinks.map(link => `
                                                <a href="${link.url}" class="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition transform" style="background: ${link.color};">
                                                    ${link.icon}
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'squares':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex justify-center gap-3 flex-wrap">
                                            ${socialLinks.map(link => `
                                                <a href="${link.url}" class="w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg shadow-md hover:shadow-xl transition" style="background: ${link.color};">
                                                    ${link.icon}
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex justify-center gap-6 flex-wrap">
                                            ${socialLinks.map(link => `
                                                <a href="${link.url}" class="text-2xl hover:scale-125 transition transform" style="color: ${link.color};">
                                                    ${link.icon}
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="grid grid-cols-2 gap-3">
                                            ${socialLinks.map(link => `
                                                <a href="${link.url}" class="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center border-l-4" style="border-color: ${link.color};">
                                                    <div class="text-3xl mb-2">${link.icon}</div>
                                                    <div class="text-sm font-semibold">${link.name}</div>
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-center text-gray-500 text-sm mt-4">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'buttons':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="space-y-3">
                                            ${socialLinks.map(link => `
                                                <a href="${link.url}" class="flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition" style="background: ${link.color};">
                                                    <span class="text-xl">${link.icon}</span>
                                                    <span>Follow on ${link.name}</span>
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm mt-4">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex justify-center gap-3 flex-wrap">
                                            ${socialLinks.map((link, idx) => `
                                                <a href="${link.url}" class="w-14 h-14 ${radius} ${shadowClass} flex items-center justify-center text-white text-xl hover:scale-110 transition transform" style="background: linear-gradient(135deg, ${link.color}, ${link.color}dd);">
                                                    ${link.icon}
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm mt-4">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'floating':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex justify-center gap-4 flex-wrap">
                                            ${socialLinks.map((link, idx) => `
                                                <div class="relative">
                                                    <a href="${link.url}" class="flex items-center justify-center w-16 h-16 bg-white ${radius} ${shadowClass} hover:shadow-2xl transition transform hover:-translate-y-2" style="border: 3px solid ${link.color};">
                                                        <span class="text-2xl">${link.icon}</span>
                                                    </a>
                                                    <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full ${shadowClass}" style="background: ${link.color};"></div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm mt-4">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'badges':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="grid grid-cols-2 gap-4">
                                            ${socialLinks.map((link, idx) => `
                                                <a href="${link.url}" class="relative bg-white ${radius} ${shadowClass} p-5 hover:shadow-2xl transition group">
                                                    <div class="text-3xl mb-2 group-hover:scale-110 transition">${link.icon}</div>
                                                    <div class="font-semibold text-sm">${link.name}</div>
                                                    <div class="absolute top-0 right-0 w-full h-1 ${radius}" style="background: ${link.color};"></div>
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-center text-gray-500 text-sm mt-4">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'stacked':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="relative" style="min-height: ${socialLinks.length * 70 + 50}px;">
                                            ${socialLinks.map((link, idx) => `
                                                <div class="absolute left-0 right-0 transform hover:scale-105 hover:z-10 transition"
                                                     style="top: ${idx * 60}px; transform: rotate(${idx % 2 === 0 ? -2 : 2}deg);">
                                                    <a href="${link.url}" class="flex items-center gap-4 p-5 bg-white ${radius} ${shadowClass} border-l-4" style="border-color: ${link.color};">
                                                        <div class="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl ${shadowClass}" style="background: ${link.color};">
                                                            ${link.icon}
                                                        </div>
                                                        <div class="flex-1 text-left">
                                                            <div class="font-bold text-gray-800">${link.name}</div>
                                                            <div class="text-xs text-gray-500">Follow us here</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-center text-gray-500 text-sm">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'wave':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex justify-center items-end gap-2">
                                            ${socialLinks.map((link, idx) => {
                                                const heights = ['h-16', 'h-20', 'h-16', 'h-18'];
                                                return `
                                                <a href="${link.url}" class="relative flex items-center justify-center w-16 ${heights[idx % heights.length]} rounded-t-3xl ${shadowClass} hover:scale-110 transition transform" style="background: linear-gradient(to top, ${link.color}, ${link.color}dd);">
                                                    <span class="text-white text-2xl">${link.icon}</span>
                                                    <div class="absolute -bottom-6 text-xs font-semibold text-gray-600">${link.name}</div>
                                                </a>
                                            `}).join('')}
                                        </div>
                                        <div class="mt-8"></div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'pills':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex flex-wrap gap-2 justify-center">
                                            ${socialLinks.map((link, idx) => `
                                                <a href="${link.url}" class="inline-flex items-center gap-2 px-5 py-3 rounded-full ${shadowClass} hover:${shadowClass === 'shadow-xl' ? 'shadow-2xl' : 'shadow-xl'} transition transform hover:scale-105" style="background: ${link.color}; color: white;">
                                                    <span class="text-xl">${link.icon}</span>
                                                    <span class="font-semibold text-sm">${link.name}</span>
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-center text-gray-500 text-sm mt-4">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        case 'neon':
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex justify-center gap-4 flex-wrap">
                                            ${socialLinks.map((link, idx) => `
                                                <a href="${link.url}" class="relative group">
                                                    <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl transition transform group-hover:scale-110" style="background: ${link.color}; box-shadow: 0 0 20px ${link.color}80;">
                                                        ${link.icon}
                                                    </div>
                                                    <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition" style="box-shadow: 0 0 30px ${link.color}, 0 0 50px ${link.color}60;"></div>
                                                    <div class="text-xs font-semibold text-gray-700 mt-2 text-center">${link.name}</div>
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm mt-4">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;

                        default:
                            return `
                                <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                                    <div class="max-w-md mx-auto">
                                        ${headerHtml}
                                        <div class="flex justify-center gap-4">
                                            ${socialLinks.map(link => `
                                                <a href="${link.url}" class="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style="background: ${link.color};">
                                                    ${link.icon}
                                                </a>
                                            `).join('')}
                                        </div>
                                        ${!hasLinks ? '<p class="text-gray-500 text-sm">Add social media links</p>' : ''}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
