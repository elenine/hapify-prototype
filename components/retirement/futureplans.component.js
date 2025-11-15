// Future Plans Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.futureplans = {
    name: '🌅 Future Plans',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="What's Next" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Future Plans</label>
                <textarea placeholder="Travel plans, hobbies, spending time with family..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-data" data-field="plans" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="card">Card Style</option>
                    <option value="gradient">Gradient Background</option>
                    <option value="horizon">Horizon View</option>
                    <option value="boxed">Boxed Design</option>
                    <option value="quote">Quote Style</option>
                    <option value="journey">Journey Map</option>
                    <option value="vision">Vision Board</option>
                    <option value="postcard">Postcard Style</option>
                    <option value="dream">Dream Cloud</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#06b6d4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bgColor = style.bg || '#ffffff';
        const accentColor = style.accent || '#06b6d4';
        const textColor = style.text || '#1f2937';

        switch(layout) {
            case 'card':
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">🌅</div>
                            <h2 class="text-2xl font-bold mb-6">${data.title || "What's Next"}</h2>
                            <div class="p-6 rounded-lg text-left shadow-md" style="background: ${accentColor}20;">
                                <p class="leading-relaxed">${data.plans || 'Share your exciting retirement plans...'}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'gradient':
                return `
                    <div class="py-16 px-6 text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, ${accentColor}20 100%); color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="inline-block p-4 rounded-full mb-4" style="background: ${accentColor}30;">
                                <span class="text-5xl">🌅</span>
                            </div>
                            <h2 class="text-3xl font-bold mb-6">${data.title || "What's Next"}</h2>
                            <div class="bg-white rounded-xl shadow-xl p-6 text-left">
                                <p class="text-lg leading-relaxed">${data.plans || 'Share your exciting retirement plans...'}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'horizon':
                return `
                    <div class="relative py-16 px-6 overflow-hidden" style="background: linear-gradient(to bottom, ${accentColor}40 0%, ${bgColor} 50%); color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="mb-6">
                                <div class="text-6xl mb-2">🌅</div>
                                <div class="w-24 h-1 rounded-full mx-auto" style="background: ${accentColor};"></div>
                            </div>
                            <h2 class="text-2xl font-bold mb-6">${data.title || "The Next Chapter"}</h2>
                            <div class="bg-white rounded-lg shadow-lg p-6 text-left">
                                <p class="leading-relaxed">${data.plans || 'Share your exciting retirement plans...'}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'boxed':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="border-4 rounded-2xl p-8 text-center" style="border-color: ${accentColor};">
                                <div class="text-5xl mb-4">🌅</div>
                                <h2 class="text-2xl font-bold mb-2" style="color: ${accentColor};">${data.title || "Future Adventures"}</h2>
                                <div class="w-16 h-1 rounded-full mx-auto mb-6" style="background: ${accentColor};"></div>
                                <div class="text-left p-4 rounded-lg" style="background: ${accentColor}10;">
                                    <p class="leading-relaxed">${data.plans || 'Share your exciting retirement plans...'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'quote':
                return `
                    <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto text-center">
                            <div class="text-4xl mb-4">🌅</div>
                            <h2 class="text-2xl font-bold mb-8">${data.title || "Looking Forward"}</h2>
                            <div class="relative p-8 bg-white rounded-xl shadow-lg">
                                <div class="absolute top-4 left-4 text-6xl opacity-20" style="color: ${accentColor};">"</div>
                                <div class="relative z-10">
                                    <p class="text-lg font-serif italic leading-relaxed mb-4">${data.plans || 'Share your exciting retirement plans...'}</p>
                                </div>
                                <div class="absolute bottom-4 right-4 text-6xl opacity-20" style="color: ${accentColor};">"</div>
                            </div>
                        </div>
                    </div>
                `;

            default:
                return `
                    <div class="py-12 px-6 text-center" style="background: ${bgColor}; color: ${textColor};">
                        <div class="max-w-md mx-auto">
                            <div class="text-5xl mb-4">🌅</div>
                            <h2 class="text-2xl font-bold mb-6">${data.title || "What's Next"}</h2>
                            <div class="p-6 rounded-lg text-left" style="background: ${accentColor}20;">
                                <p class="leading-relaxed">${data.plans || 'Share your exciting retirement plans...'}</p>
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
