// Our Story Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.story = {
    name: '💕 Our Story',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Our Love Story" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Story</label>
                <textarea placeholder="Share your beautiful journey..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="story" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="book">Book Style</option>
                    <option value="timeline">Timeline Story</option>
                    <option value="quote">Elegant Quote</option>
                    <option value="card">Card with Border</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#9333ea" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#9333ea';
        const title = data.title || 'Our Story';
        const story = data.story || 'Share your beautiful journey together...';

        switch(layout) {
            case 'book':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8" style="border-left: 6px solid ${accentColor}">
                            <div class="text-5xl mb-4" style="color: ${accentColor}">💕</div>
                            <h2 class="text-3xl font-serif font-bold mb-6" style="color: ${accentColor}">${title}</h2>
                            <p class="text-gray-700 leading-relaxed text-lg font-serif">${story}</p>
                        </div>
                    </div>
                `;

            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-3xl mx-auto relative">
                            <div class="absolute left-4 top-0 bottom-0 w-1" style="background: ${accentColor}30"></div>
                            <div class="relative pl-12">
                                <div class="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center" style="background: ${accentColor}; color: white; top: 4px;">
                                    💕
                                </div>
                                <h2 class="text-2xl font-bold mb-4" style="color: ${accentColor}">${title}</h2>
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <p class="text-gray-700 leading-relaxed">${story}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'quote':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-3xl mx-auto text-center">
                            <div class="text-6xl mb-6" style="color: ${accentColor}30">"</div>
                            <h2 class="text-3xl font-serif font-bold mb-8" style="color: ${accentColor}">${title}</h2>
                            <p class="text-xl text-gray-700 leading-relaxed font-serif italic mb-6">${story}</p>
                            <div class="h-1 w-20 mx-auto rounded" style="background: ${accentColor}"></div>
                            <div class="text-6xl mt-4" style="color: ${accentColor}30">"</div>
                        </div>
                    </div>
                `;

            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-2xl mx-auto">
                            <div class="border-4 rounded-2xl p-8 bg-white shadow-xl" style="border-color: ${accentColor}30">
                                <div class="text-center mb-6">
                                    <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}20">
                                        <span class="text-4xl">💕</span>
                                    </div>
                                    <h2 class="text-3xl font-bold" style="color: ${accentColor}">${title}</h2>
                                </div>
                                <p class="text-gray-700 leading-relaxed text-center">${story}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-md mx-auto text-center">
                            <h2 class="text-2xl font-bold mb-6">${title}</h2>
                            <p class="text-gray-600 leading-relaxed">${story}</p>
                        </div>
                    </div>
                `;
        }
    }`
};
