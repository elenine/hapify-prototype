// Future Wishes component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.futureWishes = {
    name: '🌟 Future Wishes',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="heading" placeholder="Wishing You Continued Success" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wishes Message</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="message" rows="4" placeholder="May this achievement be just the beginning of even greater successes in your future..." onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="starry">Starry Wishes</option>
                    <option value="horizon">New Horizon</option>
                    <option value="radiant">Radiant Future</option>
                    <option value="pathway">Future Pathway</option>
                    <option value="dreamcard">Dream Card</option>
                    <option value="upward">Upward Journey</option>
                    <option value="bright">Bright Future</option>
                    <option value="inspiring">Inspiring</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="icon" onchange="updatePreview()">
                    <option value="🌟">🌟 Star</option>
                    <option value="✨">✨ Sparkles</option>
                    <option value="🚀">🚀 Rocket</option>
                    <option value="🌠">🌠 Shooting Star</option>
                    <option value="💫">💫 Dizzy</option>
                    <option value="🎯">🎯 Target</option>
                    <option value="🌈">🌈 Rainbow</option>
                    <option value="🔮">🔮 Crystal Ball</option>
                    <option value="">None</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const heading = data.heading || 'Wishing You Continued Success';
        const message = data.message || 'May this achievement be just the beginning of even greater successes in your future.';
        const layout = style.layout || 'starry';
        const icon = style.icon || '🌟';

        if (layout === 'starry') {
            return `
                <div class="p-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}20, ${globalStyles.secondaryColor}20);">
                    <div class="absolute inset-0 overflow-hidden opacity-20">
                        <div class="absolute top-10 left-10 text-4xl">⭐</div>
                        <div class="absolute top-20 right-20 text-3xl">✨</div>
                        <div class="absolute bottom-20 left-20 text-5xl">🌟</div>
                        <div class="absolute bottom-10 right-10 text-4xl">💫</div>
                        <div class="absolute top-1/2 left-1/3 text-3xl">🌠</div>
                    </div>
                    <div class="max-w-2xl mx-auto text-center relative z-10 py-8">
                        ${icon ? `<div class="text-6xl mb-6">${icon}</div>` : ''}
                        <h3 class="text-4xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${heading}</h3>
                        <p class="text-xl leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                    </div>
                </div>
            `;
        } else if (layout === 'horizon') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
                        <div class="relative h-64" style="background: linear-gradient(to bottom, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            ${icon ? `<div class="absolute top-8 right-8 text-7xl">${icon}</div>` : ''}
                            <div class="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent opacity-30"></div>
                        </div>
                        <div class="bg-white p-8 text-center">
                            <h3 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${heading}</h3>
                            <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'radiant') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                        <div class="p-12 text-center text-white">
                            ${icon ? `<div class="text-7xl mb-6">${icon}</div>` : ''}
                            <h3 class="text-4xl font-bold mb-6">${heading}</h3>
                            <p class="text-xl leading-relaxed opacity-95">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'pathway') {
            return `
                <div class="p-6">
                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-8">
                            ${icon ? `<div class="text-6xl mb-4">${icon}</div>` : ''}
                            <h3 class="text-4xl font-bold" style="color: ${globalStyles.primaryColor};">${heading}</h3>
                        </div>
                        <div class="relative">
                            <svg class="w-full h-24 mb-6" viewBox="0 0 400 80">
                                <defs>
                                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:${globalStyles.primaryColor};stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:${globalStyles.secondaryColor};stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                                <path d="M 0,40 Q 100,10 200,40 T 400,40" stroke="url(#pathGradient)" stroke-width="4" fill="none" stroke-dasharray="8,4"/>
                                <circle cx="0" cy="40" r="6" fill="${globalStyles.primaryColor}"/>
                                <circle cx="400" cy="40" r="8" fill="${globalStyles.secondaryColor}"/>
                            </svg>
                            <p class="text-xl leading-relaxed text-center" style="color: ${globalStyles.textColor};">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'dreamcard') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-4" style="border-color: ${globalStyles.primaryColor};">
                        <div class="text-center">
                            ${icon ? `<div class="text-6xl mb-6">${icon}</div>` : ''}
                            <h3 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${heading}</h3>
                            <div class="border-t-2 border-b-2 py-6 my-6" style="border-color: ${globalStyles.secondaryColor};">
                                <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                            </div>
                            <div class="flex justify-center gap-2 mt-4">
                                <div class="w-3 h-3 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                                <div class="w-3 h-3 rounded-full" style="background: ${globalStyles.secondaryColor};"></div>
                                <div class="w-3 h-3 rounded-full" style="background: ${globalStyles.primaryColor};"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'upward') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto text-center py-8">
                        ${icon ? `<div class="text-7xl mb-6 animate-pulse-slow">${icon}</div>` : ''}
                        <h3 class="text-4xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${heading}</h3>
                        <div class="relative py-6">
                            <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-${globalStyles.primaryColor} to-${globalStyles.secondaryColor}" style="background: linear-gradient(to bottom, transparent, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor}); transform: translateX(-50%);"></div>
                            <p class="text-xl leading-relaxed relative z-10 bg-white px-6" style="color: ${globalStyles.textColor};">${message}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'bright') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <div class="p-2 rounded-3xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            <div class="bg-white rounded-2xl p-10 text-center">
                                ${icon ? `<div class="text-6xl mb-6">${icon}</div>` : ''}
                                <h3 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${heading}</h3>
                                <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'inspiring') {
            return `
                <div class="p-6" style="background: linear-gradient(to bottom, transparent, ${globalStyles.primaryColor}10, transparent);">
                    <div class="max-w-2xl mx-auto text-center py-10">
                        <h3 class="text-5xl font-light mb-8 tracking-wide" style="color: ${globalStyles.primaryColor};">${heading}</h3>
                        ${icon ? `<div class="text-6xl mb-8 opacity-70">${icon}</div>` : ''}
                        <p class="text-xl leading-relaxed font-light" style="color: ${globalStyles.textColor};">${message}</p>
                        <div class="mt-8 h-1 w-32 mx-auto" style="background: linear-gradient(to right, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});"></div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            ${icon ? `<div class="text-5xl mb-4">${icon}</div>` : ''}
            <h3 class="text-2xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${heading}</h3>
            <p class="text-lg" style="color: ${globalStyles.textColor};">${message}</p>
        </div>`;
    }
};
