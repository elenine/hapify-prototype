// Message Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.message = {
    name: '💬 Message',
    allowMultiple: true,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                <input type="text" placeholder="A Special Message" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="heading" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Your message here..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="centered">Centered Simple</option>
                    <option value="quote">Quote Style</option>
                    <option value="card">Card with Icon</option>
                    <option value="banner">Banner Style</option>
                    <option value="elegant">Elegant Frame</option>
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
        const heading = data.heading || 'A Special Message';
        const message = data.message || 'Your message here...';

        switch(layout) {
            case 'quote':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-3xl mx-auto text-center">
                            <div class="text-6xl mb-6" style="color: ${accentColor}40">"</div>
                            <h2 class="text-3xl font-serif font-bold mb-6" style="color: ${accentColor}">${heading}</h2>
                            <p class="text-xl text-gray-700 leading-relaxed font-serif italic">${message}</p>
                            <div class="h-1 w-24 mx-auto mt-8 rounded" style="background: ${accentColor}"></div>
                        </div>
                    </div>
                `;

            case 'card':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-2" style="border-color: ${accentColor}30">
                            <div class="text-center">
                                <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}20">
                                    <span class="text-4xl">💬</span>
                                </div>
                                <h2 class="text-2xl font-bold mb-4" style="color: ${accentColor}">${heading}</h2>
                                <p class="text-gray-700 leading-relaxed">${message}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'banner':
                return `
                    <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accentColor}15 0%, ${bgColor} 100%)">
                        <div class="max-w-4xl mx-auto">
                            <div class="text-center p-12 rounded-2xl" style="background: ${accentColor}08; border-left: 6px solid ${accentColor}">
                                <h2 class="text-4xl font-bold mb-6" style="color: ${accentColor}">${heading}</h2>
                                <p class="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">${message}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'elegant':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-3xl mx-auto relative">
                            <div class="absolute inset-0 border-4 rounded-2xl transform translate-x-2 translate-y-2" style="border-color: ${accentColor}20"></div>
                            <div class="relative bg-white p-10 rounded-2xl shadow-lg border-2" style="border-color: ${accentColor}">
                                <div class="text-center">
                                    <div class="inline-block mb-4">
                                        <div class="flex items-center gap-2">
                                            <div class="w-8 h-px" style="background: ${accentColor}"></div>
                                            <span class="text-3xl">💬</span>
                                            <div class="w-8 h-px" style="background: ${accentColor}"></div>
                                        </div>
                                    </div>
                                    <h2 class="text-3xl font-serif font-bold mb-6" style="color: ${accentColor}">${heading}</h2>
                                    <p class="text-lg text-gray-700 leading-relaxed">${message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}">
                        <div class="max-w-md mx-auto">
                            <h2 class="text-2xl font-bold mb-6">${heading}</h2>
                            <p class="text-gray-600 leading-relaxed">${message}</p>
                        </div>
                    </div>
                `;
        }
    }`
};
