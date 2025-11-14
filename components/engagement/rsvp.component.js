// RSVP Component for Engagement Announcement

window.sectionComponents = window.sectionComponents || {};

window.sectionComponents.rsvp = {
    name: '✉️ RSVP',
    allowMultiple: false,
    info: (sectionId) => `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Title</label>
                <input type="text" placeholder="Please RSVP" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="title" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea placeholder="Let us know if you can celebrate with us..." rows="2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="message" oninput="updatePreview()"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">RSVP Deadline</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-data" data-field="deadline" oninput="updatePreview()">
            </div>
        </div>
    `,
    style: `
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layout Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="layout" onchange="updatePreview()">
                    <option value="simple">Simple Center</option>
                    <option value="card">Card Style</option>
                    <option value="gradient">Gradient Banner</option>
                    <option value="bordered">Bordered Box</option>
                    <option value="modern">Modern CTA</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="bg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                <input type="color" value="#e11d48" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonBg" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Text Color</label>
                <input type="color" value="#ffffff" class="w-full h-12 rounded-lg cursor-pointer section-style" data-style="buttonText" oninput="updatePreview()">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Size</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="buttonSize" onchange="updatePreview()">
                    <option value="small">Small</option>
                    <option value="medium" selected>Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 section-style" data-style="buttonStyle" onchange="updatePreview()">
                    <option value="solid">Solid</option>
                    <option value="outline">Outline</option>
                    <option value="rounded">Rounded Pill</option>
                </select>
            </div>
        </div>
    `,
    render: (data, style) => {
        const layout = style.layout || 'simple';
        const bg = style.bg || '#ffffff';
        const buttonBg = style.buttonBg || '#e11d48';
        const buttonText = style.buttonText || '#ffffff';
        const buttonSize = style.buttonSize || 'medium';
        const buttonStyle = style.buttonStyle || 'solid';

        const buttonSizes = {
            small: 'px-6 py-2 text-sm',
            medium: 'px-8 py-3 text-base',
            large: 'px-10 py-4 text-lg'
        };

        const buttonStyles = {
            solid: `rounded-lg`,
            outline: `rounded-lg border-2`,
            rounded: `rounded-full`
        };

        const getButtonClass = () => {
            const sizeClass = buttonSizes[buttonSize];
            const styleClass = buttonStyles[buttonStyle];
            if (buttonStyle === 'outline') {
                return `${sizeClass} ${styleClass} font-semibold hover:opacity-80 transition`;
            }
            return `${sizeClass} ${styleClass} font-semibold hover:opacity-90 transition shadow-lg hover:shadow-xl`;
        };

        const getButtonStyles = () => {
            if (buttonStyle === 'outline') {
                return `background: transparent; color: ${buttonBg}; border-color: ${buttonBg};`;
            }
            return `background: ${buttonBg}; color: ${buttonText};`;
        };

        if (layout === 'card') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-lg mx-auto p-8 rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-50">
                        <div class="text-center mb-6">
                            <div class="inline-block p-4 rounded-full mb-4 shadow-md" style="background: ${buttonBg};">
                                <span class="text-4xl">✉️</span>
                            </div>
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 leading-relaxed">${data.message || "Let us know if you can celebrate with us"}</p>
                            ${data.deadline ? `<p class="text-sm text-gray-500 mt-4">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        </div>
                        <button class="${getButtonClass()} w-full" style="${getButtonStyles()}">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        } else if (layout === 'gradient') {
            return `
                <div class="py-16 px-6" style="background: linear-gradient(135deg, ${buttonBg} 0%, ${bg} 100%);">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="text-6xl mb-4">✉️</div>
                        <h2 class="text-4xl font-bold mb-4 text-white">${data.title || 'Please RSVP'}</h2>
                        <p class="text-white text-lg mb-6 opacity-90">${data.message || "Let us know if you can celebrate with us"}</p>
                        ${data.deadline ? `<p class="text-sm text-white opacity-75 mb-8">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        <button class="${getButtonClass()}" style="background: white; color: ${buttonBg};">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        } else if (layout === 'bordered') {
            return `
                <div class="py-12 px-6" style="background: ${bg};">
                    <div class="max-w-lg mx-auto p-10 rounded-3xl border-4 border-double shadow-2xl" style="border-color: ${buttonBg};">
                        <div class="text-center">
                            <div class="text-5xl mb-6">✉️</div>
                            <h2 class="text-3xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <div class="w-20 h-0.5 mx-auto mb-6" style="background: ${buttonBg};"></div>
                            <p class="text-gray-600 mb-6 leading-relaxed">${data.message || "Let us know if you can celebrate with us"}</p>
                            ${data.deadline ? `<p class="text-sm mb-8" style="color: ${buttonBg};">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                            <button class="${getButtonClass()}" style="${getButtonStyles()}">
                                RSVP Now
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (layout === 'modern') {
            return `
                <div class="py-16 px-6" style="background: ${bg};">
                    <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div class="text-6xl mb-4">✉️</div>
                            <h2 class="text-4xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                            <p class="text-gray-600 text-lg leading-relaxed">${data.message || "Let us know if you can celebrate with us"}</p>
                            ${data.deadline ? `<p class="text-sm text-gray-500 mt-4">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        </div>
                        <div class="text-center md:text-right">
                            <button class="${getButtonClass()}" style="${getButtonStyles()}">
                                RSVP Now
                            </button>
                            <p class="text-xs text-gray-500 mt-4">We can't wait to celebrate with you!</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Simple Center (default)
            return `
                <div class="py-12 px-6 text-center" style="background: ${bg};">
                    <div class="max-w-md mx-auto">
                        <h2 class="text-2xl font-bold mb-4">${data.title || 'Please RSVP'}</h2>
                        <p class="text-gray-600 mb-6">${data.message || "Let us know if you can celebrate with us"}</p>
                        ${data.deadline ? `<p class="text-sm text-gray-500 mb-6">Deadline: ${new Date(data.deadline).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>` : ''}
                        <button class="${getButtonClass()}" style="${getButtonStyles()}">
                            RSVP Now
                        </button>
                    </div>
                </div>
            `;
        }
    }
};
