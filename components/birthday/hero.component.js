// Hero Header Component for Birthday Party Invitations

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.hero = {
    name: '🎂 Party Invitation Banner',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Invitation Title</label>
                <input type="text" placeholder="You're Invited!" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Birthday Person's Name</label>
                <input type="text" placeholder="Sarah's" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent section-data" data-field="name" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Age/Milestone</label>
                <input type="text" placeholder="30th" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent section-data" data-field="age" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Party Theme (Optional)</label>
                <input type="text" placeholder="Hollywood Glam, Tropical Paradise, etc." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent section-data" data-field="theme" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input type="text" placeholder="Birthday Party Celebration" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent section-data" data-field="subtitle" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Banner Image</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 cursor-pointer" onclick="this.querySelector('input').click()">
                    <div class="text-3xl mb-2">📸</div>
                    <div class="text-sm text-gray-600">Click to upload party banner image</div>
                    <input type="file" class="hidden section-data" data-field="image" accept="image/*" onchange="handleImageUpload(this)">
                </div>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ec4899" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="text" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style" data-style="layout" oninput="updatePreview()">
                    <option value="centered">Centered Classic</option>
                    <option value="overlay">Image Overlay</option>
                    <option value="split">Split Layout</option>
                    <option value="minimal">Minimal Clean</option>
                    <option value="gradient">Full Gradient</option>
                    <option value="banner">Banner Style</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';
        const bgColor = style.bg || '#ec4899';
        const textColor = style.text || '#ffffff';

        // Overlay Style
        if (layout === 'overlay') {
            return `
                <div class="relative text-center py-20 px-6" style="background: ${data.image ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${data.image}') center/cover` : bgColor}; color: #ffffff;">
                    <div class="relative z-10">
                        <div class="text-6xl mb-4">🎉</div>
                        <h1 class="text-4xl font-bold mb-2">${data.title || "You're Invited!"}</h1>
                        <p class="text-3xl font-bold mb-2">${data.name || 'Name'}'s ${data.age || ''} Birthday</p>
                        ${data.subtitle ? `<p class="text-xl mt-3">${data.subtitle}</p>` : ''}
                        ${data.theme ? `<div class="mt-4 inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">🎭 Theme: ${data.theme}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Split Layout
        if (layout === 'split') {
            return `
                <div class="py-12 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-4xl mx-auto">
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="flex-1 text-center md:text-left order-2 md:order-1">
                                <div class="text-5xl mb-4 md:text-left">🎉</div>
                                <h1 class="text-3xl md:text-4xl font-bold mb-3">${data.title || "You're Invited!"}</h1>
                                <p class="text-2xl md:text-3xl font-bold mb-2">${data.name || 'Name'}'s ${data.age || ''} Birthday</p>
                                ${data.subtitle ? `<p class="text-lg mt-3 opacity-90">${data.subtitle}</p>` : ''}
                                ${data.theme ? `<div class="mt-4 inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">🎭 Theme: ${data.theme}</div>` : ''}
                            </div>
                            <div class="flex-1 order-1 md:order-2">
                                ${data.image ? `<img src="${data.image}" class="w-full max-w-sm mx-auto rounded-2xl object-cover shadow-2xl" style="aspect-ratio: 1/1;">` : '<div class="w-64 h-64 rounded-2xl mx-auto bg-white bg-opacity-20 flex items-center justify-center text-8xl">🎂</div>'}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Minimal Style
        if (layout === 'minimal') {
            return `
                <div class="py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                    <div class="max-w-2xl mx-auto text-center">
                        ${data.image ? `<img src="${data.image}" class="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4" style="border-color: ${textColor}33;">` : '<div class="text-6xl mb-6">🎂</div>'}
                        <h1 class="text-3xl font-light mb-2 tracking-wide">${data.title || "You're Invited!"}</h1>
                        <div class="w-16 h-1 mx-auto my-4 opacity-50" style="background: ${textColor};"></div>
                        <p class="text-4xl font-bold mb-2">${data.name || 'Name'}'s ${data.age || ''} Birthday</p>
                        ${data.subtitle ? `<p class="text-lg mt-4 opacity-80 font-light">${data.subtitle}</p>` : ''}
                        ${data.theme ? `<div class="mt-6 text-sm opacity-75">🎭 ${data.theme}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Gradient Style
        if (layout === 'gradient') {
            return `
                <div class="py-20 px-6 text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%); color: ${textColor}">
                    <div class="max-w-3xl mx-auto">
                        <div class="mb-6">
                            ${data.image ? `<img src="${data.image}" class="w-40 h-40 rounded-full mx-auto object-cover shadow-2xl border-4" style="border-color: ${textColor};">` : '<div class="w-32 h-32 rounded-full mx-auto bg-white bg-opacity-30 flex items-center justify-center text-7xl backdrop-blur-sm">🎂</div>'}
                        </div>
                        <div class="text-5xl mb-4">🎉</div>
                        <h1 class="text-5xl font-bold mb-4">${data.title || "You're Invited!"}</h1>
                        <p class="text-3xl font-bold mb-2">${data.name || 'Name'}'s ${data.age || ''} Birthday Celebration</p>
                        ${data.subtitle ? `<p class="text-xl mt-4 opacity-90">${data.subtitle}</p>` : ''}
                        ${data.theme ? `<div class="mt-6 inline-block bg-white bg-opacity-25 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">🎭 Theme: ${data.theme}</div>` : ''}
                    </div>
                </div>
            `;
        }

        // Banner Style
        if (layout === 'banner') {
            return `
                <div class="py-8 px-6" style="background: ${bgColor}; color: ${textColor}; border-bottom: 4px solid ${textColor}33;">
                    <div class="max-w-5xl mx-auto">
                        <div class="flex items-center justify-between gap-6 flex-wrap">
                            <div class="flex items-center gap-6">
                                ${data.image ? `<img src="${data.image}" class="w-20 h-20 rounded-lg object-cover shadow-lg hidden sm:block">` : '<div class="text-5xl hidden sm:block">🎂</div>'}
                                <div>
                                    <div class="text-2xl font-bold mb-1">${data.title || "You're Invited!"}</div>
                                    <div class="text-xl font-medium">${data.name || 'Name'}'s ${data.age || ''} Birthday</div>
                                    ${data.subtitle ? `<div class="text-sm mt-1 opacity-75">${data.subtitle}</div>` : ''}
                                </div>
                            </div>
                            ${data.theme ? `<div class="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">🎭 ${data.theme}</div>` : '<div class="text-4xl">🎉</div>'}
                        </div>
                    </div>
                </div>
            `;
        }

        // Centered Classic (default)
        return `
            <div class="text-center py-16 px-6" style="background: ${bgColor}; color: ${textColor}">
                ${data.image ? `<img src="${data.image}" class="w-48 h-48 rounded-xl mx-auto mb-6 object-cover shadow-lg">` : '<div class="w-32 h-32 rounded-full mx-auto mb-6 bg-white bg-opacity-20 flex items-center justify-center text-6xl">🎂</div>'}
                <h1 class="text-4xl font-bold mb-3">${data.title || "You're Invited!"}</h1>
                <p class="text-3xl font-bold mb-2">${data.name || 'Name'}'s ${data.age || ''} Birthday</p>
                ${data.subtitle ? `<p class="text-xl mt-3 opacity-90">${data.subtitle}</p>` : ''}
                ${data.theme ? `<div class="mt-4 inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">🎭 Theme: ${data.theme}</div>` : ''}
            </div>
        `;
    }
};
