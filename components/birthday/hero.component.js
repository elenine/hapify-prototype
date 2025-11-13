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
                    <option value="centered">Centered</option>
                    <option value="overlay">Image Overlay</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'centered';

        if (layout === 'overlay' && data.image) {
            return `
                <div class="relative text-center py-20 px-6" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${data.image}') center/cover; color: #ffffff;">
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

        return `
            <div class="text-center py-16 px-6" style="background: ${style.bg || '#ec4899'}; color: ${style.text || '#ffffff'}">
                ${data.image ? `<img src="${data.image}" class="w-48 h-48 rounded-xl mx-auto mb-6 object-cover shadow-lg">` : '<div class="w-32 h-32 rounded-full mx-auto mb-6 bg-white bg-opacity-20 flex items-center justify-center text-6xl">🎂</div>'}
                <h1 class="text-4xl font-bold mb-3">${data.title || "You're Invited!"}</h1>
                <p class="text-3xl font-bold mb-2">${data.name || 'Name'}'s ${data.age || ''} Birthday</p>
                ${data.subtitle ? `<p class="text-xl mt-3 opacity-90">${data.subtitle}</p>` : ''}
                ${data.theme ? `<div class="mt-4 inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">🎭 Theme: ${data.theme}</div>` : ''}
            </div>
        `;
    }
};
