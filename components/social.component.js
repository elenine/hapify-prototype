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
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                    </div>
                `,
                render: (data, style) => {
                    const layout = style.layout || 'circles';
                    const bgColor = style.bg || '#ffffff';
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
