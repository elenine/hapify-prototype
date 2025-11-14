// Parents/About Component for Baby Shower

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.parents = {
    name: '👨‍👩‍👧 About the Parents',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                <input type="text" placeholder="Meet the Parents-to-Be" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Parent Names</label>
                <input type="text" placeholder="Sarah & John" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="names" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">About Message</label>
                <textarea rows="4" placeholder="We're so excited to welcome our little one! Join us as we celebrate this special journey..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Photo Upload</label>
                <input type="file" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-data" data-field="photo" onchange="handleImageUpload(this)">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 section-style" data-style="align" onchange="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => `
        <div class="py-12 px-6" style="background: ${style.bg || '#ffffff'}">
            <div class="max-w-2xl mx-auto text-${style.align || 'center'}">
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Meet the Parents-to-Be'}</h2>
                ${data.photo ? `<div class="mb-6 flex justify-${style.align || 'center'}"><img src="${data.photo}" class="w-48 h-48 object-cover rounded-full shadow-lg" alt="Parents"></div>` : '<div class="mb-6 flex justify-center"><div class="w-48 h-48 rounded-full bg-amber-100 flex items-center justify-center text-6xl">👨‍👩‍👧</div></div>'}
                ${data.names ? `<h3 class="text-xl font-semibold mb-4" style="color: ${globalStyles.primaryColor || '#f59e0b'}">${data.names}</h3>` : ''}
                ${data.message ? `<p class="text-gray-700 leading-relaxed">${data.message}</p>` : '<p class="text-gray-500">Share your story here...</p>'}
            </div>
        </div>
    `
};
