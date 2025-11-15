// Advice/Wisdom component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.advice = {
    name: '💡 Advice & Wisdom',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="Words of Wisdom" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Advice Message</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="advice" rows="5" placeholder="As you embark on this new chapter, remember that success is not just about reaching the destination, but also about enjoying the journey..." onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">From (Optional)</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="from" placeholder="Your Mentor" onchange="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="lightbulb">Lightbulb Moment</option>
                    <option value="scroll">Scroll Style</option>
                    <option value="book">Book Page</option>
                    <option value="banner">Wisdom Banner</option>
                    <option value="card">Advice Card</option>
                    <option value="framed">Framed</option>
                    <option value="modern">Modern Block</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="icon" onchange="updatePreview()">
                    <option value="💡">💡 Lightbulb</option>
                    <option value="🎓">🎓 Graduation Cap</option>
                    <option value="📚">📚 Books</option>
                    <option value="🧠">🧠 Brain</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="🌟">🌟 Glowing Star</option>
                    <option value="🎯">🎯 Target</option>
                    <option value="">None</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const title = data.title || 'Words of Wisdom';
        const advice = data.advice || 'As you embark on this new chapter, remember that success is not just about reaching the destination, but also about enjoying the journey.';
        const from = data.from || '';
        const layout = style.layout || 'lightbulb';
        const icon = style.icon || '💡';

        if (layout === 'lightbulb') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-3xl shadow-2xl p-10">
                            <div class="text-center mb-6">
                                ${icon ? `<div class="text-7xl mb-4">${icon}</div>` : ''}
                                <h3 class="text-3xl font-bold" style="color: ${globalStyles.primaryColor};">${title}</h3>
                            </div>
                            <div class="border-t-2 border-b-2 py-6 my-6" style="border-color: ${globalStyles.secondaryColor};">
                                <p class="text-lg leading-relaxed text-center" style="color: ${globalStyles.textColor};">${advice}</p>
                            </div>
                            ${from ? `<p class="text-base text-center font-semibold" style="color: ${globalStyles.primaryColor};">— ${from}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'scroll') {
            return `
                <div class="p-6" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}10, ${globalStyles.secondaryColor}10);">
                    <div class="max-w-2xl mx-auto py-8">
                        <div class="relative bg-amber-50 rounded-2xl p-10 shadow-xl border-4 border-amber-200">
                            ${icon ? `<div class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl">${icon}</div>` : ''}
                            <div class="pt-4">
                                <h3 class="text-3xl font-bold mb-6 text-center" style="color: ${globalStyles.primaryColor};">${title}</h3>
                                <p class="text-lg leading-relaxed italic text-center" style="color: ${globalStyles.textColor};">${advice}</p>
                                ${from ? `<p class="text-base text-center font-semibold mt-6" style="color: ${globalStyles.secondaryColor};">— ${from}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'book') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-xl shadow-2xl overflow-hidden border-l-8" style="border-color: ${globalStyles.primaryColor};">
                            <div class="p-10">
                                <div class="flex items-center gap-4 mb-6">
                                    ${icon ? `<div class="text-5xl">${icon}</div>` : ''}
                                    <h3 class="text-3xl font-bold" style="color: ${globalStyles.primaryColor};">${title}</h3>
                                </div>
                                <div class="pl-6 border-l-2 mb-6" style="border-color: ${globalStyles.secondaryColor};">
                                    <p class="text-lg leading-relaxed" style="color: ${globalStyles.textColor};">${advice}</p>
                                </div>
                                ${from ? `<p class="text-base font-semibold" style="color: ${globalStyles.secondaryColor};">— ${from}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="py-12 text-center" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                    <div class="max-w-3xl mx-auto px-6">
                        ${icon ? `<div class="text-7xl mb-6 text-white">${icon}</div>` : ''}
                        <h3 class="text-4xl font-bold mb-6 text-white">${title}</h3>
                        <p class="text-2xl leading-relaxed text-white opacity-95 mb-6">${advice}</p>
                        ${from ? `<p class="text-xl font-semibold text-white opacity-90">— ${from}</p>` : ''}
                    </div>
                </div>
            `;
        } else if (layout === 'card') {
            return `
                <div class="p-6">
                    <div class="max-w-xl mx-auto">
                        <div class="p-2 rounded-3xl" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            <div class="bg-white rounded-2xl p-8 text-center">
                                ${icon ? `<div class="text-6xl mb-4">${icon}</div>` : ''}
                                <h3 class="text-2xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${title}</h3>
                                <p class="text-lg leading-relaxed mb-4" style="color: ${globalStyles.textColor};">${advice}</p>
                                ${from ? `<p class="text-base font-semibold" style="color: ${globalStyles.secondaryColor};">— ${from}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'framed') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto border-8 rounded-2xl p-10" style="border-color: ${globalStyles.primaryColor};">
                        <div class="border-4 border-dashed p-8 text-center" style="border-color: ${globalStyles.secondaryColor};">
                            ${icon ? `<div class="text-6xl mb-6">${icon}</div>` : ''}
                            <h3 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${title}</h3>
                            <p class="text-lg leading-relaxed mb-4" style="color: ${globalStyles.textColor};">${advice}</p>
                            ${from ? `<p class="text-base font-semibold" style="color: ${globalStyles.secondaryColor};">— ${from}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}20, ${globalStyles.secondaryColor}20);">
                        <div class="p-10">
                            <div class="flex items-center gap-6 mb-6">
                                ${icon ? `<div class="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor}); color: white;">${icon}</div>` : ''}
                                <h3 class="text-3xl font-bold flex-1" style="color: ${globalStyles.primaryColor};">${title}</h3>
                            </div>
                            <div class="bg-white rounded-2xl p-6 shadow-md">
                                <p class="text-lg leading-relaxed mb-4" style="color: ${globalStyles.textColor};">${advice}</p>
                                ${from ? `<p class="text-base font-semibold" style="color: ${globalStyles.secondaryColor};">— ${from}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="p-6" style="background: linear-gradient(to bottom, transparent, ${globalStyles.primaryColor}10, transparent);">
                    <div class="max-w-2xl mx-auto text-center py-12">
                        ${icon ? `<div class="text-6xl mb-6 opacity-80">${icon}</div>` : ''}
                        <h3 class="text-4xl font-light mb-8 tracking-wide" style="color: ${globalStyles.primaryColor};">${title}</h3>
                        <div class="h-1 w-32 mx-auto mb-8" style="background: ${globalStyles.secondaryColor};"></div>
                        <p class="text-xl leading-relaxed font-light mb-6" style="color: ${globalStyles.textColor};">${advice}</p>
                        ${from ? `<p class="text-base font-semibold uppercase tracking-widest" style="color: ${globalStyles.secondaryColor};">${from}</p>` : ''}
                        <div class="h-1 w-32 mx-auto mt-8" style="background: ${globalStyles.primaryColor};"></div>
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            ${icon ? `<div class="text-5xl mb-4">${icon}</div>` : ''}
            <h3 class="text-2xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${title}</h3>
            <p class="text-lg leading-relaxed mb-3" style="color: ${globalStyles.textColor};">${advice}</p>
            ${from ? `<p class="text-base font-semibold" style="color: ${globalStyles.secondaryColor};">— ${from}</p>` : ''}
        </div>`;
    }
};
