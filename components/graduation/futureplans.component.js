// Future Plans Component for Graduation

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.futureplans = {
    name: '🚀 Future Plans',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="What's Next" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Future Plans</label>
                <textarea placeholder="Describe your plans after graduation..." rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 section-data" data-field="plans" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="card">Card</option>
                    <option value="timeline">Timeline</option>
                    <option value="featured">Featured</option>
                    <option value="split">Split Layout</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#eef2ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#6366f1" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'card';
        const bg = style.bg || '#eef2ff';
        const accent = style.accent || '#6366f1';

        switch(layout) {
            case 'timeline':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-3xl mx-auto">
                            <div class="text-center mb-12">
                                <div class="text-5xl mb-3">🚀</div>
                                <h2 class="text-2xl font-bold">${data.title || "What's Next"}</h2>
                            </div>
                            <div class="relative pl-8 border-l-4" style="border-color: ${accent}">
                                <div class="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center -ml-4" style="background: ${accent}">
                                    <div class="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div class="pb-8">
                                    <div class="bg-white rounded-xl p-6 shadow-md">
                                        <div class="flex items-center gap-2 mb-4">
                                            <div class="w-2 h-2 rounded-full" style="background: ${accent}"></div>
                                            <span class="text-sm font-semibold" style="color: ${accent}">The Journey Continues</span>
                                        </div>
                                        <p class="text-gray-700 leading-relaxed whitespace-pre-line">${data.plans || 'Share your exciting plans for the future...'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'featured':
                return `
                    <div class="py-16 px-6" style="background: linear-gradient(135deg, ${accent} 0%, ${accent}DD 100%)">
                        <div class="max-w-3xl mx-auto text-center text-white">
                            <div class="text-6xl mb-6">🚀</div>
                            <h2 class="text-4xl font-black mb-6">${data.title || "What's Next"}</h2>
                            <div class="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-8 max-w-2xl mx-auto">
                                <p class="text-lg leading-relaxed whitespace-pre-line">${data.plans || 'Share your exciting plans for the future...'}</p>
                            </div>
                        </div>
                    </div>
                `;

            case 'split':
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-4xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-8 items-center">
                                <div class="text-center md:text-left order-2 md:order-1">
                                    <div class="flex items-center justify-center md:justify-start mb-4">
                                        <div class="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style="background: ${accent}15">
                                            🚀
                                        </div>
                                    </div>
                                    <h2 class="text-3xl font-bold mb-2" style="color: ${accent}">${data.title || "What's Next"}</h2>
                                    <div class="h-1 w-16 rounded-full mb-4 mx-auto md:mx-0" style="background: ${accent}"></div>
                                </div>
                                <div class="order-1 md:order-2">
                                    <div class="bg-white rounded-2xl p-8 shadow-lg border-2" style="border-color: ${accent}30">
                                        <p class="text-gray-700 leading-relaxed whitespace-pre-line">${data.plans || 'Share your exciting plans for the future...'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            case 'card':
            default:
                return `
                    <div class="py-12 px-6" style="background: ${bg}">
                        <div class="max-w-md mx-auto">
                            <div class="text-center mb-6">
                                <div class="text-5xl mb-3">🚀</div>
                                <h2 class="text-2xl font-bold" style="color: ${accent}">${data.title || "What's Next"}</h2>
                            </div>
                            <div class="p-6 bg-white rounded-xl shadow-md border-l-4" style="border-color: ${accent}">
                                <p class="text-gray-700 leading-relaxed whitespace-pre-line">${data.plans || 'Share your exciting plans for the future...'}</p>
                            </div>
                        </div>
                    </div>
                `;
        }
    }
};
