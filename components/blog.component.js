// Blog/News Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.blog = {
    name: '📝 Blog/News',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Latest News" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="title" value="Latest News" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>
                <input type="text" placeholder="Stay updated with our latest articles" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Blog Posts</label>
                <div data-items-container="blogPosts" class="space-y-4">
                    <!-- Dynamic blog posts will be added here -->
                </div>
                <button type="button" onclick="addDynamicItem('${sectionId}', 'blogPosts')" class="mt-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                    + Add Blog Post
                </button>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card Background</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const posts = Array.from(document.querySelectorAll(`[data-items-container="blogPosts"] .dynamic-item`)).map(item => ({
            title: item.querySelector('[data-field="postTitle"]')?.value || '',
            date: item.querySelector('[data-field="postDate"]')?.value || '',
            excerpt: item.querySelector('[data-field="postExcerpt"]')?.value || '',
            link: item.querySelector('[data-field="postLink"]')?.value || '#'
        }));

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#f9fafb'}; color: ${style.text || '#1f2937'};">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold mb-2 text-center">${data.title || 'Latest News'}</h2>
                    ${data.subtitle ? `<p class="text-center text-gray-600 mb-8">${data.subtitle}</p>` : ''}
                    <div class="grid gap-6 md:grid-cols-2">
                        ${posts.length > 0 ? posts.map(post => `
                            <div class="rounded-lg p-6 shadow-sm" style="background: ${style.cardBg || '#ffffff'};">
                                <div class="text-sm text-gray-500 mb-2">${post.date}</div>
                                <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
                                <p class="text-gray-600 mb-3">${post.excerpt}</p>
                                <a href="${post.link}" class="text-blue-600 font-medium hover:underline">Read more →</a>
                            </div>
                        `).join('') : '<p class="text-center text-gray-500">No blog posts added yet</p>'}
                    </div>
                </div>
            </div>
        `;
    }
};
