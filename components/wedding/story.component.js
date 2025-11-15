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
                    <option value="letter">Love Letter</option>
                    <option value="polaroid-story">Polaroid Memory</option>
                    <option value="chapter">Chapter Book</option>
                    <option value="scroll">Decorative Scroll</option>
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

            case 'letter':
                return `
                    <div class="py-16 px-6" style="background: linear-gradient(to bottom, ${bgColor}, ${accentColor}10);">
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-white rounded-lg shadow-2xl p-10 transform -rotate-1 hover:rotate-0 transition-transform" style="background-image: linear-gradient(#f9fafb 1px, transparent 1px); background-size: 100% 30px; background-position: 0 10px;">
                                <div class="mb-6 flex items-center gap-3">
                                    <div class="text-4xl" style="color: ${accentColor};">💌</div>
                                    <h2 class="text-3xl font-handwriting" style="color: ${accentColor};">${title}</h2>
                                </div>
                                <p class="text-gray-700 leading-loose text-lg font-serif italic mb-8">${story}</p>
                                <div class="text-right text-3xl" style="color: ${accentColor};">💕</div>
                            </div>
                        </div>
                    </div>
                `;

            case 'polaroid-story':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-xl mx-auto">
                            <div class="bg-white p-5 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                                <div class="bg-gradient-to-br from-purple-100 to-pink-100 h-64 flex items-center justify-center mb-4">
                                    <div class="text-center">
                                        <div class="text-7xl mb-4">💕</div>
                                        <h2 class="text-2xl font-bold" style="color: ${accentColor};">${title}</h2>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <p class="text-gray-700 leading-relaxed font-handwriting">${story}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'chapter':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-12">
                            <div class="text-center mb-8">
                                <div class="inline-block">
                                    <div class="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Chapter One</div>
                                    <div class="h-px w-full" style="background: ${accentColor}30;"></div>
                                    <h2 class="text-4xl font-serif font-bold mt-4 mb-2" style="color: ${accentColor};">${title}</h2>
                                    <div class="h-px w-full" style="background: ${accentColor}30;"></div>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="text-8xl font-serif leading-none" style="color: ${accentColor}30; margin-top: -10px;">"</div>
                                <p class="text-gray-700 leading-relaxed text-lg font-serif flex-1 pt-4">${story}</p>
                                <div class="text-8xl font-serif leading-none self-end" style="color: ${accentColor}30; margin-bottom: -30px;">"</div>
                            </div>
                            <div class="text-center mt-8">
                                <div class="inline-block text-4xl" style="color: ${accentColor};">💕</div>
                            </div>
                        </div>
                    </div>
                `;

            case 'scroll':
                return `
                    <div class="py-16 px-6" style="background: ${bgColor}">
                        <div class="max-w-2xl mx-auto">
                            <div class="relative bg-amber-50 rounded-3xl shadow-2xl p-10" style="border: 4px solid ${accentColor}30;">
                                <!-- Decorative corners -->
                                <div class="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4" style="border-color: ${accentColor}40;"></div>
                                <div class="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4" style="border-color: ${accentColor}40;"></div>
                                <div class="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4" style="border-color: ${accentColor}40;"></div>
                                <div class="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4" style="border-color: ${accentColor}40;"></div>

                                <div class="text-center mb-8">
                                    <div class="text-5xl mb-3">✨</div>
                                    <h2 class="text-3xl font-serif font-bold" style="color: ${accentColor};">${title}</h2>
                                    <div class="flex items-center justify-center gap-2 mt-3">
                                        <div class="h-px w-12" style="background: ${accentColor};"></div>
                                        <span style="color: ${accentColor};">💕</span>
                                        <div class="h-px w-12" style="background: ${accentColor};"></div>
                                    </div>
                                </div>
                                <p class="text-gray-700 leading-relaxed text-center font-serif">${story}</p>
                                <div class="text-center mt-6 text-3xl">✨</div>
                            </div>
                        </div>
                    </div>
                `;

            case 'centered':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}">
                        <div class="max-w-2xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
                            <div class="text-4xl mb-4" style="color: ${accentColor};">💕</div>
                            <h2 class="text-3xl font-bold mb-6" style="color: ${accentColor};">${title}</h2>
                            <p class="text-gray-600 leading-relaxed text-lg">${story}</p>
                        </div>
                    </div>
                `;
        }
    }`
};
