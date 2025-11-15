// Achievement component for congratulations card
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.achievement = {
    name: '🏆 Achievement',
    allowMultiple: true,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Achievement Title</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="title" placeholder="Your New Job Promotion" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="description" rows="4" placeholder="Describe what makes this achievement special..." onchange="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date (Optional)</label>
                <input type="text" class="section-data w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-field="date" placeholder="January 2025" onchange="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="layout" onchange="updatePreview()">
                    <option value="card">Achievement Card</option>
                    <option value="banner">Banner Style</option>
                    <option value="spotlight">Spotlight</option>
                    <option value="timeline">Timeline</option>
                    <option value="badge">Badge Display</option>
                    <option value="certificate">Certificate Style</option>
                    <option value="modern-box">Modern Box</option>
                    <option value="elegant">Elegant</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="icon" onchange="updatePreview()">
                    <option value="🏆">🏆 Trophy</option>
                    <option value="🎯">🎯 Target</option>
                    <option value="⭐">⭐ Star</option>
                    <option value="🌟">🌟 Glowing Star</option>
                    <option value="💼">💼 Briefcase</option>
                    <option value="🎓">🎓 Graduation Cap</option>
                    <option value="👑">👑 Crown</option>
                    <option value="🏅">🏅 Medal</option>
                    <option value="">None</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Style</label>
                <select class="section-style w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-style="bgStyle" onchange="updatePreview()">
                    <option value="gradient">Gradient</option>
                    <option value="solid">Solid</option>
                    <option value="light">Light</option>
                    <option value="transparent">Transparent</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const title = data.title || 'Your Amazing Achievement';
        const description = data.description || 'This is a remarkable milestone that deserves to be celebrated!';
        const date = data.date || '';
        const layout = style.layout || 'card';
        const icon = style.icon || '🏆';
        const bgStyle = style.bgStyle || 'gradient';

        let bgClass = '';
        if (bgStyle === 'gradient') {
            bgClass = `background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});`;
        } else if (bgStyle === 'solid') {
            bgClass = `background: ${globalStyles.primaryColor};`;
        } else if (bgStyle === 'light') {
            bgClass = `background: ${globalStyles.primaryColor}20;`;
        } else {
            bgClass = `background: transparent;`;
        }

        if (layout === 'card') {
            return `
                <div class="p-6">
                    <div class="max-w-md mx-auto rounded-2xl shadow-xl overflow-hidden" style="${bgClass}">
                        <div class="p-8 text-center ${bgStyle === 'gradient' || bgStyle === 'solid' ? 'text-white' : ''}">
                            ${icon ? `<div class="text-6xl mb-4">${icon}</div>` : ''}
                            <h2 class="text-3xl font-bold mb-4">${title}</h2>
                            <p class="text-lg mb-3 ${bgStyle === 'gradient' || bgStyle === 'solid' ? 'opacity-95' : ''}">${description}</p>
                            ${date ? `<p class="text-sm ${bgStyle === 'gradient' || bgStyle === 'solid' ? 'opacity-80' : 'opacity-70'}">${date}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'banner') {
            return `
                <div class="py-8">
                    <div class="px-6 py-8" style="${bgClass}">
                        <div class="max-w-3xl mx-auto flex items-center gap-6 ${bgStyle === 'gradient' || bgStyle === 'solid' ? 'text-white' : ''}">
                            ${icon ? `<div class="text-7xl flex-shrink-0">${icon}</div>` : ''}
                            <div>
                                <h2 class="text-4xl font-bold mb-3">${title}</h2>
                                <p class="text-lg mb-2 ${bgStyle === 'gradient' || bgStyle === 'solid' ? 'opacity-90' : ''}">${description}</p>
                                ${date ? `<p class="text-sm ${bgStyle === 'gradient' || bgStyle === 'solid' ? 'opacity-75' : 'opacity-70'}">${date}</p>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'spotlight') {
            return `
                <div class="p-6 relative overflow-hidden" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}10, ${globalStyles.secondaryColor}10);">
                    <div class="max-w-lg mx-auto text-center relative z-10">
                        ${icon ? `<div class="text-8xl mb-6 animate-bounce-slow">${icon}</div>` : ''}
                        <div class="bg-white rounded-3xl shadow-2xl p-10">
                            <h2 class="text-4xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${title}</h2>
                            <p class="text-xl mb-3" style="color: ${globalStyles.textColor};">${description}</p>
                            ${date ? `<p class="text-sm opacity-70" style="color: ${globalStyles.secondaryColor};">${date}</p>` : ''}
                        </div>
                    </div>
                    <div class="absolute top-0 left-1/2 w-96 h-96 rounded-full opacity-20" style="background: radial-gradient(circle, ${globalStyles.primaryColor}, transparent); transform: translate(-50%, -50%);"></div>
                </div>
            `;
        } else if (layout === 'timeline') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto">
                        <div class="flex gap-6">
                            <div class="flex flex-col items-center">
                                <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg" style="background: ${globalStyles.primaryColor}; color: white;">
                                    ${icon || '🏆'}
                                </div>
                                <div class="w-1 flex-1 mt-2" style="background: ${globalStyles.primaryColor};"></div>
                            </div>
                            <div class="flex-1 pb-8">
                                ${date ? `<p class="text-sm font-semibold mb-2" style="color: ${globalStyles.secondaryColor};">${date}</p>` : ''}
                                <h2 class="text-3xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h2>
                                <p class="text-lg" style="color: ${globalStyles.textColor};">${description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'badge') {
            return `
                <div class="p-6">
                    <div class="max-w-sm mx-auto text-center">
                        <div class="relative inline-block">
                            <div class="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl mb-6" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                                <div class="text-6xl">${icon || '🏆'}</div>
                            </div>
                            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-12 rounded-full shadow-lg flex items-center justify-center text-white font-bold" style="background: ${globalStyles.secondaryColor};">
                                ACHIEVED
                            </div>
                        </div>
                        <div class="mt-8">
                            <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor};">${title}</h2>
                            <p class="text-lg mb-3" style="color: ${globalStyles.textColor};">${description}</p>
                            ${date ? `<p class="text-sm opacity-70" style="color: ${globalStyles.secondaryColor};">${date}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'certificate') {
            return `
                <div class="p-6">
                    <div class="max-w-2xl mx-auto border-8 rounded-lg p-10 bg-white shadow-xl" style="border-color: ${globalStyles.primaryColor};">
                        <div class="border-4 border-double p-8 text-center" style="border-color: ${globalStyles.secondaryColor};">
                            ${icon ? `<div class="text-6xl mb-4">${icon}</div>` : ''}
                            <h3 class="text-sm font-semibold mb-2 tracking-widest uppercase opacity-70" style="color: ${globalStyles.textColor};">Certificate of Achievement</h3>
                            <h2 class="text-4xl font-bold mb-6" style="color: ${globalStyles.primaryColor};">${title}</h2>
                            <p class="text-lg mb-4 leading-relaxed" style="color: ${globalStyles.textColor};">${description}</p>
                            ${date ? `<p class="text-sm mt-6 opacity-70" style="color: ${globalStyles.secondaryColor};">${date}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern-box') {
            return `
                <div class="p-6">
                    <div class="max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <div class="p-2" style="background: linear-gradient(135deg, ${globalStyles.primaryColor}, ${globalStyles.secondaryColor});">
                            <div class="bg-white rounded-2xl p-8">
                                <div class="flex items-start gap-6">
                                    ${icon ? `<div class="text-6xl flex-shrink-0">${icon}</div>` : ''}
                                    <div class="flex-1">
                                        <h2 class="text-3xl font-bold mb-3" style="color: ${globalStyles.primaryColor};">${title}</h2>
                                        <p class="text-lg mb-2" style="color: ${globalStyles.textColor};">${description}</p>
                                        ${date ? `<p class="text-sm opacity-70" style="color: ${globalStyles.secondaryColor};">${date}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="p-6" style="background: linear-gradient(to bottom, transparent, ${globalStyles.primaryColor}10, transparent);">
                    <div class="max-w-2xl mx-auto text-center py-12">
                        ${icon ? `<div class="text-7xl mb-6">${icon}</div>` : ''}
                        <div class="inline-block">
                            <h2 class="text-5xl font-light mb-4 tracking-wide" style="color: ${globalStyles.primaryColor};">${title}</h2>
                            <div class="h-1 w-32 mx-auto mb-6" style="background: ${globalStyles.secondaryColor};"></div>
                        </div>
                        <p class="text-xl leading-relaxed mb-4 max-w-xl mx-auto" style="color: ${globalStyles.textColor};">${description}</p>
                        ${date ? `<p class="text-sm uppercase tracking-wider opacity-70" style="color: ${globalStyles.secondaryColor};">${date}</p>` : ''}
                    </div>
                </div>
            `;
        }

        return `<div class="p-6">
            ${icon ? `<div class="text-5xl mb-3">${icon}</div>` : ''}
            <h2 class="text-2xl font-bold mb-2" style="color: ${globalStyles.primaryColor};">${title}</h2>
            <p class="text-base mb-2" style="color: ${globalStyles.textColor};">${description}</p>
            ${date ? `<p class="text-sm opacity-70" style="color: ${globalStyles.secondaryColor};">${date}</p>` : ''}
        </div>`;
    }
};
