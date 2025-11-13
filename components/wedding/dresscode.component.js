// Dress Code Component for Wedding

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.dresscode = {
    name: '👔 Dress Code',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" placeholder="Dress Code" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="title" value="Dress Code" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code Type</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="dressCodeType" oninput="updatePreview()">
                    <option value="formal">Formal / Black Tie</option>
                    <option value="semiformal">Semi-Formal / Cocktail</option>
                    <option value="casual">Casual Elegance</option>
                    <option value="beach">Beach Formal</option>
                    <option value="garden">Garden Party</option>
                    <option value="custom">Custom</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea placeholder="E.g., Please avoid wearing white..." rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-data" data-field="details" oninput="updatePreview()"></textarea>
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#faf5ff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Text Alignment</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 section-style" data-style="align" oninput="updatePreview()">
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const dressCodeDescriptions = {
            formal: 'Floor-length gowns for women, tuxedos for men',
            semiformal: 'Cocktail dresses and suits',
            casual: 'Dressy casual attire',
            beach: 'Light, flowing fabrics and sandals welcome',
            garden: 'Sundresses and light suits',
            custom: ''
        };

        const dressCodeType = data.dressCodeType || 'formal';
        const description = dressCodeDescriptions[dressCodeType] || '';
        const align = style.align || 'center';

        return `
            <div class="py-12 px-6" style="background: ${style.bg || '#faf5ff'}">
                <div class="max-w-md mx-auto text-${align}">
                    <div class="text-4xl mb-4">👔</div>
                    <h2 class="text-2xl font-bold mb-4">${data.title || 'Dress Code'}</h2>
                    <p class="text-lg font-medium text-purple-700 mb-2">${dressCodeType.charAt(0).toUpperCase() + dressCodeType.slice(1)}</p>
                    ${description ? `<p class="text-gray-600 mb-4">${description}</p>` : ''}
                    ${data.details ? `<p class="text-gray-600 text-sm">${data.details}</p>` : ''}
                </div>
            </div>
        `;
    }
};
