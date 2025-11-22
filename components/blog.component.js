// Blog/News Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.blog = {
    name: '📝 Blog & News',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Latest News" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea placeholder="Stay updated with our latest articles..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="description" oninput="updatePreview()"></textarea>
            </div>
            <div class="border-t pt-4 mt-4">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-medium text-gray-700">Blog Posts</h4>
                    <button onclick="addDynamicItem('${sectionId}', 'blog'); return false;" type="button" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">+ Add Post</button>
                </div>
                <div data-items-container="blog"></div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="cards">Cards</option>
                    <option value="modern">Modern</option>
                    <option value="magazine">Magazine</option>
                    <option value="minimal">Minimal</option>
                    <option value="featured">Featured</option>
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
        const layout = style.layout || 'cards';
        const bgColor = style.bg || '#eff6ff';
        const accentColor = style.accent || '#3b82f6';
        const title = data.title || 'Latest News';
        const description = data.description || '';

        const blogPosts = [];
        Object.keys(data).forEach(key => {
            const match = key.match(/^blog-title-(.+)$/);
            if (match) {
                const id = match[1];
                blogPosts.push({
                    title: data[`blog-title-${id}`],
                    excerpt: data[`blog-excerpt-${id}`],
                    date: data[`blog-date-${id}`],
                    category: data[`blog-category-${id}`]
                });
            }
        });

        const headerHtml = `
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold mb-2">${title}</h2>
                ${description ? `<p class="text-sm text-gray-600">${description}</p>` : ''}
            </div>
        `;

        if (blogPosts.length === 0) {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}">
                    ${headerHtml}
                    <div class="text-center text-gray-500 text-sm">Add blog posts to display</div>
                </div>
            `;
        }

        switch(layout) {
            case 'cards':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${blogPosts.map(post => `
                                <div class="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition">
                                    ${post.category ? `<div class="inline-block px-2 py-1 rounded text-xs font-bold text-white mb-2" style="background: ${accentColor};">${post.category}</div>` : ''}
                                    <h3 class="text-sm font-bold mb-2">${post.title || 'Blog Post'}</h3>
                                    ${post.excerpt ? `<p class="text-xs text-gray-600 mb-2">${post.excerpt}</p>` : ''}
                                    ${post.date ? `<div class="text-xs text-gray-500">📅 ${post.date}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'modern':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${blogPosts.map(post => `
                                <div class="rounded-xl overflow-hidden shadow-lg" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                    <div class="p-5 text-white">
                                        <div class="flex items-center gap-2 mb-2">
                                            ${post.category ? `<span class="bg-white/20 px-2 py-1 rounded text-xs font-bold">${post.category}</span>` : ''}
                                            ${post.date ? `<span class="text-xs opacity-90 ml-auto">${post.date}</span>` : ''}
                                        </div>
                                        <h3 class="text-sm font-bold mb-2">${post.title || 'Blog Post'}</h3>
                                        ${post.excerpt ? `<p class="text-xs opacity-90">${post.excerpt}</p>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'magazine':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${blogPosts.map(post => `
                                <div class="bg-white rounded-lg p-5 shadow-md border-l-4" style="border-color: ${accentColor};">
                                    <div class="flex items-center gap-2 mb-2">
                                        <div class="text-2xl">📝</div>
                                        ${post.category ? `<span class="text-xs font-bold" style="color: ${accentColor};">${post.category}</span>` : ''}
                                        ${post.date ? `<span class="text-xs text-gray-500 ml-auto">${post.date}</span>` : ''}
                                    </div>
                                    <h3 class="text-sm font-bold mb-2">${post.title || 'Blog Post'}</h3>
                                    ${post.excerpt ? `<p class="text-xs text-gray-600">${post.excerpt}</p>` : ''}
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
                            ${blogPosts.map(post => `
                                <div class="border-l-4 pl-4 py-2" style="border-color: ${accentColor};">
                                    <div class="flex items-center gap-2 mb-1">
                                        ${post.category ? `<span class="text-xs font-bold" style="color: ${accentColor};">${post.category}</span>` : ''}
                                        ${post.date ? `<span class="text-xs text-gray-500 ml-auto">${post.date}</span>` : ''}
                                    </div>
                                    <h3 class="text-sm font-bold mb-1">${post.title || 'Blog Post'}</h3>
                                    ${post.excerpt ? `<p class="text-xs text-gray-600">${post.excerpt}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'featured':
                const featured = blogPosts[0];
                const others = blogPosts.slice(1);
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-4">
                            ${featured ? `
                                <div class="rounded-xl overflow-hidden shadow-xl" style="background: linear-gradient(135deg, ${accentColor}, ${accentColor}dd);">
                                    <div class="p-6 text-white">
                                        <div class="flex items-center gap-2 mb-3">
                                            ${featured.category ? `<span class="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">${featured.category}</span>` : ''}
                                            ${featured.date ? `<span class="text-xs opacity-90 ml-auto">${featured.date}</span>` : ''}
                                        </div>
                                        <h3 class="text-base font-bold mb-3">${featured.title || 'Blog Post'}</h3>
                                        ${featured.excerpt ? `<p class="text-sm opacity-90">${featured.excerpt}</p>` : ''}
                                    </div>
                                </div>
                            ` : ''}
                            ${others.length > 0 ? `
                                <div class="space-y-2">
                                    ${others.map(post => `
                                        <div class="bg-white rounded-lg p-4 shadow-sm">
                                            <div class="flex items-center gap-2 mb-1">
                                                ${post.category ? `<span class="text-xs font-bold" style="color: ${accentColor};">${post.category}</span>` : ''}
                                                ${post.date ? `<span class="text-xs text-gray-500 ml-auto">${post.date}</span>` : ''}
                                            </div>
                                            <h3 class="text-sm font-bold">${post.title || 'Blog Post'}</h3>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        ${headerHtml}
                        <div class="max-w-md mx-auto space-y-3">
                            ${blogPosts.map(post => `
                                <div class="bg-white rounded-lg p-4 shadow-md">
                                    ${post.category ? `<div class="text-xs font-bold mb-1" style="color: ${accentColor};">${post.category}</div>` : ''}
                                    <h3 class="text-sm font-bold mb-1">${post.title || 'Blog Post'}</h3>
                                    ${post.excerpt ? `<p class="text-xs text-gray-600 mb-1">${post.excerpt}</p>` : ''}
                                    ${post.date ? `<p class="text-xs text-gray-500">${post.date}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
        }
    }
};
