// Celebration component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.celebration = {
    name: '🎊 Celebration',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Celebration Message</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="message" rows="3" placeholder="Let's celebrate this incredible achievement together!" onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Details (Optional)</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="details" rows="2" placeholder="Join us for a celebration party on Saturday at 7 PM" onchange="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="party">Party Mode</option>
                    <option value="festive">Festive</option>
                    <option value="balloons">Balloons</option>
                    <option value="fireworks">Fireworks</option>
                    <option value="confetti-rain">Confetti Rain</option>
                    <option value="banner-celebration">Banner</option>
                    <option value="joyful">Joyful</option>
                    <option value="cheers">Cheers</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="theme" onchange="updatePreview()">
                    <option value="energetic">Energetic</option>
                    <option value="elegant">Elegant</option>
                    <option value="playful">Playful</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const message = data.message || 'Let\'s celebrate this incredible achievement together!';
        const details = data.details || '';
        const layout = style.layout || 'party';
        const theme = style.theme || 'energetic';

        if (layout === 'party') {
            return `
                <div class="p-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                    <div class="absolute inset-0 overflow-hidden opacity-20 text-white">
                        <div class="absolute top-5 left-10 text-6xl">🎉</div>
                        <div class="absolute top-10 right-10 text-5xl">🎊</div>
                        <div class="absolute bottom-10 left-20 text-6xl">🥳</div>
                        <div class="absolute bottom-5 right-20 text-5xl">🎈</div>
                        <div class="absolute top-1/2 left-1/2 text-7xl transform -translate-x-1/2 -translate-y-1/2">🎉</div>
                    </div>
                    <div class="max-w-2xl mx-auto text-center relative z-10 py-12 text-white">
                        <div class="text-8xl mb-6">🎊</div>
                        <h3 class="text-4xl font-bold mb-6">${message}</h3>
                        ${details ? `<p class="text-xl leading-relaxed opacity-95">${details}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'festive') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <div class="relative p-12 text-center" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}30, ${globalStyles.secondaryColor}30);">
                            <div class="absolute top-4 left-4 text-4xl">🎈</div>
                            <div class="absolute top-4 right-4 text-4xl">🎈</div>
                            <div class="absolute bottom-4 left-4 text-4xl">🎈</div>
                            <div class="absolute bottom-4 right-4 text-4xl">🎈</div>
                            <div class="relative z-10">
                                <div class="text-7xl mb-6">🎊</div>
                                <h3 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${message}</h3>
                                ${details ? `<p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${details}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'balloons') {
            return `
                <div class="p-6 relative">
                    <div class="max-w-2xl mx-auto text-center py-8 relative">
                        <div class="flex justify-center gap-4 mb-8">
                            <div class="text-6xl">🎈</div>
                            <div class="text-7xl">🎈</div>
                            <div class="text-6xl">🎈</div>
                        </div>
                        <div class="bg-white rounded-2xl shadow-xl p-8">
                            <h3 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${message}</h3>
                            ${details ? `<p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${details}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'fireworks') {
            return `
                <div class="p-6 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="absolute top-20 left-10 text-5xl">💥</div>
                        <div class="absolute top-10 right-20 text-6xl">✨</div>
                        <div class="absolute bottom-20 left-20 text-5xl">🎆</div>
                        <div class="absolute bottom-10 right-10 text-6xl">🎇</div>
                        <div class="absolute top-1/3 right-1/3 text-5xl">💫</div>
                    </div>
                    <div class="max-w-2xl mx-auto text-center relative z-10 py-12">
                        <div class="text-7xl mb-6">🎆</div>
                        <h3 class="text-4xl font-bold mb-6 text-white">${message}</h3>
                        ${details ? `<p class="text-xl leading-relaxed text-white opacity-90">${details}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'confetti-rain') {
            return `
                <div class="p-6 relative overflow-hidden" style="background: ${globalStyles.bgColor};">
                    <div class="absolute inset-0 overflow-hidden">
                        ${Array.from({length: 20}, (_, i) => `
                            <div class="absolute text-2xl opacity-60" style="left: ${(i * 5) + (Math.random() * 5)}%; top: ${Math.random() * 100}%; color: ${i % 2 === 0 ? globalStyles.primaryColor : globalStyles.secondaryColor};">
                                ${['●', '■', '▲', '★'][i % 4]}
                            </div>
                        `).join('')}
                    </div>
                    <div class="max-w-2xl mx-auto text-center relative z-10 py-12">
                        <div class="bg-white rounded-3xl shadow-2xl p-10">
                            <div class="text-7xl mb-6">🎊</div>
                            <h3 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${message}</h3>
                            ${details ? `<p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${details}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner-celebration') {
            return `
                <div class="relative">
                    <div class="h-24 flex items-center justify-center" style="background: linear-gradient(90deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                        <div class="text-white text-6xl">🎉 🎊 🎉</div>
                    </div>
                    <div class="p-10 text-center bg-white">
                        <h3 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${message}</h3>
                        ${details ? `<p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${details}</p>` : ''}
                    </div>
                    <div class="h-24 flex items-center justify-center" style="background: linear-gradient(90deg, ${globalStyles.secondaryColor}, ${globalStyles.primaryColor});">
                        <div class="text-white text-6xl">🎊 🎉 🎊</div>
                    </div>
                </div>
            `;
        } else if (layout === 'joyful') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div class="p-3" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            <div class="bg-white rounded-2xl p-10 text-center">
                                <div class="flex justify-center gap-3 mb-6 text-5xl">
                                    <span>🎉</span>
                                    <span>🥳</span>
                                    <span>🎊</span>
                                </div>
                                <h3 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${message}</h3>
                                ${details ? `<p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${details}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'cheers') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto text-center py-12 px-8 rounded-3xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}15, ${globalStyles.secondaryColor}15);">
                        <div class="text-8xl mb-6">🥂</div>
                        <h3 class="text-4xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${message}</h3>
                        ${details ? `<p class="text-xl leading-relaxed" style="color: ${globalStyles.textColor};">${details}</p>` : ''}
                        <div class="mt-8 flex justify-center gap-4 text-5xl">
                            <span>🎊</span>
                            <span>✨</span>
                            <span>🎉</span>
                        </div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            <div class="text-5xl mb-4 text-center">🎊</div>
            <h3 class="text-2xl font-bold mb-3 text-center" style="color: ${globalStyles.primaryColor};">${message}</h3>
            ${details ? `<p class="text-lg text-center" style="color: ${globalStyles.textColor};">${details}</p>` : ''}
        </div>`;
    }
};
