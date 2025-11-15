// Name Meaning Component for Birth Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.nameMeaning = {
    name: '✨ Name Meaning',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Baby's Full Name</label>
                <input type="text" placeholder="Emma Rose Johnson" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="fullName" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name Meaning</label>
                <textarea placeholder="Emma means 'universal' or 'whole'..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="firstNameMeaning" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Middle Name Meaning</label>
                <textarea placeholder="Rose symbolizes love and beauty..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="middleNameMeaning" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Why We Chose This Name</label>
                <textarea placeholder="We chose Emma Rose because..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-data" data-field="whyChosen" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">📱 Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="classic">Classic Cards</option>
                    <option value="elegant">Elegant Split</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="ornate">Ornate Frame</option>
                    <option value="modern">Modern Blocks</option>
                    <option value="storybook">Story Book Style</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Card/Content Color</label>
                <input type="color" value="#f0fdfa" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="cardBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <input type="color" value="#14b8a6" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="accent" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#1f2937" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="textColor" oninput="updatePreview()">
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layout = style.layout || 'classic';
        const bgColor = style.bg || '#ffffff';
        const cardBg = style.cardBg || '#f0fdfa';
        const accentColor = style.accent || '#14b8a6';
        const textColor = style.textColor || '#1f2937';

        if (layout === 'classic') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center text-4xl mb-4">✨</div>
                        <h2 class="text-2xl font-bold text-center mb-6" style="color: ${textColor};">What's in a Name?</h2>
                        ${data.fullName ? `<h3 class="text-xl font-semibold text-center mb-6" style="color: ${accentColor};">${data.fullName}</h3>` : ''}
                        <div class="space-y-4">
                            ${data.firstNameMeaning ? `
                            <div class="p-4 rounded-lg shadow-sm" style="background: ${cardBg};">
                                <div class="text-xs mb-1" style="color: ${accentColor}; opacity: 0.8;">First Name</div>
                                <p class="text-sm" style="color: ${textColor};">${data.firstNameMeaning}</p>
                            </div>` : ''}
                            ${data.middleNameMeaning ? `
                            <div class="p-4 rounded-lg shadow-sm" style="background: ${cardBg};">
                                <div class="text-xs mb-1" style="color: ${accentColor}; opacity: 0.8;">Middle Name</div>
                                <p class="text-sm" style="color: ${textColor};">${data.middleNameMeaning}</p>
                            </div>` : ''}
                            ${data.whyChosen ? `
                            <div class="p-4 rounded-lg shadow-sm" style="background: ${cardBg};">
                                <div class="text-xs mb-1" style="color: ${accentColor}; opacity: 0.8;">Our Story</div>
                                <p class="text-sm" style="color: ${textColor};">${data.whyChosen}</p>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'elegant') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="text-center mb-8">
                            <div class="text-4xl mb-3">✨</div>
                            ${data.fullName ? `<h2 class="text-3xl font-bold mb-2" style="color: ${accentColor};">${data.fullName}</h2>` : ''}
                            <div class="w-24 h-1 mx-auto" style="background: ${accentColor};"></div>
                        </div>
                        <div class="space-y-6">
                            ${data.firstNameMeaning ? `
                            <div class="text-center">
                                <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3" style="background: ${accentColor}; color: white;">First Name</div>
                                <p class="leading-relaxed" style="color: ${textColor};">${data.firstNameMeaning}</p>
                            </div>` : ''}
                            ${data.middleNameMeaning ? `
                            <div class="text-center">
                                <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3" style="background: ${accentColor}; color: white;">Middle Name</div>
                                <p class="leading-relaxed" style="color: ${textColor};">${data.middleNameMeaning}</p>
                            </div>` : ''}
                            ${data.whyChosen ? `
                            <div class="text-center p-6 rounded-xl mt-6" style="background: ${cardBg};">
                                <div class="text-xs font-semibold mb-3 uppercase tracking-wider" style="color: ${accentColor};">Why We Chose This Name</div>
                                <p class="leading-relaxed" style="color: ${textColor};">${data.whyChosen}</p>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        ${data.fullName ? `<h2 class="text-3xl font-light text-center mb-8" style="color: ${textColor};">${data.fullName}</h2>` : ''}
                        <div class="space-y-6">
                            ${data.firstNameMeaning ? `
                            <div class="border-l-4 pl-6" style="border-color: ${accentColor};">
                                <div class="text-xs uppercase tracking-widest mb-2" style="color: ${accentColor};">First Name</div>
                                <p class="text-sm leading-relaxed" style="color: ${textColor}; opacity: 0.9;">${data.firstNameMeaning}</p>
                            </div>` : ''}
                            ${data.middleNameMeaning ? `
                            <div class="border-l-4 pl-6" style="border-color: ${accentColor};">
                                <div class="text-xs uppercase tracking-widest mb-2" style="color: ${accentColor};">Middle Name</div>
                                <p class="text-sm leading-relaxed" style="color: ${textColor}; opacity: 0.9;">${data.middleNameMeaning}</p>
                            </div>` : ''}
                            ${data.whyChosen ? `
                            <div class="border-l-4 pl-6" style="border-color: ${accentColor};">
                                <div class="text-xs uppercase tracking-widest mb-2" style="color: ${accentColor};">Our Story</div>
                                <p class="text-sm leading-relaxed" style="color: ${textColor}; opacity: 0.9;">${data.whyChosen}</p>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'ornate') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="border-4 rounded-3xl p-8 bg-white shadow-xl" style="border-color: ${accentColor};">
                            <div class="text-center mb-8">
                                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-2xl" style="background: ${accentColor}; color: white;">✨</div>
                                <h2 class="text-2xl font-bold mb-2" style="color: ${accentColor};">What's in a Name?</h2>
                                ${data.fullName ? `<h3 class="text-xl font-semibold" style="color: ${textColor};">${data.fullName}</h3>` : ''}
                            </div>
                            <div class="space-y-4">
                                ${data.firstNameMeaning ? `
                                <div class="text-center p-4 rounded-lg" style="background: ${cardBg};">
                                    <div class="text-xs font-bold uppercase mb-2" style="color: ${accentColor};">First Name</div>
                                    <p class="text-sm" style="color: ${textColor};">${data.firstNameMeaning}</p>
                                </div>` : ''}
                                ${data.middleNameMeaning ? `
                                <div class="text-center p-4 rounded-lg" style="background: ${cardBg};">
                                    <div class="text-xs font-bold uppercase mb-2" style="color: ${accentColor};">Middle Name</div>
                                    <p class="text-sm" style="color: ${textColor};">${data.middleNameMeaning}</p>
                                </div>` : ''}
                                ${data.whyChosen ? `
                                <div class="text-center p-4 rounded-lg border-t-2 mt-4 pt-4" style="border-color: ${accentColor};">
                                    <div class="text-xs font-bold uppercase mb-2" style="color: ${accentColor};">Our Story</div>
                                    <p class="text-sm" style="color: ${textColor};">${data.whyChosen}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-md mx-auto">
                        <div class="text-center mb-8">
                            ${data.fullName ? `<h2 class="text-3xl font-bold" style="color: ${textColor};">${data.fullName}</h2>` : ''}
                        </div>
                        <div class="grid gap-4">
                            ${data.firstNameMeaning ? `
                            <div class="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg">
                                <div class="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">
                                    ✨
                                </div>
                                <div style="color: ${textColor};">
                                    <div class="text-xs font-semibold mb-2 uppercase" style="color: ${accentColor};">First Name</div>
                                    <p class="text-sm leading-relaxed">${data.firstNameMeaning}</p>
                                </div>
                            </div>` : ''}
                            ${data.middleNameMeaning ? `
                            <div class="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg">
                                <div class="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">
                                    💫
                                </div>
                                <div style="color: ${textColor};">
                                    <div class="text-xs font-semibold mb-2 uppercase" style="color: ${accentColor};">Middle Name</div>
                                    <p class="text-sm leading-relaxed">${data.middleNameMeaning}</p>
                                </div>
                            </div>` : ''}
                            ${data.whyChosen ? `
                            <div class="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg">
                                <div class="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-2xl" style="background: ${accentColor}; color: white;">
                                    ❤️
                                </div>
                                <div style="color: ${textColor};">
                                    <div class="text-xs font-semibold mb-2 uppercase" style="color: ${accentColor};">Our Story</div>
                                    <p class="text-sm leading-relaxed">${data.whyChosen}</p>
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'storybook') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor};">
                    <div class="max-w-lg mx-auto">
                        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden" style="border-left: 6px solid ${accentColor};">
                            <div class="p-6 text-center" style="background: ${cardBg};">
                                <div class="text-4xl mb-3">✨</div>
                                <h2 class="text-2xl font-serif font-bold" style="color: ${accentColor};">The Story of a Name</h2>
                                ${data.fullName ? `<h3 class="text-xl font-serif mt-2" style="color: ${textColor};">${data.fullName}</h3>` : ''}
                            </div>
                            <div class="p-8 space-y-6 font-serif" style="color: ${textColor};">
                                ${data.firstNameMeaning ? `
                                <div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style="background: ${accentColor}; color: white;">1</div>
                                        <div class="text-xs font-bold uppercase tracking-wider" style="color: ${accentColor};">First Name</div>
                                    </div>
                                    <p class="text-sm leading-loose ml-10">${data.firstNameMeaning}</p>
                                </div>` : ''}
                                ${data.middleNameMeaning ? `
                                <div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style="background: ${accentColor}; color: white;">2</div>
                                        <div class="text-xs font-bold uppercase tracking-wider" style="color: ${accentColor};">Middle Name</div>
                                    </div>
                                    <p class="text-sm leading-loose ml-10">${data.middleNameMeaning}</p>
                                </div>` : ''}
                                ${data.whyChosen ? `
                                <div class="pt-6 border-t-2" style="border-color: ${accentColor};">
                                    <div class="flex items-center gap-2 mb-2">
                                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs" style="background: ${accentColor}; color: white;">❤️</div>
                                        <div class="text-xs font-bold uppercase tracking-wider" style="color: ${accentColor};">Why We Chose This Name</div>
                                    </div>
                                    <p class="text-sm leading-loose ml-10">${data.whyChosen}</p>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Default fallback
        return `
            <div class="py-12 px-6" style="background: ${bgColor};">
                <div class="max-w-md mx-auto">
                    <div class="text-center text-4xl mb-4">✨</div>
                    <h2 class="text-2xl font-bold text-center mb-6" style="color: ${textColor};">What's in a Name?</h2>
                    ${data.fullName ? `<h3 class="text-xl font-semibold text-center mb-6" style="color: ${accentColor};">${data.fullName}</h3>` : ''}
                    <div class="space-y-4">
                        ${data.firstNameMeaning ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="text-xs mb-1" style="color: ${accentColor};">First Name</div><p class="text-sm" style="color: ${textColor};">${data.firstNameMeaning}</p></div>` : ''}
                        ${data.middleNameMeaning ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="text-xs mb-1" style="color: ${accentColor};">Middle Name</div><p class="text-sm" style="color: ${textColor};">${data.middleNameMeaning}</p></div>` : ''}
                        ${data.whyChosen ? `<div class="p-4 rounded-lg" style="background: ${cardBg};"><div class="text-xs mb-1" style="color: ${accentColor};">Our Story</div><p class="text-sm" style="color: ${textColor};">${data.whyChosen}</p></div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }`
};
