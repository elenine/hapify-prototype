// Special Guests Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.specialguests = {
    name: '⭐ Special Guests',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="e.g., Special Guests"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guestsTitle" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
                <textarea placeholder="We're honored to have special guests join us..." rows="2"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guestsIntro" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 1 Name</label>
                <input type="text" placeholder="e.g., John Smith"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guest1Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 1 Title/Role</label>
                <input type="text" placeholder="e.g., Best Friend, Special Performer"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guest1Title" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 1 Photo</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="guest1Photo" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 2 Name</label>
                <input type="text" placeholder="e.g., Jane Doe"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guest2Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 2 Title/Role</label>
                <input type="text" placeholder="e.g., Godparent, DJ"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guest2Title" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 2 Photo</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="guest2Photo" onchange="handleImageUpload(this)">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 3 Name</label>
                <input type="text" placeholder="e.g., Bob Johnson"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guest3Name" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 3 Title/Role</label>
                <input type="text" placeholder="e.g., Guest Speaker"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="guest3Title" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Guest 3 Photo</label>
                <input type="file" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg section-data"
                    data-field="guest3Photo" onchange="handleImageUpload(this)">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#fef3c7"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Shape</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="photoShape" onchange="updatePreview()">
                    <option value="circle">Circle</option>
                    <option value="rounded">Rounded Square</option>
                    <option value="square">Square</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#fef3c7';
        const photoShape = style.photoShape || 'circle';
        const title = data.guestsTitle || 'Special Guests';

        const shapeClasses = {
            circle: 'rounded-full',
            rounded: 'rounded-2xl',
            square: 'rounded-none'
        };

        const guests = [];
        for (let i = 1; i <= 3; i++) {
            const name = data[`guest${i}Name`];
            const guestTitle = data[`guest${i}Title`];
            const photo = data[`guest${i}Photo`];
            if (name) {
                guests.push({ name, title: guestTitle, photo });
            }
        }

        if (guests.length === 0) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                    ${data.guestsIntro ? `<p class="text-gray-700 mb-6 max-w-2xl mx-auto">${data.guestsIntro}</p>` : ''}
                    <p class="text-gray-500">No special guests added yet</p>
                </div>
            `;
        }

        const guestsHtml = guests.map(guest => `
            <div class="text-center">
                ${guest.photo ? `
                    <img src="${guest.photo}" alt="${guest.name}"
                         class="w-32 h-32 object-cover ${shapeClasses[photoShape]} mx-auto mb-4 shadow-lg">
                ` : `
                    <div class="w-32 h-32 ${shapeClasses[photoShape]} mx-auto mb-4 bg-gray-200 flex items-center justify-center text-4xl">
                        ⭐
                    </div>
                `}
                <h3 class="text-xl font-bold" style="color: ${globalStyles.primaryColor || '#059669'};">${guest.name}</h3>
                ${guest.title ? `<p class="text-gray-600 mt-1">${guest.title}</p>` : ''}
            </div>
        `).join('');

        return `
            <div class="py-16 px-6" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-4 text-center" style="color: ${globalStyles.primaryColor || '#059669'};">${title}</h2>
                ${data.guestsIntro ? `<p class="text-gray-700 mb-12 text-center max-w-2xl mx-auto">${data.guestsIntro}</p>` : ''}
                <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    ${guestsHtml}
                </div>
            </div>
        `;
    }
};
