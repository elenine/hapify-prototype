// Dress Code Component
window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.dresscode = {
    name: '👔 Dress Code',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dress Code</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="dressCode" onchange="updatePreview()">
                    <option value="">Select dress code...</option>
                    <option value="Formal / Black Tie">Formal / Black Tie</option>
                    <option value="Semi-Formal">Semi-Formal</option>
                    <option value="Cocktail Attire">Cocktail Attire</option>
                    <option value="Smart Casual">Smart Casual</option>
                    <option value="Casual">Casual</option>
                    <option value="Themed Costume">Themed Costume</option>
                    <option value="Beach Casual">Beach Casual</option>
                    <option value="Custom">Custom</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Custom Dress Code (if Custom selected)</label>
                <input type="text" placeholder="e.g., Hawaiian Shirts"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="customDressCode" onkeyup="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea placeholder="Any additional dress code details..." rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="dressCodeDetails" onkeyup="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Color Scheme (Optional)</label>
                <input type="text" placeholder="e.g., Pastels, Black & Gold"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data"
                    data-field="colorScheme" onkeyup="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#f3e8ff"
                    class="w-full h-10 border border-gray-300 rounded-lg section-style"
                    data-style="bgColor" onchange="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Icon Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg section-style"
                    data-style="iconStyle" onchange="updatePreview()">
                    <option value="large">Large Icon</option>
                    <option value="small">Small Icon</option>
                    <option value="none">No Icon</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles = {}) => {
        const bgColor = style.bgColor || '#f3e8ff';
        const iconStyle = style.iconStyle || 'large';

        const dressCode = data.dressCode === 'Custom' ? data.customDressCode : data.dressCode;

        if (!dressCode) {
            return `
                <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                    <h2 class="text-3xl font-bold mb-4" style="color: ${globalStyles.primaryColor || '#059669'};">Dress Code</h2>
                    <p class="text-gray-500">No dress code specified</p>
                </div>
            `;
        }

        const iconHtml = iconStyle === 'large' ? '<div class="text-6xl mb-4">👔</div>' :
                        iconStyle === 'small' ? '<div class="text-3xl mb-2">👔</div>' : '';

        return `
            <div class="py-16 px-6 text-center" style="background-color: ${bgColor};">
                <h2 class="text-3xl font-bold mb-6" style="color: ${globalStyles.primaryColor || '#059669'};">Dress Code</h2>
                ${iconHtml}
                <div class="text-2xl font-semibold mb-4 text-gray-800">${dressCode}</div>
                ${data.colorScheme ? `<div class="text-lg text-gray-600 mb-4">Color Scheme: ${data.colorScheme}</div>` : ''}
                ${data.dressCodeDetails ? `<p class="text-gray-700 max-w-2xl mx-auto">${data.dressCodeDetails}</p>` : ''}
            </div>
        `;
    }
};
