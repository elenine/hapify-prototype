// Awards Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.awards = {
                name: '🏆 Awards',
                allowMultiple: false,
                info: (sectionId) => `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                            <input type="text" placeholder="Awards & Recognition" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
                        </div>
                        <div class="border-t pt-4 mt-4">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-medium text-gray-700">Awards</h4>
                                <button onclick="addDynamicItem('${sectionId}', 'awards', (id, num) => \`
                                    <div class='flex justify-between items-center mb-3'>
                                        <h5 class='font-medium text-gray-600'>Award \${num}</h5>
                                        <button onclick='removeDynamicItem(this)' class='text-red-600 hover:text-red-800 text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50'>✕ Remove</button>
                                    </div>
                                    <div class='space-y-3'>
                                        <input type='text' placeholder='Award Name' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-name-\${id}' oninput='updatePreview()'>
                                        <input type='text' placeholder='Year' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-year-\${id}' oninput='updatePreview()'>
                                        <textarea placeholder='Description...' rows='2' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data' data-field='award-desc-\${id}' oninput='updatePreview()'></textarea>
                                    </div>
                                \`); return false;" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Award</button>
                            </div>
                            <div data-items-container="awards"></div>
                        </div>
                    </div>
                `,
                style: `
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                                <option value="cards">Card List</option>
                                <option value="timeline">Timeline View</option>
                                <option value="grid">Grid View</option>
                                <option value="minimal">Minimal List</option>
                                <option value="featured">Featured Style</option>
                                <option value="gradient">Gradient Cards</option>
                                <option value="badge">Badge Style</option>
                                <option value="showcase">Showcase View</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                            <input type="color" value="#fffbeb" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                            <input type="color" value="#f59e0b" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <input type="color" value="#dc2626" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondary" oninput="updatePreview()">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
                            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="radius" onchange="updatePreview()">
                                <option value="rounded-lg">Medium</option>
                                <option value="rounded-xl">Large</option>
                                <option value="rounded-2xl">Extra Large</option>
                                <option value="rounded-none">Sharp</option>
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
                    const layout = style.layout || 'cards';
                    const bgColor = style.bg || '#fffbeb';
                    const accentColor = style.accent || '#f59e0b';
                    const secondaryColor = style.secondary || '#dc2626';
                    const shadow = style.shadow || 'md';
                    const shadowClass = `shadow-${shadow}`;
                    const radius = style.radius || 'rounded-lg';
                    const title = data.title || 'Awards & Recognition';

                    const awards = [];
                    Object.keys(data).forEach(key => {
                        const match = key.match(/^award-name-(.+)$/);
                        if (match) {
                            const id = match[1];
                            awards.push({
                                name: data[`award-name-${id}`],
                                year: data[`award-year-${id}`],
                                desc: data[`award-desc-${id}`]
                            });
                        }
                    });

                    const headerHtml = `<h2 class="text-2xl font-bold text-center mb-8">${title}</h2>`;

                    if (awards.length === 0) {
                        return `
                            <div class="py-12 px-6" style="background: ${bgColor}">
                                ${headerHtml}
                                <div class="text-center text-gray-500 text-sm">Add awards to display</div>
                            </div>
                        `;
                    }

                    switch(layout) {
                        case 'cards':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${awards.map(award => `
                                            <div class="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition flex items-start gap-4 border-l-4" style="border-color: ${accentColor};">
                                                <div class="text-4xl">🏆</div>
                                                <div class="flex-1">
                                                    <div class="flex items-baseline gap-2 mb-2">
                                                        <h3 class="text-base font-bold">${award.name || 'Award'}</h3>
                                                        <span class="text-xs font-semibold" style="color: ${accentColor};">${award.year || ''}</span>
                                                    </div>
                                                    ${award.desc ? `<p class="text-xs text-gray-600">${award.desc}</p>` : ''}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'timeline':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${awards.map((award, idx) => `
                                            <div class="flex gap-4">
                                                <div class="flex flex-col items-center">
                                                    <div class="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white flex-shrink-0" style="background: ${accentColor};">
                                                        🏆
                                                    </div>
                                                    ${idx < awards.length - 1 ? `<div class="w-0.5 flex-1 my-2" style="background: ${accentColor}40;"></div>` : ''}
                                                </div>
                                                <div class="flex-1 pb-6">
                                                    <div class="bg-white rounded-xl p-4 shadow-sm">
                                                        <div class="flex items-baseline gap-2 mb-2">
                                                            <h3 class="text-sm font-bold">${award.name || 'Award'}</h3>
                                                            <span class="text-xs font-semibold" style="color: ${accentColor};">${award.year || ''}</span>
                                                        </div>
                                                        ${award.desc ? `<p class="text-xs text-gray-600">${award.desc}</p>` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'grid':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-3">
                                        ${awards.map(award => `
                                            <div class="bg-white rounded-xl p-4 shadow-md text-center border-t-4" style="border-color: ${accentColor};">
                                                <div class="text-3xl mb-2">🏆</div>
                                                <div class="text-xs font-bold mb-1">${award.name || 'Award'}</div>
                                                <div class="text-xs font-semibold mb-2" style="color: ${accentColor};">${award.year || ''}</div>
                                                ${award.desc ? `<p class="text-xs text-gray-600 line-clamp-2">${award.desc}</p>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'minimal':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-3">
                                        ${awards.map(award => `
                                            <div class="border-l-4 pl-4 py-2" style="border-color: ${accentColor};">
                                                <div class="flex items-center gap-2 mb-1">
                                                    <span class="text-xl">🏆</span>
                                                    <h3 class="text-sm font-bold">${award.name || 'Award'}</h3>
                                                    <span class="text-xs font-semibold" style="color: ${accentColor};">${award.year || ''}</span>
                                                </div>
                                                ${award.desc ? `<p class="text-xs text-gray-600 pl-7">${award.desc}</p>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'featured':
                            const featured = awards[0];
                            const others = awards.slice(1);
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${featured ? `
                                            <div class="rounded-2xl p-6 shadow-xl text-center text-white" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                                <div class="text-5xl mb-3">🏆</div>
                                                <h3 class="text-lg font-bold mb-2">${featured.name || 'Award'}</h3>
                                                <div class="text-sm font-semibold mb-3 opacity-90">${featured.year || ''}</div>
                                                ${featured.desc ? `<p class="text-xs opacity-80">${featured.desc}</p>` : ''}
                                            </div>
                                        ` : ''}
                                        ${others.length > 0 ? `
                                            <div class="grid grid-cols-2 gap-3">
                                                ${others.map(award => `
                                                    <div class="bg-white rounded-xl p-4 shadow-sm text-center border-t-4" style="border-color: ${accentColor};">
                                                        <div class="text-2xl mb-2">🏆</div>
                                                        <div class="text-xs font-bold mb-1">${award.name || 'Award'}</div>
                                                        <div class="text-xs font-semibold" style="color: ${accentColor};">${award.year || ''}</div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;

                        case 'gradient':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${awards.map((award, idx) => {
                                            const isEven = idx % 2 === 0;
                                            const gradientColor = isEven ? `linear-gradient(135deg, ${accentColor}, ${secondaryColor})` : `linear-gradient(135deg, ${secondaryColor}, ${accentColor})`;
                                            return `
                                            <div class="${radius} ${shadowClass} overflow-hidden" style="background: ${gradientColor};">
                                                <div class="flex items-center gap-4 p-5">
                                                    <div class="text-4xl">🏆</div>
                                                    <div class="flex-1 text-white">
                                                        <h3 class="font-bold text-sm mb-1">${award.name || 'Award'}</h3>
                                                        <div class="text-xs opacity-90 font-semibold mb-2">${award.year || ''}</div>
                                                        ${award.desc ? `<p class="text-xs opacity-80">${award.desc}</p>` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        `}).join('')}
                                    </div>
                                </div>
                            `;

                        case 'badge':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${awards.map((award, idx) => `
                                            <div class="relative">
                                                <div class="bg-white ${radius} ${shadowClass} p-5 hover:shadow-2xl transition flex items-start gap-4">
                                                    <div class="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style="background: ${accentColor};">
                                                        ${idx + 1}
                                                    </div>
                                                    <div class="text-4xl mt-2">🏆</div>
                                                    <div class="flex-1">
                                                        <h3 class="font-bold text-sm mb-1">${award.name || 'Award'}</h3>
                                                        <div class="text-xs font-semibold mb-2" style="color: ${accentColor};">${award.year || ''}</div>
                                                        ${award.desc ? `<p class="text-xs text-gray-600">${award.desc}</p>` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;

                        case 'showcase':
                            return `
                                <div class="py-12 px-6" style="background: ${bgColor}">
                                    ${headerHtml}
                                    <div class="max-w-md mx-auto grid grid-cols-2 gap-4">
                                        ${awards.map((award, idx) => {
                                            const isEven = idx % 2 === 0;
                                            const color = isEven ? accentColor : secondaryColor;
                                            return `
                                            <div class="relative">
                                                <div class="bg-white ${radius} ${shadowClass} p-5 text-center hover:shadow-2xl transition">
                                                    <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style="background: ${color};">
                                                        🏆
                                                    </div>
                                                    <div class="text-3xl mb-3 opacity-50">🏆</div>
                                                    <h3 class="text-xs font-bold mb-1">${award.name || 'Award'}</h3>
                                                    <div class="text-xs font-semibold" style="color: ${color};">${award.year || ''}</div>
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
                                    <div class="max-w-md mx-auto space-y-4">
                                        ${awards.map(award => `
                                            <div class="bg-white rounded-xl p-5 shadow-md flex items-start gap-4">
                                                <div class="text-4xl">🏆</div>
                                                <div class="flex-1">
                                                    <div class="flex items-baseline gap-2 mb-2">
                                                        <h3 class="text-base font-bold">${award.name || 'Award'}</h3>
                                                        <span class="text-xs font-semibold">${award.year || ''}</span>
                                                    </div>
                                                    ${award.desc ? `<p class="text-xs text-gray-600">${award.desc}</p>` : ''}
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                    }
                }
            };
