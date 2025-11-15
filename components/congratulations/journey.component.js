// Journey component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.journey = {
    name: '🚀 Journey',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="Your Journey to Success" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="message" rows="4" placeholder="The path you've walked to reach this moment has been filled with dedication and perseverance..." onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="path">Path Style</option>
                    <option value="steps">Steps</option>
                    <option value="mountain">Mountain Climb</option>
                    <option value="timeline">Timeline</option>
                    <option value="roadmap">Roadmap</option>
                    <option value="gradient-flow">Gradient Flow</option>
                    <option value="milestone">Milestone</option>
                    <option value="journey-card">Journey Card</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="icon" onchange="updatePreview()">
                    <option value="🚀">🚀 Rocket</option>
                    <option value="⛰️">⛰️ Mountain</option>
                    <option value="🎯">🎯 Target</option>
                    <option value="🌟">🌟 Star</option>
                    <option value="🏃">🏃 Runner</option>
                    <option value="🛤️">🛤️ Railway</option>
                    <option value="📈">📈 Chart</option>
                    <option value="💪">💪 Strong</option>
                    <option value="">None</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const title = data.title || 'Your Journey to Success';
        const message = data.message || 'The path you\'ve walked to reach this moment has been filled with dedication and perseverance.';
        const layout = style.layout || 'path';
        const icon = style.icon || '🚀';

        if (layout === 'path') {
            return `
                <div class="p-6" style="background: linear-gradient(to bottom, transparent, ${globalStyles.primaryColor}10, transparent);">
                    <div class="max-w-2xl mx-auto text-center py-8">
                        ${icon ? `<div class="text-6xl mb-6">${icon}</div>` : ''}
                        <div class="relative">
                            <div class="absolute left-1/2 top-0 w-1 h-full -translate-x-1/2" style="background: linear-gradient(to bottom, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                            <div class="relative z-10 bg-white rounded-2xl shadow-xl p-8">
                                <h3 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${title}</h3>
                                <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'steps') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <div class="text-center mb-8">
                            ${icon ? `<div class="text-6xl mb-4">${icon}</div>` : ''}
                            <h3 class="text-3xl font-bold" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        </div>
                        <div class="relative pl-8">
                            <div class="absolute left-0 top-0 bottom-0 w-1" style="background: linear-gradient(to bottom, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                            <div class="space-y-6">
                                <div class="relative">
                                    <div class="absolute -left-10 top-0 w-6 h-6 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                                    <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'mountain') {
            return `
                <div class="p-6 relative overflow-hidden">
                    <div class="absolute bottom-0 left-0 right-0 h-32 opacity-10" style="background: linear-gradient(to top, ${globalStyles.primaryColor}, transparent);"></div>
                    <div class="max-w-2xl mx-auto text-center relative z-10 py-8">
                        ${icon ? `<div class="text-7xl mb-6">${icon}</div>` : ''}
                        <h3 class="text-4xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <p class="text-xl leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                        <div class="mt-8">
                            <svg class="mx-auto w-64 h-32" viewBox="0 0 200 80">
                                <path d="M 0,80 L 50,30 L 100,10 L 150,40 L 200,80 Z" fill="${globalStyles.primaryColor}" opacity="0.2"/>
                                <path d="M 0,80 L 50,30 L 100,10 L 150,40 L 200,80" stroke="${globalStyles.primaryColor}" stroke-width="2" fill="none"/>
                                <circle cx="100" cy="10" r="5" fill="${globalStyles.secondaryColor}"/>
                            </svg>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'timeline') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <div class="flex items-center gap-4 mb-6">
                            ${icon ? `<div class="text-5xl">${icon}</div>` : ''}
                            <h3 class="text-3xl font-bold" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        </div>
                        <div class="relative">
                            <div class="h-2 rounded-full mb-6" style="background: linear-gradient(to right, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                            <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'roadmap') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
                        <div class="text-center mb-6">
                            ${icon ? `<div class="text-6xl mb-4">${icon}</div>` : ''}
                            <h3 class="text-3xl font-bold" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        </div>
                        <div class="relative py-6">
                            <div class="flex justify-between items-center mb-6">
                                <div class="w-4 h-4 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                                <div class="flex-1 h-1 mx-2" style="background: ${globalStyles.primaryColor};"></div>
                                <div class="w-8 h-8 rounded-full flex items-center justify-center" style="background: ${globalStyles.secondaryColor};">
                                    <div class="text-white text-xl">✓</div>
                                </div>
                            </div>
                            <p class="text-lg leading-relaxed text-center" style="color: ${globalStyles.textColor};">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'gradient-flow') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                        <div class="p-10 text-white text-center">
                            ${icon ? `<div class="text-7xl mb-6">${icon}</div>` : ''}
                            <h3 class="text-4xl font-bold mb-6">${title}</h3>
                            <p class="text-xl leading-relaxed opacity-95">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'milestone') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <div class="flex items-start gap-6">
                            <div class="flex-shrink-0">
                                <div class="w-20 h-20 rounded-full flex items-center justify-center shadow-xl text-4xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor}); color: white;">
                                    ${icon || '🚀'}
                                </div>
                            </div>
                            <div class="flex-1 pt-2">
                                <h3 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${title}</h3>
                                <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'journey-card') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border-t-8 p-8" style="border-color: ${globalStyles.primaryColor};">
                        ${icon ? `<div class="text-6xl mb-6 text-center">${icon}</div>` : ''}
                        <h3 class="text-3xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <p class="text-lg leading-relaxed text-center" style="color: ${globalStyles.textColor};">${message}</p>
                        <div class="mt-6 flex justify-center gap-2">
                            <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                            <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.secondaryColor};"></div>
                            <div class="w-2 h-2 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            ${icon ? `<div class="text-5xl mb-3">${icon}</div>` : ''}
            <h3 class="text-2xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h3>
            <p class="text-lg" style="color: ${globalStyles.textColor};">${message}</p>
        </div>`;
    }
};
