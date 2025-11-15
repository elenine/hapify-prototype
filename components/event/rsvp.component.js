// RSVP Component

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Register Now" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Secure your spot today..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="layoutStyle" onchange="updatePreview()">
                    <option value="simple">Simple - Clean & centered</option>
                    <option value="card">Card - Boxed design</option>
                    <option value="banner">Banner - Full width</option>
                    <option value="gradient">Gradient - Colorful background</option>
                    <option value="minimal">Minimal - Text focused</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Color (for gradients)</label>
                <input type="color" value="#f0fdf4" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="secondaryBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid">Solid - Filled</option>
                    <option value="outline">Outline - Border only</option>
                    <option value="gradient">Gradient - Color blend</option>
                    <option value="rounded">Rounded - Pill shape</option>
                    <option value="modern">Modern - Elevated</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#059669" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonTextColor" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 section-style" data-style="buttonSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style, globalStyles) => {
        const layoutStyle = style.layoutStyle || 'simple';
        const bgColor = style.bg || '#ffffff';
        const secondaryBg = style.secondaryBg || '#f0fdf4';
        const buttonStyle = style.buttonStyle || 'solid';
        const buttonColor = style.buttonColor || '#059669';
        const buttonTextColor = style.buttonTextColor || '#ffffff';
        const buttonSize = style.buttonSize || 'medium';

        const buttonSizeMap = {
            small: 'px-6 py-2 text-sm',
            medium: 'px-8 py-3 text-base',
            large: 'px-10 py-4 text-lg',
            xlarge: 'px-12 py-5 text-xl'
        };

        const getButtonStyle = () => {
            const sizeClass = buttonSizeMap[buttonSize];
            switch (buttonStyle) {
                case 'solid':
                    return `${sizeClass} rounded-lg font-semibold transition shadow-md hover:shadow-lg`;
                case 'outline':
                    return `${sizeClass} rounded-lg font-semibold border-2 transition hover:shadow-md`;
                case 'gradient':
                    return `${sizeClass} rounded-lg font-semibold transition shadow-md hover:shadow-lg`;
                case 'rounded':
                    return `${sizeClass} rounded-full font-semibold transition shadow-md hover:shadow-lg`;
                case 'modern':
                    return `${sizeClass} rounded-xl font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-1`;
                default:
                    return `${sizeClass} rounded-lg font-semibold transition`;
            }
        };

        const getButtonBackground = () => {
            if (buttonStyle === 'outline') {
                return `background: transparent; color: ${buttonColor}; border-color: ${buttonColor};`;
            } else if (buttonStyle === 'gradient') {
                return `background: linear-gradient(135deg, ${buttonColor} 0%, ${secondaryBg} 100%); color: ${buttonTextColor};`;
            }
            return `background: ${buttonColor}; color: ${buttonTextColor};`;
        };

        const renderContent = () => {
            const content = `
                <h2 class="text-2xl font-bold mb-4">${data.title || 'Register Now'}</h2>
                <p class="text-gray-600 mb-6">${data.message || "Secure your spot at this exciting event"}</p>
                ${data.deadline ? `<p class="text-sm text-gray-500 mb-6">⏰ Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                <button class="${getButtonStyle()}" style="${getButtonBackground()}">
                    ✉️ RSVP Now
                </button>
            `;

            switch (layoutStyle) {
                case 'simple':
                    return `<div class="max-w-md mx-auto text-center">${content}</div>`;

                case 'card':
                    return `
                        <div class="max-w-md mx-auto">
                            <div class="p-8 bg-white rounded-2xl shadow-lg text-center">
                                ${content}
                            </div>
                        </div>
                    `;

                case 'banner':
                    return `
                        <div class="max-w-3xl mx-auto">
                            <div class="p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4" style="border-color: ${buttonColor};">
                                <div class="text-center">
                                    ${content}
                                </div>
                            </div>
                        </div>
                    `;

                case 'gradient':
                    return `
                        <div class="max-w-md mx-auto">
                            <div class="p-8 rounded-2xl shadow-xl text-center" style="background: linear-gradient(135deg, ${bgColor} 0%, ${secondaryBg} 100%);">
                                ${content}
                            </div>
                        </div>
                    `;

                case 'minimal':
                    return `
                        <div class="max-w-lg mx-auto text-center">
                            <h2 class="text-3xl font-light mb-3">${data.title || 'Register Now'}</h2>
                            <p class="text-gray-600 text-lg mb-6">${data.message || "Secure your spot at this exciting event"}</p>
                            ${data.deadline ? `<p class="text-sm text-gray-500 mb-8">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                            <button class="${getButtonStyle()}" style="${getButtonBackground()}">
                                RSVP Now
                            </button>
                        </div>
                    `;

                default:
                    return `<div class="max-w-md mx-auto text-center">${content}</div>`;
            }
        };

        return `
            <div class="py-12 px-6" style="background: ${bgColor}">
                ${renderContent()}
            </div>
        `;
    }`
};
